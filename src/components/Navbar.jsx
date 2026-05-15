import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isEn = location.pathname.startsWith('/en');

  const handleLangSwap = (lang) => {
    let current = location.pathname;
    if (lang === 'en') {
      if (current.includes('/ro')) navigate(current.replace('/ro', '/en'));
      else navigate('/en/gastric-sleeve');
    } else {
      if (current.includes('/en')) navigate(current.replace('/en', '/ro'));
      else navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-serif text-2xl font-bold text-prime tracking-tight">
              Meva<span className="text-accent">Clinic</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-prime font-medium font-sans transition-colors">Acasă</Link>
            <Link to={isEn ? "/en/about-us" : "/ro/despre-noi"} className="text-gray-700 hover:text-prime font-medium font-sans transition-colors">Despre Noi</Link>

            <div className="relative group">
              <button className="text-gray-700 group-hover:text-prime font-medium font-sans transition-colors cursor-pointer pb-6 flex items-center gap-1">
                {isEn ? "Treatments" : "Tratamente"}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              {/* Mega Dropdown / Dynamic Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[70] p-8 grid grid-cols-4 gap-8 backdrop-blur-xl bg-white/95">
                
                {/* 1. Hair & Dental */}
                <div className="space-y-4">
                  <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{isEn ? "Hair & Dental" : "Păr și Stomatologie"}</h4>
                  <div className="flex flex-col gap-2">
                    <Link to={isEn ? "/en/meva-mixed-hair-transplant" : "/ro/meva-mixed-hair-transplant"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Hair Transplant" : "Implant Păr"}</Link>
                    <Link to={isEn ? "/en/eyebrow-transplant" : "/ro/eyebrow-transplant"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Eyebrow Transplant" : "Implant Sprâncene"}</Link>
                    <Link to={isEn ? "/en/dental-implants" : "/ro/dental-implants"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Dental Implants" : "Implant Dentar"}</Link>
                    <Link to={isEn ? "/en/hollywood-smile" : "/ro/hollywood-smile"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Hollywood Smile" : "Fațete Dentare"}</Link>
                  </div>
                </div>

                {/* 2. Plastic Surgery */}
                <div className="space-y-4">
                  <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{isEn ? "Body & Face" : "Corp și Față"}</h4>
                  <div className="flex flex-col gap-2">
                    <Link to={isEn ? "/en/vaser-liposuction" : "/ro/vaser-liposuction"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Vaser Lipo" : "Vaser Lipo"}</Link>
                    <Link to={isEn ? "/en/abdominoplasty" : "/ro/abdominoplasty"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Tummy Tuck" : "Abdominoplastie"}</Link>
                    <Link to={isEn ? "/en/piezo-rhinoplasty" : "/ro/piezo-rhinoplasty"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Rhinoplasty" : "Rinoplastie"}</Link>
                    <Link to={isEn ? "/en/deep-plane-facelift" : "/ro/deep-plane-facelift"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Facelift" : "Lifting Facial"}</Link>
                  </div>
                </div>

                {/* 3. Bariatric & Andrology */}
                <div className="space-y-4">
                  <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{isEn ? "Specialized" : "Specializate"}</h4>
                  <div className="flex flex-col gap-2">
                    <Link to={isEn ? "/en/gastric-sleeve" : "/ro/gastric-sleeve"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Gastric Sleeve" : "Micșorare Stomac"}</Link>
                    <Link to={isEn ? "/en/gastric-bypass" : "/ro/gastric-bypass"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Gastric Bypass" : "Gastric Bypass"}</Link>
                    <Link to={isEn ? "/en/penis-enlargement-surgery" : "/ro/penis-enlargement-surgery"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Andrology" : "Andrologie"}</Link>
                  </div>
                </div>

                {/* 4. Advanced Medicine */}
                <div className="space-y-4">
                  <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{isEn ? "Advanced" : "Avansate"}</h4>
                  <div className="flex flex-col gap-2">
                    <Link to={isEn ? "/en/ivf-icsi-pgd" : "/ro/ivf-icsi-pgd"} className="text-sm text-gray-600 hover:text-prime transition-colors font-bold">{isEn ? "IVF & Genetics" : "Fertilizare In Vitro"}</Link>
                    <Link to={isEn ? "/en/ivf-cyprus" : "/ro/ivf-cyprus"} className="text-sm text-gray-600 hover:text-prime transition-colors font-bold">{isEn ? "IVF Cyprus" : "FIV Cipru"}</Link>
                    <Link to={isEn ? "/en/oncology-smart-drugs" : "/ro/oncology-smart-drugs"} className="text-sm text-gray-600 hover:text-prime transition-colors">{isEn ? "Smart Oncology" : "Oncologie"}</Link>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-prime transition-colors">
              <Globe size={18} />
              <span onClick={() => handleLangSwap('ro')} className={`font-medium text-sm mr-1 ${!isEn ? 'border-b-2 border-accent text-prime' : ''}`}>RO</span>
              <span className="text-gray-400">|</span>
              <span onClick={() => handleLangSwap('en')} className={`font-medium text-sm ml-1 ${isEn ? 'border-b-2 border-accent text-prime' : 'text-gray-500 hover:text-prime'}`}>EN</span>
            </div>

            <a href="/#ai-assistant" className="bg-accent hover:bg-yellow-500 text-[#112440] px-6 py-2.5 rounded-full font-bold transition-colors duration-300 shadow-sm text-sm">
              Consultație Gratuită
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-prime focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full top-full left-0">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-prime font-medium py-2">Acasă</Link>
          <Link to={isEn ? "/en/about-us" : "/ro/despre-noi"} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-prime font-medium py-2">{isEn ? "About Us" : "Despre Noi"}</Link>
          
          <div className="space-y-2 pt-2 border-t border-gray-50">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{isEn ? "Treatments" : "Tratamente"}</p>
            <div className="grid grid-cols-2 gap-2">
              <Link to={isEn ? "/en/meva-mixed-hair-transplant" : "/ro/meva-mixed-hair-transplant"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 py-1">{isEn ? "Hair" : "Păr"}</Link>
              <Link to={isEn ? "/en/dental-implants" : "/ro/dental-implants"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 py-1">{isEn ? "Dental" : "Stomatologie"}</Link>
              <Link to={isEn ? "/en/plastic-surgery" : "/ro/plastic-surgery"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 py-1">{isEn ? "Plastic" : "Chirurgie"}</Link>
              <Link to={isEn ? "/en/gastric-sleeve" : "/ro/gastric-sleeve"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 py-1">{isEn ? "Bariatric" : "Bariatrică"}</Link>
              <Link to={isEn ? "/en/ivf-icsi-pgd" : "/ro/ivf-icsi-pgd"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 py-1 font-bold">{isEn ? "IVF" : "FIV"}</Link>
              <Link to={isEn ? "/en/penis-enlargement-surgery" : "/ro/penis-enlargement-surgery"} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 py-1">{isEn ? "Andrology" : "Andrologie"}</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-700 py-3 border-t border-gray-100">
            <Globe size={20} className="text-prime"/>
            <div className="flex space-x-2">
              <span className="font-medium font-bold text-prime cursor-pointer">RO</span>
              <span className="text-gray-300">|</span>
              <span className="font-medium text-gray-500 cursor-pointer">EN</span>
            </div>
          </div>
          <a href="/#ai-assistant" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full bg-accent hover:bg-yellow-500 text-[#112440] px-6 py-3.5 rounded-lg font-bold transition-colors duration-300 mt-4 shadow-md">
            Consultație Gratuită
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
