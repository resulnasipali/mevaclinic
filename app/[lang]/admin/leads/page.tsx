import { notFound } from 'next/navigation';
import LeadsDashboard from '@/components/admin/LeadsDashboard';

export const metadata = {
  title: 'Meva CRM - Lead Management',
  robots: 'noindex, nofollow'
};

export default async function AdminLeadsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  if (lang !== 'en' && lang !== 'ro') {
    notFound();
  }

  return <LeadsDashboard />;
}
