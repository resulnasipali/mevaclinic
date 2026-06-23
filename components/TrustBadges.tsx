// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';

import React from 'react';
import { Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { usePathname } from 'next/navigation';


const TrustBadges = () => {
  const pathname = usePathname();
  const lang = (pathname || "/").split('/')[1] || 'en';

  const badges = [
    {
      icon: <Award className="text-accent w-8 h-8" />,
      title: tUI("Specialist Medical Partners", lang)
    },
    {
      icon: <ShieldCheck className="text-accent w-8 h-8" />,
      title: tUI("Accredited Hospital Network", lang)
    },
    {
      icon: <HeartPulse className="text-accent w-8 h-8" />,
      title: tUI("International Patient Services", lang)
    }
  ];

  return (
    <div className="bg-prime py-6 w-full shadow-inner border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {badges.map((badge, index) => (
            <div key={index} className={`flex flex-col items-center justify-center p-4 ${index !== 0 ? 'pt-6 md:pt-4' : ''}`}>
              <div className="bg-white/10 p-4 rounded-full mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {badge.icon}
              </div>
              <h4 className="text-white font-bold tracking-wide uppercase text-sm">{badge.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
