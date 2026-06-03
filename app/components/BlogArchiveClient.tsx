'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Calendar, User, ShieldCheck, ArrowRight, ArrowLeft, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '@/data/blogData';
import { tUI } from '@/utils/uiTranslations';

interface BlogArchiveClientProps {
  lang: string;
}

export default function BlogArchiveClient({ lang }: BlogArchiveClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  
  const categories = ['All', 'IVF', 'Hair Tech', 'Oncology', 'Regenerative', 'Safety', 'Concierge', 'Bariatric', 'Dental Tech', 'Transplant'];

  const filteredPosts = blogPosts.filter(post => {
    const pTitle = (post.title as any)[lang] || post.title['en'];
    const pExcerpt = (post.excerpt as any)[lang] || post.excerpt['en'];
    const matchesSearch = pTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pExcerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-[102px] lg:pt-[112px] pb-0">
      {/* Hero Header */}
      <section className="bg-[#0b1626] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        {/* Fine grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-left mb-8">
            <Link 
              href={`/${lang}`} 
              className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} /> {tUI("Return to Home Page", lang)}
            </Link>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-6"
          >
            <Brain size={16} className="animate-pulse" />
            <span>{tUI("Clinical Intelligence", lang)}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight"
          >
             {tUI("The Authority Hub", lang)}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed"
          >
             {tUI("Deep medical analysis and clinical updates from our multidisciplinary board in Istanbul.", lang)}
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[102px] lg:top-[112px] z-40 bg-white/75 backdrop-blur-md py-4 border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/85 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-[1.5rem] p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
             <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder={tUI("Search clinical topics...", lang)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50/50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all font-sans font-medium text-sm text-[#0b1626] placeholder-slate-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             
             <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b1626] shrink-0 border-r border-slate-100 pr-3 mr-1">
                  <Filter size={14} className="text-amber-500" />
                  <span>Filters</span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-300 ${
                        activeCategory === cat 
                          ? 'bg-[#0b1626] text-white shadow-md shadow-[#0b1626]/10' 
                          : 'bg-slate-50 text-slate-500 border border-slate-100 hover:border-slate-200 hover:bg-[#0b1626] hover:text-white hover:shadow-sm'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mt-8 md:mt-12 py-16 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {filteredPosts.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {filteredPosts.map((post, idx) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <article className="group flex flex-col bg-white rounded-[2rem] p-4 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-all duration-500 h-full">
                       {/* Image container with exact constraints */}
                       <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#0b1626] shadow-sm">
                          {imageErrors[post.id] ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1626] text-white p-4">
                              <Brain size={32} className="text-amber-500/30 mb-2 animate-pulse" />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/50">Clinical Data Fallback</span>
                            </div>
                          ) : (
                            <Image 
                              src={post.image} 
                              alt={(post.title as any)[lang] || post.title['en']}
                              fill
                              priority={idx < 3}
                              className="object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              onError={() => setImageErrors(prev => ({ ...prev, [post.id]: true }))}
                            />
                          )}
                          <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#0b1626] border border-white/20 shadow-sm z-10">
                             {post.category}
                          </div>
                          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-[#0b1626]/80 backdrop-blur-md rounded-lg border border-white/10 text-white shadow-sm z-10">
                             <ShieldCheck size={12} className="text-amber-500" />
                             <span className="text-[8px] font-bold uppercase tracking-wider">Fact-Checked by Board</span>
                          </div>
                       </div>
                       
                       {/* Content Area with strict typography boundaries */}
                       <div className="p-4 pt-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3.5">
                             <div className="flex items-center gap-1.5"><Calendar size={12} className="text-amber-500" /> {post.date}</div>
                             <div className="flex items-center gap-1.5"><User size={12} className="text-amber-500" /> {post.author}</div>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0b1626] mb-3 group-hover:text-amber-500 transition-colors leading-tight line-clamp-2 min-h-[3.25rem] flex items-center">
                             <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-amber-500 transition-colors block w-full">
                                {(post.title as any)[lang] || post.title['en']}
                             </Link>
                          </h3>
                          
                          <p className="text-slate-500 font-sans text-sm leading-relaxed mb-6 line-clamp-3">
                             {(post.excerpt as any)[lang] || post.excerpt['en']}
                          </p>
                          
                          <div className="mt-auto pt-5 border-t border-slate-100">
                             <Link 
                               href={`/${lang}/blog/${post.slug}`}
                               className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0b1626] hover:text-amber-500 transition-all duration-300 group/btn"
                             >
                                <span>{tUI("Read Full Analysis", lang)}</span>
                                <ArrowRight size={14} className="group-hover/btn:translate-x-1 duration-300 transform transition-transform text-amber-500" />
                             </Link>
                          </div>
                       </div>
                    </article>
                  </motion.div>
                ))}
             </div>
           ) : (
             <div className="py-32 text-center">
                <p className="text-slate-400 font-bold">{tUI("No clinical topics found matching your criteria.", lang)}</p>
             </div>
           )}
        </div>
      </section>

      {/* VIP Board Access Newsletter */}
      <section className="relative py-24 bg-[#050b14] overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#A6891115,transparent_40%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a365d15,transparent_55%)]"></div>
         
         {/* Subtle pattern grid overlay */}
         <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
               {/* Decorative border highlight */}
               <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-white/5 pointer-events-none"></div>
               
               <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                     <span>VIP Board Access</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
                     {tUI("Subscribe to Clinical Insights", lang)}
                  </h2>
                  
                  <p className="text-slate-400 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
                     {tUI("Get the latest surgical protocols and medical technology updates directly from our Istanbul board.", lang)}
                  </p>
                  
                  <AnimatePresence mode="wait">
                    {subscribed ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8 text-center max-w-md mx-auto relative z-10"
                      >
                        <div className="w-12 h-12 bg-amber-500 text-[#0b1626] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
                          <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-white font-serif font-bold text-lg mb-2">Access Granted</h3>
                        <p className="text-slate-400 text-xs">
                          Your address has been added to our board registry. Welcome to Clinical Intelligence.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto relative z-10" 
                        onSubmit={handleSubscribe}
                      >
                         <div className="relative flex-grow">
                            <input 
                              type="email" 
                              placeholder={tUI("Enter your email", lang)}
                              className="w-full h-12 px-5 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500 text-sm transition-all duration-300 font-sans shadow-inner"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                         </div>
                         <button 
                           type="submit"
                           className="h-12 bg-amber-500 hover:bg-amber-400 text-[#0b1626] font-bold text-xs uppercase tracking-widest px-8 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 whitespace-nowrap active:scale-95 flex items-center justify-center gap-2"
                         >
                            <span>{tUI("Join the Board", lang)}</span>
                            <ArrowRight size={14} />
                         </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                  
                  <p className="text-[10px] text-slate-600 mt-8 font-sans">
                     By subscribing, you agree to receive medical updates in compliance with HIPAA and GDPR standards.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

