'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TreatmentQuiz from '@/components/TreatmentQuiz';
import { tUI } from '@/utils/uiTranslations';

interface QuizClientProps {
  lang: string;
}

export default function QuizClient({ lang }: QuizClientProps) {
  const isEn = lang === 'en';

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-left mb-8">
            <Link 
              href={`/${lang}`} 
              className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-600 transition-colors"
            >
              <ArrowLeft size={16} /> {tUI("Return to Home Page", lang)}
            </Link>
          </div>
           <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-serif font-bold text-[#0b1626] mb-4"
           >
             {tUI("Medical Suitability Engine", lang)}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.1 }}
             className="text-gray-500 font-medium"
           >
             {tUI("Answer 5 clinical questions to receive your personalized surgical compatibility score.", lang)}
           </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
        >
           <TreatmentQuiz />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-xs text-gray-400 font-bold uppercase tracking-widest"
        >
           {tUI("JCI Compliant Data Encryption", lang)}
        </motion.div>
      </div>
    </div>
  );
}
