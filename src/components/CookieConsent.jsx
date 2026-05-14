import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr_consent');
    if (consent === null) {
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr_consent', 'true');
    setShow(false);
    // Ping pixel initialization if needed
    if (typeof window !== 'undefined' && window.fbq) {
       window.fbq('consent', 'grant');
    }
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr_consent', 'false');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:w-[420px] bg-[#0b1626]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 z-[100] text-white">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-prime flex items-center justify-center border border-white/10 shrink-0">
           <ShieldCheck size={20} className="text-accent" />
        </div>
        <div>
           <h3 className="font-serif font-bold text-lg text-white leading-tight">Securitatea Datelor Tale (GDPR)</h3>
           <p className="text-xs text-accent uppercase tracking-widest font-bold mt-1">Conformitate Europeană</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm font-sans mb-6 leading-relaxed">
        Folosim tehnologii (inclusiv Meta Pixel & CAPI) pentru a-ți personaliza experiența, a analiza traficul și pentru a-ți oferi oferte relevante cu confidențialitate absolută.
      </p>
      <div className="flex space-x-3">
        <button onClick={handleAccept} className="flex-1 bg-gradient-to-r from-prime to-[#112440] hover:from-accent hover:to-accent border border-white/10 transition-all duration-300 py-3 rounded-xl font-bold text-sm shadow-lg text-white">
          Acceptă Tot
        </button>
        <button onClick={handleDecline} className="flex-1 bg-transparent border border-white/20 hover:bg-white/5 transition-all duration-300 py-3 rounded-xl font-bold text-sm text-gray-400 hover:text-white">
          Refuză
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
