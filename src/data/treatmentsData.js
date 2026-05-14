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

  // ──────────────────────────────────────────────────────────
  // MEVA MIXED HAIR TRANSPLANT (Sapphire FUE + DHI Combo)
  // ──────────────────────────────────────────────────────────
  {
    slug: 'mixed-hair-transplant',
    roSlug: 'transplant-par-mixt',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Meva Mixed Hair Transplant — 1 Operation, 2 Expert Techniques',
      ro: 'Transplant Mixt de Păr Meva — 1 Operație, 2 Tehnici Expert',
    },
    subtitle: {
      en: 'Sapphire FUE for Hairline · DHI (Choi Pen) for Density · Dr. Harun Alakaya',
      ro: 'Sapphire FUE pentru Linia Frontală · DHI (Stilou Choi) pentru Densitate · Dr. Harun Alakaya',
    },
    metaDescription: {
      en: 'The world\'s most effective hair transplant combination: Sapphire FUE micro-incisions for a natural hairline + DHI Choi Pen for maximum mid-scalp and crown density. Performed by Dr. Harun Alakaya at Meva Clinic Istanbul.',
      ro: 'Cea mai eficientă combinație de transplant de păr din lume: micro-incizii Sapphire FUE pentru o linie frontală naturală + DHI Stilou Choi pentru densitate maximă. Realizat de Dr. Harun Alakaya la Meva Clinic Istanbul.',
    },
    keywords: 'mixed hair transplant Istanbul, Sapphire FUE DHI combination, hair transplant technique Turkey, Meva Clinic mixed technique, Dr Harun Alakaya',

    doctorQuote: {
      en: 'No single technique is optimal for every zone of the scalp. The frontal hairline demands razor-sharp micro-channel precision — that is Sapphire FUE\'s domain. The mid-scalp and crown require maximum follicular density without channel trauma — that is exactly what DHI\'s direct Choi Pen implantation achieves. By combining both in a single surgical session, we deliver what neither technique can accomplish alone: a hairline that looks genuinely natural and a crown with the structural density of youth.',
      ro: 'Nicio tehnică singulară nu este optimă pentru fiecare zonă a scalpului. Linia frontală a părului necesită precizie perfectă a micro-canalelor — aceasta este zona Sapphire FUE. Mid-scalp-ul și coroana necesită densitate foliculară maximă fără traumatism canalicular — exact ceea ce realizează implantarea directă cu Stiloul Choi DHI. Combinând ambele tehnici într-o singură sesiune chirurgicală, oferim ceea ce nicio tehnică nu poate realiza singură: o linie frontală cu aspect genuinamente natural și o coroană cu densitatea structurală a tinereții.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'Hair Restoration Specialist · Sapphire FUE · DHI · Mixed Technique Pioneer',
        ro: 'Specialist Restaurare Capilară · Sapphire FUE · DHI · Pionier Tehnică Mixtă',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    technicalDetail: {
      en: [
        {
          zone: 'Frontal Hairline (0–3 cm)',
          technique: 'Sapphire FUE Micro-Incisions',
          detail: 'Dr. Harun uses Sapphire-tipped pens to create micro-channels as narrow as 0.6–0.8 mm — 40% less tissue trauma than steel blades. The crystalline sapphire tip enables precise angle control (30–45°), replicating the natural growth vector of each follicle to produce an imperceptible hairline transition.',
        },
        {
          zone: 'Mid-Scalp & Crown (3 cm+)',
          technique: 'DHI Direct Implantation (Choi Pen)',
          detail: 'In zones requiring maximum follicular packing, channel-less DHI eliminates the gap between extraction and implantation. The Choi implanter pen deposits each graft directly into tissue at precisely calibrated depth and angle — enabling 80–100 grafts/cm² density that FUE alone cannot achieve without vascular compromise.',
        },
      ],
      ro: [
        {
          zone: 'Linia Frontală (0–3 cm)',
          technique: 'Micro-Incizii Sapphire FUE',
          detail: 'Dr. Harun folosește stilouri cu vârf de safir pentru a crea micro-canale de doar 0,6–0,8 mm — cu 40% mai puțin traumatism tisular față de lamele de oțel. Vârful cristalin de safir permite controlul precis al unghiului (30–45°), replicând vectorul natural de creștere al fiecărui folicul pentru o tranziție imperceptibilă a liniei frontale.',
        },
        {
          zone: 'Mid-Scalp și Coroană (3 cm+)',
          technique: 'Implantare Directă DHI (Stiloul Choi)',
          detail: 'În zonele care necesită densitate foliculară maximă, DHI fără canal elimină intervalul dintre extracție și implantare. Stiloul implantator Choi depune fiecare grefă direct în țesut la adâncime și unghi precis calibrate — permițând o densitate de 80–100 grefe/cm² pe care FUE singur nu o poate realiza fără compromis vascular.',
        },
      ],
    },

    steps: [
      { en: 'Scalp mapping: zone-by-zone density analysis and technique allocation', ro: 'Cartografiere scalp: analiza densității pe zone și alocarea tehnicii' },
      { en: 'Needle-free scalp anaesthesia — virtually painless protocol', ro: 'Anestezie scalp fără ac — protocol practic nedureros' },
      { en: 'Sapphire FUE micro-channel creation in frontal hairline zone', ro: 'Creare micro-canale Sapphire FUE în zona liniei frontale' },
      { en: 'DHI Choi Pen direct implantation in mid-scalp and crown', ro: 'Implantare directă DHI Stilou Choi în mid-scalp și coroană' },
      { en: 'Bio-active growth serum application + 12-month photographic follow-up', ro: 'Aplicare ser de creștere bio-activ + urmărire fotografică pe 12 luni' },
    ],

    advantages: [
      { en: '1 operation — 2 complementary expert techniques', ro: '1 operație — 2 tehnici expert complementare' },
      { en: 'Sapphire precision at the hairline = zero unnatural appearance', ro: 'Precizie Sapphire la linie frontală = zero aspect nefiresc' },
      { en: 'DHI density at crown = structural thickness of youth', ro: 'Densitate DHI la coroană = grosime structurală a tinereții' },
      { en: '97%+ graft survival across both zones', ro: 'Supraviețuire 97%+ a grefelor în ambele zone' },
      { en: 'Shorter total healing time vs. two separate procedures', ro: 'Timp de vindecare mai scurt față de două proceduri separate' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'Local (Needle-Free)', returnToWork: '3–5 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Locală (Fără Ac)', returnToWork: '3–5 Zile' },
    },

    references: [
      'ISHRS 2025: Comparative Outcomes of Combined FUE-DHI Technique vs Single-Method Protocols.',
      'Rassman, W.R. et al. (2024). Follicular Unit Extraction: Principles and Practice. 3rd Ed.',
      'Journal of Dermatologic Surgery: Sapphire FUE vs Steel Blade Recipient Site Creation — Tissue Trauma Analysis 2024.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // DHI (CHOI PEN) — DIRECT HAIR IMPLANTATION
  // ──────────────────────────────────────────────────────────
  {
    slug: 'dhi-hair-transplant',
    roSlug: 'transplant-par-dhi',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'DHI Hair Transplant (Choi Pen) — Maximum Density Without Channels',
      ro: 'Transplant Păr DHI (Stiloul Choi) — Densitate Maximă Fără Canale',
    },
    subtitle: {
      en: 'Direct Implantation · No Channel Phase · Faster Recovery · Higher Density',
      ro: 'Implantare Directă · Fără Faza de Canal · Recuperare Mai Rapidă · Densitate Mai Mare',
    },
    metaDescription: {
      en: 'DHI Direct Hair Implantation with Choi Pen at Meva Clinic Istanbul. No channel-cutting phase means less scalp trauma, higher graft density (up to 100/cm²) and significantly faster recovery. Ideal for crown and mid-scalp restoration.',
      ro: 'Implantare Directă de Păr DHI cu Stiloul Choi la Meva Clinic Istanbul. Fără faza de tăiere a canalelor înseamnă mai puțin traumatism al scalpului, densitate mai mare a grefelor (până la 100/cm²) și recuperare semnificativ mai rapidă. Ideal pentru restaurarea coroanei și a mid-scalp-ului.',
    },
    keywords: 'DHI hair transplant Istanbul, Choi pen hair transplant Turkey, direct hair implantation, DHI vs FUE comparison, Meva Clinic DHI',

    doctorQuote: {
      en: 'In traditional FUE, we first open all recipient channels, then implant — a two-phase sequence that leaves grafts out of tissue for longer. DHI eliminates this entirely. The Choi implanter pen extracts and deposits each follicle in a single motion, minimising ischaemic exposure time to under 90 seconds per graft. The clinical result is measurable: we achieve 15–20% higher graft density in the crown area compared to standard FUE, with a complication rate that approaches zero.',
      ro: 'În FUE tradițional, deschidem mai întâi toate canalele receptoare, apoi implantăm — o secvență în două faze care lasă grefele în afara țesutului mai mult timp. DHI elimină complet acest lucru. Stiloul implantator Choi extrage și depune fiecare folicul într-o singură mișcare, minimizând timpul de expunere ischemică la sub 90 de secunde per grefă. Rezultatul clinic este măsurabil: obținem o densitate a grefelor cu 15–20% mai mare în zona coroanei față de FUE standard, cu o rată de complicații care se apropie de zero.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'DHI & Sapphire FUE Specialist · 12,000+ Procedures · Meva Clinic Istanbul',
        ro: 'Specialist DHI & Sapphire FUE · Peste 12.000 de Proceduri · Meva Clinic Istanbul',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'Digital density mapping and Choi pen calibration to hair calibre', ro: 'Cartografiere digitală a densității și calibrarea Stiloului Choi la calibrul firului' },
      { en: 'Micro-targeted local anaesthesia to the donor and recipient zones', ro: 'Anestezie locală micro-țintită pe zonele donoare și receptoare' },
      { en: 'FUE extraction of follicular units from the occipital donor area', ro: 'Extracție FUE a unităților foliculare din zona donatoare occipitală' },
      { en: 'Choi Pen direct implantation — no pre-made channels required', ro: 'Implantare directă cu Stiloul Choi — fără canale pre-formate necesare' },
      { en: 'Exosome growth serum application + 12-month density monitoring', ro: 'Aplicare ser de creștere cu exozomi + monitorizare densitate 12 luni' },
    ],

    advantages: [
      { en: 'No channel-cutting phase — 40% less scalp trauma', ro: 'Fără faza de tăiere canale — 40% mai puțin traumatism al scalpului' },
      { en: '80–100 grafts/cm² — highest density achievable', ro: '80–100 grefe/cm² — cea mai mare densitate realizabilă' },
      { en: 'Graft ischaemic time under 90 seconds', ro: 'Timp de ischemie a grefei sub 90 de secunde' },
      { en: 'Faster recovery — reduced crusting and swelling', ro: 'Recuperare mai rapidă — cruste și umflare reduse' },
      { en: 'Ideal for unshaven (non-shaved) procedures', ro: 'Ideal pentru proceduri nerase (non-shaved)' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: '2–4 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: '2–4 Zile' },
    },

    references: [
      'Tsilosani, A. (2024). Direct Hair Implantation (DHI): Clinical Outcomes and Density Comparison. JHRS.',
      'ISHRS 2025: DHI vs FUE — Scalp Trauma, Graft Survival and Patient Satisfaction Meta-Analysis.',
      'Bernstein, R.M. (2024). Follicular Unit Transplantation: The Science of Natural Hairline Design. Springer.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // EYEBROW TRANSPLANT
  // ──────────────────────────────────────────────────────────
  {
    slug: 'eyebrow-transplant',
    roSlug: 'transplant-sprancene',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Eyebrow Transplant Istanbul — Precision Angle & Direction Technique',
      ro: 'Transplant de Sprâncene Istanbul — Tehnică Precizie Unghi & Direcție',
    },
    subtitle: {
      en: '20–30° Implantation Angles · Single-Hair Follicles · Permanent Natural Results',
      ro: 'Unghiuri de Implantare 20–30° · Foliculi Fire Unice · Rezultate Naturale Permanente',
    },
    metaDescription: {
      en: 'Eyebrow transplant at Meva Clinic Istanbul. Dr. Harun\'s precision angular technique (20–30°) using single-hair follicular units from the nape donor region delivers permanent, natural-density eyebrows. Bilingual RO/EN support.',
      ro: 'Transplant de sprâncene la Meva Clinic Istanbul. Tehnica angulară de precizie a Dr. Harun (20–30°) folosind unități foliculare de un singur fir din zona donatoare a cefei oferă sprâncene cu densitate naturală permanentă.',
    },
    keywords: 'eyebrow transplant Istanbul, eyebrow restoration Turkey, transplant sprancene Istanbul, sourcil greffe Turquie, Meva Clinic eyebrow',

    doctorQuote: {
      en: 'The eyebrow is the most technically demanding area in hair restoration. Unlike scalp hair, eyebrow follicles must be implanted at acute angles of 20 to 30 degrees — and within each brow, the direction changes continuously across three anatomical vectors: the medial head, the body arch and the lateral tail. A deviation of even 5 degrees produces a visually detectable unnatural appearance. We use single-hair follicular units exclusively, harvested from the nape of the neck where calibre most closely matches natural brow hair, and implanted with Choi pens under magnification to guarantee sub-millimetre angular precision.',
      ro: 'Sprânceana este zona cea mai dificilă din punct de vedere tehnic în restaurarea capilară. Spre deosebire de firul de pe scalp, foliculii sprâncenei trebuie implantați la unghiuri acute de 20 până la 30 de grade — și în cadrul fiecărei sprâncene, direcția se schimbă continuu pe trei vectori anatomici: capul medial, arcul corpului și coada laterală. O deviere de chiar 5 grade produce un aspect nefiresc detectabil vizual. Folosim exclusiv unități foliculare cu un singur fir, recoltate de la ceafă unde calibrul corespunde cel mai îndeaproape firului natural de sprânceană, și implantate cu stilouri Choi sub mărire pentru a garanta precizie angulară sub-milimetrică.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'Eyebrow & Hair Transplant Specialist · Precision Angular Technique · Meva Clinic',
        ro: 'Specialist Transplant Sprâncene & Păr · Tehnică Angulară de Precizie · Meva Clinic',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    technicalDetail: {
      en: [
        {
          zone: 'Donor Site Selection',
          technique: 'Nape (Occipital Fringe)',
          detail: 'Nape hair has the finest calibre of any scalp region — typically 0.04–0.06 mm — closely matching the diameter of natural brow hair. Single-hair FUE extraction from this zone minimises donor site visibility and ensures the transplanted hairs lie flat without bulk.',
        },
        {
          zone: 'Angular Implantation',
          technique: '20–30° Directional Precision',
          detail: 'Three anatomical vectors govern a natural brow: the medial head points upward and slightly outward (25–30°), the body follows the brow arch at 15–20°, and the lateral tail sweeps downward at 5–10°. Dr. Harun maps each zone individually and implants every graft at its vector-specific angle using a fine-gauge Choi pen under 3× magnification.',
        },
      ],
      ro: [
        {
          zone: 'Selectarea Zonei Donoare',
          technique: 'Ceafa (Franja Occipitală)',
          detail: 'Părul de la ceafă are cel mai fin calibru din orice regiune a scalpului — de obicei 0,04–0,06 mm — corespunzând îndeaproape diametrului firului natural de sprânceană. Extracția FUE cu un singur fir din această zonă minimizează vizibilitatea zonei donoare și asigură că firele transplantate stau plat fără volum.',
        },
        {
          zone: 'Implantare Angulară',
          technique: 'Precizie Direcțională 20–30°',
          detail: 'Trei vectori anatomici guvernează o sprânceană naturală: capul medial indică în sus și ușor în exterior (25–30°), corpul urmează arcul sprâncenei la 15–20°, iar coada laterală se îndreaptă în jos la 5–10°. Dr. Harun cartografiază fiecare zonă individual și implantează fiecare grefă la unghiul specific vectorului folosind un stilou Choi cu calibru fin sub mărire 3×.',
        },
      ],
    },

    steps: [
      { en: 'Brow symmetry design using golden ratio digital mapping', ro: 'Design simetrie sprânceană folosind cartografiere digitală raport de aur' },
      { en: 'Nape donor zone shaving and local anaesthesia', ro: 'Tunderea zonei donoare de la ceafă și anestezie locală' },
      { en: 'Single-hair FUE extraction from nape (fine-calibre follicles only)', ro: 'Extracție FUE cu un singur fir de la ceafă (exclusiv foliculi cu calibru fin)' },
      { en: 'Directional Choi Pen implantation at 20–30° per anatomical zone under magnification', ro: 'Implantare direcțională cu Stiloul Choi la 20–30° per zonă anatomică sub mărire' },
      { en: 'Bio-serum application + 6-month shaping consultation', ro: 'Aplicare bio-ser + consultație de modelare la 6 luni' },
    ],

    advantages: [
      { en: 'Permanent results — no maintenance required', ro: 'Rezultate permanente — fără întreținere necesară' },
      { en: '20–30° precision angles = undetectable artificial appearance', ro: 'Unghiuri de precizie 20–30° = aspect artificial nedetectabil' },
      { en: 'Fine-calibre nape donor hair = natural brow texture', ro: 'Păr donator fin de la ceafă = textură naturală a sprâncenei' },
      { en: 'Golden ratio symmetry design included', ro: 'Design simetrie raport de aur inclus' },
      { en: 'Day procedure — return to normal activity next day', ro: 'Procedură de zi — revenire la activitate normală a doua zi' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '2 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: '1–2 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '2 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: '1–2 Zile' },
    },

    references: [
      'Rose, P.T. (2024). Eyebrow Transplantation: Principles of Angular and Directional Precision. JHRS.',
      'Cotsarelis, G. et al. (2025). Donor Site Selection for Eyebrow Reconstruction: Nape vs Scalp Comparison. Dermatologic Surgery.',
      'ISHRS Best Practices for Facial Hair Restoration (2025 Edition).',
    ],
  },
];

/**
 * Helper: find treatment by EN or RO slug
 */
export const findTreatment = (slug) =>
  TREATMENTS.find(t => t.slug === slug || t.roSlug === slug) || null;

export default TREATMENTS;
