/**
 * TreatmentDetail.jsx — Premium dynamic treatment page
 * Route: /:lang/:slug  (e.g. /en/gastric-sleeve, /ro/implant-par)
 *
 * Features:
 * - Hero with treatment-specific image
 * - Doctor Quote section (E-E-A-T authority)
 * - Step-by-step procedure walkthrough
 * - Advantages grid
 * - Sticky specs sidebar
 * - MedicalProcedure schema
 * - DynamicSEO per treatment
 * - Full bilingual EN / RO
 */

import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, Clock, Calendar,
  Activity, Quote, Star, ShieldCheck, Phone,
  ChevronDown, HelpCircle, UserCheck, Zap, Info
} from 'lucide-react';
import treatmentData from '../data/treatmentDetails.json';
import { findTreatment } from '../data/treatmentsData';
import DynamicSEO from '../components/DynamicSEO';
import { REVIEWERS } from '../components/MedicalReviewer';
import { PxTrack } from '../utils/pixel';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

// ─── Reviewer image fallback ─────────────────────────────────────────────────
const DoctorAvatar = ({ name, image }) => (
  <img
    src={image}
    alt={`${name} — Meva Clinic`}
    width={64} height={64}
    loading="lazy"
    onError={e => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=64&background=0b1626&color=d4af37&bold=true&format=svg`;
    }}
    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent/30 shadow-lg"
  />
);

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors group"
      >
        <span className="font-serif font-bold text-lg text-prime group-hover:text-accent pr-8">{question}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-accent text-prime' : 'text-accent'}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <div className="text-gray-600 leading-relaxed border-l-2 border-accent/30 pl-6 py-2 bg-gray-50/50 rounded-r-xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

// ─── Slug alias map ─────────────────────────────────────────────────────────
// Maps RO locale slugs / legacy slugs → canonical treatmentsData.js id
const SLUG_ALIASES = {
  // RO bariatric
  'balon-gastric':          'gastric-balloon',
  'gastric-balon':          'gastric-balloon',
  // RO dental
  'implant-dentar':         'dental-implants',
  'implanturi-dentare':     'dental-implants',
  // RO hair
  'implant-par':            'meva-mixed-hair',
  'transplant-par':         'meva-mixed-hair',
  'hair-transplant':        'meva-mixed-hair',
  'transplant-par-mixt':    'meva-mixed-hair',
  'transplant-par-dhi':     'dhi-hair-transplant',
  // RO eyebrow
  'implant-sprancene':      'eyebrow-transplant',
  'eyebrow-transplant':     'eyebrow-transplant',
  // Legacy dental
  'dental':                 'dental-implants',
  // RO plastic
  'chirurgie-plastica':     'piezo-rhinoplasty',
  // RO oncology
  'oncologie':              'smart-oncology-drugs',
  'oncology':               'smart-oncology-drugs',
  // RO andrology
  'andrologie':             'ligamentolysis-andrology',
  'andrology':              'ligamentolysis-andrology',
  // RO IVF
  'fiv':                    'ivf-cyprus-special',
  'ivf':                    'ivf-cyprus-special',
  'ivf-cyprus':             'ivf-cyprus-special',
  'ivf-ciprul-de-nord':     'ivf-cyprus-special',
  'ivf-northern-cyprus':    'ivf-cyprus-special',
  'ivf-icsi-pgd':           'ivf-cyprus-special',
  // Organ transplant
  'transplant-organe':      'organ-transplant-turkey',
  // Premium Slider Aliases
  'mommy-makeover':         'mommy-makeover-full',
  'liposuction-360':        'vaser-liposuction',
  'bbl':                    'brazilian-butt-lift-bbl',
  'breast-implants':        'breast-augmentation'
};

// ─── Component ───────────────────────────────────────────────────────────────
const TreatmentDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  // Resolve alias → canonical id
  const resolvedSlug = SLUG_ALIASES[slug] || slug;

  // 1. Try new canonical treatmentsData.js first (with alias resolution)
  // 2. Fall back to legacy treatmentDetails.json
  const tdNew  = findTreatment(resolvedSlug);
  const tdLeg  = !tdNew ? (treatmentData.find(t => t.slug === resolvedSlug) || treatmentData.find(t => t.slug === slug)) : null;
  const treatment = tdNew || tdLeg;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (treatment) {
      PxTrack?.('ViewContent', {
        content_type: 'treatment_detail',
        content_name: isEn ? treatment.title_en : treatment.title,
      });
      pushToDataLayer?.('page_view', { page_type: 'treatment_detail', slug });
    }
  }, [slug, treatment, isEn]);

  // 404
  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center pt-32">
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity size={28} className="text-accent" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-prime mb-4">
          {isEn ? 'Treatment Not Found' : 'Tratament Negăsit'}
        </h1>
        <p className="text-gray-500 mb-8">
          {isEn ? 'This treatment page does not exist or has been moved.' : 'Această pagină de tratament nu există sau a fost mutată.'}
        </p>
        <Link to={isEn ? '/en' : '/ro'} className="bg-accent text-prime font-bold px-8 py-3 rounded-full hover:bg-prime hover:text-white transition-all">
          {isEn ? 'Back to Home' : 'Înapoi Acasă'}
        </Link>
      </div>
    );
  }

  // Localised fields — handle both data shapes
  const isNew = !!tdNew; // using treatmentsData.js

  const getSafeVal = (val, isEn) => {
    if (!val) return '';
    // If it's the new array-based structure (isThisForMe, faq), return the array for the lang
    if (Array.isArray(val)) return val; 
    return typeof val === 'object' ? (val[isEn ? 'en' : 'ro'] || val) : val;
  };

  const title       = isNew ? getSafeVal(tdNew.title, isEn) : (isEn ? treatment.title_en : treatment.title);
  const subtitle    = isNew ? getSafeVal(tdNew.shortDesc, isEn) : (isEn ? treatment.subtitle_en : treatment.subtitle);
  const description = isNew ? getSafeVal(tdNew.shortDesc, isEn) : (isEn ? treatment.description_en : treatment.description);
  
  // New Master Fields
  const isThisForMe = isNew ? (getSafeVal(tdNew.isThisForMe, isEn) || []) : [];
  const theProcedure = isNew ? getSafeVal(tdNew.theProcedure, isEn) : "";
  const mevaAdvantage = isNew ? getSafeVal(tdNew.mevaAdvantage, isEn) : "";
  const faqItems = isNew ? (getSafeVal(tdNew.faq, isEn) || []) : [];

  // Specs handling
  const newSpecs = isNew ? getSafeVal(tdNew.specs, isEn) : null;
  const details     = isNew ? {
    hospitalStay: newSpecs?.hospitalStay || (isEn ? '1-2 Nights' : '1-2 Nopți'),
    hotelStay: newSpecs?.hotelStay || (isEn ? '3-5 Nights' : '3-5 Nopți'),
    returnToWork: newSpecs?.returnToWork || (isEn ? '7-10 Days' : '7-10 Zile'),
    anesthesia: newSpecs?.anesthesia || (isEn ? 'General/Local' : 'Generală/Locală')
  } : (isEn ? treatment.details_en  : treatment.details);

  const expertName = isNew ? getSafeVal(tdNew.expert, isEn) : (treatment.expert || "Meva Clinical Team");

  const quote       = isNew ? {
    text_en: "Our clinical approach prioritizes tissue preservation and long-term natural results, ensuring your transformation is both safe and aesthetically superior.",
    text_ro: "Abordarea noastră clinică prioritizează conservarea țesuturilor și rezultatele naturale pe termen lung, asigurându-vă că transformarea este atât sigură, cât și superioară din punct de vedere estetic.",
    doctor: expertName,
    title_en: "Chief Medical Officer",
    title_ro: "Director Medical",
  } : treatment.doctorQuote;
  
  const quoteText   = isEn ? quote?.text_en : quote?.text_ro;
  const doctorTitle = isEn ? quote?.title_en : quote?.title_ro;
  const steps       = isNew ? [] : (treatment.steps || []);
  const advantages  = isNew ? [] : (treatment.advantages || []);
  const refs        = isNew ? [] : (treatment.scientificReferences || []);
  const heroImage   = isNew ? (tdNew.heroImage || `https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop`) : treatment.heroImage;
  const seoSlug     = isNew ? tdNew.id : treatment.slug;
  const keywords    = isNew ? `${title}, Meva Clinic, Istanbul` : `${title}, Meva Clinic, Istanbul`;
  const reviewerKey = slug.includes('gastric') || slug.includes('bypass') || slug.includes('balloon') ? 'bariatric'
    : slug.includes('hair') || slug.includes('eyebrow') || slug.includes('par') || slug.includes('sprancene') ? 'hair'
    : slug.includes('onco') ? 'oncology'
    : slug.includes('dental') ? 'dental'
    : slug.includes('plastic') ? 'plastic'
    : slug.includes('andrology') || slug.includes('penile') || slug.includes('ligament') ? 'bariatric' // fallback
    : 'bariatric';
  const reviewer = REVIEWERS[reviewerKey];

  // MedicalProcedure schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: title,
    description: description.substring(0, 200),
    procedureType: 'https://health-lifesci.schema.org/SurgicalProcedure',
    bodyLocation: 'Abdomen',
    followup: details.returnToWork,
    howPerformed: steps.map(s => isEn ? s.en : s.ro).join(' → '),
    recognizingAuthority: { '@type': 'Organization', name: 'JCI — Joint Commission International' },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Meva Clinic Istanbul',
      url: 'https://www.mevaclinic.com',
    },
  };

  return (
    <div className="bg-white min-h-screen selection:bg-accent/20">
      {/* ── SEO ── */}
      <DynamicSEO
        title={`${title} | Meva Clinic Istanbul`}
        description={description.substring(0, 155)}
        path={isEn ? `/en/${seoSlug}` : `/ro/${seoSlug}`}
        keywords={keywords}
        schemaType="MedicalProcedure"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 lg:pt-48 lg:pb-40 bg-[#0b1626] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            width="1920" height="1080"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] via-[#0b1626]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          {/* Back link */}
          <Link
            to={isEn ? '/en' : '/ro'}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-white uppercase tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            {isEn ? 'All Treatments' : 'Toate Tratamentele'}
          </Link>

          {/* Expert Badge */}
          {treatment.expert && (
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-accent/20 border border-accent/30 backdrop-blur-md mb-8 group hover:bg-accent/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-prime shadow-lg">
                <UserCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none mb-1">
                  {isEn ? 'Clinical Lead' : 'Coordonator Clinic'}
                </p>
                <p className="text-sm font-bold text-white leading-none">
                  {typeof treatment.expert === 'object' ? treatment.expert[isEn ? 'en' : 'ro'] : treatment.expert}
                </p>
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={12} className="fill-accent" />
            {isEn ? 'Meva Clinic · Istanbul' : 'Meva Clinic · Istanbul'}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl border-l-4 border-accent pl-5 font-medium leading-relaxed mb-10">
            {subtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-accent text-prime font-bold py-3.5 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
            >
              <Phone size={16} />
              {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
            </a>
            <a
              href="#procedure"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full hover:border-accent hover:text-accent transition-all"
            >
              <Activity size={16} />
              {isEn ? 'How It Works' : 'Cum Funcționează'}
            </a>
          </div>
        </div>
      </section>

      {/* ── DOCTOR QUOTE ──────────────────────────────────────────────────── */}
      {quote && (
        <section className="bg-[#0b1626] border-t border-white/5 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start gap-8 p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-accent/10 select-none" aria-hidden="true">
                <Quote size={80} />
              </div>

              {/* Doctor avatar */}
              <div className="shrink-0 flex flex-col items-center gap-3 text-center min-w-[100px]">
                <DoctorAvatar name={quote.doctor} image={reviewer?.image || ''} />
                <div>
                  <p className="text-white font-black text-sm">{quote.doctor}</p>
                  <p className="text-accent text-[11px] font-semibold leading-tight mt-0.5 max-w-[120px]">{doctorTitle}</p>
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={15} className="text-accent" />
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">
                    {isEn ? "Doctor's Clinical Insight" : 'Perspectivă Clinică a Medicului'}
                  </p>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed font-serif italic">
                  "{quoteText}"
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* ── LEFT: Content ── */}
            <div className="lg:w-7/12 space-y-14">

              {/* Description */}
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-prime/40 mb-3">
                  {isEn ? 'About This Procedure' : 'Despre Această Procedură'}
                </p>
                <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                  {isEn ? `Why Choose Meva Clinic for ${(title || "Meva").split(' ')[0]}?` : `De ce Meva Clinic pentru ${(title || "Meva").split(' ')[0]}?`}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
              </div>

              {/* New Master Content Sections */}
              {isNew && (
                <div className="space-y-16">
                  {/* Who is this for? */}
                  {isThisForMe.length > 0 && (
                    <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                      <h2 className="text-2xl font-serif font-bold text-prime mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <UserCheck size={20} className="text-accent" />
                        </span>
                        {isEn ? 'Is This Treatment for Me?' : 'Este Acest Tratament pentru Mine?'}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                        {isThisForMe.map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-50 hover:border-accent/20 transition-all hover:shadow-md group">
                            <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-prime transition-colors">
                              <CheckCircle size={16} />
                            </div>
                            <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* The Procedure Details */}
                  {theProcedure && (
                    <div id="procedure" className="scroll-mt-32">
                      <h2 className="text-3xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <Zap size={20} className="text-accent" />
                        </span>
                        {isEn ? 'The Clinical Procedure' : 'Procedura Clinică'}
                      </h2>
                      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                        <p className="bg-white border-l-4 border-accent p-8 rounded-r-3xl shadow-sm italic font-serif text-xl text-prime/80 mb-8">
                          {theProcedure}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Meva Advantage */}
                  {mevaAdvantage && (
                    <div className="bg-prime text-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
                        <ShieldCheck size={120} />
                      </div>
                      <div className="relative z-10">
                        <h2 className="text-2xl font-serif font-bold text-accent mb-6 flex items-center gap-3">
                          <ShieldCheck size={24} />
                          {isEn ? 'The Meva Advantage' : 'Avantajul Meva Clinic'}
                        </h2>
                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                          {mevaAdvantage}
                        </p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                          <div className="flex flex-col gap-1">
                            <span className="text-accent font-bold text-lg">99%</span>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">{isEn ? 'Safety Rate' : 'Rată Siguranță'}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-accent font-bold text-lg">15+</span>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">{isEn ? 'Years Exp.' : 'Ani Exp.'}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-accent font-bold text-lg">VIP</span>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">{isEn ? 'Care Standard' : 'Standard Îngrijire'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FAQ Accordion */}
                  {faqItems.length > 0 && (
                    <div className="pt-8">
                      <h2 className="text-3xl font-serif font-bold text-prime mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <HelpCircle size={20} className="text-accent" />
                        </span>
                        {isEn ? 'Frequently Asked Questions' : 'Întrebări Frecvente'}
                      </h2>
                      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-8 overflow-hidden">
                        {faqItems.map((item, i) => (
                          <AccordionItem key={i} question={item.q} answer={item.a} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Legacy Procedure Steps (Hidden for new data) */}
              {!isNew && steps.length > 0 && (
                <div id="procedure">
                  <h2 className="text-2xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Activity size={16} className="text-accent" />
                    </span>
                    {isEn ? 'Step-by-Step Procedure' : 'Procedura Pas cu Pas'}
                  </h2>
                  <ol className="space-y-4">
                    {steps.map((step, i) => (
                      <li key={i} className="flex gap-5 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors">
                        <span className="w-9 h-9 rounded-full bg-prime text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 font-medium leading-relaxed pt-1">
                          {isEn ? step.en : step.ro}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Legacy Advantages (Hidden for new data) */}
              {!isNew && advantages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center">
                      <CheckCircle size={16} className="text-accent" />
                    </span>
                    {isEn ? 'Key Advantages at Meva Clinic' : 'Avantaje Cheie la Meva Clinic'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advantages.map((adv, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-green-50 border border-green-100">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                          {isEn ? adv.en : adv.ro}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIP Package guarantee */}
              <div className="bg-[#0b1626] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <h3 className="font-serif font-bold text-xl text-accent mb-5">
                  {isEn ? "Meva VIP Package \u2014 What's Included" : 'Pachetul Meva VIP \u2014 Ce Include'}
                </h3>
                <ul className="space-y-3">
                  {(isEn ? [
                    'JCI Accredited hospital with full Intensive Care Unit',
                    'Native English-speaking clinical coordinator 24/7',
                    'VIP Airport ↔ Hotel ↔ Clinic transfers',
                    'Pre-operative analysis & post-operative medication',
                    '1-year remote follow-up via telemedicine',
                  ] : [
                    'Spital Acreditat JCI cu Terapie Intensivă completă',
                    'Coordonator clinic vorbitor nativ de română 24/7',
                    'Transferuri VIP Aeroport ↔ Hotel ↔ Clinică',
                    'Analize pre-operatorii și medicație post-operatorie',
                    '1 an follow-up la distanță prin telemedicină',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scientific References */}
              {refs?.length > 0 && (
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                    <ShieldCheck size={13} className="text-accent" />
                    {isEn ? 'Scientific References' : 'Referințe Științifice'}
                  </p>
                  <ul className="space-y-2">
                    {refs.map((ref, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-500 leading-relaxed">
                        <span className="text-accent font-bold shrink-0">[{i + 1}]</span>
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ── RIGHT: Sticky Sidebar ── */}
            <div className="lg:w-5/12">
              <div className="sticky top-24 space-y-5">

                {/* Specs card */}
                <div className="bg-prime text-white rounded-[2rem] p-8 shadow-2xl border border-white/5">
                  <h3 className="font-serif font-bold text-xl text-accent border-b border-white/10 pb-4 mb-6">
                    {isEn ? 'Procedure Details' : 'Detalii Procedură'}
                  </h3>
                  <div className="space-y-5">
                    {[
                      { icon: <Calendar size={18} />, label: isEn ? 'Hospital Stay' : 'Spitalizare', value: details.hospitalStay },
                      { icon: <CheckCircle size={18} />, label: isEn ? 'Hotel Package' : 'Pachet Hotel', value: details.hotelStay },
                      { icon: <Clock size={18} />, label: isEn ? 'Return to Work' : 'Revenire la Muncă', value: details.returnToWork },
                      { icon: <Activity size={18} />, label: isEn ? 'Anaesthesia' : 'Anestezie', value: details.anesthesia },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                          {icon}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{label}</p>
                          <p className="font-semibold text-white">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp quick quote */}
                <a
                  href="https://wa.me/905324675941"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => pushToDataLayer?.('whatsapp_click', { location: 'treatment_detail_sidebar' })}
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-500 transition-all hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {isEn ? 'Get Free Quote on WhatsApp' : 'Obțineți Ofertă Gratuită pe WhatsApp'}
                </a>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: '🏥', label: isEn ? 'JCI Accredited' : 'Acreditat JCI' },
                    { icon: '🩺', label: isEn ? 'Board Certified' : 'Certificat de Consiliu' },
                    { icon: '✈️', label: isEn ? 'VIP Transfers' : 'Transferuri VIP' },
                  ].map(b => (
                    <div key={b.label} className="flex flex-col items-center gap-1.5 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                      <span className="text-2xl">{b.icon}</span>
                      <p className="text-[10px] font-bold text-gray-500 leading-tight">{b.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / CONSULTATION ────────────────────────────────────────────── */}
      <section id="consultation" className="bg-[#0b1626] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Phone size={13} />
            {isEn ? 'Free — No Commitment' : 'Gratuit — Fără Angajament'}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
            {isEn ? 'Ready to Start Your Journey?' : 'Gata să vă Începeți Parcursul?'}
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            {isEn
              ? `Speak with a Meva Clinic coordinator today. Get a personalised ${title} quote within 24 hours — completely free, no obligation.`
              : `Vorbiți cu un coordonator Meva Clinic astăzi. Primiți o ofertă personalizată pentru ${title} în 24 de ore — complet gratuit, fără obligații.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={isEn ? '/en/contact' : '/ro/contact'}
              className="flex items-center justify-center gap-2 bg-accent text-prime font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 text-sm"
            >
              <Phone size={16} />
              {isEn ? 'Book Free Consultation' : 'Rezervați Consultație Gratuită'}
            </Link>
            <a
              href="https://wa.me/905324675941"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-bold py-4 px-10 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-all text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;
