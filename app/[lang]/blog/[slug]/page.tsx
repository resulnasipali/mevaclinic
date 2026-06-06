import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostClient from '@/app/components/BlogPostClient';
import { blogPosts } from '@/data/blogData';
import { REVIEWERS } from '@/components/MedicalReviewer';
import { buildMetadata } from '@/app/utils/seo';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';
  
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Not Found' };

  const currentTitle = (post.title as any)[safeLang] || post.title['en'];
  const currentExcerpt = (post.excerpt as any)[safeLang] || post.excerpt['en'];

  return buildMetadata({
    title: `${currentTitle} | Meva Clinic Blog`,
    description: currentExcerpt,
    pathname: `/blog/${slug}`,
    lang,
    ogImage: post.image,
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentTitle = (post.title as any)[safeLang] || post.title['en'];
  const currentExcerpt = (post.excerpt as any)[safeLang] || post.excerpt['en'];

  // Resolve reviewer based on post category
  const getReviewer = (cat: string) => {
    const category = (cat || '').toLowerCase();
    if (category.includes('hair')) return REVIEWERS.hair;
    if (category.includes('bariatric') || category.includes('obesity')) return REVIEWERS.bariatric;
    if (category.includes('dental') || category.includes('tooth') || category.includes('teeth')) return REVIEWERS.dental;
    if (category.includes('plastic') || category.includes('face') || category.includes('rhinoplasty') || category.includes('regenerative')) return REVIEWERS.plastic;
    if (category.includes('oncology') || category.includes('cancer') || category.includes('cyberknife')) return REVIEWERS.oncology;
    if (category.includes('transplant') || category.includes('organ') || category.includes('kidney') || category.includes('liver') || category.includes('ivf')) return REVIEWERS.organ;
    return REVIEWERS.hair;
  };

  const reviewerObj = getReviewer(post.category);
  const reviewedByNode = reviewerObj ? {
    "@type": "Physician",
    "name": reviewerObj.fullName,
    "medicalSpecialty": reviewerObj.specialty,
    "description": reviewerObj.bio || reviewerObj.credentials,
    "url": `https://www.mevaclinic.com/${safeLang}/about-us`
  } : undefined;

  // Structured Data (JSON-LD)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "TechArticle"],
    "headline": currentTitle,
    "description": currentExcerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": (post as any).lastUpdated || post.date,
    "author": { "@type": "Person", "name": post.authorFullName || post.author },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Meva Clinic",
      "url": "https://www.mevaclinic.com",
      "logo": { "@type": "ImageObject", "url": "https://www.mevaclinic.com/logo.png" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Altunizade, Uskudar",
        "addressLocality": "Istanbul",
        "addressRegion": "Uskudar",
        "postalCode": "34662",
        "addressCountry": "TR"
      }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.mevaclinic.com/${safeLang}/blog/${post.slug}` },
    "keywords": post.keywords || "",
    "timeRequired": post.readTime ? `PT${post.readTime}M` : undefined,
    "articleSection": post.category,
    "reviewedBy": reviewedByNode
  };

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `https://www.mevaclinic.com/${safeLang}/blog/${post.slug}#webpage`,
    "url": `https://www.mevaclinic.com/${safeLang}/blog/${post.slug}`,
    "name": currentTitle,
    "description": currentExcerpt,
    "aspect": ["treatment", "recovery", "options"],
    "lastReviewed": (post as any).lastUpdated || post.date,
    "reviewedBy": reviewedByNode
  };

  const schemas = [articleSchema, medicalWebPageSchema];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={safeLang} />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        <BlogPostClient post={post} lang={safeLang} />
      </main>
      <Footer lang={safeLang} />
    </div>
  );
}
