import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogArchiveClient from '../../components/BlogArchiveClient';
import { tUI } from '@/utils/uiTranslations';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  return {
    title: tUI("Clinical Intelligence Hub | Meva Clinic Insights", lang),
    description: tUI("Explore our deep medical analysis on hair restoration, oncology, and surgical precision in Istanbul.", lang),
    alternates: {
      canonical: `/${lang}/blog`,
    },
    openGraph: {
      title: tUI("Clinical Intelligence Hub", lang),
      description: tUI("Deep medical analysis from Istanbul.", lang),
      type: "website"
    }
  };
}

export default async function BlogArchivePage({ params }: Props) {
  const { lang } = await params;
  const safeLang = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={safeLang} />
      <main className="flex-1">
        <BlogArchiveClient lang={safeLang} />
      </main>
      <Footer lang={safeLang} />
    </div>
  );
}
