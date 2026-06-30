/*
 * Google Analytics 4 — инициализация (G-PENDING-ARMENIA — ПЛЕЙСХОЛДЕР).
 * ⚠️ Владелец заводит реальное GA4-свойство и подставляет measurement ID ДО запуска
 *    (здесь + в BaseLayout loader-URL). Off-domain → реальная статистика пока не нужна.
 * Consent Mode v2: по умолчанию всё denied — GA не пишет cookies до согласия.
 * Баннер CookieConsent поднимает analytics_storage до 'granted' при Accept.
 * Внешний файл (script-src 'self'), чтобы CSP не требовал sha256 для inline GA.
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
});
try {
  if (localStorage.getItem('am-consent') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {
  /* localStorage unavailable — stay denied */
}
gtag('js', new Date());
gtag('config', 'G-PENDING-ARMENIA');
