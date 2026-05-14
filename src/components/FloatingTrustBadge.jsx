import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FloatingTrustBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-24 right-4 md:right-6 z-[2500] transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
       <div className="bg-prime/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-4 shadow-2xl flex items-center gap-3 md:gap-4 group hover:bg-prime transition-all">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-accent flex items-center justify-center text-prime shadow-lg group-hover:scale-110 transition-transform">
             <ShieldCheck size={20} className="md:w-7 md:h-7" />
          </div>
          <div>
             <div className="flex items-center gap-1.5 mb-0.5 md:mb-1">
                <Award size={10} className="text-accent md:w-3 md:h-3" />
                <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest">{isEn ? "Verified Authority" : "Autoritate Verificată"}</span>
             </div>
             <p className="text-[10px] md:text-xs text-gray-300 font-medium whitespace-nowrap">
                {isEn ? "International Medical Board" : "Consiliul Medical Internațional"}
             </p>
          </div>
       </div>
    </div>
  );
};

export default FloatingTrustBadge;
