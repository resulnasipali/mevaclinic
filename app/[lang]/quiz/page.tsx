import { Metadata } from 'next';
import QuizClient from '../../components/QuizClient';
import { tUI } from '@/utils/uiTranslations';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  return {
    title: tUI("Treatment Suitability Test | Meva Clinic", lang),
    description: tUI("30-second medical assessment to find your ideal treatment protocol in Istanbul.", lang),
    alternates: {
      canonical: `/${lang}/quiz`,
      languages: {
        'en': `/en/quiz`,
        'ro': `/ro/quiz`,
        'es': `/es/quiz`,
        'it': `/it/quiz`,
        'ru': `/ru/quiz`,
        'fr': `/fr/quiz`,
        'de': `/de/quiz`,
        'x-default': `/en/quiz`,
      }
    }
  };
}

export default async function QuizPage({ params }: Props) {
  const { lang } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';

  return <QuizClient lang={safeLang} />;
}
