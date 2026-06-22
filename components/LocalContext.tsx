// @ts-nocheck
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const LocalContext = ({ city = 'București', isEn = false }) => {
  if (isEn) return null; // Only show for Romanian version

  return (
    <div className="mt-20 p-10 bg-blue-50/50 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-widest mb-4">
          <MapPin size={16} /> De ce pacienții din {city} aleg Meva Clinic?
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-6">
          Standarde Europene la doar 75 de minute distanță.
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          Pacienții noștri din România beneficiază de expertiza chirurgilor de top din Istanbul, acces la tehnologie robotică de ultimă oră și un protocol VIP All-Inclusive care include zboruri, cazare la 5 stele și traducător român dedicat.
        </p>
        <Link href="/ro/about-us" className="inline-flex items-center gap-2 text-prime font-bold hover:text-accent transition-colors">
          Vezi beneficiile pentru români <ArrowRight size={18} />
        </Link>
      </div>
      <div className="w-full md:w-64 aspect-square rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
         <Image 
           src="/images/bucharest-istanbul.webp" 
           alt="Bucharest to Istanbul" 
           aria-label="Bucharest to Istanbul Medical Journey" 
           width={256}
           height={256}
           loading="lazy" 
           className="w-full h-full object-cover" 
         />
      </div>
    </div>
  );
};

export default LocalContext;
