'use client';
import { ShieldCheck, Award, Globe, CheckCircle } from 'lucide-react';
import { tUI } from '@/utils/uiTranslations';

export default function TrustBadges({ lang }: { lang: string }) {
  const isEn = lang === 'en';
  const badges = [
    { icon: <ShieldCheck size={40} />, title: lang === 'ro' ? "Spitale Partenere JCI" : "JCI Partner Hospitals", desc: lang === 'ro' ? "Căi Spitalicești Acreditate" : "Accredited Pathways" },
    { icon: <Globe size={40} />, title: lang === 'ro' ? "Standarde ISO/TÜV" : "ISO/TÜV Standards", desc: lang === 'ro' ? "Managementul Calității" : "Quality Management" },
    { icon: <Award size={40} />, title: lang === 'ro' ? "Specialiști Selectați" : "Selected Specialists", desc: lang === 'ro' ? "Chirurgi Certificați" : "Certified Surgeons" },
    { icon: <CheckCircle size={40} />, title: lang === 'ro' ? "Siguranța Pacientului" : "Patient Safety First", desc: lang === 'ro' ? "Standarde Clinice" : "Clinical Care Standards" }
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
