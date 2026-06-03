// @ts-nocheck
import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const reviews = [
  { name: "Andrei M.", text: "Cea mai bună experiență medicală în Istanbul. Echipa în limba română a fost minunată.", rating: 5 },
  { name: "Elena S.", text: "Tehnologia CyberKnife S7 chiar face diferența. M-am simțit în siguranță.", rating: 5 },
  { name: "Mihai D.", text: "Transplantul de păr Safir a depășit așteptările. Recuperare rapidă!", rating: 5 },
  { name: "Oana P.", text: "Meva Clinic este la un alt nivel de profesionalism. Recomand cu încredere.", rating: 5 }
];

const ReviewMarquee = ({ isEn = false }) => {
  return (
    <div className="bg-prime py-10 overflow-hidden border-y border-white/5 relative group">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-prime to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-prime to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
        {[...reviews, ...reviews].map((review, i) => (
          <div key={i} className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl min-w-[400px]">
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                <MessageCircle size={24} />
             </div>
             <div>
                <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-accent fill-accent" />)}
                </div>
                <p className="text-white text-sm font-medium italic mb-1 truncate max-w-[300px]">"{review.text}"</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">— {review.name}</p>
             </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default ReviewMarquee;
