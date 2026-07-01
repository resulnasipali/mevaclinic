'use client';
import { tUI } from '@/utils/uiTranslations';
// @ts-nocheck
import React from 'react';
import { ShieldCheck, Award, CheckCircle, Microscope, HeartPulse, Zap } from 'lucide-react';

// Reusable glassmorphism tech-spec card
export const TechCard = ({ icon: Icon, title, value, sub }: { icon: any, title: string, value?: string, sub: string }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
      <Icon size={18} className="text-accent" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{sub}</p>
      <p className="font-bold text-white text-sm leading-snug">{title}</p>
      {value && <p className="text-xs text-accent font-bold mt-0.5">{value}</p>}
    </div>
  </div>
);

// Certification/Trust row
export const CertRow = ({ isEn, lang = 'en' }: any) => (
  <div className="mt-12 pt-8 border-t border-gray-100">
    <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
      {tUI("Accreditations & Certifications", lang)}
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {[
        { label: {
            en: 'JCI Partner Hospitals',
            ro: 'Spitale Partenere JCI',
            es: 'Hospitales Socios JCI',
            it: 'Ospedali Partner JCI',
            fr: 'Hôpitaux Partenaires JCI',
            de: 'JCI-Partnerkliniken',
            ru: 'Партнерские Больницы JCI'
          }, icon: ShieldCheck, color: 'text-blue-500' },
        { label: {
            en: 'ISO / TÜV Quality Standards',
            ro: 'Standarde de Calitate ISO / TÜV',
            es: 'Estándares de Calidad ISO / TÜV',
            it: 'Standard di Qualità ISO / TÜV',
            fr: 'Normes de Qualité ISO / TÜV',
            de: 'ISO / TÜV Qualitätsstandards',
            ru: 'Стандарты Качества ISO / TÜV'
          }, icon: Award, color: 'text-green-500' },
        { label: {
            en: 'Licensed Providers in Türkiye',
            ro: 'Furnizori Autorizați în Turcia',
            es: 'Proveedores Autorizados en Turquía',
            it: 'Fornitori Autorizzati in Turchia',
            fr: 'Prestataires Agréés en Turquie',
            de: 'Lizenzierte Anbieter in der Türkei',
            ru: 'Лицензированные Провайдеры в Турции'
          }, icon: CheckCircle, color: 'text-prime' },
        { label: {
            en: 'ISAPS-Affiliated Partner Surgeons',
            ro: 'Chirurgi Parteneri Afiliați ISAPS',
            es: 'Cirujanos Socios Afiliados a ISAPS',
            it: 'Chirurghi Partner Affiliati ISAPS',
            fr: 'Chirurgiens Partenaires Affiliés ISAPS',
            de: 'ISAPS-assoziierte Partnerchirurgen',
            ru: 'Партнерские Хирурги-Члены ISAPS'
          }, icon: HeartPulse, color: 'text-accent' },
        { label: {
            en: 'International Quality Management',
            ro: 'Management Internațional de Calitate',
            es: 'Gestión de Calidad Internacional',
            it: 'Gestione Internazionale della Qualità',
            fr: 'Gestion de la Qualité Internationale',
            de: 'Internationales Qualitätsmanagement',
            ru: 'Международное Управление Качеством'
          }, icon: Microscope, color: 'text-purple-500' },
      ].map((cert, i) => {
        const Icon = cert.icon;
        const localizedLabel = (cert.label as Record<string, string>)[lang] || (cert.label as Record<string, string>)['en'];
        return (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
            <Icon size={14} className={cert.color} />
            <span className="text-xs font-bold text-gray-600">{localizedLabel}</span>
          </div>
        );
      })}
    </div>
    <p className="text-[10px] text-gray-400 mt-5 max-w-3xl mx-auto text-center leading-relaxed font-sans px-4">
      {lang === 'ro' 
        ? "Referințele la acreditări și societăți se referă la spitalele partenere selectate, instituțiile furnizoare sau chirurgii parteneri individuali, acolo unde este cazul. Meva Clinic coordonează îngrijirea pacienților internaționali prin furnizori de servicii medicale autorizați și parteneri medicali specialiști."
        : lang === 'es' ? "Las referencias a acreditaciones y sociedades se relacionan con hospitales asociados seleccionados, instituciones proveedoras o cirujanos asociados individuales según corresponda. Meva Clinic coordina la atención de pacientes internacionales a través de proveedores de atención médica autorizados y socios médicos especialistas."
        : lang === 'it' ? "I riferimenti alle accreditazioni e alle società si riferiscono a ospedali partner selezionati, istituzioni fornitrici o singoli chirurghi partner ove applicabile. Meva Clinic coordina l'assistenza ai pazienti internazionali attraverso fornitori sanitari autorizzati e partner medici specialisti."
        : lang === 'de' ? "Akkreditierungs- und Verbandsreferenzen beziehen sich auf ausgewählte Partnerkrankenhäuser, Anbieterinstitutionen oder einzelne Partnerchirurgen, sofern zutreffend. Meva Clinic koordiniert die internationale Patientenbetreuung über lizenzierte Gesundheitsdienstleister und spezialisierte medizinische Partner."
        : lang === 'fr' ? "Les références aux accréditations et aux sociétés concernent les hôpitaux partenaires sélectionnés, les établissements prestataires ou les chirurgiens partenaires individuels le cas échéant. Meva Clinic coordonne les soins des patients internationaux par l'intermédiaire de prestataires de soins de santé agréés et de partenaires médicaux spécialisés."
        : lang === 'ru' ? "Ссылки на аккредитации и сообщества относятся к выбранным партнерским больницам, учреждениям-провайдерам или отдельным партнерским хирургам, где это применимо. Meva Clinic координирует обслуживание иностранных пациентов через лицензированных поставщиков медицинских услуг и специализированных медицинских партнеров."
        : "Accreditation and society references relate to selected partner hospitals, provider institutions, or individual partner surgeons where applicable. Meva Clinic coordinates international patient care through licensed healthcare providers and specialist medical partners."}
    </p>
  </div>
);

// Recovery Timeline component
export const RecoveryTimeline = ({ steps, isEn, lang = 'en' }: any) => (
  <div className="my-10 bg-gray-50 rounded-3xl p-8 border border-gray-100">
    <div className="flex items-center gap-2 mb-6">
      <Zap size={16} className="text-accent" />
      <h3 className="font-bold text-prime uppercase tracking-widest text-sm">
        {tUI("Recovery Timeline", lang)}
      </h3>
    </div>
    <div className="flex flex-col md:flex-row gap-0">
      {steps.map((s: any, i: number) => (
        <div key={i} className="flex md:flex-col items-start md:items-center flex-1 relative">
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-4 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-gray-200 z-0" />
          )}
          <div className="w-8 h-8 rounded-full bg-accent text-[#0b1626] font-black text-xs flex items-center justify-center shrink-0 z-10 shadow-md">
            {i + 1}
          </div>
          <div className="ml-4 md:ml-0 md:mt-3 md:text-center pb-6 md:pb-0 md:px-2">
            <p className="font-bold text-prime text-sm">{s.period}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{tUI(s.label, lang)}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Clinically Verified 2026 badge
export const VerifiedBadge = ({ isEn, lang = 'en' }: any) => (
  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
    <CheckCircle size={13} className="text-green-500" />
    <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
      {tUI("Clinically Verified 2026", lang)}
    </span>
  </div>
);

// Lead magnet box (for facelift etc.)
export const LeadMagnetBox = ({ isEn, pdfLabel, onCapture, lang = 'en' }: { isEn?: boolean, pdfLabel?: any, onCapture?: any, lang?: string }) => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const handle = (e: any) => {
    e.preventDefault();
    console.log('[MEVA PDF LEAD]', { email, guide: pdfLabel });
    setDone(true);
    if (onCapture) onCapture(email);
  };
  return (
    <div className="my-10 bg-gradient-to-br from-[#0b1626] to-[#0d2a4a] rounded-3xl p-8 text-white border border-white/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
          <Award size={22} className="text-accent" />
        </div>
        <div className="flex-grow">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
            {tUI("Free Clinical Resource", lang)}
          </p>
          <h4 className="font-bold text-xl font-serif mb-2">{pdfLabel}</h4>
          <p className="text-sm text-gray-400 mb-5">
            {tUI("Includes: Clinical recovery timeline, nutritional protocol, and edema management guide — written by our surgical team.", lang)
            }
          </p>
          {!done ? (
            <form onSubmit={handle} className="flex gap-2">
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder={tUI("Your email address", lang)}
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-all">
                {tUI("Download Free", lang)}
              </button>
            </form>
          ) : (
            <p className="text-green-400 font-bold text-sm flex items-center gap-2">
              <CheckCircle size={16} /> {tUI("Guide sent to your email!", lang)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
