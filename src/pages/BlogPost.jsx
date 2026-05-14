import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, User, ArrowLeft, ShieldCheck, Share2, Clock, BookOpen, GraduationCap } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import { CertRow } from '../components/ClinicalBadges';

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-32 text-center h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold text-prime mb-4">404</h1>
        <p className="text-gray-500 mb-8">{isEn ? "Clinical analysis not found." : "Analiza clinică nu a fost găsită."}</p>
        <Link to={isEn ? "/en/blog" : "/ro/blog"} className="bg-prime text-white px-8 py-3 rounded-full font-bold">
           {isEn ? "Back to Intelligence Hub" : "Înapoi la Intelligence Hub"}
        </Link>
      </div>
    );
  }

  const currentTitle = post.title[isEn ? 'en' : 'ro'];
  const currentExcerpt = post.excerpt[isEn ? 'en' : 'ro'];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 overflow-hidden">
      <DynamicSEO 
        title={`${currentTitle} | Meva Clinic Blog`}
        description={currentExcerpt}
        path={`${isEn ? '/en' : '/ro'}/blog/${post.slug}`}
      />

      {/* Authority Header */}
      <section className="bg-[#0b1626] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            to={isEn ? "/en/blog" : "/ro/blog"} 
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-10 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> {isEn ? "Back to Library" : "Înapoi la Bibliotecă"}
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
             <span className="px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-accent border border-white/5">
                {post.category}
             </span>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400">
                <ShieldCheck size={12} />
                <span className="text-[8px] font-bold uppercase tracking-wider">{isEn ? "Board Certified Fact-Check" : "Verificat Clinic de Consiliu"}</span>
             </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
             {currentTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
             <div className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</div>
             <div className="flex items-center gap-2"><User size={14} className="text-accent" /> {post.author}</div>
             <div className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {isEn ? "8 Min Read" : "8 Min Lectură"}</div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-16">
              <img src={post.image} alt={currentTitle} loading="eager" fetchpriority="high" className="w-full h-full object-cover" />
           </div>

           <div className="flex flex-col lg:flex-row gap-16">
              {/* Sidebar Authority */}
              <aside className="lg:w-1/4 order-2 lg:order-1">
                 <div className="sticky top-32 space-y-10">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                       <h4 className="text-xs font-black uppercase tracking-widest text-prime mb-6 flex items-center gap-2">
                          <GraduationCap size={16} /> {isEn ? "Author Expertise" : "Expertiză Autor"}
                       </h4>
                       <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                             <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt={post.author} loading="lazy" />
                          </div>
                          <p className="font-bold text-prime text-sm mb-1">{post.author}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{isEn ? "Istanbul Medical Board" : "Consiliul Medical Istanbul"}</p>
                       </div>
                    </div>

                    <div className="flex flex-col gap-4">
                       <button className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
                          <span className="text-xs font-bold uppercase tracking-widest text-prime">{isEn ? "Share Analysis" : "Distribuie Analiza"}</span>
                          <Share2 size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
                       </button>
                    </div>
                 </div>
              </aside>

              {/* Textual Content */}
              <div className="lg:w-3/4 order-1 lg:order-2">
                 <div className="prose prose-lg prose-slate max-w-none font-sans leading-relaxed text-gray-600">
                    <p className="text-xl font-medium text-prime mb-8 leading-relaxed italic">
                       {currentExcerpt}
                    </p>
                    
                    <h2 className="text-3xl font-serif font-bold text-prime mt-12 mb-6">{isEn ? "Executive Clinical Summary" : "Sumar Clinic Executiv"}</h2>
                    <p>
                       {isEn 
                         ? "This technical briefing explores the architectural advancements in current surgical protocols. By prioritizing tissue biological integration and utilizing high-definition intraoperative guidance systems, we achieve outcomes that were previously considered beyond the reach of standard medicine."
                         : "Acest briefing tehnic explorează progresele arhitecturale în protocoalele chirurgicale actuale. Prin prioritizarea integrării biologice a țesuturilor și utilizarea sistemelor de ghidaj intraoperator de înaltă definiție, obținem rezultate care anterior erau considerate dincolo de medicina standard."}
                    </p>

                    <div className="my-12 p-10 bg-[#0b1626] rounded-[2.5rem] text-white border border-white/5 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                       <BookOpen size={32} className="text-accent mb-6" />
                       <h4 className="text-xl font-serif font-bold mb-4">{isEn ? "Clinical Technical Note" : "Notă Tehnică Clinică"}</h4>
                       <p className="text-gray-400 text-sm leading-relaxed mb-0">
                          {isEn 
                            ? "Data derived from our internal 2025 performance audit indicates a 15% reduction in inflammatory response when following the S7 protocol combined with advanced exosome priming."
                            : "Datele derivate din auditul nostru intern de performanță 2025 indică o reducere de 15% a răspunsului inflamator atunci când se urmează protocolul S7 combinat cu amorsarea avansată cu exozomi."}
                       </p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-prime mt-12 mb-6">{isEn ? "Conclusion and Next Steps" : "Concluzie și Pași Următori"}</h2>
                    <p>
                       {isEn 
                         ? "The convergence of robotics and biology marks a new era for international patients traveling to Istanbul for complex procedures."
                         : "Convergența roboticii și a biologiei marchează o nouă eră pentru pacienții internaționali care călătoresc la Istanbul pentru proceduri complexe."}
                    </p>
                 </div>

                 <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                       <h4 className="font-bold text-prime mb-1">{isEn ? "Ready for a deeper evaluation?" : "Ești gata pentru o evaluare mai profundă?"}</h4>
                       <p className="text-sm text-gray-500">{isEn ? "Consult with our board regarding this specific topic." : "Consultă-te cu consiliul nostru despre acest subiect specific."}</p>
                    </div>
                    <Link to={isEn ? "/en/contact" : "/ro/contact"} className="bg-accent text-prime font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-prime hover:text-white transition-all whitespace-nowrap">
                       {isEn ? "Book Board Consultation" : "Programează Consult de Consiliu"}
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20">
         <CertRow isEn={isEn} />
      </div>
    </div>
  );
};

export default BlogPost;
