import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';
import { tUI } from '@/utils/uiTranslations';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  return {
    title: tUI("Contact Us | Meva Clinic", lang),
    description: tUI("Get in touch with Meva Clinic in Istanbul for a free consultation and VIP health tourism packages.", lang),
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        'en': `/en/contact`,
        'ro': `/ro/contact`,
        'es': `/es/contact`,
        'it': `/it/contact`,
        'ru': `/ru/contact`,
        'fr': `/fr/contact`,
        'de': `/de/contact`,
        'x-default': `/en/contact`,
      }
    }
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';

  return <ContactClient lang={safeLang} />;
}
