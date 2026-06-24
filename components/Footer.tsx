// @ts-nocheck
'use client';

import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, ChevronDown, Globe2, ShieldCheck, Award, MessageCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';
import { MevaLogo } from './MevaLogo';

// Trust badge data — fully bilingual
const TRUST_BADGES = [
  {
    icon: '🏥',
    nameEn: 'Ministry of Health Standards',
    nameRo: 'Standarde Ministerul Sănătății',
    subEn: 'Türkiye Patient Services',
    subRo: 'Servicii Pacienți Turcia',
    color: 'text-blue-400',
  },
  {
    icon: '🌐',
    nameEn: 'JCI Accredited Partners',
    nameRo: 'Parteneri Acreditați JCI',
    subEn: 'Global Patient Safety',
    subRo: 'Siguranță Globală',
    color: 'text-green-400',
  },
  {
    icon: '✅',
    nameEn: 'TÜV SÜD Certified Partners',
    nameRo: 'Parteneri Certificați TÜV SÜD',
    subEn: 'Quality Management Standards',
    subRo: 'Standarde Calitate ISO',
    color: 'text-purple-400',
  },
  {
    icon: '🤝',
    nameEn: 'IMA Partner Network',
    nameRo: 'Rețea Parteneri IMA',
    subEn: 'International Patient Care Standards',
    subRo: 'Standarde Internaționale Pacienți',
    color: 'text-yellow-400',
  },
];

const Footer = ({ lang = 'en' }: { lang?: string }) => {
  const pathname = usePathname();
  const isRo = lang === 'ro';
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const [loadMap, setLoadMap] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Build opposite-language path for language switcher
  const getAltLangPath = () => {
    const path = pathname || '/';
    if (path === '/' || path === '/ro') return '/en';
    if (path === '/en') return '/ro';
    if (path.startsWith('/ro/')) return path.replace('/ro/', '/en/');
    if (path.startsWith('/en/')) return path.replace('/en/', '/ro/');
    return `/${lang === 'en' ? 'ro' : 'en'}`;
  };

  const handleWhatsApp = () => {
    pushToDataLayer('whatsapp_click', { location: 'footer' });
  };

  return (
    <footer
      className="bg-[#0b1626] text-white relative"
      aria-label={tUI('Site Footer', lang)}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ── Map Section ── */}
      <div
        className="relative h-[400px] md:h-[520px] w-full border-b border-white/5 overflow-hidden group"
        onMouseEnter={() => setLoadMap(true)}
        onTouchStart={() => setLoadMap(true)}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-[#0b1626]/40 pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
        {loadMap ? (
          <iframe
            title="Meva Clinic Istanbul Location"
            src={`https://maps.google.com/maps?q=Altunizade,Uskudar,Istanbul,Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed&hl=${lang === 'ro' ? 'ro' : lang}`}
            className="w-full h-[140%] -mt-10 border-0 absolute inset-0 map-filter"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0f1d2f]/90 flex items-center justify-center">
            {/* Elegant Map Placeholder */}
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 animate-pulse">
                <MapPin size={24} className="text-accent" />
              </div>
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Meva Clinic International Patient Office - Istanbul, Turkey</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center md:justify-end pb-12 md:pb-24 pointer-events-none">
          <div className="bg-[#0f1d2f]/80 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] max-w-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto transform transition-all hover:scale-[1.02] duration-500">
            <div className="flex items-center space-x-2 text-accent mb-4">
              <Globe2 size={24} className="stroke-2" aria-hidden="true" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs">{tUI('Global Patient Support', lang)}</span>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-3 text-white">
              {tUI('The Medical Heart of Istanbul', lang)}
            </h2>
            <p className="text-base text-gray-300 font-sans leading-relaxed mb-6">
              {tUI('Through specialist doctors and accredited partner hospitals, Meva Clinic supports patients from arrival to follow-up within a premium clinical care network.', lang)}
            </p>
            {/* WhatsApp CTA inside map card */}
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(tUI('I would like a free medical consultation.', lang))}`}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tUI('Contact Meva Clinic on WhatsApp', lang)}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <div className="space-y-6">
            <div className="group block">
              <div className="bg-white/95 rounded-3xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 w-[240px] h-[72px] p-3 backdrop-blur-md">
                <MevaLogo href={`/${lang}`} className="w-full h-auto group-hover:opacity-80 transition-opacity" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mt-4 block">Istanbul Excellence</span>
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed pr-4">
              {tUI('Your trusted partner for medical excellence in Turkey. Premium VIP packages for safe interventions and comfort-focused support.', lang)}
            </p>
            {/* Social */}
            <div className="flex space-x-3">
              {[
                { href: 'https://facebook.com/mevaclinic', label: tUI('Facebook', lang), txt: 'FB' },
                { href: 'https://instagram.com/mevaclinic', label: 'Instagram', txt: 'IG' },
                { href: 'https://linkedin.com/company/meva-clinic', label: 'LinkedIn', txt: 'IN' },
                { href: 'https://youtube.com/@mevaclinic', label: 'YouTube', txt: 'YT' },
              ].map(({ href, label, txt }) => (
                <a key={txt} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-prime transition-all duration-300 font-bold text-xs text-gray-300">
                  {txt}
                </a>
              ))}
            </div>
            {/* Footer Language Switcher */}
            <div className="flex items-center gap-2 pt-2">
              <Globe size={14} className="text-accent" aria-hidden="true" />
              <Link
                href={lang === 'en' ? (pathname || '/') : getAltLangPath()}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${lang !== 'en' ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
              >
                🇹🇷 RO
              </Link>
              <Link
                href={lang !== 'en' ? getAltLangPath() : (pathname || '/')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
              >
                🇬🇧 EN
              </Link>
            </div>
          </div>

          {/* Col 2 — Treatments */}
          <div className="space-y-6">
            <h3
              onClick={() => toggleSection('treatments')}
              className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <span>{tUI('Medical Excellence', lang)}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 md:hidden ${openSection === 'treatments' ? 'rotate-180' : ''}`}
              />
            </h3>
            <ul className={`space-y-3 font-sans text-sm transition-all duration-300 ${openSection === 'treatments' ? 'block' : 'hidden md:block'}`}>
              {[
                { ro: '/ro/treatments/gastric-sleeve', en: '/en/treatments/gastric-sleeve', labelEn: 'Bariatric Surgery', labelRo: 'Chirurgie Bariatrică' },
                { ro: '/ro/treatments/meva-mixed-hair', en: '/en/treatments/meva-mixed-hair', labelEn: 'Sapphire FUE Hair', labelRo: 'Transplant Păr Safir' },
                { ro: '/ro/treatments/smart-oncology-drugs', en: '/en/treatments/smart-oncology-drugs', labelEn: 'Robotic Oncology', labelRo: 'Oncologie Robotică' },
                { ro: '/ro/treatments/dental-implants', en: '/en/treatments/dental-implants', labelEn: 'Dental Implants', labelRo: 'Implanturi Dentare' },
                { ro: '/ro/treatments/piezo-rhinoplasty', en: '/en/treatments/piezo-rhinoplasty', labelEn: 'Plastic Surgery', labelRo: 'Chirurgie Plastică' },
                { ro: '/ro/treatments/organ-transplant-turkey', en: '/en/treatments/organ-transplant-turkey', labelEn: 'Organ Transplant', labelRo: 'Transplant de Organe' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link href={isRo ? item.ro : item.en.replace('/en/', `/${lang}/`)} className="text-gray-400 hover:text-accent flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {tUI(item.labelEn, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div className="space-y-6">
            <h3
              onClick={() => toggleSection('resources')}
              className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <span>{tUI('Patient Intelligence', lang)}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 md:hidden ${openSection === 'resources' ? 'rotate-180' : ''}`}
              />
            </h3>
            <ul className={`space-y-3 text-sm font-sans transition-all duration-300 ${openSection === 'resources' ? 'block' : 'hidden md:block'}`}>
              {[
                { ro: '/ro/blog', en: '/en/blog', labelEn: 'Medical Archive', labelRo: 'Arhiva Medicală' },
                { ro: '/ro/faq', en: '/en/faq', labelEn: 'Clinical FAQ', labelRo: 'Întrebări Clinice' },
                { ro: '/ro/quiz', en: '/en/quiz', labelEn: 'Suitability Quiz', labelRo: 'Test de Eligibilitate' },
                { ro: '/ro/#pachete', en: '/en/#pachete', labelEn: 'VIP Services', labelRo: 'Servicii VIP' },
                { ro: '/ro/medical-comparison', en: '/en/medical-comparison', labelEn: 'Compare Clinics', labelRo: 'Comparație Clinici' },
                { ro: '/ro/contact', en: '/en/contact', labelEn: 'International Hub', labelRo: 'Hub Internațional' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link href={isRo ? item.ro : item.en.replace('/en/', `/${lang}/`)} className="text-gray-400 hover:text-white flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {tUI(item.labelEn, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (LocalBusiness schema-compliant) */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Meva Clinic" />
            <meta itemProp="telephone" content="+905324675941" />
            <meta itemProp="email" content="info@mevaclinic.com" />
            <div className="space-y-6">
              <h3
              onClick={() => toggleSection('contact')}
              className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <span>{tUI('Contact Us', lang)}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 md:hidden ${openSection === 'contact' ? 'rotate-180' : ''}`}
              />
            </h3>
            <ul className={`space-y-5 font-sans text-sm text-gray-300 transition-all duration-300 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="text-accent mt-1 mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <span className="leading-relaxed text-gray-200">
                  <span itemProp="streetAddress">{tUI('Altunizade, Uskudar', lang)}</span>
                  <br />
                  <span itemProp="addressLocality">Istanbul</span>,{' '}
                  <span itemProp="addressCountry">{tUI('Turkey', lang)}</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href="tel:+905324675941"
                  aria-label="+90 532 467 59 41"
                  className="text-gray-200 hover:text-white transition-colors"
                  itemProp="telephone"
                >
                  +90 532 467 59 41
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href="mailto:info@mevaclinic.com"
                  className="text-gray-200 hover:text-white transition-colors"
                  itemProp="email"
                >
                  info@mevaclinic.com
                </a>
              </li>
              {/* WhatsApp */}
              <li className="flex items-center">
                <MessageCircle className="text-[#25D366] mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href={`https://wa.me/905324675941?text=${encodeURIComponent(tUI('I would like a free consultation.', lang))}`}
                  onClick={handleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tUI('Message us on WhatsApp', lang)}
                  className="text-[#25D366] hover:text-white font-bold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              {/* Hours */}
              <li className="flex items-start">
                <ShieldCheck className="text-accent mr-4 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  <span itemProp="openingHours" content="Mo-Sa 09:00-18:00">
                    {tUI('Mon–Sat · 09:00 – 18:00', lang)}
                  </span>
                  <br />
                  <span className="text-[#25D366]">{tUI('24/7 WhatsApp Support', lang)}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
        {/* YMYL Medical Disclaimer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl mx-auto font-sans mb-3">
            {tUI("Medical Disclaimer: The clinical information on this website is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult with a qualified physician or healthcare provider regarding any medical condition or surgical procedure in Turkey.", lang)}
          </p>
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl mx-auto font-sans mb-6">
            {tUI("Meva Clinic operates as an international patient service provider. Travel and accommodation services are arranged through licensed TÜRSAB Group-A travel agency partners when required.", lang)}
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} Meva Clinic. {tUI('All rights reserved.', lang)}</p>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">
              {tUI('Privacy Policy', lang)}
            </Link>
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">
              {tUI('Cookie Policy', lang)}
            </Link>
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">
              {tUI('Terms', lang)}
            </Link>
          </div>
        </div>
      </div>

      {/* ── S-Tier Trust / Accreditation Strip ── */}
      <div className="border-t border-white/5 bg-white/3 backdrop-blur-md py-7">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-5">
            {tUI('Accreditations & Official Certifications', lang)}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {TRUST_BADGES.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 transition-all group cursor-default"
                title={tUI(badge.nameEn, lang)}
              >
                <span className="text-2xl" role="img" aria-label={tUI(badge.nameEn, lang)}>
                  {badge.icon}
                </span>
                <div>
                  <p className={`text-[11px] font-black ${badge.color} uppercase tracking-wider leading-none mb-0.5 group-hover:opacity-100 opacity-80 transition-opacity`}>
                    {tUI(badge.nameEn, lang)}
                  </p>
                  <p className="text-[9px] text-gray-500 font-medium">
                    {tUI(badge.subEn, lang)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile bottom spacer */}
      <div className="h-[72px] sm:hidden w-full bg-[#0b1626]" />
    </footer>
  );
};

export default Footer;
