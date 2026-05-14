export const PxTrack = (eventName, data = {}) => {
  const consent = localStorage.getItem('gdpr_consent') === 'true';
  if (!consent) return; // Block tracking if no consent

  if (typeof window !== 'undefined' && window.fbq) {
    if (eventName === 'Lead' || eventName === 'Contact') {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('trackCustom', eventName, data);
    }
  } else {
    // Development mockup logging
  }
};
