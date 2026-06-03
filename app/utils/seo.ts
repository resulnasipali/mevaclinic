// app/utils/seo.ts
import type { Metadata } from 'next';

export function buildMetadata({
  title,
  description,
  pathname,
  lang,
}: {
  title: string;
  description: string;
  pathname: string;
  lang: string;
}): Metadata {
  const isEn = lang === 'en';
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${pathname}`,
      languages: {
        en: `/en${pathname}`,
        ro: `/ro${pathname}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.mevaclinic.com/${lang}${pathname}`,
      locale: isEn ? 'en_US' : 'ro_RO',
      type: 'website',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}
