import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#0b1626] text-white hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        <div className="flex items-center space-x-6 text-xs font-sans">
          <a href="tel:+905324675941" className="flex items-center space-x-1.5 text-gray-300 hover:text-accent transition-colors">
            <Phone size={12} className="text-accent" />
            <span>+90 532 467 59 41</span>
          </a>
          <a href="mailto:info@mevaclinic.com" className="flex items-center space-x-1.5 text-gray-300 hover:text-accent transition-colors">
            <Mail size={12} className="text-accent" />
            <span>info@mevaclinic.com</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <a 
            href="https://instagram.com/mevaclinic" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-[10px] font-bold"
          >
            IG
          </a>
          <a 
            href="https://facebook.com/mevaclinic" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-[10px] font-bold"
          >
            FB
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
