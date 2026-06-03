import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostClient from '@/app/components/BlogPostClient';
import { blogPosts } from '@/data/blogData';

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

  return {
    title: `${currentTitle} | Meva Clinic Blog`,
    description: currentExcerpt,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
    },
    openGraph: {
      title: currentTitle,
      description: currentExcerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: currentTitle,
        }
      ]
    }
  };
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

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": currentTitle,
    "description": currentExcerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Person", "name": post.author },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Meva Clinic",
      "url": "https://www.mevaclinic.com",
      "logo": { "@type": "ImageObject", "url": "https://www.mevaclinic.com/favicon.svg" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.mevaclinic.com/${safeLang}/blog/${post.slug}` },
    "keywords": post.keywords || "",
    "timeRequired": post.readTime ? `PT${post.readTime}M` : undefined,
    "articleSection": post.category
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogPostClient post={post} lang={safeLang} />
      </main>
      <Footer />
    </div>
  );
}
