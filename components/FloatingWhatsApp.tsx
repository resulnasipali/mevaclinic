// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { tUI } from '@/utils/uiTranslations';

import { pushToDataLayer } from '../utils/AnalyticsUtils';

const FloatingWhatsApp = ({ lang = 'en' }: { lang?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isEn = lang === 'en';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    const handleScroll = () => {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  const getWhatsAppMessage = () => {
    let message = tUI("Hello, I would like more information.", lang);
    
    if ((pathname || "/").includes('/oncology') || (pathname || "/").includes('/oncologie')) {
      message = tUI("Hello, I want info about oncology.", lang);
    } else if ((pathname || "/").includes('/hair-transplant') || (pathname || "/").includes('/implant-par')) {
      message = tUI("Hello, I want info about hair transplant.", lang);
    } else if ((pathname || "/").includes('/bariatric') || (pathname || "/").includes('/gastric')) {
      message = tUI("Hello, I want info about bariatric surgery.", lang);
    }
    
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    pushToDataLayer('whatsapp_click', { location: 'floating_widget' });
    const text = getWhatsAppMessage();
    window.open(`https://wa.me/905324675941?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-[90] hidden md:flex flex-col items-end">
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mb-4 w-80 transform transition-all animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-prime flex items-center font-serif text-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                {tUI("Consultation Online", lang)}
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent rounded-full" aria-label={tUI("Close chat panel", lang)}>
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              {tUI("Get a free medical quote today. Fast 5-minute response.", lang)}
            </p>
            <button 
              onClick={openWhatsApp}
              aria-label={tUI("Open WhatsApp chat", lang)}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-between transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <div className="flex items-center text-sm">
                <MessageCircle size={20} className="mr-2" />
                {tUI("Chat on WhatsApp", lang)}
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow hidden lg:block">
            <p className="text-[11px] font-bold text-prime">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              {tUI("We are online - ask a doctor", lang)}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? (tUI("Close consultation widget", lang)) : (tUI("Open consultation widget", lang))}
            aria-expanded={isOpen}
            className={`${
              isOpen ? 'bg-gray-800' : 'bg-accent hover:bg-yellow-500'
            } text-white p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative group`}
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} className="text-prime" />}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                1
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[90] py-3 px-4 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]" role="complementary" aria-label={tUI("Quick contact actions", lang)}>
        <button 
          onClick={openWhatsApp}
          aria-label={tUI("Contact us on WhatsApp", lang)}
          className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <MessageCircle size={18} className="mr-2" />
          {tUI("Talk to us", lang)}
        </button>
        <a 
          href="tel:+905324675941"
          onClick={() => pushToDataLayer('phone_click', { location: 'sticky_bar' })}
          aria-label={tUI("Get a price quote", lang)}
          className="flex-1 bg-prime text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <Phone size={18} className="mr-2" />
          {tUI("Get Quote", lang)}
        </a>
      </div>
    </>
  );
};
export default FloatingWhatsApp;
