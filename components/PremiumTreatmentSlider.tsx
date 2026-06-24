// @ts-nocheck
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronLeft, ChevronRight, ShieldCheck, Star, Activity, Phone } from 'lucide-react';
import treatmentsData from '../data/premiumTreatmentsData.json';
import { getWhatsAppLink } from '../utils/whatsappRouter';
import { tUI } from '@/utils/uiTranslations';

const PremiumTreatmentSlider = ({ lang = 'en' }: { lang?: string }) => {
  const scrollContainerRef = useRef(null);
  const pathname = usePathname();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Determine language context based on current route
  const isEn = lang === 'en';
  const locale = lang;

  // Fallback text dictionary to prevent runtime exceptions
  const copy = {
    discover: tUI("DISCOVER PACKAGE", lang),
    waConsult: tUI("CONSULT NOW", lang),
    essential: tUI("Essential", lang),
    comfort: tUI("Full Comfort", lang),
    vip: tUI("Grand VIP Experience", lang)
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Math.ceil deals with fractional scroll values causing glitches
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Scroll by one card width roughly
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const safeLocalize = (field, loc) => {
    if (!field) return '';
    if (typeof field === 'object' && !Array.isArray(field)) {
      return field[loc] || field['en'] || '';
    }
    return field;
  };

  const safeArrayLocalize = (arrObj, loc) => {
    if (!arrObj) return [];
    if (Array.isArray(arrObj)) return arrObj;
    if (typeof arrObj === 'object') {
      return arrObj[loc] || arrObj['en'] || [];
    }
    return [];
  };

  return (
    <section className="py-12 md:py-24 bg-[#002D62] text-white relative overflow-hidden" id="premium-treatments">
      {/* Luxurious background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0b1626]/80 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-12 border-b border-white/10 pb-6 md:pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4">
              <Star size={14} className="fill-[#C5A059]" />
              {tUI("Premium Patient Services", lang)}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4 drop-shadow-md">
              {tUI("Curated VIP Packages", lang)}
            </h2>
            <p className="text-gray-300 font-sans text-base md:text-lg">
              {tUI("Experience absolute peace of mind. Every treatment comes with JCI-accredited care, 5-star Bosphorus hotels, and luxury transfers included.", lang)}
            </p>
          </div>
          
          {/* Slider Controls (Desktop only) */}
          <div className="hidden md:flex gap-3 mt-8 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${canScrollLeft ? 'bg-[#C5A059] text-[#002D62] hover:bg-white' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${canScrollRight ? 'bg-[#C5A059] text-[#002D62] hover:bg-white' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 pb-6 pt-4 px-2 -mx-2 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {treatmentsData.map((treatment) => {
            const title = safeLocalize(treatment.title, locale);
            const subtitle = safeLocalize(treatment.subtitle, locale);
            const badges = safeArrayLocalize(treatment.logisticalBadges, locale);
            const waLink = getWhatsAppLink(treatment.slug, locale);
            
            // Route to treatments detail page instead of non-existent packages page
            const packagePath = `/${locale}/treatments/${treatment.slug}`;
            
            return (
              <div 
                key={treatment.slug} 
                className="snap-start shrink-0 w-[82vw] md:w-[420px] flex flex-col bg-[#0b1626]/80 backdrop-blur-xl rounded-[1.8rem] md:rounded-[2.5rem] border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-[#C5A059]/50 hover:shadow-[0_0_50px_rgb(197,160,89,0.15)] md:hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle Glow Behind the Card */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Card Top / Header */}
                <div className="p-6 md:p-10 pb-6 md:pb-8 border-b border-white/5 relative z-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/5 rounded-full blur-[40px] group-hover:bg-[#C5A059]/20 transition-colors duration-500 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                  <div className="relative">
                    <Activity size={26} className="text-[#C5A059] mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 origin-left" strokeWidth={1.5} />
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 md:mb-3 group-hover:text-[#C5A059] transition-colors duration-300 line-clamp-2 min-h-[60px] md:min-h-[72px]">{tUI(title, lang)}</h3>
                    <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed line-clamp-3 min-h-[54px] md:min-h-[66px]">{tUI(subtitle, lang)}</p>
                  </div>
                </div>
                
                {/* Badges / Logistics */}
                <div className="p-6 md:p-8 flex-grow">
                  <div className="space-y-3">
                    {badges.slice(0, 3).map((badge, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <ShieldCheck size={16} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span>{tUI(badge, lang)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer / CTAs */}
                <div className="p-6 md:p-10 pt-0 md:pt-0 flex flex-col sm:flex-row gap-3 md:gap-4 relative z-10">
                  <Link 
                    href={packagePath}
                    className="flex-1 bg-white/5 border border-white/10 hover:border-[#C5A059]/50 hover:bg-[#C5A059]/10 text-white hover:text-[#C5A059] py-3 md:py-4 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 block shadow-sm whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {copy.discover}
                  </Link>
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      import('../utils/pixel').then(({ PxTrack }) => PxTrack('Contact', { type: 'whatsapp_premium', treatment: treatment.slug }));
                      import('../utils/AnalyticsUtils').then(({ pushToDataLayer }) => pushToDataLayer('whatsapp_click', { location: 'premium_slider', treatment: treatment.slug }));
                    }}
                    className="flex-1 bg-gradient-to-r from-[#C5A059] to-[#b08b49] hover:from-[#d1b173] hover:to-[#C5A059] text-[#002D62] py-3 md:py-4 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_10px_20px_rgb(197,160,89,0.2)] hover:shadow-[0_15px_30px_rgb(197,160,89,0.4)] md:hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <Phone size={14} className="fill-[#002D62] flex-shrink-0" /> 
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">{copy.waConsult}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Slider Navigation Controls */}
        <div className="flex md:hidden justify-center gap-4 mt-2">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollLeft ? 'bg-[#C5A059] text-[#002D62]' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight ? 'bg-[#C5A059] text-[#002D62]' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PremiumTreatmentSlider;
