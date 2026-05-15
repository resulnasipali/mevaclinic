import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Activity, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import TopBar from './TopBar';
import { treatmentsData } from '../data/treatmentsData';

// ── Category configuration ─────────────────────────────────────────────────────
const CATEGORY_CONFIG = {
  'plastic-surgery': { icon: '✂️',  en: 'Plastic Surgery',          ro: 'Chirurgie Plastică',           col: 'left'  },
  'bariatric':       { icon: '⚕️',  en: 'Bariatric Surgery',         ro: 'Chirurgie Bariatrică',          col: 'left'  },
  'hair-transplant': { icon: '💇',  en: 'Hair & Brow Transplant',    ro: 'Păr & Sprâncene',               col: 'left'  },
  'dental':          { icon: '🦷',  en: 'Dental Care',               ro: 'Stomatologie',                  col: 'left'  },
  'andrology':       { icon: '👨‍⚕️', en: "Andrology & Men's Health", ro: 'Andrologie & Sănătate Masculină', col: 'right' },
  'advanced':        { icon: '🧬',  en: 'Advanced Medicine',          ro: 'Medicină Avansată',             col: 'right' },
  'anti-gravity':    { icon: '✨',  en: 'Anti-Gravity Suite',         ro: 'Suita Anti-Gravity',            col: 'right' },
};

const LEFT_CATEGORIES  = ['plastic-surgery', 'bariatric', 'hair-transplant', 'dental'];
const RIGHT_CATEGORIES = ['andrology', 'advanced', 'anti-gravity'];

// ── Safe title extractor ────────────────────────────────────────────────────────
// Prevents "Objects are not valid as a React child" crash
const getTitle = (titleField, isEn) => {
  if (!titleField) return '';
  if (typeof titleField === 'string') return titleField;
  if (typeof titleField === 'object' && (titleField.en || titleField.ro)) {
    return isEn ? (titleField.en || '') : (titleField.ro || '');
  }
  return '';
};

// ── Build grouped treatments ────────────────────────────────────────────────────
const groupByCategory = () => {
  const groups = {};
  treatmentsData.forEach((t) => {
    if (!CATEGORY_CONFIG[t.category]) return; // skip unknown/removed categories
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  });
  return groups;
};

// ── CategoryColumn sub-component ───────────────────────────────────────────────
const CategoryColumn = ({ categories, groups, isEn, onClose }) => (
  <div className="flex flex-col gap-5">
    {categories.map((catKey) => {
      const cfg = CATEGORY_CONFIG[catKey];
      const items = groups[catKey] || [];
      if (!cfg || items.length === 0) return null;

      return (
        <div key={catKey}>
          {/* Category header */}
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="text-base leading-none" role="img" aria-hidden="true">{cfg.icon}</span>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-accent">
              {isEn ? cfg.en : cfg.ro}
            </p>
          </div>

          {/* Treatment links */}
          <div className="flex flex-col gap-0.5">
            {items.map((treatment) => {
              const title = getTitle(treatment.title, isEn);
              return (
                <Link
                  key={treatment.id}
                  to={`/${isEn ? 'en' : 'ro'}/treatments/${treatment.id}`}
                  onClick={onClose}
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[11px] font-semibold text-gray-600 hover:bg-accent/8 hover:text-prime transition-all"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-accent transition-colors shrink-0" />
                  <span className="leading-snug">{title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

// ── Main Header ─────────────────────────────────────────────────────────────────
const Header = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [langMenu, setLangMenu]           = useState(false);
  const [treatmentsMenu, setTreatmentsMenu] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null); // stores open catKey
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const groups = groupByCategory();

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // ── Opposite language path mapping ──────────────────────────────────────────
  const getOppositeLangPath = () => {
    const rawPath = location.pathname;
    const path = (rawPath.endsWith('/') && rawPath.length > 1) ? rawPath.slice(0, -1) : rawPath || '/ro';

    const mappings = {
      '/ro/despre-noi': '/en/about-us',         '/en/about-us': '/ro/despre-noi',
      '/ro/contact': '/en/contact',             '/en/contact': '/ro/contact',
      '/ro/faq': '/en/faq',                     '/en/faq': '/ro/faq',
      '/ro/politica-confidentialitate': '/en/privacy-policy', '/en/privacy-policy': '/ro/politica-confidentialitate',
      '/ro/comparatie-medicala': '/en/medical-comparison',    '/en/medical-comparison': '/ro/comparatie-medicala',
      '/ro/blog': '/en/blog',                   '/en/blog': '/ro/blog',
      '/ro/quiz': '/en/quiz',                   '/en/quiz': '/ro/quiz',
      '/ro': '/en', '/en': '/ro', '/': '/en',
    };

    if (mappings[path]) return mappings[path];
    // Dynamic treatment routes: swap lang prefix
    if (path.startsWith('/ro/treatments/')) return path.replace('/ro/treatments/', '/en/treatments/');
    if (path.startsWith('/en/treatments/')) return path.replace('/en/treatments/', '/ro/treatments/');
    if (path.startsWith('/ro/')) return path.replace('/ro/', '/en/');
    if (path.startsWith('/en/')) return path.replace('/en/', '/ro/');
    return isEn ? '/ro' : '/en';
  };

  // ── Click-outside refs ───────────────────────────────────────────────────────
  const langRef       = useRef(null);
  const treatmentsRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangMenu(false);
      if (treatmentsRef.current && !treatmentsRef.current.contains(e.target)) setTreatmentsMenu(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Simple nav links (non-dropdown) ─────────────────────────────────────────
  const simpleLinks = [
    { name: isEn ? 'Home'     : 'Acasă',      path: isEn ? '/en'            : '/ro'            },
    { name: isEn ? 'About Us' : 'Despre Noi', path: isEn ? '/en/about-us'   : '/ro/despre-noi' },
    { name: 'Blog',                            path: isEn ? '/en/blog'        : '/ro/blog'       },
    { name: isEn ? 'Contact'  : 'Contact',    path: isEn ? '/en/contact'     : '/ro/contact'    },
  ];

  const closeMegaMenu = () => setTreatmentsMenu(false);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            to={isEn ? '/en' : '/ro'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Meva Clinic Home"
          >
            <div className="w-10 h-10 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Activity size={22} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-prime">
                Meva <span className="text-accent">Clinic</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500 mt-0.5">Istanbul Excellence</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center justify-center gap-6 flex-1 mx-8" aria-label="Main navigation">

            {/* Simple links before Treatments */}
            {simpleLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}

            {/* ── TREATMENTS MEGA-MENU ── */}
            <div ref={treatmentsRef} className="relative">
              <button
                onClick={() => { setTreatmentsMenu(prev => !prev); setLangMenu(false); }}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors whitespace-nowrap focus:outline-none focus:text-accent"
                aria-haspopup="true"
                aria-expanded={treatmentsMenu}
                id="treatments-menu-button"
              >
                {isEn ? 'Treatments' : 'Tratamente'}
                <ChevronDown size={12} className={`transition-transform duration-300 ${treatmentsMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* ── MEGA-MENU DROPDOWN ── */}
              {treatmentsMenu && (
                <div
                  role="menu"
                  aria-labelledby="treatments-menu-button"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[680px] bg-white rounded-3xl shadow-2xl border border-gray-100 z-[5002] overflow-hidden"
                  style={{ animation: 'fadeInUp 0.2s ease-out' }}
                >
                  {/* Header bar */}
                  <div className="bg-prime px-6 py-3 flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                      {isEn ? 'Clinical Services' : 'Servicii Clinice'}
                    </p>
                    <p className="text-[10px] text-white/50 font-medium">
                      {treatmentsData.length}+ {isEn ? 'treatments available' : 'tratamente disponibile'}
                    </p>
                  </div>

                  {/* 2-column grid */}
                  <div className="grid grid-cols-2 divide-x divide-gray-100">

                    {/* LEFT COLUMN — Surgical */}
                    <div className="p-5 bg-gray-50/50">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-4 px-1">
                        {isEn ? 'Surgical' : 'Chirurgical'}
                      </p>
                      <CategoryColumn
                        categories={LEFT_CATEGORIES}
                        groups={groups}
                        isEn={isEn}
                        onClose={closeMegaMenu}
                      />
                    </div>

                    {/* RIGHT COLUMN — Medical / Advanced */}
                    <div className="p-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400 mb-4 px-1">
                        {isEn ? 'Medical & Advanced' : 'Medical & Avansat'}
                      </p>
                      <CategoryColumn
                        categories={RIGHT_CATEGORIES}
                        groups={groups}
                        isEn={isEn}
                        onClose={closeMegaMenu}
                      />
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
                    <p className="text-[10px] text-gray-400 font-medium">
                      {isEn ? 'JCI Accredited · Da Vinci Robotic · VIP Transfers' : 'Acreditat JCI · Robotic Da Vinci · Transferuri VIP'}
                    </p>
                    <Link
                      to={isEn ? '/en/contact' : '/ro/contact'}
                      onClick={closeMegaMenu}
                      className="flex items-center gap-1.5 text-[10px] font-black text-accent hover:text-prime uppercase tracking-wider transition-colors"
                    >
                      {isEn ? 'Free Consult' : 'Consultație Gratuită'} <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Simple links after Treatments */}
            {simpleLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ── Action Buttons ── */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => { setLangMenu(prev => !prev); setTreatmentsMenu(false); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-prime hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={isEn ? 'Language: English' : 'Limbă: Română'}
                aria-expanded={langMenu}
                aria-haspopup="listbox"
              >
                <Globe size={13} className="text-accent" />
                {isEn ? 'EN' : 'RO'}
                <ChevronDown size={11} className={`transition-transform duration-300 ${langMenu ? 'rotate-180' : ''}`} />
              </button>
              {langMenu && (
                <div
                  role="listbox"
                  aria-label="Select language"
                  className="absolute top-full right-0 mt-3 w-44 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[5001]"
                >
                  <Link
                    to={isEn ? getOppositeLangPath() : location.pathname}
                    role="option" aria-selected={!isEn}
                    onClick={() => setLangMenu(false)}
                    className={`flex items-center justify-between px-5 py-3.5 text-xs font-bold text-prime hover:bg-gray-50 border-b border-gray-50 transition-colors ${!isEn ? 'bg-accent/10' : ''}`}
                  >
                    <span className="flex items-center gap-2">🇷🇴 Română</span>
                    {!isEn && <ShieldCheck size={12} className="text-accent" />}
                  </Link>
                  <Link
                    to={!isEn ? getOppositeLangPath() : location.pathname}
                    role="option" aria-selected={isEn}
                    onClick={() => setLangMenu(false)}
                    className={`flex items-center justify-between px-5 py-3.5 text-xs font-bold text-prime hover:bg-gray-50 transition-colors ${isEn ? 'bg-accent/10' : ''}`}
                  >
                    <span className="flex items-center gap-2">🇬🇧 English</span>
                    {isEn && <ShieldCheck size={12} className="text-accent" />}
                  </Link>
                </div>
              )}
            </div>

            {/* Free Consultation — lg+ only */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex items-center gap-2 bg-accent text-prime px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-prime hover:text-white transition-all shadow-md hover:-translate-y-0.5 active:scale-95 whitespace-nowrap shrink-0"
              aria-label="Request Free Consultation"
            >
              <Phone size={13} />
              {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-prime focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Panel ──────────────────────────────────────────────────── */}
        <div
          id="mobile-nav-panel"
          className={`fixed inset-0 bg-[#0b1626] z-[4000] transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} overflow-y-auto`}
          role="dialog"
          aria-modal="true"
          aria-label={isEn ? 'Navigation menu' : 'Meniu de navigare'}
        >
          <div className="min-h-full flex flex-col px-6 pt-20 pb-10 relative">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-2"
            >
              <X size={28} />
            </button>
            {/* Quick call */}
            <a
              href="tel:+905324675941"
              className="absolute top-8 right-20 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-prime shadow-lg"
              aria-label="Call Meva Clinic"
            >
              <Phone size={22} />
            </a>

            {/* Simple nav items */}
            <nav className="flex flex-col gap-1 mt-4" aria-label="Mobile navigation">
              {simpleLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-2xl font-serif font-bold text-white hover:text-accent transition-colors border-b border-white/10"
                >
                  {link.name}
                </Link>
              ))}

              {/* ── Mobile Treatments Accordion (per-category) ── */}
              <div className="border-b border-white/10">
                <div className="py-4 text-2xl font-serif font-bold text-white">
                  {isEn ? 'Treatments' : 'Tratamente'}
                </div>

                {/* All categories as sub-accordions */}
                {[...LEFT_CATEGORIES, ...RIGHT_CATEGORIES].map((catKey) => {
                  const cfg = CATEGORY_CONFIG[catKey];
                  const items = groups[catKey] || [];
                  if (!cfg || items.length === 0) return null;
                  const isOpen2 = mobileAccordion === catKey;

                  return (
                    <div key={catKey} className="ml-2 mb-1">
                      <button
                        onClick={() => setMobileAccordion(isOpen2 ? null : catKey)}
                        className="w-full flex items-center justify-between py-3 pr-1 focus:outline-none group"
                        aria-expanded={isOpen2}
                      >
                        <span className="flex items-center gap-2 text-sm font-bold text-gray-300 group-hover:text-accent transition-colors">
                          <span>{cfg.icon}</span>
                          {isEn ? cfg.en : cfg.ro}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-accent/60 transition-transform duration-300 ${isOpen2 ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${isOpen2 ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-6 pb-3 flex flex-col gap-0.5 border-l border-accent/20 ml-2">
                          {items.map((treatment) => {
                            const title = getTitle(treatment.title, isEn);
                            return (
                              <Link
                                key={treatment.id}
                                to={`/${isEn ? 'en' : 'ro'}/treatments/${treatment.id}`}
                                onClick={() => { setIsOpen(false); setMobileAccordion(null); }}
                                className="flex items-center gap-2 py-2 text-sm text-gray-400 hover:text-accent transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                                {title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {simpleLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-2xl font-serif font-bold text-white hover:text-accent transition-colors border-b border-white/10"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex-1 min-h-8" />

            {/* Language switcher */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10 mb-6">
              <Link
                to={isEn ? getOppositeLangPath() : location.pathname}
                onClick={() => setIsOpen(false)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm transition-all ${!isEn ? 'bg-accent text-prime' : 'border border-white/20 text-white hover:border-accent'}`}
                aria-label="Switch to Romanian"
              >
                🇷🇴 Română
              </Link>
              <Link
                to={!isEn ? getOppositeLangPath() : location.pathname}
                onClick={() => setIsOpen(false)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm transition-all ${isEn ? 'bg-accent text-prime' : 'border border-white/20 text-white hover:border-accent'}`}
                aria-label="Switch to English"
              >
                🇬🇧 English
              </Link>
            </div>

            {/* CTA */}
            <button
              onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
              className="w-full bg-accent text-prime font-bold py-5 rounded-2xl text-lg uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg"
            >
              {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
            </button>
          </div>
        </div>
      </header>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isEn={isEn} />
    </>
  );
};

export default Header;
