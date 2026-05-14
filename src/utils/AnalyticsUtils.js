/**
 * Utility functions for Google Tag Manager dataLayer — SAFE for all environments.
 * Works even when GTM script is not loaded (ENV missing, ad blocker, etc.)
 */

export const pushToDataLayer = (event, data = {}) => {
  try {
    if (typeof window === 'undefined') return; // SSR guard
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...data,
      timestamp: new Date().toISOString()
    });
  } catch {
    // Silently ignore — tracking must never break the UI
  }
};

/**
 * Safe Meta Pixel / Facebook Pixel tracker.
 * Requires GDPR consent and fbq to be loaded.
 */
export const trackPixelEvent = (eventName, data = {}) => {
  try {
    if (typeof window === 'undefined') return;
    const consent = window.localStorage?.getItem('gdpr_consent') === 'true';
    if (!consent) return;
    if (typeof window.fbq !== 'function') return;
    if (eventName === 'Lead' || eventName === 'Contact') {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('trackCustom', eventName, data);
    }
  } catch {
    // Silently ignore
  }
};
