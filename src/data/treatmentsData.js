/**
 * treatmentsData.js
 * Single source of truth for all Meva Clinic treatment pages.
 * Used by TreatmentDetail.jsx via useParams(:slug)
 *
 * URL pattern:  /en/treatments/:slug  |  /ro/treatments/:slug
 * Fallback:     /:lng/:slug  (TreatmentPage with treatmentDetails.json)
 */

export const TREATMENTS = [
  // ──────────────────────────────────────────────────────────
  // BARIATRIC SURGERY
  // ──────────────────────────────────────────────────────────
  {
    slug: 'bariatric-surgery',
    roSlug: 'chirurgie-bariatrica',
    category: 'Bariatric',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Bariatric Surgery Istanbul',
      ro: 'Chirurgie Bariatrică Istanbul',
    },
    subtitle: {
      en: 'Gastric Sleeve, Bypass & Balloon — JCI Accredited Hospital',
      ro: 'Gastric Sleeve, Bypass și Balon — Spital Acreditat JCI',
    },
    metaDescription: {
      en: 'World-class bariatric surgery in Istanbul. Gastric Sleeve, Bypass and Balloon performed by Dr. Cuma with 10,000+ procedures. All-inclusive VIP package.',
      ro: 'Chirurgie bariatrică de clasă mondială în Istanbul. Gastric Sleeve, Bypass și Balon realizate de Dr. Cuma cu peste 10.000 de proceduri. Pachet VIP complet.',
    },
    keywords: 'bariatric surgery Istanbul, gastric sleeve Turkey, gastric bypass cost, obesity surgery, Meva Clinic bariatric',

    doctorQuote: {
      en: 'In over 10,000 bariatric procedures, our patients achieve an average of 65–80% excess weight loss within 12 months — with a complication rate below 1%. At Meva Clinic, surgery is only the beginning of your transformation.',
      ro: 'În peste 10.000 de proceduri bariatrice, pacienții noștri obțin o pierdere medie de 65–80% din excesul de greutate în 12 luni — cu o rată de complicații sub 1%. La Meva Clinic, operația este doar începutul transformării tale.',
      doctor: 'Dr. Cuma',
      specialty: {
        en: 'Bariatric & Metabolic Surgery Specialist · 10,000+ Procedures',
        ro: 'Specialist Chirurgie Bariatrică & Metabolică · Peste 10.000 de Proceduri',
      },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'Free online assessment & BMI eligibility check', ro: 'Evaluare online gratuită și verificare eligibilitate IMC' },
      { en: 'Pre-operative blood panel, ECG and cardiac clearance', ro: 'Panel sanguin preoperatoriu, ECG și evaluare cardiacă' },
      { en: 'Laparoscopic / robotic surgery under general anaesthesia (45–90 min)', ro: 'Chirurgie laparoscopică / robotică sub anestezie generală (45–90 min)' },
      { en: '2–3 nights monitored recovery in JCI-accredited private hospital', ro: '2–3 nopți recuperare monitorizată în spital privat acreditat JCI' },
      { en: '12-month remote follow-up with dietitian & bariatric nurse', ro: '12 luni follow-up la distanță cu dietetician și asistentă bariatrică' },
    ],

    advantages: [
      { en: '65–80% excess weight loss in 12 months', ro: '65–80% pierdere a excesului de greutate în 12 luni' },
      { en: 'Resolves Type 2 Diabetes in 80% of patients', ro: 'Rezolvă Diabetul de Tip 2 la 80% dintre pacienți' },
      { en: '40–60% cheaper than UK, Germany & Romania', ro: '40–60% mai ieftin decât UK, Germania și România' },
      { en: 'JCI-accredited hospital — international safety standard', ro: 'Spital acreditat JCI — standard internațional de siguranță' },
      { en: 'Romanian-speaking coordinator included 24/7', ro: 'Coordonator vorbitor de română inclus 24/7' },
    ],

    specs: {
      en: { hospitalStay: '2–3 Nights (Private)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'General', returnToWork: '7–14 Days' },
      ro: { hospitalStay: '2–3 Nopți (Privat)', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Generală', returnToWork: '7–14 Zile' },
    },

    references: [
      'Schauer, P. R., et al. (2025). Bariatric Surgery versus Intensive Medical Therapy for Diabetes. NEJM.',
      'JCI Global Clinical Standards for Metabolic Surgery (2026 Edition).',
      'IFSO World Congress: Robotic Bariatric Surgery Outcomes 2025.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // HAIR TRANSPLANT
  // ──────────────────────────────────────────────────────────
  {
    slug: 'hair-transplant',
    roSlug: 'transplant-par',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Hair Transplant Istanbul — Sapphire FUE & DHI',
      ro: 'Transplant de Păr Istanbul — Sapphire FUE & DHI',
    },
    subtitle: {
      en: '12,000+ Successful Procedures · Dr. Harun Alakaya',
      ro: 'Peste 12.000 de Proceduri Reușite · Dr. Harun Alakaya',
    },
    metaDescription: {
      en: 'Premium Sapphire FUE and DHI hair transplant in Istanbul. 97%+ graft survival, natural hairlines, non-shaven options. All-inclusive VIP package by Meva Clinic.',
      ro: 'Transplant de păr premium Sapphire FUE și DHI în Istanbul. Supraviețuire grefe 97%+, linii naturale, opțiuni fără ras. Pachet VIP complet Meva Clinic.',
    },
    keywords: 'hair transplant Istanbul, Sapphire FUE Turkey, DHI hair transplant, hair restoration cost, Meva Clinic hair',

    doctorQuote: {
      en: 'The Sapphire FUE blade opens micro-channels with 40% less tissue trauma than steel blades. Combined with DHI direct implantation, we achieve graft survival rates above 97% — and hairlines indistinguishable from natural growth.',
      ro: 'Lama Sapphire FUE deschide micro-canale cu 40% mai puțin traumatism tisular față de lamele de oțel. Combinat cu implantarea directă DHI, obținem rate de supraviețuire a grefelor peste 97% — și linii ale părului indistinguibile de creșterea naturală.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'Hair & Eyebrow Transplant Specialist · Sapphire FUE · DHI · 12,000+ Procedures',
        ro: 'Specialist Transplant Păr & Sprâncene · Sapphire FUE · DHI · Peste 12.000 Proceduri',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'Hairline design consultation and graft count planning', ro: 'Consultație design linie a părului și planificare grefe' },
      { en: 'Painless scalp anaesthesia (needle-free system)', ro: 'Anestezie nedureroasă a scalpului (sistem fără ac)' },
      { en: 'Sapphire FUE follicular extraction (4–8 hours)', ro: 'Extracție foliculară Sapphire FUE (4–8 ore)' },
      { en: 'DHI direct implantation using Choi pen', ro: 'Implantare directă DHI cu stiloul Choi' },
      { en: '12-month photographic growth monitoring', ro: 'Monitorizare fotografică a creșterii pe 12 luni' },
    ],

    advantages: [
      { en: '97%+ graft survival rate guaranteed', ro: 'Rată de supraviețuire a grefelor 97%+ garantată' },
      { en: 'Permanent, completely natural results', ro: 'Rezultate permanente, complet naturale' },
      { en: 'No visible linear scarring', ro: 'Fără cicatrici liniare vizibile' },
      { en: 'Non-shaven (unshaved) FUE available', ro: 'FUE nerasat (unshaved) disponibil' },
      { en: 'Day clinic — back to work in 3 days', ro: 'Clinică ambulatorie — înapoi la muncă în 3 zile' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: '3–5 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: '3–5 Zile' },
    },

    references: [
      'ISHRS (International Society of Hair Restoration Surgery) Practice Standards 2025.',
      'Comparative Analysis: Sapphire vs Steel FUE Blades — Graft Survival & Patient Satisfaction. JHRS 2024.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // IVF — NORTHERN CYPRUS
  // ──────────────────────────────────────────────────────────
  {
    slug: 'ivf-cyprus',
    roSlug: 'fiv-cipru',
    category: 'IVF',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'IVF Treatment in Cyprus — 2026 Guide',
      ro: 'Tratament FIV în Cipru — Ghid 2026',
    },
    subtitle: {
      en: '65%+ Success Rate · Egg Donation · NGS Genetic Screening',
      ro: 'Rată de Succes 65%+ · Donare de Ovule · Screening Genetic NGS',
    },
    metaDescription: {
      en: 'World-class IVF treatment in Northern Cyprus. 65%+ success rate with egg donation, NGS embryo selection and AI-assisted protocols. Meva Clinic all-inclusive package.',
      ro: 'Tratament FIV de clasă mondială în Ciprul de Nord. Rată de succes 65%+ cu donare de ovule, selecție embrioni NGS și protocoale asistate AI. Pachet complet Meva Clinic.',
    },
    keywords: 'IVF Cyprus, egg donation Cyprus, FIV Cipru, fertilizare in vitro Cipru, IVF success rate 2026, Meva Clinic IVF',

    doctorQuote: {
      en: 'Northern Cyprus is among the top 3 IVF destinations globally — not because of cost alone, but because our legal framework allows egg donation and PGT-A genetic screening that many EU countries restrict. Our live birth rates exceed 65% per transfer for patients under 38.',
      ro: 'Ciprul de Nord se numără printre primele 3 destinații FIV din lume — nu doar datorită costurilor, ci și pentru că cadrul nostru legal permite donarea de ovule și screening genetic PGT-A pe care multe țări UE le restricționează. Ratele noastre de nașteri vii depășesc 65% pe transfer pentru pacientele sub 38 de ani.',
      doctor: 'Dr. Ayşe Kaya',
      specialty: {
        en: 'Reproductive Medicine Specialist · IVF & Egg Donation · Cyprus Protocol',
        ro: 'Specialist Medicină Reproductivă · FIV & Donare Ovule · Protocol Cipru',
      },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'AMH / FSH blood test and antral follicle count (AFC) remotely', ro: 'Test sanguin AMH / FSH și numărare foliculi antrali (AFC) la distanță' },
      { en: 'Ovarian stimulation protocol (10–14 days of injections)', ro: 'Protocol de stimulare ovariană (10–14 zile de injecții)' },
      { en: 'Egg retrieval under light sedation (20–30 min)', ro: 'Recuperarea ovulelor sub sedare ușoară (20–30 min)' },
      { en: 'ICSI fertilisation + NGS genetic screening of embryos', ro: 'Fertilizare ICSI + screening genetic NGS al embrionilor' },
      { en: 'Blastocyst transfer + 2-week pregnancy test (beta-hCG)', ro: 'Transfer blastocist + test de sarcină la 2 săptămâni (beta-hCG)' },
    ],

    advantages: [
      { en: '65%+ live birth rate per transfer (under 38)', ro: 'Rată de nașteri vii 65%+ per transfer (sub 38 ani)' },
      { en: 'Egg donation legally permitted — no waiting list', ro: 'Donare ovule permisă legal — fără listă de așteptare' },
      { en: 'NGS + AI embryo selection for highest viability', ro: 'Selecție embrioni NGS + AI pentru viabilitate maximă' },
      { en: '50–70% cheaper than UK, Spain & Greece', ro: '50–70% mai ieftin decât UK, Spania și Grecia' },
      { en: 'Anonymous donor database — 48hr match', ro: 'Bază de date donatori anonimă — potrivire în 48h' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic', hotelStay: '5–7 Nights (5★ Hotel)', anesthesia: 'Light Sedation', returnToWork: 'Same Day' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '5–7 Nopți (Hotel 5★)', anesthesia: 'Sedare Ușoară', returnToWork: 'Aceeași Zi' },
    },

    references: [
      'ESHRE (European Society of Human Reproduction and Embryology) ART Report 2025.',
      'Cyprus IVF Success Rates vs European Benchmarks — Reproductive BioMedicine Online 2024.',
      'AI-Assisted Embryo Selection: Clinical Outcomes Review, Fertility & Sterility Journal 2025.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // DENTAL IMPLANTS
  // ──────────────────────────────────────────────────────────
  {
    slug: 'dental-implants',
    roSlug: 'implanturi-dentare',
    category: 'Dental',
    heroImage: 'https://plus.unsplash.com/premium_photo-1664303498964-b8bfa93eff49?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Dental Implants Istanbul — Hollywood Smile',
      ro: 'Implanturi Dentare Istanbul — Zâmbet Hollywoodian',
    },
    subtitle: {
      en: 'Straumann & Nobel Biocare · Dr. Ayşe Kaya · ITI Fellow',
      ro: 'Straumann & Nobel Biocare · Dr. Ayşe Kaya · Membră ITI',
    },
    metaDescription: {
      en: 'Premium dental implants in Istanbul. Straumann & Nobel Biocare brands, same-day temporaries, All-on-4. 40–60% cheaper than UK. EACMFS certified doctors at Meva Clinic.',
      ro: 'Implanturi dentare premium în Istanbul. Branduri Straumann & Nobel Biocare, temporare în aceeași zi, All-on-4. 40–60% mai ieftin decât UK. Medici certificați EACMFS la Meva Clinic.',
    },
    keywords: 'dental implants Istanbul, Hollywood smile Turkey, All-on-4 Istanbul, implanturi dentare Istanbul, Straumann Turkey, Meva Clinic dental',

    doctorQuote: {
      en: 'With Straumann BLX implants and full-digital smile design, we plan your entire reconstruction virtually before a single drill touches the bone. Same-day temporaries mean you leave Istanbul smiling — every time.',
      ro: 'Cu implanturi Straumann BLX și design digital complet al zâmbetului, planificăm întreaga reconstrucție virtual înainte ca vreo freză să atingă osul. Coroanele temporare în aceeași zi înseamnă că plecați din Istanbul zâmbind — de fiecare dată.',
      doctor: 'Dr. Ayşe Kaya',
      specialty: {
        en: 'Implantologist · ITI Fellow · Straumann Certified · 8,000+ Implants',
        ro: 'Implantolog · Membră ITI · Certificată Straumann · Peste 8.000 de Implanturi',
      },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: '3D CBCT scan and digital smile design session', ro: 'Scanare 3D CBCT și sesiune design digital al zâmbetului' },
      { en: 'Zero-pain local anaesthesia protocol', ro: 'Protocol anestezie locală zero durere' },
      { en: 'Titanium implant placement (Straumann / Nobel Biocare)', ro: 'Plasare implant titan (Straumann / Nobel Biocare)' },
      { en: 'Zirconium crown fitting — same-day temporary crown', ro: 'Montare coroană zirconiu — coroană temporară în aceeași zi' },
      { en: 'Final crown delivery (return visit or courier)', ro: 'Livrare coroană finală (vizită retur sau curier)' },
    ],

    advantages: [
      { en: '40–60% cheaper than UK, Germany, Romania', ro: '40–60% mai ieftin decât UK, Germania, România' },
      { en: 'Straumann & Nobel Biocare — 15-year warranty', ro: 'Straumann & Nobel Biocare — garanție 15 ani' },
      { en: 'Same-day zirconium temporaries', ro: 'Temporare din zirconiu în aceeași zi' },
      { en: 'All-on-4 & All-on-6 full arch available', ro: 'All-on-4 & All-on-6 arc complet disponibil' },
      { en: 'No hospital stay — return to work immediately', ro: 'Fără spitalizare — revenire imediată la muncă' },
    ],

    specs: {
      en: { hospitalStay: 'Not Required', hotelStay: '5 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: 'Immediate' },
      ro: { hospitalStay: 'Nu Necesită', hotelStay: '5 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: 'Imediat' },
    },

    references: [
      'ITI (International Team for Implantology) Consensus Statement 2025.',
      'Journal of Clinical Periodontology: Osseointegration Success Rates in High-Density Implants.',
      'EACMFS Digital Implantology Workflow Guidelines 2024.',
    ],
  },
];

/**
 * Helper: find treatment by EN or RO slug
 */
export const findTreatment = (slug) =>
  TREATMENTS.find(t => t.slug === slug || t.roSlug === slug) || null;

export default TREATMENTS;
