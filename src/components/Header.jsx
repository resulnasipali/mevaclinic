// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, ShieldCheck, Phone, ArrowRight, Menu, X, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import TopBar from './TopBar';
import { treatmentsData } from '../data/treatmentsData';

// ── Category configuration ─────────────────────────────────────────────────────
const CATEGORY_CONFIG = {
  'bariatric':    { icon: '⚕️',  en: 'Bariatric Surgery',         ro: 'Chirurgie Bariatrică' },
  'hair':         { icon: '💇',  en: 'Hair & Brow Transplant',    ro: 'Păr & Sprâncene' },
  'dental':       { icon: '🦷',  en: 'Dental Care',               ro: 'Stomatologie' },
  'plastic':      { icon: '✂️',  en: 'Plastic Surgery',          ro: 'Chirurgie Plastică' },
  'andrology':    { icon: '👨‍⚕️', en: "Andrology & Men's Health", ro: 'Andrologie & Sănătate Masculină' },
  'specialist':   { icon: '🔬',  en: 'Specialist Treatments',    ro: 'Tratamente Specializate' },
};

const LEFT_CATEGORIES  = ['bariatric', 'hair', 'dental'];
const RIGHT_CATEGORIES = ['plastic', 'andrology', 'specialist'];

// ── Safe title extractor ────────────────────────────────────────────────────────
const getSafeVal = (val, isEn) => {
  if (!val) return '';
  return typeof val === 'object' ? (val[isEn ? 'en' : 'ro'] || val) : val;
};

// ── Build grouped treatments ────────────────────────────────────────────────────
const groupByCategory = () => {
  const groups = {};
  treatmentsData.forEach((t) => {
    if (!CATEGORY_CONFIG[t.category]) return;
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  });
  return groups;
};

// ── CategoryColumn sub-component ───────────────────────────────────────────────
const CategoryColumn = ({ categories, groups, isEn, onClose }) => (
  <div className="flex flex-col gap-6">
    {categories.map((catKey) => {
      const cfg = CATEGORY_CONFIG[catKey];
      const items = groups[catKey] || [];
      if (!cfg || items.length === 0) return null;

      const isHighDensity = catKey === 'plastic' || catKey === 'andrology';

      return (
        <div key={catKey} className={`rounded-2xl transition-all ${isHighDensity ? "bg-accent/5 -mx-2 p-3 border border-accent/10" : ""}`}>
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="text-base" role="img" aria-hidden="true">{cfg.icon}</span>
            <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${isHighDensity ? 'text-accent' : 'text-gray-400'}`}>
              {isEn ? cfg.en : cfg.ro}
            </p>
          </div>

          <div className={`grid ${isHighDensity ? 'grid-cols-2 gap-x-3 gap-y-0.5' : 'flex flex-col gap-0.5'}`}>
            {items.map((treatment) => {
              const title = getSafeVal(treatment.title, isEn);
              const expertStr = getSafeVal(treatment.expert, isEn) || (isEn ? 'Meva Specialist' : 'Specialist Meva');

              return (
                <Link
                  key={treatment.id}
                  to={`/${isEn ? 'en' : 'ro'}/treatments/${treatment.id}`}
                  onClick={onClose}
                  className="group flex flex-col gap-0 px-2 py-1.5 rounded-lg hover:bg-white/60 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors shrink-0" />
                    <span className="text-[10px] font-bold text-prime group-hover:text-accent transition-colors leading-tight">
                      {title}
                    </span>
                  </div>
                  <span className="pl-2.5 text-[8px] text-gray-400 font-medium uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis">
                    {expertStr}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

const ROUTE_MAP = {
  '/ro/despre-noi': '/en/about-us',
  '/en/about-us': '/ro/despre-noi',
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
  '/ro/politica-confidentialitate': '/en/privacy-policy',
  '/en/privacy-policy': '/ro/politica-confidentialitate',
  '/ro/comparatie-medicala': '/en/medical-comparison',
  '/en/medical-comparison': '/ro/comparatie-medicala',
  '/ro/fiv': '/en/ivf',
  '/en/ivf': '/ro/fiv',
  '/ro/ivf-ciprul-de-nord': '/en/ivf-northern-cyprus',
  '/en/ivf-northern-cyprus': '/ro/ivf-ciprul-de-nord',
  '/ro/transplant-par-mixt': '/en/mixed-hair-transplant',
  '/en/mixed-hair-transplant': '/ro/transplant-par-mixt',
  '/ro/transplant-par-dhi': '/en/dhi-hair-transplant',
  '/en/dhi-hair-transplant': '/ro/transplant-par-dhi',
};

const getTranslatedPath = (currentPath, targetLang) => {
  if (targetLang === 'en') {
    if (currentPath === '/' || currentPath === '/ro') return '/en';
    if (ROUTE_MAP[currentPath]) return ROUTE_MAP[currentPath];
    if (currentPath.startsWith('/ro/')) return currentPath.replace('/ro/', '/en/');
    return '/en';
  } else {
    if (currentPath === '/en') return '/ro';
    if (ROUTE_MAP[currentPath]) return ROUTE_MAP[currentPath];
    if (currentPath.startsWith('/en/')) return currentPath.replace('/en/', '/ro/');
    if (currentPath === '/') return '/ro';
    return '/ro';
  }
};


const Header = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [langMenu, setLangMenu]           = useState(false);
  const [treatmentsMenu, setTreatmentsMenu] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const groups = groupByCategory();

  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  const closeMegaMenu = () => setTreatmentsMenu(false);

  const langRef = useRef(null);
  const treatmentsRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangMenu(false);
      if (treatmentsRef.current && !treatmentsRef.current.contains(e.target)) setTreatmentsMenu(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const simpleLinks = [
    { name: isEn ? 'Home'     : 'Acasă',      path: isEn ? '/en'            : '/ro'            },
    { name: isEn ? 'About Us' : 'Despre Noi', path: isEn ? '/en/about-us'   : '/ro/despre-noi' },
    { name: 'Blog',                            path: isEn ? '/en/blog'        : '/ro/blog'       },
    { name: isEn ? 'Contact'  : 'Contact',    path: isEn ? '/en/contact'     : '/ro/contact'    },
  ];

  return (
    <>
      <TopBar />
      <header className="fixed top-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 lg:py-4 mt-[40px] lg:mt-[32px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to={isEn ? '/en' : '/'} className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <span className="font-serif text-xl lg:text-2xl font-bold text-prime tracking-tight">
              Meva<span className="text-accent">Clinic</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {simpleLinks.slice(0, 2).map((link) => (
              <Link key={link.path} to={link.path} className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
            
            <div className="relative" ref={treatmentsRef} onMouseEnter={() => setTreatmentsMenu(true)} onMouseLeave={() => setTreatmentsMenu(false)}>
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors py-2">
                {isEn ? 'Treatments' : 'Tratamente'}
                <ChevronDown size={14} className={`transition-transform duration-300 ${treatmentsMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {treatmentsMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[850px]">
                  <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden grid grid-cols-2 p-8 gap-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
                    <div className="border-r border-gray-50 pr-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6 px-1">
                        {isEn ? 'Clinical Specialties' : 'Specialități Clinice'}
                      </p>
                      <CategoryColumn categories={LEFT_CATEGORIES} groups={groups} isEn={isEn} onClose={closeMegaMenu} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6 px-1">
                        {isEn ? 'Surgical & Specialist' : 'Chirurgie & Specialiști'}
                      </p>
                      <CategoryColumn categories={RIGHT_CATEGORIES} groups={groups} isEn={isEn} onClose={closeMegaMenu} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {simpleLinks.slice(2).map((link) => (
              <Link key={link.path} to={link.path} className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
             <div className="relative" ref={langRef}>
               <button 
                 onClick={() => setLangMenu(!langMenu)}
                 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-prime transition-colors px-3 py-2 rounded-lg bg-gray-50 border border-gray-100"
               >
                 <span className="text-sm leading-none" role="img" aria-label={isEn ? "English" : "Română"}>{isEn ? '🇬🇧' : '🇷🇴'}</span>
                 {isEn ? 'EN' : 'RO'}
               </button>
               {langMenu && (
                 <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-[2000]">
                   <Link to={getTranslatedPath(location.pathname, 'ro')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg">
                     <span className="text-base leading-none">🇷🇴</span> Română
                   </Link>
                   <Link to={getTranslatedPath(location.pathname, 'en')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg">
                     <span className="text-base leading-none">🇬🇧</span> English
                   </Link>
                 </div>
               )}
            </div>

            <button onClick={() => setIsModalOpen(true)} className="hidden md:block bg-prime text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-prime/90 transition-all shadow-md">
              {isEn ? 'Consultation' : 'Consultație'}
            </button>

            {/* Mobile hamburger */}
            <button className="lg:hidden p-2 text-prime" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 top-[110px] bg-white z-[3000] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto lg:hidden`}>
        <div className="p-6 flex flex-col gap-4">
           {simpleLinks.map(link => (
             <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-xl font-bold text-prime border-b border-gray-100 pb-3">{link.name}</Link>
           ))}
           <div className="mt-4">
              <p className="text-xs font-black uppercase text-gray-400 mb-4">{isEn ? 'Treatments' : 'Tratamente'}</p>
              {[...LEFT_CATEGORIES, ...RIGHT_CATEGORIES].map(catKey => {
                const cfg = CATEGORY_CONFIG[catKey];
                const items = groups[catKey] || [];
                if (!cfg || items.length === 0) return null;
                const isMobOpen = mobileAccordion === catKey;
                return (
                  <div key={catKey} className="mb-2">
                     <button onClick={() => setMobileAccordion(isMobOpen ? null : catKey)} className="w-full flex justify-between items-center py-2 text-prime font-bold">
                        <span>{cfg.icon} {isEn ? cfg.en : cfg.ro}</span>
                        <ChevronDown size={14} className={isMobOpen ? 'rotate-180' : ''} />
                     </button>
                     {isMobOpen && (
                       <div className="pl-6 flex flex-col gap-2 mt-2">
                         {items.map(t => (
                           <Link key={t.id} to={`/${isEn ? 'en' : 'ro'}/treatments/${t.id}`} onClick={() => setIsOpen(false)} className="text-sm text-gray-600">{getSafeVal(t.title, isEn)}</Link>
                         ))}
                       </div>
                     )}
                  </div>
                );
              })}
           </div>
           <button onClick={() => {setIsOpen(false); setIsModalOpen(true);}} className="mt-8 bg-accent text-prime font-bold py-4 rounded-xl uppercase tracking-widest">
             {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
           </button>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isEn={isEn} />
    </>
  );
};

export default Header;
