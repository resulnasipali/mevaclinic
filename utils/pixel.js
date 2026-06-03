/**
 * Meta Pixel / Facebook Pixel tracker.
 * Safe wrapper — never throws, requires GDPR consent.
 */
export const PxTrack = (eventName, data = {}) => {
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
    // Silently ignore — tracking must never break the UI
  }
};
