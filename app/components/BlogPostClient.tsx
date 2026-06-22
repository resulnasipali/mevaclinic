'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ShieldCheck, Share2, Clock, BookOpen, GraduationCap } from 'lucide-react';

import { CertRow } from '@/components/ClinicalBadges';
import { tUI } from '@/utils/uiTranslations';
import MedicalReviewer from '@/components/MedicalReviewer';
import { REVIEWERS } from '@/data/reviewersData';





interface BlogPostClientProps {
  post: any;
  lang: string;
}

export default function BlogPostClient({ post, lang }: BlogPostClientProps) {
  const isEn = lang === 'en';
  const currentTitle = (post.title as any)[lang] || post.title['en'];
  const currentExcerpt = (post.excerpt as any)[lang] || post.excerpt['en'];
  const content = post.content ? (post.content as any)[lang] || post.content['en'] : null;

  // Resolve reviewer based on post category
  const getReviewer = (cat: string) => {
    const category = (cat || '').toLowerCase();
    if (category.includes('hair')) return REVIEWERS.hair;
    if (category.includes('bariatric') || category.includes('obesity')) return REVIEWERS.bariatric;
    if (category.includes('dental') || category.includes('tooth') || category.includes('teeth')) return REVIEWERS.dental;
    if (category.includes('plastic') || category.includes('face') || category.includes('rhinoplasty') || category.includes('regenerative')) return REVIEWERS.plastic;
    if (category.includes('oncology') || category.includes('cancer') || category.includes('cyberknife')) return REVIEWERS.oncology;
    if (category.includes('organ') || category.includes('kidney') || category.includes('liver')) return REVIEWERS.organ;
    return REVIEWERS.specialist;
  };

  const reviewer = getReviewer(post.category);

  return (
    <div className="bg-white min-h-screen pt-[102px] lg:pt-[112px] pb-20 overflow-hidden">
      {/* Authority Header */}
      <section className="bg-[#0b1626] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            href={`/${lang}/blog`} 
            className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest mb-10 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> {tUI("Back to Library", lang)}
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
             <span className="px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-500 border border-white/5">
                {tUI(post.category, lang)}
             </span>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400">
                <ShieldCheck size={12} />
                <span className="text-[8px] font-bold uppercase tracking-wider">{tUI("Board Certified Fact-Check", lang)}</span>
             </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight"
          >
             {currentTitle}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest"
          >
             <div className="flex items-center gap-2"><Calendar size={14} className="text-amber-500" /> {tUI("Published:", lang)} {post.date}</div>
             <div className="flex items-center gap-2"><Calendar size={14} className="text-amber-500" /> {tUI("Last Updated:", lang)} {post.lastUpdated || post.date}</div>
             <div className="flex items-center gap-2"><User size={14} className="text-amber-500" /> {post.author}</div>
             <div className="flex items-center gap-2"><Clock size={14} className="text-amber-500" /> {post.readTime || 8} {tUI("Min Read", lang)}</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-16"
           >
              <Image 
                src={post.image} 
                alt={currentTitle} 
                fill 
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
           </motion.div>

           <div className="flex flex-col lg:flex-row gap-16">
              {/* Sidebar Authority */}
              <aside className="lg:w-1/4 order-2 lg:order-1">
                 <div className="sticky top-32 space-y-10">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                    >
                       <h4 className="text-xs font-black uppercase tracking-widest text-[#0b1626] mb-6 flex items-center gap-2">
                          <GraduationCap size={16} /> {tUI("Author Expertise", lang)}
                       </h4>
                       <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-[#0b1626] rounded-2xl flex items-center justify-center mb-4 border border-white/10 text-amber-500 shadow-md">
                             <ShieldCheck size={32} />
                          </div>
                          <p className="font-bold text-[#0b1626] text-sm mb-1">{post.author}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{tUI("Istanbul Medical Board", lang)}</p>
                       </div>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                       <button className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group hover:scale-105 duration-300">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#0b1626]">{tUI("Share Analysis", lang)}</span>
                          <Share2 size={16} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                       </button>
                    </div>
                 </div>
              </aside>

              {/* Textual Content */}
              <div className="lg:w-3/4 order-1 lg:order-2">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="prose prose-lg prose-slate max-w-none font-sans leading-relaxed text-gray-600"
                 >
                   <p className="text-xl font-medium text-[#0b1626] mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-4 py-2">
                     {currentExcerpt}
                   </p>

                   {content ? (
                     <>
                       <p className="mb-8 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro }} />

                       {/* Mid-article CTA */}
                       <div className="my-10 p-8 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                         <div>
                           <p className="font-bold text-[#0b1626] text-lg">{tUI("Ready to start your journey?", lang)}</p>
                           <p className="text-gray-500 text-sm mt-1">{tUI("Free consultation · 24h response", lang)}</p>
                         </div>
                         <Link href={`/${lang}/contact`} className="bg-amber-500 text-[#0b1626] font-bold py-3 px-8 rounded-2xl shadow-lg hover:bg-[#0b1626] hover:text-white transition-all whitespace-nowrap text-sm">
                           {tUI("Get Free Evaluation", lang)}
                         </Link>
                       </div>

                       {/* Sections */}
                       {content.sections?.map((sec: any, i: number) => (
                         <div key={i} className="mb-10">
                           <h2 className="text-2xl font-serif font-bold text-[#0b1626] mt-10 mb-5">{sec.heading}</h2>
                           {sec.isTable && sec.tableData ? (
                             <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                               <table className="w-full text-sm">
                                 <thead className="bg-[#0b1626] text-white">
                                   <tr>{sec.tableData.headers.map((h: string, j: number) => <th key={j} className="px-5 py-4 text-left text-xs font-bold uppercase tracking-widest">{h}</th>)}</tr>
                                 </thead>
                                 <tbody>
                                   {sec.tableData.rows.map((row: string[], j: number) => (
                                     <tr key={j} className={j % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                       {row.map((cell: string, k: number) => <td key={k} className="px-5 py-4 font-medium text-gray-700">{cell}</td>)}
                                     </tr>
                                   ))}
                                 </tbody>
                               </table>
                             </div>
                           ) : sec.isTimeline && sec.steps ? (
                             <ol className="space-y-5 mt-4">
                               {sec.steps.map((s: any) => (
                                 <li key={s.step} className="flex gap-5 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                   <span className="w-9 h-9 rounded-full bg-amber-500 text-[#0b1626] font-black text-sm flex items-center justify-center shrink-0">{s.step}</span>
                                   <div><p className="font-bold text-[#0b1626] mb-1">{s.title}</p><p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p></div>
                                 </li>
                               ))}
                             </ol>
                           ) : (
                             <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: sec.body }} />
                           )}
                         </div>
                       ))}

                       {/* FAQ */}
                       {content.faq?.length > 0 && (
                         <>
                           <h2 className="text-2xl font-serif font-bold text-[#0b1626] mt-14 mb-6">{tUI("Frequently Asked Questions", lang)}</h2>
                           <div className="space-y-3">
                             {content.faq.map((item: any, i: number) => (
                               <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
                                 <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-bold text-[#0b1626] text-sm list-none hover:bg-gray-50 transition-colors">
                                   {item.q}
                                   <span className="ml-4 text-amber-500 shrink-0 transition-transform group-open:rotate-45">+</span>
                                 </summary>
                                 <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{item.a}</div>
                               </details>
                             ))}
                           </div>
                         </>
                       )}
                     </>
                   ) : (
                     // Fallback
                     <>
                       <h2 className="text-3xl font-serif font-bold text-[#0b1626] mt-12 mb-6">{tUI("Executive Clinical Summary", lang)}</h2>
                       <p>{tUI("This technical briefing explores the architectural advancements in current surgical protocols. By prioritizing tissue biological integration and utilizing high-definition intraoperative guidance systems, we achieve outcomes that were previously considered beyond the reach of standard medicine.", lang)}</p>
                       <div className="my-12 p-10 bg-[#0b1626] rounded-[2.5rem] text-white border border-white/5 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                         <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-amber-500/20 transition-colors" />
                         <BookOpen size={32} className="text-amber-500 mb-6" />
                         <h4 className="text-xl font-serif font-bold mb-4">{tUI("Clinical Technical Note", lang)}</h4>
                         <p className="text-gray-400 text-sm leading-relaxed">{tUI("Data derived from our internal 2025 performance audit indicates a 15% reduction in inflammatory response when following the S7 protocol combined with advanced exosome priming.", lang)}</p>
                       </div>
                       <h2 className="text-3xl font-serif font-bold text-[#0b1626] mt-12 mb-6">{tUI("Conclusion and Next Steps", lang)}</h2>
                       <p>{tUI("The convergence of robotics and biology marks a new era for international patients traveling to Istanbul for complex procedures.", lang)}</p>
                     </>
                   )}
                 </motion.div>

                 {/* Medical Reviewer Section */}
                  {reviewer && (
                     <MedicalReviewer reviewer={reviewer} lang={lang} />
                  )}

                 {/* End CTA */}
                 <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="text-center md:text-left">
                     <h4 className="font-bold text-[#0b1626] mb-1">{tUI("Ready for a deeper evaluation?", lang)}</h4>
                     <p className="text-sm text-gray-500">{tUI("Consult with our board regarding this specific topic.", lang)}</p>
                   </div>
                   <Link href={`/${lang}/contact`} className="bg-amber-500 text-[#0b1626] font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-[#0b1626] hover:text-white transition-all whitespace-nowrap hover:scale-105 duration-300">
                     {tUI("Book Board Consultation", lang)}
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20">
         <CertRow lang={lang} />
      </div>
    </div>
  );
}
