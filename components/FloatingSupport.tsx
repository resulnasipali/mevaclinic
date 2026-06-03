// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';


const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEn = (pathname || "/").startsWith('/en');

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=905000000000', '_blank');
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
                {isEn ? "Consultation Online" : "Consultant Online"}
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              {isEn ? "Get a free medical quote today. Fast 5-minute response." : "Obține o cotație gratuită azi. Răspuns rapid în 5 minute."}
            </p>
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-between transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <div className="flex items-center text-sm">
                <MessageCircle size={20} className="mr-2" />
                {isEn ? "Chat on WhatsApp" : "Discută pe WhatsApp"}
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? 'bg-gray-800' : 'bg-accent hover:bg-yellow-500'
          } text-white p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} className="text-prime" />}
        </button>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[90] py-3 px-4 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <a 
          href="https://api.whatsapp.com/send?phone=905000000000"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <MessageCircle size={18} className="mr-2" />
          {isEn ? "Talk to us" : "WhatsApp"}
        </a>
        <a 
          href="#ai-assistant"
          className="flex-1 bg-prime text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <Phone size={18} className="mr-2" />
          {isEn ? "Get Quote" : "Cotație"}
        </a>
      </div>
    </>
  );
};
export default FloatingSupport;
