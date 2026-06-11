import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TreatmentDetailClient from '@/app/components/TreatmentDetailClient';
import { treatmentsData } from '@/data/treatmentsData';
import { getTreatmentImages } from '@/utils/getTreatmentImages';
import { buildMetadata } from '@/app/utils/seo';

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
  
  const getLocalizedTitle = (tName: string, locale: string) => {
    switch (locale) {
      case 'ro': return `${tName} Istanbul | Pachete All-Inclusive VIP - Meva Clinic`;
      case 'es': return `${tName} Estambul | Paquetes VIP Todo Incluido - Meva Clinic`;
      case 'it': return `${tName} Istanbul | Pacchetti VIP All-Inclusive - Meva Clinic`;
      case 'ru': return `${tName} Стамбул | VIP-пакеты «все включено» - Meva Clinic`;
      case 'fr': return `${tName} Istanbul | Formules VIP Tout Compris - Meva Clinic`;
      case 'de': return `${tName} Istanbul | All-Inclusive-VIP-Pakete - Meva Klinik`;
      case 'en':
      default: return `${tName} Istanbul | VIP All-Inclusive Packages - Meva Clinic`;
    }
  };

  const getLocalizedDesc = (tName: string, locale: string) => {
    switch (locale) {
      case 'ro': return `Beneficiați de ${tName.toLowerCase()} de calitate premium la Meva Clinic Turcia. Clinici acreditate JCI, medici de renume mondial, cazare la hotel de 5 stele de lux și transferuri private VIP cu Mercedes cu 12 luni de monitorizare. Obțineți o cotație gratuită.`;
      case 'es': return `${tName} premium en Meva Clinic Turquía. Instalaciones acreditadas por la JCI, especialistas de renombre mundial, hotel de lujo de 5 estrellas y traslados VIP privados en Mercedes con 12 meses de seguimiento. Obtenga un presupuesto gratuito.`;
      case 'it': return `${tName} premium presso Meva Clinic Turchia. Strutture accreditate JCI, specialisti di fama mondiale, hotel di lusso a 5 stelle e trasferimenti VIP privati Mercedes con 12 mesi di assistenza post-operatoria. Richiedi un preventivo gratuito.`;
      case 'ru': return `Премиум ${tName.toLowerCase()} в клинике Meva в Турции. Аккредитованные JCI медицинские центры, всемирно известные специалисты, роскошный 5-звездочный отель и частные VIP-трансферы Mercedes с 12 месяцами последующего ухода. Получите бесплатный расчет цены.`;
      case 'fr': return `${tName} haut de gamme à la Clinique Meva en Turquie. Installations accréditées JCI, spécialistes certifiés de renommée mondiale, hôtel de luxe 5 étoiles et transferts VIP privés en Mercedes avec 12 mois de suivi postopératoire. Obtenez un devis gratuit.`;
      case 'de': return `Premium-${tName} in der Meva Klinik Türkei. JCI-akkreditierte Einrichtungen, weltweit renommierte Spezialisten, luxuriöses 5-Sterne-Hotel und private VIP-Mercedes-Transfers mit 12 Monaten Nachsorge. Fordern Sie ein kostenloses Angebot an.`;
      case 'en':
      default: return `Premium ${tName.toLowerCase()} at Meva Clinic Turkey. JCI-accredited facilities, world-renowned board-certified specialists, luxury 5-star hotel, and private VIP Mercedes transfers with 12 months aftercare. Get a free quote.`;
    }
  };

  const title = getSafeVal(treatment.metaTitle, lang) || getLocalizedTitle(fallbackTitle, lang);
  const desc = getSafeVal(treatment.metaDesc, lang) || getLocalizedDesc(fallbackTitle, lang);

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

