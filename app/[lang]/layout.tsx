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
  en: { title: 'Meva Clinic | Elite Medical Concierge & VIP Healthcare Istanbul', description: 'Experience world-class medical concierge services in Istanbul with Meva Clinic. Premium healthcare packages, JCI-accredited specialists, and luxury Bosphorus stays.' },
  ro: { title: 'Meva Clinic | Concierge Medical de Elită și Servicii VIP Istanbul', description: 'Experimentați servicii de concierge medical de clasă mondială în Istanbul cu Meva Clinic. Pachete premium de sănătate, specialiști acreditați JCI și cazare de lux pe Bosfor.' },
  de: { title: 'Meva Clinic | Elite Medical Concierge & VIP-Gesundheitsdienste Istanbul', description: 'Erleben Sie erstklassigen medizinischen Concierge-Service in Istanbul mit der Meva Clinic. Premium-Gesundheitspakete, JCI-akkreditierte Spezialisten und Luxusunterkünfte am Bosporus.' },
  fr: { title: 'Meva Clinic | Conciergerie Médicale d\'Élite & Santé VIP Istanbul', description: 'Profitez d\'un service de conciergerie médicale haut de gamme à Istanbul avec Meva Clinic. Formules de santé premium, chirurgiens accrédités JCI et séjours de luxe sur le Bosphore.' },
  es: { title: 'Meva Clinic | Concierge Médico de Élite y Salud VIP en Estambul', description: 'Disfrute de servicios de concierge médico de clase mundial en Estambul con Meva Clinic. Tratamientos premium, especialistas certificados y alojamiento de lujo en el Bósforo.' },
  it: { title: 'Meva Clinic | Concierge Medico d\'Élite e Cure VIP a Istanbul', description: 'Vivi un\'esperienza di turismo medico di livello mondiale a Istanbul con Meva Clinic. Trattamenti d\'élite, specialisti accreditati JCI e alloggi di lusso sul Bosforo.' },
  ru: { title: 'Meva Clinic | Элитный медицинский консьерж и VIP-лечение в Стамбуле', description: 'Испытайте медицинский консьерж-сервис мирового класса в Стамбуле с Meva Clinic. Премиум пакеты лечения, аккредитованные JCI специалисты и роскошное проживание.' },
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
            "description": "Elite international medical concierge and premium patient care platform in Istanbul.",
            "sameAs": [
              "https://www.facebook.com/mevaclinic",
              "https://www.instagram.com/mevaclinic",
              "https://www.linkedin.com/company/meva-clinic",
              "https://www.youtube.com/@mevaclinic"
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
