// @ts-nocheck
'use client';

import React from 'react';
import { usePopularTreatments } from '../hooks/usePopularTreatments';
import { ArrowRight, Activity, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { tUI } from '@/utils/uiTranslations';

const ServicesSection = ({ lang = 'en' }: { lang?: string }) => {
  const { treatments, trackClick } = usePopularTreatments();

  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden" id="tratamente">
      {/* Background Decorative Gradients for VIP Feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#002D62]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 flex flex-col items-center text-center">
           <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <Sparkles size={14} className="fill-[#C5A059]" />
              <span>{tUI("Medical Solutions", lang)}</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002D62] mb-6 tracking-tight">
             {tUI("Top Treatments", lang)}
           </h2>
           <p className="text-gray-500 font-sans text-lg max-w-2xl leading-relaxed">
             {tUI("The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures.", lang)}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((t, index) => (
            <Link 
              key={t.id} 
              href={`/${lang}/treatments/${t.slug_en || t.id.replace('_', '-')}`}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col transition-all duration-500 hover:-translate-y-3"
              onClick={() => trackClick(t.id)}
            >
              {/* Glassmorphism Border & Shadow */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/60 group-hover:border-[#C5A059]/40 transition-colors duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgb(197,160,89,0.15)] transition-shadow duration-500 pointer-events-none"></div>
              
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex-grow flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002D62]/5 to-[#002D62]/10 rounded-2xl flex items-center justify-center text-[#002D62] mb-8 group-hover:from-[#C5A059] group-hover:to-[#b08b49] group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_10px_20px_rgb(197,160,89,0.3)] group-hover:scale-110 group-hover:rotate-3 origin-center">
                  <Activity size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#002D62] mb-4 group-hover:text-[#C5A059] transition-colors">{tUI(t.title_en, lang)}</h3>
                <p className="text-sm text-gray-500 font-sans mb-8 leading-relaxed flex-grow">{tUI(t.description_en, lang)}</p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-[#C5A059]/20 flex items-center justify-between text-sm font-bold text-[#002D62] transition-colors w-full">
                   <span className="uppercase tracking-[0.15em] text-[11px] border-b border-transparent group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors pb-1">
                      {tUI("Discover Package", lang)}
                   </span> 
                   <div className="w-10 h-10 rounded-full bg-[#002D62]/5 flex items-center justify-center text-[#002D62] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500 relative">
                     <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#C5A059] animate-ping opacity-0 group-hover:opacity-40"></div>
                     <ArrowRight size={18} className="transform group-hover:translate-x-1 group-hover:scale-110 transition-all" />
                   </div>
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
