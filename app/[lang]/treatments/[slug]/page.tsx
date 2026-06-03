import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TreatmentDetailClient from '@/app/components/TreatmentDetailClient';
import { treatmentsData } from '@/data/treatmentsData';
import { getTreatmentImages } from '@/utils/getTreatmentImages';

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
  const isEn = lang === 'en';
  
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

  const fallbackTitle = getSafeVal(treatment.title, lang);
  const title = getSafeVal(treatment.metaTitle, lang) || `${fallbackTitle} | Meva Clinic Istanbul`;
  
  const fallbackDesc = getSafeVal(treatment.shortDesc, lang);
  const semanticText = getSafeVal(treatment.semanticSeoText, lang);
  const desc = getSafeVal(treatment.metaDesc, lang) || (semanticText || fallbackDesc).substring(0, 155);

  const keywords = getSafeVal(treatment.keywords, lang);

  const images = getTreatmentImages(slug, title, lang);
  const ogImages = [];
  if (images && images.length > 0) {
    ogImages.push({ url: images[0].url, alt: images[0].alt });
  } else if ((treatment as any).heroImage) {
    ogImages.push({ url: (treatment as any).heroImage, alt: title });
  }

  return {
    title,
    description: desc,
    keywords,
    alternates: {
      canonical: `/${lang}/treatments/${slug}`,
    },
    openGraph: {
      title,
      description: desc,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ogImages.map(img => img.url),
    }
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { lang, slug } = await params;
  const SUPPORTED = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];
  const safeLang = SUPPORTED.includes(lang) ? lang : 'en';

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
  
  // 1. MedicalProcedure Schema
  const medicalProcedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    'name': title,
    'description': description.substring(0, 200),
    'procedureType': 'https://health-lifesci.schema.org/SurgicalProcedure',
    'provider': {
      '@type': 'MedicalOrganization',
      'name': 'Meva Clinic Istanbul',
      'url': 'https://www.mevaclinic.com',
    },
    'bodyLocation': treatment.category === 'bariatric' ? 'Stomach' : 
                    treatment.category === 'hair' ? 'Scalp' : 
                    treatment.category === 'dental' ? 'Mouth' : 'Body'
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

  const schemas: any[] = [medicalProcedureSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <TreatmentDetailClient treatment={treatment} lang={safeLang} images={images} />
    </>
  );
}

