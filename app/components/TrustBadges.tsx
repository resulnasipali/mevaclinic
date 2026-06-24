'use client';
import { ShieldCheck, Award, Globe, CheckCircle } from 'lucide-react';
import { tUI } from '@/utils/uiTranslations';

export default function TrustBadges({ lang }: { lang: string }) {
  const isEn = lang === 'en';
  const badges = [
    { icon: <ShieldCheck size={40} />, title: tUI('JCI Accredited', lang), desc: tUI("Global Gold Standard", lang) },
    { icon: <Globe size={40} />, title: tUI('ISO 9001:2015', lang), desc: tUI("Quality Management", lang) },
    { icon: <Award size={40} />, title: tUI('15+ Years', lang), desc: tUI("Surgical Excellence", lang) },
    { icon: <CheckCircle size={40} />, title: tUI('Patient Safety First', lang), desc: tUI("Clinical Care Standards", lang) }
  ];

  return (
    <div className="w-full bg-[#0b1626] border-y border-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
              <div className="text-amber-500 mb-4 transform transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                {badge.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-1">{badge.title}</h4>
              <p className="text-gray-400 text-sm">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
