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

/**
 * Deep Telemetry: Scroll Depth Tracking
 * Fires at 25%, 50%, 75%, 100% of page depth
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;
  
  let marks = { 25: false, 50: false, 75: false, 100: false };
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    [25, 50, 75, 100].forEach(mark => {
      if (scrollPercentage >= mark && !marks[mark]) {
        marks[mark] = true;
        pushToDataLayer('scroll_depth', { depth: `${mark}%` });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Deep Telemetry: Dwell Time Tracking
 * Fires when user spends more than 60s, 180s on a page
 */
export const initDwellTimeTracking = () => {
  if (typeof window === 'undefined') return;
  
  const timers = [];
  
  // High-ticket intent benchmarks
  [60, 180, 300].forEach(seconds => {
    const timer = setTimeout(() => {
      pushToDataLayer('dwell_time', { duration: seconds });
    }, seconds * 1000);
    timers.push(timer);
  });

  return () => timers.forEach(clearTimeout);
};
