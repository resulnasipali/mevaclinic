import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
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
              <a href="/#tratamente" className="text-gray-700 hover:text-prime font-medium font-sans transition-colors cursor-pointer pb-6">
                Tratamente
              </a>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[70] flex flex-col py-2 font-sans font-medium mix-blend-normal">
                 <Link to={isEn ? "/en/hair-transplant" : "/ro/implant-par"} className="px-5 py-3 text-sm text-gray-600 hover:text-prime hover:bg-gray-50 border-b border-gray-50">{isEn ? "Hair Transplant" : "Implant Păr"}</Link>
                 <Link to={isEn ? "/en/oncology" : "/ro/oncologie"} className="px-5 py-3 text-sm text-gray-600 hover:text-prime hover:bg-gray-50 border-b border-gray-50">{isEn ? "Oncology" : "Oncologie"}</Link>
                 <Link to={isEn ? "/en/dental-implants" : "/ro/implant-dentar"} className="px-5 py-3 text-sm text-gray-600 hover:text-prime hover:bg-gray-50 border-b border-gray-50">{isEn ? "Dental Implants" : "Implant Dentar"}</Link>
                 <Link to={isEn ? "/en/plastic-surgery" : "/ro/chirurgie-plastica"} className="px-5 py-3 text-sm text-gray-600 hover:text-prime hover:bg-gray-50">{isEn ? "Plastic Surgery" : "Chirurgie Plastică"}</Link>
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
          <Link to="/ro/despre-noi" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-prime font-medium py-2">Despre Noi</Link>
          <a href="/#tratamente" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 hover:text-prime font-medium py-2">Tratamente</a>
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
