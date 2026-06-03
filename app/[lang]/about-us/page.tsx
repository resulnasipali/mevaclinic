import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MedicalReviewer, { REVIEWERS } from '@/components/MedicalReviewer';
import { CertRow } from '@/components/ClinicalBadges';
import { tUI } from '@/utils/uiTranslations';

export default async function AboutUsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0b1626] mb-6">
              {tUI("Our Board & Medical Team", lang)}
            </h1>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              {tUI("Meva Clinic is powered by a board of internationally recognized surgeons and medical professionals. With decades of combined experience, we bring S-Tier medical excellence to Istanbul.", lang)}
            </p>
          </div>
          
          <div className="mb-20">
            <CertRow isEn={isEn} />
          </div>

          <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem]">
            <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-8 text-center">
              {tUI("Meet the Medical Board", lang)}
            </h2>
            <div className="space-y-6">
              {Object.values(REVIEWERS).map((reviewer, idx) => (
                <MedicalReviewer key={idx} reviewer={reviewer} isEn={isEn} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
