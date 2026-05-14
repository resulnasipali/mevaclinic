import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Filter, Calendar, User, ShieldCheck, ArrowRight, Activity, Brain, Microscope, HeartPulse, Shield, Globe } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import DynamicSEO from '../components/DynamicSEO';

const BlogArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'IVF', 'Hair Tech', 'Oncology', 'Regenerative', 'Safety', 'Concierge', 'Bariatric', 'Dental Tech', 'Transplant'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title[isEn ? 'en' : 'ro'].toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt[isEn ? 'en' : 'ro'].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <DynamicSEO 
        title={isEn ? "Clinical Intelligence Hub | Meva Clinic Insights" : "Clinical Intelligence Hub | Perspective Meva Clinic"}
        description={isEn ? "Explore our deep medical analysis on hair restoration, oncology, and surgical precision in Istanbul." : "Explorează analizele noastre medicale profunde despre transplantul de păr, oncologie și precizia chirurgicală în Istanbul."}
        path={isEn ? "/en/blog" : "/ro/blog"}
      />

      {/* Hero Header */}
      <section className="bg-[#0b1626] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
            <Brain size={16} />
            <span>{isEn ? "Clinical Intelligence" : "Inteligență Clinică"}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
             {isEn ? "The Authority Hub" : "Arhiva de Autoritate"}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
             {isEn 
               ? "Deep medical analysis and clinical updates from our multidisciplinary board in Istanbul." 
               : "Analize medicale profunde și actualizări clinice de la consiliul nostru multidisciplinar din Istanbul."}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
           <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder={isEn ? "Search clinical topics..." : "Caută subiecte clinice..."}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all font-sans font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           
           <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
              <Filter size={18} className="text-prime shrink-0" />
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-prime text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {filteredPosts.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 h-full">
                     {/* Image & Badge */}
                     <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title[isEn ? 'en' : 'ro']}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-prime border border-white/20">
                           {post.category}
                        </div>
                        {/* E-E-A-T Seal */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-[#0b1626]/80 backdrop-blur-md rounded-lg border border-white/10 text-white">
                           <ShieldCheck size={12} className="text-accent" />
                           <span className="text-[8px] font-bold uppercase tracking-wider">Fact-Checked by Board</span>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                           <div className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</div>
                           <div className="flex items-center gap-1.5"><User size={12} /> {post.author}</div>
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-prime mb-4 group-hover:text-accent transition-colors leading-tight">
                           {post.title[isEn ? 'en' : 'ro']}
                        </h3>
                        
                        <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 line-clamp-2">
                           {post.excerpt[isEn ? 'en' : 'ro']}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-gray-50">
                           <Link 
                             to={`${isEn ? '/en' : '/ro'}/blog/${post.slug}`}
                             className="inline-flex items-center gap-2 text-prime font-bold text-xs uppercase tracking-widest group/btn hover:text-accent transition-all"
                           >
                              {isEn ? "Read Full Analysis" : "Citește Analiza Completă"}
                              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </div>
                  </article>
                ))}
             </div>
           ) : (
             <div className="py-32 text-center">
                <p className="text-gray-400 font-bold">{isEn ? "No clinical topics found matching your criteria." : "Nu am găsit subiecte clinice care să corespundă criteriilor tale."}</p>
             </div>
           )}
        </div>
      </section>

      {/* Newsletter / Authority CTA */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-prime mb-6">{isEn ? "Subscribe to Clinical Insights" : "Abonează-te la Perspective Clinice"}</h2>
            <p className="text-gray-500 mb-10">{isEn ? "Get the latest surgical protocols and medical technology updates directly from our Istanbul board." : "Primește cele mai recente protocoale chirurgicale și actualizări de tehnologie medicală direct de la consiliul nostru din Istanbul."}</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder={isEn ? "Enter your email" : "Introdu adresa de email"}
                 className="flex-grow px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent font-sans"
                 required
               />
               <button className="bg-prime text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent hover:text-prime transition-all whitespace-nowrap">
                  {isEn ? "Join the Board" : "Alătură-te Consiliului"}
               </button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default BlogArchive;
