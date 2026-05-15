import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Activity, ShieldCheck, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import TopBar from './TopBar';

const Header = () => {
  const [isOpen, setIsOpen]               = useState(false);   // mobile panel
  const [langMenu, setLangMenu]           = useState(false);   // desktop lang dropdown
  const [treatmentsMenu, setTreatmentsMenu] = useState(false); // desktop treatments dropdown
  const [mobileAccordion, setMobileAccordion] = useState(false); // mobile treatments accordion
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
    setMobileAccordion(false);
  }, [location.pathname]);

  // ── Opposite language path mapping ─────────────────────────────────────────
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
      '/ro/concierge': '/en/concierge',         '/en/concierge': '/ro/concierge',
      '/ro/gastric-sleeve': '/en/gastric-sleeve',       '/en/gastric-sleeve': '/ro/gastric-sleeve',
      '/ro/gastric-bypass': '/en/gastric-bypass',       '/en/gastric-bypass': '/ro/gastric-bypass',
      '/ro/balon-gastric': '/en/gastric-balloon',       '/en/gastric-balloon': '/ro/balon-gastric',
      '/ro/implant-par': '/en/hair-transplant',         '/en/hair-transplant': '/ro/implant-par',
      '/ro/implant-sprancene': '/en/eyebrow-transplant','/en/eyebrow-transplant': '/ro/implant-sprancene',
      '/ro/oncologie': '/en/oncology',                  '/en/oncology': '/ro/oncologie',
      '/ro/implant-dentar': '/en/dental-implants',      '/en/dental-implants': '/ro/implant-dentar',
      '/ro/chirurgie-plastica': '/en/plastic-surgery',  '/en/plastic-surgery': '/ro/chirurgie-plastica',
      '/ro/transplant-organe': '/en/organ-transplant',  '/en/organ-transplant': '/ro/transplant-organe',
      '/ro/ivf-ciprul-de-nord': '/en/ivf-northern-cyprus', '/en/ivf-northern-cyprus': '/ro/ivf-ciprul-de-nord',
      '/ro/andrologie': '/en/andrology',                '/en/andrology': '/ro/andrologie',
      '/ro/romani-istanbul': '/en',
      '/': '/en', '/ro': '/en', '/en': '/ro',
    };

    if (mappings[path]) return mappings[path];
    if (path.startsWith('/ro/')) return path.replace('/ro/', '/en/');
    if (path.startsWith('/en/')) return path.replace('/en/', '/ro/');
    return isEn ? '/ro' : '/en';
  };

  // ── Separate refs for each dropdown ────────────────────────────────────────
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

  // ── Nav links definition ────────────────────────────────────────────────────
  const navLinks = [
    { name: isEn ? 'Home' : 'Acasă',       path: isEn ? '/en' : '/ro' },
    { name: isEn ? 'About Us' : 'Despre Noi', path: isEn ? '/en/about-us' : '/ro/despre-noi' },
    {
      name: isEn ? 'Treatments' : 'Tratamente',
      path: '#',
      dropdown: [
        { name: isEn ? 'Bariatric Surgery'         : 'Chirurgie Bariatrică',       path: isEn ? '/en/gastric-sleeve'                    : '/ro/gastric-sleeve'                    },
        { name: isEn ? 'Hair Transplant'           : 'Transplant de Păr',          path: isEn ? '/en/hair-transplant'                   : '/ro/implant-par'                        },
        { name: isEn ? 'IVF · Cyprus'              : 'FIV · Cipru',                path: isEn ? '/en/ivf-northern-cyprus'               : '/ro/ivf-ciprul-de-nord'                 },
        { name: isEn ? 'Oncology'                  : 'Oncologie Robotică',         path: isEn ? '/en/oncology'                          : '/ro/oncologie'                          },
        { name: isEn ? 'Dental Implants'           : 'Implant Dentar',             path: isEn ? '/en/dental-implants'                   : '/ro/implant-dentar'                     },
        { name: isEn ? 'Plastic Surgery'           : 'Chirurgie Plastică',         path: isEn ? '/en/plastic-surgery'                   : '/ro/chirurgie-plastica'                 },
        { name: isEn ? 'Organ Transplant'          : 'Transplant de Organe',       path: isEn ? '/en/organ-transplant'                  : '/ro/transplant-organe'                  },
        { name: isEn ? 'Eyebrow Transplant'        : 'Transplant Sprâncene',       path: isEn ? '/en/eyebrow-transplant'                : '/ro/implant-sprancene'                   },
        // ── Andrology ──
        { name: isEn ? '── Andrology ──'           : '── Andrologie ──',           path: isEn ? '/en/andrology'                         : '/ro/andrologie',                        isSectionLabel: true },
        { name: isEn ? 'Penis Enlargement Surgery' : 'Mărire Penis Chirurgical',   path: isEn ? '/en/treatments/penis-enlargement-surgery' : '/ro/treatments/penis-enlargement-surgery' },
        { name: isEn ? 'Non-Surgical Girth (HA)'  : 'Îngroșare Non-Chirurgicală', path: isEn ? '/en/treatments/non-surgical-enlargement'  : '/ro/treatments/non-surgical-enlargement'  },
        { name: isEn ? 'ED: ESWT & P-Shot'         : 'ED: ESWT & P-Shot',          path: isEn ? '/en/treatments/ed-treatments-eswt-pshot'  : '/ro/treatments/ed-treatments-eswt-pshot'  },
        { name: isEn ? 'Penile Prosthesis'          : 'Proteză Peniană',            path: isEn ? '/en/treatments/penile-prosthesis'         : '/ro/treatments/penile-prosthesis'         },
      ],
    },
    { name: 'Blog',                          path: isEn ? '/en/blog'    : '/ro/blog'    },
    { name: isEn ? 'Contact' : 'Contact',   path: isEn ? '/en/contact' : '/ro/contact' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <TopBar />
      <header className="sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            to={isEn ? '/en' : '/ro'}
            onClick={scrollToTop}
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
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  /* Treatments dropdown */
                  <div ref={treatmentsRef}>
                    <button
                      onClick={() => { setTreatmentsMenu(prev => !prev); setLangMenu(false); }}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors whitespace-nowrap focus:outline-none focus:text-accent"
                      aria-haspopup="true"
                      aria-expanded={treatmentsMenu}
                    >
                      {link.name}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${treatmentsMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {treatmentsMenu && (
                      <div
                        className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[5002] animate-fade-up"
                        role="menu"
                      >
                        {link.dropdown.map((item) => (
                          item.isSectionLabel ? (
                            <div key={item.name} className="px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-accent/80 bg-prime/5 border-b border-gray-100">
                              {isEn ? 'Andrology & Men\'s Health' : 'Andrologie & Sănătatea Bărbaților'}
                            </div>
                          ) : (
                            <Link
                              key={item.name}
                              to={item.path}
                              role="menuitem"
                              onClick={() => setTreatmentsMenu(false)}
                              className="flex items-center gap-3 px-5 py-3.5 text-[11px] font-bold text-prime hover:bg-gray-50 hover:text-accent border-b border-gray-50 last:border-0 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {item.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
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

        {/* ── Mobile Menu Panel ──────────────────────────────────────────────── */}
        <div
          id="mobile-nav-panel"
          className={`fixed inset-0 bg-[#0b1626] z-[4000] transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} overflow-y-auto`}
          role="dialog"
          aria-modal="true"
          aria-label={isEn ? 'Navigation menu' : 'Meniu de navigare'}
        >
          <div className="min-h-full flex flex-col px-8 pt-20 pb-10 relative">
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

            {/* Nav items */}
            <nav className="flex flex-col gap-2 mt-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    /* ── Treatments Accordion ── */
                    <div>
                      <button
                        onClick={() => setMobileAccordion(prev => !prev)}
                        className="w-full flex items-center justify-between py-4 border-b border-white/10 focus:outline-none group"
                        aria-expanded={mobileAccordion}
                      >
                        <span className="text-2xl font-serif font-bold text-white group-hover:text-accent transition-colors">
                          {link.name}
                        </span>
                        <ChevronDown
                          size={22}
                          className={`text-accent transition-transform duration-300 ${mobileAccordion ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {/* Accordion content */}
                      <div
                        className={`overflow-hidden transition-all duration-400 ${mobileAccordion ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="pt-3 pb-4 pl-4 flex flex-col gap-1">
                          {link.dropdown.map((item) => (
                            item.isSectionLabel ? (
                              <div key={item.name} className="py-2 text-[9px] font-black uppercase tracking-[0.2em] text-accent mt-2">
                                {isEn ? '— Andrology & Men\'s Health —' : '— Andrologie & Sănătatea Bărbaților —'}
                              </div>
                            ) : (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => { setIsOpen(false); setMobileAccordion(false); }}
                                className="flex items-center gap-3 py-3 text-base font-semibold text-gray-300 hover:text-accent transition-colors border-b border-white/5 last:border-0"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {item.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-2xl font-serif font-bold text-white hover:text-accent transition-colors border-b border-white/10"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Spacer */}
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
