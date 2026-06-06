import { Metadata } from 'next';
import QuizClient from '../../components/QuizClient';
import { tUI } from '@/utils/uiTranslations';

import { buildMetadata } from '@/app/utils/seo';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  return buildMetadata({
    title: tUI("Treatment Suitability Test | Meva Clinic", lang),
    description: tUI("30-second medical assessment to find your ideal treatment protocol in Istanbul.", lang),
    pathname: '/quiz',
    lang,
  });
}

export default async function QuizPage({ params }: Props) {
  const { lang } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';

  return <QuizClient lang={safeLang} />;
}
