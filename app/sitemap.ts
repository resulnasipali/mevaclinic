import { MetadataRoute } from 'next';
import { treatmentsData } from '../data/treatmentsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mevaclinic.com';
  const locales = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

  // 1. Static Pages
  const staticPages = [
    '',
    '/contact',
    '/blog',
    '/quiz',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate static pages for all locales
  locales.forEach((locale) => {
    staticPages.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  // 2. Dynamic Treatment Pages
  locales.forEach((locale) => {
    treatmentsData.forEach((treatment) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/treatments/${treatment.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  });

  return sitemapEntries;
}
