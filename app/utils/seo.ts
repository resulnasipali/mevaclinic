// app/utils/seo.ts
import type { Metadata } from 'next';

const DOMAIN = 'https://www.mevaclinic.com';
const VERSION = '1.0.1'; // Force WhatsApp/scraping bots to bypass hard-cached previews

const CATEGORY_OG_IMAGES: Record<string, string> = {
  bariatric: '/images/og/bariatric.jpg',
  hair: '/images/og/hair-transplant.jpg',
  dental: '/images/og/dental.jpg',
  plastic: '/images/og/plastic-surgery.jpg',
  andrology: '/images/og/andrology.jpg',
  specialist: '/images/og/specialist.jpg',
  default: '/images/og/default.jpg',
};

const LANGUAGES = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

interface MetadataOptions {
  title: string;
  description: string;
  pathname: string; // e.g. '/treatments/gastric-sleeve', '/blog', '/'
  lang: string;
  category?: string; // bariatric, hair, dental, plastic, andrology, specialist
  ogImage?: string; // override image path (e.g. blog post specific image)
  type?: 'website' | 'article';
  keywords?: string | string[];
}

export function buildMetadata({
  title,
  description,
  pathname,
  lang,
  category,
  ogImage,
  type = 'website',
  keywords,
}: MetadataOptions): Metadata {
  const safeLang = LANGUAGES.includes(lang) ? lang : 'en';

  // Normalize pathname: ensure leading slash, strip trailing slash unless it's root '/'
  let cleanPathname = pathname.trim();
  if (!cleanPathname.startsWith('/')) {
    cleanPathname = '/' + cleanPathname;
  }
  if (cleanPathname.length > 1 && cleanPathname.endsWith('/')) {
    cleanPathname = cleanPathname.slice(0, -1);
  }

  // Strict Canonical URL construction
  const canonicalUrl = `${DOMAIN}/${safeLang}${cleanPathname === '/' ? '' : cleanPathname}`;

  // Multi-language alternates
  const languageAlternates: Record<string, string> = {};
  LANGUAGES.forEach((l) => {
    languageAlternates[l] = `${DOMAIN}/${l}${cleanPathname === '/' ? '' : cleanPathname}`;
  });
  languageAlternates['x-default'] = `${DOMAIN}/en${cleanPathname === '/' ? '' : cleanPathname}`;

  // Map category to premium OG image
  let relativeOgImagePath = ogImage;
  if (!relativeOgImagePath) {
    if (category && CATEGORY_OG_IMAGES[category]) {
      relativeOgImagePath = CATEGORY_OG_IMAGES[category];
    } else {
      relativeOgImagePath = CATEGORY_OG_IMAGES.default;
    }
  }

  // Convert to absolute URL and apply cache-busting version query parameter
  const absoluteOgImageUrl = `${DOMAIN}${relativeOgImagePath}?v=${VERSION}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(DOMAIN),
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Meva Clinic',
      locale: safeLang,
      type,
      images: [
        {
          url: absoluteOgImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteOgImageUrl],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png', sizes: '32x32' },
        { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
    },
  };
}
