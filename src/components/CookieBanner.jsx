import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    const consent = localStorage.getItem('meva-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('meva-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-[2000] animate-fade-up">
      <div className="bg-[#0b1626]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4 text-accent">
           <Shield size={24} />
           <span className="font-bold text-xs uppercase tracking-widest">{isEn ? "Privacy Center" : "Centru de Confidențialitate"}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-white mb-3">
           {isEn ? "Respecting your medical journey" : "Respectăm călătoria ta medicală"}
        </h3>
        
        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
           {isEn 
             ? "We use cookies to enhance your clinical experience and analyze our authority hub traffic. By clicking 'Accept All', you consent to our use of cookies." 
             : "Folosim cookie-uri pentru a îmbunătăți experiența ta clinică și a analiza traficul hub-ului nostru. Apăsând 'Acceptă Tot', ești de acord cu utilizarea acestora."}
           {" "}
           <Link to={isEn ? "/en/privacy-policy" : "/ro/politica-confidentialitate"} className="text-accent underline hover:text-white transition-colors">
              {isEn ? "View Policy" : "Vezi Politica"}
           </Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
           <button 
             onClick={handleAccept}
             className="flex-grow bg-accent text-prime font-bold py-3.5 px-6 rounded-xl hover:bg-white transition-all text-sm flex items-center justify-center gap-2"
           >
              {isEn ? "Accept All" : "Acceptă Tot"} <ChevronRight size={16} />
           </button>
           <button 
             onClick={() => setIsVisible(false)}
             className="px-6 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all"
           >
              {isEn ? "Settings" : "Setări"}
           </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
