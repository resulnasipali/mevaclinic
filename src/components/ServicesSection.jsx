import React from 'react';
import { usePopularTreatments } from '../hooks/usePopularTreatments';
import { ArrowRight, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const OptimizedImage = ({ src, title, className, isEn }) => {
  return (
    <img 
      src={src} 
      alt={isEn ? `Medical treatment: ${title}` : `Imagine pentru tratament medical: ${title}`} 
      aria-label={isEn ? `Medical treatment: ${title}` : `Imagine pentru tratament medical: ${title}`} 
      className={className} 
      loading="lazy"
    />
  );
};

const ServicesSection = () => {
  const { treatments, trackClick } = usePopularTreatments();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  return (
    <section className="py-24 bg-white" id="tratamente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
           <div className="max-w-2xl">
             <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-prime/5 border border-prime/10 text-prime text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
                <span>{isEn ? "Medical Solutions" : "Soluții Medicale"}</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">{isEn ? "Top Treatments" : "Tratamente de Top"}</h2>
             <p className="text-gray-500 font-sans text-lg">
               {isEn 
                  ? "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures."
                  : "Lista de mai jos se ordonează automat în funcție de interesul celorlalți pacienți, aducând în prim plan cele mai solicitate proceduri la nivel internațional."}
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <Link 
              key={t.id} 
              to={isEn ? `/en/packages/${t.slug_en}` : `/ro/pachete/${t.slug_ro}`}
              className="bg-white rounded-3xl shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 p-8 transition-all duration-300 transform group hover:-translate-y-2 hover:shadow-2xl flex flex-col hover:border-prime/20"
              onClick={() => trackClick(t.id)}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-prime/5 to-prime/10 rounded-2xl flex items-center justify-center text-prime mb-8 group-hover:from-prime group-hover:to-[#112440] group-hover:text-white transition-all duration-500 shadow-sm">
                <Activity size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-prime mb-3 group-hover:text-accent transition-colors">{isEn ? t.title_en : t.title}</h3>
              <p className="text-sm text-gray-500 font-sans mb-8 leading-relaxed flex-grow">{isEn ? t.description_en : t.description}</p>
              
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-prime transition-colors w-full">
                 <span className="uppercase tracking-wider text-xs border-b border-transparent group-hover:border-accent group-hover:text-accent transition-colors pb-0.5">
                    {isEn ? "Discover Package" : "Descoperă Pachetul"}
                 </span> 
                 <div className="w-10 h-10 rounded-full bg-prime/5 flex items-center justify-center text-prime group-hover:bg-accent group-hover:text-[#0b1626] transition-all duration-300 shadow-sm relative">
                   <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent animate-ping opacity-0 group-hover:opacity-30"></div>
                   <ArrowRight size={18} className="transform group-hover:translate-x-1 group-hover:scale-110 transition-all" />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
