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
    title: `${tUI("Cookie Policy", lang)} | Meva Clinic`,
    description: tUI("Information about how cookies are used on the Meva Clinic website.", lang),
    pathname: '/cookie-policy',
    lang,
  });
}

const VALID_LOCALES = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

export async function generateStaticParams() {
  return VALID_LOCALES.map(l => ({ lang: l }));
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isRo = lang === 'ro';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24 font-sans">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-[#0b1626] mb-8">
            {tUI("Cookie Policy", lang)}
          </h1>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-8">
            {tUI("Last updated", lang)}: {new Date().toLocaleDateString()} | Final Legal Review Required
          </p>

          {isRo ? (
            // Romanian content
            <div className="prose prose-lg text-gray-600 max-w-none space-y-8 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">1. Ce sunt modulele cookie</h2>
                <p>
                  Modulele cookie sunt fișiere text de mici dimensiuni stocate pe dispozitivul dvs. (computer, tabletă sau telefon) atunci când vizitați site-ul nostru. Acestea permit site-ului să vă recunoască acțiunile și preferințele pe o perioadă de timp.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">2. Tipuri de cookie-uri pe care le folosim</h2>
                <p>Site-ul nostru utilizează următoarele categorii de module cookie:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookie-uri Esențiale / Strict Necesare:</strong> Acestea sunt indispensabile pentru navigarea pe site și utilizarea funcționalităților sale de bază, precum completarea formularelor de contact securizate sau trecerea prin etapele de pre-evaluare.
                  </li>
                  <li>
                    <strong>Cookie-uri de Performanță și Analiză:</strong> Ne ajută să înțelegem modul în care vizitatorii interacționează cu paginile noastre (de exemplu, colectarea datelor anonime prin Google Analytics). Acest lucru ne permite să îmbunătățim performanța tehnică și calitatea navigării.
                  </li>
                  <li>
                    <strong>Cookie-uri Funcționale:</strong> Permit site-ului să memoreze alegerile pe care le faceți (cum ar fi selecția limbii preferate sau regiunea dvs.) pentru a vă oferi o experiență personalizată.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">3. Consimțământul și Controlul Utilizatorului</h2>
                <p>
                  Atunci când vizitați site-ul nostru pentru prima dată, vi se solicită consimțământul pentru utilizarea cookie-urilor care nu sunt strict necesare. Puteți gestiona și bloca utilizarea modulelor cookie modificând setările browserului dvs. de internet (Safari, Chrome, Firefox, Edge etc.).
                </p>
                <p>
                  Vă rugăm să rețineți că dezactivarea sau blocarea cookie-urilor esențiale poate afecta funcționarea anumitor secțiuni sau module interactive ale site-ului nostru.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">4. Informații de Contact</h2>
                <p>
                  Dacă aveți întrebări despre această Politică de Cookie, vă rugăm să ne contactați prin e-mail la adresa: <a href="mailto:info@mevaclinic.com" className="text-amber-500 hover:underline">info@mevaclinic.com</a>.
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
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">1. What Cookies Are</h2>
                <p>
                  Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit our website. They allow the site to recognize your actions and preferences over a period of time.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">2. Types of Cookies We Use</h2>
                <p>Our website utilizes the following categories of cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential / Strictly Necessary Cookies:</strong> These are indispensable for navigating the website and utilizing its basic functionalities, such as submitting secure contact forms or completing pre-assessment steps.
                  </li>
                  <li>
                    <strong>Performance &amp; Analytics Cookies:</strong> These help us understand how visitors interact with our pages (e.g., collecting anonymous visitor volume statistics via Google Analytics). This allows us to improve technical performance and user experience.
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> These enable the website to remember choices you make (such as your language preference or region) to provide a more personalized browsing experience.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">3. User Consent and Browser Controls</h2>
                <p>
                  When you visit our website for the first time, you are requested to consent to the use of cookies that are not strictly necessary. You can manage or block cookies by adjusting the settings of your web browser (Safari, Chrome, Firefox, Edge, etc.).
                </p>
                <p>
                  Please note that disabling or blocking essential cookies may affect the functionality of certain interactive modules or forms on our website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">4. Contact Information</h2>
                <p>
                  If you have any questions regarding this Cookie Policy, please contact us by email at: <a href="mailto:info@mevaclinic.com" className="text-amber-500 hover:underline">info@mevaclinic.com</a>.
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
