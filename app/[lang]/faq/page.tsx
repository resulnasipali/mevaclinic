import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { tUI } from '@/utils/uiTranslations';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `${tUI("Frequently Asked Questions", lang)} | Meva Clinic`,
    description: tUI("Everything you need to know about the Meva Clinic experience.", lang),
    alternates: {
      canonical: `/${lang}/faq`,
      languages: {
        'en': `/en/faq`,
        'ro': `/ro/faq`,
        'es': `/es/faq`,
        'it': `/it/faq`,
        'ru': `/ru/faq`,
        'fr': `/fr/faq`,
        'de': `/de/faq`,
        'x-default': `/en/faq`,
      }
    }
  };
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1626] mb-6">
              {tUI("Frequently Asked Questions", lang)}
            </h1>
            <p className="text-gray-500 text-lg">
              {tUI("Everything you need to know about the Meva Clinic experience.", lang)}
            </p>
          </div>
          <FAQSection lang={lang} isEn={isEn} />
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
