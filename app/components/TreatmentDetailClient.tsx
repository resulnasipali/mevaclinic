'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft, CheckCircle, Clock, Calendar,
  Activity, Quote, Star, ShieldCheck, Phone,
  ChevronDown, HelpCircle, UserCheck, Zap,
  ShieldAlert, FileText, AlertTriangle, ExternalLink
} from 'lucide-react';

import ProcedureGallery from '@/components/ProcedureGallery';
import PrivacyCtaCard from '@/components/PrivacyCtaCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { treatmentsData } from '@/data/treatmentsData';
import { blogPosts } from '@/data/blogData';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';
import { TreatmentImage } from '@/utils/getTreatmentImages';
import { tUI } from '@/utils/uiTranslations';
import { maskDoctorName } from '@/utils/doctorUtils';
import MedicalReviewer from '@/components/MedicalReviewer';
import { REVIEWERS } from '@/data/reviewersData';


import BmiWrapper from '@/components/BmiWrapper';

interface TreatmentClientProps {
  treatment: any;
  lang: string;
  images?: TreatmentImage[];
  categoryLayout?: string;
  doctorReviewer?: any;
}

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-amber-500 transition-colors group"
      >
        <span className="font-serif font-bold text-lg text-[#0b1626] group-hover:text-amber-500 pr-8">{question}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500 text-[#0b1626]' : 'text-amber-500'}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <div className="text-gray-600 leading-relaxed border-l-2 border-amber-500/30 pl-6 py-2 bg-gray-50/50 rounded-r-xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

const PROTECTED_TREATMENTS = [
  'ligamentolysis-andrology',
  'breast-augmentation',
  'mastopexy-lift',
  'brazilian-butt-lift-bbl',
  'abdominoplasty-tummy',
  'vaser-liposuction',
  'mommy-makeover-full',
  'gynecomastia-male'
];

const CATEGORY_LABELS: Record<string, string> = {
  bariatric: 'Bariatric Surgery',
  hair: 'Hair & Brow Transplant',
  dental: 'Dental Care',
  plastic: 'Plastic Surgery',
  andrology: 'Andrology',
  specialist: 'Specialist Treatments'
};

export default function TreatmentDetailClient({ treatment, lang, images = [], categoryLayout, doctorReviewer }: TreatmentClientProps) {
  const isEn = lang === 'en';

  const getClinicalDisclaimer = () => {
    const slug = treatment?.slug || treatment?.id;
    const category = treatment?.category;

    if (slug === 'organ-transplant-turkey') {
      return tUI('Meva Clinic provides coordination and second medical opinion support only. Eligibility, donor compatibility, ethics committee review and surgical decisions are made exclusively by authorized transplant centers and licensed transplant specialists.', lang);
    }
    if (slug === 'smart-oncology-drugs') {
      return tUI('Meva Clinic coordinates medical record review, tumor board consultation and hospital appointment logistics only. Diagnosis, prescriptions and treatment decisions are made exclusively by authorized oncology specialists and provider institutions.', lang);
    }
    if (slug === 'vaser-liposuction') {
      return tUI('Hospital-based procedures are coordinated through accredited partner hospitals, including licensed partner hospital settings.', lang);
    }
    if (category === 'hair' || category === 'dental' || slug === 'ha-filler-girth' || slug === 'p-shot-prp' || slug === 'botox-girth') {
      return tUI('Treatment pathways are coordinated with selected specialist medical partners and accredited provider institutions, depending on the procedure and doctor assessment.', lang);
    }
    return tUI('Hospital-based procedures are coordinated through accredited partner hospitals, including JCI-accredited institutions where clinically appropriate.', lang);
  };


  const getSafeVal = (val: any, locale: string): any => {
    if (!val) return '';
    if (Array.isArray(val)) {
      return val.map(item => {
        if (typeof item === 'string') {
          return maskDoctorName(item);
        }
        if (item && typeof item === 'object') {
          const newItem = { ...item };
          for (const key in newItem) {
            if (typeof newItem[key] === 'string') {
              newItem[key] = maskDoctorName(newItem[key]);
            } else if (newItem[key] && typeof newItem[key] === 'object') {
              newItem[key] = getSafeVal(newItem[key], locale);
            }
          }
          return newItem;
        }
        return item;
      });
    }
    let res = '';
    if (typeof val === 'object') {
      res = val[locale] || val['en'] || Object.values(val)[0] || '';
    } else {
      res = val;
    }
    return typeof res === 'string' ? maskDoctorName(res) : res;
  };

  const title = getSafeVal(treatment.title, lang);
  const subtitle = getSafeVal(treatment.shortDesc, lang);
  const description = getSafeVal(treatment.shortDesc, lang);
  
  const isThisForMe = getSafeVal(treatment.isThisForMe, lang) || [];
  const theProcedure = getSafeVal(treatment.theProcedure, lang);
  const mevaAdvantage = getSafeVal(treatment.mevaAdvantage, lang);
  const faqItems = getSafeVal(treatment.faq, lang) || [];
  
  const semanticSeoText = getSafeVal(treatment.semanticSeoText, lang);
  const premiumInclusions = getSafeVal(treatment.premiumInclusions, lang) || [];
  const recoveryTimeline = getSafeVal(treatment.recoveryTimeline, lang) || [];
  const procedureSteps = getSafeVal(treatment.procedureSteps, lang) || [];

  const suitability = getSafeVal(treatment.suitability, lang) || [];
  const contraindications = getSafeVal(treatment.contraindications, lang) || [];
  const preOpEvaluation = getSafeVal(treatment.preOpEvaluation, lang) || [];
  const risksComplications = getSafeVal(treatment.risksComplications, lang) || [];
  const realisticOutcomes = getSafeVal(treatment.realisticOutcomes, lang);
  const revisionPolicy = getSafeVal(treatment.revisionPolicy, lang);
  const medicalDisclaimer = getSafeVal(treatment.medicalDisclaimer, lang);
  const references = getSafeVal(treatment.references, lang) || [];
  
  console.log("DEBUG_TREATMENT:", treatment.id);
  console.log("DEBUG_PREMIUM:", premiumInclusions);
  console.log("DEBUG_IS_EN:", isEn);

  const specs = getSafeVal(treatment.specs, lang);
  const details = {
    hospitalStay: specs?.hospitalStay ? tUI(specs.hospitalStay, lang) : (tUI('1-2 Nights', lang)),
    hotelStay: specs?.hotelStay ? tUI(specs.hotelStay, lang) : (tUI('3-5 Nights', lang)),
    returnToWork: specs?.returnToWork ? tUI(specs.returnToWork, lang) : (tUI('7-10 Days', lang)),
    anesthesia: specs?.anesthesia ? tUI(specs.anesthesia, lang) : (tUI('General/Local', lang))
  };

  const expertName = tUI(getSafeVal(treatment.expert, lang), lang) || tUI('Meva Clinical Team', lang);
  const quoteText = tUI('Our clinical approach prioritizes patient safety, individualized treatment planning, realistic expectations, and long-term follow-up throughout the international care journey.', lang);
  const doctorTitle = tUI('Chief Medical Officer', lang);

  // Resolve reviewer based on category and treatment properties
  const getReviewer = (category: string, treatmentId: string) => {
    const cat = (category || '').toLowerCase();
    const id = (treatmentId || '').toLowerCase();
    
    if (cat === 'hair') {
      return REVIEWERS.hair;
    }
    if (cat === 'dental') {
      return REVIEWERS.dental;
    }
    if (cat === 'bariatric') {
      return REVIEWERS.bariatric;
    }
    if (cat === 'plastic') {
      if (id === 'vaser-liposuction') {
        return REVIEWERS.editorial;
      }
      return REVIEWERS.plastic;
    }
    if (cat === 'andrology') {
      return REVIEWERS.specialist;
    }
    if (
      cat === 'specialist' &&
      (id.includes('ivf') || id.includes('fertility'))
    ) {
      return REVIEWERS.fertility;
    }
    if (
      cat === 'specialist' &&
      (id.includes('organ') || id.includes('kidney') || id.includes('liver'))
    ) {
      return REVIEWERS.organ;
    }
    if (
      cat === 'specialist' &&
      (id.includes('cyberknife') || id.includes('oncology') || id.includes('cancer'))
    ) {
      return REVIEWERS.oncology;
    }
    
    return REVIEWERS.specialist;
  };


  const reviewerObj = getReviewer(treatment.category, treatment.id);

  const heroImage = treatment.heroImage || `https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop`;

  return (
    <div className="bg-white min-h-screen selection:bg-amber-500/20 overflow-hidden">
      <section className="relative pt-32 pb-28 lg:pt-48 lg:pb-40 bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] via-[#0b1626]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Breadcrumbs 
              lang={lang}
              items={[
                { label: tUI("Treatments", lang), path: `/${lang}/treatments` },
                { label: tUI(CATEGORY_LABELS[treatment.category] || treatment.category, lang), path: `/${lang}/treatments/categories/${treatment.category}` },
                { label: title }
              ]}
            />
          </motion.div>

          {doctorReviewer ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8 group hover:bg-white/10 transition-all min-h-[44px]"
            >
              <div className="w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center text-[#0b1626] shadow-lg">
                <UserCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest leading-none mb-1">
                  {tUI('Medical Review', lang)}
                </p>
                <p className="text-sm font-bold text-white leading-none">
                  {doctorReviewer.displayName}
                </p>
              </div>
            </motion.div>
          ) : expertName ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8 group hover:bg-white/10 transition-all min-h-[44px]"
            >
              <div className="w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center text-[#0b1626] shadow-lg">
                <UserCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest leading-none mb-1">
                  {tUI('Clinical Lead', lang)}
                </p>
                <p className="text-sm font-bold text-white leading-none">
                  {expertName}
                </p>
              </div>
            </motion.div>
          ) : null}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-amber-500 text-xs font-bold uppercase tracking-widest mb-6 min-h-[44px]"
          >
            <Star size={12} className="fill-amber-500" />
            {tUI('Meva Clinic · Istanbul', lang)}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
             <div className="flex items-center gap-2"><Calendar size={14} className="text-amber-500" /> {tUI("Published:", lang)} {treatment.publishDate || '2025-11-12'}</div>
             <div className="flex items-center gap-2"><Clock size={14} className="text-amber-500" /> {tUI("Last Updated:", lang)} {treatment.lastUpdated || '2026-05-18'}</div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-tight max-w-3xl"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl border-l-4 border-amber-500 pl-5 font-medium leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-amber-500 text-[#0b1626] font-bold py-3.5 px-8 rounded-full hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 min-h-[44px]"
            >
              <Phone size={16} />
              {tUI('Free Consultation', lang)}
            </a>
            <span className="sr-only"> | </span>
            <a
              href="#procedure"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full hover:border-amber-500 hover:bg-white/5 backdrop-blur-sm transition-all min-h-[44px]"
            >
              <Activity size={16} />
              {tUI('How It Works', lang)}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0b1626] border-t border-white/5 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start gap-8 p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] relative overflow-hidden"
          >
            {doctorReviewer ? (
              <>
                <div className="shrink-0 flex flex-col items-center gap-3 text-center min-w-[120px]">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border-2 border-amber-500/20 shadow-lg">
                    <UserCheck size={32} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">{doctorReviewer.displayName}</p>
                    <p className="text-amber-500 text-[10px] uppercase font-bold tracking-widest mt-1">{tUI(doctorReviewer.publicRole, lang)}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-amber-500" />
                    <p className="text-amber-500 text-xs font-bold uppercase tracking-widest">
                      {tUI(doctorReviewer.specialty, lang)}
                    </p>
                  </div>
                  
                  {treatment.doctorNote ? (
                    <p className="text-gray-200 text-lg leading-relaxed font-serif italic">
                      "{tUI(getSafeVal(treatment.doctorNote, lang), lang)}"
                    </p>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">{tUI('Clinical Review Focus', lang)}</p>
                      <p className="text-gray-200 text-sm leading-relaxed">{tUI(doctorReviewer.clinicalFocus, lang)}</p>
                    </div>
                  )}

                  <p className="text-[11px] text-gray-400 border-t border-white/10 pt-3 leading-relaxed">
                    {tUI(doctorReviewer.reviewScope, lang)}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="absolute top-6 right-8 text-amber-500/10 select-none" aria-hidden="true">
                  <Quote size={80} />
                </div>

                <div className="shrink-0 flex flex-col items-center gap-3 text-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center border-2 border-amber-500/30 shadow-lg">
                    <UserCheck size={32} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">{expertName}</p>
                    <p className="text-amber-500 text-[11px] font-semibold leading-tight mt-0.5 max-w-[120px]">{doctorTitle}</p>
                  </div>
                </div>

                <blockquote className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={15} className="text-amber-500" />
                    <p className="text-amber-500 text-xs font-bold uppercase tracking-widest">
                      {tUI('Doctor\'s Clinical Insight', lang)}
                    </p>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed font-serif italic relative z-10">
                    "{quoteText}"
                  </p>
                </blockquote>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="lg:w-7/12 space-y-14">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-widest font-bold text-[#0b1626]/40 mb-3">
                  {tUI('About This Procedure', lang)}
                </p>
                <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-5">
                  {tUI('Why Choose Meva Clinic?', lang)}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
                {semanticSeoText && (
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-serif">
                    <p dangerouslySetInnerHTML={{ __html: semanticSeoText }} />
                  </div>
                )}
              </motion.div>

              {reviewerObj && (
                <MedicalReviewer reviewer={reviewerObj} isEn={isEn} />
              )}

              <div className="space-y-16">
                {isThisForMe.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <h2 className="text-2xl font-serif font-bold text-[#0b1626] mb-8 flex items-center gap-3">
                      <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                        <UserCheck size={20} className="text-amber-500" />
                      </span>
                      {tUI('Is This Treatment for Me?', lang)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                      {isThisForMe.map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-50 hover:border-amber-500/20 transition-all hover:shadow-md group">
                          <div className="w-8 h-8 rounded-full bg-amber-500/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-[#0b1626] transition-colors">
                            <CheckCircle size={16} />
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {premiumInclusions.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-amber-500/5 rounded-[2.5rem] p-10 border border-amber-500/20"
                  >
                    <h2 className="text-2xl font-serif font-bold text-[#0b1626] mb-8 flex items-center gap-3">
                      <span className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Star size={20} className="text-[#0b1626] fill-[#0b1626]" />
                      </span>
                      {tUI('Comprehensive International Patient Care Plan', lang)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {premiumInclusions.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-amber-500/10 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                            <CheckCircle size={16} className="text-amber-500" />
                          </div>
                          <p className="text-[#0b1626] font-bold text-sm leading-tight">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {theProcedure && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    id="procedure" 
                    className="scroll-mt-32"
                  >
                    <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                        <Zap size={20} className="text-amber-500" />
                      </span>
                      {tUI('The Clinical Procedure', lang)}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                      <p className="bg-white border-l-4 border-amber-500 p-8 rounded-r-3xl shadow-sm italic font-serif text-xl text-[#0b1626]/80 mb-8">
                        {theProcedure}
                      </p>
                    </div>
                  </motion.div>
                )}

                {procedureSteps.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {procedureSteps.map((step: any, i: number) => (
                        <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-amber-500/30 hover:shadow-md transition-all group relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <Zap size={80} />
                          </div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                              <span className="text-amber-500 font-bold font-serif text-xl">{i + 1}</span>
                            </div>
                            <h3 className="font-bold text-[#0b1626] text-lg leading-tight group-hover:text-amber-500 transition-colors">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {recoveryTimeline.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-8 flex items-center gap-3">
                      <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                        <Clock size={20} className="text-amber-500" />
                      </span>
                      {tUI('Recovery & Transformation Journey', lang)}
                    </h2>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-500/30 before:to-transparent">
                      {recoveryTimeline.map((item: any, i: number) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="text-[#0b1626] font-bold text-xs">{i + 1}</span>
                          </div>
                          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:border-amber-500/30 group-hover:shadow-md transition-all">
                            <h4 className="font-bold text-[#0b1626] text-lg mb-2">{item.time}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {mevaAdvantage && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0b1626] text-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
                      <ShieldCheck size={120} />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-2xl font-serif font-bold text-amber-500 mb-6 flex items-center gap-3">
                        <ShieldCheck size={24} />
                        {tUI('The Meva Advantage', lang)}
                      </h2>
                      <p className="text-xl text-gray-200 leading-relaxed font-light">
                        {mevaAdvantage}
                      </p>
                      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                        <div className="flex flex-col gap-1">
                          <span className="text-amber-500 font-bold text-lg">{tUI('High', lang)}</span>
                          <span className="text-xs text-gray-400 uppercase tracking-tighter">{tUI('Safety Standard', lang)}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-amber-500 font-bold text-lg">15+ </span>
                          <span className="text-xs text-gray-400 uppercase tracking-tighter">{tUI('Years Experience', lang)}</span>
                        </div>
                         <div className="flex flex-col gap-1">
                           <span className="text-amber-500 font-bold text-lg">{tUI('Premium', lang)}</span>
                           <span className="text-xs text-gray-400 uppercase tracking-tighter">{tUI('Clinical Care Standard', lang)}</span>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Clinical Safety & JCI Compliance Sections */}
                {(suitability.length > 0 || contraindications.length > 0 || preOpEvaluation.length > 0 || risksComplications.length > 0 || realisticOutcomes || revisionPolicy || references.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12 pt-8 border-t border-gray-100 mt-12"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-widest font-bold text-[#0b1626]/40 mb-3 block">
                        {tUI('Clinical Standards & Safety', lang)}
                      </span>
                      <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-2 flex items-center gap-3">
                        <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                          <ShieldCheck size={20} className="text-amber-500" />
                        </span>
                        {tUI('Medical Guidelines & Safety Protocols', lang)}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                        {getClinicalDisclaimer()} {tUI('Below are the clinical guidelines, safety protocols, and medical reference documentation for this procedure.', lang)}
                      </p>
                    </div>

                    {/* Suitability & Contraindications Grid */}
                    {(suitability.length > 0 || contraindications.length > 0) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {suitability.length > 0 && (
                          <div className="bg-emerald-50/30 border border-emerald-500/15 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0b1626] mb-6 flex items-center gap-2">
                              <span className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                <CheckCircle size={16} />
                              </span>
                              {tUI('Indicated / Suitable For', lang)}
                            </h3>
                            <ul className="space-y-4">
                              {suitability.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {contraindications.length > 0 && (
                          <div className="bg-rose-50/30 border border-rose-500/15 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0b1626] mb-6 flex items-center gap-2">
                              <span className="w-7 h-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-600">
                                <ShieldAlert size={16} />
                              </span>
                              {tUI('Contraindications / Not Suitable', lang)}
                            </h3>
                            <ul className="space-y-4">
                              {contraindications.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed font-medium">
                                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-rose-500 mt-2" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pre-Operative Diagnostic Evaluation */}
                    {preOpEvaluation.length > 0 && (
                      <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-lg font-bold text-[#0b1626] mb-6 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                            <FileText size={16} />
                          </span>
                          {tUI('Pre-Operative Evaluation & Diagnostic Checks', lang)}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {preOpEvaluation.map((item: string, i: number) => (
                            <div key={i} className="bg-white p-4 rounded-2xl border border-gray-50 flex items-start gap-3 shadow-sm hover:border-amber-500/20 transition-all">
                              <span className="text-amber-500 font-bold text-xs bg-amber-500/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                              <p className="text-sm text-gray-700 leading-relaxed font-medium">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Risks & Complications */}
                    {risksComplications.length > 0 && (
                      <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-lg font-bold text-[#0b1626] mb-4 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                            <AlertTriangle size={16} />
                          </span>
                          {tUI('Potential Risks & Complications', lang)}
                        </h3>
                        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                          {treatment?.id === 'vaser-liposuction'
                            ? tUI('In compliance with transparent clinical reporting, Meva Clinic ensures patients are fully informed of the physiological risks associated with surgical procedures under structured surgical safety standards.', lang)
                            : tUI('In compliance with transparent clinical reporting, Meva Clinic ensures patients are fully informed of the physiological risks associated with surgical procedures under JCI patient safety standards.', lang)}
                        </p>
                        <div className="space-y-4">
                          {risksComplications.map((item: string, i: number) => {
                            const parts = item.split(':');
                            const hasTitle = parts.length > 1;
                            const rTitle = hasTitle ? parts[0] : '';
                            const rDesc = hasTitle ? parts.slice(1).join(':') : item;

                            return (
                              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-50 flex items-start gap-4 shadow-sm hover:border-rose-500/20 transition-all">
                                <span className="shrink-0 w-2 h-2 rounded-full bg-rose-500 mt-2.5" />
                                <div>
                                  {hasTitle && <span className="font-bold text-sm text-[#0b1626] block mb-1">{rTitle}</span>}
                                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{rDesc.trim()}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Expectations & Revision Policies */}
                    {(realisticOutcomes || revisionPolicy) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {realisticOutcomes && (
                          <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0b1626] mb-4 flex items-center gap-2">
                              <span className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                                <Activity size={16} />
                              </span>
                              {tUI('Realistic Expectations & Outcomes', lang)}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium bg-white p-5 rounded-2xl border border-gray-50 shadow-sm">
                              {realisticOutcomes}
                            </p>
                          </div>
                        )}

                        {revisionPolicy && (
                          <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0b1626] mb-4 flex items-center gap-2">
                              <span className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                                <ShieldCheck size={16} />
                              </span>
                              {tUI('Revision & Follow-Up Policy', lang)}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium bg-white p-5 rounded-2xl border border-gray-50 shadow-sm">
                              {revisionPolicy}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Authoritative References */}
                    {references.length > 0 && (
                      <div className="bg-gray-50/30 border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-sm font-bold text-[#0b1626] mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                            <FileText size={12} />
                          </span>
                          {tUI('Authoritative Medical References & Studies', lang)}
                        </h3>
                        <ul className="space-y-3 pl-2">
                          {references.map((item: any, i: number) => {
                            let text = '';
                            let url = '';
                            let isStudy = true;

                            if (item && typeof item === 'object') {
                              text = item.text || '';
                              url = item.url || '';
                              isStudy = item.type === 'study';
                            } else {
                              text = String(item || '');
                              url = `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(text)}`;
                              isStudy = true;
                            }

                            const linkLabel = isStudy ? tUI('View Study', lang) : tUI('View Source', lang);

                            return (
                              <li key={i} className="text-xs text-gray-500 leading-relaxed font-medium grid grid-cols-[24px_1fr] gap-x-2 items-start">
                                <span className="text-amber-500 font-bold shrink-0">[{i + 1}]</span>
                                <div className="flex-1">
                                  <span>{text}</span>
                                  {url && (
                                    <a
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer nofollow"
                                      className="text-amber-500 hover:text-amber-600 underline inline-flex items-center gap-0.5 ml-1.5 whitespace-nowrap"
                                    >
                                      {linkLabel} <ExternalLink size={10} />
                                    </a>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Medical Disclaimer */}
                    {medicalDisclaimer && (
                      <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6">
                        <p className="text-[11px] text-amber-600/80 leading-relaxed font-medium text-center">
                          <strong>{tUI('Medical Disclaimer:', lang)}</strong> {medicalDisclaimer}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

                {faqItems.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pt-8"
                  >
                    <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-8 flex items-center gap-3">
                      <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                        <HelpCircle size={20} className="text-amber-500" />
                      </span>
                      {tUI('Frequently Asked Questions', lang)}
                    </h2>
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-8 overflow-hidden">
                      {faqItems.map((item: any, i: number) => (
                        <AccordionItem key={i} question={item.q} answer={item.a} />
                      ))}
                    </div>
                  </motion.div>
                )}

                {(() => {
                  let relatedTreatments = treatmentsData
                    .filter((t: any) => t.category === treatment.category && t.id !== treatment.id);

                  if (treatment.id === 'vaser-liposuction') {
                    const preferredIds = [
                      'double-chin-liposuction',
                      'abdominoplasty-tummy',
                      'mommy-makeover-full',
                      'gynecomastia-male',
                      'breast-augmentation',
                      'brazilian-butt-lift-bbl',
                      'arm-thigh-lift'
                    ];
                    relatedTreatments = relatedTreatments.sort((a: any, b: any) => {
                      const idxA = preferredIds.indexOf(a.id);
                      const idxB = preferredIds.indexOf(b.id);
                      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                      if (idxA !== -1) return -1;
                      if (idxB !== -1) return 1;
                      return 0;
                    });
                  }
                  relatedTreatments = relatedTreatments.slice(0, 4);

                  const getRelatedBlogs = () => {
                    const cat = (treatment.category || '').toLowerCase();
                    const id = (treatment.id || '').toLowerCase();
                    
                    if (cat === 'hair') {
                      return blogPosts.filter((b: any) => b.category === 'Hair Tech');
                    }
                    if (cat === 'dental') {
                      return blogPosts.filter((b: any) => b.category === 'Dental Tech');
                    }
                    if (cat === 'bariatric') {
                      return blogPosts.filter((b: any) => b.category === 'Bariatric');
                    }
                    if (cat === 'plastic') {
                      let posts = blogPosts.filter((b: any) => b.category === 'Safety' || b.category === 'Concierge');
                      if (id === 'vaser-liposuction') {
                        posts = posts.filter((b: any) => b.slug !== 'jci-standards-importance');
                      }
                      return posts;
                    }
                    if (cat === 'specialist') {
                      if (id.includes('cyberknife') || id.includes('oncology') || id.includes('cancer')) {
                        return blogPosts.filter((b: any) => b.category === 'Oncology');
                      }
                      if (id.includes('transplant') || id.includes('kidney') || id.includes('liver')) {
                        return blogPosts.filter((b: any) => b.category === 'Transplant');
                      }
                      if (id.includes('ivf') || id.includes('fertility')) {
                        return blogPosts.filter((b: any) => b.category === 'IVF');
                      }
                    }
                    return [];
                  };

                  const relatedBlogs = getRelatedBlogs().slice(0, 3);

                  return (
                    <>
                      {relatedTreatments.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="pt-12 border-t border-gray-100 mt-12"
                        >
                          <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                              <Activity size={20} className="text-amber-500" />
                            </span>
                            {tUI('Related Treatments', lang)}
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedTreatments.map((tItem: any, idx: number) => {
                              const tTitle = getSafeVal(tItem.title, lang);
                              const tDesc = getSafeVal(tItem.shortDesc, lang);
                              return (
                                <Link 
                                  key={idx}
                                  href={`/${lang}/treatments/${tItem.id}`}
                                  className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-amber-500/30 hover:shadow-md transition-all group block"
                                >
                                  <h3 className="font-bold text-[#0b1626] text-lg leading-tight mb-2 group-hover:text-amber-500 transition-colors">
                                    {tTitle}
                                  </h3>
                                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                    {tDesc}
                                  </p>
                                  <div className="mt-4 flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest gap-1 group-hover:gap-2 transition-all">
                                    {tUI('View Treatment', lang)} &rarr;
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {relatedBlogs.length > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="pt-12 border-t border-gray-100 mt-12"
                        >
                          <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                              <Quote size={20} className="text-amber-500" />
                            </span>
                            {tUI('Medical Insights & Blog', lang)}
                          </h2>
                          <div className="space-y-4">
                            {relatedBlogs.map((post: any, idx: number) => {
                              const postTitle = getSafeVal(post.title, lang);
                              const postExcerpt = getSafeVal(post.excerpt, lang);
                              return (
                                <Link
                                  key={idx}
                                  href={`/${lang}/blog/${post.slug}`}
                                  className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-amber-500/30 hover:shadow-md transition-all group"
                                >
                                  <div className="flex-1">
                                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1 block">
                                      {post.category}
                                    </span>
                                    <h3 className="font-bold text-[#0b1626] text-lg leading-snug mb-2 group-hover:text-amber-500 transition-colors">
                                      {postTitle}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                      {postExcerpt}
                                    </p>
                                    <div className="mt-4 flex items-center text-amber-500 text-xs font-bold uppercase tracking-widest gap-1">
                                      {tUI('Read Article', lang)} &rarr;
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>

            <div className="lg:w-5/12">
              <div className="sticky top-24 space-y-5">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0b1626] text-white rounded-[2rem] p-8 shadow-2xl border border-white/5"
                >
                  <h3 className="font-serif font-bold text-amber-500 border-b border-white/10 pb-4 mb-6">
                    {tUI('Procedure Details', lang)}
                  </h3>
                  <div className="space-y-5">
                    {[
                      { icon: <Calendar size={18} />, label: tUI('Hospital Stay', lang), value: details.hospitalStay },
                      { icon: <CheckCircle size={18} />, label: tUI('Hotel Package', lang), value: details.hotelStay },
                      { icon: <Clock size={18} />, label: tUI('Return to Work', lang), value: details.returnToWork },
                      { icon: <Activity size={18} />, label: tUI('Anaesthesia', lang), value: details.anesthesia },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
                          {icon}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{label}</p>
                          <p className="font-semibold text-white">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.a
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  href={getWhatsAppLink(title, lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-500 transition-all hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {tUI('Get Free Quote on WhatsApp', lang)}
                </motion.a>
                
                {categoryLayout === 'bariatric' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-[2rem] border border-amber-500/20 shadow-xl"
                  >
                    <BmiWrapper lang={lang} />
                  </motion.div>
                )}

                {PROTECTED_TREATMENTS.includes(treatment.id) ? (
                  <PrivacyCtaCard lang={lang} treatmentId={treatment.id} treatmentTitle={title} />
                ) : (
                  images.length > 0 && (
                    <ProcedureGallery images={images} title={tUI('Clinical Outcomes', lang)} />
                  )
                )}


              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
    </div>
  );
}
