export interface Reviewer {
  name: string;
  nameRo?: string;
  nameEs?: string;
  nameIt?: string;
  nameRu?: string;
  nameFr?: string;
  nameDe?: string;
  fullName: string;
  specialty: string;
  specialtyRo?: string;
  specialtyEs?: string;
  specialtyIt?: string;
  specialtyRu?: string;
  specialtyFr?: string;
  specialtyDe?: string;
  bio?: string;
  bioRo?: string;
  bioEs?: string;
  bioIt?: string;
  bioRu?: string;
  bioFr?: string;
  bioDe?: string;
  credentials: string;
  credentialsRo?: string;
  credentialsEs?: string;
  credentialsIt?: string;
  credentialsRu?: string;
  credentialsFr?: string;
  credentialsDe?: string;
  education?: string;
  institution?: string;
  cases?: string;
  reviewedLabel: string;
  reviewedLabelRo?: string;
  reviewedLabelEs?: string;
  reviewedLabelIt?: string;
  reviewedLabelRu?: string;
  reviewedLabelFr?: string;
  reviewedLabelDe?: string;
  url: string;
  image?: string;
}

const standardBio = {
  en: "This page has been reviewed under Meva Clinic’s specialist medical review pathway. Final treatment suitability, operating physician assignment, surgical planning, and medical decisions are confirmed only after medical history review, in-person consultation, diagnostic tests, anesthesia evaluation, and doctor availability.",
  ro: "Această pagină a fost revizuită în cadrul căii specializate de evaluare medicală a Clinicii Meva. Eligibilitatea finală pentru tratament, desemnarea medicului operator, planificarea chirurgicală și deciziile medicale sunt confirmate numai după evaluarea istoricului medical, consultul în persoană, testele de diagnosticare, evaluarea anesteziologică și disponibilitatea medicului.",
  es: "Esta página ha sido revisada bajo el trayecto de revisión médica especializada de Meva Clinic. La idoneidad final del tratamiento, la asignación del médico cirujano, la planificación quirúrgica y las decisiones médicas se confirman únicamente después de la revisión del historial médico, la consulta en persona, las pruebas de diagnóstico, la evaluación de la anestesia y la disponibilidad del médico.",
  it: "Questa pagina è stata esaminata nell'ambito del percorso di revisione medica specialistica di Meva Clinic. L'idoneità finale al trattamento, l'assegnazione del medico operatore, la pianificazione chirurgica e le decisioni mediche sono confermate solo dopo la revisione dell'anamnesi, la consultazione di persona, i test diagnostici, la valutazione dell'anestesia e la disponibilità del medico.",
  ru: "Эта страница была проверена в рамках специализированного медицинского аудита Meva Clinic. Окончательное решение о пригодности лечения, назначении оперирующего врача, хирургическом планировании и медицинских решениях подтверждается только после изучения истории болезни, очной консультации, диагностических тестов, оценки анестезии и доступности врача.",
  fr: "Cette page a été révisée dans le cadre du parcours de révision médicale spécialisée de Meva Clinic. L'éligibilité finale au traitement, l'attribution du médecin traitant, la planification chirurgicale et les décisions médicales ne sont confirmées qu'après examen des antécédents médicaux, consultation en personne, examens diagnostiques, évaluation de l'anesthésie et disponibilité du médecin.",
  de: "Diese Seite wurde im Rahmen des spezialisierten medizinischen Prüfungspfads der Meva-Klinik überprüft. Die endgültige Eignung für die Behandlung, die Zuweisung des operierenden Arztes, die chirurgische Planung und medizinische Entscheidungen werden erst nach Überprüfung der Krankengeschichte, persönlicher Konsultation, diagnostischen Tests, anästhesiologischer Bewertung und Verfügbarkeit des Arztes bestätigt."
};

const standardCredentials = {
  en: "Meva Clinic Medical Review Board",
  ro: "Consiliul de Evaluare Medicală Meva Clinic",
  es: "Junta de Revisión Médica de Meva Clinic",
  it: "Comitato di Revisione Medica Meva Clinic",
  ru: "Медицинский совет Meva Clinic",
  fr: "Conseil de révision médicale de Meva Clinic",
  de: "Meva-Klinik Medizinischer Prüfungsausschuss"
};

const standardReviewedLabel = {
  en: "Reviewed by",
  ro: "Verificat de",
  es: "Revisado por",
  it: "Verificato da",
  ru: "Проверено:",
  fr: "Revu par",
  de: "Geprüft von"
};

export const REVIEWERS: Record<string, Reviewer> = {
  bariatric: {
    name: 'Bariatric Surgery Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală în Chirurgie Bariatrică',
    fullName: 'Meva Clinic Bariatric Surgery Medical Review Board',
    specialty: 'Bariatric & Metabolic Surgery Standards',
    specialtyRo: 'Standarde în Chirurgie Bariatrică & Metabolică',
    specialtyEs: 'Estándares de Cirugía Bariátrica y Metabólica',
    specialtyIt: 'Standard per la Chirurgia Bariatrica e Metabolica',
    specialtyRu: 'Стандарты бариатрической и метаболической хирургии',
    specialtyFr: 'Normes de chirurgie bariatrique & métabolique',
    specialtyDe: 'Bariatrische & metabolische Chirurgiestandards',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  hair: {
    name: 'Hair Restoration Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală în Restaurarea Părului',
    fullName: 'Meva Clinic Hair Restoration Medical Review Board',
    specialty: 'Hair Restoration & Trichology Standards',
    specialtyRo: 'Restaurarea Părului & Standarde de Tricologie',
    specialtyEs: 'Restauración Capilar y Estándares de Tricología',
    specialtyIt: 'Restaurazione dei Capelli e Standard di Tricologia',
    specialtyRu: 'Восстановление волос и стандарты трихологии',
    specialtyFr: 'Restauration capillaire & Normes de trichologie',
    specialtyDe: 'Haarrekonstruktion & Trichologie-Standards',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  oncology: {
    name: 'Oncology Coordination Medical Review Board',
    nameRo: 'Consiliul de Coordonare Medicală în Oncologie',
    fullName: 'Meva Clinic Oncology Coordination Medical Review Board',
    specialty: 'Oncology Coordination & Radio-Oncology Pathway Support',
    specialtyRo: 'Coordonare Oncologică & Suport Traseu de Radio-Oncologie',
    specialtyEs: 'Coordinación Oncológica y Soporte del Trayecto de Radio-Oncología',
    specialtyIt: 'Coordinamento Oncologico e Supporto al Percorso di Radio-Oncologia',
    specialtyRu: 'Координация онкологии и поддержка радиационной онкологии',
    specialtyFr: 'Coordination en oncologie & Soutien au parcours de radio-oncologie',
    specialtyDe: 'Onkologische Koordination & Unterstützung des Radio-Onkologie-Pfads',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  dental: {
    name: 'Dental Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală în Stomatologie',
    fullName: 'Meva Clinic Dental Medical Review Board',
    specialty: 'Implantology & Digital Restorative Dentistry Standards',
    specialtyRo: 'Implantologie & Standarde de Stomatologie Digitală',
    specialtyEs: 'Implantología y Estándares de Odontología Digital',
    specialtyIt: 'Implantologia e Standard di Odontoiatria Digitale',
    specialtyRu: 'Имплантология и стандарты цифровой стоматологии',
    specialtyFr: 'Implantologie & Normes de dentisterie numérique',
    specialtyDe: 'Implantologie & Digitale Zahnmedizin-Standards',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  plastic: {
    name: 'Plastic Surgery Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală în Chirurgie Plastică',
    fullName: 'Meva Clinic Plastic Surgery Medical Review Board',
    specialty: 'Aesthetic, Plastic & Reconstructive Surgery Standards',
    specialtyRo: 'Chirurgie Estetică, Plastică & Standarde Reconstructive',
    specialtyEs: 'Cirugía Estética, Plástica y Estándares Reconstructivos',
    specialtyIt: 'Chirurgia Estetica, Plastica e Standard Ricostruttivi',
    specialtyRu: 'Эстетическая, пластическая и реконструктивная хирургия',
    specialtyFr: 'Chirurgie esthétique, plastique & Normes reconstructrices',
    specialtyDe: 'Ästhetische, Plastische & Rekonstruktive Chirurgie-Standards',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  organ: {
    name: 'Meva Clinic Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală Meva Clinic',
    fullName: 'Meva Clinic Medical Review Board',
    specialty: 'Clinical Governance & Transplant Safety Standards',
    specialtyRo: 'Guvernanță Clinică & Standarde de Siguranță în Transplant',
    specialtyEs: 'Gobernanza Clínica y Estándares de Seguridad en Trasplantes',
    specialtyIt: 'Governance Clinica e Standard di Sicurezza dei Trapianti',
    specialtyRu: 'Клиническое управление и стандарты безопасности трансплантации',
    specialtyFr: 'Gouvernance clinique & Normes de sécurité des transplantations',
    specialtyDe: 'Klinische Governance & Transplantationssicherheitsstandards',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  specialist: {
    name: 'Meva Clinic Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală Meva Clinic',
    fullName: 'Meva Clinic Medical Review Board',
    specialty: 'Clinical Governance & Specialist Pathway Standards',
    specialtyRo: 'Guvernanță Clinică & Standarde Traseu Specializat',
    specialtyEs: 'Gobernanza Clínica y Estándares de Trayectos Especializados',
    specialtyIt: 'Governance Clinica e Standard del Percorso Specialistico',
    specialtyRu: 'Клиническое управление и стандарты специализированных курсов',
    specialtyFr: 'Gouvernance clinique & Normes de parcours spécialisés',
    specialtyDe: 'Klinische Governance & Standards für spezialisierte Pfade',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  fertility: {
    name: 'Fertility Coordination Medical Review Board',
    nameRo: 'Consiliul de Evaluare Medicală în Fertilitate',
    fullName: 'Meva Clinic Fertility Coordination Medical Review Board',
    specialty: 'Clinical Governance & Reproductive Safety Standards',
    specialtyRo: 'Guvernanță Clinică & Standarde de Siguranță Reproductivă',
    specialtyEs: 'Gobernanza Clínica y Estándares de Seguridad Reproductiva',
    specialtyIt: 'Governance Clinica e Standard di Sicurezza Riproduttiva',
    specialtyRu: 'Клиническое управление и стандарты репродуктивной безопасности',
    specialtyFr: 'Gouvernance clinique & Normes de sécurité reproductive',
    specialtyDe: 'Klinische Governance & Standards für reproduktive Sicherheit',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  editorial: {
    name: 'Meva Clinic Medical Editorial Team',
    nameRo: 'Echipa Editorială Medicală Meva Clinic',
    fullName: 'Meva Clinic Medical Editorial Team',
    specialty: 'Clinical Safety Pathway Support',
    specialtyRo: 'Suport pentru Traseul de Siguranță Clinică',
    specialtyEs: 'Soporte del Trayecto de Seguridad Clínica',
    specialtyIt: 'Supporto al Percorso di Sicurezza Clinica',
    specialtyRu: 'Поддержка клинической безопасности',
    specialtyFr: 'Soutien au Parcours de Securité Clinique',
    specialtyDe: 'Unterstützung des klinischen Sicherheitspfads',
    bio: standardBio.en,
    bioRo: standardBio.ro,
    bioEs: standardBio.es,
    bioIt: standardBio.it,
    bioRu: standardBio.ru,
    bioFr: standardBio.fr,
    bioDe: standardBio.de,
    credentials: standardCredentials.en,
    credentialsRo: standardCredentials.ro,
    credentialsEs: standardCredentials.es,
    credentialsIt: standardCredentials.it,
    credentialsRu: standardCredentials.ru,
    credentialsFr: standardCredentials.fr,
    credentialsDe: standardCredentials.de,
    reviewedLabel: standardReviewedLabel.en,
    reviewedLabelRo: standardReviewedLabel.ro,
    reviewedLabelEs: standardReviewedLabel.es,
    reviewedLabelIt: standardReviewedLabel.it,
    reviewedLabelRu: standardReviewedLabel.ru,
    reviewedLabelFr: standardReviewedLabel.fr,
    reviewedLabelDe: standardReviewedLabel.de,
    url: 'https://www.mevaclinic.com/en/about-us'
  }
};

export interface DoctorReviewer {
  id: string;
  displayName: string;
  specialty: string;
  publicRole: string;
  clinicalFocus: string;
  reviewScope: string;
  isOrganization: boolean;
  schemaType: "Physician" | "MedicalOrganization";
}

export const DOCTOR_REGISTRY: Record<string, DoctorReviewer> = {
  plastic_board: {
    id: "plastic_board",
    displayName: "Plastic Surgery Medical Review Board",
    specialty: "Clinical Governance & Aesthetic Safety Standards",
    publicRole: "Clinical Review",
    clinicalFocus: "Standardized Vaser Liposuction & High-Def Body Sculpting Guidelines",
    reviewScope: "medicalReviewDisclaimer",
    isOrganization: true,
    schemaType: "MedicalOrganization"
  },
  bariatric_board: {
    id: "bariatric_board",
    displayName: "Bariatric Surgery Medical Review Board",
    specialty: "Clinical Governance & Bariatric Safety Standards",
    publicRole: "Clinical Review",
    clinicalFocus: "Standardized Laparoscopic Bariatric Surgery & Stomach Reduction Pathways",
    reviewScope: "medicalReviewDisclaimer",
    isOrganization: true,
    schemaType: "MedicalOrganization"
  },
  hair_board: {
    id: "hair_board",
    displayName: "Hair Restoration Medical Review Board",
    specialty: "Clinical Governance & Trichology Safety Standards",
    publicRole: "Clinical Review",
    clinicalFocus: "Standardized Hair Follicle Implantation & Trichology Guidelines",
    reviewScope: "medicalReviewDisclaimer",
    isOrganization: true,
    schemaType: "MedicalOrganization"
  },
  dental_board: {
    id: "dental_board",
    displayName: "Dental Medical Review Board",
    specialty: "Clinical Governance & Implantology Safety Standards",
    publicRole: "Clinical Review",
    clinicalFocus: "Standardized Full-Arch Implant Rehabilitation & Smile Makeover Pathways",
    reviewScope: "medicalReviewDisclaimer",
    isOrganization: true,
    schemaType: "MedicalOrganization"
  },
  andrology_board: {
    id: "andrology_board",
    displayName: "Meva Clinic Medical Review Board",
    specialty: "Clinical Governance & Reconstructive Andrology Safety Standards",
    publicRole: "Clinical Review",
    clinicalFocus: "Standardized Male Health, Genitourinary Reconstruction & Non-Surgical Enhancement Guidelines",
    reviewScope: "medicalReviewDisclaimer",
    isOrganization: true,
    schemaType: "MedicalOrganization"
  },
  editorial: {
    id: "editorial",
    displayName: "Meva Clinic Medical Editorial Board",
    specialty: "Clinical Governance & Patient Safety Standards",
    publicRole: "Clinical Review",
    clinicalFocus: "Clinical Information Integrity & Safety Guidelines Coordination",
    reviewScope: "medicalReviewDisclaimer",
    isOrganization: true,
    schemaType: "MedicalOrganization"
  }
};
