// @ts-nocheck
import { tUI } from '@/utils/uiTranslations';
import React from 'react';
import { Heart, Star, ShieldCheck } from 'lucide-react';

const SocialProof = ({ lang = 'en' }: { lang?: string }) => {
  const testimonials = [
    { name: "Andrei M.", text: tUI("I chose Meva for the S7 tech, but I was impressed by the team's warmth.", lang) },
    { name: "Elena S.", text: tUI("The Romanian coordination made everything feel like home in Istanbul.", lang) },
    { name: "Mihai D.", text: tUI("Professionalism at its peak. The JCI standards are visible in every detail.", lang) },
    { name: "Oana P.", text: tUI("From Bucharest to Istanbul, the journey was seamless and stress-free.", lang) }
  ];

  return (
    <div className="bg-prime py-12 overflow-hidden border-y border-white/5 relative group">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-prime to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-prime to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="inline-flex items-center gap-6 group/item">
             <div className="flex items-center gap-2">
                <Heart size={16} className="text-accent fill-accent" />
                <div className="flex">
                   {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-accent fill-accent" />)}
                </div>
             </div>
             <p className="text-white/90 text-lg font-serif italic tracking-wide">
                "{t.text}"
             </p>
             <div className="flex items-center gap-2">
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">— {t.name}</span>
                <ShieldCheck size={12} className="text-white/20" />
             </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SocialProof;
