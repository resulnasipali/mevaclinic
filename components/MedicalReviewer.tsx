// @ts-nocheck
'use client';

import React from 'react';
import { ShieldCheck, GraduationCap, Star } from 'lucide-react';

// Central registry of all Meva Clinic medical reviewers with translations for 7 languages
export const REVIEWERS = {
  bariatric: {
    name: 'Dr. Cuma A.',
    nameRo: 'Dr. Cuma A.',
    fullName: 'Dr. Cuma Aksoy',
    specialty: 'Bariatric Surgery · Sleeve Gastrectomy · Gastric Balloon',
    specialtyRo: 'Chirurgie Bariatrică · Gastrectomie în Mânecă · Balon Gastric',
    specialtyEs: 'Cirugía Bariátrica · Manga Gástrica · Balón Gástrico',
    specialtyIt: 'Chirurgia Bariatrica · Sleeve Gastrectomy · Palloncino Gastrico',
    specialtyRu: 'Бариатрическая хирургия · Рукавная резекция · Внутрижелудочный баллон',
    specialtyFr: 'Chirurgie Bariatrique · Sleeve Gastrectomie · Ballon Gastrique',
    specialtyDe: 'Adipositaschirurgie · Schlauchmagen · Magenballon',
    bio: 'Born in 1976, graduated from Istanbul University Cerrahpaşa Faculty of Medicine. General Surgery specialist from Haseki Training and Research Hospital. Performed 10,000+ obesity surgeries (Sleeve Gastrectomy, Gastric Balloon) over the last 10 years.',
    bioRo: 'Născut în 1976, absolvent al Facultății de Medicină Cerrahpaşa din Istanbul. Specialist în chirurgie generală la Spitalul de Cercetare și Pregătire Haseki. A efectuat peste 10.000 de intervenții chirurgicale pentru obezitate (Gastrectomie în Mânecă, Balon Gastric) în ultimii 10 ani.',
    bioEs: 'Nacido en 1976, graduado de la Facultad de Medicina Cerrahpaşa de la Universidad de Estambul. Especialista en Cirugía General del Hospital de Investigación y Capacitación Haseki. Realizó más de 10,000 cirugías de obesidad en los últimos 10 años.',
    bioIt: 'Nato nel 1976, laureato presso la Facoltà di Medicina Cerrahpaşa dell\'Università di Istanbul. Specialista in chirurgia generale dell\'Haseki Training and Research Hospital. Ha eseguito oltre 10.000 interventi di chirurgia dell\'obesità negli ultimi 10 anni.',
    bioRu: 'Родился в 1976 году, окончил медицинский факультет Джеррахпаша Стамбульского университета. Специалист по общей хирургии из учебно-исследовательской больницы Хасеки. Провел более 10 000 операций по лечению ожирения за последние 10 лет.',
    bioFr: 'Né en 1976, diplômé de la faculté de médecine Cerrahpaşa de l\'université d\'Istanbul. Spécialiste en chirurgie générale de l\'hôpital de formation et de recherche Haseki. A réalisé plus de 10 000 chirurgies de l\'obésité au cours des 10 dernières années.',
    bioDe: 'Geboren 1976, Absolvent der Medizinischen Fakultät Cerrahpaşa der Universität Istanbul. Facharzt für Allgemeinchirurgie am Haseki Ausbildungs- und Forschungskrankenhaus. Durchführung von über 10.000 Adipositas-Operationen in den letzten 10 Jahren.',
    credentials: 'MD · Istanbul University Cerrahpaşa · 10,000+ Obesity Surgeries',
    credentialsRo: 'MD · Univ. Cerrahpaşa Istanbul · Peste 10.000 de Operații pentru Obezitate',
    credentialsEs: 'MD · Universidad de Estambul Cerrahpaşa · Más de 10,000 cirugías de obesidad',
    credentialsIt: 'MD · Università di Istanbul Cerrahpaşa · Oltre 10.000 interventi di chirurgia dell\'obesità',
    credentialsRu: 'MD · Стамбульский университет Джеррахпаша · Более 10 000 операций по лечению ожирения',
    credentialsFr: 'MD · Université d\'Istanbul Cerrahpaşa · Plus de 10 000 chirurgies de l\'obésité',
    credentialsDe: 'MD · Universität Istanbul Cerrahpaşa · Über 10.000 Adipositas-Operationen',
    education: 'Istanbul University, Cerrahpaşa Faculty of Medicine (1976)',
    institution: 'Haseki Training and Research Hospital',
    cases: '10,000',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  hair: {
    name: 'MD Harun A.',
    nameRo: 'MD Harun A.',
    fullName: 'Dr. Harun Aksoy',
    specialty: 'Hair & Eyebrow Transplant · Sapphire FUE · DHI',
    specialtyRo: 'Transplant de Păr & Sprâncene · Sapphire FUE · DHI',
    specialtyEs: 'Injerto Capilar y de Cejas · Sapphire FUE · DHI',
    specialtyIt: 'Trapianto di Capelli e Sopracciglia · Sapphire FUE · DHI',
    specialtyRu: 'Трансплантация волос и бровей · Sapphire FUE · DHI',
    specialtyFr: 'Greffe de Cheveux & Sourcils · Sapphire FUE · DHI',
    specialtyDe: 'Haar- & Augenbrauentransplantation · Sapphire FUE · DHI',
    bio: 'Istanbul University (2011) graduate. Specialized in Sapphire FUE, DHI, and non-shaven techniques with over 12,000 successful procedures. Focuses on natural-looking results and patient satisfaction.',
    bioRo: 'Absolvent al Universității din Istanbul (2011). Specializat în tehnici Sapphire FUE, DHI și implant fără ras, cu peste 12.000 de proceduri reușite. Se concentrează pe rezultate naturale și satisfacția pacienților.',
    bioEs: 'Graduado de la Universidad de Estambul (2011). Especializado en Sapphire FUE, DHI y técnicas sin rasurar con más de 12,000 procedimientos exitosos. Se enfoca en resultados naturales y la satisfacción del paciente.',
    bioIt: 'Laureato all\'Università di Istanbul (2011). Specializzato in Sapphire FUE, DHI e tecniche senza rasatura con oltre 12.000 procedure di successo. Si concentra su risultati naturali e soddisfazione del paziente.',
    bioRu: 'Выпускник Стамбульского университета (2011). Специализируется на Sapphire FUE, DHI и техниках без бритья с более чем 12 000 успешных процедур. Фокусируется на естественных результатах и удовлетворении пациентов.',
    bioFr: 'Diplômé de l\'Université d\'Istanbul (2011). Spécialisé dans les techniques Sapphire FUE, DHI et sans rasage, avec plus de 12 000 interventions réussies. Met l\'accent sur des résultats naturels et la satisfaction des patients.',
    bioDe: 'Absolvent der Universität Istanbul (2011). Spezialisiert auf Sapphire FUE, DHI und unrasierte Techniken mit über 12.000 erfolgreichen Eingriffen. Der Fokus liegt auf natürlich wirkenden Ergebnissen und Patientenzufriedenheit.',
    credentials: 'MD · Istanbul University (2011) · 12,000+ Procedures',
    credentialsRo: 'MD · Universitatea din Istanbul (2011) · Peste 12.000 de Proceduri',
    credentialsEs: 'MD · Universidad de Estambul (2011) · Más de 12,000 procedimientos',
    credentialsIt: 'MD · Università di Istanbul (2011) · Oltre 12.000 procedure',
    credentialsRu: 'MD · Стамбульский университет (2011) · Более 12 000 процедур',
    credentialsFr: 'MD · Université d\'Istanbul (2011) · Plus de 12 000 interventions',
    credentialsDe: 'MD · Universität Istanbul (2011) · Über 12.000 Eingriffe',
    education: 'Istanbul University, Faculty of Medicine (2011)',
    cases: '12,000',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  oncology: {
    name: 'Prof. Dr. Gökhan K.',
    nameRo: 'Prof. Dr. Gökhan K.',
    fullName: 'Prof. Dr. Gökhan Küçükay',
    specialty: 'Robotic Oncology · CyberKnife S7 Specialist',
    specialtyRo: 'Oncologie Robotică · Specialist CyberKnife S7',
    specialtyEs: 'Oncología Robótica · Especialista en CyberKnife S7',
    specialtyIt: 'Oncologia Robotica · Specialista CyberKnife S7',
    specialtyRu: 'Роботизированная онкология · Специалист по CyberKnife S7',
    specialtyFr: 'Oncologie Robotique · Spécialiste CyberKnife S7',
    specialtyDe: 'Robotergestützte Onkologie · CyberKnife S7 Spezialist',
    bio: 'PhD in Radiation Oncology with over 15 years of clinical experience. ESTRO certified specialist operating the CyberKnife S7 Synchrony system for non-invasive tumor ablation.',
    bioRo: 'Doctor în Oncologie Radioterapeutică cu peste 15 ani de experiență clinică. Specialist certificat ESTRO care operează sistemul CyberKnife S7 Synchrony pentru ablația non-invazivă a tumorilor.',
    bioEs: 'Doctor en Oncología Radioterápica con más de 15 años de experiencia clínica. Especialista certificado por la ESTRO que opera el sistema CyberKnife S7 Synchrony para la ablación no invasiva de tumores.',
    bioIt: 'Dottorato in Oncologia Radioterapica con oltre 15 anni di esperienza clinica. Specialista certificato ESTRO che opera con il sistema CyberKnife S7 Synchrony per l\'ablazione non invasiva dei tumori.',
    bioRu: 'Доктор медицинских наук в области радиационной онкологии с более чем 15-летним клиническим опытом. Сертифицированный специалист ESTRO, работающий на системе CyberKnife S7 Synchrony для неинвазивной абляции опухолей.',
    bioFr: 'Doctorat en radio-oncologie avec plus de 15 ans d\'expérience clinique. Spécialiste certifié ESTRO opérant le système CyberKnife S7 Synchrony pour l\'ablation non invasive des tumeurs.',
    bioDe: 'Promotion in Radioonkologie mit über 15 Jahren klinischer Erfahrung. ESTRO-zertifizierter Spezialist für das CyberKnife S7 Synchrony-System zur nicht-invasiven Tumorablation.',
    credentials: 'MD, PhD · ESTRO Certified · 15+ Years Experience',
    credentialsRo: 'MD, PhD · Certificat ESTRO · 15+ ani experiență',
    credentialsEs: 'MD, PhD · Certificado por ESTRO · Más de 15 años de experiencia',
    credentialsIt: 'MD, PhD · Certificato ESTRO · Oltre 15 anni di esperienza',
    credentialsRu: 'MD, PhD · Сертификация ESTRO · Более 15 лет опыта',
    credentialsFr: 'MD, PhD · Certifié ESTRO · Plus de 15 ans d\'expérience',
    credentialsDe: 'MD, PhD · ESTRO-zertifiziert · Über 15 Jahre Erfahrung',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  dental: {
    name: 'Dr. Osman B.',
    nameRo: 'Dr. Osman B.',
    fullName: 'Dr. Osman Bayram',
    specialty: 'Implantology & Digital Dentistry',
    specialtyRo: 'Implantologie & Stomatologie Digitală',
    specialtyEs: 'Implantología y Odontología Digital',
    specialtyIt: 'Implantologia e Odontoiatria Digitale',
    specialtyRu: 'Имплантология и цифровая стоматология',
    specialtyFr: 'Implantologie & Dentisterie Digitale',
    specialtyDe: 'Implantologie & Digitale Zahnmedizin',
    bio: 'ITI Fellow and Straumann-certified implantologist with over 8,000 implant placements. Pioneer of full-arch digital smile design at Meva Clinic.',
    bioRo: 'Membră ITI și implantolog certificat Straumann cu peste 8.000 de implanturi plasate. Pionier al designului digital al zâmbetului full-arch la Meva Clinic.',
    bioEs: 'Miembro de ITI e implantólogo certificado por Straumann con más de 8,000 implantes colocados. Pionero del diseño digital de sonrisa de arco completo en Meva Clinic.',
    bioIt: 'Fellow ITI e implantologo certificato Straumann con oltre 8.000 impianti inseriti. Pioniere del design digitale del sorriso full-arch presso Meva Clinic.',
    bioRu: 'Член ITI и сертифицированный имплантолог Straumann с опытом установки более 8000 имплантатов. Пионер цифрового дизайна улыбки (Full-Arch) в клинике Meva.',
    bioFr: 'Membre de l\'ITI et implantologue certifié Straumann avec plus de 8 000 implants posés. Pionnier du smile design numérique full-arch à Meva Clinic.',
    bioDe: 'ITI-Fellow und Straumann-zertifizierter Implantologe mit über 8.000 gesetzten Implantaten. Pionier des Full-Arch Digital Smile Design an der Meva-Klinik.',
    credentials: 'DDS, PhD · ITI Fellow · Straumann Certified',
    credentialsRo: 'DDS, PhD · Membră ITI · Certificată Straumann',
    credentialsEs: 'DDS, PhD · Miembro de ITI · Certificado por Straumann',
    credentialsIt: 'DDS, PhD · Fellow ITI · Certificato Straumann',
    credentialsRu: 'DDS, PhD · Член ITI · Сертификация Straumann',
    credentialsFr: 'DDS, PhD · Membre de l\'ITI · Certifié Straumann',
    credentialsDe: 'DDS, PhD · ITI-Fellow · Straumann zertifiziert',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  plastic: {
    name: 'Prof. Dr. Dağhan I.',
    nameRo: 'Prof. Dr. Dağhan I.',
    fullName: 'Prof. Dr. Dağhan Işık',
    specialty: 'Plastic & Reconstructive Surgery · ISAPS',
    specialtyRo: 'Chirurgie Plastică & Reconstructivă · ISAPS',
    specialtyEs: 'Cirugía Plástica y Reconstructiva · ISAPS',
    specialtyIt: 'Chirurgia Plastica e Ricostruttiva · ISAPS',
    specialtyRu: 'Пластическая и реконструктивная хирургия · ISAPS',
    specialtyFr: 'Chirurgie Plastique & Reconstructrice · ISAPS',
    specialtyDe: 'Plastische & Rekonstruktive Chirurgie · ISAPS',
    bio: 'ISAPS member and Deep Plane facelift specialist. Known for vertical-vector rejuvenation techniques that achieve natural, long-lasting results.',
    bioRo: 'Membru ISAPS și specialist în lifting facial Deep Plane. Cunoscut pentru tehnicile de întinerire pe vector vertical care oferă rezultate naturale și durabile.',
    bioEs: 'Miembro de ISAPS y especialista en estiramiento facial Deep Plane. Conocido por técnicas de rejuvenecimiento de vector vertical que logran resultados naturales y duraderos.',
    bioIt: 'Membro ISAPS e specialista in lifting facciale Deep Plane. Noto per le tecniche di ringiovanimento a vettore verticale che ottengono risultati naturali e duraturi.',
    bioRu: 'Член ISAPS и специалист по подтяжке лица Deep Plane. Известен своими методами омоложения по вертикальному вектору, которые позволяют достичь естественных и долговечных результатов.',
    bioFr: 'Membre de l\'ISAPS et spécialiste du lifting Deep Plane. Connu pour ses techniques de rajeunissement par vecteur vertical qui permettent d\'obtenir des résultats naturels et durables.',
    bioDe: 'ISAPS-Mitglied und Spezialist für Deep Plane Facelifts. Bekannt für Verjüngungstechniken mit vertikalem Vektor, die natürliche und lang anhaltende Ergebnisse erzielen.',
    credentials: 'MD · ISAPS Member · Deep Plane Specialist',
    credentialsRo: 'MD · Membru ISAPS · Specialist Deep Plane',
    credentialsEs: 'MD · Miembro de ISAPS · Especialista en Deep Plane',
    credentialsIt: 'MD · Membro ISAPS · Specialista Deep Plane',
    credentialsRu: 'MD · Член ISAPS · Специалист по Deep Plane',
    credentialsFr: 'MD · Membre de l\'ISAPS · Spécialiste Deep Plane',
    credentialsDe: 'MD · ISAPS-Mitglied · Deep Plane Spezialist',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  organ: {
    name: 'Dr. Fatih E.',
    nameRo: 'Dr. Fatih E.',
    fullName: 'Dr. Fatih Erden',
    specialty: 'Transplant Surgery · Organ Procurement',
    specialtyRo: 'Chirurgie de Transplant · Prelevare de Organe',
    specialtyEs: 'Cirugía de Trasplante · Obtención de Órganos',
    specialtyIt: 'Chirurgia dei Trapianti · Approvvigionamento di Organi',
    specialtyRu: 'Трансплантационная хирургия · Забор органов',
    specialtyFr: 'Chirurgie de Transplantation · Prélèvement d\'Organes',
    specialtyDe: 'Transplantationschirurgie · Organbeschaffung',
    bio: 'TTS member and JCI Protocol certified transplant surgeon with extensive experience in kidney, liver and composite tissue allotransplantation.',
    bioRo: 'Membru TTS și chirurg de transplant certificat conform Protocolului JCI cu experiență vastă în transplant renal, hepatic și alotransplant de țesuturi compozite.',
    bioEs: 'Miembro de TTS y cirujano de trasplante certificado por el Protocolo JCI con amplia experiencia en alotrasplante de riñón, hígado y tejido compuesto.',
    bioIt: 'Membro TTS e chirurgo dei trapianti certificato Protocollo JCI con vasta esperienza nel trapianto di rene, fegato e allotrapianto di tessuti compositi.',
    bioRu: 'Член TTS и сертифицированный по протоколу JCI хирург-трансплантолог с большим опытом аллотрансплантации почек, печени и композитных тканей.',
    bioFr: 'Membre de la TTS et chirurgien de transplantation certifié par le protocole JCI, avec une vaste expérience de l\'allotransplantation de rein, de foie et de tissus composites.',
    bioDe: 'TTS-Mitglied und nach JCI-Protokoll zertifizierter Transplantationschirurg mit umfassender Erfahrung in der Nieren-, Leber- und Verbundgewebe-Allotransplantation.',
    credentials: 'MD, PhD · TTS Member · JCI Protocol Certified',
    credentialsRo: 'MD, PhD · Membru TTS · Protocol JCI Certificat',
    credentialsEs: 'MD, PhD · Miembro de TTS · Certificado por el Protocolo JCI',
    credentialsIt: 'MD, PhD · Membro TTS · Certificato Protocollo JCI',
    credentialsRu: 'MD, PhD · Член TTS · Сертификация по протоколу JCI',
    credentialsFr: 'MD, PhD · Membre de la TTS · Certifié par le protocole JCI',
    credentialsDe: 'MD, PhD · TTS-Mitglied · JCI-Protokoll zertifiziert',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
};

const MedicalReviewer = ({ reviewer, isEn = false, lang = 'en' }) => {
  if (!reviewer) return null;

  // Backward compatibility: if isEn is true, force lang to 'en'
  const safeLang = isEn ? 'en' : (['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(lang) ? lang : 'en');

  // Helper to resolve localized parameters dynamically
  const getVal = (field: string) => {
    if (safeLang === 'en') return reviewer[field];
    if (safeLang === 'ro') return reviewer[`${field}Ro`] || reviewer[field];
    
    const suffix = safeLang.charAt(0).toUpperCase() + safeLang.slice(1);
    return reviewer[`${field}${suffix}`] || reviewer[field];
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
