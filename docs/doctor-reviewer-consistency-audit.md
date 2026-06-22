# Meva Clinic Doctor and Reviewer Identity Consistency Audit

This audit evaluates the consistency between the **Clinical Lead** (displayed in the hero header and quotes) and the **Medical Reviewer** (displayed in the verification badge at the bottom of the page and in the structured JSON-LD schema) across all treatment pages on Meva Clinic. 

Maintaining strict alignment is crucial for Medical SEO, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), and entity consistency in search engines and AI/GEO engines.

---

## Central Reviewer Registry Reference
These are the verified medical profiles registered in `data/reviewersData.ts`:
1. `REVIEWERS.bariatric` -> **Dr. Cuma M. Aksoy** (Bariatric & Metabolic Surgeon)
2. `REVIEWERS.hair` -> **Dr. Harun Aksoy** (Hair Restoration Specialist)
3. `REVIEWERS.dental` -> **Dr. Osman Bayram** (Implantology & Digital Dentistry)
4. `REVIEWERS.plastic` -> **Prof. Dr. Yakup Şenel** (Aesthetic, Plastic & Reconstructive Surgeon)
5. `REVIEWERS.organ` -> **Dr. Fatih Erden** (Transplant Surgery & Organ Procurement)
6. `REVIEWERS.oncology` -> **Prof. Dr. Gökhan Küçükay** (Robotic Oncology & CyberKnife S7)
7. `REVIEWERS.specialist` -> **Meva Clinic JCI Medical Governance Committee** (Medical Board / Organization)

---

## Detailed Audit Results

### 1. Bariatric Surgery Pages

#### `/en/treatments/gastric-sleeve`
* **Treatment Title**: Gastric Sleeve (Sleeve Gastrectomy)
* **Clinical Lead Displayed**: Dr. Cuma
* **Medically Reviewed by Displayed**: Dr. Cuma M.
* **Expert / Reviewer in Data**: `Dr. Cuma` / `REVIEWERS.bariatric`
* **Schema reviewedBy Type**: `Physician` (Dr. Cuma M. Aksoy)
* **Doctor Image Alt Name**: `Dr. Cuma M. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Bariatric & Metabolic Surgeon
* **Status**: **1. Consistent** (Short form "Dr. Cuma" matches verified expert profile).

#### `/en/treatments/gastric-bypass`
* **Treatment Title**: Gastric Bypass (Metabolic Surgery)
* **Clinical Lead Displayed**: Dr. Cuma
* **Medically Reviewed by Displayed**: Dr. Cuma M.
* **Expert / Reviewer in Data**: `Dr. Cuma` / `REVIEWERS.bariatric`
* **Schema reviewedBy Type**: `Physician` (Dr. Cuma M. Aksoy)
* **Doctor Image Alt Name**: `Dr. Cuma M. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Bariatric & Metabolic Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/gastric-balloon`
* **Treatment Title**: Gastric Balloon (Allurion)
* **Clinical Lead Displayed**: Dr. Cuma
* **Medically Reviewed by Displayed**: Dr. Cuma M.
* **Expert / Reviewer in Data**: `Dr. Cuma` / `REVIEWERS.bariatric`
* **Schema reviewedBy Type**: `Physician` (Dr. Cuma M. Aksoy)
* **Doctor Image Alt Name**: `Dr. Cuma M. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Bariatric & Metabolic Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/gastric-botox`
* **Treatment Title**: Gastric Botox Injection
* **Clinical Lead Displayed**: Dr. Cuma
* **Medically Reviewed by Displayed**: Dr. Cuma M.
* **Expert / Reviewer in Data**: `Dr. Cuma` / `REVIEWERS.bariatric`
* **Schema reviewedBy Type**: `Physician` (Dr. Cuma M. Aksoy)
* **Doctor Image Alt Name**: `Dr. Cuma M. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Bariatric & Metabolic Surgeon
* **Status**: **1. Consistent**

---

### 2. Hair Restoration Pages

#### `/en/treatments/meva-mixed-hair`
* **Treatment Title**: Meva Mixed Technique (Sapphire + DHI)
* **Clinical Lead Displayed**: MD Harun
* **Medically Reviewed by Displayed**: MD Harun A.
* **Expert / Reviewer in Data**: `MD Harun` / `REVIEWERS.hair`
* **Schema reviewedBy Type**: `Physician` (Dr. Harun Aksoy)
* **Doctor Image Alt Name**: `MD Harun A. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Hair Restoration Specialist
* **Status**: **1. Consistent**

#### `/en/treatments/dhi-hair-transplant`
* **Treatment Title**: DHI (Direct Hair Implantation)
* **Clinical Lead Displayed**: MD Harun
* **Medically Reviewed by Displayed**: MD Harun A.
* **Expert / Reviewer in Data**: `MD Harun` / `REVIEWERS.hair`
* **Schema reviewedBy Type**: `Physician` (Dr. Harun Aksoy)
* **Doctor Image Alt Name**: `MD Harun A. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Hair Restoration Specialist
* **Status**: **1. Consistent**

#### `/en/treatments/eyebrow-transplant`
* **Treatment Title**: Eyebrow Transplant (Meva Secret)
* **Clinical Lead Displayed**: MD Harun
* **Medically Reviewed by Displayed**: MD Harun A.
* **Expert / Reviewer in Data**: `MD Harun` / `REVIEWERS.hair`
* **Schema reviewedBy Type**: `Physician` (Dr. Harun Aksoy)
* **Doctor Image Alt Name**: `MD Harun A. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Hair Restoration Specialist
* **Status**: **1. Consistent**

---

### 3. Dental Care Pages

#### `/en/treatments/dental-implants`
* **Treatment Title**: Premium Dental Implants
* **Clinical Lead Displayed**: Dr. Osman Bayram
* **Medically Reviewed by Displayed**: Dr. Osman B.
* **Expert / Reviewer in Data**: `Dr. Osman Bayram` / `REVIEWERS.dental`
* **Schema reviewedBy Type**: `Physician` (Dr. Osman Bayram)
* **Doctor Image Alt Name**: `Dr. Osman B. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Implantology & Digital Dentistry
* **Status**: **1. Consistent**

#### `/en/treatments/zirconium-crowns`
* **Treatment Title**: Zirconium Veneers & Crowns
* **Clinical Lead Displayed**: Dr. Yusuf
* **Medically Reviewed by Displayed**: Dr. Osman B.
* **Expert / Reviewer in Data**: `Dr. Yusuf` / `REVIEWERS.dental`
* **Schema reviewedBy Type**: `Physician` (Dr. Osman Bayram)
* **Doctor Image Alt Name**: `Dr. Osman B. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Implantology & Digital Dentistry
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead "Dr. Yusuf" is not registered or verified in the medical database, whereas content is reviewed by verified lead Dr. Osman Bayram).

#### `/en/treatments/hollywood-smile`
* **Treatment Title**: Hollywood Smile Design
* **Clinical Lead Displayed**: Dr. Yusuf
* **Medically Reviewed by Displayed**: Dr. Osman B.
* **Expert / Reviewer in Data**: `Dr. Yusuf` / `REVIEWERS.dental`
* **Schema reviewedBy Type**: `Physician` (Dr. Osman Bayram)
* **Doctor Image Alt Name**: `Dr. Osman B. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Implantology & Digital Dentistry
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead "Dr. Yusuf" is not registered/verified).

#### `/en/treatments/all-on-4-dental`
* **Treatment Title**: All-on-4 / All-on-6 Restoration
* **Clinical Lead Displayed**: Dr. Yusuf
* **Medically Reviewed by Displayed**: Dr. Osman B.
* **Expert / Reviewer in Data**: `Dr. Yusuf` / `REVIEWERS.dental`
* **Schema reviewedBy Type**: `Physician` (Dr. Osman Bayram)
* **Doctor Image Alt Name**: `Dr. Osman B. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Implantology & Digital Dentistry
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead "Dr. Yusuf" is not registered/verified).

---

### 4. Plastic Surgery Pages

#### `/en/treatments/vaser-liposuction`
* **Treatment Title**: Vaser Liposuction (High-Def)
* **Clinical Lead Displayed**: Prof. Dr. Yakup Şenel
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup Şenel` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/piezo-rhinoplasty`
* **Treatment Title**: Piezo Ultrasonic Rhinoplasty
* **Clinical Lead Displayed**: Prof. Dr. Emre
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Emre` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is listed as "Prof. Dr. Emre", but reviewer and schema are Prof. Dr. Yakup Şenel. Prof. Dr. Emre is not in `reviewersData.ts`).

#### `/en/treatments/double-chin-liposuction`
* **Treatment Title**: Double Chin Liposuction
* **Clinical Lead Displayed**: Prof. Dr. Yakup
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/breast-augmentation`
* **Treatment Title**: Breast Augmentation (Implants)
* **Clinical Lead Displayed**: Prof. Dr. Yakup
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/abdominoplasty-tummy`
* **Treatment Title**: Abdominoplasty (Tummy Tuck)
* **Clinical Lead Displayed**: Op. Dr. Yunus
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Op. Dr. Yunus` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Op. Dr. Yunus" who is not registered in the medical model, while reviewer is Prof. Dr. Yakup Şenel).

#### `/en/treatments/brazilian-butt-lift-bbl`
* **Treatment Title**: BBL (Brazilian Butt Lift)
* **Clinical Lead Displayed**: Prof. Dr. Yakup
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/deep-plane-facelift`
* **Treatment Title**: Deep Plane Facelift
* **Clinical Lead Displayed**: Op. Dr. Yunus
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Op. Dr. Yunus` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Op. Dr. Yunus", who is unregistered).

#### `/en/treatments/blepharoplasty-eyelid`
* **Treatment Title**: Blepharoplasty (Eyelid Surgery)
* **Clinical Lead Displayed**: Op. Dr. Yunus
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Op. Dr. Yunus` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Op. Dr. Yunus", who is unregistered).

#### `/en/treatments/mommy-makeover-full`
* **Treatment Title**: Mommy Makeover
* **Clinical Lead Displayed**: Prof. Dr. Yakup
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/gynecomastia-male`
* **Treatment Title**: Gynecomastia (Male Breast Reduction)
* **Clinical Lead Displayed**: Op. Dr. Yunus
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Op. Dr. Yunus` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Op. Dr. Yunus", who is unregistered).

#### `/en/treatments/otoplasty-ear`
* **Treatment Title**: Otoplasty (Prominent Ear Surgery)
* **Clinical Lead Displayed**: Prof. Dr. Emre
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Emre` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Prof. Dr. Emre", who is unregistered).

#### `/en/treatments/arm-thigh-lift`
* **Treatment Title**: Arm & Thigh Lift (Brachioplasty)
* **Clinical Lead Displayed**: Op. Dr. Yunus
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Op. Dr. Yunus` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Op. Dr. Yunus", who is unregistered).

#### `/en/treatments/mastopexy-lift`
* **Treatment Title**: Mastopexy (Breast Lift)
* **Clinical Lead Displayed**: Prof. Dr. Yakup
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

#### `/en/treatments/mentoplasty-chin`
* **Treatment Title**: Mentoplasty (Chin Augmentation)
* **Clinical Lead Displayed**: Prof. Dr. Emre
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Emre` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **3. Mismatch / Needs Fix** (Clinical Lead is "Prof. Dr. Emre", who is unregistered).

#### `/en/treatments/labiaplasty-fem`
* **Treatment Title**: Labiaplasty (Aesthetic & Functional)
* **Clinical Lead Displayed**: Prof. Dr. Yakup
* **Medically Reviewed by Displayed**: Prof. Dr. Yakup S.
* **Expert / Reviewer in Data**: `Prof. Dr. Yakup` / `REVIEWERS.plastic`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Yakup Şenel)
* **Doctor Image Alt Name**: `Prof. Dr. Yakup S. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Aesthetic, Plastic & Reconstructive Surgeon
* **Status**: **1. Consistent**

---

### 5. Andrology Pages

#### `/en/treatments/ligamentolysis-andrology`
* **Treatment Title**: Penile Lengthening (Ligamentolysis)
* **Clinical Lead Displayed**: MD Victor
* **Medically Reviewed by Displayed**: Consiliul Medical Meva (Meva Medical Board)
* **Expert / Reviewer in Data**: `MD Victor` / `REVIEWERS.specialist` (Andrology maps to fallback specialist in `getReviewer`)
* **Schema reviewedBy Type**: `MedicalOrganization` (Meva Clinic JCI Medical Governance Committee)
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable / Should Use Medical Editorial Team instead of a Person Schema** (Clinical Lead "MD Victor" is not a verified individual reviewer in the medical database. An organization board review is utilized instead).

#### `/en/treatments/fat-grafting-girth`
* **Treatment Title**: Penile Girth (Fat Grafting)
* **Clinical Lead Displayed**: MD Victor
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Victor` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable**

#### `/en/treatments/ha-filler-girth`
* **Treatment Title**: Non-Surgical Girth (HA Fillers)
* **Clinical Lead Displayed**: MD Victor
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Victor` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable**

#### `/en/treatments/dermal-graft-permanent`
* **Treatment Title**: Dermal Matrix Graft (Girth)
* **Clinical Lead Displayed**: MD Victor
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Victor` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable**

#### `/en/treatments/penile-implant-ed`
* **Treatment Title**: Penile Prosthesis (Implant)
* **Clinical Lead Displayed**: MD Victor
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Victor` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable**

#### `/en/treatments/p-shot-prp`
* **Treatment Title**: P-Shot (Regenerative PRP)
* **Clinical Lead Displayed**: MD Murat
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Murat` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable** (Clinical Lead "MD Murat" is unregistered in data).

#### `/en/treatments/glans-aug-pe`
* **Treatment Title**: Glans Augmentation (PE Treatment)
* **Clinical Lead Displayed**: MD Murat
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Murat` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable**

#### `/en/treatments/eswt-shockwave-ed`
* **Treatment Title**: ESWT Shockwave Therapy
* **Clinical Lead Displayed**: MD Murat
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `MD Murat` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable**

---

### 6. Specialty Hub & Other Pages

#### `/en/treatments/organ-transplant-turkey`
* **Treatment Title**: Organ Transplant (Kidney & Liver)
* **Clinical Lead Displayed**: Dr. Fatih Erden
* **Medically Reviewed by Displayed**: Dr. Fatih E.
* **Expert / Reviewer in Data**: `Dr. Fatih Erden` / `REVIEWERS.organ`
* **Schema reviewedBy Type**: `Physician` (Dr. Fatih Erden)
* **Doctor Image Alt Name**: `Dr. Fatih E. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Transplant Surgery · Organ Procurement
* **Status**: **1. Consistent** (Successfully aligned in previous Phase 3A commit).

#### `/en/treatments/smart-oncology-drugs`
* **Treatment Title**: Smart Oncology & Targeted Drugs
* **Clinical Lead Displayed**: Prof. Dr. Gökhan
* **Medically Reviewed by Displayed**: Prof. Dr. Gökhan K.
* **Expert / Reviewer in Data**: `Prof. Dr. Gökhan` / `REVIEWERS.oncology`
* **Schema reviewedBy Type**: `Physician` (Prof. Dr. Gökhan Küçükay)
* **Doctor Image Alt Name**: `Prof. Dr. Gökhan K. — Meva Clinic Medical Specialist`
* **Specialty Shown**: Robotic Oncology · CyberKnife S7 Specialist
* **Status**: **1. Consistent**

#### `/en/treatments/ivf-cyprus-special`
* **Treatment Title**: IVF Cyprus (Advanced Fertility)
* **Clinical Lead Displayed**: Cyprus Clinical Team
* **Medically Reviewed by Displayed**: Consiliul Medical Meva (Meva Medical Board)
* **Expert / Reviewer in Data**: `Cyprus Clinical Team` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization` (Meva Clinic JCI Medical Governance Committee)
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **2. Different doctors but acceptable because roles are clear** (Both are non-person team entities; roles describe specialized regional team vs general oversight committee).

#### `/en/treatments/anti-gravity-lifting`
* **Treatment Title**: Anti-Gravity Lifting (Non-Surgical)
* **Clinical Lead Displayed**: Prof. Dr. Emre
* **Medically Reviewed by Displayed**: Consiliul Medical Meva
* **Expert / Reviewer in Data**: `Prof. Dr. Emre` / `REVIEWERS.specialist`
* **Schema reviewedBy Type**: `MedicalOrganization`
* **Doctor Image Alt Name**: `Consiliul Medical Meva — Meva Clinic Medical Specialist`
* **Specialty Shown**: Clinical Direction & Urology Advisory
* **Status**: **4. Unverifiable** (Clinical Lead is "Prof. Dr. Emre", who is unregistered).

---

## Proposed Fixes and Action Plan

### Core Principles
1. **Clinical Safety First**: Do not invent new clinical credentials, doctors, or full names.
2. **Align to Registered Experts**: Where a treatment falls under the specialty of an existing registered doctor, update the `expert` property in `data/treatmentsData.ts` to use that doctor's name.
3. **Use Neutral Team Fallbacks**: Where no individual doctor is registered/verifiable in the database, replace the unregistered name in the `expert` property with `"Meva Clinic Medical Coordination Team"`. This prevents displaying unverified clinician names.

### Detailed Proposals (Pending Approval):

| Treatment ID | Current Expert (Data) | Resolved Reviewer | Proposal | Reason |
|---|---|---|---|---|
| **zirconium-crowns** | `Dr. Yusuf` | `REVIEWERS.dental` | Change to `"Dr. Osman Bayram"` | Aligns with the registered dental expert/reviewer. |
| **hollywood-smile** | `Dr. Yusuf` | `REVIEWERS.dental` | Change to `"Dr. Osman Bayram"` | Aligns with the registered dental expert/reviewer. |
| **all-on-4-dental** | `Dr. Yusuf` | `REVIEWERS.dental` | Change to `"Dr. Osman Bayram"` | Aligns with the registered dental expert/reviewer. |
| **piezo-rhinoplasty** | `Prof. Dr. Emre` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **abdominoplasty-tummy** | `Op. Dr. Yunus` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **deep-plane-facelift** | `Op. Dr. Yunus` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **blepharoplasty-eyelid** | `Op. Dr. Yunus` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **gynecomastia-male** | `Op. Dr. Yunus` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **otoplasty-ear** | `Prof. Dr. Emre` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **arm-thigh-lift** | `Op. Dr. Yunus` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **mentoplasty-chin** | `Prof. Dr. Emre` | `REVIEWERS.plastic` | Change to `"Prof. Dr. Yakup Şenel"` | Aligns with the registered plastic surgeon/reviewer. |
| **ligamentolysis-andrology**| `MD Victor` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **fat-grafting-girth** | `MD Victor` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **ha-filler-girth** | `MD Victor` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **dermal-graft-permanent**| `MD Victor` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **penile-implant-ed** | `MD Victor` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **p-shot-prp** | `MD Murat` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **glans-aug-pe** | `MD Murat` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **eswt-shockwave-ed** | `MD Murat` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Coordination Team"` | No verified individual andrologist registered. |
| **anti-gravity-lifting** | `Prof. Dr. Emre` | `REVIEWERS.specialist`| Change to `"Meva Clinic Medical Editorial Team"` | No verified individual specialist registered for non-surgical lifting. |

*Note: No changes will be applied to the codebase until this proposal has been reviewed and explicitly approved.*
