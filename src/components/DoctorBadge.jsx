import React from 'react';
import { ShieldCheck } from 'lucide-react';

const DoctorBadge = ({ text = "Procedură aprobată medical - Specialist Meva Clinic" }) => (
  <div className="my-6 inline-flex items-center bg-white border border-gray-100 rounded-xl py-4 px-6 shadow-md">
    <div className="w-12 h-12 rounded-full mr-4 bg-prime/5 flex items-center justify-center shrink-0">
       <ShieldCheck size={28} className="text-accent" />
    </div>
    <div className="flex flex-col text-left">
      <span className="text-[11px] uppercase font-bold text-gray-400 tracking-widest leading-none mb-1">Expert Verified</span>
      <span className="font-serif text-sm md:text-base font-bold text-prime leading-tight">{text}</span>
    </div>
  </div>
);

export default DoctorBadge;
