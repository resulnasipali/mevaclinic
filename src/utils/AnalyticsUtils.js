/**
 * Utility functions for managing Google Tag Manager and Analytics data layers.
 */

export const pushToDataLayer = (event, data = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...data,
      timestamp: new Date().toISOString()
    });
  }
};
