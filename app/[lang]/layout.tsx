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
  en: { title: 'Meva Clinic | Premium Medical Tourism Istanbul', description: 'VIP Healthcare in Istanbul — Bariatric surgery, hair transplant, dental and plastic surgery packages with JCI-accredited specialists. Free consultation.' },
  ro: { title: 'Meva Clinic | Turism Medical Premium Istanbul', description: 'Pachete VIP de sănătate în Istanbul — Chirurgie bariatrică, transplant de păr, stomatologie și chirurgie plastică cu specialiști acreditați JCI.' },
  de: { title: 'Meva Clinic | Premium Medizintourismus Istanbul', description: 'VIP Gesundheitsreisen nach Istanbul — Bariatrie, Haartransplantation, Zahnästhetik und plastische Chirurgie mit JCI-akkreditierten Spezialisten.' },
  fr: { title: 'Meva Clinic | Tourisme Médical Premium Istanbul', description: 'Forfaits VIP de santé à Istanbul — Chirurgie bariatrique, greffe de cheveux, dentisterie et chirurgie plastique avec des spécialistes accrédités JCI.' },
  es: { title: 'Meva Clinic | Turismo Médico Premium Estambul', description: 'Paquetes VIP de salud en Estambul — Cirugía bariátrica, trasplante de cabello, odontología y cirugía plástica con especialistas acreditados por JCI.' },
  it: { title: 'Meva Clinic | Turismo Medico Premium Istanbul', description: 'Pacchetti VIP di salute a Istanbul — Chirurgia bariatrica, trapianto di capelli, odontoiatria e chirurgia plastica con specialisti accreditati JCI.' },
  ru: { title: 'Meva Clinic | Премиум Медицинский Туризм Стамбул', description: 'VIP медицинские пакеты в Стамбуле — Бариатрическая хирургия, трансплантация волос, стоматология и пластическая хирургия с JCI-аккредитованными специалистами.' },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const meta = META_BY_LANG[lang] ?? META_BY_LANG['en'];
  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL('https://www.mevaclinic.com'),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'ro': '/ro',
        'es': '/es',
        'it': '/it',
        'ru': '/ru',
        'fr': '/fr',
        'de': '/de',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.mevaclinic.com/${lang}`,
      siteName: 'Meva Clinic',
      locale: lang,
      type: 'website',
    },
  };
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
            "description": "Premium VIP Health Tourism and Medical Procedures in Istanbul, Turkey.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Altunizade, Uskudar",
              "addressLocality": "Istanbul",
              "addressRegion": "Uskudar",
              "postalCode": "34662",
              "addressCountry": "TR"
            },
            "medicalSpecialty": [
              "Bariatric Surgery",
              "Plastic Surgery",
              "Hair Transplant",
              "Dentistry"
            ],
            "priceRange": "$$$"
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
