// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';

import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

const TopBar = () => {
  const pathname = usePathname();
  const lang = (pathname || "/").split('/')[1] || 'en';

  return (
    <div className="bg-[#0b1626] text-white hidden md:flex border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-row items-center justify-between h-9 gap-4">

        {/* Left: Contact info */}
        <div className="flex items-center gap-5 text-[11px] font-medium shrink-0">
          <a
            href="tel:+905324675941"
            className="flex items-center gap-1.5 text-gray-300 hover:text-accent transition-colors whitespace-nowrap"
            aria-label="Call Meva Clinic"
          >
            <Phone size={11} className="text-accent shrink-0" />
            +90 532 467 59 41
          </a>
          <a
            href="mailto:info@mevaclinic.com"
            className="flex items-center gap-1.5 text-gray-300 hover:text-accent transition-colors whitespace-nowrap"
            aria-label="Email Meva Clinic"
          >
            <Mail size={11} className="text-accent shrink-0" />
            info@mevaclinic.com
          </a>
        </div>

        {/* Center: Trust badge */}
        <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <span className="text-accent">✦</span>
          {tUI("JCI Accredited · Ministry of Health Certified", lang)}
          <span className="text-accent">✦</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://instagram.com/mevaclinic"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-[9px] font-black"
            aria-label="Meva Clinic Instagram"
          >
            IG
          </a>
          <a
            href="https://facebook.com/mevaclinic"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-[9px] font-black"
            aria-label="Meva Clinic Facebook"
          >
            FB
          </a>
          <a
            href="https://wa.me/905324675941"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 text-[9px] font-black"
            aria-label="Meva Clinic WhatsApp"
          >
            WA
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
