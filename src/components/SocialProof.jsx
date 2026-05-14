import React from 'react';
import { Heart, Star, ShieldCheck } from 'lucide-react';

const SocialProof = ({ isEn = false }) => {
  const testimonials = [
    { name: "Andrei M.", text: isEn ? "I chose Meva for the S7 tech, but I was impressed by the team's warmth." : "Am ales Meva pentru tehnologia S7, dar am rămas impresionat de căldura echipei." },
    { name: "Elena S.", text: isEn ? "The Romanian coordination made everything feel like home in Istanbul." : "Coordonarea în limba română a făcut ca totul să pară ca acasă în Istanbul." },
    { name: "Mihai D.", text: isEn ? "Professionalism at its peak. The JCI standards are visible in every detail." : "Profesionalism la superlativ. Standardele JCI sunt vizibile în fiecare detaliu." },
    { name: "Oana P.", text: isEn ? "From Bucharest to Istanbul, the journey was seamless and stress-free." : "De la București la Istanbul, călătoria a fost fără cusur și fără stres." }
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-social {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee-social 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default SocialProof;
