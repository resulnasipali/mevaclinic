import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ExpertBadge = ({ isEn }) => (
  <div className="my-6 inline-flex items-center bg-white border border-gray-100 rounded-xl py-3 px-5 shadow-md">
    <div className="w-10 h-10 rounded-full mr-4 bg-prime/5 flex items-center justify-center">
       <ShieldCheck size={24} className="text-accent" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none mb-1">{isEn ? "Medically Approved Procedure" : "Procedură aprobată medical"}</span>
      <span className="font-serif text-sm font-bold text-prime leading-none">Meva Board Specialist</span>
    </div>
  </div>
);

export default ExpertBadge;
