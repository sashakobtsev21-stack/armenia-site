/**
 * Снапшот «живых» данных для шапки (§8.4): погода в Ереване, Гюмри, Дилижане и
 * на Севане + курс драма к евро/доллару/фунту/рублю.
 *
 * Это BUILD-TIME слой гибрида: при сборке тянем данные и зашиваем в HTML
 * (мгновенно видно, 0 CLS, работает без JS). Клиент потом обновляет свежими
 * значениями (/js/live-data.js). Любой сбой источника → null → в UI «—», сборка
 * не падает (try/catch + таймаут). Кэш на уровне модуля: один fetch на сборку,
 * даже если компонент рендерится на нескольких страницах.
 *
 * Источники (без ключей, CORS ok): open-meteo (погода), open.er-api.com (курс,
 * ECB-данные). Армения внутриконтинентальная (моря нет) → показываем 4 точки-базы,
 * включая курортный Дилижан и озеро Севан, а НЕ температуру воды (marine-API
 * внутренние водоёмы не покрывает). Валюта Армении — драм (AMD): показываем,
 * сколько ДРАМОВ стоит 1 € / 1 $ / 1 £ / 100 ₽ (рубль релевантен — много
 * русскоязычных гостей и релокантов). Цифры не выдумываем (CLAUDE правило 4):
 * нет данных — поле пустое.
 */

export interface LiveSnapshot {
  air: {
    yerevan: number | null;
    gyumri: number | null;
    dilijan: number | null;
    sevan: number | null;
  };
  /** Курс: сколько ДРАМОВ (AMD) за единицу валюты (EUR/USD/GBP — за 1, RUB — за 100). */
  fx: { eur: number | null; usd: number | null; gbp: number | null; rub: number | null };
}

// Ереван, Гюмри, Дилижан, Севан (4 точки в одном запросе open-meteo).
const AIR_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=40.1792,40.7894,40.7406,40.5497&longitude=44.4991,43.8475,44.8628,44.9489&current=temperature_2m';
// Курс: база — драм (AMD), ECB-данные, без ключа. rates[X] = X за 1 AMD → инвертируем.
const FX_URL = 'https://open.er-api.com/v6/latest/AMD';

async function jget(url: string, ms = 6000): Promise<unknown> {
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), ms);
    const res = await fetch(url, { signal: ctl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

const temp = (loc: unknown): number | null => {
  const c = (loc as { current?: { temperature_2m?: unknown } } | null)?.current?.temperature_2m;
  return typeof c === 'number' ? c : null;
};

let cached: Promise<LiveSnapshot> | null = null;

export function getLiveSnapshot(): Promise<LiveSnapshot> {
  if (!cached) cached = build();
  return cached;
}

async function build(): Promise<LiveSnapshot> {
  const [air, fx] = await Promise.all([jget(AIR_URL), jget(FX_URL)]);

  const airArr = Array.isArray(air) ? air : [];

  // open.er-api.com (база AMD): { rates: { EUR, USD, GBP, RUB, ... } } — единиц
  // валюты за 1 драм. Нам нужно обратное: сколько ДРАМОВ за единицу валюты
  // (за 100 ₽ — кратно). amdPer(X) = qty / rates[X].
  const rates =
    (fx as { rates?: Record<string, number> } | null)?.rates &&
    typeof (fx as { rates?: Record<string, number> }).rates === 'object'
      ? (fx as { rates: Record<string, number> }).rates
      : {};
  const amdPer = (code: string, qty = 1): number | null => {
    const r = rates[code];
    return typeof r === 'number' && r > 0 ? qty / r : null;
  };

  return {
    air: {
      yerevan: temp(airArr[0]),
      gyumri: temp(airArr[1]),
      dilijan: temp(airArr[2]),
      sevan: temp(airArr[3]),
    },
    fx: {
      eur: amdPer('EUR'),
      usd: amdPer('USD'),
      gbp: amdPer('GBP'),
      rub: amdPer('RUB', 100),
    },
  };
}
