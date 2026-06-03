'use client';

/**
 * ClientSections.tsx
 *
 * This is a Client Component wrapper that holds all `ssr: false` dynamic imports.
 * Next.js 14 App Router forbids `ssr: false` in Server Components — this file
 * is the correct boundary for lazy-loading client-only interactive tools.
 */

import dynamic from 'next/dynamic';
import Link from 'next/link';
import RevealWrapper from '@/components/RevealWrapper';
import { tUI } from '@/utils/uiTranslations';

const AiDiagnosticModal = dynamic(
  () => import('@/app/components/AiDiagnosticModal'),
  { ssr: false }
);

const TrustBadges = dynamic(
  () => import('@/app/components/TrustBadges'),
  { ssr: false }
);

interface ClientSectionsProps {
  lang: string;
}

export default function ClientSections({ lang }: ClientSectionsProps) {
  return (
    <>
      <RevealWrapper>
        <AiDiagnosticModal lang={lang} />
      </RevealWrapper>

      <RevealWrapper>
        <TrustBadges lang={lang} />
      </RevealWrapper>

      {/* Suitability Quiz Compact CTA Banner */}
      <RevealWrapper className="py-12 md:py-24 bg-gradient-to-r from-[#002D62] to-[#0b1626] border-y border-white/5 text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
            {tUI('Fast Clinical Check', lang)}
          </span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold mb-4 md:mb-6 text-white leading-tight">
            {tUI('Start Your Medical Evaluation', lang)}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg mb-6 md:mb-10 leading-relaxed font-light">
            {tUI('Get a preliminary clinical assessment in 30 seconds.', lang)}
          </p>
          <Link
            href={`/${lang}/quiz`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A059] to-[#b08b49] hover:from-[#d1b173] hover:to-[#C5A059] text-[#002D62] font-bold py-3 md:py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgb(197,160,89,0.2)] hover:shadow-[0_15px_30px_rgb(197,160,89,0.4)] hover:-translate-y-0.5"
          >
            {tUI('Start Free Analysis', lang)} →
          </Link>
        </div>
      </RevealWrapper>
    </>
  );
}
