'use client';

import React from 'react';
import { Award, Users, BarChart3, Globe, Languages, ShieldCheck } from 'lucide-react';
import { tUI } from '@/utils/uiTranslations';
import RevealWrapper from './RevealWrapper';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface StatsTranslations {
  badge: string;
  heading: string;
  subtext: string;
  internationalPatients: string;
  countriesServed: string;
  languagesSupported: string;
  partnerExperience: string;
}

interface StatsSectionProps {
  lang?: string;
  statsT?: StatsTranslations;
}

// ─── Component ────────────────────────────────────────────────────────────────
const StatsSection = ({ lang = 'en', statsT }: StatsSectionProps) => {
  // Prefer server-passed translations; fall back to client-side tUI() for backwards compat
  const badge   = statsT?.badge                ?? tUI('2025-2026 Clinical Data', lang);
  const heading = statsT?.heading              ?? tUI('Authority in Numbers', lang);
  const subtext = statsT?.subtext              ?? tUI('Operational volume and international trust metrics reflecting our health coordination experience.', lang);

  const stats = [
    { label: statsT?.internationalPatients ?? tUI('International Patients Coordinated', lang),  value: 12500, suffix: '+',   icon: Users       },
    { label: statsT?.countriesServed       ?? tUI('Countries Served', lang),                     value: 45,    suffix: '+',   icon: Globe       },
    { label: statsT?.languagesSupported    ?? tUI('Languages Supported', lang),                  value: 7,     suffix: '',    icon: Languages   },
    { label: statsT?.partnerExperience     ?? tUI('Years of Partner Clinical Experience', lang),  value: 15,    suffix: '+',   icon: ShieldCheck },
  ];

  return (
    <section className="py-12 md:py-24 bg-[#0b1626] text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.05), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <RevealWrapper className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            <BarChart3 size={14} aria-hidden="true" />
            {badge}
          </div>
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4 md:mb-6">{heading}</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">{subtext}</p>
        </RevealWrapper>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {stats.map((stat, i) => (
            <RevealWrapper key={i} delay={i * 120} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-3 md:mb-6 shadow-2xl">
                <stat.icon size={20} className="md:w-[24px] md:h-[24px]" aria-hidden="true" />
              </div>
              <div className="text-xl md:text-5xl font-serif font-bold mb-0.5 md:mb-2">
                <span>{stat.value.toLocaleString()}{stat.suffix}</span>
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[8px] md:text-xs">
                {stat.label}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
