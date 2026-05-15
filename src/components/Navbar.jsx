import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Activity, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { treatmentsData } from '../data/treatmentsData';

// ── Category configuration ─────────────────────────────────────────────────────
const CATEGORY_CONFIG = {
  'plastic':      { icon: '✂️',  en: 'Plastic Surgery',          ro: 'Chirurgie Plastică' },
  'bariatric':    { icon: '⚕️',  en: 'Bariatric Surgery',         ro: 'Chirurgie Bariatrică' },
  'hair':         { icon: '💇',  en: 'Hair & Brow Transplant',    ro: 'Păr & Sprâncene' },
  'dental':       { icon: '🦷',  en: 'Dental Care',               ro: 'Stomatologie' },
  'andrology':    { icon: '👨‍⚕️', en: "Andrology & Men's Health", ro: 'Andrologie & Sănătate Masculină' },
  'ivf':          { icon: '🧬',  en: 'Reproductive Medicine',     ro: 'Medicină Reproductivă' },
  'oncology':     { icon: '🔬',  en: 'Advanced Oncology',         ro: 'Oncologie Avansată' },
  'anti-gravity': { icon: '✨',  en: 'Anti-Gravity Suite',         ro: 'Suita Anti-Gravity' },
};

const LEFT_CATEGORIES  = ['plastic', 'bariatric', 'hair', 'dental'];
const RIGHT_CATEGORIES = ['andrology', 'ivf', 'oncology', 'anti-gravity'];

// ── Safe title extractor ────────────────────────────────────────────────────────
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

      const isAndrology = catKey === 'andrology';

      return (
        <div key={catKey} className={isAndrology ? "bg-accent/5 -mx-3 p-4 rounded-2xl border border-accent/10" : ""}>
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-base leading-none" role="img" aria-hidden="true">{cfg.icon}</span>
            <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${isAndrology ? 'text-accent' : 'text-gray-400'}`}>
              {isEn ? cfg.en : cfg.ro}
            </p>
          </div>

          <div className="flex flex-col gap-0.5">
            {items.map((treatment) => {
              const title = getTitle(treatment.title, isEn);
              const expertStr = typeof treatment.expert === 'object' 
                ? treatment.expert[isEn ? 'en' : 'ro'] 
                : (treatment.expert || 'Meva Specialist');

              return (
                <Link
                  key={treatment.id}
                  to={`/${isEn ? 'en' : 'ro'}/treatments/${treatment.id}`}
                  onClick={onClose}
                  className="group flex flex-col gap-0.5 px-3 py-2 rounded-xl hover:bg-white/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shrink-0" />
                    <span className="text-[11px] font-bold text-prime group-hover:text-accent transition-colors leading-snug">{title}</span>
                  </div>
                  <span className="pl-3 text-[9px] text-gray-400 font-medium uppercase tracking-wider">
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

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [langMenu, setLangMenu]           = useState(false);
  const [treatmentsMenu, setTreatmentsMenu] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const groups = groupByCategory();

  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
  }, [location.pathname]);

  const closeMegaMenu = () => setTreatmentsMenu(false);

  return (
    <nav className="fixed top-0 w-full z-[60] bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to={isEn ? '/en' : '/'} className="flex-shrink-0 flex items-center gap-2 group">
          <div className="w-10 h-10 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform">
            <ShieldCheck size={24} />
          </div>
          <span className="font-serif text-2xl font-bold text-prime tracking-tight">
            Meva<span className="text-accent">Clinic</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to={isEn ? '/en' : '/'} className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
            {isEn ? 'Home' : 'Acasă'}
          </Link>
          
          <div className="relative" onMouseEnter={() => setTreatmentsMenu(true)} onMouseLeave={() => setTreatmentsMenu(false)}>
            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
              {isEn ? 'Treatments' : 'Tratamente'}
              <ChevronDown size={14} className={`transition-transform duration-300 ${treatmentsMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {treatmentsMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[850px]">
                <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-2 p-8 gap-8">
                  <div className="border-r border-gray-50 pr-8">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 px-1">
                      {isEn ? 'Surgical Excellence' : 'Excelență Chirurgicală'}
                    </p>
                    <CategoryColumn categories={LEFT_CATEGORIES} groups={groups} isEn={isEn} onClose={closeMegaMenu} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 px-1">
                      {isEn ? 'Medical & Advanced' : 'Medical & Avansat'}
                    </p>
                    <CategoryColumn categories={RIGHT_CATEGORIES} groups={groups} isEn={isEn} onClose={closeMegaMenu} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to={isEn ? '/en/about-us' : '/ro/despre-noi'} className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
            {isEn ? 'About Us' : 'Despre Noi'}
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 border-r border-gray-100 pr-4 mr-4">
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{isEn ? 'Call Us' : 'Sună-ne'}</span>
                <a href="tel:+905324675941" className="text-sm font-bold text-prime hover:text-accent transition-colors">+90 532 467 5941</a>
             </div>
          </div>
          
          <Link to={isEn ? '/en/contact' : '/ro/contact'} className="bg-prime text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-prime/90 transition-all shadow-md">
            {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
