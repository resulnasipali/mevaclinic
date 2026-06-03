// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { usePathname } from 'next/navigation';

const TestimonialsGrid = ({ lang = 'en' }: { lang?: string }) => {
  const pathname = usePathname();

  const testimonials = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1512413914564-9279093bf8fa?auto=format&fit=crop&q=80&w=800", // Dramatic weight loss / fitness transformation look
      quoteEn: "Meva Clinic changed my life! I lost 45kg and feel like a completely new person.",
      quoteRo: "Meva Clinic mi-a schimbat viața! Am slăbit 45kg și mă simt ca o persoană complet nouă.",
      name: "Maria D.",
      treatmentEn: "Gastric Sleeve",
      treatmentRo: "Gastric Sleeve"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", // Handsome man, good hair
      quoteEn: "Unbelievable results. My hairline is back, 100% natural and painless procedure.",
      quoteRo: "Rezultate incredibile. Părul meu a revenit, procedură 100% naturală și fără durere.",
      name: "Andrei V.",
      treatmentEn: "Hair Transplant",
      treatmentRo: "Implant de Păr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", // Beautiful confident woman
      quoteEn: "The mommy makeover gave me my pre-pregnancy body and confidence back.",
      quoteRo: "Operația Mommy Makeover mi-a redat corpul de dinainte de sarcină și încrederea.",
      name: "Elena S.",
      treatmentEn: "Mommy Makeover",
      treatmentRo: "Mommy Makeover"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
            {tUI("Patient Success Stories", lang)}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2">
              <div className="aspect-[3/4] md:aspect-[4/5] w-full relative">
                <Image 
                  src={item.image} 
                  alt={`${item.name} - ${item.treatmentEn} patient testimonial at Meva Clinic Istanbul`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:bg-accent/90 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="flex mb-3 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-medium text-lg mb-2 italic">"{tUI(item.quoteEn, lang)}"</p>
                  <div className="flex items-center justify-between border-t border-white/20 pt-3 mt-3">
                    <span className="font-bold text-sm tracking-wide">{item.name}</span>
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded font-bold">{tUI(item.treatmentEn, lang)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
