import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonSection from '@/components/ComparisonSection';
import { tUI } from '@/utils/uiTranslations';

import { buildMetadata } from '@/app/utils/seo';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: `${tUI("The VIP Standard", lang)} | Meva Clinic`,
    description: tUI("See why international patients choose Meva Clinic over standard healthcare facilities. We don't just offer surgeries; we offer an end-to-end luxury experience.", lang),
    pathname: '/medical-comparison',
    lang,
  });
}

export default async function MedicalComparisonPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1626]">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {tUI("The VIP Standard", lang)}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {tUI("See why international patients choose Meva Clinic over standard healthcare facilities. We don't just offer surgeries; we offer an end-to-end luxury experience.", lang)}
            </p>
          </div>
          
          {/* We reuse the ComparisonSection from Phase 2 but inside a dark premium wrapper */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <ComparisonSection />
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
