// @ts-nocheck
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ExpertBadge = ({ isEn, name, title }) => (
  <div className="my-6 inline-flex items-center bg-white border border-gray-100 rounded-2xl py-3 px-5 shadow-sm">
    <div className="w-10 h-10 rounded-xl mr-4 bg-accent/10 flex items-center justify-center">
       <ShieldCheck size={20} className="text-accent" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none mb-1">
        {isEn ? "Lead Clinical Specialist" : "Specialist Clinic Coordonator"}
      </span>
      <span className="font-serif text-sm font-bold text-prime leading-none">
        {name || (isEn ? "Meva Specialist" : "Specialist Meva")}
      </span>
    </div>
  </div>
);

export default ExpertBadge;
