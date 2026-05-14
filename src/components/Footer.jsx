import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Globe2, ShieldCheck, Award, MessageCircle, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

// Trust badge data — fully bilingual
const TRUST_BADGES = [
  {
    icon: '🏛️',
    nameEn: 'TÜRSAB Approved',
    nameRo: 'Aprobat TÜRSAB',
    subEn: 'Group-A Travel Agency',
    subRo: 'Agenție Grup A',
    color: 'text-accent',
  },
  {
    icon: '🏥',
    nameEn: 'Ministry of Health',
    nameRo: 'Ministerul Sănătății',
    subEn: 'Republic of Turkey · Certified',
    subRo: 'Republica Turcia · Certificat',
    color: 'text-blue-400',
  },
  {
    icon: '🌐',
    nameEn: 'JCI Accredited',
    nameRo: 'Acreditat JCI',
    subEn: 'Global Patient Safety',
    subRo: 'Siguranță Globală',
    color: 'text-green-400',
  },
  {
    icon: '✅',
    nameEn: 'TÜV SÜD',
    nameRo: 'TÜV SÜD',
    subEn: 'Quality Management Certified',
    subRo: 'Certificat Calitate ISO',
    color: 'text-purple-400',
  },
  {
    icon: '🤝',
    nameEn: 'IMA Member',
    nameRo: 'Membru IMA',
    subEn: 'Medical Tourism Assoc.',
    subRo: 'Asoc. Turism Medical',
    color: 'text-yellow-400',
  },
];

const Footer = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  // Build opposite-language path for language switcher
  const getAltLangPath = () => {
    const path = location.pathname;
    if (path === '/' || path === '/ro') return '/en';
    if (path === '/en') return '/ro';
    if (path.startsWith('/ro/')) return path.replace('/ro/', '/en/');
    if (path.startsWith('/en/')) return path.replace('/en/', '/ro/');
    return isEn ? '/ro' : '/en';
  };

  const handleWhatsApp = () => {
    pushToDataLayer('whatsapp_click', { location: 'footer' });
  };

  return (
    <footer
      className="bg-[#0b1626] text-white relative"
      aria-label={isEn ? 'Site Footer' : 'Subsol Site'}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ── Map Section ── */}
      <div className="relative h-[400px] md:h-[520px] w-full border-b border-white/5 overflow-hidden group">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-[#0b1626]/40 pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
        <iframe
          title="Meva Clinic Istanbul Location"
          src="https://maps.google.com/maps?q=Istanbul,Acibadem&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[140%] -mt-10 border-0 absolute inset-0 map-filter"
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center md:justify-end pb-12 md:pb-24 pointer-events-none">
          <div className="bg-[#0f1d2f]/80 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] max-w-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto transform transition-all hover:scale-[1.02] duration-500">
            <div className="flex items-center space-x-2 text-accent mb-4">
              <Globe2 size={24} className="stroke-2" aria-hidden="true" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs">Global Patient Support</span>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-3 text-white">
              {isEn ? 'The Medical Heart of Istanbul' : 'Inima Medicală a Istanbulului'}
            </h2>
            <p className="text-base text-gray-300 font-sans leading-relaxed mb-6">
              {isEn
                ? 'Our strategic partnerships guarantee VIP access from landing to the procedures within the Acibadem network and 5-star hotels.'
                : 'Parteneriatele noastre strategice garantează accesul VIP de la aterizare până la procedurile din rețeaua Acibadem și hotelurile de 5 stele.'}
            </p>
            {/* WhatsApp CTA inside map card */}
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I would like a free medical consultation.' : 'Doresc o consultație medicală gratuită.')}`}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? 'Contact Meva Clinic on WhatsApp' : 'Contactați Meva Clinic pe WhatsApp'}
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
            <Link to={isEn ? '/en' : '/ro'} aria-label="Meva Clinic Home">
              <span className="font-serif text-4xl font-bold text-white tracking-tight block drop-shadow-md">
                Meva<span className="text-accent">Clinic</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mt-1 block">Istanbul Excellence</span>
            </Link>
            <p className="text-gray-400 font-sans text-sm leading-relaxed pr-4">
              {isEn
                ? 'Your trusted partner for medical excellence in Turkey. Premium VIP packages for safe interventions and absolute comfort.'
                : 'Partenerul tău de încredere pentru excelență medicală în Turcia. Pachete premium VIP pentru intervenții sigure și confort absolut.'}
            </p>
            {/* Social */}
            <div className="flex space-x-3">
              {[
                { href: 'https://facebook.com/mevaclinic', label: isEn ? 'Facebook' : 'Facebook', txt: 'FB' },
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
                to={isEn ? location.pathname : getAltLangPath()}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${!isEn ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
                aria-current={!isEn ? 'true' : undefined}
              >
                🇹🇷 RO
              </Link>
              <Link
                to={!isEn ? getAltLangPath() : location.pathname}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${isEn ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
                aria-current={isEn ? 'true' : undefined}
              >
                🇬🇧 EN
              </Link>
            </div>
          </div>

          {/* Col 2 — Treatments */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4">
              {isEn ? 'Medical Excellence' : 'Excelență Medicală'}
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {[
                { ro: '/ro/gastric-sleeve', en: '/en/gastric-sleeve', labelEn: 'Bariatric Surgery', labelRo: 'Chirurgie Bariatrică' },
                { ro: '/ro/implant-par', en: '/en/hair-transplant', labelEn: 'Sapphire FUE Hair', labelRo: 'Transplant Păr Safir' },
                { ro: '/ro/oncologie', en: '/en/oncology', labelEn: 'Robotic Oncology', labelRo: 'Oncologie Robotică' },
                { ro: '/ro/implant-dentar', en: '/en/dental-implants', labelEn: 'Dental Implants', labelRo: 'Implanturi Dentare' },
                { ro: '/ro/chirurgie-plastica', en: '/en/plastic-surgery', labelEn: 'Plastic Surgery', labelRo: 'Chirurgie Plastică' },
                { ro: '/ro/transplant-organe', en: '/en/organ-transplant', labelEn: 'Organ Transplant', labelRo: 'Transplant de Organe' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link to={isEn ? item.en : item.ro} className="text-gray-400 hover:text-accent flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {isEn ? item.labelEn : item.labelRo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4">
              {isEn ? 'Patient Intelligence' : 'Inteligență Pacient'}
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              {[
                { ro: '/ro/blog', en: '/en/blog', labelEn: 'Medical Archive', labelRo: 'Arhiva Medicală' },
                { ro: '/ro/faq', en: '/en/faq', labelEn: 'Clinical FAQ', labelRo: 'Întrebări Clinice' },
                { ro: '/ro/quiz', en: '/en/quiz', labelEn: 'Suitability Quiz', labelRo: 'Test de Eligibilitate' },
                { ro: '/ro/despre-noi', en: '/en/about-us', labelEn: 'Our Board', labelRo: 'Consiliul Medical' },
                { ro: '/ro/comparatie-medicala', en: '/en/medical-comparison', labelEn: 'Compare Clinics', labelRo: 'Comparație Clinici' },
                { ro: '/ro/romani-istanbul', en: '/ro/romani-istanbul', labelEn: 'Romania Hub', labelRo: 'Hub România' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link to={isEn ? item.en : item.ro} className="text-gray-400 hover:text-white flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {isEn ? item.labelEn : item.labelRo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (LocalBusiness schema-compliant) */}
          <div className="space-y-6" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Meva Clinic" />
            <meta itemProp="telephone" content="+905324675941" />
            <meta itemProp="email" content="info@mevaclinic.com" />
            <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4">
              {isEn ? 'Contact Us' : 'Contactează-ne'}
            </h3>
            <ul className="space-y-5 font-sans text-sm text-gray-300">
              <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="text-accent mt-1 mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <span className="leading-relaxed text-gray-200">
                  <span itemProp="streetAddress">{isEn ? 'Acibadem Partner Clinic, Altunizade' : 'Clinica Partneră Acibadem, Altunizade'}</span>
                  <br />
                  <span itemProp="addressLocality">Istanbul</span>,{' '}
                  <span itemProp="addressCountry">{isEn ? 'Turkey' : 'Turcia'}</span>
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
                  href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I would like a free consultation.' : 'Doresc o consultație gratuită.')}`}
                  onClick={handleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isEn ? 'Message us on WhatsApp' : 'Trimiteți-ne un mesaj pe WhatsApp'}
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
                    {isEn ? 'Mon–Sat · 09:00 – 18:00' : 'Lun–Sâm · 09:00 – 18:00'}
                  </span>
                  <br />
                  <span className="text-[#25D366]">{isEn ? '24/7 WhatsApp Support' : 'Suport WhatsApp 24/7'}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} Meva Clinic Medical Tourism. {isEn ? 'All rights reserved.' : 'Toate drepturile rezervate.'}</p>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link to={isEn ? '/en/privacy-policy' : '/ro/politica-confidentialitate'} className="hover:text-white transition-colors">
              {isEn ? 'Privacy Policy' : 'Politică de Confidențialitate'}
            </Link>
            <Link to={isEn ? '/en/privacy-policy' : '/ro/politica-confidentialitate'} className="hover:text-white transition-colors">
              {isEn ? 'Cookie Policy' : 'Politică Cookie'}
            </Link>
            <Link to={isEn ? '/en/privacy-policy' : '/ro/politica-confidentialitate'} className="hover:text-white transition-colors">
              {isEn ? 'Terms' : 'Termeni'}
            </Link>
          </div>
        </div>
      </div>

      {/* ── S-Tier Trust / Accreditation Strip ── */}
      <div className="border-t border-white/5 bg-white/3 backdrop-blur-md py-7">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-5">
            {isEn ? 'Accreditations & Official Certifications' : 'Acreditări & Certificări Oficiale'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {TRUST_BADGES.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 transition-all group cursor-default"
                title={isEn ? badge.nameEn : badge.nameRo}
              >
                <span className="text-2xl" role="img" aria-label={isEn ? badge.nameEn : badge.nameRo}>
                  {badge.icon}
                </span>
                <div>
                  <p className={`text-[11px] font-black ${badge.color} uppercase tracking-wider leading-none mb-0.5 group-hover:opacity-100 opacity-80 transition-opacity`}>
                    {isEn ? badge.nameEn : badge.nameRo}
                  </p>
                  <p className="text-[9px] text-gray-500 font-medium">
                    {isEn ? badge.subEn : badge.subRo}
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
