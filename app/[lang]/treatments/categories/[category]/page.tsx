// app/[lang]/treatments/categories/[category]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { treatmentsData } from '@/data/treatmentsData';
import { blogPosts } from '@/data/blogData';
import { categoryHubData } from '@/data/categoryHubData';
import { tUI } from '@/utils/uiTranslations';
import { buildMetadata } from '@/app/utils/seo';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle, HelpCircle, ChevronDown, BookOpen } from 'lucide-react';

type Props = {
  params: Promise<{ lang: string; category: string }>;
};

const VALID_CATEGORIES = ['bariatric', 'hair', 'dental', 'plastic', 'andrology', 'specialist'];
const VALID_LOCALES = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

// Translate category key to standard label
const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  bariatric: { en: 'Bariatric Surgery', ro: 'Chirurgie Bariatrică', es: 'Cirugía Bariátrica', it: 'Chirurgia Bariatrica', fr: 'Chirurgie Bariatrique', de: 'Bariatrische Chirurgie', ru: 'Бариатрическая хирургия' },
  hair: { en: 'Hair & Brow Transplant', ro: 'Implant de Păr & Sprâncene', es: 'Trasplante de Cabello y Cejas', it: 'Trapianto di Capelli e Sopracciglia', fr: 'Greffe de Cheveux & Sourcils', de: 'Haar- & Augenbrauentransplantation', ru: 'Пересадка волос и бровей' },
  dental: { en: 'Dental Care', ro: 'Estetică Dentară', es: 'Cuidado Dental', it: 'Cure Dentali', fr: 'Soins Dentaires', de: 'Zahnmedizinische Versorgung', ru: 'Стоматологическая помощь' },
  plastic: { en: 'Plastic Surgery', ro: 'Chirurgie Plastică', es: 'Cirugía Plástica', it: 'Chirurgia Plastica', fr: 'Chirurgie Plastique', de: 'Plastische Chirurgie', ru: 'Пластическая хирургия' },
  andrology: { en: 'Andrology', ro: 'Andrologie', es: 'Andrología', it: 'Andrologia', fr: 'Andrologie', de: 'Andrologie', ru: 'Андрология' },
  specialist: { en: 'Specialist Treatments', ro: 'Tratamente de Specialitate', es: 'Tratamientos Especializados', it: 'Trattamenti Specialistici', fr: 'Traitements Spécialisés', de: 'Spezialbehandlungen', ru: 'Специализированное лечение' }
};

export async function generateStaticParams() {
  const paths = [];
  for (const cat of VALID_CATEGORIES) {
    for (const l of VALID_LOCALES) {
      paths.push({ lang: l, category: cat });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category } = await params;
  
  if (!VALID_CATEGORIES.includes(category) || !VALID_LOCALES.includes(lang)) {
    return { title: 'Category Not Found' };
  }

  const catData = categoryHubData[category];
  const title = catData.title[lang] || catData.title.en;
  const description = catData.subtitle[lang] || catData.subtitle.en;

  return buildMetadata({
    title: `${title} | Meva Clinic`,
    description: description.substring(0, 155),
    pathname: `/treatments/categories/${category}`,
    lang,
    category,
  });
}

// Client accordion component for category FAQ
const Accordion = ({ items, lang }: { items: { q: string; a: string }[]; lang: string }) => {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all hover:shadow-md">
          <div className="px-8 py-6 flex items-center justify-between text-left group cursor-pointer">
            <div className="flex items-center gap-4">
              <HelpCircle className="text-accent shrink-0" size={20} />
              <span className="font-bold text-lg text-prime">{tUI(item.q, lang)}</span>
            </div>
          </div>
          <div className="px-8 pb-6 text-gray-500 leading-relaxed text-base border-t border-gray-50 pt-4">
            {tUI(item.a, lang)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default async function CategoryHubPage({ params }: { params: Promise<{ lang: string; category: string }> }) {
  const { lang, category } = await params;

  if (!VALID_CATEGORIES.includes(category) || !VALID_LOCALES.includes(lang)) {
    notFound();
  }

  const catData = categoryHubData[category];
  const catLabel = CATEGORY_LABELS[category][lang] || CATEGORY_LABELS[category].en;
  
  const headline = catData.title[lang] || catData.title.en;
  const subtitle = catData.subtitle[lang] || catData.subtitle.en;
  const description = catData.description[lang] || catData.description.en;
  const suitabilityTitle = catData.suitabilityTitle[lang] || catData.suitabilityTitle.en;
  const suitabilityDesc = catData.suitabilityDesc[lang] || catData.suitabilityDesc.en;
  const suitabilityPoints = catData.suitabilityPoints[lang] || catData.suitabilityPoints.en;
  const faqItems = catData.faq[lang] || catData.faq.en;

  // Filter treatments
  const categoryTreatments = treatmentsData.filter(
    (t) => t.category?.toLowerCase() === category.toLowerCase()
  );

  // Filter blog posts (truly related based on category slug/text match)
  const relatedBlogs = blogPosts.filter((p) => {
    const postCat = (p.category || '').toLowerCase();
    const slug = (p.slug || '').toLowerCase();
    return postCat.includes(category) || slug.includes(category) || category.includes(postCat);
  }).slice(0, 3);

  const getSafeVal = (val: any, locale: string): string => {
    if (!val) return '';
    if (typeof val === 'object') {
      return val[locale] || val['en'] || Object.values(val)[0] || '';
    }
    return val;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />

      <main className="flex-1 pt-32 pb-24 font-sans">
        
        {/* Header Hero Section */}
        <section className="relative bg-[#0b1626] text-white py-20 md:py-28 overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#0b1626] to-[#0b1626] z-10" />
          
          <div className="container mx-auto px-4 max-w-5xl relative z-20">
            {/* Breadcrumbs */}
            <Breadcrumbs 
              lang={lang}
              items={[
                { label: tUI("Treatments", lang), path: `/${lang}/treatments` },
                { label: catLabel }
              ]}
            />

            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-3xl leading-tight">
              {headline}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Content & Layout Section */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-14">
            
            {/* Left Content column */}
            <div className="lg:w-7/12 space-y-16">
              
              {/* Category Deep Description */}
              <section>
                <h2 className="text-2xl font-serif font-bold text-[#0b1626] mb-6">
                  {tUI("Clinical Overview", lang)}
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed font-serif">
                  <p>{description}</p>
                </div>
              </section>

              {/* Treatment Cards Grid */}
              <section>
                <h2 className="text-2xl font-serif font-bold text-[#0b1626] mb-8">
                  {tUI("Available Procedures", lang)}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {categoryTreatments.map((treatment) => {
                    const tTitle = getSafeVal(treatment.title, lang);
                    const tDesc = getSafeVal(treatment.shortDesc, lang);

                    return (
                      <div 
                        key={treatment.id}
                        className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between group"
                      >
                        <div className="md:w-9/12 space-y-2">
                          <h3 className="text-lg font-bold text-[#0b1626] group-hover:text-accent transition-colors">
                            {tTitle}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {tDesc}
                          </p>
                        </div>
                        <Link 
                          href={`/${lang}/treatments/${treatment.id}`}
                          className="inline-flex items-center justify-center gap-2 bg-[#0b1626]/5 text-[#0b1626] hover:bg-[#0b1626] hover:text-accent font-bold py-3 px-6 rounded-2xl transition-all mt-4 md:mt-0 shrink-0 text-xs uppercase tracking-widest min-h-[44px]"
                        >
                          {tUI("View details", lang)}
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Suitability Checklist */}
              <section className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h2 className="text-2xl font-serif font-bold text-[#0b1626] mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-amber-500" />
                  </span>
                  {suitabilityTitle}
                </h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {suitabilityDesc}
                </p>
                <div className="space-y-4">
                  {suitabilityPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-50">
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-gray-700 text-sm font-medium leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              {faqItems.length > 0 && (
                <section className="space-y-8">
                  <h2 className="text-2xl font-serif font-bold text-[#0b1626] flex items-center gap-3">
                    <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <HelpCircle size={20} className="text-amber-500" />
                    </span>
                    {tUI("Frequently Asked Questions", lang)}
                  </h2>
                  <Accordion items={faqItems} lang={lang} />
                </section>
              )}
            </div>

            {/* Right sidebar column */}
            <div className="lg:w-5/12">
              <div className="sticky top-24 space-y-6">
                
                {/* Consultation / WhatsApp CTA Card */}
                <div className="bg-[#0b1626] text-white rounded-[2rem] p-8 shadow-2xl border border-white/5 space-y-6">
                  <h3 className="font-serif font-bold text-amber-500 border-b border-white/10 pb-4">
                    {tUI("Free Clinical Consultation", lang)}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tUI("Our board-certified medical coordinators offer confidential evaluations. Receive your cost estimation and clinical protocol promptly.", lang)}
                  </p>
                  
                  <a
                    href={getWhatsAppLink(catLabel, lang)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-500 transition-all hover:-translate-y-0.5 min-h-[44px]"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Consultation
                  </a>
                </div>

                {/* Related Blog Posts */}
                {relatedBlogs.length > 0 && (
                  <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm space-y-6">
                    <h3 className="font-serif font-bold text-[#0b1626] border-b border-gray-50 pb-4 flex items-center gap-2">
                      <BookOpen size={18} className="text-accent" />
                      {tUI("From Our Medical Blog", lang)}
                    </h3>
                    <div className="space-y-4">
                      {relatedBlogs.map((post) => {
                        const postTitle = (post.title as any)[lang] || post.title['en'];
                        return (
                          <Link 
                            key={post.slug}
                            href={`/${lang}/blog/${post.slug}`}
                            className="block p-4 rounded-xl border border-gray-50 hover:border-accent/20 hover:bg-accent/5 transition-all group"
                          >
                            <p className="font-bold text-sm text-prime group-hover:text-accent transition-colors leading-snug">
                              {postTitle}
                            </p>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2 group-hover:text-prime">
                              {tUI("Read Article", lang)}
                              <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
