import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import TreatmentDetailClient from '@/app/components/TreatmentDetailClient';
import { treatmentsData } from '@/data/treatmentsData';
import { getTreatmentImages } from '@/utils/getTreatmentImages';
import { buildMetadata } from '@/app/utils/seo';
import { REVIEWERS, DOCTOR_REGISTRY } from '@/data/reviewersData';



type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  const paths = [];
  
  for (const treatment of treatmentsData) {
    paths.push({ lang: 'en', slug: treatment.id });
    paths.push({ lang: 'ro', slug: treatment.id });
    paths.push({ lang: 'es', slug: treatment.id });
    paths.push({ lang: 'it', slug: treatment.id });
    paths.push({ lang: 'ru', slug: treatment.id });
    paths.push({ lang: 'fr', slug: treatment.id });
    paths.push({ lang: 'de', slug: treatment.id });
  }

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  
  const DEPRECATED_REDIRECTS: Record<string, string> = {
    'hair-transplant-dhi': 'dhi-hair-transplant',
    'hair-transplant-sapphire-fue': 'meva-mixed-hair',
    'gastric-balloon-allurion': 'gastric-balloon',
    'full-mouth-dental-implants': 'all-on-4-dental',
    'zirconium-dental-crowns': 'zirconium-crowns',
    'rhinoplasty-nose-job': 'piezo-rhinoplasty'
  };

  if (DEPRECATED_REDIRECTS[slug]) {
    redirect(`/${lang}/treatments/${DEPRECATED_REDIRECTS[slug]}`);
  }

  const treatment = treatmentsData.find(t => t.id === slug);
  if (!treatment) return { title: 'Treatment Not Found' };

  const getSafeVal = (val: any, locale: string) => {
    if (!val) return '';
    if (Array.isArray(val)) return val.join(', ');
    if (typeof val === 'object') {
      return val[locale] || val['en'] || Object.values(val)[0] || '';
    }
    return val;
  };

  // Natively read localized metadata strings directly from updated data object without switch-case fallbacks
  const title = getSafeVal(treatment.metaTitle, lang) || getSafeVal(treatment.title, lang);
  const desc = getSafeVal(treatment.metaDesc, lang) || getSafeVal(treatment.shortDesc, lang);
  const keywords = getSafeVal(treatment.keywords, lang);

  return buildMetadata({
    title,
    description: desc,
    pathname: `/treatments/${slug}`,
    lang,
    category: treatment.category,
    keywords,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { lang, slug } = await params;
  const SUPPORTED = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];
  const safeLang = SUPPORTED.includes(lang) ? lang : 'en';

  const DEPRECATED_REDIRECTS: Record<string, string> = {
    'hair-transplant-dhi': 'dhi-hair-transplant',
    'hair-transplant-sapphire-fue': 'meva-mixed-hair',
    'gastric-balloon-allurion': 'gastric-balloon',
    'full-mouth-dental-implants': 'all-on-4-dental',
    'zirconium-dental-crowns': 'zirconium-crowns',
    'rhinoplasty-nose-job': 'piezo-rhinoplasty'
  };

  if (DEPRECATED_REDIRECTS[slug]) {
    redirect(`/${safeLang}/treatments/${DEPRECATED_REDIRECTS[slug]}`);
  }

  const treatment = treatmentsData.find(t => t.id === slug);

  if (!treatment) {
    notFound();
  }

  const getSafeVal = (val: any, locale: string) => {
    if (!val) return '';
    if (Array.isArray(val)) return val.join(', ');
    if (typeof val === 'object') {
      return val[locale] || val['en'] || Object.values(val)[0] || '';
    }
    return val;
  };

  const title = getSafeVal(treatment.title, safeLang);
  const description = getSafeVal(treatment.shortDesc, safeLang);

  // Generate dynamic SEO image objects
  const images = getTreatmentImages(slug, title, safeLang);

  // Helper for safe array extraction
  const getArraySafe = (val: any, locale: string) => {
    if (!val) return [];
    return typeof val === 'object' && !Array.isArray(val) ? (val[locale] || val['en'] || []) : val;
  };

  // Helper to extract Wikipedia/Wikidata entity links based on category for GEO (AI Search Engines)
  const getSameAsLinks = (category: string, treatmentId: string) => {
    switch (category) {
      case 'bariatric':
        return [
          'https://en.wikipedia.org/wiki/Bariatric_surgery',
          'https://www.wikidata.org/wiki/Q807357'
        ];
      case 'hair':
        return [
          'https://en.wikipedia.org/wiki/Hair_transplantation',
          'https://www.wikidata.org/wiki/Q1545620'
        ];
      case 'dental':
        return [
          'https://en.wikipedia.org/wiki/Dental_implant',
          'https://www.wikidata.org/wiki/Q728494'
        ];
      case 'plastic':
        if (treatmentId.includes('rhinoplasty')) {
          return [
            'https://en.wikipedia.org/wiki/Rhinoplasty',
            'https://www.wikidata.org/wiki/Q337372'
          ];
        }
        return [
          'https://en.wikipedia.org/wiki/Plastic_surgery',
          'https://www.wikidata.org/wiki/Q182442'
        ];
      default:
        return [];
    }
  };
  
  // Resolve reviewer based on category and treatment properties for E-E-A-T Schema
  const getReviewer = (category: string, treatmentId: string) => {
    const cat = (category || '').toLowerCase();
    const id = (treatmentId || '').toLowerCase();
    
    if (cat === 'hair') {
      return REVIEWERS.hair;
    }
    if (cat === 'dental') {
      return REVIEWERS.dental;
    }
    if (cat === 'bariatric') {
      return REVIEWERS.bariatric;
    }
    if (cat === 'plastic') {
      if (id === 'vaser-liposuction') {
        return REVIEWERS.editorial;
      }
      return REVIEWERS.plastic;
    }
    if (cat === 'andrology') {
      return REVIEWERS.specialist;
    }
    if (
      cat === 'specialist' &&
      (id.includes('ivf') || id.includes('fertility'))
    ) {
      return REVIEWERS.fertility;
    }
    if (
      cat === 'specialist' &&
      (id.includes('organ') || id.includes('kidney') || id.includes('liver'))
    ) {
      return REVIEWERS.organ;
    }
    if (
      cat === 'specialist' &&
      (id.includes('cyberknife') || id.includes('oncology') || id.includes('cancer'))
    ) {
      return REVIEWERS.oncology;
    }
    
    return REVIEWERS.specialist;
  };


  const reviewerObj = getReviewer(treatment.category || '', slug);
  const doctorReviewer = (treatment as any).reviewerId ? (DOCTOR_REGISTRY[(treatment as any).reviewerId] || DOCTOR_REGISTRY.editorial) : null;

  // 1. MedicalProcedure Schema (Semantically linked using layout organization ID)
  const medicalProcedureSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    'name': title,
    'description': description.substring(0, 200),
    'procedureType': 'https://health-lifesci.schema.org/SurgicalProcedure',
    'sameAs': getSameAsLinks(treatment.category || '', slug),
    'provider': {
      '@type': 'MedicalOrganization',
      '@id': 'https://www.mevaclinic.com/#organization', // Strict ID connection to layout organization schema
      'name': 'Meva Clinic Istanbul',
      'url': 'https://www.mevaclinic.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Altunizade, Uskudar',
        'addressLocality': 'Istanbul',
        'addressRegion': 'Uskudar',
        'postalCode': '34662',
        'addressCountry': 'TR'
      }
    },
    'bodyLocation': treatment.category === 'bariatric' ? 'Stomach' : 
                    treatment.category === 'hair' ? 'Scalp' : 
                    treatment.category === 'dental' ? 'Mouth' : 'Body',
    'reviewedBy': doctorReviewer ? {
      '@type': doctorReviewer.schemaType,
      'name': doctorReviewer.displayName,
      'medicalSpecialty': doctorReviewer.specialty,
      ...(doctorReviewer.schemaType === "MedicalOrganization" ? { 'url': `https://www.mevaclinic.com/${safeLang}/about-us` } : {})
    } : reviewerObj ? {
      '@type': (reviewerObj.name.includes("Board") || reviewerObj.name.includes("Team") || reviewerObj.name.includes("Committee")) ? "MedicalOrganization" : "Physician",
      'name': reviewerObj.fullName,
      'medicalSpecialty': reviewerObj.specialty,
      'url': `https://www.mevaclinic.com/${safeLang}/about-us`
    } : undefined
  };

  // 2. FAQPage Schema (if faq exists)
  const faqData = getArraySafe(treatment.faq, safeLang);
  const faqSchema = faqData && faqData.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map((f: any) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
      }
    }))
  } : null;

  const homeNames: Record<string, string> = {
    ro: 'Acasă',
    es: 'Inicio',
    it: 'Home',
    ru: 'Главная',
    fr: 'Accueil',
    de: 'Startseite',
    en: 'Home'
  };

  const treatmentsNames: Record<string, string> = {
    ro: 'Tratamente',
    es: 'Tratamientos',
    it: 'Trattamenti',
    ru: 'Лечение',
    fr: 'Traitements',
    de: 'Behandlungen',
    en: 'Treatments'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': homeNames[safeLang] || 'Home',
        'item': `https://www.mevaclinic.com/${safeLang}`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': treatmentsNames[safeLang] || 'Treatments',
        'item': `https://www.mevaclinic.com/${safeLang}/treatments`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': title,
        'item': `https://www.mevaclinic.com/${safeLang}/treatments/${slug}`
      }
    ]
  };

  const schemas: any[] = [medicalProcedureSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      
      {/* Category-Based Presentation Layout optimized dynamically for specific landing profiles */}
      <TreatmentDetailClient 
        treatment={treatment} 
        lang={safeLang} 
        images={images} 
        categoryLayout={treatment.category} 
        doctorReviewer={doctorReviewer}
      />
    </>
  );
}
