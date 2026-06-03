// Architectural fix: removed // @ts-nocheck — types are now enforced
'use client';

// src/components/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, ShieldCheck, Phone, ArrowRight, Menu, X, Activity, Sparkles, Scissors, HeartPulse, Stethoscope, Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import AppointmentModal from './AppointmentModal';
import TopBar from './TopBar';
import { treatmentsData } from '../data/treatmentsData';
import { tUI } from '@/utils/uiTranslations';
import { MevaLogo } from './MevaLogo';
import { maskDoctorName } from '@/utils/doctorUtils';

// ── Category configuration ─────────────────────────────────────────────────────
const CATEGORY_CONFIG = {
  'bariatric':    { icon: Activity,    en: 'Bariatric Surgery',         ro: 'Chirurgie Bariatrică', es: 'Cirugía Bariátrica', it: 'Chirurgia Bariatrica', ru: 'Бариатрическая хирургия', fr: 'Chirurgie Bariatrique', de: 'Bariatrische Chirurgie' },
  'hair':         { icon: Sparkles,    en: 'Hair & Brow Transplant',    ro: 'Păr & Sprâncene', es: 'Trasplante de Cabello y Cejas', it: 'Trapianto di Capelli e Sopracciglia', ru: 'Пересадка волос и бровей', fr: 'Greffe de Cheveux et Sourcils', de: 'Haar- & Augenbrauentransplantation' },
  'dental':       { icon: Star,        en: 'Dental Care',               ro: 'Stomatologie', es: 'Cuidado Dental', it: 'Cure Dentali', ru: 'Стоматология', fr: 'Soins Dentaires', de: 'Zahnpflege' },
  'plastic':      { icon: Scissors,    en: 'Plastic Surgery',          ro: 'Chirurgie Plastică', es: 'Cirugía Plástica', it: 'Chirurgia Plastica', ru: 'Пластическая хирургия', fr: 'Chirurgie Plastique', de: 'Plastische Chirurgie' },
  'andrology':    { icon: HeartPulse,  en: "Andrology & Men's Health", ro: 'Andrologie & Sănătate Masculină', es: "Andrología y Salud Masculina", it: "Andrologia e Salute Maschile", ru: "Андрология и мужское здоровье", fr: "Andrologie et Santé Masculine", de: "Andrologie & Männergesundheit" },
  'specialist':   { icon: Stethoscope, en: 'Specialist Treatments',    ro: 'Tratamente Specializate', es: 'Tratamientos Especializados', it: 'Trattamenti Specialistici', ru: 'Специализированное лечение', fr: 'Traitements Spécialisés', de: 'Spezialbehandlungen' },
};

const LEFT_CATEGORIES  = ['bariatric', 'hair', 'dental'];
const RIGHT_CATEGORIES = ['plastic', 'andrology', 'specialist'];

// ── Safe title extractor ────────────────────────────────────────────────────────
const getSafeVal = (val: string | Record<string, string> | null | undefined, locale: string): string => {
  if (!val) return '';
  return typeof val === 'object' ? (val[locale] || val['en'] || '') : val;
};

// ── Build grouped treatments (computed once at module load, not per render) ────
const groupByCategory = (): Record<string, typeof treatmentsData> => {
  const groups: Record<string, typeof treatmentsData> = {};
  treatmentsData.forEach((t) => {
    if (!CATEGORY_CONFIG[t.category as keyof typeof CATEGORY_CONFIG]) return;
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  });
  return groups;
};

// Computed once at module initialization — not inside the component render cycle
const TREATMENT_GROUPS = groupByCategory();

// ── CategoryColumn sub-component ───────────────────────────────────────────────
const CategoryColumn = ({ 
  categories, 
  groups, 
  lang, 
  onClose 
}: { 
  categories: any[]; 
  groups: any; 
  lang: string; 
  onClose: () => void; 
}) => (
  <div className="flex flex-col gap-8">
    {categories.map((catKey) => {
      const cfg = CATEGORY_CONFIG[catKey as keyof typeof CATEGORY_CONFIG] as any;
      const items = groups[catKey] || [];
      if (!cfg || items.length === 0) return null;

      const Icon = cfg.icon;
      const isHighDensity = catKey === 'plastic' || catKey === 'andrology';

      return (
        <div key={catKey} className={`rounded-3xl transition-all ${isHighDensity ? "bg-gradient-to-br from-accent/5 to-transparent -mx-4 p-5 border border-accent/10 shadow-sm" : "px-2"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isHighDensity ? 'bg-accent/10 text-accent' : 'bg-gray-50 text-gray-400'}`}>
               <Icon size={18} strokeWidth={1.5} />
            </div>
            <p className={`text-sm font-semibold tracking-wide ${isHighDensity ? 'text-accent' : 'text-prime'}`}>
              {cfg[lang] || cfg['en']}
            </p>
          </div>

          <div className={`grid ${isHighDensity ? 'grid-cols-2 gap-x-4 gap-y-2' : 'flex flex-col gap-1.5'}`}>
            {items.map((treatment: any) => {
              const title = getSafeVal(treatment.title, lang);
              const expertStr = maskDoctorName(getSafeVal(treatment.expert, lang) || tUI('Meva Specialist', lang));

              return (
                <Link
                  key={treatment.id}
                  href={`/${lang}/treatments/${treatment.id}`}
                  onClick={onClose}
                  className="group flex flex-col gap-1 px-3 py-2.5 rounded-xl hover:bg-white hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600 group-hover:text-prime transition-colors leading-tight">
                      {title}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium group-hover:text-accent transition-colors">
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

const getTranslatedPath = (currentPath: string, targetLang: string) => {
  if (!currentPath || currentPath === '/') return `/${targetLang}`;
  const parts = currentPath.split('/');
  
  // If we are on a known RO path, translate back to EN before replacing language
  if (targetLang !== 'ro' && ROUTE_MAP[currentPath as keyof typeof ROUTE_MAP]) {
     currentPath = ROUTE_MAP[currentPath as keyof typeof ROUTE_MAP];
  }
  // If we are targeting RO from EN, try to use ROUTE_MAP
  else if (targetLang === 'ro') {
     const roPath = Object.keys(ROUTE_MAP).find(k => ROUTE_MAP[k as keyof typeof ROUTE_MAP] === currentPath);
     if (roPath) return roPath;
  }

  const newParts = currentPath.split('/');
  if (newParts.length > 1 && ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(newParts[1])) {
    newParts[1] = targetLang;
    return newParts.join('/');
  }
  
  return `/${targetLang}`;
};


const Header = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [langMenu, setLangMenu]           = useState(false);
  const [treatmentsMenu, setTreatmentsMenu] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';
  const isEn = lang === 'en';
  const t = useTranslations('Navigation');

  const groups = TREATMENT_GROUPS;

  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
    setMobileAccordion(null);
  }, [pathname]);

  const closeMegaMenu = () => setTreatmentsMenu(false);

  const langRef = useRef(null);
  const treatmentsRef = useRef(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (langRef.current && !(langRef.current as any).contains(e.target)) setLangMenu(false);
      if (treatmentsRef.current && !(treatmentsRef.current as any).contains(e.target)) setTreatmentsMenu(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const simpleLinks = [
    { name: t('home'),     path: `/${lang}`            },
    { name: t('about'),    path: `/${lang}/about-us` },
    { name: 'Blog',        path: `/${lang}/blog`       },
    { name: t('contact'),  path: `/${lang}/contact`    },
  ];

  return (
    <>
      <TopBar />
      <header className="fixed top-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 lg:py-4 mt-[40px] lg:mt-[32px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group -ml-1">
            <MevaLogo href={`/${lang}`} className="w-[180px] lg:w-[220px] h-auto group-hover:opacity-80 transition-opacity" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {simpleLinks.slice(0, 2).map((link) => (
              <Link key={link.path} href={link.path} className="text-[13px] font-medium tracking-wide text-prime hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
            
            <div className="relative" ref={treatmentsRef} onMouseEnter={() => setTreatmentsMenu(true)} onMouseLeave={() => setTreatmentsMenu(false)}>
              <button onClick={() => setTreatmentsMenu(!treatmentsMenu)} className="flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-prime hover:text-accent transition-colors py-2">
                {tUI('Treatments', lang)}
                <ChevronDown size={14} className={`transition-transform duration-300 opacity-70 ${treatmentsMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {treatmentsMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[1000px]">
                  <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[85vh]">
                    <div className="grid grid-cols-2 p-10 gap-12 overflow-y-auto custom-scrollbar">
                      <div className="border-r border-gray-100 pr-12">
                        <p className="text-xs font-medium tracking-wider text-gray-400 mb-8 flex items-center gap-3">
                          <span className="w-6 h-px bg-gray-200"></span>
                          {tUI('Clinical Specialties', lang)}
                        </p>
                        <CategoryColumn categories={LEFT_CATEGORIES} groups={groups} lang={lang} onClose={closeMegaMenu} />
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-wider text-gray-400 mb-8 flex items-center gap-3">
                          <span className="w-6 h-px bg-gray-200"></span>
                          {tUI('Surgical & Specialist', lang)}
                        </p>
                        <CategoryColumn categories={RIGHT_CATEGORIES} groups={groups} lang={lang} onClose={closeMegaMenu} />
                      </div>
                    </div>
                    
                    {/* High-Intent SEO Footer Area */}
                    <div className="bg-gray-50/50 p-8 px-12 border-t border-gray-100 flex items-center justify-between shrink-0">
                       <div className="flex-1 pr-12">
                         <p className="text-sm font-medium text-prime mb-3 flex items-center gap-2">
                            <ShieldCheck size={16} className="text-accent" />
                            {tUI('Meva Clinic Excellence', lang)}
                         </p>
                         <p className="text-xs text-gray-500 leading-relaxed font-medium">
                           {tUI('As a JCI-accredited premium medical facility in Istanbul, Turkey, we specialize in high-end bariatric, plastic surgery, and elite dental reconstructions. All procedures include VIP transfers, 5-star Bosphorus accommodation, and dedicated concierge support with a no-hidden-fees guarantee.', lang)}
                         </p>
                       </div>
                       <Link href={`/${lang}/contact`} onClick={closeMegaMenu} className="shrink-0 bg-prime text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-accent hover:text-prime transition-all shadow-lg hover:-translate-y-0.5">
                          {tUI('Book Consultation', lang)}
                       </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {simpleLinks.slice(2).map((link) => (
              <Link key={link.path} href={link.path} className="text-[13px] font-medium tracking-wide text-prime hover:text-accent transition-colors">
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
                 className="flex items-center gap-2 text-[12px] font-medium text-gray-500 hover:text-prime transition-colors px-3 py-2 rounded-full hover:bg-gray-50 uppercase"
               >
                 <img src={lang === 'ro' ? "https://flagcdn.com/w20/ro.png" : lang === 'es' ? "https://flagcdn.com/w20/es.png" : lang === 'it' ? "https://flagcdn.com/w20/it.png" : lang === 'ru' ? "https://flagcdn.com/w20/ru.png" : lang === 'fr' ? "https://flagcdn.com/w20/fr.png" : lang === 'de' ? "https://flagcdn.com/w20/de.png" : "https://flagcdn.com/w20/gb.png"} width="16" alt={lang} className="rounded-full shadow-sm" />
                 {lang}
               </button>
               {langMenu && (
                 <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-[2000]">
                   <Link href={getTranslatedPath(pathname, 'en')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/gb.png" width="16" alt="English" className="rounded-[2px] shadow-sm" /> English
                   </Link>
                   <Link href={getTranslatedPath(pathname, 'ro')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/ro.png" width="16" alt="Română" className="rounded-[2px] shadow-sm" /> Română
                   </Link>
                   <Link href={getTranslatedPath(pathname, 'es')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/es.png" width="16" alt="Español" className="rounded-[2px] shadow-sm" /> Español
                   </Link>
                   <Link href={getTranslatedPath(pathname, 'it')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/it.png" width="16" alt="Italiano" className="rounded-[2px] shadow-sm" /> Italiano
                   </Link>
                   <Link href={getTranslatedPath(pathname, 'ru')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/ru.png" width="16" alt="Русский" className="rounded-[2px] shadow-sm" /> Русский
                   </Link>
                   <Link href={getTranslatedPath(pathname, 'fr')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/fr.png" width="16" alt="Français" className="rounded-[2px] shadow-sm" /> Français
                   </Link>
                   <Link href={getTranslatedPath(pathname, 'de')} onClick={() => setLangMenu(false)} className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg text-prime">
                     <img src="https://flagcdn.com/w20/de.png" width="16" alt="Deutsch" className="rounded-[2px] shadow-sm" /> Deutsch
                   </Link>
                 </div>
               )}
            </div>

            <button onClick={() => setIsModalOpen(true)} className="hidden md:block bg-prime text-white px-7 py-2.5 rounded-full text-[13px] font-medium hover:bg-prime/90 transition-all shadow-md">
              {tUI('Consultation', lang)}
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
        <div className="p-8 flex flex-col gap-5">
           {simpleLinks.map(link => (
             <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className="block text-xl font-medium text-prime border-b border-gray-100 pb-4">{link.name}</Link>
           ))}
           <div className="mt-4">
              <p className="text-[11px] font-medium tracking-widest text-accent mb-6">{tUI('Treatments', lang)}</p>
              {[...LEFT_CATEGORIES, ...RIGHT_CATEGORIES].map(catKey => {
                const cfg = CATEGORY_CONFIG[catKey as keyof typeof CATEGORY_CONFIG] as any;
                const items = groups[catKey] || [];
                if (!cfg || items.length === 0) return null;
                const isMobOpen = mobileAccordion === catKey;
                return (
                  <div key={catKey} className="mb-2">
                     <button onClick={() => setMobileAccordion(isMobOpen ? null : catKey)} className="w-full flex justify-between items-center py-3.5 text-prime font-medium border-b border-gray-50">
                        <span className="flex items-center gap-3">
                           {React.createElement(cfg.icon, { size: 18, className: "text-accent opacity-80" })} 
                           {cfg[lang] || cfg['en']}
                        </span>
                        <ChevronDown size={16} className={`transition-transform ${isMobOpen ? 'rotate-180 text-accent' : 'text-gray-300'}`} />
                     </button>
                     {isMobOpen && (
                       <div className="pl-8 flex flex-col gap-3 mt-3 mb-2">
                         {items.map(t => (
                           <Link key={t.id} href={`/${lang}/treatments/${t.id}`} onClick={() => setIsOpen(false)} className="text-sm font-light text-gray-500 hover:text-prime">{getSafeVal(t.title, lang)}</Link>
                         ))}
                       </div>
                     )}
                  </div>
                );
              })}
           </div>
           <button onClick={() => {setIsOpen(false); setIsModalOpen(true);}} className="mt-8 bg-prime text-white font-medium py-4 rounded-full shadow-lg">
             {tUI('Free Consultation', lang)}
           </button>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isEn={isEn} />
    </>
  );
};

export default Header;
