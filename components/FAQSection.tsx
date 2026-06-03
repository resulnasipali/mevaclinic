'use client';
import { tUI } from '@/utils/uiTranslations';
// @ts-nocheck
import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';

const FAQSection = ({ isEn = false, category = null, lang = 'en' }: { isEn?: boolean, category?: any, lang?: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const data = lang === 'ro' ? faqData.ro : faqData.en;
  
  // Filter by category if provided, then by search term
  let filteredData = category 
    ? data.filter(cat => cat.category.toLowerCase().includes(category.toLowerCase()))
    : data;

  const allQuestions = filteredData.flatMap(cat => cat.questions);
  const searchResults = searchTerm 
    ? allQuestions.filter(q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || q.a.toLowerCase().includes(searchTerm.toLowerCase()))
    : allQuestions;

  // FAQPage JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": searchResults.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    }))
  };

  return (
    <section className="py-12">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {!category && (
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder={tUI("Search clinical questions...", lang)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label={tUI("Search clinical questions", lang)}
          />
        </div>
      )}

      <div className="space-y-4 max-w-4xl mx-auto">
        {searchResults.length > 0 ? (
          searchResults.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all hover:shadow-md">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                aria-expanded={activeIndex === idx}
                aria-controls={`global-faq-answer-${idx}`}
                id={`global-faq-button-${idx}`}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`shrink-0 transition-colors ${activeIndex === idx ? 'text-accent' : 'text-gray-300'}`} size={20} aria-hidden="true" />
                  <span className={`font-bold text-lg transition-colors ${activeIndex === idx ? 'text-prime' : 'text-gray-600 group-hover:text-prime'}`}>
                    {tUI(item.q, lang)}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-accent text-white rotate-180' : 'bg-gray-50 text-gray-400'}`} aria-hidden="true">
                  {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <div 
                id={`global-faq-answer-${idx}`}
                aria-labelledby={`global-faq-button-${idx}`}
                role="region"
                className={`px-8 transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pt-4 border-t border-gray-50 text-gray-500 leading-relaxed text-base">
                  {tUI(item.a, lang)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-400">
            {tUI("No matching questions found.", lang)}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
