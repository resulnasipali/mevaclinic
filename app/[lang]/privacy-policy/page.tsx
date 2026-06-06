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
  const isEn = lang === 'en';

  const privacyText: Record<string, any> = {
    en: {
      intro: 'Meva Clinic ("we", "our", or "us") respects your privacy and is committed to protecting your personal data in compliance with GDPR and Turkish KVKK regulations.',
      data: 'We may collect identity data, contact data, health data (for medical evaluation purposes only), and technical data when you use our website or services.',
      use: 'Your data is strictly used to provide medical consultation, prepare treatment plans, arrange VIP transfers/accommodation, and communicate with you.',
      security: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.',
      contact: 'If you have any questions about this privacy policy, please contact us at info@mevaclinic.com.'
    },
    ro: {
      intro: 'Meva Clinic ("noi", "nostru" sau "ne") vă respectă confidențialitatea și se angajează să vă protejeze datele personale în conformitate cu reglementările GDPR și KVKK turcești.',
      data: 'Putem colecta date de identitate, date de contact, date de sănătate (doar în scopuri de evaluare medicală) și date tehnice atunci când utilizați site-ul sau serviciile noastre.',
      use: 'Datele dvs. sunt utilizate strict pentru a oferi consultații medicale, a pregăti planuri de tratament, a aranja transferuri/cazare VIP și a comunica cu dvs.',
      security: 'Am implementat măsuri de securitate adecvate pentru a preveni pierderea accidentală, utilizarea sau accesarea neautorizată a datelor dvs. personale.',
      contact: 'Dacă aveți întrebări despre această politică de confidențialitate, vă rugăm să ne contactați la info@mevaclinic.com.'
    },
    it: {
      intro: 'Meva Clinic ("noi", "nostro" o "ci") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali in conformità con le normative GDPR e KVKK turche.',
      data: 'Potremmo raccogliere dati di identità, dati di contatto, dati sanitari (solo per scopi di valutazione medica) e dati tecnici quando utilizzi il nostro sito web o i nostri servizi.',
      use: 'I tuoi dati sono rigorosamente utilizzati per fornire consulenza medica, preparare piani di trattamento, organizzare trasferimenti/alloggi VIP e comunicare con te.',
      security: 'Abbiamo messo in atto adeguate misure di sicurezza per evitare che i tuoi dati personali vengano persi accidentalmente, utilizzati o consultati in modo non autorizzato.',
      contact: 'In caso di domande su questa politica sulla privacy, ti preghiamo di contattarci a info@mevaclinic.com.'
    },
    fr: {
      intro: 'Meva Clinic ("nous", "notre" ou "nos") respecte votre vie privée et s\'engage à protéger vos données personnelles conformément au RGPD et à la réglementation KVKK turque.',
      data: 'Nous pouvons collecter des données d\'identité, de contact, de santé (uniquement à des fins d\'évaluation médicale) et techniques lorsque vous utilisez notre site ou nos services.',
      use: 'Vos données sont strictement utilisées pour fournir des consultations médicales, préparer des plans de traitement, organiser des transferts/hébergements VIP et communiquer avec vous.',
      security: 'Nous avons mis en place des mesures de sécurité appropriées pour éviter que vos données ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée.',
      contact: 'Si vous avez des questions concernant cette politique, veuillez nous contacter à info@mevaclinic.com.'
    },
    es: {
      intro: 'Meva Clinic ("nosotros", "nuestro" o "nos") respeta su privacidad y se compromete a proteger sus datos personales de conformidad con el RGPD y las regulaciones KVKK de Turquía.',
      data: 'Podemos recopilar datos de identidad, contacto, salud (solo para fines de evaluación médica) y técnicos cuando utiliza nuestro sitio web o servicios.',
      use: 'Sus datos se utilizan estrictamente para brindar consultas médicas, preparar planes de tratamiento, organizar traslados/alojamiento VIP y comunicarnos con usted.',
      security: 'Hemos implementado medidas de seguridad adecuadas para evitar que sus datos personales se pierdan accidentalmente, se utilicen o se acceda a ellos de forma no autorizada.',
      contact: 'Si tiene alguna pregunta sobre esta política de privacidad, contáctenos en info@mevaclinic.com.'
    },
    de: {
      intro: 'Meva Clinic ("wir", "unser" oder "uns") respektiert Ihre Privatsphäre und verpflichtet sich, Ihre personenbezogenen Daten in Übereinstimmung mit der DSGVO und den türkischen KVKK-Vorschriften zu schützen.',
      data: 'Wir können Identitätsdaten, Kontaktdaten, Gesundheitsdaten (nur für medizinische Beurteilungszwecke) und technische Daten erfassen, wenn Sie unsere Website oder Dienste nutzen.',
      use: 'Ihre Daten werden ausschließlich verwendet, um medizinische Konsultationen anzubieten, Behandlungspläne zu erstellen, VIP-Transfers/Unterkünfte zu arrangieren und mit Ihnen zu kommunizieren.',
      security: 'Wir haben angemessene Sicherheitsmaßnahmen getroffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, verwendet oder unbefugt abgerufen werden.',
      contact: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter info@mevaclinic.com.'
    },
    ru: {
      intro: 'Meva Clinic («мы», «наш» или «нас») уважает вашу конфиденциальность и обязуется защищать ваши личные данные в соответствии с GDPR и турецкими правилами KVKK.',
      data: 'Мы можем собирать идентификационные, контактные, медицинские (только для медицинской оценки) и технические данные, когда вы используете наш веб-сайт или услуги.',
      use: 'Ваши данные строго используются для предоставления медицинских консультаций, подготовки планов лечения, организации VIP-трансферов/проживания и общения с вами.',
      security: 'Мы приняли соответствующие меры безопасности для предотвращения случайной потери, несанкционированного использования или доступа к вашим личным данным.',
      contact: 'Если у вас есть вопросы об этой политике конфиденциальности, свяжитесь с нами по адресу info@mevaclinic.com.'
    }
  };

  const content = privacyText[lang] || privacyText['en'];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-[#0b1626] mb-8">
            {tUI("Privacy Policy", lang)}
          </h1>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
            <p>{tUI("Last updated", lang)}: {new Date().toLocaleDateString()}</p>
            <h2>1. {tUI("Introduction", lang)}</h2>
            <p>{content.intro}</p>
            <h2>2. {tUI("Data We Collect", lang)}</h2>
            <p>{content.data}</p>
            <h2>3. {tUI("How We Use Your Data", lang)}</h2>
            <p>{content.use}</p>
            <h2>4. {tUI("Data Security", lang)}</h2>
            <p>{content.security}</p>
            <h2>5. {tUI("Contact Us", lang)}</h2>
            <p>{content.contact}</p>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
