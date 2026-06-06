import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';
import { tUI } from '@/utils/uiTranslations';

import { buildMetadata } from '@/app/utils/seo';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  return buildMetadata({
    title: tUI("Contact Us | Meva Clinic", lang),
    description: tUI("Get in touch with Meva Clinic in Istanbul for a free consultation and VIP health tourism packages.", lang),
    pathname: '/contact',
    lang,
  });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';

  return <ContactClient lang={safeLang} />;
}
