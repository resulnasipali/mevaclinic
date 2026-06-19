'use client';

import React from 'react';
import { ShieldCheck, GraduationCap, Star } from 'lucide-react';
import { REVIEWERS, type Reviewer } from '@/data/reviewersData';

interface MedicalReviewerProps {
  reviewer: Reviewer;
  isEn?: boolean;
  lang?: string;
}

const MedicalReviewer = ({ reviewer, isEn = false, lang = 'en' }: MedicalReviewerProps) => {
  if (!reviewer) return null;

  // Backward compatibility: if isEn is true, force lang to 'en'
  const safeLang = isEn ? 'en' : (['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en');

  // Helper to resolve localized parameters dynamically
  const getVal = (field: string): string => {
    const revObj = reviewer as any;
    if (safeLang === 'en') return revObj[field] || '';
    if (safeLang === 'ro') return revObj[`${field}Ro`] || revObj[field] || '';
    
    const suffix = safeLang.charAt(0).toUpperCase() + safeLang.slice(1);
    return revObj[`${field}${suffix}`] || revObj[field] || '';
  };

  const name = getVal('name');
  const specialty = getVal('specialty');
  const credentials = getVal('credentials');
  const bio = getVal('bio');
  const label = getVal('reviewedLabel');
  const cases = reviewer.cases || null;

  return (
    <div
      className="mt-16 mb-8 border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm bg-gradient-to-r from-gray-50 to-white"
      aria-label={safeLang === 'en' ? `Medical Reviewer: ${name}` : `Recenzent Medical: ${name}`}
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
          <meta itemProp="name" content={reviewer.fullName} />
          <h3
            className="font-serif text-xl font-bold text-prime leading-tight mb-1"
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
                <span>
                  {cases} {
                    safeLang === 'en' ? 'cases' : 
                    safeLang === 'ro' ? 'cazuri' :
                    safeLang === 'es' ? 'casos' :
                    safeLang === 'it' ? 'casi' :
                    safeLang === 'ru' ? 'случаев' :
                    safeLang === 'fr' ? 'cas' :
                    safeLang === 'de' ? 'Fälle' : 'cases'
                  }
                </span>
              </div>
            )}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-accent fill-accent" aria-hidden="true" />
              ))}
              <span className="text-[11px] font-bold text-gray-500 ml-1">
                {safeLang === 'en' && 'Expert Verified 2026'}
                {safeLang === 'ro' && 'Verificat Expert 2026'}
                {safeLang === 'es' && 'Verificado por Expertos 2026'}
                {safeLang === 'it' && 'Verificato da Esperti 2026'}
                {safeLang === 'ru' && 'Проверено экспертами 2026'}
                {safeLang === 'fr' && 'Vérifié par des experts 2026'}
                {safeLang === 'de' && 'Experten-verifiziert 2026'}
              </span>
            </div>
          </div>
        </div>

        {/* Right — Medical disclaimer */}
        <div className="hidden xl:flex flex-col items-end justify-center text-right shrink-0 max-w-xs">
          <p className="text-[11px] text-gray-400 leading-relaxed italic border-l-2 border-accent/30 pl-3">
            {safeLang === 'en' && 'This content has been medically reviewed and approved for accuracy by a licensed specialist.'}
            {safeLang === 'ro' && 'Acest conținut a fost verificat și aprobat din punct de vedere medical de un specialist licențiat.'}
            {safeLang === 'es' && 'Este contenido ha sido revisado y aprobado médicamente para su precisión por un especialista licenciado.'}
            {safeLang === 'it' && 'Questo contenuto è stato verificato e approvato dal punto di vista medico da uno specialista autorizzato.'}
            {safeLang === 'ru' && 'Этот контент был проверен и одобрен медицинским специалистом на предмет точности.'}
            {safeLang === 'fr' && 'Ce contenu a été examiné et apprové d\'un point de vue médical par un spécialiste agréé.'}
            {safeLang === 'de' && 'Dieser Inhalt wurde von einem zugelassenen Facharzt medizinisch überprüft und auf seine Richtigkeit freigegeben.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalReviewer;
