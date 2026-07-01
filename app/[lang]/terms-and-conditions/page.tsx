import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tUI } from '@/utils/uiTranslations';
import { buildMetadata } from '@/app/utils/seo';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: `${tUI("Terms", lang)} | Meva Clinic`,
    description: tUI("Terms & Conditions and website usage agreements.", lang),
    pathname: '/terms-and-conditions',
    lang,
  });
}

const VALID_LOCALES = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

export async function generateStaticParams() {
  return VALID_LOCALES.map(l => ({ lang: l }));
}

export default async function TermsAndConditionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isRo = lang === 'ro';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24 font-sans">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-[#0b1626] mb-8">
            {tUI("Terms & Conditions", lang) || (isRo ? "Termeni și Condiții" : "Terms & Conditions")}
          </h1>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-8">
            {tUI("Last updated", lang)}: {new Date().toLocaleDateString()} | Final Legal Review Required
          </p>

          {isRo ? (
            // Romanian content
            <div className="prose prose-lg text-gray-600 max-w-none space-y-8 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">1. Acceptarea termenilor</h2>
                <p>
                  Prin accesarea și utilizarea acestui site web, sunteți de acord să respectați și să fiți legat de acești Termeni și Condiții, de Politica noastră de Confidențialitate și de Politica de Cookie. Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu continuați utilizarea site-ului.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">2. Rolul Meva Clinic (Servicii de coordonare)</h2>
                <p>
                  Meva Clinic funcționează ca un furnizor de servicii de coordonare administrativă și logistică pentru pacienții internaționali (servicii de pre-evaluare, rezervări la hoteluri partenere premium, asistență pentru pacienți, transferuri private și obținerea de opinii medicale).
                </p>
                <p>
                  <strong>Meva Clinic nu este o unitate spitalicească și nu efectuează tratamente medicale sau operații chirurgicale.</strong> Toate procedurile medicale sunt efectuate în exclusivitate de medici specialiști autorizați, în cadrul spitalelor și clinicilor partenere acreditate din Istanbul, Turcia.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">3. Declinare de responsabilitate privind informațiile medicale</h2>
                <p>
                  Conținutul prezentat pe acest site are un scop exclusiv informativ și educațional. Utilizarea site-ului, trimiterea formularelor de contact, chat-ul pe WhatsApp sau răspunsurile primite de la asistentul AI <strong>nu creează o relație medic-pacient</strong>.
                </p>
                <p>
                  Orice pre-evaluare online sau estimare de preț reprezintă o analiză preliminară. Eligibilitatea medicală finală și planul chirurgical definitiv sunt stabilite doar de medicul specialist autorizat din Turcia, în urma consultațiilor fizice și a analizelor clinice din spitalul partener.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">4. Prețuri și planuri de tratament</h2>
                <p>
                  Prețurile oferite în pachetele estimate pot fi supuse unor modificări pe baza cerințelor clinice individuale identificate în timpul examinării fizice preoperatorii de către medici. Pachetele de servicii logistice sunt coordonate prin agenții de turism partenere licențiate TÜRSAB (Clasa A), conform legislației aplicabile din Turcia.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">5. Limitarea răspunderii</h2>
                <p>
                  Meva Clinic depune toate eforturile pentru a asigura corectitudinea informațiilor administrative de pe site, dar nu poate fi trasă la răspundere pentru deciziile clinice, rezultatele medicale sau complicațiile survenite în urma procedurilor medicale efectuate de specialiștii din spitalele partenere autorizate. Răspunderea medicală aparține în totalitate furnizorilor de servicii medicale autorizați.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">6. Legea aplicabilă</h2>
                <p>
                  Acești termeni sunt guvernați de legislația din Turcia. Orice dispută care decurge din sau în legătură cu utilizarea site-ului sau a serviciilor noastre de coordonare va fi supusă jurisdicției instanțelor din Istanbul, Turcia.
                </p>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-400 italic">
                  Notă legală: Prezenta politică este supusă revizuirii finale și auditului juridic de conformitate cu reglementările locale aplicabile.
                </p>
              </div>
            </div>
          ) : (
            // English / Default content
            <div className="prose prose-lg text-gray-600 max-w-none space-y-8 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions, our Privacy Policy, and our Cookie Policy. If you do not agree to any part of these terms, please discontinue using the website immediately.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">2. Role of Meva Clinic (Coordination Services)</h2>
                <p>
                  Meva Clinic operates as an administrative and logistics service provider coordinating international patient services (pre-evaluations, bookings at premium partner hotels, private VIP transfers, patient support, and securing second medical opinions).
                </p>
                <p>
                  <strong>Meva Clinic is not a hospital and does not directly perform medical procedures or surgeries.</strong> All medical consultations, diagnostics, and surgical interventions are performed exclusively by authorized, licensed medical specialists at our accredited partner hospitals in Istanbul, Turkey.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">3. Medical Information &amp; Pre-Assessment Disclaimer</h2>
                <p>
                  The content on this website is for educational and informational purposes only. Submitting contact forms, messaging via WhatsApp, or interacting with our AI assistant <strong>does not create a doctor-patient relationship</strong>.
                </p>
                <p>
                  All online pre-assessments, suitability indicators, or price quotes are preliminary. Final surgical eligibility and clinical protocols are confirmed only by licensed specialists during in-person examinations, diagnostics, and anesthesia evaluations at the authorized partner facility.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">4. Pricing and Treatment Packages</h2>
                <p>
                  Initial package pricing estimates may be subject to adjustments based on individual clinical parameters identified during pre-operative physical exams. Travel agency and logistics package components are facilitated via licensed TÜRSAB (Class A) partner agencies in Turkey.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">5. Limitation of Liability</h2>
                <p>
                  Meva Clinic exercises reasonable care in selecting its clinical and logistic partners, but shall not be held liable for clinical outcomes, medical suitability decisions, or complications arising from procedures performed by independent doctors at partner hospital facilities. Clinical liability rests solely with the licensed medical provider performing the procedure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">6. Governing Law</h2>
                <p>
                  These terms are governed by and construed in accordance with the laws of Turkey. Any disputes arising out of or in connection with the use of this website or our coordination services shall be subject to the exclusive jurisdiction of the courts of Istanbul, Turkey.
                </p>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-400 italic">
                  Legal Note: This policy is subject to final legal review and audit under applicable local regulations.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
