import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShieldCheck, Star, Activity, Phone } from 'lucide-react';
import treatmentsData from '../data/premiumTreatmentsData.json';
import { getWhatsAppLink } from '../utils/whatsappRouter';

const PremiumTreatmentSlider = () => {
  const scrollContainerRef = useRef(null);
  const location = useLocation();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Determine language context based on current route
  const isEn = location.pathname.startsWith('/en');
  const locale = isEn ? 'en' : 'ro';

  // Fallback text dictionary to prevent runtime exceptions
  const copy = {
    discover: isEn ? "DISCOVER PACKAGE" : "DESCOPERĂ PACHETUL",
    waConsult: isEn ? "CONSULT NOW" : "CONSULTĂ ACUM",
    essential: isEn ? "Essential" : "Esențial",
    comfort: isEn ? "Full Comfort" : "Confort Complet",
    vip: isEn ? "Grand VIP Experience" : "Experiență Grand VIP"
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
    <section className="py-24 bg-[#002D62] text-white relative overflow-hidden" id="premium-treatments">
      {/* Luxurious background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0b1626]/80 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4">
              <Star size={14} className="fill-[#C5A059]" />
              {isEn ? "Premium Logistics" : "Logistică Premium"}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-md">
              {isEn ? "Curated VIP Packages" : "Pachete VIP Personalizate"}
            </h2>
            <p className="text-gray-300 font-sans text-lg">
              {isEn 
                ? "Experience absolute peace of mind. Every treatment comes with JCI-accredited care, 5-star Bosphorus hotels, and luxury transfers included."
                : "Experimentați liniștea absolută. Fiecare tratament include îngrijire acreditată JCI, hoteluri de 5 stele pe Bosfor și transferuri de lux."}
            </p>
          </div>
          
          {/* Slider Controls */}
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
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-2 -mx-2 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {treatmentsData.map((treatment) => {
            const title = safeLocalize(treatment.title, locale);
            const subtitle = safeLocalize(treatment.subtitle, locale);
            const badges = safeArrayLocalize(treatment.logisticalBadges, locale);
            const waLink = getWhatsAppLink(treatment.slug, locale);
            
            // Derive package link with fallback based on locale
            const packagePath = locale === 'en' 
              ? `/en/packages/${treatment.slug}` 
              : `/ro/pachete/${treatment.slug}`;
            
            return (
              <div 
                key={treatment.slug} 
                className="snap-start shrink-0 w-[340px] md:w-[420px] flex flex-col bg-[#0b1626] rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#C5A059]/40 transition-all duration-300 group"
              >
                {/* Card Top / Header */}
                <div className="p-8 pb-6 border-b border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-2xl group-hover:bg-[#C5A059]/10 transition-colors" />
                  <div className="relative z-10">
                    <Activity size={28} className="text-[#C5A059] mb-6" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">{subtitle}</p>
                  </div>
                </div>
                
                {/* Badges / Logistics */}
                <div className="p-8 flex-grow">
                  <div className="space-y-3">
                    {badges.slice(0, 3).map((badge, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <ShieldCheck size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-300">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer / CTAs */}
                <div className="p-8 pt-0 mt-auto flex flex-col gap-3">
                  <Link 
                    to={packagePath}
                    // Fallback onClick if routing fails? Standard React Router handles 404s, but we can't intercept easily without history.
                    // The path /packages/:slug is robust now.
                    className="w-full py-4 rounded-xl bg-white/5 text-white font-bold text-xs uppercase tracking-widest text-center border border-white/10 hover:bg-[#C5A059] hover:text-[#002D62] hover:border-[#C5A059] transition-all"
                  >
                    {copy.discover}
                  </Link>
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors"
                  >
                    <Phone size={14} />
                    {copy.waConsult}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      
      {/* Hide scrollbar styles injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default PremiumTreatmentSlider;
