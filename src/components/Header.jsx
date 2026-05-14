import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Activity, ShieldCheck, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import TopBar from './TopBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const [treatmentsMenu, setTreatmentsMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
  }, [location.pathname]);

  const getOppositeLangPath = () => {
    const rawPath = location.pathname;
    // Normalize: strip trailing slash, treat empty/root as '/ro'
    const path = (rawPath.endsWith('/') && rawPath.length > 1)
      ? rawPath.slice(0, -1)
      : rawPath || '/ro';

    // Explicit static page mappings
    const mappings = {
      '/ro/despre-noi': '/en/about-us',
      '/en/about-us': '/ro/despre-noi',
      '/ro/contact': '/en/contact',
      '/en/contact': '/ro/contact',
      '/ro/faq': '/en/faq',
      '/en/faq': '/ro/faq',
      '/ro/politica-confidentialitate': '/en/privacy-policy',
      '/en/privacy-policy': '/ro/politica-confidentialitate',
      '/ro/comparatie-medicala': '/en/medical-comparison',
      '/en/medical-comparison': '/ro/comparatie-medicala',
      '/ro/blog': '/en/blog',
      '/en/blog': '/ro/blog',
      '/ro/quiz': '/en/quiz',
      '/en/quiz': '/ro/quiz',
      '/ro/concierge': '/en/concierge',
      '/en/concierge': '/ro/concierge',
      '/ro/gastric-sleeve': '/en/gastric-sleeve',
      '/en/gastric-sleeve': '/ro/gastric-sleeve',
      '/ro/gastric-bypass': '/en/gastric-bypass',
      '/en/gastric-bypass': '/ro/gastric-bypass',
      '/ro/balon-gastric': '/en/gastric-balloon',
      '/en/gastric-balloon': '/ro/balon-gastric',
      '/ro/implant-par': '/en/hair-transplant',
      '/en/hair-transplant': '/ro/implant-par',
      '/ro/implant-sprancene': '/en/eyebrow-transplant',
      '/en/eyebrow-transplant': '/ro/implant-sprancene',
      '/ro/oncologie': '/en/oncology',
      '/en/oncology': '/ro/oncologie',
      '/ro/implant-dentar': '/en/dental-implants',
      '/en/dental-implants': '/ro/implant-dentar',
      '/ro/chirurgie-plastica': '/en/plastic-surgery',
      '/en/plastic-surgery': '/ro/chirurgie-plastica',
      '/ro/transplant-organe': '/en/organ-transplant',
      '/en/organ-transplant': '/ro/transplant-organe',
      '/ro/romani-istanbul': '/en',
      '/': '/en',
      '/ro': '/en',
      '/en': '/ro',
    };

    if (mappings[path]) return mappings[path];

    // Dynamic (blog slugs, treatment slugs)
    if (path.startsWith('/ro/')) return path.replace('/ro/', '/en/');
    if (path.startsWith('/en/')) return path.replace('/en/', '/ro/');

    // Final fallback
    return isEn ? '/ro' : '/en';
  };

  // Click-outside ref to close dropdowns
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setLangMenu(false);
        setTreatmentsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: isEn ? 'Home' : 'Acasă', path: isEn ? '/en' : '/ro' },
    { name: isEn ? 'About Us' : 'Despre Noi', path: isEn ? '/en/about-us' : '/ro/despre-noi' },
    { 
      name: isEn ? 'Treatments' : 'Tratamente', 
      path: '#',
      dropdown: [
        { name: isEn ? 'Bariatric Surgery' : 'Chirurgie Bariatrică', path: isEn ? '/en/gastric-sleeve' : '/ro/gastric-sleeve' },
        { name: isEn ? 'Hair Transplant' : 'Transplant de Păr', path: isEn ? '/en/hair-transplant' : '/ro/implant-par' },
        { name: isEn ? 'Oncology' : 'Oncologie Robotică', path: isEn ? '/en/oncology' : '/ro/oncologie' },
        { name: isEn ? 'Dental Implants' : 'Implant Dentar', path: isEn ? '/en/dental-implants' : '/ro/implant-dentar' },
        { name: isEn ? 'Plastic Surgery' : 'Chirurgie Plastică', path: isEn ? '/en/plastic-surgery' : '/ro/chirurgie-plastica' },
        { name: isEn ? 'Organ Transplant' : 'Transplant de Organe', path: isEn ? '/en/organ-transplant' : '/ro/transplant-organe' }
      ]
    },
    { name: isEn ? 'Blog' : 'Blog', path: isEn ? '/en/blog' : '/ro/blog' },
    { name: isEn ? 'Contact' : 'Contact', path: isEn ? '/en/contact' : '/ro/contact' }
  ];

  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16">
          {/* Brand - Full Logo: Meva Clinic with Smooth Scroll */}
          <Link 
            to={isEn ? '/en' : '/ro'} 
            onClick={scrollToTop}
            className="flex items-center gap-4 group shrink-0" 
            aria-label="Meva Clinic Home"
          >
            <div className="w-10 h-10 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-300">
               <Activity size={24} />
            </div>
            <div className="flex flex-col">
               <span className="font-serif text-2xl font-bold leading-none text-prime">
                  Meva <span className="text-accent">Clinic</span>
               </span>
               <span className="text-[9px] font-bold uppercase tracking-[0.3em] mt-1 text-gray-600">Istanbul Excellence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-6 flex-1 mx-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={() => setTreatmentsMenu(!treatmentsMenu)}
                      className="text-xs font-bold uppercase tracking-widest transition-all hover:text-accent text-prime whitespace-nowrap flex items-center gap-1.5"
                    >
                      {link.name}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${treatmentsMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {treatmentsMenu && (
                      <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-up z-[5002]">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.name} 
                            to={item.path}
                            className="block px-6 py-4 text-[11px] font-bold text-prime hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.path}
                    className="text-xs font-bold uppercase tracking-widest transition-all hover:text-accent text-prime whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="relative" ref={menuRef}>
               <button
                 onClick={() => { setLangMenu(!langMenu); setTreatmentsMenu(false); }}
                 className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-100 text-xs font-bold text-prime hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                 aria-label={isEn ? 'Language: English. Switch language' : 'Limbă: Română. Schimbă limba'}
                 aria-expanded={langMenu}
                 aria-haspopup="listbox"
               >
                 <Globe size={14} className="text-accent" />
                 {isEn ? 'EN' : 'RO'}
                 <ChevronDown size={12} className={`transition-transform duration-300 ${langMenu ? 'rotate-180' : ''}`} />
               </button>
               {langMenu && (
                 <div
                   role="listbox"
                   aria-label="Select language"
                   className="absolute top-full right-0 mt-3 w-44 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[5001]"
                 >
                   {/* RO option */}
                   <Link
                     to={isEn ? getOppositeLangPath() : location.pathname}
                     role="option"
                     aria-selected={!isEn}
                     onClick={() => setLangMenu(false)}
                     className={`flex items-center justify-between px-5 py-4 text-xs font-bold text-prime hover:bg-gray-50 border-b border-gray-50 transition-colors ${!isEn ? 'bg-accent/10' : ''}`}
                   >
                     <span className="flex items-center gap-2">🇷🇴 Română</span>
                     {!isEn && <ShieldCheck size={13} className="text-accent" />}
                   </Link>
                   {/* EN option */}
                   <Link
                     to={!isEn ? getOppositeLangPath() : location.pathname}
                     role="option"
                     aria-selected={isEn}
                     onClick={() => setLangMenu(false)}
                     className={`flex items-center justify-between px-5 py-4 text-xs font-bold text-prime hover:bg-gray-50 transition-colors ${isEn ? 'bg-accent/10' : ''}`}
                   >
                     <span className="flex items-center gap-2">🇬🇧 English</span>
                     {isEn && <ShieldCheck size={13} className="text-accent" />}
                   </Link>
                 </div>
               )}
            </div>

            {/* Free Consultation — only on large screens to prevent overflow */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex items-center gap-2 bg-accent text-prime px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-prime hover:text-white transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 whitespace-nowrap shrink-0"
              aria-label="Request Free Consultation"
            >
              <Phone size={14} />
              {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="lg:hidden p-2 text-prime focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? (isEn ? "Close navigation menu" : "Închide meniul de navigație") : (isEn ? "Open navigation menu" : "Deschide meniul de navigație")}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div id="mobile-nav-panel" className={`fixed inset-0 bg-[#0b1626] z-[4000] transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} role="dialog" aria-modal="true" aria-label={isEn ? "Navigation menu" : "Meniu de navigare"}>
           <div className="h-full flex flex-col justify-center items-center space-y-8 px-8 relative">
              <button
                onClick={() => setIsOpen(false)}
                aria-label={isEn ? "Close navigation menu" : "Închide meniul"}
                className="absolute top-6 right-6 text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-2"
              >
                <X size={28} />
              </button>
              <a 
                href="tel:+905324675941" 
                className="absolute top-10 right-20 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-prime shadow-lg sm:hidden"
                aria-label={isEn ? "Call Meva Clinic" : "Sună la Meva Clinic"}
              >
                <Phone size={24} />
              </a>
              {navLinks.map((link) => (
                <div key={link.name} className="w-full text-center">
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{link.name}</p>
                      <div className="flex flex-col space-y-4">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.name} 
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-serif font-bold text-white hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-serif font-bold text-white hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <Link
                  to={isEn ? getOppositeLangPath() : location.pathname}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${!isEn ? 'bg-accent text-prime' : 'border border-white/20 text-white hover:border-accent'}`}
                  aria-label="Switch to Romanian"
                >
                  🇷🇴 Română
                </Link>
                <Link
                  to={!isEn ? getOppositeLangPath() : location.pathname}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${isEn ? 'bg-accent text-prime' : 'border border-white/20 text-white hover:border-accent'}`}
                  aria-label="Switch to English"
                >
                  🇬🇧 English
                </Link>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full max-w-xs bg-accent text-prime font-bold py-5 rounded-2xl text-lg uppercase tracking-widest"
              >
                {isEn ? 'Consultation' : 'Consultație'}
              </button>
           </div>
        </div>
      </header>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        isEn={isEn} 
      />
    </>
  );
};

export default Header;

