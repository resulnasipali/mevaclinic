# Phase 3B-2C Dental Reviewer Registry Preparation Audit

This document outlines the requirements, data structure, and templates needed to add full profile support for the clinic's real dental doctors in the central reviewer registry, instead of replacing them. This ensures robust E-E-A-T credentials and visible-to-schema alignment.

---

## 1. central Reviewer Registry Interface (`Reviewer`)

In [reviewersData.ts](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/meva-clinic-next/data/reviewersData.ts), the `Reviewer` interface is defined as:

```typescript
export interface Reviewer {
  name: string;               // Display short name (e.g., 'Dr. Osman B.')
  nameRo?: string;
  nameEs?: string;
  nameIt?: string;
  nameRu?: string;
  nameFr?: string;
  nameDe?: string;
  fullName: string;           // Real full name (e.g., 'Dr. Osman Bayram')
  specialty: string;          // Specialty label (e.g., 'Implantology & Digital Dentistry')
  specialtyRo?: string;
  specialtyEs?: string;
  specialtyIt?: string;
  specialtyRu?: string;
  specialtyFr?: string;
  specialtyDe?: string;
  bio?: string;               // Biography paragraph
  bioRo?: string;
  bioEs?: string;
  bioIt?: string;
  bioRu?: string;
  bioFr?: string;
  bioDe?: string;
  credentials: string;        // Official board/credentials summary
  credentialsRo?: string;
  credentialsEs?: string;
  credentialsIt?: string;
  credentialsRu?: string;
  credentialsFr?: string;
  credentialsDe?: string;
  education?: string;         // Alma mater details
  institution?: string;       // Clinical affiliations
  cases?: string;             // Number of cases performed
  reviewedLabel: string;      // Label prefix (e.g., 'Medically Reviewed by')
  reviewedLabelRo?: string;
  reviewedLabelEs?: string;
  reviewedLabelIt?: string;
  reviewedLabelRu?: string;
  reviewedLabelFr?: string;
  reviewedLabelDe?: string;
  url: string;                // Practitioner profile link or page
  image?: string;             // URL path to avatar image
}
```

---

## 2. Field Classification (Mandatory vs. Optional)

To build a valid reviewer object that satisfies both UI rendering and Google E-E-A-T schema rules, we classify the fields as follows:

### Mandatory Fields (Non-Optional in Interface)
1. **`name`**: The short name displayed in visible badges (e.g., `Dr. Yusuf Y.`).
2. **`fullName`**: The practitioner's official name used in the JSON-LD schema `name` field (e.g., `Dr. Yusuf Yakar`).
3. **`specialty`**: The clinical focus used in `medicalSpecialty` schema (e.g., `Prosthodontics & Aesthetic Dentistry`).
4. **`credentials`**: Board memberships, years of experience, or licenses used as a fallback description.
5. **`reviewedLabel`**: Pre-configured display label (typically `'Medically Reviewed by'`).
6. **`url`**: The profile link (typically maps to `https://www.mevaclinic.com/[lang]/about-us` or a future bio page).

### Optional Fields (But Critical for E-E-A-T)
1. **`bio`** (Highly recommended): Multi-language biography text. If omitted, schema uses `credentials` for the `description` field.
2. **`education` & `institution`**: Background authority signals.
3. **`image`**: Avatar path.
4. **`cases`**: Clinical volume metric.

---

## 3. Dentist Profile Templates (Central Registry)

The following templates use `TODO` placeholders to avoid fabricating credentials or details. These must be filled in with official data before deployment.

### 1. **Dr. Yusuf Y.**
```typescript
  dental_yusuf: {
    name: 'Dr. Yusuf Y.',
    nameRo: 'Dr. Yusuf Y.',
    fullName: 'Dr. Yusuf Y. [TODO: Surname]',
    specialty: 'Dentist · [TODO: Clinical Specialty]',
    specialtyRo: 'Dentist · [TODO: Clinical Specialty in Romanian]',
    specialtyEs: 'Dentista · [TODO: Clinical Specialty in Spanish]',
    specialtyIt: 'Dentista · [TODO: Clinical Specialty in Italian]',
    specialtyRu: 'Стоматолог · [TODO: Clinical Specialty in Russian]',
    specialtyFr: 'Dentiste · [TODO: Clinical Specialty in French]',
    specialtyDe: 'Zahnarzt · [TODO: Clinical Specialty in German]',
    bio: '[TODO: Multi-language Biography English]',
    bioRo: '[TODO: Biography Romanian]',
    bioEs: '[TODO: Biography Spanish]',
    bioIt: '[TODO: Biography Italian]',
    bioRu: '[TODO: Biography Russian]',
    bioFr: '[TODO: Biography French]',
    bioDe: '[TODO: Biography German]',
    credentials: '[TODO: Credentials summary (e.g. Member of TDB, 10+ years experience)]',
    credentialsRo: '[TODO: Credentials Romanian]',
    credentialsEs: '[TODO: Credentials Spanish]',
    credentialsIt: '[TODO: Credentials Italian]',
    credentialsRu: '[TODO: Credentials Russian]',
    credentialsFr: '[TODO: Credentials French]',
    credentialsDe: '[TODO: Credentials German]',
    education: '[TODO: University, Graduation Year]',
    institution: 'Meva Clinic',
    cases: '[TODO: Approximate Case Count]',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
    image: '/images/team/dr-yusuf.jpg' // [TODO: Verify avatar path]
  }
```

### 2. **Dr. Osman B.** (Existing Profile in Codebase)
*Note: Currently registered under key `dental` in reviewersData.ts. We can extend/modify this if needed.*
```typescript
  dental_osman: {
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
    bioFr: "Membre de l'ITI et implantologue certifié Straumann avec plus de 8 000 implants posés. Pionnier du smile design numérique full-arch à Meva Clinic.",
    bioDe: 'ITI-Fellow und Straumann-zertifizierter Implantologe mit über 8.000 gesetzten Implantaten. Pioneer des Full-Arch Digital Smile Design an der Meva-Klinik.',
    credentials: 'ITI Fellow, CAD/CAM Specialist',
    credentialsRo: 'Membru ITI, Specialist CAD/CAM',
    credentialsEs: 'Miembro de ITI, Especialista en CAD/CAM',
    credentialsIt: 'Fellow ITI, Specialista CAD/CAM',
    credentialsRu: 'Член ITI, специалист по CAD/CAM',
    credentialsFr: "Membre de l'ITI, Spécialiste CAD/CAM",
    credentialsDe: 'ITI-Fellow, CAD/CAM Spezialist',
    education: 'Istanbul University, Faculty of Medicine',
    cases: '8,000',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
    image: '/images/team/dr-osman.jpg' // [TODO: Verify avatar path]
  }
```

### 3. **Dr. Şiyar T.**
```typescript
  dental_shiyar: {
    name: 'Dr. Şiyar T.',
    nameRo: 'Dr. Şiyar T.',
    fullName: 'Dr. Şiyar T. [TODO: Surname]',
    specialty: 'Dentist · [TODO: Clinical Specialty]',
    specialtyRo: 'Dentist · [TODO: Clinical Specialty in Romanian]',
    specialtyEs: 'Dentista · [TODO: Clinical Specialty in Spanish]',
    specialtyIt: 'Dentista · [TODO: Clinical Specialty in Italian]',
    specialtyRu: 'Стоматолог · [TODO: Clinical Specialty in Russian]',
    specialtyFr: 'Dentiste · [TODO: Clinical Specialty in French]',
    specialtyDe: 'Zahnarzt · [TODO: Clinical Specialty in German]',
    bio: '[TODO: Multi-language Biography English]',
    bioRo: '[TODO: Biography Romanian]',
    bioEs: '[TODO: Biography Spanish]',
    bioIt: '[TODO: Biography Italian]',
    bioRu: '[TODO: Biography Russian]',
    bioFr: '[TODO: Biography French]',
    bioDe: '[TODO: Biography German]',
    credentials: '[TODO: Credentials summary (e.g. Member of TDB, 8+ years experience)]',
    credentialsRo: '[TODO: Credentials Romanian]',
    credentialsEs: '[TODO: Credentials Spanish]',
    credentialsIt: '[TODO: Credentials Italian]',
    credentialsRu: '[TODO: Credentials Russian]',
    credentialsFr: '[TODO: Credentials French]',
    credentialsDe: '[TODO: Credentials German]',
    education: '[TODO: University, Graduation Year]',
    institution: 'Meva Clinic',
    cases: '[TODO: Approximate Case Count]',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
    image: '/images/team/dr-shiyar.jpg' // [TODO: Verify avatar path]
  }
```

### 4. **Dr. Cemal Ö.**
```typescript
  dental_cemal: {
    name: 'Dr. Cemal Ö.',
    nameRo: 'Dr. Cemal Ö.',
    fullName: 'Dr. Cemal Ö. [TODO: Surname]',
    specialty: 'Dentist · [TODO: Clinical Specialty]',
    specialtyRo: 'Dentist · [TODO: Clinical Specialty in Romanian]',
    specialtyEs: 'Dentista · [TODO: Clinical Specialty in Spanish]',
    specialtyIt: 'Dentista · [TODO: Clinical Specialty in Italian]',
    specialtyRu: 'Стоматолог · [TODO: Clinical Specialty in Russian]',
    specialtyFr: 'Dentiste · [TODO: Clinical Specialty in French]',
    specialtyDe: 'Zahnarzt · [TODO: Clinical Specialty in German]',
    bio: '[TODO: Multi-language Biography English]',
    bioRo: '[TODO: Biography Romanian]',
    bioEs: '[TODO: Biography Spanish]',
    bioIt: '[TODO: Biography Italian]',
    bioRu: '[TODO: Biography Russian]',
    bioFr: '[TODO: Biography French]',
    bioDe: '[TODO: Biography German]',
    credentials: '[TODO: Credentials summary (e.g. Member of TDB, 12+ years experience)]',
    credentialsRo: '[TODO: Credentials Romanian]',
    credentialsEs: '[TODO: Credentials Spanish]',
    credentialsIt: '[TODO: Credentials Italian]',
    credentialsRu: '[TODO: Credentials Russian]',
    credentialsFr: '[TODO: Credentials French]',
    credentialsDe: '[TODO: Credentials German]',
    education: '[TODO: University, Graduation Year]',
    institution: 'Meva Clinic',
    cases: '[TODO: Approximate Case Count]',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    reviewedLabelEs: 'Revisado Médicamente por',
    reviewedLabelIt: 'Verificato Medicalmente da',
    reviewedLabelRu: 'Медицинский аудит:',
    reviewedLabelFr: 'Vérifié médicalement par',
    reviewedLabelDe: 'Medizinisch geprüft von',
    url: 'https://www.mevaclinic.com/en/about-us',
    image: '/images/team/dr-cemal.jpg' // [TODO: Verify avatar path]
  }
```

---

## 4. Current Page Usage

* **`Dr. Yusuf`**: Used as Clinical Lead on 3 treatment pages in `data/treatmentsData.ts`:
  1. `zirconium-crowns` (`expert: 'Dr. Yusuf'`)
  2. `hollywood-smile` (`expert: 'Dr. Yusuf'`)
  3. `all-on-4-dental` (`expert: 'Dr. Yusuf'`)
* **`Dr. Osman`**: Used as Clinical Lead on 1 page:
  1. `dental-implants` (`expert: 'Dr. Osman Bayram'`)
* **`Dr. Şiyar`**: **None**. Currently unused on treatment pages.
* **`Dr. Cemal`**: **None**. Currently unused on treatment pages.

---

## 5. Technical Implementation Details (Resolver Refactoring)

Currently, the schemas and visible reviewer badges on treatment pages resolve the reviewer **solely by the page's category**:

```typescript
// From app/[lang]/treatments/[slug]/page.tsx
const getReviewer = (category: string, treatmentId: string) => {
  const cat = (category || '').toLowerCase();
  if (cat === 'dental') {
    return REVIEWERS.dental; // Always Dr. Osman B.
  }
  // ...
}
```

### Required Refactoring:
If we introduce individual reviewer keys for each dentist, we must update the resolver in both [app/[lang]/treatments/[slug]/page.tsx](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/meva-clinic-next/app/[lang]/treatments/[slug]/page.tsx) and [app/components/TreatmentDetailClient.tsx](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/meva-clinic-next/app/components/TreatmentDetailClient.tsx) to resolve the reviewer based on the specific `expert` name configured in the data:

```typescript
const getReviewer = (category: string, treatmentId: string, expertName?: string) => {
  const cat = (category || '').toLowerCase();
  const exp = (expertName || '').toLowerCase();
  
  if (cat === 'dental') {
    if (exp.includes('yusuf')) return REVIEWERS.dental_yusuf;
    if (exp.includes('shiyar') || exp.includes('şiyar')) return REVIEWERS.dental_shiyar;
    if (exp.includes('cemal')) return REVIEWERS.dental_cemal;
    return REVIEWERS.dental_osman; // Default fallback for dental (Dr. Osman Bayram)
  }
  // ...
}
```

---

## 6. Effort & Risk Estimation

* **Implementation Effort**: **Low-Medium**
  * Adding the profile nodes to `data/reviewersData.ts` is simple data entry.
  * Updating the resolver logic in the treatment page and treatment client component requires a minor code edit.
  * Total development time: ~1 hour.
* **Data Gathering Effort**: **Medium-High**
  * Official full names, specialties, credentials, education, and biographies must be translated into **7 languages** to maintain multilingual page structure.
  * Valid headshot images must be provided for all 4 doctors.
* **E-E-A-T Risk**: **Low**
  * Because these are real doctors, providing their actual qualifications will significantly increase Meva Clinic's search authoritativeness and clinical trust metrics.
  * No risk of search engine penalties since all credentials and profiles will represent real medical professionals.
