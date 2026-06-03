'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { tUI } from '@/utils/uiTranslations';

type BeforeAfterGalleryProps = {
  cases: { beforeImg: string; afterImg: string; title: string; desc: string }[];
  isEn: boolean;
};

export default function BeforeAfterGallery({ cases, isEn, lang = 'en' }: BeforeAfterGalleryProps & { lang?: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!cases || cases.length === 0) return null;

  const currentCase = cases[activeIdx];

  return (
    <div className="w-full my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0b1626] font-bold mb-4">
          {tUI("Transformations That Speak", lang)}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          {tUI("Real patients, real results. Witness the artistic precision of our medical team.", lang)}
        </p>
      </div>

      <div className="bg-white p-4 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden group aspect-square md:aspect-[4/5] bg-gray-100">
            {/* We will use placeholder images if none provided */}
            <img 
              src={currentCase.beforeImg || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"} 
              alt="Before" 
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[#0b1626] font-bold text-sm uppercase tracking-wider shadow-lg">
              {tUI("Before", lang)}
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden group aspect-square md:aspect-[4/5] bg-gray-100">
            <img 
              src={currentCase.afterImg || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"} 
              alt="After" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">
              {tUI("After", lang)}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0b1626]/80 to-transparent">
              <h3 className="text-white font-bold text-xl mb-1">{currentCase.title}</h3>
              <p className="text-white/80 text-sm">{currentCase.desc}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {cases.length > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {cases.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === activeIdx ? 'bg-amber-500 w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
