// andrologyData.js
const t = (en, ro) => ({ en, ro });

export const ANDROLOGY_METHODS = [
  {
    id: 'ligamentolysis', icon: '📏',
    name: t('Ligamentolysis (Length Extension)', 'Ligamentolizā (Extensie Lungime)'),
    goal: t('Length', 'Lungime'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('General / Spinal', 'Generală / Spinală'),
    recovery: t('4–6 weeks (sexual/exercise abstinence required)', '4–6 săptămâni (necesită abstinență sexuală/sportivă)'),
    duration: t('Permanent', 'Permanent'),
    summary: t(
      'The suspensory ligament anchors the internal shaft to the pubic bone, concealing 3–5 cm of penile length. Surgical division of this ligament allows the internal segment to advance externally. Combined with fat grafting or V-Y advancement flasplasty to prevent retraction. Visible flaccid length improvement typically ranges between 2–4 cm, depending entirely on individual ligament anatomy and surgeon assessment during consultation.',
      'Ligamentul suspensor ancorează tijul intern la osul pubian, ascunzând 3–5 cm din lungimea penisului. Secțiunea chirurgicală a acestui ligament permite segmentului intern să avanseze extern. Combinat cu grefare de grăsime sau plastie de avansare V-Y pentru prevenirea retracției. Îmbunătățirea lungimii flascide variază de regulă între 2–4 cm, în funcție de anatomia individuală a ligamentului și de evaluarea chirurgului în cadrul consultației.'
    ),
    isForMe: t(
      'Best for men whose primary concern is flaccid length, with BMI < 30 and adequate penile shaft length on internal examination.',
      'Cel mai potrivit pentru bărbați al căror interes principal este lungimea flascidă, cu IMC < 30 și lungime adecvată a tijului penian la examinare internă.'
    ),
    mevaNote: t(
      'Performed by urologist-andrologist team. V-Y plasty protocol minimises retraction risk. 12-month stretching protocol provided.',
      'Realizat de echipa urolog-androlog. Protocol plastie V-Y minimizează riscul de retracție. Protocol de stretching 12 luni furnizat.'
    ),
  },
  {
    id: 'fat-injection', icon: '💉',
    name: t('Autologous Fat Injection (Girth)', 'Injecție Grăsime Autologă (Grosime)'),
    goal: t('Girth', 'Grosime'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('Local / Sedation', 'Locală / Sedare'),
    recovery: t('4–6 weeks (sexual/exercise abstinence required)', '4–6 săptămâni (necesită abstinență sexuală/sportivă)'),
    duration: t('Permanent (with touch-up)', 'Permanent (cu retușuri)'),
    summary: t(
      "Fat harvested by VASER liposuction from the patient's own donor site (abdomen/flanks), processed via Lipogems or Coleman technique, and micro-injected circumferentially into the penile shaft subcutaneous layer. Fat survival: 60–70% at 12 months. Circumference improvement typically ranges between 2–4 cm, depending on fat graft retention, tissue anatomy, and surgeon assessment.",
      'Grăsimea recoltată prin liposucție VASER din zona donatoare proprie (abdomen/flancare), procesată prin tehnica Lipogems sau Coleman, și micro-injectată circumferențial în stratul subcutanat al tijului penian. Supraviețuire grăsime: 60–70% la 12 luni. Îmbunătățirea circumferinței variază de regulă între 2–4 cm, în funcție de retenția grefei de grăsime, anatomie și evaluarea chirurgului.'
    ),
    isForMe: t(
      'Ideal for men prioritising girth over length, with sufficient donor fat. Most natural feel — uses own tissue. Best combined with ligamentolysis for complete enhancement.',
      'Ideal pentru bărbații care prioritizează grosimea față de lungime, cu grăsime donatoare suficientă. Cel mai natural — folosește propriul țesut. Cel mai bine combinat cu ligamentoliza pentru augmentare completă.'
    ),
    mevaNote: t(
      'VASER fat harvest for highest graft viability. Coleman micro-injection technique. 3D circumference mapping pre and post-op.',
      'Recoltare grăsime VASER pentru viabilitate maximă. Tehnică micro-injecție Coleman. Cartografiere circumferință 3D pre și post-op.'
    ),
  },
  {
    id: 'hyaluronic-acid', icon: '⚡',
    name: t('Hyaluronic Acid (Non-Surgical Girth)', 'Acid Hialuronic (Grosime Non-Chirurgicală)'),
    goal: t('Girth', 'Grosime'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('Topical Cream', 'Cremă Topică'),
    recovery: t('7–14 days (sexual abstinence required)', '7–14 zile (necesită abstinență sexuală)'),
    duration: t('12–18 months', '12–18 luni'),
    summary: t(
      'Cross-linked high-density hyaluronic acid (Juvederm Voluma / Restylane Lyft grade) is injected in a fan-technique pattern along the penile shaft in a 15–20 minute clinic procedure. An approximate immediate circumference increase of 2–3 cm may be achieved, depending on the volume injected, tissue response, and doctor assessment during consultation. No downtime. Fully reversible with hyaluronidase. Ideal for patients wanting a trial before committing to permanent surgery.',
      'Acidul hialuronic reticulat de înaltă densitate (grad Juvederm Voluma / Restylane Lyft) este injectat în pattern de evantai de-a lungul tijului penian într-o procedură clinică de 15–20 minute. O creștere aproximativă imediată a circumferinței de 2–3 cm poate fi obținută, în funcție de volumul injectat, răspunsul țesutului și evaluarea medicului. Fără downtime. Complet reversibil cu hialuronidază. Ideal pentru pacienții care doresc un test înainte de chirurgia permanentă.'
    ),
    isForMe: t(
      'Best for men wanting immediate results without surgery or downtime. Also ideal as a "preview" before fat injection. Reversible, repeatable, minimal downtime.',
      'Cel mai potrivit pentru bărbații care doresc rezultate imediate fără chirurgie sau timp de recuperare. Ideal și ca "previzualizare" înaintea injecției de grăsime. Reversibil, repetabil, recuperare minimă.'
    ),
    mevaNote: t(
      'Juvederm Voluma / Restylane Lyft only — medical-grade. 15-min procedure. Topical anaesthetic cream. Same-day discharge.',
      'Exclusiv Juvederm Voluma / Restylane Lyft — grad medical. Procedură 15 min. Cremă anestezică topică. Externare în aceeași zi.'
    ),
  },
  {
    id: 'dermal-graft', icon: '🔬',
    name: t('Dermal Graft (Permanent Girth)', 'Grefă Dermică (Grosime Permanentă)'),
    goal: t('Girth', 'Grosime'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('General / Spinal', 'Generală / Spinală'),
    recovery: t('4–6 weeks (sexual/exercise abstinence required)', '4–6 săptămâni (necesită abstinență sexuală/sportivă)'),
    duration: t('Permanent', 'Permanent'),
    summary: t(
      'A split-thickness or acellular dermal matrix (Alloderm) graft is placed circumferentially beneath the penile skin, providing uniform, homogeneous circumferential augmentation. Unlike fat (which can migrate or be resorbed unevenly), dermal matrix maintains consistent shape. Typical circumference increase ranges between 1.5–2.5 cm. Girth improvement varies by anatomy, technique, tissue response, and surgeon assessment; the doctor will explain realistic expectations during consultation.',
      'O grefă de matrice dermică de grosime despicată sau acelulară (Alloderm) este plasată circumferențial sub pielea penisului, oferind augmentare circumferențială uniformă și omogenă. Spre deosebire de grăsime (care poate migra sau fi reabsorbită neuniform), matricea dermică menține o formă consistentă. Îmbunătățirea circumferinței variază de regulă între 1.5–2.5 cm, depinzând de anatomie, tehnică, răspunsul țesutului și evaluarea chirurgului; așteptările realiste vor fi discutate în timpul consultației.'
    ),
    isForMe: t(
      'Best for men wanting permanent, homogeneous girth — especially those who have had previous fat injection with uneven resorption, or who want a single definitive procedure.',
      'Cel mai potrivit pentru bărbații care doresc grosime permanentă și omogenă — în special cei care au avut injecție de grăsime anterioară cu resorbție neuniformă, sau care doresc o singură procedură definitivă.'
    ),
    mevaNote: t(
      'Alloderm / human acellular dermal matrix (FDA-cleared). Uniform circumferential placement. Sensation fully preserved. Long-term homogeneous result.',
      'Alloderm / matrice dermică acelulară umană (aprobată FDA). Plasare circumferențială uniformă. Senzație complet conservată. Rezultat omogen pe termen lung.'
    ),
  },
  {
    id: 'p-shot', icon: '🩸',
    name: t('P-Shot (PRP — Platelet Rich Plasma)', 'P-Shot (PRP — Plasmă Bogată în Trombocite)'),
    goal: t('Performance & Sensitivity', 'Performanță & Sensibilitate'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('Topical Cream', 'Cremă Topică'),
    recovery: t('2–3 days (sexual abstinence recommended)', '2–3 zile (recomandă abstinență sexuală)'),
    duration: t('6–12 months (repeat recommended)', '6–12 luni (repetare recomandată)'),
    summary: t(
      "Patient's own blood is centrifuged to concentrate platelets (PRP), then injected into the corpus cavernosum and glans. The released growth factors (PDGF, VEGF, TGF-β) aim to support angiogenesis and Schwann cell proliferation — designed to support erectile quality, sensitivity, and ejaculatory control. Individual response varies by patient; not a size procedure.",
      "Sângele propriu al pacientului este centrifugat pentru a concentra trombocitele (PRP), apoi injectat în corpul cavernos și gland. Factorii de creștere eliberați (PDGF, VEGF, TGF-β) stimulează angiogeneza și regenerarea locală — având ca scop susținerea calității erecției, a sensibilității și a controlului ejaculației. Răspunsul individual variază de la pacient la pacient; nu este o procedură de mărire."
    ),
    isForMe: t(
      'For men experiencing reduced erectile quality, sensitivity loss, mild ED, or performance decline — without structural penile pathology. Best combined with ESWT for synergistic effect.',
      'Pentru bărbați cu calitate erecțională redusă, pierderea sensibilității, DE ușoară sau declin al performanței — fără patologie peniană structurală. Cel mai bine combinat cu ESWT pentru efect sinergic.'
    ),
    mevaNote: t(
      'Double-spin centrifugation for 5× platelet concentration. Combined with topical anaesthetic. Can be combined with ESWT same session. No downtime.',
      'Centrifugare dublă pentru concentrație trombocite 5×. Combinat cu anestezic topic. Poate fi combinat cu ESWT în aceeași sesiune. Fără downtime.'
    ),
  },
  {
    id: 'glans-augmentation', icon: '🎯',
    name: t('Glans Augmentation (Head Filler)', 'Augmentare Gland (Filler Cap)'),
    goal: t('Sensitivity & Proportion', 'Sensibilitate & Proporție'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('Topical Cream', 'Cremă Topică'),
    recovery: t('7–14 days (sexual abstinence required)', '7–14 zile (necesită abstinență sexuală)'),
    duration: t('12–18 months', '12–18 luni'),
    summary: t(
      'Hyaluronic acid is injected precisely into the glans (head) to: (1) increase size and projection proportional to shaft augmentation, (2) reduce sensitivity in patients with premature ejaculation (sensory dampening effect), or (3) improve visual symmetry. Technique requires sub-glanular injection depth control to avoid vascular structures.',
      'Acidul hialuronic este injectat precis în gland pentru: (1) creșterea dimensiunii și proiecției proporționale cu augmentarea tijului, (2) reducerea sensibilității la pacienți cu ejaculare prematură (efect de amortizare senzorială), sau (3) îmbunătățirea simetriei vizuale. Tehnica necesită controlul adâncimii injecției sub-glanulare pentru a evita structurile vasculare.'
    ),
    isForMe: t(
      'For men who have had shaft augmentation and want proportional glans volume, or those with premature ejaculation seeking sensory modulation without medication.',
      'Pentru bărbații care au avut augmentare a tijului și doresc volum glanular proporțional, sau cei cu ejaculare prematură care caută modulare senzorială fără medicație.'
    ),
    mevaNote: t(
      'Andrologist with specific glans injection certification only. Vascular safety protocol. Hyaluronidase on standby. 15-minute procedure.',
      'Exclusiv androlog cu certificare specifică injecție gland. Protocol siguranță vasculară. Hialuronidază în standby. Procedură 15 minute.'
    ),
  },
  {
    id: 'eswt', icon: '〰️',
    name: t('ESWT (Shockwave Therapy)', 'ESWT (Terapie prin Unde de Șoc)'),
    goal: t('Erectile Function', 'Funcție Erectilă'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('None required', 'Nu necesită'),
    recovery: t('0 days', '0 zile'),
    duration: t('12–24 months', '12–24 luni'),
    summary: t(
      'Low-intensity extracorporeal shockwave therapy delivers acoustic pulses to the corpora cavernosa, triggering neoangiogenesis (new blood vessel formation) and nerve regeneration. Clinically proven for vasculogenic erectile dysfunction: 6-session protocol (2× per week) achieves sustained improvement in IIEF-5 scores in 70–80% of mild-moderate ED patients. No pain, no injections, no downtime.',
      'Terapia prin unde de șoc extracorporeale de intensitate joasă livrează impulsuri acustice la corpurile cavernoase, declanșând neoangiogeneza (formarea de noi vase de sânge) și regenerarea nervoasă. Clinic dovedită pentru disfuncția erectilă vasculogenă: protocol 6 sesiuni (2× pe săptămână) obține îmbunătățire susținută a scorurilor IIEF-5 la 70–80% din pacienții cu DE ușoară-moderată.'
    ),
    isForMe: t(
      'For men with vasculogenic or psychogenic erectile dysfunction (ED), Peyronie\'s disease (penile curvature), or those wanting to enhance P-Shot results. Not suitable for severe ED — consider penile prosthesis.',
      "Pentru bărbați cu disfuncție erectilă vasculogenă sau psihogenă, boala Peyronie (curbură peniană), sau cei care doresc să îmbunătățească rezultatele P-Shot. Nu este potrivit pentru DE severă — luați în considerare proteza peniană."
    ),
    mevaNote: t(
      'LI-ESWT Storz Medical device — gold standard clinical evidence. 6-session protocol. Combined with P-Shot for synergistic regenerative effect. Zero downtime.',
      'Dispozitiv LI-ESWT Storz Medical — evidență clinică standard de aur. Protocol 6 sesiuni. Combinat cu P-Shot pentru efect regenerativ sinergic. Zero downtime.'
    ),
  },
  {
    id: 'penile-prosthesis', icon: '⚙️',
    name: t('Penile Prosthesis (Implant)', 'Proteză Peniană (Implant)'),
    goal: t('Permanent ED Solution', 'Soluție Permanentă DE'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('Spinal / General', 'Spinală / Generală'),
    recovery: t('4–6 weeks', '4–6 săptămâni'),
    duration: t('15–20 years (device warranty)', '15–20 ani (garanție dispozitiv)'),
    summary: t(
      'Inflatable 3-piece penile prosthesis (AMS 700 CX / Coloplast Titan) is the gold standard for severe ED unresponsive to PDE5 inhibitors, P-Shot, or ESWT. The device consists of two cylinders placed in the corpora cavernosa, a scrotal pump, and an abdominal reservoir. Patient-controlled inflation provides a natural erection on demand, deflating completely when not in use. 95% patient satisfaction at 10 years.',
      'Proteza peniană gonflabilă în 3 piese (AMS 700 CX / Coloplast Titan) este standardul de aur pentru DE severă care nu răspunde la inhibitori PDE5, P-Shot sau ESWT. Dispozitivul constă din două cilindri plasați în corpurile cavernoase, o pompă scrotală și un rezervor abdominal. Inflarea controlată de pacient oferă erecție naturală la cerere. Satisfacție pacient 95% la 10 ani.'
    ),
    isForMe: t(
      'For men with severe ED (diabetes, radical prostatectomy, Peyronie\'s, vascular disease) for whom all other treatments have failed. Irreversible — natural erection function is permanently replaced by the device.',
      "Pentru bărbații cu DE severă (diabet, prostatectomie radicală, Peyronie, boală vasculară) pentru care toate celelalte tratamente au eșuat. Ireversibil — funcția erecțională naturală este permanent înlocuită de dispozitiv."
    ),
    mevaNote: t(
      'AMS 700 CX / Coloplast Titan — 15-year device warranty. Urology subspecialist surgeon only. Antibiotic-coated device. 95% 10-year satisfaction data.',
      'AMS 700 CX / Coloplast Titan — garanție dispozitiv 15 ani. Exclusiv chirurg subspecialist urologie. Dispozitiv cu acoperire antibiotică. Date satisfacție 95% la 10 ani.'
    ),
  },
];

export const DECISION_GUIDE = [
  {
    need: { en: 'I want MORE LENGTH (flaccid)', ro: 'Doresc LUNGIME MAI MARE (flascid)' },
    primary: 'Ligamentolysis',
    secondary: { en: '+ Fat Injection for complete result', ro: '+ Injecție Grăsime pentru rezultat complet' },
    type: 'length',
  },
  {
    need: { en: 'I want MORE GIRTH — non-surgical', ro: 'Doresc GROSIME MAI MARE — non-chirurgical' },
    primary: 'Hyaluronic Acid',
    secondary: { en: 'Reversible in 15 min. No downtime.', ro: 'Reversibil în 15 min. Fără downtime.' },
    type: 'girth',
  },
  {
    need: { en: 'I want MORE GIRTH — permanent natural', ro: 'Doresc GROSIME MAI MARE — permanent natural' },
    primary: 'Fat Injection (Autologous)',
    secondary: { en: 'Own tissue, 60–70% long-term survival', ro: 'Propriul țesut, supraviețuire 60–70% termen lung' },
    type: 'girth',
  },
  {
    need: { en: 'I want MORE GIRTH — permanent uniform', ro: 'Doresc GROSIME MAI MARE — uniform permanent' },
    primary: 'Dermal Graft (Alloderm)',
    secondary: { en: 'Most homogeneous long-term shape', ro: 'Forma cea mai omogenă pe termen lung' },
    type: 'girth',
  },
  {
    need: { en: 'I want BETTER ERECTIONS (mild–moderate ED)', ro: 'Doresc ERECȚII MAI BUNE (DE ușoară–moderată)' },
    primary: 'ESWT + P-Shot (combined)',
    secondary: { en: '70–80% IIEF improvement. No surgery.', ro: '70–80% îmbunătățire IIEF. Fără chirurgie.' },
    type: 'function',
  },
  {
    need: { en: 'I want SENSITIVITY CONTROL or glans proportion', ro: 'Doresc CONTROL SENSIBILITATE sau proporție gland' },
    primary: 'Glans Augmentation',
    secondary: { en: 'HA filler, 15-min. Premature ejac. benefit.', ro: 'Filler HA, 15 min. Beneficiu ejaculare prematură.' },
    type: 'sensitivity',
  },
  {
    need: { en: 'I want BOTH LENGTH + GIRTH — complete result', ro: 'Doresc LUNGIME + GROSIME — rezultat complet' },
    primary: 'Ligamentolysis + Fat Injection',
    secondary: { en: 'Combined session. Best overall outcome.', ro: 'Sesiune combinată. Cel mai bun rezultat global.' },
    type: 'combined',
  },
  {
    need: { en: 'I have SEVERE ED — no response to treatment', ro: 'Am DE SEVERĂ — fără răspuns la tratament' },
    primary: 'Penile Prosthesis (AMS 700 / Titan)',
    secondary: { en: '95% satisfaction. 15-yr device warranty.', ro: 'Satisfacție 95%. Garanție 15 ani.' },
    type: 'prosthesis',
  },
];

export default ANDROLOGY_METHODS;
