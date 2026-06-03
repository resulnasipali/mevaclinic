// @ts-nocheck
'use client';

import React from 'react';
import { ShieldCheck, GraduationCap, Star } from 'lucide-react';

// Central registry of all Meva Clinic medical reviewers
export const REVIEWERS = {
  bariatric: {
    name: 'Dr. Cuma',
    nameRo: 'Dr. Cuma',
    specialty: 'Bariatric Surgery · Sleeve Gastrectomy · Gastric Balloon',
    specialtyRo: 'Chirurgie Bariatrică · Gastrectomie în Mânecă · Balon Gastric',
    bio: 'Born in 1976, graduated from Istanbul University Cerrahpaşa Faculty of Medicine. General Surgery specialist from Haseki Training and Research Hospital. Performed 10,000+ obesity surgeries (Sleeve Gastrectomy, Gastric Balloon) over the last 10 years.',
    bioRo: 'Născut în 1976, absolvent al Facultății de Medicină Cerrahpaşa din Istanbul. Specialist în chirurgie generală la Spitalul de Cercetare și Pregătire Haseki. A efectuat peste 10.000 de intervenții chirurgicale pentru obezitate (Gastrectomie în Mânecă, Balon Gastric) în ultimii 10 ani.',
    credentials: 'MD · Istanbul University Cerrahpaşa · 10,000+ Obesity Surgeries',
    credentialsRo: 'MD · Univ. Cerrahpaşa Istanbul · Peste 10.000 de Operații pentru Obezitate',
    education: 'Istanbul University, Cerrahpaşa Faculty of Medicine (1976)',
    institution: 'Haseki Training and Research Hospital',
    cases: '10,000+',
    image: '',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  hair: {
    name: 'MD Harun',
    nameRo: 'MD Harun',
    specialty: 'Hair & Eyebrow Transplant · Sapphire FUE · DHI',
    specialtyRo: 'Transplant de Păr & Sprâncene · Sapphire FUE · DHI',
    bio: 'Istanbul University (2011) graduate. Specialized in Sapphire FUE, DHI, and non-shaven techniques with over 12,000 successful procedures. Focuses on natural-looking results and patient satisfaction.',
    bioRo: 'Absolvent al Universității din Istanbul (2011). Specializat în tehnici Sapphire FUE, DHI și implant fără ras, cu peste 12.000 de proceduri reușite. Se concentrează pe rezultate naturale și satisfacția pacienților.',
    credentials: 'MD · Istanbul University (2011) · 12,000+ Procedures',
    credentialsRo: 'MD · Universitatea din Istanbul (2011) · Peste 12.000 de Proceduri',
    education: 'Istanbul University, Faculty of Medicine (2011)',
    cases: '12,000+',
    image: '',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  oncology: {
    name: 'Prof. Dr. Gökhan',
    nameRo: 'Prof. Dr. Gökhan',
    specialty: 'Robotic Oncology · CyberKnife S7 Specialist',
    specialtyRo: 'Oncologie Robotică · Specialist CyberKnife S7',
    bio: 'PhD in Radiation Oncology with over 15 years of clinical experience. ESTRO certified specialist operating the CyberKnife S7 Synchrony system for non-invasive tumor ablation.',
    bioRo: 'Doctor în Oncologie Radioterapeutică cu peste 15 ani de experiență clinică. Specialist certificat ESTRO care operează sistemul CyberKnife S7 Synchrony pentru ablația non-invazivă a tumorilor.',
    credentials: 'MD, PhD · ESTRO Certified · 15+ Years Experience',
    credentialsRo: 'MD, PhD · Certificat ESTRO · 15+ ani experiență',
    image: '',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  dental: {
    name: 'Dr. Osman',
    nameRo: 'Dr. Osman',
    specialty: 'Implantology & Digital Dentistry',
    specialtyRo: 'Implantologie & Stomatologie Digitală',
    bio: 'ITI Fellow and Straumann-certified implantologist with over 8,000 implant placements. Pioneer of full-arch digital smile design at Meva Clinic.',
    bioRo: 'Membră ITI și implantolog certificat Straumann cu peste 8.000 de implanturi plasate. Pionier al designului digital al zâmbetului full-arch la Meva Clinic.',
    credentials: 'DDS, PhD · ITI Fellow · Straumann Certified',
    credentialsRo: 'DDS, PhD · Membră ITI · Certificată Straumann',
    image: '',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  plastic: {
    name: 'Prof. Dr. Daghan',
    nameRo: 'Prof. Dr. Daghan',
    specialty: 'Plastic & Reconstructive Surgery · ISAPS',
    specialtyRo: 'Chirurgie Plastică & Reconstructivă · ISAPS',
    bio: 'ISAPS member and Deep Plane facelift specialist. Known for vertical-vector rejuvenation techniques that achieve natural, long-lasting results.',
    bioRo: 'Membru ISAPS și specialist în lifting facial Deep Plane. Cunoscut pentru tehnicile de întinerire pe vector vertical care oferă rezultate naturale și durabile.',
    credentials: 'MD · ISAPS Member · Deep Plane Specialist',
    credentialsRo: 'MD · Membru ISAPS · Specialist Deep Plane',
    image: '',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  organ: {
    name: 'Dr. Fatih',
    nameRo: 'Dr. Fatih',
    specialty: 'Transplant Surgery · Organ Procurement',
    specialtyRo: 'Chirurgie de Transplant · Prelevare de Organe',
    bio: 'TTS member and JCI Protocol certified transplant surgeon with extensive experience in kidney, liver and composite tissue allotransplantation.',
    bioRo: 'Membru TTS și chirurg de transplant certificat conform Protocolului JCI cu experiență vastă în transplant renal, hepatic și alotransplant de țesuturi compozite.',
    credentials: 'MD, PhD · TTS Member · JCI Protocol Certified',
    credentialsRo: 'MD, PhD · Membru TTS · Protocol JCI Certificat',
    image: '',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
};

const MedicalReviewer = ({ reviewer, isEn = false }) => {
  if (!reviewer) return null;

  const name = isEn ? reviewer.name : reviewer.nameRo;
  const specialty = isEn ? reviewer.specialty : reviewer.specialtyRo;
  const credentials = isEn ? reviewer.credentials : reviewer.credentialsRo;
  const bio = isEn ? reviewer.bio : reviewer.bioRo;
  const label = isEn ? reviewer.reviewedLabel : reviewer.reviewedLabelRo;
  const cases = reviewer.cases || null;

  return (
    <div
      className="mt-16 mb-8 border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm bg-gradient-to-r from-gray-50 to-white"
      aria-label={isEn ? `Medical Reviewer: ${name}` : `Recenzent Medical: ${name}`}
      itemScope
      itemType="https://schema.org/Physician"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-yellow-300 to-accent" />

      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Doctor photo */}
        <div className="relative shrink-0">
          <img
            src={reviewer.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=80&background=0b1626&color=d4af37&bold=true&format=svg`}
            alt={`${name} — Meva Clinic Medical Specialist`}
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=80&background=0b1626&color=d4af37&bold=true&format=svg`;
            }}
            className="w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-white"
            itemProp="image"
          />
          {/* Verified badge overlay */}
          <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow-md border-2 border-white">
            <ShieldCheck size={14} className="text-prime" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          {/* Label */}
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-1.5 flex items-center justify-center sm:justify-start gap-2">
            <ShieldCheck size={11} className="text-accent" aria-hidden="true" />
            {label}
          </p>

          {/* Doctor name */}
          <h3
            className="font-serif text-xl font-bold text-prime leading-tight mb-1"
            itemProp="name"
          >
            {name}
          </h3>

          {/* Specialty */}
          <p className="text-sm font-semibold text-accent mb-2" itemProp="medicalSpecialty">
            {specialty}
          </p>

          {/* Bio */}
          {bio && (
            <p className="text-[12px] text-gray-500 leading-relaxed mb-3 max-w-prose" itemProp="description">
              {bio}
            </p>
          )}

          {/* Credentials + Cases row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 bg-gray-100 rounded-full px-3 py-1">
              <GraduationCap size={12} aria-hidden="true" />
              <span itemProp="honorificSuffix">{credentials}</span>
            </div>
            {cases && (
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-prime rounded-full px-3 py-1">
                <Star size={11} className="text-accent fill-accent" aria-hidden="true" />
                <span>{cases} {isEn ? 'cases' : 'cazuri'}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-accent fill-accent" aria-hidden="true" />
              ))}
              <span className="text-[11px] font-bold text-gray-500 ml-1">
                {isEn ? 'Expert Verified 2026' : 'Verificat Expert 2026'}
              </span>
            </div>
          </div>
        </div>

        {/* Right — Medical disclaimer */}
        <div className="hidden xl:flex flex-col items-end justify-center text-right shrink-0 max-w-xs">
          <p className="text-[11px] text-gray-400 leading-relaxed italic border-l-2 border-accent/30 pl-3">
            {isEn
              ? 'This content has been medically reviewed and approved for accuracy by a licensed specialist.'
              : 'Acest conținut a fost verificat și aprobat din punct de vedere medical de un specialist licențiat.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalReviewer;
