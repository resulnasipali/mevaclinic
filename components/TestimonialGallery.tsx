// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';

import React, { useState } from 'react';
import { Play, Quote, MessageCircle, Star, Heart } from 'lucide-react';
import Image from 'next/image';

const TestimonialGallery = ({ lang = 'en' }: { lang?: string }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Andrei Popescu",
      procedure: tUI("Gastric Sleeve", lang),
      quote: tUI("Meva Clinic gave me a second life. The care in Istanbul was beyond premium.", lang),
      videoThumb: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Elena Ionescu",
      procedure: tUI("Rhinoplasty", lang),
      quote: tUI("Fear disappeared the moment I met the Romanian support team.", lang),
      videoThumb: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime/5 border border-prime/10 text-prime text-[10px] font-bold uppercase tracking-widest mb-4">
             <MessageCircle size={14} className="text-accent" />
             {tUI("Real Patient Stories", lang)}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6">
             {tUI("The Emotional Journey", lang)}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
             {tUI("From the initial fear to the joy of transformation. Listen to our patients from Romania share their Meva experience.", lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
               <div className="md:w-1/2 relative group cursor-pointer" onClick={() => setActiveVideo(t.id)}>
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                     <Image src={t.videoThumb} alt={t.name} aria-label={`${t.name} Testimonial Video`} fill={true} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-prime/20 group-hover:bg-prime/40 transition-colors z-10"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                     <div className="w-16 h-16 rounded-full bg-white text-prime flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={24} className="fill-prime ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest text-center">
                        {tUI("Watch Story", lang)}
                     </div>
                  </div>
               </div>

               <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex gap-1 mb-6">
                     {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-accent fill-accent" />)}
                  </div>
                  <Quote className="text-accent/20 mb-4" size={48} />
                  <p className="text-xl font-serif font-bold text-prime mb-6 italic leading-relaxed">
                     "{t.quote}"
                  </p>
                  <div className="mt-auto">
                     <h4 className="font-bold text-prime text-lg">{t.name}</h4>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.procedure}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Cinematic Preview Section */}
        <div className="mt-24 reveal">
           <div className="bg-prime rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 opacity-20 transition-transform duration-[10s] group-hover:scale-110">
                 <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" alt="Meva Clinic Interior Premium Facilities" aria-label="Meva Clinic Interior Premium Facilities" fill={true} className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-prime via-prime/80 to-transparent z-10"></div>
              
              <div className="relative z-20 max-w-2xl">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-prime text-[9px] font-bold uppercase tracking-widest mb-6">
                    <Heart size={12} />
                    {tUI("Cinematic Experience", lang)}
                 </div>
                 <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                    {tUI("A Day at Meva Clinic", lang)}
                 </h3>
                 <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    {tUI("Witness the harmony of high-tech medicine and human care. Take a virtual journey through our labs, surgery suites, and patient recovery zones.", lang)}
                 </p>
                 <button className="bg-accent text-prime font-bold py-5 px-12 rounded-2xl flex items-center gap-4 hover:bg-white transition-all shadow-xl">
                    <Play size={20} className="fill-prime" />
                    {tUI("Play Clinical Briefing", lang)}
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialGallery;
