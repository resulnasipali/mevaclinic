'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Star } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface HeroTranslations {
  badge: string;
  headline: string;
  headlineAccent: string;
  headlineSuffix: string;
  subtext: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
  formTitle: string;
  secure: string;
  labelName: string;
  placeholderName: string;
  labelPhone: string;
  labelTreatment: string;
  selectTreatment: string;
  bariatric: string;
  hair: string;
  dental: string;
  plastic: string;
  aesthetics: string;
  submit: string;
  successTitle: string;
  successMsg: string;
  anotherRequest: string;
}

interface HeroSectionProps {
  t: HeroTranslations;
  lang: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
const HeroSection = ({ t, lang }: HeroSectionProps) => {
  const [heroTreatment, setHeroTreatment] = useState('');
  const [heroName, setHeroName]           = useState('');
  const [heroPrefix, setHeroPrefix]       = useState(lang === 'ro' ? '+40' : lang === 'de' ? '+49' : lang === 'fr' ? '+33' : lang === 'es' ? '+34' : lang === 'it' ? '+39' : lang === 'ru' ? '+7' : '+44');
  const [heroPhone, setHeroPhone]         = useState('');
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [isSubmitted, setIsSubmitted]     = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroName || !heroPhone || !heroTreatment) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'hero',
          name: heroName,
          phone: `${heroPrefix} ${heroPhone}`,
          procedure: heroTreatment,
          source: 'HeroSection',
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(lang === 'ro' ? 'Eroare la trimiterea formularului.' : 'Error sending request. Please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert(lang === 'ro' ? 'Eroare de conexiune.' : 'Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-[#0b1626]"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
          alt="Meva Clinic Premium Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] via-[#0b1626]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full py-6 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">

          {/* ── Left: Copy ── */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center space-x-3 py-1.5 md:py-2 px-4 md:px-5 rounded-full bg-white/5 backdrop-blur-sm text-white/90 text-xs md:text-[13px] font-medium tracking-wide mb-4 md:mb-8 border border-white/10">
              <Star size={14} className="text-accent fill-accent/20" aria-hidden="true" />
              <span>{t.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif text-white font-medium leading-[1.15] md:leading-[1.05] mb-4 md:mb-8">
              {t.headline}
              <span className="text-accent relative inline-block whitespace-nowrap">
                {t.headlineAccent}
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                </svg>
              </span>
              {t.headlineSuffix}
            </h1>

            <p className="text-base sm:text-xl text-gray-300 font-light mb-6 md:mb-12 leading-relaxed max-w-2xl border-l-2 border-accent pl-4 md:pl-6">
              {t.subtext}
            </p>

            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-white/70 font-light">
              {[t.bullet1, t.bullet2, t.bullet3, t.bullet4].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent opacity-80 flex-shrink-0" aria-hidden="true" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Lead Form ── */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms] relative z-10">
            <div className="backdrop-blur-md bg-white/95 rounded-[1.8rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent" aria-hidden="true" />

              {isSubmitted ? (
                <div className="py-10 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-prime mb-3">{t.successTitle}</h3>
                  <p className="text-gray-500 mb-6">{t.successMsg}</p>
                  <button
                    onClick={() => { setIsSubmitted(false); setHeroName(''); setHeroPhone(''); setHeroTreatment(''); }}
                    className="text-accent font-bold text-sm hover:text-prime transition-colors"
                  >
                    {t.anotherRequest}
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-serif font-medium text-prime">{t.formTitle}</h2>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-100">
                      <ShieldCheck size={14} aria-hidden="true" />
                      <span className="text-[10px] md:text-[11px] font-medium tracking-wide">{t.secure}</span>
                    </div>
                  </div>

                  <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div>
                      <label htmlFor="hero-name" className="block text-gray-700 text-[13px] font-semibold tracking-wide mb-2">
                        {t.labelName}
                      </label>
                      <input
                        id="hero-name"
                        type="text"
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value)}
                        className="w-full border border-gray-300/60 rounded-xl px-4 py-3.5 bg-white/80 focus:bg-white focus:ring-2 focus:ring-accent/50 outline-none shadow-inner backdrop-blur-sm transition-all font-medium text-gray-900"
                        placeholder={t.placeholderName}
                        required
                        autoComplete="name"
                        maxLength={150}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="hero-phone" className="block text-gray-700 text-[13px] font-semibold tracking-wide mb-2">
                        {t.labelPhone}
                      </label>
                      <div className="flex gap-2">
                        <select
                          id="hero-phone-prefix"
                          value={heroPrefix}
                          onChange={(e) => setHeroPrefix(e.target.value)}
                          className="border border-gray-300/60 rounded-xl px-3 bg-white/80 focus:bg-white shadow-inner backdrop-blur-sm outline-none text-sm font-semibold text-gray-800"
                          aria-label="Country code"
                        >
                          {['+40','+44','+90','+1','+33','+34','+39','+49','+7','+380','+971'].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <input
                          id="hero-phone"
                          type="tel"
                          value={heroPhone}
                          onChange={(e) => setHeroPhone(e.target.value)}
                          className="w-full border border-gray-300/60 rounded-xl px-4 py-3.5 bg-white/80 focus:bg-white focus:ring-2 focus:ring-accent/50 outline-none shadow-inner backdrop-blur-sm transition-all font-medium text-gray-900"
                          placeholder="7xx xxx xxx"
                          required
                          autoComplete="tel"
                          maxLength={20}
                        />
                      </div>
                    </div>

                    {/* Treatment */}
                    <div>
                      <label htmlFor="hero-treatment" className="block text-gray-700 text-[13px] font-semibold tracking-wide mb-2">
                        {t.labelTreatment}
                      </label>
                      <select
                        id="hero-treatment"
                        className="w-full border border-gray-300/60 rounded-xl px-4 py-3.5 bg-white/80 focus:bg-white focus:ring-2 focus:ring-accent/50 outline-none shadow-inner backdrop-blur-sm transition-all appearance-none font-medium text-gray-900"
                        required
                        value={heroTreatment}
                        onChange={(e) => setHeroTreatment(e.target.value)}
                      >
                        <option value="">{t.selectTreatment}</option>
                        <option value="bariatric">{t.bariatric}</option>
                        <option value="hair">{t.hair}</option>
                        <option value="dental">{t.dental}</option>
                        <option value="plastic">{t.plastic}</option>
                        <option value="aesthetics">{t.aesthetics}</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-prime hover:bg-[#112440] disabled:opacity-60 text-white font-medium py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        ) : (
                          t.submit
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
