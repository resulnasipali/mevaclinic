'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, ShieldAlert, BarChart3, Globe } from 'lucide-react';
import { tUI } from '@/utils/uiTranslations';
import RevealWrapper from './RevealWrapper';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface StatsTranslations {
  badge: string;
  heading: string;
  subtext: string;
  successRate: string;
  internationalPatients: string;
  countriesServed: string;
  safetyAccuracy: string;
}

interface StatsSectionProps {
  lang?: string;
  statsT?: StatsTranslations;
}

// ─── IntersectionObserver-gated CountUp ──────────────────────────────────────
const CountUp = ({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={spanRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const StatsSection = ({ lang = 'en', statsT }: StatsSectionProps) => {
  // Prefer server-passed translations; fall back to client-side tUI() for backwards compat
  const badge   = statsT?.badge                ?? tUI('2025-2026 Clinical Data', lang);
  const heading = statsT?.heading              ?? tUI('Authority in Numbers', lang);
  const subtext = statsT?.subtext              ?? tUI('Validated clinical outcomes and international trust metrics reflecting our commitment to surgical excellence.', lang);

  const stats = [
    { label: statsT?.successRate           ?? tUI('Success Rate', lang),           value: 98,    suffix: '%',   icon: Award       },
    { label: statsT?.internationalPatients ?? tUI('International Patients', lang),  value: 12500, suffix: '+',   icon: Users       },
    { label: statsT?.countriesServed       ?? tUI('Countries Served', lang),        value: 45,    suffix: '',    icon: Globe       },
    { label: statsT?.safetyAccuracy        ?? tUI('Safety Accuracy', lang),         value: 99,    suffix: '.9%', icon: ShieldAlert },
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
                <CountUp end={stat.value} suffix={stat.suffix} />
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
