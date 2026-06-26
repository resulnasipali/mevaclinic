import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#0b1626',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { LeadProvider } from '@/app/context/LeadContext';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const META_BY_LANG: Record<string, { title: string; description: string }> = {
  en: { title: 'Meva Clinic | Premium International Patient Care Istanbul', description: 'Experience world-class international patient care in Istanbul with Meva Clinic. Premium healthcare programs, JCI-accredited partner hospitals, and comfortable Bosphorus stays.' },
  ro: { title: 'Meva Clinic | Servicii Premium de Îngrijire a Pacienților Istanbul', description: 'Experimentați servicii premium de îngrijire a pacienților în Istanbul cu Meva Clinic. Programe premium de sănătate, spitale partenere acreditate JCI și cazare la hoteluri partenere pe Bosfor.' },
  de: { title: 'Meva Clinic | Premium International Patient Care Istanbul', description: 'Erleben Sie erstklassige internationale Patientenbetreuung in Istanbul mit der Meva Clinic. Premium-Gesundheitsprogramme, JCI-akkreditierte Partnerkliniken und komfortable Unterkünfte am Bosporus.' },
  fr: { title: 'Meva Clinic | Premium International Patient Care Istanbul', description: 'Profitez d\'un service premium d\'assistance aux patients internationaux à Istanbul avec Meva Clinic. Programmes de soins premium, hôpitaux partenaires accrédités JCI et séjours de confort sur le Bosphore.' },
  es: { title: 'Meva Clinic | Premium International Patient Care Istanbul', description: 'Disfrute de servicios premium de atención internacional al paciente en Estambul con Meva Clinic. Programas médicos premium, hospitales asociados acreditados y alojamiento de confort en el Bósforo.' },
  it: { title: 'Meva Clinic | Premium International Patient Care Istanbul', description: 'Vivi un\'assistenza premium internazionale ai pazienti a Istanbul con Meva Clinic. Programmi di cura premium, ospedali partner accreditati JCI e sistemazioni di comfort sul Bosforo.' },
  ru: { title: 'Meva Clinic | Premium International Patient Care Istanbul', description: 'Испытайте премиальное международное обслуживание пациентов в Стамбуле с Meva Clinic. Премиум-программы лечения, партнерские клиники с аккредитацией JCI и комфортное проживание.' },
};

import { buildMetadata } from '@/app/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const meta = META_BY_LANG[lang] ?? META_BY_LANG['en'];
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    pathname: '/',
    lang,
  });
}

import PageTransition from '@/components/PageTransition';
import FloatingLeadWidget from '@/app/components/FloatingLeadWidget';
import ExitIntentPopup from '@/app/components/ExitIntentPopup';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Analytics from '@/components/Analytics';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const messages = await getMessages();
  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Meva Clinic",
            "url": "https://www.mevaclinic.com",
            "logo": "https://www.mevaclinic.com/logo.png",
            "description": "Premium international patient care platform in Istanbul, Turkey.",
            "sameAs": [
              "https://www.facebook.com/mevaclinic",
              "https://www.instagram.com/meva.clinicofficial/",
              "https://www.linkedin.com/company/meva-clinic",
              "https://www.youtube.com/@mevaclinic",
              "https://www.trustpilot.com/review/mevaclinic.com",
              "https://www.google.com/maps/place/Meva+Clinic/@41.0053215,29.0121794,17z/data=!4m7!3m6!1s0xabdc6227ea2ad5cd:0xebf5d95ed4bcab64!8m2!3d41.0053215!4d29.0121794"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Altunizade, Uskudar",
              "addressLocality": "Istanbul",
              "addressRegion": "Uskudar",
              "postalCode": "34662",
              "addressCountry": "TR"
            },
            "knowsAbout": [
              "Plastic Surgery",
              "Hair Transplantation",
              "Bariatric Surgery",
              "Medical Tourism",
              "Dental Implants"
            ],
            "medicalSpecialty": [
              "CosmeticProcedure",
              "SurgicalProcedure"
            ],
            "priceRange": "$$$",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Worldwide"
            }
          })
        }}
      />
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        {/* Core structure ready for Phase 2 & 3 migration */}
        <NextIntlClientProvider messages={messages}>
          <LeadProvider>
            <PageTransition>
              <main className="min-h-screen w-full">
                {children}
              </main>
            </PageTransition>
            
            {/* Phase 3: Global Conversion Modules */}
            <FloatingLeadWidget />
            {/* <ExitIntentPopup /> */}
          </LeadProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
