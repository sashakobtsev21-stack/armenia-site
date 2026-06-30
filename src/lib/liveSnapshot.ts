/**
 * Снапшот «живых» данных для шапки (§8.4): погода в Ереване, Гюмри, Дилижане и на Севане.
 *
 * Это BUILD-TIME слой гибрида: при сборке тянем данные и зашиваем в HTML
 * (мгновенно видно, 0 CLS, работает без JS). Клиент потом обновляет свежими
 * значениями (/js/live-data.js). Любой сбой источника → null → в UI «—», сборка
 * не падает (try/catch + таймаут). Кэш на уровне модуля: один fetch на сборку,
 * даже если компонент рендерится на нескольких страницах.
 *
 * Источник: open-meteo (погода, без ключей, CORS ok). Армения внутриконтинентальная
 * (моря нет) → показываем 4 точки-базы, включая курортный Дилижан и озеро Севан,
 * а НЕ температуру воды (marine-API внутренние водоёмы не покрывает).
 */

export interface LiveSnapshot {
  air: {
    yerevan: number | null;
    gyumri: number | null;
    dilijan: number | null;
    sevan: number | null;
  };
}

// Ереван, Гюмри, Дилижан, Севан (4 точки в одном запросе open-meteo).
const AIR_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=40.1792,40.7894,40.7406,40.5497&longitude=44.4991,43.8475,44.8628,44.9489&current=temperature_2m';

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
  const air = await jget(AIR_URL);
  const airArr = Array.isArray(air) ? air : [];
  return {
    air: {
      yerevan: temp(airArr[0]),
      gyumri: temp(airArr[1]),
      dilijan: temp(airArr[2]),
      sevan: temp(airArr[3]),
    },
  };
}
