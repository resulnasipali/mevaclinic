'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with real GA4 ID
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Replace with real Meta Pixel ID

export default function Analytics() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    // Check initial consent status
    const consent = localStorage.getItem('meva-cookie-consent');
    if (consent === 'accepted') {
      setConsentGranted(true);
    }
    
    // Listen for custom event when user clicks Accept in CookieBanner
    const handleConsentEvent = () => setConsentGranted(true);
    window.addEventListener('cookie-consent-granted', handleConsentEvent);
    
    return () => window.removeEventListener('cookie-consent-granted', handleConsentEvent);
  }, []);

  if (!consentGranted) return null;

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
