// plasticData.js — 15 Meva Clinic Plastic Surgery Treatments
const t = (en, ro) => ({ en, ro });

export const PLASTIC = [
  {
    id: 'rhinoplasty', icon: '👃',
    name: t('Rhinoplasty', 'Rinoplastie'),
    tag: t('Piezo Ultrasonic · No Bruising', 'Piezo Ultrasonic · Zero Vânătăi'),
    isForMe: t(
      'Ideal if you have a nasal hump, wide tip, deviated septum, or asymmetry affecting your breathing or confidence.',
      'Ideal dacă aveți cocoașă nazală, vârf larg, sept deviat sau asimetrie care vă afectează respirația sau încrederea.'
    ),
    techniques: t(
      'Piezo (ultrasonic) bone reshaping uses sound wave oscillation instead of chisels — preserving periosteum, nerves and vessels. Zero bruising, 40% faster recovery. Combined with closed-approach tip refinement for no external scar.',
      'Tehnica Piezo (ultrasonică) remodeleaza osul nazal prin oscilație cu unde sonore în loc de dălți — conservând periostul, nervii și vasele. Zero vânătăi, recuperare cu 40% mai rapidă. Combinată cu rafinare vârf prin abordare închisă — fără cicatrice externă.'
    ),
    mevaQuality: t(
      'Board-certified rhinoplasty specialist with 15+ years. JCI-accredited theatre, 3D nasal simulation pre-op, revision rate below 3%.',
      'Specialist rinoplastie certificat de consiliu cu 15+ ani experiență. Sală JCI-acreditată, simulare 3D nazală preoperatorie, rată revizie sub 3%.'
    ),
    recovery: t('7–10 days', '7–10 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'liposuction', icon: '✂️',
    name: t('Liposuction (VASER & Laser)', 'Liposucție (VASER & Laser)'),
    tag: t('Ultrasound Body Sculpting', 'Sculptare Corporală cu Ultrasunete'),
    isForMe: t(
      'Suitable for patients near ideal weight with localised fat resistant to diet and exercise — abdomen, flanks, thighs, arms, neck.',
      'Potrivit pentru pacienți aproape de greutatea ideală cu grăsime localizată rezistentă la dietă și exerciții — abdomen, flancare, coapse, brațe, gât.'
    ),
    techniques: t(
      'VASER uses ultrasonic probes to selectively emulsify fat cells while preserving blood vessels and nerves — enabling smoother sculpting and less bruising vs. traditional lipo. Laser-assisted (Smartlipo) additionally tightens overlying skin via collagen stimulation.',
      'VASER utilizează sonde ultrasonice pentru a emulsiona selectiv celulele adipoase păstrând vasele și nervii — permitând sculptare mai fină și mai puține vânătăi vs. lipo tradițional. Laser-asistat (Smartlipo) strânge suplimentar pielea de deasupra prin stimularea colagenului.'
    ),
    mevaQuality: t(
      'High-definition VASER available. All procedures in JCI OR with anaesthesia team. Compression garment protocol and lymphatic drainage included.',
      'VASER high-definition disponibil. Toate procedurile în sala JCI cu echipă de anestezie. Protocol vestă de compresie și drenaj limfatic incluse.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'breast-augmentation', icon: '🌸',
    name: t('Breast Augmentation', 'Augmentare Mamară'),
    tag: t('Implant or Fat Transfer', 'Implant sau Transfer de Grăsime'),
    isForMe: t(
      'For patients seeking increased volume, improved symmetry, or restoration of breast fullness after pregnancy or weight loss.',
      'Pentru paciente care doresc volum crescut, simetrie îmbunătățită sau refacerea volumului mamar după sarcină sau pierdere ponderală.'
    ),
    techniques: t(
      'Silicone cohesive-gel implants (Motiva, Mentor) placed via inframammary fold — minimal scarring, maximum projection control. Fat transfer (lipofilling) for patients preferring a natural option using their own tissue, ideal for 1–2 cup increases.',
      'Implanturi cu gel siliconic coheziv (Motiva, Mentor) plasate prin pliul submamar — cicatrice minimă, control maxim al proiecției. Transfer de grăsime (lipofilling) pentru paciente care preferă o opțiune naturală, ideal pentru creșteri de 1–2 cupe.'
    ),
    mevaQuality: t(
      'Motiva Ergonomix implants certified. 3D volumetric simulation pre-op. 10-year implant warranty. Drain-free technique available.',
      'Implanturi Motiva Ergonomix certificate. Simulare volumetrică 3D preoperatorie. Garanție implant 10 ani. Tehnică fără tuburi de dren disponibilă.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'blepharoplasty', icon: '👁️',
    name: t('Blepharoplasty', 'Blefaroplastie'),
    tag: t('Eye Rejuvenation · Upper & Lower', 'Rejuvenare Oculară · Superior & Inferior'),
    isForMe: t(
      'For patients with drooping upper eyelids affecting vision, puffy lower lids, or tired-looking eyes that misrepresent their energy.',
      'Pentru paciente cu pleoape superioare căzute care afectează vederea, pleoape inferioare umflate sau ochi cu aspect obosit.'
    ),
    techniques: t(
      'Upper blepharoplasty removes excess skin via a natural lid-crease incision (invisible scar). Lower blepharoplasty uses transconjunctival access — no external cut — to reposition or remove orbital fat. Combined with PRP for optimal skin tightening.',
      'Blefaroplastia superioară îndepărtează excesul de piele printr-o incizie în pliul natural al pleoapei (cicatrice invizibilă). Blefaroplastia inferioară utilizează acces transconjunctival — fără incizie externă — pentru repoziționarea sau eliminarea grăsimii orbitale.'
    ),
    mevaQuality: t(
      'Oculoplastic-trained surgeon. Can be combined with browlift or filler for full periorbital rejuvenation. Local anaesthesia option available.',
      'Chirurg cu formare oculoplastică. Poate fi combinată cu browlift sau filler pentru rejuvenare periorbitală completă. Opțiune anestezie locală disponibilă.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'abdominoplasty', icon: '🩹',
    name: t('Abdominoplasty (Tummy Tuck)', 'Abdominoplastie (Karın Germe)'),
    tag: t('Post-Bariatric Specialist Technique', 'Tehnică Specialist Post-Bariatric'),
    isForMe: t(
      'Ideal after major weight loss, post-bariatric surgery, or multiple pregnancies — for patients with excess abdominal skin and weakened rectus muscles.',
      'Ideal după pierdere ponderală majoră, chirurgie bariatrică sau sarcini multiple — pentru paciente cu exces de piele abdominală și mușchi recti slăbiți.'
    ),
    techniques: t(
      'Full abdominoplasty combines rectus muscle plication (closing the diastasis) with pan-abdominal skin resection and repositioning of the umbilicus. Mini-tummy tuck for localised lower pouch. Post-bariatric cases often require a circumferential body lift (belt lipectomy) to address the flanks and back simultaneously.',
      'Abdominoplastia completă combină plicatura mușchilor recți (închiderea diastazei) cu rezecția pielii pan-abdominale și repoziționarea buricului. Mini-tummy tuck pentru punga inferioară localizată. Cazurile post-bariatrice necesită adesea un body lift circumferențial pentru a aborda simultan flancurile și spatele.'
    ),
    mevaQuality: t(
      'Specialist in post-bariatric body contouring. Drain-free progressive tension suture technique. Scar minimisation protocol with silicone sheets included.',
      'Specialist în conturare corporală post-bariatrică. Tehnică de sutură cu tensiune progresivă fără dren. Protocol minimizare cicatrice cu folii siliconice inclus.'
    ),
    recovery: t('10–14 days', '10–14 zile'),
    stay: t('1–2 Nights', '1–2 Nopți'),
  },
  {
    id: 'facelift', icon: '✨',
    name: t('Facelift (Deep Plane)', 'Lifting Facial (Deep Plane)'),
    tag: t('15+ Year Natural Results', 'Rezultate Naturale 15+ Ani'),
    isForMe: t(
      'For patients over 40 with significant facial laxity, jowling, deep nasolabial folds, or neck banding who want lasting, natural-looking rejuvenation.',
      'Pentru paciente peste 40 de ani cu laxitate facială semnificativă, jowling, riduri nazolabiale adânci sau benzi cervicale care doresc întinerire durabilă și naturală.'
    ),
    techniques: t(
      'Deep Plane facelift releases and repositions the SMAS and underlying ligaments — not just the skin. This eliminates the pulled, windswept look of superficial techniques. Vertical vector lifting restores the anatomically correct youthful facial architecture. Results last 15–18 years vs. 5–7 for SMAS-only.',
      'Liftingul facial Deep Plane eliberează și repoziționează SMAS și ligamentele subiacente — nu doar pielea. Aceasta elimină aspectul tras al tehnicilor superficiale. Ridicarea pe vector vertical restaurează arhitectura facială tânără anatomic corectă. Rezultate durabile 15–18 ani vs 5–7 pentru SMAS-only.'
    ),
    mevaQuality: t(
      'Fellowship-trained deep plane surgeon. Combination with fat grafting for volume restoration. Twilight sedation available. No visible external scar protocol.',
      'Chirurg format cu fellowship în deep plane. Combinație cu grefă de grăsime pentru restaurare volum. Sedare ușoară disponibilă. Protocol cicatrice externă invizibilă.'
    ),
    recovery: t('10–14 days', '10–14 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'mastopexy', icon: '🌺',
    name: t('Mastopexy (Breast Lift)', 'Mastopexie (Ridicare Sâni)'),
    tag: t('Vertical Scar · Long-Lasting Shape', 'Cicatrice Verticală · Formă Durabilă'),
    isForMe: t(
      'For women with breast ptosis (drooping) after pregnancy, breastfeeding or weight loss who want lifted, youthful contour without necessarily increasing size.',
      'Pentru femei cu ptoză mamară după sarcină, alăptare sau pierdere ponderală care doresc un contur ridicat și tânăr fără a mări neapărat dimensiunea.'
    ),
    techniques: t(
      'Vertical (lollipop) mastopexy reshapes the breast parenchyma into a cone and fixes it to the chest wall — creating lasting upper pole fullness. Wise-pattern anchor incision for significant ptosis. Can be combined with implants (augmentation mastopexy) or fat transfer.',
      'Mastopexia verticală (lollipop) remodelează parenchimul mamar în formă de con și îl fixează la peretele toracic — creând plenitudine durabilă a polului superior. Incizie ancoră Wise-pattern pentru ptoze semnificative. Poate fi combinată cu implanturi sau transfer de grăsime.'
    ),
    mevaQuality: t(
      'Scar minimisation protocol. 3D breast simulation included. Drain-free technique. Surgical bra and follow-up kit provided.',
      'Protocol minimizare cicatrice. Simulare mamară 3D inclusă. Tehnică fără dren. Sutien chirurgical și kit follow-up furnizate.'
    ),
    recovery: t('7–10 days', '7–10 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'bbl', icon: '🍑',
    name: t('BBL (Brazilian Butt Lift)', 'BBL (Brazilian Butt Lift)'),
    tag: t('Natural Fat Transfer · Subfascial', 'Transfer Grăsime Naturală · Subfascial'),
    isForMe: t(
      'For patients wanting fuller, more projected buttocks using their own fat — especially those with flat or asymmetric gluteal contour.',
      'Pentru paciente care doresc fese mai pline și proiectate folosind propria grăsime — în special cele cu contur gluteal plat sau asimetric.'
    ),
    techniques: t(
      'Fat harvested via VASER liposuction from donor zones (abdomen, flanks, thighs), purified, and injected in the subcutaneous and subfascial plane — never intramuscular (SAFE BBL protocol eliminating pulmonary embolism risk). 3D gluteal projection mapping pre-op.',
      'Grăsimea este recoltată prin liposucție VASER din zonele donatoare (abdomen, flancare, coapse), purificată și injectată în planul subcutanat și subfascial — niciodată intramuscular (protocol SAFE BBL eliminând riscul de embolie pulmonară). Cartografiere proiecție gluteală 3D preoperatorie.'
    ),
    mevaQuality: t(
      'SAFE BBL protocol certified. VASER fat harvest for highest graft viability. Specialised post-op positioning protocol. Fat survival rate 70–80%.',
      'Protocol SAFE BBL certificat. Recoltare grăsime VASER pentru viabilitate maximă. Protocol de poziționare postoperatorie specializat. Rată supraviețuire grăsime 70–80%.'
    ),
    recovery: t('7–10 days', '7–10 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'gynecomastia', icon: '🫀',
    name: t('Gynecomastia (Male Chest)', 'Ginecomastie (Torace Masculin)'),
    tag: t('Glandular + Lipomatous · Scarless', 'Glandular + Lipoame · Fără Cicatrice'),
    isForMe: t(
      'For men with enlarged breast tissue — whether glandular (true gynecomastia) or fatty (pseudogynecomastia) — causing physical discomfort or psychological distress.',
      'Pentru bărbați cu țesut mamar mărit — fie glandular (ginecomastie adevărată) fie grăsos (pseudoginecomastie) — cauzând discomfort fizic sau suferință psihologică.'
    ),
    techniques: t(
      'Glandular gynecomastia: periareolar excision of breast disc (2cm semi-circular scar, nearly invisible at 12 months). Lipomatous component: VASER liposuction. Combined cases: both techniques in one session. Ultrasound classification (Simon Grade) determines approach.',
      'Ginecomastie glandulară: excizie periareolară a discului mamar (cicatrice semicirculară 2cm, aproape invizibilă la 12 luni). Componentă lipomaasă: liposucție VASER. Cazuri combinate: ambele tehnici într-o singură sesiune. Clasificarea ecografică (Gradul Simon) determină abordarea.'
    ),
    mevaQuality: t(
      'Pre-op ultrasound classification. Simon Grade assessment. Compression vest 6 weeks. Structured follow-up, patient satisfaction monitoring, and individualized recovery guidance at Meva.',
      'Clasificare ecografică preoperatorie. Evaluare Grad Simon. Vestă compresie 6 săptămâni. Urmărire structurată, monitorizare a satisfacției pacienților și ghidare individualizată a recuperării la Meva.'
    ),
    recovery: t('3–5 days', '3–5 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'mommy-makeover', icon: '👶',
    name: t('Mommy Makeover', 'Mommy Makeover'),
    tag: t('Breast + Abdomen + Contour · 1 Session', 'Sâni + Abdomen + Contur · 1 Sesiune'),
    isForMe: t(
      'For mothers who have completed their family and want to restore their pre-pregnancy body in a single surgical episode — addressing breasts, abdomen and localised fat simultaneously.',
      'Pentru mame care și-au finalizat familia și doresc să-și restaureze corpul de dinainte de sarcină într-un singur episod chirurgical — abordând simultan sânii, abdomenul și grăsimea localizată.'
    ),
    techniques: t(
      'Typically combines mastopexy ± augmentation with full abdominoplasty and VASER liposuction of flanks and thighs — all performed in one 4–6 hour session under general anaesthesia. Surgical sequence optimised to minimise total OR time and blood loss.',
      'Combină de obicei mastopexia ± augmentare cu abdominoplastie completă și liposucție VASER a flancurilor și coapselor — toate efectuate într-o sesiune de 4–6 ore sub anestezie generală. Secvența chirurgicală optimizată pentru minimizarea timpului total și a pierderii de sânge.'
    ),
    mevaQuality: t(
      'Multi-surgeon coordination. ICU-monitored recovery. Lymphatic drainage and compression included. Average saving vs. individual procedures: 35%.',
      'Coordonare multi-chirurg. Recuperare monitorizată UCI. Drenaj limfatic și compresie incluse. Economie medie față de proceduri individuale: 35%.'
    ),
    recovery: t('14–21 days', '14–21 zile'),
    stay: t('2 Nights', '2 Nopți'),
  },
  {
    id: 'otoplasty', icon: '👂',
    name: t('Otoplasty (Ear Pinning)', 'Otoplastie (Corectare Urechi)'),
    tag: t('Permanent · 90-Min Procedure', 'Permanentă · Procedură 90 Min'),
    isForMe: t(
      'For adults and children over 6 with prominent, asymmetric or abnormally shaped ears causing self-consciousness.',
      'Pentru adulți și copii peste 6 ani cu urechi proeminente, asimetrice sau cu formă anormală cauzând complexe.'
    ),
    techniques: t(
      'Mustardé sutures recreate the antihelical fold via posterior incision (hidden behind the ear). Furnas sutures set the conchomastoid angle. No cartilage excision needed in most cases. Permanent, stable results.',
      'Suturile Mustardé recreează pliul antihelical printr-o incizie posterioară (ascunsă după ureche). Suturile Furnas stabilesc unghiul conchomastoidian. Nu este nevoie de excizie cartilaj în majoritatea cazurilor. Rezultate permanente și stabile.'
    ),
    mevaQuality: t(
      'Local anaesthesia for adults, general for children. Same-day discharge. Protective headband 3 weeks. Scar invisible behind ear.',
      'Anestezie locală pentru adulți, generală pentru copii. Externare în aceeași zi. Bandă protectoare 3 săptămâni. Cicatrice invizibilă după ureche.'
    ),
    recovery: t('2–3 days', '2–3 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'body-lift', icon: '🦵',
    name: t('Thigh & Arm Lift', 'Lifting Coapse & Brațe'),
    tag: t('Post-Weight Loss · Skin Excess', 'Post-Slăbire · Exces de Piele'),
    isForMe: t(
      'For patients after significant weight loss (including post-bariatric) with excess skin on inner thighs or upper arms (bat wing deformity) causing skin fold infections or mobility issues.',
      'Pentru pacienți după pierdere ponderală semnificativă (inclusiv post-bariatric) cu exces de piele pe coapsele interioare sau brațele superioare (deformitate aripă de liliac) cauzând infecții ale pliului cutanat sau probleme de mobilitate.'
    ),
    techniques: t(
      'Medial thigh lift: incision in the groin crease (vertical extension for severe cases). Brachioplasty: posterior upper arm incision extended to axilla. Both use progressive tension sutures to anchor skin to fascia — minimising scar stretch and reducing drain use.',
      'Lifting medial al coapselor: incizie în pliul inghinal (extensie verticală pentru cazuri severe). Brahioplastie: incizie posterioară braț superior extinsă la axilă. Ambele utilizează suturi cu tensiune progresivă pentru a ancora pielea la fascie — minimizând întinderea cicatricei și reducând utilizarea drenurilor.'
    ),
    mevaQuality: t(
      'Post-bariatric specialist. Combined procedures in one session available. Scar camouflage placement. Compression garment protocol 6 weeks.',
      'Specialist post-bariatric. Proceduri combinate într-o sesiune disponibile. Plasare cicatrice camuflată. Protocol vestă compresie 6 săptămâni.'
    ),
    recovery: t('10–14 days', '10–14 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'mentoplasty', icon: '🫱',
    name: t('Mentoplasty (Chin Augmentation)', 'Mentoplastie (Augmentare Bărbie)'),
    tag: t('Profiloplasty · Facial Harmony', 'Profiloplastie · Armonie Facială'),
    isForMe: t(
      'For patients with chin deficiency affecting facial profile balance — often combined with rhinoplasty (profiloplasty) for harmonious profile realignment.',
      'Pentru pacienți cu deficiență mentonieră afectând echilibrul profilului facial — adesea combinată cu rinoplastia (profiloplastie) pentru realinierea armonioasă a profilului.'
    ),
    techniques: t(
      'Silicone chin implant via intraoral or submental incision — no visible scar. Genioplasty (sliding osteotomy) for larger corrections: the chin bone is repositioned and fixed with titanium plates, offering permanent anatomical correction. 3D cephalometric analysis pre-op.',
      'Implant siliconic mentonier prin incizie intraoralā sau submentonieriā — fārā cicatrice vizibilā. Genioplastia (osteotomia de alunecare) pentru corecții mai mari: osul mentonier este repoziționat și fixat cu plāci titanice, oferind corecție anatomicā permanentā. Analizā cefalometricā 3D preoperatorie.'
    ),
    mevaQuality: t(
      '3D cephalometric profile analysis. Silicone Sientra/Implantech implants. Can be combined with rhinoplasty in same session. Permanent results.',
      'Analiza profilului cefalometric 3D. Implanturi siliconice Sientra/Implantech. Poate fi combinată cu rinoplastia în aceeași sesiune. Rezultate permanente.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'labiaplasty', icon: '🌸',
    name: t('Genital Aesthetics (Female)', 'Estetică Genitală (Feminină)'),
    tag: t('Labiaplasty · Vaginoplasty · Confidential', 'Labiioplastie · Vaginoplastie · Confidențial'),
    isForMe: t(
      'For women with labial hypertrophy causing physical discomfort during activity or intimacy, or seeking functional restoration after childbirth (vaginoplasty).',
      'Pentru femei cu hipertrofie labialā cauzând disconfort fizic în timpul activitāților sau intimitatii, sau care doresc restaurare funcționalā dupā naștere (vaginoplastie).'
    ),
    techniques: t(
      'Labiaplasty: linear or wedge resection of excess labia minora tissue under local anaesthesia — preserving nerve endings for sensation. Vaginoplasty: posterior colporrhaphy to tighten the vaginal introitus and perineal body, restoring functional tone. Both performed in day clinic.',
      'Labiioplastia: rezecție liniariā sau în formā de V a excesului de țesut labii mici sub anestezie localā — conservând terminații nervoase pentru sensație. Vaginoplastia: colporafie posterioardā pentru strângerea introitusului vaginal și a corpului perineal, restaurând tonusul funcțional.'
    ),
    mevaQuality: t(
      'Female surgeon option available. Complete confidentiality protocol. Local anaesthesia — no hospital stay. Return to normal activity in 5–7 days.',
      'Opțiune chirurg femeie disponibilā. Protocol confidențialitate completā. Anestezie localā — fārā spitalizare. Revenire la activitate normalā în 5–7 zile.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'post-bariatric', icon: '⚕️',
    name: t('Post-Bariatric Body Contouring', 'Conturare Corporală Post-Bariatrică'),
    tag: t('Skin Excess · Belt Lipectomy · Specialist', 'Exces Piele · Belt Lipectomy · Specialist'),
    isForMe: t(
      'Essential for patients who have achieved their target weight following Gastric Sleeve, Bypass or Balloon but are left with significant excess skin — abdomen, arms, thighs, breasts and back — that cannot resolve with exercise.',
      'Esențial pentru pacienții care au atins greutatea țintā dupā Gastric Sleeve, Bypass sau Balon, dar rāmân cu exces semnificativ de piele — abdomen, brațe, coapse, sâni și spate — care nu se poate rezolva cu exerciții fizice.'
    ),
    techniques: t(
      'Post-bariatric cases require a staged surgical approach: (1) Belt lipectomy (circumferential body lift) — removes excess skin from abdomen, flanks and back in a single 360° incision. (2) Brachioplasty + medial thigh lift in a second stage. (3) Breast lift ± augmentation. Timing: minimum 12–18 months post-bariatric surgery with stable weight for 6+ months.',
      'Cazurile post-bariatrice necesitā o abordare chirurgicalā etapizatā: (1) Belt lipectomy (body lift circumferențial) — îndepārtează excesul de piele din abdomen, flancare și spate printr-o singurā incizie 360°. (2) Brahioplastie + lifting medial coapse în a doua etapā. (3) Lifting mamar ± augmentare. Timing: minimum 12–18 luni post-chirurgie bariatricā cu greutate stabilā 6+ luni.'
    ),
    mevaQuality: t(
      'Dedicated post-bariatric surgical team coordinated with our bariatric unit. Full pre-op nutrition panel. Progressive tension suture technique reducing drain use by 80%. Staged surgery planning included at no extra cost.',
      'Echipā chirurgicalā dedicatā post-bariatricā coordonatā cu unitatea noastrā bariatricā. Panel nutrițional complet preoperatoriu. Tehnicā suturā tensiune progresivā reducând utilizarea drenurilor cu 80%. Planificarea chirurgiei etapizate inclusā fārā cost suplimentar.'
    ),
    recovery: t('14–21 days (per stage)', '14–21 zile (per etapā)'),
    stay: t('2–3 Nights', '2–3 Nopți'),
  },
];

export default PLASTIC;
