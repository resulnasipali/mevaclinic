import { MetadataRoute } from 'next';
import { treatmentsData } from '../data/treatmentsData';
import { blogPosts } from '../data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mevaclinic.com';
  const locales = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

  // 1. Static Pages
  const staticPages = [
    '',
    '/contact',
    '/blog',
    '/quiz',
    '/faq',
    '/about-us',
    '/medical-comparison',
    '/privacy-policy',
    '/treatments',
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

  // 3. Dynamic Category Hub Pages
  const categories = ['bariatric', 'hair', 'dental', 'plastic', 'andrology', 'specialist'];
  locales.forEach((locale) => {
    categories.forEach((category) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/treatments/categories/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // 4. Dynamic Blog Pages
  locales.forEach((locale) => {
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return sitemapEntries;
}
