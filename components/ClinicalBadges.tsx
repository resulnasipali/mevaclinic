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
            en: 'ISO/TÜV Standards',
            ro: 'Standarde ISO/TÜV',
            es: 'Estándares ISO/TÜV',
            it: 'Standard ISO/TÜV',
            fr: 'Normes ISO/TÜV',
            de: 'ISO/TÜV-Standards',
            ru: 'Стандарты ISO/TÜV'
          }, icon: Award, color: 'text-green-500' },
        { label: {
            en: 'Licensed Providers',
            ro: 'Furnizori Autorizați',
            es: 'Proveedores Autorizados',
            it: 'Fornitori Autorizzati',
            fr: 'Prestataires Agréés',
            de: 'Lizenzierte Anbieter',
            ru: 'Лицензированные Провайдеры'
          }, icon: CheckCircle, color: 'text-prime' },
        { label: {
            en: 'ISAPS Partner Surgeons',
            ro: 'Chirurgi Parteneri ISAPS',
            es: 'Cirujanos Socios ISAPS',
            it: 'Chirurghi Partner ISAPS',
            fr: 'Chirurgiens Partenaires ISAPS',
            de: 'ISAPS-Partnerchirurgen',
            ru: 'Партнерские Хирурги ISAPS'
          }, icon: HeartPulse, color: 'text-accent' },
        { label: {
            en: 'Confidential File Review',
            ro: 'Evaluare Confidențială',
            es: 'Revisión Confidencial',
            it: 'Revisione Riservata',
            fr: 'Examen Confidentiel',
            de: 'Vertrauliche Prüfung',
            ru: 'Конфиденциальный Анализ'
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
        ? "Notă: Meva Clinic coordonează călătoriile pacienților internaționali. Acreditările clinice (cum ar fi standardele de calitate JCI sau ISO/TÜV) și afilierile la societăți profesionale (cum ar fi ISAPS) sunt deținute în mod individual de spitalele partenere respective, clinicile certificate și chirurgii licențiați care efectuează procedurile."
        : lang === 'es' ? "Nota: Meva Clinic coordina los viajes de los pacientes internacionales. Las acreditaciones clínicas (como las normas de calidad JCI o ISO/TÜV) y las membresías de sociedades profesionales (como ISAPS) pertenecen individualmente a los respectivos hospitales asociados, clínicas certificadas y cirujanos autorizados que realizan los procedimientos."
        : lang === 'it' ? "Nota: Meva Clinic coordina i viaggi dei pazienti internazionali. Le accreditazioni cliniche (come gli standard di qualità JCI o ISO/TÜV) e le adesioni a società professionali (come ISAPS) sono detenute individualmente dai rispettivi ospedali partner, cliniche certificate e chirurghi autorizzati che eseguono le procedure."
        : lang === 'de' ? "Hinweis: Meva Clinic koordiniert internationale Patientenreisen. Klinische Akkreditierungen (wie JCI- oder ISO/TÜV-Qualitätsstandards) und Mitgliedschaften in Berufsverbänden (wie ISAPS) werden individuell von den jeweiligen Partnerkrankenhäusern, zertifizierten Kliniken und lizenzierten Chirurgen gehalten, die die Eingriffe durchführen."
        : lang === 'fr' ? "Note : Meva Clinic coordonne les parcours des patients internationaux. Les accréditations cliniques (telles que les normes de qualité JCI ou ISO/TÜV) et les adhésions aux sociétés professionnelles (telles que l'ISAPS) sont détenues individuellement par les hôpitaux partenaires, cliniques agréées et chirurgiens certifiés concernés effectuant les interventions."
        : lang === 'ru' ? "Примечание: Meva Clinic координирует поездки иностранных пациентов. Клинические аккредитации (такие как стандарты качества JCI или ISO/TÜV) и членство в профессиональных сообществах (такие как ISAPS) принадлежат соответствующим партнерским больницам, сертифицированным клиникам и лицензированным хирургам, выполняющим процедуры."
        : "Note: Meva Clinic coordinates international patient journeys. Clinical accreditations (such as JCI or ISO/TÜV quality standards) and professional society memberships (such as ISAPS) are held individually by the respective partner hospitals, certified clinics, and licensed surgeons performing the procedures."}
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
