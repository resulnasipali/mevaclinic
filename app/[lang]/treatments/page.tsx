// app/[lang]/treatments/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { treatmentsData } from '@/data/treatmentsData';
import { tUI } from '@/utils/uiTranslations';
import { buildMetadata } from '@/app/utils/seo';
import { Award, ShieldCheck, ArrowRight, Activity, Smile, Heart, User } from 'lucide-react';

type Props = {
  params: Promise<{ lang: string }>;
};

const CATEGORIES = [
  { 
    id: 'bariatric', 
    name: {
      en: 'Bariatric Surgery',
      ro: 'Chirurgie Bariatrică',
      es: 'Cirugía Bariátrica',
      it: 'Chirurgia Bariatrica',
      fr: 'Chirurgie Bariatrique',
      de: 'Bariatrische Chirurgie',
      ru: 'Бариатрическая хирургия'
    },
    desc: {
      en: 'Advanced weight loss procedures like Robotic Gastric Sleeve and Bypass designed for long-term health recovery.',
      ro: 'Proceduri avansate de pierdere în greutate, cum ar fi Gastric Sleeve și Bypass Robotic pentru recuperarea pe termen lung.',
      es: 'Procedimientos avanzados de pérdida de peso como Manga Gástrica y Bypass Robótico para una recuperación a largo plazo.',
      it: 'Procedure avanzate di perdita di peso come la sleeve gastrectomy e il bypass gastrico robotico per un recupero a lungo termine.',
      fr: 'Procédures avancées de perte de poids telles que la sleeve gastrectomie et le bypass gastrique robotisé pour une récupération à long terme.',
      de: 'Fortschrittliche Gewichtsverlustverfahren wie robotergestützte Schlauchmagen- und Bypass-Operationen für eine langfristige Genesung.',
      ru: 'Современные методы снижения веса, такие как роботизированный рукавный желудок и шунтирование, для долгосрочного выздоровления.'
    },
    icon: Activity
  },
  { 
    id: 'hair', 
    name: {
      en: 'Hair & Brow Transplant',
      ro: 'Implant de Păr & Sprâncene',
      es: 'Trasplante de Cabello y Cejas',
      it: 'Trapianto di Capelli e Sopracciglia',
      fr: 'Greffe de Cheveux & Sourcils',
      de: 'Haar- & Augenbrauentransplantation',
      ru: 'Пересадка волос и бровей'
    },
    desc: {
      en: 'Elite hair restoration using Sapphire FUE, DHI micro-grafts, and Exosome therapy for high-density natural results.',
      ro: 'Restaurare capilară de elită folosind Sapphire FUE, micro-grefe DHI și terapie cu exozomi pentru rezultate naturale dense.',
      es: 'Restauración capilar de élite con Sapphire FUE, microinjertos DHI y terapia de exosomas para resultados naturales densos.',
      it: 'Ripristino dei capelli d\'élite utilizzando Sapphire FUE, microinnesti DHI e terapia con esosomi per risultati naturali e densi.',
      fr: 'Restauration capillaire d\'élite utilisant le Sapphire FUE, les micro-greffes DHI et la thérapie par exosomes.',
      de: 'Elite-Haarwiederherstellung mit Saphir-FUE, DHI-Mikrotransplantaten und Exosomen-Therapie für dichte, natürliche Ergebnisse.',
      ru: 'Элитное восстановление волос с использованием Sapphire FUE, микрографтов DHI и экзосомной терапии.'
    },
    icon: Award
  },
  { 
    id: 'dental', 
    name: {
      en: 'Dental Care',
      ro: 'Estetică Dentară',
      es: 'Cuidado Dental',
      it: 'Cure Dentali',
      fr: 'Soins Dentaires',
      de: 'Zahnmedizinische Versorgung',
      ru: 'Стоматологическая помощь'
    },
    desc: {
      en: 'Premium smile designs, Zirconium crowns, Hollywood Smile, and computer-guided dental implants.',
      ro: 'Design de zâmbet premium, coroane de zirconiu, Hollywood Smile și implanturi dentare ghidate pe computer.',
      es: 'Diseños de sonrisa premium, coronas de circonio, Hollywood Smile e implantes dentales guiados por computadora.',
      it: 'Design del sorriso premium, corone in zirconio, Hollywood Smile e impianti dentali guidati dal computer.',
      fr: 'Designs de sourire haut de gamme, couronnes en zirconium, Hollywood Smile et implants dentaires guidés par ordinateur.',
      de: 'Erstklassiges Lächeln-Design, Zirkoniumkronen, Hollywood-Lächeln und computergestützte Zahnimplantate.',
      ru: 'Премиальный дизайн улыбки, циркониевые коронки, Hollywood Smile и дентальные имплантаты с компьютерным наведением.'
    },
    icon: Smile
  },
  { 
    id: 'plastic', 
    name: {
      en: 'Plastic Surgery',
      ro: 'Chirurgie Plastică',
      es: 'Cirugía Plástica',
      it: 'Chirurgia Plastica',
      fr: 'Chirurgie Plastique',
      de: 'Plastische Chirurgie',
      ru: 'Пластическая хирургия'
    },
    desc: {
      en: 'Facial rejuvenation, body contouring, Piezo Rhinoplasty, Deep Plane Facelift, and Mommy Makeovers.',
      ro: 'Reîntinerire facială, conturarea corpului, Rinoplastie Piezo, Facelift Deep Plane și Mommy Makeover.',
      es: 'Rejuvenecimiento facial, contorno corporal, rinoplastia piezoeléctrica, estiramiento facial Deep Plane y Mommy Makeover.',
      it: 'Ringiovanimento del viso, rimodellamento del corpo, rinoplastica piezoelettrica, lifting Deep Plane e Mommy Makeover.',
      fr: 'Rajeunissement du visage, remodelage corporel, rhinoplastie piézo, lifting Deep Plane et Mommy Makeover.',
      de: 'Gesichtsverjüngung, Körperformung, Piezo-Rhinoplastik, Deep-Plane-Facelift und Mommy-Makeover.',
      ru: 'Омоложение лица, контурирование тела, пьезо-ринопластика, глубокий подтяжка лица и Mommy Makeover.'
    },
    icon: Heart
  },
  { 
    id: 'andrology', 
    name: {
      en: 'Andrology',
      ro: 'Andrologie',
      es: 'Andrología',
      it: 'Andrologia',
      fr: 'Andrologie',
      de: 'Andrologie',
      ru: 'Андрология'
    },
    desc: {
      en: 'Specialized male aesthetic and functional procedures conducted by board-certified urologists in Turkey.',
      ro: 'Proceduri estetice și funcționale masculine specializate conduse de urologi certificați în Turcia.',
      es: 'Procedimientos masculinos especializados estéticos y funcionales realizados por urólogos certificados en Turquía.',
      it: 'Procedure estetiche e funzionali maschili specializzate eseguite da urologi certificati in Turchia.',
      fr: 'Procédures masculines spécialisées, esthétiques et fonctionnelles, menées par des urologues certifiés en Turquie.',
      de: 'Spezialisierte ästhetische und funktionelle Eingriffe beim Mann, durchgeführt von staatlich geprüften Urologen in der Türkei.',
      ru: 'Специализированные мужские эстетические и функциональные процедуры, проводимые сертифицированными урологами.'
    },
    icon: User
  },
  { 
    id: 'specialist', 
    name: {
      en: 'Specialist Treatments',
      ro: 'Tratamente de Specialitate',
      es: 'Tratamientos Especializados',
      it: 'Trattamenti Specialistici',
      fr: 'Traitements Spécialisés',
      de: 'Spezialbehandlungen',
      ru: 'Специализированное лечение'
    },
    desc: {
      en: 'Oncology radiosurgery (CyberKnife S7), organ transplants, and advanced IVF procedures.',
      ro: 'Radiochirurgie oncologică (CyberKnife S7), transplant de organe și proceduri avansate de fertilizare in vitro (FIV).',
      es: 'Radiocirugía oncológica (CyberKnife S7), trasplantes de órganos y procedimientos avanzados de FIV.',
      it: 'Radiochirurgia oncologica (CyberKnife S7), trapianti di organi e procedure avanzate di fecondazione assistita (FIV).',
      fr: 'Radiochirurgie oncologique (CyberKnife S7), transplantations d\'organes et procédures de FIV avancées.',
      de: 'Onkologische Radiochirurgie (CyberKnife S7), Organtransplantationen und fortschrittliche IVF-Verfahren.',
      ru: 'Онкологическая радиохирургия (CyberKnife S7), трансплантация органов и передовые процедуры ЭКО.'
    },
    icon: ShieldCheck
  }
];

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ro' },
    { lang: 'es' },
    { lang: 'it' },
    { lang: 'ru' },
    { lang: 'fr' },
    { lang: 'de' }
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  const title = isEn 
    ? "Premium Medical Treatments & Specialties in Istanbul | Meva Clinic" 
    : `${tUI("Clinical Specialties", lang)} | Meva Clinic`;
    
  const description = isEn
    ? "Explore Meva Clinic's premium medical specialties in Turkey: JCI-accredited bariatric surgery, advanced plastic surgery, elite dentistry, and hair restoration."
    : tUI("jciDesc", lang);

  return buildMetadata({
    title,
    description,
    pathname: '/treatments',
    lang,
    category: 'specialist',
  });
}

export default async function TreatmentHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

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
        {/* Hero Section */}
        <section className="relative bg-[#0b1626] text-white py-20 md:py-28 overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#0b1626] to-[#0b1626] z-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="container mx-auto px-4 max-w-6xl relative z-20 text-center">
            <span className="inline-block bg-white/5 border border-white/10 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-accent mb-6">
              {tUI("Meva Clinic Excellence", lang)}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl mx-auto mb-6">
              {tUI("Clinical Specialties", lang)}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {tUI("jciDesc", lang)}
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => {
              const CategoryIcon = cat.icon;
              const catName = cat.name[lang as keyof typeof cat.name] || cat.name.en;
              const catDesc = cat.desc[lang as keyof typeof cat.desc] || cat.desc.en;

              // Filter treatments belonging to this category
              const categoryTreatments = treatmentsData.filter(
                (t) => t.category?.toLowerCase() === cat.id.toLowerCase()
              );

              return (
                <div 
                  key={cat.id} 
                  className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all flex flex-col group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b1626]/5 flex items-center justify-center text-[#0b1626] group-hover:bg-[#0b1626] group-hover:text-accent transition-all shrink-0">
                      <CategoryIcon size={24} />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#0b1626] group-hover:text-[#0b1626]/80 transition-colors">
                      {catName}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {catDesc}
                  </p>

                  {/* List of Treatments */}
                  <div className="border-t border-gray-50 pt-6 mb-6">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[#0b1626]/30 mb-4">
                      {tUI("Treatments", lang)}
                    </h3>
                    <ul className="space-y-2.5">
                      {categoryTreatments.slice(0, 5).map((treatment) => {
                        const treatmentTitle = getSafeVal(treatment.title, lang);
                        return (
                          <li key={treatment.id}>
                            <Link 
                              href={`/${lang}/treatments/${treatment.id}`}
                              className="text-sm font-semibold text-gray-600 hover:text-accent transition-colors flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {treatmentTitle}
                            </Link>
                          </li>
                        );
                      })}
                      {categoryTreatments.length > 5 && (
                        <li className="text-xs text-gray-400 font-bold italic pt-1">
                          + {categoryTreatments.length - 5} {tUI("more treatments", lang)}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Category CTA Link */}
                  <Link 
                    href={`/${lang}/treatments/categories/${cat.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0b1626] uppercase tracking-widest hover:text-accent transition-colors mt-auto"
                  >
                    {tUI("Explore Category", lang)}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
