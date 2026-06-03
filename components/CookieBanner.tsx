'use client';

import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tUI } from '@/utils/uiTranslations';

const CookieBanner = ({ lang = 'en' }: { lang?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isEn = lang === 'en';

  useEffect(() => {
    const consent = localStorage.getItem('meva-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('meva-cookie-consent', 'accepted');
    window.dispatchEvent(new Event('cookie-consent-granted'));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-[2000] animate-fade-up">
      <div className="bg-[#0b1626]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4 text-amber-500">
           <Shield size={24} />
           <span className="font-bold text-xs uppercase tracking-widest">{tUI("Privacy Center", lang)}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-white mb-3">
           {tUI("Respecting your medical journey", lang)}
        </h3>
        
        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
           {tUI("We use cookies to enhance your clinical experience and analyze our authority hub traffic. By clicking 'Accept All', you consent to our use of cookies.", lang)}
           {" "}
           <Link href={`/${lang}/privacy-policy`} className="text-amber-500 underline hover:text-white transition-colors">
              {tUI("View Policy", lang)}
           </Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
           <button 
             onClick={handleAccept}
             className="flex-grow bg-amber-500 text-[#0b1626] font-bold py-3.5 px-6 rounded-xl hover:bg-white transition-all text-sm flex items-center justify-center gap-2"
           >
              {tUI("Accept All", lang)} <ChevronRight size={16} />
           </button>
           <button 
             onClick={() => setIsVisible(false)}
             className="px-6 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all"
           >
              {tUI("Settings", lang)}
           </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
