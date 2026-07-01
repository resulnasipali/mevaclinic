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
    title: `${tUI("Privacy Policy", lang)} | Meva Clinic`,
    description: tUI("Privacy Policy and Data protection details compliant with GDPR and KVKK regulations.", lang),
    pathname: '/privacy-policy',
    lang,
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isRo = lang === 'ro';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24 font-sans">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-[#0b1626] mb-8">
            {tUI("Privacy Policy", lang)}
          </h1>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-8">
            {tUI("Last updated", lang)}: {new Date().toLocaleDateString()} | Final Legal Review Required
          </p>

          {isRo ? (
            // Romanian content
            <div className="prose prose-lg text-gray-600 max-w-none space-y-8 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">1. Operatorul de Date și Informații de Contact</h2>
                <p>
                  Meva Clinic („noi”, „nostru” sau „ne”), funcționând ca un serviciu premium de coordonare a pacienților internaționali și de asistență medicală în Istanbul, Turcia, acționează în calitate de Operator de Date în conformitate cu Regulamentul General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și Legea turcă privind protecția datelor cu caracter personal nr. 6698 (KVKK).
                </p>
                <p>
                  Pentru orice întrebări, solicitări de exercitare a drepturilor sau detalii legate de prelucrarea datelor, ne puteți contacta la Meva Clinic, Istanbul, Turcia. E-mail: <a href="mailto:info@mevaclinic.com" className="text-amber-500 hover:underline">info@mevaclinic.com</a>. Solicitările privind confidențialitatea și protecția datelor pot fi trimise prin e-mail.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">2. Tipuri de Date Colectate</h2>
                <p>Putem colecta și procesa următoarele categorii de date cu caracter personal:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Date de Identitate:</strong> Nume, prenume, data nașterii și detalii din documentele de identitate (pașaport) necesare pentru organizarea călătoriei medicale.</li>
                  <li><strong>Date de Contact:</strong> Adresă de e-mail, număr de telefon, identificatori de rețele sociale și cont de WhatsApp.</li>
                  <li><strong>Date Tehnice și de Utilizare:</strong> Adresă IP, tipul browserului, date despre comportamentul pe site și module cookie utilizate în timpul vizitei.</li>
                  <li><strong>Date Speciale (Date de Sănătate):</strong> Istoricul medical, documentația clinică, rezultatele analizelor, fotografii ale zonelor de tratament și parametri clinici furnizați voluntar de dvs. prin formularele noastre online, instrumentele de pre-evaluare sau discuțiile pe WhatsApp.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">3. Scopul și Temeiul Legal al Prelucrării</h2>
                <p>Datele dvs. sunt colectate și prelucrate în următoarele scopuri:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evaluarea preliminară a dosarului medical și coordonarea obținerii unei a doua opinii medicale.</li>
                  <li>Pregătirea planurilor logistice de tratament, inclusiv rezervarea cazării la hotelurile partenere premium și coordonarea transferurilor VIP private.</li>
                  <li>Facilitarea comunicării cu spitalele partenere acreditate din Istanbul, unde vor fi efectuate procedurile medicale de către specialiști autorizați.</li>
                </ul>
                <p><strong>Temeiul juridic:</strong> Prelucrarea datelor de contact se bazează pe executarea contractului sau demersurile precontractuale (Art. 6(1)(b) GDPR). Prelucrarea datelor speciale de sănătate se realizează exclusiv pe baza <strong>consimțământului dvs. explicit</strong> (Art. 9(2)(a) GDPR și Art. 6 KVKK).</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">4. Transferul Internațional de Date</h2>
                <p>
                  Metodele noastre de comunicare implică transmiterea fișierelor medicale și a solicitărilor prin intermediul site-ului sau al serviciilor noastre de mesagerie (WhatsApp). Sunteți de acord în mod explicit ca datele dvs. medicale și de contact să fie transferate către spitalele și clinicile noastre partenere acreditate din Istanbul, Turcia, pentru evaluarea de către medicii specialiști autorizați, sub clauze de confidențialitate.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">5. Procesatori Terți și Securitate</h2>
                <p>
                  Pentru a asigura funcționarea optimă a serviciilor, utilizăm infrastructuri sigure furnizate de terți, inclusiv servicii de găzduire cloud securizate, sisteme CRM conforme cu standardele industriale și integrări de mesagerie (WhatsApp Business furnizat de Meta Services). Toate datele sunt criptate în tranzit și în repaus (SSL/TLS).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">6. Perioada de Păstrare a Datelor</h2>
                <p>
                  Păstrăm datele dvs. cu caracter personal doar atât timp cât este necesar pentru îndeplinirea scopurilor de coordonare descrise sau pentru a ne conforma obligațiilor legale de arhivare clinică stabilite de legislația din Turcia (de regulă 10 ani pentru documentele de sănătate) sau până când vă retrageți consimțământul.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">7. Drepturile Dvs. (GDPR și KVKK)</h2>
                <p>În calitate de persoană vizată, beneficiați de drepturi extinse, incluzând:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dreptul de acces, rectificare sau ștergere a datelor dvs.</li>
                  <li>Dreptul de a solicita restricționarea prelucrării sau de a vă opune prelucrării.</li>
                  <li>Dreptul la portabilitatea datelor.</li>
                  <li>Dreptul de a vă retrage consimțământul în orice moment, fără a afecta legalitatea prelucrării efectuate înainte de retragere.</li>
                </ul>
                <p>Pentru a vă exercita aceste drepturi, vă rugăm să trimiteți o solicitare scrisă la <a href="mailto:info@mevaclinic.com" className="text-amber-500 hover:underline">info@mevaclinic.com</a>.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">8. Declinare de Responsabilitate Medicală și Evaluarea Finală</h2>
                <p>
                  <strong>IMPORTANT:</strong> Comunicările online, completarea formularelor de contact, utilizarea asistentului AI și mesajele transmise prin WhatsApp au un caracter pur informativ și de pre-evaluare. Acestea <strong>nu înlocuiesc o consultație medicală directă, nu constituie un diagnostic clinic și nu reprezintă o prescripție medicală</strong>.
                </p>
                <p>
                  Compatibilitatea și eligibilitatea medicală finală pentru orice procedură chirurgicală sau tratament sunt stabilite și confirmate exclusiv de către medicii specialiști autorizați, în urma consultației fizice directe, a investigațiilor de laborator, a analizelor clinice și a evaluării anestezice efectuate în cadrul spitalelor partenere din Turcia.
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
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">1. Data Controller &amp; Contact Information</h2>
                <p>
                  Meva Clinic (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating as a premium international patient coordination and medical assistance service in Istanbul, Turkey, acts as the Data Controller under the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and the Turkish Law on the Protection of Personal Data No. 6698 (KVKK).
                </p>
                <p>
                  For any inquiries, requests to exercise your rights, or details regarding data processing, you can reach us at Meva Clinic, Istanbul, Türkiye. Email: <a href="mailto:info@mevaclinic.com" className="text-amber-500 hover:underline">info@mevaclinic.com</a>. Privacy and data protection requests can be submitted by email.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">2. Types of Data We Collect</h2>
                <p>We may collect and process the following categories of personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data:</strong> First name, last name, date of birth, and details from your identity documents (passport) necessary for coordinating medical travel.</li>
                  <li><strong>Contact Data:</strong> Email address, phone number, social media handles, and WhatsApp account.</li>
                  <li><strong>Technical &amp; Usage Data:</strong> IP address, browser type, behavioral data on our website, and cookies utilized during your visit.</li>
                  <li><strong>Special Category Data (Health Data):</strong> Medical history, clinical files, lab results, photographs of treatment areas, and clinical parameters voluntarily submitted by you through our online forms, pre-assessment tools, or WhatsApp chats.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">3. Purpose and Legal Basis for Processing</h2>
                <p>Your personal data is processed for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Preliminary evaluation of your medical file and coordination of a second medical opinion.</li>
                  <li>Arranging logistics and travel plans, including premium partner hotel bookings and private VIP transfers.</li>
                  <li>Facilitating communication with authorized partner hospitals in Istanbul, where the medical procedures will be conducted by licensed medical specialists.</li>
                </ul>
                <p><strong>Legal Basis:</strong> Processing of standard contact data is based on the performance of a contract or taking pre-contractual steps (Art. 6(1)(b) GDPR). Processing of special category health data is performed exclusively upon your <strong>explicit consent</strong> (Art. 9(2)(a) GDPR and Art. 6 KVKK).</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">4. International Data Transfers</h2>
                <p>
                  By submitting your medical files and requests through our website or messaging channels (such as WhatsApp), you explicitly consent to the transfer of your medical and contact data to our accredited partner hospitals and specialists in Istanbul, Turkey. This cross-border transfer is necessary to secure medical evaluations and coordination services, and is managed under strict confidentiality agreements.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">5. Third-Party Processors &amp; Security</h2>
                <p>
                  To ensure secure and reliable services, we utilize secure cloud hosting, industry-compliant CRM systems, and messaging integrations (such as WhatsApp Business provided by Meta Services). All processed data is encrypted in transit and at rest (SSL/TLS).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">6. Data Retention Period</h2>
                <p>
                  We retain your personal data only as long as necessary to fulfill the coordination purposes described, or to comply with clinical archiving periods required by Turkish healthcare regulations (typically 10 years for health records) or until you withdraw your consent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">7. Your Rights (GDPR &amp; KVKK)</h2>
                <p>As a data subject, you hold comprehensive rights, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access, rectify, or erase your personal data.</li>
                  <li>The right to request restriction of processing or to object to processing.</li>
                  <li>The right to data portability.</li>
                  <li>The right to withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</li>
                </ul>
                <p>To exercise these rights, please submit a written request to <a href="mailto:info@mevaclinic.com" className="text-amber-500 hover:underline">info@mevaclinic.com</a>.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-serif font-bold text-[#0b1626]">8. Medical Suitability &amp; Clinical Disclaimer</h2>
                <p>
                  <strong>IMPORTANT:</strong> Online assessments, contact forms, AI assistant inputs, and WhatsApp message communications are strictly for informational and pre-assessment purposes. They <strong>do not constitute a medical diagnosis, clinical prescription, or formal treatment approval</strong>.
                </p>
                <p>
                  Final medical suitability and surgical eligibility for any procedure are exclusively determined and confirmed by licensed medical specialists following direct in-person clinical examinations, laboratory diagnostic tests, and anesthesia assessments at our authorized partner hospital facilities in Turkey.
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
