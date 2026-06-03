import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

// ── Layout & Navigation ────────────────────────────────────────────────────────
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingTrustBadge from '@/components/FloatingTrustBadge';
import CookieBanner from '@/components/CookieBanner';

// ── Above-the-fold Server Components (render immediately) ─────────────────────
import HeroSection from '@/components/HeroSection';

// ── Below-the-fold Server Components (static, no JS shipped) ─────────────────
import SocialProof from '@/components/SocialProof';
import PremiumTreatmentSlider from '@/components/PremiumTreatmentSlider';
import PremiumPackageSection from '@/components/PremiumPackageSection';
import SafetyQualitySection from '@/components/SafetyQualitySection';
import AIAssistant from '@/components/AIAssistant';
import StatsSection from '@/components/StatsSection';
import LogisticsHub from '@/components/LogisticsHub';
import RevealWrapper from '@/components/RevealWrapper';
import BmiWrapper from '@/components/BmiWrapper';

// ── Client-only interactive tools (ssr:false, code-split) ─────────────────────
// These live in a Client Component so Next.js App Router allows ssr:false
import ClientSections from '@/app/components/ClientSections';

const VALID_LOCALES = new Set(['en', 'ro', 'es', 'it', 'ru', 'fr', 'de']);

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!VALID_LOCALES.has(lang)) notFound();

  // ── Server-side translation fetching ─────────────────────────────────────────
  const tHero  = await getTranslations('Hero');
  const tStats = await getTranslations('Stats');

  const heroT = {
    badge:           tHero('badge'),
    headline:        tHero('headline'),
    headlineAccent:  tHero('headlineAccent'),
    headlineSuffix:  tHero('headlineSuffix'),
    subtext:         tHero('subtext'),
    bullet1:         tHero('bullet1'),
    bullet2:         tHero('bullet2'),
    bullet3:         tHero('bullet3'),
    bullet4:         tHero('bullet4'),
    formTitle:       tHero('formTitle'),
    secure:          tHero('secure'),
    labelName:       tHero('labelName'),
    placeholderName: tHero('placeholderName'),
    labelPhone:      tHero('labelPhone'),
    labelTreatment:  tHero('labelTreatment'),
    selectTreatment: tHero('selectTreatment'),
    bariatric:       tHero('bariatric'),
    hair:            tHero('hair'),
    dental:          tHero('dental'),
    plastic:         tHero('plastic'),
    aesthetics:      tHero('aesthetics'),
    submit:          tHero('submit'),
    successTitle:    tHero('successTitle'),
    successMsg:      tHero('successMsg'),
    anotherRequest:  tHero('anotherRequest'),
  };

  const statsT = {
    badge:                 tStats('badge'),
    heading:               tStats('heading'),
    subtext:               tStats('subtext'),
    successRate:           tStats('successRate'),
    internationalPatients: tStats('internationalPatients'),
    countriesServed:       tStats('countriesServed'),
    safetyAccuracy:        tStats('safetyAccuracy'),
  };

  return (
    <>
      <Header />

      {/* ── ABOVE THE FOLD — renders instantly, zero JS ─────────────────────── */}
      <HeroSection t={heroT} lang={lang} />

      {/* BMI Calculator with layout-stable skeleton */}
      <RevealWrapper>
        <BmiWrapper lang={lang} />
      </RevealWrapper>

      {/* ── BELOW THE FOLD — server-rendered static sections ────────────────── */}
      <RevealWrapper>
        <StatsSection lang={lang} statsT={statsT} />
      </RevealWrapper>

      <RevealWrapper>
        <SocialProof lang={lang} />
      </RevealWrapper>

      {/* ── CLIENT-ONLY INTERACTIVE TOOLS (lazy, ssr:false) ─────────────────── */}
      {/* ClientSections is a 'use client' component — the only legal host for ssr:false */}
      <ClientSections lang={lang} />

      {/* ── REMAINING STATIC SECTIONS ───────────────────────────────────────── */}
      <RevealWrapper>
        <PremiumTreatmentSlider lang={lang} />
      </RevealWrapper>

      <RevealWrapper>
        <PremiumPackageSection lang={lang} />
      </RevealWrapper>

      <RevealWrapper>
        <SafetyQualitySection lang={lang} />
      </RevealWrapper>

      {/* ── GLOBAL CONVERSION & UTILITY COMPONENTS ──────────────────────────── */}
      <AIAssistant lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
      <FloatingTrustBadge lang={lang} />
      <CookieBanner lang={lang} />
    </>
  );
}
