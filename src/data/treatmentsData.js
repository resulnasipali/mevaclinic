// src/data/treatmentsData.js
const t = (en, ro) => ({ en, ro });

export const treatmentsData = [
  // ==========================================
  // 1. PLASTIC SURGERY & POST-BARIATRIC
  // ==========================================
  {
    id: 'piezo-rhinoplasty',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Daghan',
    title: t('Piezo Ultrasonic Rhinoplasty', 'Rinoplastie Ultrasonică Piezo'),
    shortDesc: t('Master the geometry of your face. Prof. Dr. Daghan utilizes tissue-sparing ultrasonic technology to sculpt the perfect nasal profile without breaking bone, ensuring rapid recovery and a refined, natural result.', 'Stăpâniți geometria feței. Prof. Dr. Daghan utilizează tehnologia ultrasonică de ultimă oră pentru a sculpta profilul nazal perfect, protejând țesuturile și asigurând o recuperare rapidă și un rezultat rafinat.'),
    isThisForMe: t([
      'Individuals seeking structural correction without the trauma of traditional "breaking" techniques.',
      'Patients unhappy with nasal symmetry, hump, or tip definition.',
      'Those demanding the fastest recovery time with minimal bruising and swelling.'
    ], [
      'Persoane care caută corecție structurală fără trauma tehnicilor tradiționale de "rupere" a osului.',
      'Pacienți nemulțumiți de simetria nazală, cocoașă sau definirea vârfului.',
      'Cei care doresc cel mai rapid timp de recuperare, cu vânătăi și umflături minime.'
    ]),
    theProcedure: t('Performed in a JCI-accredited theater under the meticulous expertise of Prof. Dr. Daghan. Using advanced Piezo sound waves, the nasal structure is reshaped with sub-millimeter precision, preserving delicate vessels and nerves for minimal swelling.', 'Efectuată într-un bloc operator acreditat JCI, sub expertiza meticuloasă a Prof. Dr. Daghan. Folosind unde sonore Piezo avansate, structura nazală este remodelată cu precizie sub-milimetrică, păstrând vasele și nervii delicați.'),
    mevaAdvantage: t('Prof. Dr. Daghan\'s "Preservation Rhinoplasty" philosophy ensures that your unique facial identity is enhanced, not altered. Using 3D Vectra simulation, we design your result collaboratively before the first incision is made.', 'Filozofia de "Rinoplastie de Conservare" a Prof. Dr. Daghan asigură că identitatea ta facială este îmbunătățită, nu alterată. Folosind simularea 3D Vectra, proiectăm rezultatul împreună înainte de prima incizie.'),
    faq: t([
      { q: 'Why is Piezo better than traditional rhinoplasty?', a: 'Traditional methods use hammers and chisels, causing bone fractures and heavy bruising. Piezo uses ultrasonic vibrations to shape bone with zero damage to soft tissue.' },
      { q: 'How long until I see my final nose?', a: 'While 80% of swelling subsides in 6 weeks, the final refined tip definition appears between 6 to 12 months.' }
    ], [
      { q: 'De ce este Piezo mai bună decât rinoplastia tradițională?', a: 'Metodele tradiționale folosesc dălți și ciocane, provocând fracturi și vânătăi. Piezo folosește vibrații ultrasonice pentru a modela osul fără a afecta țesutul moale.' },
      { q: 'Cât timp durează până văd forma finală?', a: 'Deși 80% din umflături dispar în 6 săptămâni, definirea finală a vârfului apare între 6 și 12 luni.' }
    ]),
    seo: { title: 'Meva Clinic | Piezo Ultrasonic Rhinoplasty in Turkey', desc: 'Experience precision Piezo Rhinoplasty at Meva Clinic, Istanbul. Minimal bruising, natural results, and advanced ultrasonic technology by Prof. Dr. Daghan.' }
  },
  {
    id: 'vaser-liposuction',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Emre',
    title: t('Vaser Liposuction & Body Contouring', 'Vaser Liposucție și Conturare Corporală'),
    shortDesc: t('Define your silhouette. Prof. Dr. Emre employs high-definition Vaser ultrasound technology to selectively emulsify fat, sculpting athletic contours and tightening skin with surgical artistry.', 'Definește-ți silueta. Prof. Dr. Emre utilizează tehnologia ultrasonică Vaser de înaltă definiție pentru a sculpta contururi atletice și a întinde pielea cu măiestrie chirurgicală.'),
    isThisForMe: t([
      'Individuals close to their ideal weight seeking "High-Definition" muscle visibility.',
      'Patients with stubborn fat deposits resistant to diet and intensive exercise.',
      'Those wanting significant skin tightening alongside fat removal to avoid sagging.'
    ], [
      'Persoane apropiate de greutatea ideală care caută vizibilitate musculară "High-Definition".',
      'Pacienți cu depozite de grăsime încăpățânate, rezistente la dietă și exerciții fizice intense.',
      'Cei care doresc o întindere semnificativă a pielii odată cu eliminarea grăsimii.'
    ]),
    theProcedure: t('Under the artistic direction of Prof. Dr. Emre, specialized ultrasonic probes target fat cells while sparing connective tissue. This advanced technique allows for the extraction of superficial fat to reveal the "six-pack" and "oblique" lines previously hidden.', 'Sub direcția artistică a Prof. Dr. Emre, sonde ultrasonice specializate vizează celulele adipoase protejând țesutul conjunctiv. Această tehnică permite evidențierea liniilor musculare abdominale.'),
    mevaAdvantage: t('At Meva Clinic, Prof. Dr. Emre\'s High-Def protocols ensure that skin retraction is maximized, preventing the "lumpy" outcomes of traditional lipo. Our post-op manual lymphatic drainage regimen accelerates your transition to a toned physique.', 'La Meva Clinic, protocoalele High-Def ale Prof. Dr. Emre asigură retracția maximă a pielii. Regimul nostru postoperator de drenaj limfatic manual accelerează tranziția către un fizic tonifiat.'),
    faq: t([
      { q: 'Is Vaser Lipo a weight-loss procedure?', a: 'No, it is a body contouring procedure. It is designed to remove localized fat and sculpt the body, not to treat general obesity.' },
      { q: 'When can I see my "six-pack" results?', a: 'Initial results are visible in 4 weeks, with the most dramatic definition appearing after 3 months as the skin tightens over the muscles.' }
    ], [
      { q: 'Vaser Lipo este o procedură de slăbire?', a: 'Nu, este o procedură de conturare corporală. Este concepută pentru a elimina grăsimea localizată și a sculpta corpul, nu pentru a trata obezitatea generală.' },
      { q: 'Când îmi voi vedea rezultatele de tip "six-pack"?', a: 'Rezultatele inițiale sunt vizibile în 4 săptămâni, definiția dramatică apărând după 3 luni.' }
    ]),
    seo: { title: 'Meva Clinic | Vaser Liposuction Turkey', desc: 'Sculpt your body with Vaser Liposuction at Meva Clinic. Advanced High-Def technology for targeted fat removal and skin tightening by Prof. Dr. Emre.' }
  },
  {
    id: 'breast-augmentation',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Muzaffer',
    title: t('Breast Augmentation', 'Augmentare Mamară (Implanturi)'),
    shortDesc: t('Elevate your confidence. Prof. Dr. Muzaffer combines surgical precision with premium, lifetime-warranted implants to create a natural, harmonious breast contour tailored to your anatomy.', 'Ridică-ți încrederea. Prof. Dr. Muzaffer combină precizia chirurgicală cu implanturi premium, garantate pe viață, pentru a crea un contur mamar natural și armonios.'),
    isThisForMe: t([
      'Women desiring a natural increase in volume and a more youthful breast profile.',
      'Mothers looking to restore breast fullness lost after pregnancy or breastfeeding.',
      'Individuals seeking to correct asymmetry and improve upper-pole cleavage projection.'
    ], [
      'Femei care doresc o creștere naturală a volumului și un profil mamar mai tineresc.',
      'Mame care doresc să restaureze plinătatea sânilor pierdută după sarcină sau alăptare.',
      'Persoane care caută corectarea asimetriei și îmbunătățirea proiecției decolteului.'
    ]),
    theProcedure: t('Prof. Dr. Muzaffer utilizes the "Dual Plane" technique to place FDA-approved Motiva or Mentor implants. This ensures the implant is partially covered by muscle for a soft, natural slope while maintaining cleavage projection.', 'Prof. Dr. Muzaffer utilizează tehnica "Dual Plane" pentru a plasa implanturi Motiva sau Mentor aprobate FDA. Aceasta asigură o pantă naturală, implantul fiind parțial acoperit de mușchi.'),
    mevaAdvantage: t('We prioritize "Natural Motion" results. Prof. Dr. Muzaffer\'s meticulous pocket dissection minimizes displacement risks, ensuring your results look and feel authentic in every movement.', 'Prioritizăm rezultatele cu "Mișcare Naturală". Disecția meticuloasă a buzunarului efectuată de Prof. Dr. Muzaffer minimizează riscurile de deplasare, asigurând un aspect autentic.'),
    faq: t([
      { q: 'Which implant brand is best?', a: 'We exclusively use Motiva and Mentor. During your consultation, Prof. Dr. Muzaffer will select the base, projection, and gel density that perfectly matches your thorax.' },
      { q: 'How long is the surgery?', a: 'The procedure takes approximately 60-90 minutes under general anesthesia, followed by a one-night stay for monitoring.' }
    ], [
      { q: 'Ce marcă de implant este cea mai bună?', a: 'Folosim exclusiv Motiva și Mentor. În timpul consultației, Prof. Dr. Muzaffer va selecta proiecția și densitatea gelului potrivite pentru toracele tău.' },
      { q: 'Cât durează operația?', a: 'Procedura durează aproximativ 60-90 de minute sub anestezie generală, urmată de o noapte de spitalizare.' }
    ]),
    seo: { title: 'Meva Clinic | Breast Augmentation with Premium Implants', desc: 'Achieve natural, beautiful curves with Breast Augmentation at Meva Clinic, Turkey. Expert precision by Prof. Dr. Muzaffer.' }
  },
  {
    id: 'blepharoplasty',
    category: 'plastic-surgery',
    expert: 'Doç. Dr. Türker',
    title: t('Blepharoplasty (Eyelid Surgery)', 'Blefaroplastie (Chirurgia Pleoapelor)'),
    shortDesc: t('Awaken your gaze. Doç. Dr. Türker performs precision eyelid surgery to eliminate heavy hoods and under-eye bags, restoring a rested, youthful, and vibrant appearance.', 'Trezește-ți privirea. Doç. Dr. Türker efectuează chirurgia pleoapelor de precizie pentru a elimina excesul de piele și pungile de sub ochi, restaurând un aspect odihnit.'),
    isThisForMe: t([
      'Individuals with sagging upper lids that impair vision or look "heavy."',
      'Patients with persistent under-eye puffiness and "bags" that don\'t respond to topical treatments.',
      'Those seeking a permanent solution to a chronically tired facial expression.'
    ], [
      'Persoane cu pleoape superioare lăsate care îngreunează privirea.',
      'Pacienți cu pungi persistente sub ochi care nu răspund la tratamente cosmetice.',
      'Cei care caută o soluție permanentă pentru o expresie facială cronic obosită.'
    ]),
    theProcedure: t('Under the specialized hand of Doç. Dr. Türker, excess skin and fat pads are meticulously repositioned or removed. Incisions are strategically placed within natural creases to ensure absolute invisibility post-healing.', 'Sub mâna specializată a Doç. Dr. Türker, pielea și grăsimea în exces sunt repoziționate sau eliminate. Inciziile sunt plasate strategic în pliurile naturale.'),
    mevaAdvantage: t('We avoid the "surprised" look. Doç. Dr. Türker focuses on muscle-sparing techniques and fat repositioning, ensuring the eye retains its natural almond shape while looking significantly younger.', 'Evităm aspectul "surprins". Doç. Dr. Türker se concentrează pe tehnici de conservare a mușchilor, asigurând păstrarea formei naturale a ochiului.'),
    faq: t([
      { q: 'Will I have scars?', a: 'Upper lid scars are hidden in the natural fold. Lower lid scars are often placed inside the lid (transconjunctival), leaving zero external marks.' },
      { q: 'How long until I can wear makeup?', a: 'You can typically apply light makeup to cover any residual bruising 10 days after the procedure.' }
    ], [
      { q: 'Voi avea cicatrici?', a: 'Cicatricile pleoapei superioare sunt ascunse în pliul natural. Cele inferioare sunt adesea plasate în interiorul pleoapei, lăsând zero urme externe.' },
      { q: 'Cât timp până pot folosi machiaj?', a: 'De obicei, puteți aplica machiaj ușor la 10 zile după procedură.' }
    ]),
    seo: { title: 'Meva Clinic | Eyelid Surgery (Blepharoplasty) Istanbul', desc: 'Rejuvenate your eyes with Blepharoplasty at Meva Clinic. Precision surgery by Doç. Dr. Türker for a youthful, rested look.' }
  },
  {
    id: 'abdominoplasty',
    category: 'plastic-surgery',
    expert: 'Uzm. Dr. Onur',
    title: t('Abdominoplasty (Tummy Tuck)', 'Abdominoplastie (Tummy Tuck)'),
    shortDesc: t('Reconstruct your core. Uzm. Dr. Onur specializes in total abdominal restoration, repairing muscle separation and removing excess skin for a flat, contoured midsection.', 'Reconstruiește-ți abdomenul. Uzm. Dr. Onur este specializat în restaurarea abdominală totală, reparând diastaza și eliminând excesul de piele.'),
    isThisForMe: t([
      'Mothers seeking to repair Diastasis Recti and loose skin after pregnancy.',
      'Post-bariatric patients with significant "apron" skin after massive weight loss.',
      'Individuals with abdominal laxity that does not respond to exercise or diet.'
    ], [
      'Mame care doresc repararea diastazei și a pielii lăsate după sarcină.',
      'Pacienți post-bariatrici cu exces masiv de piele după o slăbire majoră.',
      'Persoane cu laxitate abdominală care nu răspunde la sport.'
    ]),
    theProcedure: t('Uzm. Dr. Onur performs a full-muscle plication to tighten the internal abdominal wall. Excess skin is surgically excised, and the navel is artistically repositioned for a completely natural look.', 'Uzm. Dr. Onur efectuează o plicatură musculară completă pentru a întări peretele abdominal. Pielea în exces este excizată, iar ombilicul este repoziționat artistic.'),
    mevaAdvantage: t('We utilize "Internal Bra" internal suturing techniques and Vaser Liposuction of the flanks in every tummy tuck. This dual approach by Uzm. Dr. Onur ensures an hourglass waistline, not just a flat front.', 'Utilizăm tehnici de sutură internă și Vaser Lipo pe flancuri. Această abordare dublă a Uzm. Dr. Onur asigură o talie tip clepsidră, nu doar un abdomen plat.'),
    faq: t([
      { q: 'Can I combine this with a Breast Lift?', a: 'Yes, this is the foundation of our "Mommy Makeover." Uzm. Dr. Onur frequently combines these procedures to minimize recovery time.' },
      { q: 'Where is the scar?', a: 'The scar is placed very low, along the bikini line, making it invisible even in low-cut swimwear.' }
    ], [
      { q: 'Pot combina aceasta cu un lifting mamar?', a: 'Da, aceasta este baza pachetului "Mommy Makeover". Uzm. Dr. Onur combină frecvent aceste proceduri.' },
      { q: 'Unde este cicatricea?', a: 'Cicatricea este plasată foarte jos, pe linia bikini, fiind invizibilă chiar și în costum de baie.' }
    ]),
    seo: { title: 'Meva Clinic | Tummy Tuck (Abdominoplasty) Turkey', desc: 'Achieve a flat, toned stomach with Abdominoplasty at Meva Clinic. Expert muscle repair and skin removal by Uzm. Dr. Onur.' }
  },
  {
    id: 'deep-plane-facelift',
    category: 'plastic-surgery',
    expert: 'Op. Dr. Yunus',
    title: t('Deep Plane Facelift', 'Lifting Facial Deep Plane'),
    shortDesc: t('The gold standard in facial rejuvenation. Op. Dr. Yunus repositions the deep muscular structure of the face to erase 15 years of aging with natural, structurally sound results.', 'Standardul de aur în întinerirea facială. Op. Dr. Yunus repoziționează structura musculară profundă pentru a șterge 15 ani de îmbătrânire.'),
    isThisForMe: t([
      'Patients seeking a permanent, non-surgical-looking alternative to temporary fillers.',
      'Individuals with significant jowls, mid-face sagging, and loss of neck definition.',
      'Those demanding the most advanced technique to avoid the "pulled" or "operated" appearance.'
    ], [
      'Pacienți care caută o alternativă permanentă și naturală la fillerele temporare.',
      'Persoane cu lăsare semnificativă a feței și pierderea definirii gâtului.',
      'Cei care doresc cea mai avansată tehnică pentru a evita aspectul "tras".'
    ]),
    theProcedure: t('Unlike traditional lifts, Op. Dr. Yunus releases the deep ligaments of the face, allowing the entire SMAS and fat layer to be vertically repositioned without skin tension. This ensures zero "wind-tunnel" effect.', 'Spre deosebire de liftingurile tradiționale, Op. Dr. Yunus eliberează ligamentele profunde, permițând repoziționarea verticală a întregului strat SMAS fără tensiune pe piele.'),
    mevaAdvantage: t('Expertise in the Deep Plane technique means faster healing and longer-lasting results. Op. Dr. Yunus focuses on structural integrity, ensuring you look like a rested version of your younger self for a decade or more.', 'Expertiza în tehnica Deep Plane înseamnă vindecare mai rapidă și rezultate de durată. Op. Dr. Yunus se concentrează pe integritatea structurală.'),
    faq: t([
      { q: 'Is it more invasive than a "Mini-Lift"?', a: 'While it treats deeper layers, it is actually less traumatic to the skin, resulting in less swelling and significantly better, more natural outcomes.' },
      { q: 'Will my friends know I had surgery?', a: 'Because the lift is vertical and muscle-based, the result is so natural that people will notice you look "refreshed" without identifying the surgery.' }
    ], [
      { q: 'Este mai invaziv decât un "Mini-Lift"?', a: 'Deși tratează straturi mai profunde, este de fapt mai puțin traumatic pentru piele, rezultând mai puține umflături.' },
      { q: 'Vor ști prietenii că m-am operat?', a: 'Deoarece liftingul este vertical și bazat pe mușchi, rezultatul este atât de natural încât vei părea doar "împrospătată".' }
    ]),
    seo: { title: 'Meva Clinic | Deep Plane Facelift in Turkey', desc: 'Experience the gold standard in facial rejuvenation. Deep Plane Facelift at Meva Clinic by Op. Dr. Yunus offers natural, long-lasting results.' }
  },
  {
    id: 'mastopexy',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Yakup',
    title: t('Mastopexy (Breast Lift)', 'Mastopexie (Lifting Mamar)'),
    shortDesc: t('Restore youthful elevation. Prof. Dr. Yakup meticulously reshapes sagging breast tissue and repositions the areola to create a firm, perky, and rejuvenated silhouette.', 'Restaurează elevația tinerească. Prof. Dr. Yakup remodelează meticulos țesutul mamar lăsat pentru a crea o siluetă fermă și întinerită.'),
    isThisForMe: t([
      'Women experiencing breast "ptosis" (sagging) due to weight loss, breastfeeding, or genetics.',
      'Patients whose nipples point downward or rest below the inframammary fold.',
      'Those wanting to restore breast shape without necessarily increasing volume through implants.'
    ], [
      'Femei care se confruntă cu "ptoza" mamară (lăsare) din cauza slăbirii sau alăptării.',
      'Paciente ale căror mameloane sunt orientate în jos.',
      'Cele care doresc restaurarea formei fără a mări neapărat volumul prin implanturi.'
    ]),
    theProcedure: t('Prof. Dr. Yakup utilizes advanced internal suspension techniques to lift the glandular tissue. Excess skin is removed, and the nipple-areola complex is elevated to its ideal anatomical position.', 'Prof. Dr. Yakup utilizează tehnici avansate de suspensie internă pentru a ridica țesutul glandular. Pielea în exces este eliminată, iar mamelonul este ridicat.'),
    mevaAdvantage: t('Prof. Dr. Yakup specializes in "Scar-Minimization" protocols. Whether using the periareolar, vertical, or anchor technique, he ensures the most discreet result possible while maximizing projection and firmness.', 'Prof. Dr. Yakup este specializat în protocoale de minimizare a cicatricilor, asigurând cel mai discret rezultat posibil, maximizând în același timp proiecția.'),
    faq: t([
      { q: 'Can I combine a lift with implants?', a: 'Absolutely. If you want both elevation and added volume, Prof. Dr. Yakup can perform an "Augmentation-Mastopexy" in a single session.' },
      { q: 'How long until I can exercise?', a: 'You can resume light walking in 1 week, but high-impact activities (running, gym) must wait for 6 weeks.' }
    ], [
      { q: 'Pot combina liftingul cu implanturile?', a: 'Absolut. Dacă doriți atât elevație cât și volum, Prof. Dr. Yakup poate efectua o "Augmentare-Mastopexie" simultan.' },
      { q: 'Când pot face sport?', a: 'Puteți relua mersul ușor într-o săptămână, dar activitățile de impact necesită 6 săptămâni de pauză.' }
    ]),
    seo: { title: 'Meva Clinic | Breast Lift (Mastopexy) Istanbul', desc: 'Restore youthful firmness and shape with a Breast Lift at Meva Clinic. Expert elevation and contouring by Prof. Dr. Yakup.' }
  },
  {
    id: 'brazilian-butt-lift',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Daghan',
    title: t('Brazilian Butt Lift (BBL)', 'Brazilian Butt Lift (BBL)'),
    shortDesc: t('Sculpt the perfect hourglass. Prof. Dr. Daghan combines precision Vaser Liposuction with advanced fat grafting to create stunning, natural curves and a lifted profile.', 'Sculptează clepsidra perfectă. Prof. Dr. Daghan combină Vaser Lipo de precizie cu grefarea avansată de grăsime pentru a crea curbe naturale uimitoare.'),
    isThisForMe: t([
      'Individuals seeking more volume and projection in the buttocks without artificial implants.',
      'Patients wanting to slim their waist and abdomen while simultaneously augmenting their hips.',
      'Those looking for a safe, natural-feeling body transformation.'
    ], [
      'Persoane care caută volum și proiecție în fese fără implanturi artificiale.',
      'Pacienți care doresc să-și subțieze talia în timp ce își măresc șoldurile.',
      'Cei care caută o transformare corporală sigură și naturală.'
    ]),
    theProcedure: t('Under the elite guidance of Prof. Dr. Daghan, fat is harvested via ultrasound-assisted Vaser Liposuction. After purification and enrichment with growth factors, the fat is injected into the subcutaneous layers of the buttocks using ultrasound-guided safety protocols.', 'Sub îndrumarea de elită a Prof. Dr. Daghan, grăsimea este recoltată prin Vaser Lipo, purificată și injectată folosind protocoale de siguranță ghidate ecografic.'),
    mevaAdvantage: t('Safety is our obsession. Prof. Dr. Daghan strictly utilizes the "Expansion Vibration Lipofilling" technique and never injects into the muscle, eliminating serious risks while ensuring maximum fat survival and a smooth, round contour.', 'Siguranța este obsesia noastră. Prof. Dr. Daghan utilizează tehnici avansate și nu injectează niciodată în mușchi, eliminând riscurile majore.'),
    faq: t([
      { q: 'Is BBL safe?', a: 'When performed by an expert like Prof. Dr. Daghan using ultrasound-guided, subcutaneous injection techniques, BBL is a safe and highly effective procedure.' },
      { q: 'How long will the results last?', a: 'Once the transferred fat integrates (usually after 3-4 months), the results are permanent. Fluctuations in your overall weight will affect the size of the transferred fat cells.' }
    ], [
      { q: 'Este BBL sigur?', a: 'Când este efectuată de un expert ca Prof. Dr. Daghan, folosind tehnici ghidate ecografic, BBL este o procedură sigură.' },
      { q: 'Cât timp durează rezultatele?', a: 'Odată ce grăsimea transferată se integrează, rezultatele sunt permanente.' }
    ]),
    seo: { title: 'Meva Clinic | Safe Brazilian Butt Lift (BBL) Turkey', desc: 'Get the perfect hourglass curve with BBL at Meva Clinic. Ultrasound-guided fat transfer for maximum safety by Prof. Dr. Daghan.' }
  },
  {
    id: 'gynecomastia',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Emre',
    title: t('Gynecomastia Surgery', 'Operație de Ginecomastie'),
    shortDesc: t('Define a masculine chest. Prof. Dr. Emre permanently corrects enlarged male breast tissue, restoring a flat, firm, and confident thoracic contour.', 'Definește un piept masculin. Prof. Dr. Emre corectează permanent țesutul mamar mărit la bărbați, restaurând un contur toracic ferm.'),
    isThisForMe: t([
      'Men self-conscious about "man boobs" due to hormonal imbalance or weight fluctuations.',
      'Individuals frustrated by chest fat that does not respond to weightlifting or cardio.',
      'Those seeking a permanent solution with minimal scarring and rapid recovery.'
    ], [
      'Bărbați jenați de aspectul sânilor din cauza dezechilibrelor hormonale.',
      'Persoane frustrate de grăsimea pectorală care nu răspunde la sport.',
      'Cei care caută o soluție permanentă cu cicatrici minime.'
    ]),
    theProcedure: t('Prof. Dr. Emre utilizes a combined approach: Vaser Liposuction to emulsify fat and precision glandular excision for fibrous tissue. This ensures a smooth, contoured chest without any "crater" deformity.', 'Prof. Dr. Emre utilizează o abordare combinată: Vaser Lipo pentru a lichefia grăsimea și excizie glandulară de precizie.'),
    mevaAdvantage: t('We prioritize the masculine aesthetic. Prof. Dr. Emre\'s specialized technique focuses on sculpting the pectoral borders, ensuring the chest looks athletic and firm, with incisions hidden discreetly at the areola edge.', 'Prioritizăm estetica masculină. Tehnica specializată a Prof. Dr. Emre se concentrează pe sculptarea marginilor pectorale.'),
    faq: t([
      { q: 'Will the tissue return?', a: 'No. The removed gland and fat cells are gone permanently. Results are lifelong as long as a stable lifestyle is maintained.' },
      { q: 'Is the recovery painful?', a: 'Most patients describe it as "soreness" similar to a heavy chest workout. You can return to office work in 3-5 days.' }
    ], [
      { q: 'Țesutul va reveni?', a: 'Nu. Glanda și celulele adipoase eliminate dispar permanent.' },
      { q: 'Este recuperarea dureroasă?', a: 'Majoritatea pacienților descriu o senzație de febră musculară. Revenirea la birou este posibilă în 3-5 zile.' }
    ]),
    seo: { title: 'Meva Clinic | Gynecomastia Surgery Istanbul', desc: 'Restore a masculine chest with Gynecomastia surgery at Meva Clinic. Expert glandular removal by Prof. Dr. Emre.' }
  },
  {
    id: 'mommy-makeover',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Muzaffer',
    title: t('Mommy Makeover', 'Mommy Makeover (Transformare Post-Natală)'),
    shortDesc: t('Reclaim your identity. Prof. Dr. Muzaffer designs a bespoke surgical plan to restore your pre-pregnancy body, combining abdominal and breast restoration in a single transformative session.', 'Recâștigă-ți identitatea. Prof. Dr. Muzaffer proiectează un plan chirurgical personalizat pentru a-ți restaura corpul de dinaintea sarcinii.'),
    isThisForMe: t([
      'Mothers who have completed their families and want a total body reset.',
      'Individuals dealing with both sagging breasts and loose abdominal skin simultaneously.',
      'Those seeking the maximum aesthetic upgrade with a single anesthesia and recovery period.'
    ], [
      'Mame care doresc o resetare totală a corpului după încheierea planurilor de familie.',
      'Persoane care se confruntă simultan cu sâni lăsați și piele abdominală flască.',
      'Cele care doresc îmbunătățirea estetică maximă cu o singură anestezie.'
    ]),
    theProcedure: t('Under the highly coordinated care of Prof. Dr. Muzaffer, we combine Abdominoplasty (Tummy Tuck), Breast Augmentation/Lift, and 360 Liposuction. Every step is optimized to ensure maximum safety and stunning coordination of your results.', 'Sub îngrijirea coordonată a Prof. Dr. Muzaffer, combinăm abdominoplastia, augmentarea/liftingul mamar și liposucția 360.'),
    mevaAdvantage: t('The Meva "Mommy Makeover" is more than surgery; it\'s a restoration. Prof. Dr. Muzaffer ensures that your proportions are balanced, giving you a refreshed, youthful, and naturally athletic silhouette that boosts confidence.', 'Meva Mommy Makeover este mai mult decât o operație; este o restaurare. Prof. Dr. Muzaffer se asigură că proporțiile tale sunt echilibrate.'),
    faq: t([
      { q: 'Is it safe to combine so many surgeries?', a: 'Yes, when performed by a veteran surgeon like Prof. Dr. Muzaffer in a JCI-accredited hospital. We limit the duration of surgery to ensure your safety and comfort.' },
      { q: 'How long until I can hug my kids?', a: 'You can hug them immediately! However, you must avoid lifting children for 4-6 weeks to protect your muscle repairs.' }
    ], [
      { q: 'Este sigur să combinăm atâtea operații?', a: 'Da, când este efectuată de un chirurg veteran ca Prof. Dr. Muzaffer. Limităm durata operației pentru siguranță.' },
      { q: 'Când îmi pot lua copiii în brațe?', a: 'Îi poți îmbrățișa imediat, dar trebuie să eviți ridicarea lor timp de 4-6 săptămâni.' }
    ]),
    seo: { title: 'Meva Clinic | Mommy Makeover Surgery Turkey', desc: 'Restore your pre-pregnancy body with a Mommy Makeover at Meva Clinic. Expert body restoration by Prof. Dr. Muzaffer.' }
  },
  {
    id: 'otoplasty',
    category: 'plastic-surgery',
    expert: 'Doç. Dr. Türker',
    title: t('Otoplasty (Ear Surgery)', 'Otoplastie (Chirurgia Urechilor)'),
    shortDesc: t('Perfect facial balance. Doç. Dr. Türker artistically reshapes prominent ears, ensuring a natural position and symmetrical contour for adults and children alike.', 'Echilibru facial perfect. Doç. Dr. Türker remodelează artistic urechile proeminente, asigurând o poziție naturală și un contur simetric.'),
    isThisForMe: t([
      'Individuals (ages 5+) self-conscious about "prominent" or protruding ears.',
      'Patients seeking to correct earlobe deformities or asymmetrical ear shapes.',
      'Those looking for a permanent structural fix with virtually invisible scars.'
    ], [
      'Persoane (peste 5 ani) jenați de urechile proeminente.',
      'Pacienți care doresc corectarea deformărilor lobului sau a asimetriilor.',
      'Cei care caută o corecție structurală permanentă.'
    ]),
    theProcedure: t('Doç. Dr. Türker utilizes a "Cartilage-Sparing" approach. Through a discreet incision behind the ear, the cartilage is sculpted and secured with permanent internal sutures to its new, balanced position.', 'Doç. Dr. Türker utilizează o abordare de conservare a cartilajului. Printr-o incizie discretă în spatele urechii, cartilajul este sculptat și fixat.'),
    mevaAdvantage: t('We focus on the "Anti-Helical Fold." Doç. Dr. Türker\'s precision ensures that the ears do not look "pinned back" or flat, but rather have the natural curves of a perfectly positioned ear.', 'Ne concentrăm pe "pliul antihelix". Precizia Doç. Dr. Türker asigură că urechile nu arată "lipite", ci au curbe naturale.'),
    faq: t([
      { q: 'Is it painful?', a: 'Most patients feel pressure rather than pain. In children, we perform it under general anesthesia; in adults, local anesthesia with sedation is sufficient.' },
      { q: 'When can I see the final shape?', a: 'Results are visible as soon as the initial bandages are removed (1 week), though residual swelling takes 4-6 weeks to fully resolve.' }
    ], [
      { q: 'Este dureros?', a: 'Majoritatea simt presiune, nu durere. La copii se face sub anestezie generală, la adulți sub anestezie locală.' },
      { q: 'Când văd forma finală?', a: 'Rezultatele sunt vizibile imediat ce bandajele sunt scoase (1 săptămână).' }
    ]),
    seo: { title: 'Meva Clinic | Otoplasty (Prominent Ear Surgery) Turkey', desc: 'Correct protruding ears permanently with Otoplasty at Meva Clinic. Expert cartilage reshaping by Doç. Dr. Türker.' }
  },
  {
    id: 'thigh-and-arm-lift',
    category: 'plastic-surgery',
    expert: 'Uzm. Dr. Onur',
    title: t('Thigh & Arm Lift (Brachioplasty)', 'Lifting de Brațe și Coapse'),
    shortDesc: t('Firm and refined limbs. Uzm. Dr. Onur specializes in removing significant skin laxity after weight loss, restoring a tight, youthful, and functional contour to your arms and legs.', 'Membru ferme și rafinate. Uzm. Dr. Onur este specializat în eliminarea laxității pielii după slăbire, restaurând un contur tineresc.'),
    isThisForMe: t([
      'Post-bariatric patients with "bat wing" arms or sagging inner thighs.',
      'Individuals dealing with hygiene issues or chafing due to excess skin folds.',
      'Those who want to feel confident in sleeveless tops or swimwear again.'
    ], [
      'Pacienți post-bariatrici cu "aripi de liliac" la brațe sau coapse lăsate.',
      'Persoane cu probleme de igienă sau iritații din cauza pliurilor de piele.',
      'Cele care doresc să poarte din nou haine fără mâneci sau costume de baie cu încredere.'
    ]),
    theProcedure: t('Uzm. Dr. Onur meticulously excises excess skin and fat, repositioning the remaining tissue for a lean, athletic look. He utilizes multi-layered closure techniques to ensure minimal tension and optimal scar healing.', 'Uzm. Dr. Onur elimină meticulos pielea și grăsimea în exces, repoziționând țesutul. Folosește tehnici de sutură multi-strat pentru cicatrici optime.'),
    mevaAdvantage: t('We specialize in "Hidden Scar" placement. Uzm. Dr. Onur strategically positions incisions on the inner arm and thigh where they are naturally concealed, focusing on the functional and aesthetic recovery of our patients.', 'Suntem specializați în plasarea cicatricilor în zone ascunse. Uzm. Dr. Onur poziționează strategic inciziile pe partea interioară a brațelor și coapselor.'),
    faq: t([
      { q: 'How visible are the scars?', a: 'While scars are unavoidable with significant skin removal, Uzm. Dr. Onur ensures they are as thin as possible and hidden in the natural shadows of the limbs.' },
      { q: 'How long until I can walk comfortably?', a: 'After a thigh lift, you can walk short distances immediately. Normal, comfortable walking usually returns within 2 weeks.' }
    ], [
      { q: 'Cât de vizibile sunt cicatricile?', a: 'Deși sunt inevitabile la eliminarea masivă de piele, Uzm. Dr. Onur se asigură că sunt cât mai subțiri și ascunse în umbrele naturale.' },
      { q: 'Când pot merge confortabil?', a: 'După liftingul de coapse, poți merge pe distanțe scurte imediat. Mersul normal revine în 2 săptămâni.' }
    ]),
    seo: { title: 'Meva Clinic | Arm and Thigh Lift Post-Bariatric Surgery', desc: 'Remove excess, sagging skin from arms and thighs at Meva Clinic. Expert post-bariatric contouring by Uzm. Dr. Onur.' }
  },
  {
    id: 'mentoplasty',
    category: 'plastic-surgery',
    expert: 'Op. Dr. Yunus',
    title: t('Mentoplasty (Chin Augmentation)', 'Mentoplastie (Augmentare Bărbie)'),
    shortDesc: t('Define your profile. Op. Dr. Yunus utilizes customized medical implants to enhance a weak or receding chin, creating a strong, harmonious jawline and balanced facial proportions.', 'Definește-ți profilul. Op. Dr. Yunus utilizează implanturi personalizate pentru a evidenția bărbia, creând o linie mandibulară puternică.'),
    isThisForMe: t([
      'Individuals with a "weak" chin that makes their nose appear disproportionately large.',
      'Patients seeking a more defined separation between the jawline and the neck.',
      'Those desiring a permanent structural improvement to their side profile.'
    ], [
      'Persoane cu bărbie "retrasă" care face nasul să pară disproporționat de mare.',
      'Pacienți care caută o separare mai definită între mandibulă și gât.',
      'Cei care doresc o îmbunătățire structurală permanentă a profilului lateral.'
    ]),
    theProcedure: t('Op. Dr. Yunus carefully secures a medical-grade silicone implant through a tiny incision either inside the mouth or under the chin. This creates instant, permanent projection that aligns with the "Golden Ratio" of your face.', 'Op. Dr. Yunus fixează un implant de silicon printr-o incizie discretă. Aceasta creează o proiecție instantanee, aliniată cu "Secțiunea de Aur" a feței tale.'),
    mevaAdvantage: t('We specialize in "Profile-Plasty." Op. Dr. Yunus often combines chin augmentation with rhinoplasty or neck liposuction to create a complete, stunning facial transformation that looks entirely natural.', 'Suntem specializați în "Profiloplastie". Op. Dr. Yunus combină adesea augmentarea bărbiei cu rinoplastia pentru o transformare facială uimitoare.'),
    faq: t([
      { q: 'Will the implant move?', a: 'No, Op. Dr. Yunus secures the implant beneath the muscle and directly to the bone structure, ensuring it remains a permanent part of your anatomy.' },
      { q: 'How long is the recovery?', a: 'Social downtime is minimal (5-7 days). Some minor swelling is normal but subsides quickly.' }
    ], [
      { q: 'Se va deplasa implantul?', a: 'Nu, Op. Dr. Yunus fixează implantul sub mușchi și direct pe structura osoasă.' },
      { q: 'Cât durează recuperarea?', a: 'Timpul de recuperare socială este minim (5-7 zile).' }
    ]),
    seo: { title: 'Meva Clinic | Chin Augmentation (Mentoplasty) Istanbul', desc: 'Achieve a balanced, strong facial profile with Chin Augmentation at Meva Clinic. Expert profile balancing by Op. Dr. Yunus.' }
  },
  {
    id: 'labiaplasty-genital',
    category: 'plastic-surgery',
    expert: 'Prof. Dr. Yakup',
    title: t('Labiaplasty & Genital Aesthetics', 'Labioplastie și Estetică Genitală'),
    shortDesc: t('Reclaim your comfort. Prof. Dr. Yakup provides expert aesthetic and functional restoration of the labia, combining precision surgery with total patient privacy and care.', 'Recâștigă-ți confortul. Prof. Dr. Yakup oferă restaurare estetică și funcțională a labiilor, combinând precizia chirurgicală cu discreția totală.'),
    isThisForMe: t([
      'Women experiencing physical discomfort or chafing during exercise or intimacy.',
      'Individuals self-conscious about asymmetrical or elongated labia minora.',
      'Patients seeking a more refined, youthful aesthetic for the genital area.'
    ], [
      'Femei care resimt disconfort fizic sau iritații la sport sau intimitate.',
      'Persoane preocupate de asimetria sau alungirea labiilor mici.',
      'Paciente care doresc o estetică mai rafinată și tinerescă a zonei genitale.'
    ]),
    theProcedure: t('Under the specialized expertise of Prof. Dr. Yakup, excess labial tissue is precisely trimmed using advanced wedge or edge resection techniques. Every stitch is placed to preserve sensitivity and ensure invisible scarring.', 'Sub expertiza Prof. Dr. Yakup, țesutul labial în exces este eliminat prin tehnici avansate. Fiecare sutură este plasată pentru a proteja sensibilitatea.'),
    mevaAdvantage: t('We prioritize both "Look and Feel." Prof. Dr. Yakup\'s technique ensures the natural edges are preserved, avoiding a "scalloped" look and restoring both the confidence and physical comfort of our patients.', 'Prioritizăm atât aspectul, cât și senzația. Tehnica Prof. Dr. Yakup asigură păstrarea marginilor naturale, evitând un aspect artificial.'),
    faq: t([
      { q: 'Does it affect sensitivity?', a: 'No. Prof. Dr. Yakup specifically avoids nerve clusters to ensure that sexual sensation is maintained or even improved through increased comfort.' },
      { q: 'When can I wear jeans again?', a: 'You should wait at least 2-3 weeks before wearing tight-fitting clothing to ensure the area is fully healed and comfortable.' }
    ], [
      { q: 'Afectează sensibilitatea?', a: 'Nu. Prof. Dr. Yakup evită terminațiile nervoase pentru a asigura menținerea senzației sexuale.' },
      { q: 'Când pot purta din nou blugi?', a: 'Ar trebui să aștepți cel puțin 2-3 săptămâni înainte de a purta haine strâmte.' }
    ]),
    seo: { title: 'Meva Clinic | Labiaplasty & Genital Aesthetics Turkey', desc: 'Discreet, expert Labiaplasty at Meva Clinic. Restore comfort and confidence with specialized care by Prof. Dr. Yakup.' }
  },

  // ==========================================
  // 2. ANDROLOGY & PENIS ENLARGEMENT
  // ==========================================
  {
    id: 'penis-enlargement-surgery',
    category: 'andrology',
    expert: 'MD Ateş',
    title: t('Penile Enlargement & Girth Enhancement', 'Chirurgie de Mărire Penis și Îngroșare'),
    shortDesc: t('Absolute discretion and clinical excellence. MD Ateş utilizes advanced surgical protocols to permanently increase both flaccid length and girth with natural-looking results.', 'Discreție absolută și excelență clinică. MD Ateş utilizează protocoale avansate pentru a crește permanent atât lungimea cât și grosimea.'),
    isThisForMe: t([
      'Men seeking a significant, permanent improvement in their flaccid and erect profile.',
      'Individuals looking for a safe alternative to dangerous and ineffective "stretching" devices.',
      'Those demanding total confidentiality and treatment by a specialized urological expert.'
    ], [
      'Bărbați care caută o îmbunătățire semnificativă și permanentă a profilului lor.',
      'Persoane care caută o alternativă sigură la dispozitivele ineficiente de "întindere".',
      'Cei care solicită confidențialitate totală și tratament de către un expert urolog.'
    ]),
    theProcedure: t('MD Ateş performs a combined lengthening and thickening procedure. Through a tiny incision, the suspensory ligament is released to expose hidden length, while girth is enhanced via precision fat grafting or dermal matrix integration.', 'MD Ateş efectuează o procedură combinată de alungire și îngroșare. Prin eliberarea ligamentului suspensor și grefarea de grăsime, se obțin rezultate remarcabile.'),
    mevaAdvantage: t('We utilize "Micro-Fat" technology. MD Ateş purifies your own fat to ensure a smooth, symmetrical result that feels entirely natural, avoiding the "lumps" associated with older techniques.', 'Utilizăm tehnologia "Micro-Fat". MD Ateş purifică propria grăsime pentru a asigura un rezultat neted și simetric.'),
    faq: t([
      { q: 'How much length will I gain?', a: 'Most patients see an increase of 2-4 cm in flaccid length. Girth can be increased by 30-50% permanently.' },
      { q: 'Is it painful?', a: 'The surgery is performed under general anesthesia. Post-operative discomfort is managed with mild medication, and you can resume light activities in 48 hours.' }
    ], [
      { q: 'Cât de mult voi câștiga în lungime?', a: 'Majoritatea pacienților observă o creștere de 2-4 cm în lungime flascidă. Grosimea poate crește cu 30-50%.' },
      { q: 'Este dureros?', a: 'Operația se face sub anestezie generală. Disconfortul postoperator este minim.' }
    ]),
    seo: { title: 'Meva Clinic | Penile Enlargement Surgery in Turkey', desc: 'Safe, confidential Penile Lengthening and Girth Enhancement at Meva Clinic. Expert urology by MD Ateş.' }
  },
  {
    id: 'non-surgical-enlargement',
    category: 'andrology',
    expert: 'MD Haluk',
    title: t('Non-Surgical Girth Enhancement (HA Fillers)', 'Îngroșare Penis Non-Chirurgicală (Filler HA)'),
    shortDesc: t('Immediate results without surgery. MD Haluk performs rapid, needle-free girth enhancement using premium hyaluronic acid fillers for instant volume and confidence.', 'Rezultate imediate fără chirurgie. MD Haluk efectuează îngroșarea rapidă a penisului folosind fillere de acid hialuronic premium.'),
    isThisForMe: t([
      'Men wanting immediate girth enhancement with zero surgical downtime.',
      'Patients looking for a temporary way to trial increased size before permanent surgery.',
      'Individuals seeking a safe, "lunchtime" procedure with instant results.'
    ], [
      'Bărbați care doresc îngroșare imediată fără timp de recuperare chirurgicală.',
      'Pacienți care vor să testeze temporar mărirea dimensiunii.',
      'Persoane care caută o procedură rapidă cu rezultate instantanee.'
    ]),
    theProcedure: t('Under the specialized hand of MD Haluk, high-density HA fillers are injected using a blunt micro-cannula. This technique avoids blood vessels and ensures a perfectly uniform, smooth distribution of volume.', 'Sub mâna specializată a MD Haluk, fillerele HA sunt injectate folosind o micro-canulă atraumatică, asigurând o distribuție uniformă.'),
    mevaAdvantage: t('We exclusively use premium, FDA-approved "Volumetric" fillers. MD Haluk\'s technique focuses on symmetry and feel, ensuring the result is indistinguishable from natural anatomy.', 'Folosim exclusiv fillere premium Volumetric aprobate FDA. Tehnica MD Haluk se concentrează pe simetrie și senzație naturală.'),
    faq: t([
      { q: 'How long does it last?', a: 'Results typically last 12-18 months. The procedure can be easily repeated or topped up to maintain your desired volume.' },
      { q: 'Can I exercise after?', a: 'You should avoid intense gym workouts and sexual activity for 72 hours, after which you can return to your full routine.' }
    ], [
      { q: 'Cât timp durează?', a: 'Rezultatele durează de obicei 12-18 luni. Procedura poate fi repetată ușor pentru a menține volumul dorit.' },
      { q: 'Pot face sport după?', a: 'Trebuie să eviți antrenamentele intense și viața sexuală timp de 72 de ore.' }
    ]),
    seo: { title: 'Meva Clinic | Non-Surgical Penile Girth Enhancement (HA Filler)', desc: 'Instant penile thickening with premium HA fillers at Meva Clinic. Safe procedure by MD Haluk.' }
  },
  {
    id: 'ed-treatments-eswt-pshot',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('Erectile Dysfunction: ESWT & P-Shot', 'Tratament DE: ESWT & P-Shot'),
    shortDesc: t('Regenerative sexual health. MD Murat combines shockwave therapy with growth factor injections to treat the root vascular cause of ED, restoring spontaneous function.', 'Sănătate sexuală regenerativă. MD Murat combină terapia cu unde de șoc cu injecții de factori de creștere pentru a trata cauza DE.'),
    isThisForMe: t([
      'Men noticing a decrease in morning erections or firmess during intimacy.',
      'Patients who prefer a natural, medication-free solution to erectile issues.',
      'Individuals wanting to optimize blood flow and penile sensitivity for peak performance.'
    ], [
      'Bărbați care observă o scădere a erecțiilor matinale sau a fermității.',
      'Pacienți care preferă o soluție naturală, fără medicamente.',
      'Cei care doresc optimizarea fluxului sanguin și a sensibilității.'
    ]),
    theProcedure: t('MD Murat utilizes the "Performance Protocol." ESWT (Extracorporeal Shockwave Therapy) clears micro-plaques and triggers new blood vessel growth, while the P-Shot (PRP) accelerates cellular repair.', 'MD Murat utilizează "Protocolul de Performanță". ESWT curăță micro-plăcile și stimulează vasele noi, în timp ce P-Shot accelerează repararea.'),
    mevaAdvantage: t('We treat the *cause*, not just the symptom. Under MD Murat\'s care, we help patients move away from "pill-dependency" by restoring the natural vascular health of the penile tissue.', 'Tratăm *cauza*, nu doar simptomul. Sub îngrijirea MD Murat, ajutăm pacienții să renunțe la dependența de pastile.'),
    faq: t([
      { q: 'Does the P-Shot hurt?', a: 'We apply a clinical-grade topical anesthetic. The injection is performed with a micro-needle and is described as a mild pressure, not pain.' },
      { q: 'How many sessions are required?', a: 'A standard ESWT protocol involves 6 sessions. MD Murat will customize your P-Shot frequency based on your regenerative response.' }
    ], [
      { q: 'Doare P-Shot?', a: 'Aplicăm un anestezic topic de grad clinic; injecția se face cu un micro-ac și este descrisă ca o presiune ușoară.' },
      { q: 'Câte sesiuni sunt necesare?', a: 'Un protocol standard ESWT include 6 sesiuni.' }
    ]),
    seo: { title: 'Meva Clinic | Erectile Dysfunction Treatments: ESWT & P-Shot', desc: 'Restore peak performance with regenerative ED treatments at Meva Clinic. Protocols by MD Murat.' }
  },
  {
    id: 'penile-prosthesis',
    category: 'andrology',
    expert: 'MD Ateş',
    title: t('Penile Prosthesis (The Bionic Implant)', 'Proteză Peniană (Implantul Bionic)'),
    shortDesc: t('The permanent cure. MD Ateş performs advanced inflatable implant surgery to restore 100% reliable erectile function for men with severe, non-responsive ED.', 'Cura permanentă. MD Ateş efectuează chirurgia avansată de implant gonflabil pentru a restaura funcția erectilă 100% sigură.'),
    isThisForMe: t([
      'Men with severe Erectile Dysfunction where medications, ESWT, and injections have failed.',
      'Patients post-prostatectomy or with severe vascular damage from diabetes.',
      'Individuals seeking the "Gold Standard" for immediate, on-demand erections.'
    ], [
      'Bărbați cu DE severă unde medicamentele și injecțiile au eșuat.',
      'Pacienți post-prostatectomie sau cu afecțiuni vasculare severe din cauza diabetului.',
      'Cei care caută standardul de aur pentru erecții imediate, la cerere.'
    ]),
    theProcedure: t('Under the surgical mastery of MD Ateş, a 3-piece inflatable device is placed internally. This includes an reservoir, a discreet pump hidden in the scrotum, and two cylinders within the erectile chambers.', 'Sub măiestria chirurgicală a MD Ateş, un dispozitiv gonflabil din 3 piese este plasat intern. Pompa este ascunsă discret în scrot.'),
    mevaAdvantage: t('We provide lifelong reliability. MD Ateş exclusively uses AMS and Coloplast implants, ensuring that our patients regain spontaneous sexual freedom with a device that is completely invisible to the partner.', 'Oferim fiabilitate pe viață. MD Ateş utilizează exclusiv implanturi AMS și Coloplast, asigurând libertatea sexuală spontană.'),
    faq: t([
      { q: 'Will my partner feel it?', a: 'No. The device is hidden entirely within your natural anatomy. The erection feels firm and looks natural to the touch and eye.' },
      { q: 'What is the recovery like?', a: 'Most patients return to light activity in 1 week and can resume sexual activity 6 weeks after surgery.' }
    ], [
      { q: 'Va simți partenera dispozitivul?', a: 'Nu. Dispozitivul este ascuns complet în anatomia ta naturală. Erecția se simte fermă și arată natural.' },
      { q: 'Cum este recuperarea?', a: 'Majoritatea pacienților revin la activități ușoare într-o săptămână și pot relua viața sexuală la 6 săptămâni.' }
    ]),
    seo: { title: 'Meva Clinic | Penile Prosthesis Surgery (Implant) Turkey', desc: 'Permanent cure for severe ED. State-of-the-art inflatable implants by expert urologist MD Ateş.' }
  },

  // ==========================================
  // 3. ADVANCED MEDICINE (IVF, ONCOLOGY, ORGAN)
  // ==========================================
  {
    id: 'ivf-icsi-pgd',
    category: 'advanced',
    expert: t('Cyprus Fertility Team', 'Echipa Fertilitate Cipru'),
    title: t('In Vitro Fertilization (IVF) & Genetics', 'Fertilizare In Vitro (FIV) și Genetică'),
    shortDesc: t('Beyond conventional fertility. Our Cyprus-based specialists utilize ICSI and PGD genetic screening to maximize pregnancy rates and ensure the health of your future family.', 'Dincolo de fertilitatea convențională. Specialiștii noștri din Cipru utilizează ICSI și screening-ul PGD pentru a asigura sănătatea viitoarei tale familii.'),
    isThisForMe: t([
      'Couples with multiple failed IVF cycles or advanced maternal age.',
      'Patients with severe male factor infertility requiring ICSI/IMSI techniques.',
      'Families wanting to screen for genetic diseases or chromosomal abnormalities before transfer.'
    ], [
      'Cupluri cu multiple cicluri FIV eșuate sau vârstă maternă avansată.',
      'Pacienți cu infertilitate masculină severă care necesită tehnici ICSI/IMSI.',
      'Familii care doresc screening pentru boli genetice înainte de transfer.'
    ]),
    theProcedure: t('Operating at our elite Cyprus Centre, the process begins with personalized stimulation. We utilize ICSI to inject a single, superior sperm into the egg, followed by PGD testing to select the healthiest embryo.', 'Operând în centrul nostru de elită din Cipru, procesul începe cu stimularea personalizată. Utilizăm ICSI și testarea PGD pentru a selecta cel mai sănătos embrion.'),
    mevaAdvantage: t('Meva Clinic Cyprus provides a world-class laboratory environment. By integrating Micro-TESE for male factor and AI-driven embryo monitoring, we consistently achieve some of the highest success rates in the Mediterranean.', 'Meva Clinic Cipru oferă un mediu de laborator de clasă mondială, obținând constant unele dintre cele mai mari rate de succes din regiune.'),
    faq: t([
      { q: 'Why do you perform IVF in Cyprus?', a: 'Cyprus offers unique legal advantages for donor programs and gender selection that are restricted elsewhere, combined with world-class clinical expertise.' },
      { q: 'Is PGD safe for the embryo?', a: 'Yes. Our senior embryologists perform a microscopic biopsy on day 5 (blastocyst stage) which has zero impact on the future development of the baby.' }
    ], [
      { q: 'De ce efectuați FIV în Cipru?', a: 'Cipru oferă avantaje legale unice pentru programele de donare și selecția genului, împreună cu o expertiză clinică de top.' },
      { q: 'Este testarea PGD sigură pentru embrion?', a: 'Da. Embriologii noștri efectuează o biopsie microscopică în ziua a 5-a, care nu afectează dezvoltarea bebelușului.' }
    ]),
    seo: { title: 'Meva Clinic | Advanced IVF & Genetic Testing (PGD) Turkey', desc: 'High-success IVF treatments at Meva Clinic Cyprus. Utilizing ICSI, IMSI, and PGD genetic screening.' }
  },
  {
    id: 'ivf-cyprus',
    category: 'advanced',
    expert: t('Cyprus Advanced Clinic', 'Clinica Avansată Cipru'),
    title: t('IVF Cyprus — Advanced Fertility Centre', 'FIV Cipru — Centru Avansat de Fertilitate'),
    shortDesc: t('Your journey to parenthood. Our Cyprus branch offers full donor programs, gender selection, and advanced genetic screening in a luxury clinical setting.', 'Călătoria ta spre părinți. Filiala noastră din Cipru oferă programe complete de donare și selecție a genului într-un cadru clinic de lux.'),
    isThisForMe: t([
      'Families seeking "Family Balancing" through legal gender selection.',
      'Patients requiring legal and regulated egg or sperm donation programs.',
      'Individuals looking for the highest possible laboratory standards in the region.'
    ], [
      'Familii care caută "Echilibrarea Familiei" prin selecția legală a genului.',
      'Pacienți care necesită programe de donare de ovule sau spermatozoizi reglementate.',
      'Persoane care caută cele mai înalte standarde de laborator din regiune.'
    ]),
    theProcedure: t('Our Cyprus protocols are defined by precision. From Micro-Sort sperm selection to PGD-Aneuploidy screening, every step is designed to ensure that only the most viable, healthy embryos are selected for transfer.', 'Protocoalele noastre din Cipru sunt definite de precizie. Fiecare pas este conceput pentru a asigura transferul celor mai viabili embrioni.'),
    mevaAdvantage: t('Located in our specialized Cyprus Clinic, we provide a stress-free, 5-star experience. Our unique legal framework allows for options like Tandem Cycles and egg donation that are not available in many other European jurisdictions.', 'Situat în clinica noastră specializată din Cipru, oferim o experiență de 5 stele și opțiuni legale unice, cum ar fi Ciclurile Tandem și donarea de ovule.'),
    faq: t([
      { q: 'Is gender selection legal in Cyprus?', a: 'Yes. Gender selection for family balancing is legally permitted and performed with 99.9% accuracy via PGD testing.' },
      { q: 'Do you offer donor anonymity?', a: 'We offer both anonymous and known donor programs, fully compliant with Cyprus health regulations to ensure the rights of all parties.' }
    ], [
      { q: 'Este selecția genului legală în Cipru?', a: 'Da. Selecția genului pentru echilibrarea familiei este permisă legal și efectuată cu o acuratețe de 99,9%.' },
      { q: 'Oferiți anonimatul donatorului?', a: 'Oferim atât programe cu donatori anonimi, cât și cunoscuți, în deplină conformitate cu reglementările din Cipru.' }
    ]),
    seo: { title: 'Meva Clinic Cyprus | IVF with ICSI, IMSI & PGD', desc: 'High-success IVF at Meva Clinic Cyprus. Legal egg donation and gender selection.' }
  },
  {
    id: 'oncology-smart-drugs',
    category: 'advanced',
    expert: 'Prof. Dr. Gökhan',
    title: t('Advanced Oncology & Immunotherapy', 'Oncologie Avansată și Imunoterapie'),
    shortDesc: t('Precision cancer care. Prof. Dr. Gökhan utilizes molecular profiling and targeted immunotherapy to attack tumors at the genetic level while preserving your quality of life.', 'Îngrijire oncologică de precizie. Prof. Dr. Gökhan utilizează profilarea moleculară și imunoterapia pentru a ataca tumorile la nivel genetic.'),
    isThisForMe: t([
      'Patients seeking second opinions from internationally recognized oncology leaders.',
      'Individuals whose cancers have not responded to traditional chemotherapy.',
      'Patients looking for targeted "Smart Drug" therapies with fewer systemic side effects.'
    ], [
      'Pacienți care caută a doua opinie de la lideri recunoscuți internațional în oncologie.',
      'Persoane al căror cancer nu a răspuns la chimioterapia tradițională.',
      'Pacienți care caută terapii țintite cu "medicamente inteligente" și mai puține efecte secundare.'
    ]),
    theProcedure: t('Under the direction of Prof. Dr. Gökhan, we perform comprehensive Liquid Biopsies and Genomic Mapping. This allows us to select Immunotherapy agents that specifically train your immune system to identify and destroy cancer cells.', 'Sub direcția Prof. Dr. Gökhan, efectuăm biopsii lichide și mapare genomică pentru a selecta agenți de imunoterapie personalizați.'),
    mevaAdvantage: t('Prof. Dr. Gökhan leads our multidisciplinary Tumor Board, ensuring that every patient benefits from a personalized "Attack Plan" that integrates the latest CyberKnife S7 and molecular pharmacology.', 'Prof. Dr. Gökhan conduce comisia noastră oncologică, asigurându-se că fiecare pacient beneficiază de un plan de atac personalizat.'),
    faq: t([
      { q: 'What are Smart Drugs?', a: 'Unlike Chemo which kills all fast-growing cells, Smart Drugs target specific protein markers on cancer cells, significantly reducing damage to healthy tissue.' },
      { q: 'Can I get treatment immediately?', a: 'Yes. We prioritize international oncology cases, often beginning molecular profiling within 48 hours of your arrival.' }
    ], [
      { q: 'Ce sunt medicamentele inteligente?', a: 'Spre deosebire de chimio, medicamentele inteligente țintesc proteine specifice de pe celulele canceroase, reducând daunele asupra țesutului sănătos.' },
      { q: 'Pot primi tratament imediat?', a: 'Da. Prioritizăm cazurile internaționale, începând profilarea moleculară în 48 de ore de la sosire.' }
    ]),
    seo: { title: 'Meva Clinic | Advanced Oncology & Immunotherapy Turkey', desc: 'Precision oncology, smart drugs, and immunotherapy at Meva Clinic by Prof. Dr. Gökhan.' }
  },

  // ==========================================
  // 4. ANTI-GRAVITY SUITE
  // ==========================================
  {
    id: 'thread-lift-anti-gravity',
    category: 'anti-gravity',
    expert: 'Prof. Dr. Daghan',
    title: t('Thread Lift (French Lift)', 'Lifting cu Fire (Lifting Francez)'),
    shortDesc: t('Defy gravity instantly. Prof. Dr. Daghan utilizes biocompatible, permanent lifting threads to restore your facial architecture without a single surgical incision.', 'Sfidează gravitația instantaneu. Prof. Dr. Daghan utilizează fire de lifting biocompatibile pentru a-ți restaura arhitectura facială fără incizii chirurgicale.'),
    isThisForMe: t([
      'Patients with early to moderate sagging who aren\'t ready for a full facelift.',
      'Individuals wanting an "instant" lift for the brows, cheeks, or jawline.',
      'Those seeking a high-performance aesthetic result with zero surgical downtime.'
    ], [
      'Pacienți cu lăsare timpurie sau moderată care nu sunt pregătiți pentru un lifting total.',
      'Persoane care doresc un lifting "instant" al sprâncenelor, obrajilor sau mandibulei.',
      'Cei care caută un rezultat estetic performant fără timp de recuperare.'
    ]),
    theProcedure: t('Using the "Meva Vector" technique, Prof. Dr. Daghan inserts microscopic threads into the subcutaneous layer. These threads act as a structural scaffold, physically lifting the tissue and triggering massive long-term collagen synthesis.', 'Folosind tehnica "Meva Vector", Prof. Dr. Daghan inserează fire microscopice în stratul subcutanat, ridicând țesutul și stimulând colagenul.'),
    mevaAdvantage: t('Prof. Dr. Daghan specializes in the "Double-Needle" French Lift technique, which provides 3x the lifting power of standard PDO threads, ensuring your result is both dramatic and long-lasting.', 'Prof. Dr. Daghan este specializat în tehnica de lifting francez cu "ac dublu", care oferă o putere de ridicare de 3 ori mai mare decât firele standard.'),
    faq: t([
      { q: 'How long do the threads last?', a: 'We use premium permanent and dissolvable options. Dissolvable threads last 18-24 months, while the permanent "French Lift" can last up to 5 years.' },
      { q: 'Is it visible under the skin?', a: 'No. The threads are placed deeply enough that they are completely undetectable to both sight and touch.' }
    ], [
      { q: 'Cât timp durează firele?', a: 'Firele resorbabile durează 18-24 luni, în timp ce liftingul francez permanent poate dura până la 5 ani.' },
      { q: 'Sunt vizibile sub piele?', a: 'Nu. Firele sunt plasate suficient de profund încât să fie nedetectabile.' }
    ]),
    seo: { title: 'Meva Clinic | Non-Surgical Thread Lift Istanbul', desc: 'Instantly defy gravity with a Thread Lift at Meva Clinic. Expert application by Prof. Dr. Daghan.' }
  },
  {
    id: 'hifu-liquid-lift',
    category: 'anti-gravity',
    expert: 'Prof. Dr. Emre',
    title: t('HIFU & Liquid Lifting', 'HIFU și Liquid Lifting'),
    shortDesc: t('The non-invasive architectural reset. Prof. Dr. Emre combines High-Intensity Focused Ultrasound with strategic MD Codes filler placement to lift and contour the face.', 'Resetarea arhitecturală non-invazivă. Prof. Dr. Emre combină ultrasunetele HIFU cu fillere plasate strategic pentru a ridica și contura fața.'),
    isThisForMe: t([
      'Patients wanting to tighten their skin and sharpen their jawline without needles or surgery.',
      'Individuals experiencing volume loss and sagging who seek a "liquid" rejuvenation.',
      'Those wanting a preventative anti-aging treatment to maintain facial tightness.'
    ], [
      'Pacienți care doresc să-și întindă pielea și să-și definească mandibula fără operație.',
      'Persoane care se confruntă cu pierderea de volum și lăsarea feței.',
      'Cei care doresc un tratament anti-aging preventiv.'
    ]),
    theProcedure: t('Prof. Dr. Emre utilizes the Ultraformer III system to deliver focused heat to the SMAS layer. This is followed by a "Liquid Lift" using premium fillers to restore the structural support lost to aging.', 'Prof. Dr. Emre utilizează sistemul Ultraformer III pentru a livra căldură focalizată în stratul SMAS, urmat de un "Liquid Lift" pentru suport structural.'),
    mevaAdvantage: t('The Meva "Anti-Gravity Protocol" by Prof. Dr. Emre treats all layers of aging—from the deep muscle to the surface volume—ensuring a 3D rejuvenation that looks entirely natural.', 'Protocolul Meva "Anti-Gravity" creat de Prof. Dr. Emre tratează toate straturile îmbătrânirii, asigurând o întinerire 3D naturală.'),
    faq: t([
      { q: 'Does HIFU hurt?', a: 'You will feel a warm, prickling sensation. We use cooling technology and optional light sedation to ensure the procedure is perfectly comfortable.' },
      { q: 'Can I do this in one day?', a: 'Yes. The combined protocol takes about 90 minutes, and you can return to your social life immediately.' }
    ], [
      { q: 'Doare HIFU?', a: 'Veți simți o senzație de căldură și înțepături ușoare. Utilizăm tehnologie de răcire pentru confort maxim.' },
      { q: 'Se poate face într-o singură zi?', a: 'Da. Protocolul combinat durează aproximativ 90 de minute.' }
    ]),
    seo: { title: 'Meva Clinic | HIFU & Liquid Facelift Turkey', desc: 'Tighten skin and restore volume without surgery at Meva Clinic. Expert protocol by Prof. Dr. Emre.' }
  },

  // ==========================================
  // 5. BARIATRIC SURGERY
  // ==========================================
  {
    id: 'gastric-sleeve',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Sleeve (Sleeve Gastrectomy)', 'Gastric Sleeve (Micșorare Stomac)'),
    shortDesc: t('The transformation of a lifetime. Bariatric Master Surgeon Dr. Cuma utilizes 3D laparoscopic technology to help you shed 70-80% of excess weight and reclaim your health.', 'Transformarea vieții tale. Maestrul chirurg bariatric Dr. Cuma utilizează tehnologia laparoscopică 3D pentru a te ajuta să slăbești 70-80% din excesul de greutate.'),
    isThisForMe: t([
      'Patients with a BMI over 35 seeking a permanent solution to obesity.',
      'Individuals suffering from weight-related conditions like sleep apnea or hypertension.',
      'Those ready for a comprehensive lifestyle reset with 5-star clinical support.'
    ], [
      'Pacienți cu un IMC peste 35 care caută o soluție permanentă la obezitate.',
      'Persoane care suferă de afecțiuni legate de greutate, cum ar fi apneea de somn.',
      'Cei pregătiți pentru o resetare a stilului de viață cu suport clinic de 5 stele.'
    ]),
    theProcedure: t('Performed by Dr. Cuma using ultra-advanced 3D Laparoscopy. 80% of the stomach is precisely removed, significantly reducing the "Hunger Hormone" (Ghrelin) and restricting food intake to ensure massive, sustained weight loss.', 'Efectuată de Dr. Cuma folosind laparoscopia 3D ultra-avansată. 80% din stomac este eliminat, reducând drastic hormonul foamei (Grelina).'),
    mevaAdvantage: t('Dr. Cuma\'s "Zero-Leak" protocol utilizes triple-row electronic stapling and robotic-assisted precision. Our program includes a dedicated nutritionist and 12 months of 24/7 post-op monitoring for our international patients.', 'Protocolul "Zero-Leak" al Dr. Cuma utilizează capsularea electronică cu rând triplu. Programul include nutriționist dedicat și monitorizare 24/7 timp de 12 luni.'),
    faq: t([
      { q: 'How long until I can return to work?', a: 'Most international patients stay in Istanbul for 6 days and can return to desk work within 10-14 days.' },
      { q: 'Will I be hungry all the time?', a: 'No. Because the portion of the stomach that produces hunger hormones is removed, most patients report a significant loss of appetite.' }
    ], [
      { q: 'În cât timp mă pot întoarce la muncă?', a: 'Majoritatea pacienților internaționali stau în Istanbul 6 zile și pot reveni la birou în 10-14 zile.' },
      { q: 'Îmi va fi foame tot timpul?', a: 'Nu. Deoarece partea stomacului care produce hormonii foamei este eliminată, pofta de mâncare scade semnificativ.' }
    ]),
    seo: { title: 'Meva Clinic | Gastric Sleeve Surgery in Turkey', desc: 'Transform your life with Gastric Sleeve surgery at Meva Clinic. Expert bariatric care by Dr. Cuma.' }
  },
  {
    id: 'gastric-bypass',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Bypass & Metabolic Surgery', 'Gastric Bypass și Chirurgie Metabolică'),
    shortDesc: t('The metabolic cure. Dr. Cuma utilizes the Roux-en-Y technique to treat severe obesity and reverse Type 2 Diabetes, offering a powerful reset for your body\'s metabolism.', 'Cura metabolică. Dr. Cuma utilizează tehnica Roux-en-Y pentru a trata obezitatea severă și a remite diabetul de tip 2.'),
    isThisForMe: t([
      'Patients with BMI 40+ or those with uncontrolled Type 2 Diabetes.',
      'Individuals suffering from chronic acid reflux (GERD) that worsens with obesity.',
      'Those seeking the most powerful surgical tool for metabolic health and sustained weight loss.'
    ], [
      'Pacienți cu IMC 40+ sau cei cu diabet de tip 2 necontrolat.',
      'Persoane care suferă de reflux acid cronic (GERD).',
      'Cei care caută cel mai puternic instrument chirurgical pentru sănătatea metabolică.'
    ]),
    theProcedure: t('Under the meticulous hand of Dr. Cuma, the stomach is divided into a small pouch and the small intestine is rerouted. This "Double Action" approach restricts intake and significantly reduces calorie absorption.', 'Sub mâna meticuloasă a Dr. Cuma, stomacul este divizat, iar intestinul subțire este rerutat, reducând absorbția caloriilor.'),
    mevaAdvantage: t('Dr. Cuma\'s expertise in Metabolic Surgery consistently results in over 85% of Type 2 Diabetes patients achieving complete remission. We provide a tailored micronutrient protocol to ensure your body remains nourished during rapid weight loss.', 'Expertiza Dr. Cuma face ca peste 85% din pacienții cu diabet de tip 2 să obțină remisia completă. Oferim un protocol de micronutrienți personalizat.'),
    faq: t([
      { q: 'Is it reversible?', a: 'While technically possible, Gastric Bypass is intended to be a permanent, life-changing structural change to your digestive system.' },
      { q: 'How is it different from the Sleeve?', a: 'Bypass includes a malabsorptive component, making it more effective for diabetic patients and those with severe reflux.' }
    ], [
      { q: 'Este reversibilă?', a: 'Deși este tehnic posibil, Gastric Bypass este concepută ca o schimbare permanentă a sistemului digestiv.' },
      { q: 'Cum este diferită de Sleeve?', a: 'Bypass-ul include o componentă de malabsorbție, fiind mai eficientă pentru diabetici și cei cu reflux.' }
    ]),
    seo: { title: 'Meva Clinic | Gastric Bypass Turkey', desc: 'Cure Type 2 Diabetes and achieve massive weight loss with Gastric Bypass at Meva Clinic. Expert surgery by Dr. Cuma.' }
  },

  // ==========================================
  // 6. HAIR & BROW TRANSPLANT
  // ==========================================
  {
    id: 'meva-mixed-hair-transplant',
    category: 'hair-transplant',
    expert: 'MD Harun',
    title: t('Meva Mixed Technique (Sapphire + DHI)', 'Tehnica Mixtă Meva (Sapphire + DHI)'),
    shortDesc: t('The elite hybrid restoration. MD Harun combines Sapphire FUE for a razor-sharp hairline with DHI Choi Pen for maximum crown density in a single session.', 'Restaurarea hibridă de elită. MD Harun combină Sapphire FUE pentru o linie a părului precisă cu DHI pentru densitate maximă.'),
    isThisForMe: t([
      'Patients demanding a 100% natural, undetectable frontal hairline.',
      'Individuals seeking the highest graft density currently achievable in modern medicine.',
      'Those wanting to combine two premium techniques for a total-scalp restoration.'
    ], [
      'Pacienți care solicită o linie frontală 100% naturală și nedetectabilă.',
      'Persoane care caută cea mai mare densitate de grefe realizabilă în medicina modernă.',
      'Cei care doresc să combine două tehnici premium pentru o restaurare totală.'
    ]),
    theProcedure: t('Under the master precision of MD Harun, we utilize Sapphire Tipped blades for the aesthetic hairline channels. For the high-density mid-scalp and crown, the DHI Choi Pen is used to implant follicles directly, bypassing the channel phase for maximum survival.', 'Sub precizia de maestru a MD Harun, utilizăm lame de Safir pentru linia frontală și stiloul Choi DHI pentru densitatea în creștet.'),
    mevaAdvantage: t('The Meva "Mixed Method" by MD Harun offers the best of both worlds: the artistic unmatchable precision of Sapphire and the extreme, trauma-free density of DHI. Results are consistently thicker and more natural than any single-technique approach.', 'Metoda Mixtă Meva a MD Harun oferă ce este mai bun din ambele lumi: precizia artistică Sapphire și densitatea extremă DHI.'),
    faq: t([
      { q: 'Why mix the two techniques?', a: 'Sapphire is superior for designing unifollicular natural hairlines, while DHI is the gold standard for placing high-density grafts between existing hairs.' },
      { q: 'Is it more expensive?', a: 'It represents our premium restoration tier, utilizing double the specialized equipment and a larger clinical team led by MD Harun.' }
    ], [
      { q: 'De ce să combinăm cele două tehnici?', a: 'Sapphire este superioară pentru linia frontală naturală, în timp ce DHI este standardul de aur pentru densitatea mare.' },
      { q: 'Este mai scumpă?', a: 'Reprezintă nivelul nostru premium de restaurare, utilizând echipamente specializate și o echipă clinică extinsă.' }
    ]),
    seo: { title: 'Meva Clinic | Mixed Hair Transplant Turkey', desc: 'Experience the ultimate restoration with the Meva Mixed Technique by MD Harun: Sapphire and DHI.' }
  },
  {
    id: 'dhi-hair-transplant',
    category: 'hair-transplant',
    expert: 'MD Harun',
    title: t('DHI Hair Transplant (Choi Pen)', 'Transplant de Păr DHI (Stiloul Choi)'),
    shortDesc: t('High-density, trauma-free restoration. MD Harun utilizes the Choi Implanter Pen to achieve superior graft survival and a faster recovery without the need for traditional channels.', 'Restaurare de înaltă densitate, fără traume. MD Harun utilizează stiloul Choi pentru o supraviețuire superioară a grefelor.'),
    isThisForMe: t([
      'Patients wanting to increase density in thinning areas without shaving their existing hair.',
      'Individuals seeking the fastest possible clinical recovery and minimal scabbing.',
      'Those demanding the absolute highest graft survival rates (95%+).'
    ], [
      'Pacienți care doresc să mărească densitatea fără a rade părul existent.',
      'Persoane care caută cea mai rapidă recuperare clinică și coji minime.',
      'Cei care solicită cele mai mari rate de supraviețuire a grefelor (peste 95%).'
    ]),
    theProcedure: t('MD Harun personally oversees the direct implantation process. Follicles are loaded into the Choi Pen and placed into the scalp in a single motion, protecting the delicate tissue and ensuring optimal depth and angle for every hair.', 'MD Harun supraveghează personal procesul de implantare directă. Foliculii sunt plasați în scalp dintr-o singură mișcare, protejând țesutul delicat.'),
    mevaAdvantage: t('MD Harun\'s DHI technique achieves "Ultra-Density" (up to 100 grafts/cm²). Because we skip the channel-cutting phase, there is significantly less bleeding and trauma, allowing you to return to your social life faster.', 'Tehnica DHI a MD Harun obține "Ultra-Densitate". Deoarece sărim peste faza de tăiere a canalelor, trauma este mult mai mică.'),
    faq: t([
      { q: 'Can I have DHI without shaving?', a: 'Yes. One of the primary benefits of MD Harun\'s DHI technique is the ability to implant between long hairs without a full shave.' },
      { q: 'Is the recovery faster than FUE?', a: 'Yes. Most DHI patients experience significantly less redness and can return to work 3-4 days post-op.' }
    ], [
      { q: 'Pot face DHI fără să mă rad?', a: 'Da. Unul dintre beneficiile tehnicii DHI a MD Harun este capacitatea de a implanta între firele lungi.' },
      { q: 'Recuperarea este mai rapidă decât la FUE?', a: 'Da. Majoritatea pacienților DHI observă mult mai puțină roșeață.' }
    ]),
    seo: { title: 'Meva Clinic | DHI Hair Transplant Turkey', desc: 'Premium DHI hair restoration with Choi Pen in Istanbul. Expert density and fast recovery by MD Harun.' }
  },
  {
    id: 'eyebrow-transplant',
    category: 'hair-transplant',
    expert: 'MD Harun',
    title: t('Precision Eyebrow Transplant', 'Transplant de Sprâncene de Precizie'),
    shortDesc: t('Permanent architectural restoration of the face. MD Harun\'s signature Golden Ratio design creates perfectly framed eyes with 100% natural density.', 'Restaurarea arhitecturală permanentă a feței. Designul semnătură "Golden Ratio" al MD Harun creează sprâncene perfect conturate cu densitate 100% naturală.'),
    isThisForMe: t([
      'Individuals with over-plucked, thinning, or scarred eyebrows seeking a permanent fix.',
      'Patients tired of temporary solutions like microblading or daily makeup.',
      'Those demanding the "Meva Secret" for a result that is indistinguishable from natural growth.'
    ], [
      'Persoane cu sprâncene subțiate sau cicatrice care caută o soluție permanentă.',
      'Pacienți sătui de soluții temporare precum microblading-ul sau machiajul zilnic.',
      'Cei care doresc "Secretul Meva" pentru un rezultat imposibil de distins de creșterea naturală.'
    ]),
    theProcedure: t('MD Harun applies the secret to a flawless look: Graft Dissection. During the procedure, the strongest multi-follicle grafts are meticulously separated under microscopic guidance into single follicles. These are then implanted at an extremely acute 10-15° angle using DHI Choi Pens to ensure the hair lies flat against the skin, never standing upright.', 'MD Harun aplică secretul unui aspect impecabil: Micro-disecția grefelor. În timpul procedurii, cele mai puternice grefe multiple sunt separate meticulos sub microscop în foliculi singulari. Aceștia sunt apoi implantați la un unghi extrem de ascuțit de 10-15 grade folosind DHI Choi Pen, asigurându-se că părul stă plat pe piele, fără a crește vertical.'),
    mevaAdvantage: t('The Meva secret lies in MD Harun\'s Golden Ratio mapping and microscopic micro-grafting technique. By ensuring zero incisions or scars, we achieve a result so natural that even under close inspection, the transplant is undetectable.', 'Secretul Meva constă în maparea Golden Ratio a MD Harun și tehnica de micro-grafting. Prin asigurarea a zero incizii sau cicatrici, obținem un rezultat nedetectabil chiar și la o inspecție atentă.'),
    faq: t([
      { q: 'Will my eyebrows look like "hair" or "eyebrows"?', a: 'By using MD Harun\'s single-follicle dissection technique and ultra-acute 10-degree angles, the transplanted hair mimics the texture and direction of natural eyebrows perfectly.' },
      { q: 'How often do I need to trim them?', a: 'Because the hair is harvested from the scalp, it will grow at its original rate. You will need to trim them every 10-14 days to maintain your desired length.' }
    ], [
      { q: 'Sprâncenele vor arăta ca "părul" sau ca "sprâncenele"?', a: 'Prin tehnica MD Harun de disecție a foliculilor singulari și unghiurile de 10 grade, părul transplantat imită perfect textura sprâncenelor naturale.' },
      { q: 'Cât de des trebuie să le tund?', a: 'Deoarece părul provine de pe scalp, va crește în ritmul său original. Va trebui să le tunzi la fiecare 10-14 zile.' }
    ]),
    seo: { title: 'Meva Clinic | Precision Eyebrow Transplant Istanbul', desc: 'Permanent architectural eyebrow restoration by MD Harun at Meva Clinic. 100% natural, scar-free results.' }
  },

  // ==========================================
  // 7. DENTAL CARE
  // ==========================================
  {
    id: 'dental-implants',
    category: 'dental',
    expert: 'Dr. Osman',
    title: t('Premium Dental Implants', 'Implanturi Dentare Premium'),
    shortDesc: t('The permanent foundation for your smile. Dr. Osman utilizes world-class Straumann and Nobel Biocare systems to restore missing teeth with lifetime structural integrity.', 'Fundația permanentă a zâmbetului tău. Dr. Osman utilizează sisteme Straumann și Nobel Biocare pentru a restaura dinții lipsă.'),
    isThisForMe: t([
      'Individuals with one or more missing teeth seeking a permanent, non-removable solution.',
      'Patients wanting to prevent jawbone loss and maintain facial structure.',
      'Those demanding the highest quality dental components with global lifetime warranties.'
    ], [
      'Persoane cu unul sau mai mulți dinți lipsă care caută o soluție fixă.',
      'Pacienți care doresc să prevină resorbția osoasă.',
      'Cei care solicită componente dentare de cea mai înaltă calitate.'
    ]),
    theProcedure: t('Dr. Osman utilizes 3D CBCT imaging to map your bone structure with 100% accuracy. A medical-grade titanium or zirconia implant is precisely placed into the jawbone, acting as a synthetic root that fuses permanently with your anatomy.', 'Dr. Osman utilizează imagistica 3D CBCT pentru a mapa structura osoasă. Un implant de titan sau zirconiu este plasat cu precizie în osul maxilar.'),
    mevaAdvantage: t('We prioritize "Zero-Failure" biological integration. Under Dr. Osman\'s care, Meva Clinic exclusively uses premium implant systems with a 99% success rate, ensuring your new teeth feel and function exactly like natural ones.', 'Prioritizăm integrarea biologică. Sub îngrijirea Dr. Osman, folosim exclusiv sisteme de implant premium cu o rată de succes de 99%.'),
    faq: t([
      { q: 'Is it painful?', a: 'The procedure is performed under local anesthesia and is often described as less painful than a tooth extraction. Most patients return to eating soft foods within 24 hours.' },
      { q: 'How long until I get my final crown?', a: 'After the implant is placed, the bone needs 3 months to fuse (osseointegration). After this, Dr. Osman secures your final, permanent porcelain or zirconium crown.' }
    ], [
      { q: 'Este dureros?', a: 'Procedura se face sub anestezie locală și este adesea descrisă ca fiind mai puțin dureroasă decât o extracție.' },
      { q: 'Cât timp durează până primesc coroana finală?', a: 'Osul are nevoie de 3 luni pentru a fuziona cu implantul, după care Dr. Osman fixează coroana finală.' }
    ]),
    seo: { title: 'Meva Clinic | Dental Implants Istanbul', desc: 'Premium Straumann and Nobel Biocare implants at Meva Clinic. Expert restoration by Dr. Osman.' }
  },
  {
    id: 'hollywood-smile',
    category: 'dental',
    expert: 'Dr. Şiyar',
    title: t('Hollywood Smile Design', 'Design Zâmbet Hollywoodian'),
    shortDesc: t('The ultimate aesthetic transformation. Dr. Şiyar utilizes AI-driven digital smile design and ultra-thin porcelain veneers to create your custom, red-carpet-ready smile.', 'Transformarea estetică supremă. Dr. Şiyar utilizează designul digital și fațete de porțelan ultra-subțiri pentru un zâmbet de Hollywood.'),
    isThisForMe: t([
      'Patients with discolored, chipped, or slightly misaligned teeth wanting a "perfect" look.',
      'Individuals seeking a symmetrical, bright, and harmonious dental aesthetic.',
      'Those demanding the most advanced cosmetic dentistry available in modern clinics.'
    ], [
      'Pacienți cu dinți pătați sau ciobiți care doresc un aspect "perfect".',
      'Persoane care caută o estetică dentară simetrică și luminoasă.',
      'Cei care solicită cea mai avansată stomatologie cosmetică disponibilă.'
    ]),
    theProcedure: t('Under the artistic direction of Dr. Şiyar, we begin with 3D intraoral scanning. Teeth are minimally prepared, and custom-crafted E-Max or Zirconium veneers are bonded to the surface, flawlessly correcting color and shape.', 'Sub direcția artistică a Dr. Şiyar, începem cu scanarea 3D. Dinții sunt pregătiți minim, iar fațetele E-Max sunt aplicate pe suprafață.'),
    mevaAdvantage: t('Dr. Şiyar utilizes "Face-Driven" smile design software. We don\'t just make white teeth; we design a smile that matches your lip line, skin tone, and facial proportions for a result that is both stunning and natural.', 'Dr. Şiyar utilizează software de design "Face-Driven". Nu facem doar dinți albi; proiectăm un zâmbet care să se potrivească perfect feței tale.'),
    faq: t([
      { q: 'Will my teeth look "fake" or "too white"?', a: 'No. Dr. Şiyar customizes the translucency and shade gradient of each veneer to ensure your smile has the natural "depth" of real enamel.' },
      { q: 'How long do veneers last?', a: 'With proper care, premium porcelain veneers last 15-20 years. They are highly resistant to staining from coffee, tea, and tobacco.' }
    ], [
      { q: 'Vor arăta dinții "falși" sau "prea albi"?', a: 'Nu. Dr. Şiyar personalizează translucența fiecărei fațete pentru a asigura "profunzimea" naturală a smalțului.' },
      { q: 'Cât durează fațetele?', a: 'Cu o îngrijire adecvată, fațetele de porțelan durează 15-20 de ani.' }
    ]),
    seo: { title: 'Meva Clinic | Hollywood Smile Istanbul', desc: 'Transform your smile with digital design and premium veneers by Dr. Şiyar at Meva Clinic.' }
  },
  {
    id: 'all-on-4-implants',
    category: 'dental',
    expert: 'Dr. Cemal',
    title: t('All-on-4 Full Arch Restoration', 'Restaurare Completă All-on-4'),
    shortDesc: t('Total dental rebirth. Dr. Cemal restores an entire arch of missing teeth with just four strategic implants, providing immediate functionality and a permanent, fixed smile.', 'Renaștere dentară totală. Dr. Cemal restaurează o întreagă arcadă cu doar patru implanturi strategice.'),
    isThisForMe: t([
      'Patients with total tooth loss or those with failing teeth needing full-mouth extraction.',
      'Individuals with low bone density who have been told traditional implants are impossible.',
      'Those wanting to abandon uncomfortable, removable dentures for a fixed, natural-feeling solution.'
    ], [
      'Pacienți cu pierdere totală a dinților sau care necesită extracții totale.',
      'Persoane cu densitate osoasă scăzută.',
      'Cei care doresc să renunțe la protezele mobile în favoarea unei soluții fixe.'
    ]),
    theProcedure: t('Dr. Cemal specializes in the All-on-4 protocol. Four titanium implants are placed at specific angles to maximize existing bone support. A customized, temporary fixed bridge is often attached on the same day.', 'Dr. Cemal este specializat în protocolul All-on-4. Patru implanturi de titan sunt plasate în unghiuri specifice, oferind adesea o lucrare fixă în aceeași zi.'),
    mevaAdvantage: t('We offer "Teeth in a Day" clinical excellence. Under Dr. Cemal\'s care, we eliminate the need for painful bone grafting in most cases, allowing our patients to walk out with a full, functional smile in record time.', 'Oferim excelență clinică "Teeth in a Day". Sub îngrijirea Dr. Cemal, eliminăm necesitatea adițiilor osoase dureroase în majoritatea cazurilor.'),
    faq: t([
      { q: 'Is it stable for eating?', a: 'Absolutely. All-on-4 is a structural restoration. Once healed, you can eat steak, apples, and all your favorite foods with 100% confidence.' },
      { q: 'What is the success rate?', a: 'The All-on-4 technique has a global success rate of over 98% when performed by a specialist like Dr. Cemal.' }
    ], [
      { q: 'Este stabilă pentru mâncat?', a: 'Absolut. Odată vindecată, poți mânca orice alimente preferi cu încredere deplină.' },
      { q: 'Care este rata de succes?', a: 'Tehnica All-on-4 are o rată de succes globală de peste 98% sub mâna unui specialist ca Dr. Cemal.' }
    ]),
    seo: { title: 'Meva Clinic | All-on-4 Dental Implants Turkey', desc: 'Full arch restoration in one day with All-on-4 implants. Expert surgery by Dr. Cemal.' }
  },
  {
    id: 'zirconium-crowns',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Zirconium Dental Crowns', 'Coroane Dentare din Zirconiu'),
    shortDesc: t('The metal-free evolution. Dr. Yusuf utilizes high-translucency Zirconium to restore damaged teeth with extreme durability and natural, light-reflecting aesthetics.', 'Evoluția fără metal. Dr. Yusuf utilizează zirconiul de înaltă translucență pentru a restaura dinții cu durabilitate extremă.'),
    isThisForMe: t([
      'Patients needing to restore heavily decayed or fractured teeth.',
      'Individuals wanting to replace old, graying "metal-fused" crowns with a modern alternative.',
      'Those seeking a biocompatible material that is gentle on the gums and looks 100% natural.'
    ], [
      'Pacienți care au nevoie de restaurarea dinților cariați sau fracturați.',
      'Persoane care doresc înlocuirea vechilor coroane metalice inestetice.',
      'Cei care caută un material biocompatibil și natural.'
    ]),
    theProcedure: t('Dr. Yusuf utilizes intraoral digital scanning to eliminate uncomfortable molds. The crown is designed in 3D and precision-milled from a single block of Zirconium, ensuring a perfect "micro-fit" with your natural tooth.', 'Dr. Yusuf utilizează scanarea digitală intraorală. Coroana este proiectată 3D și frezată cu precizie pentru o potrivire perfectă.'),
    mevaAdvantage: t('We utilize CAD/CAM digital craftsmanship. Dr. Yusuf\'s precision ensures that there is zero "dark line" at the gum border, a common issue with traditional crowns, ensuring a flawless and healthy smile.', 'Utilizăm măiestria digitală CAD/CAM. Precizia Dr. Yusuf asigură absența "liniei negre" la marginea gingiei.'),
    faq: t([
      { q: 'Is Zirconium stronger than Porcelain?', a: 'Zirconium is significantly stronger and more resistant to chipping than pure porcelain, making it ideal for both front and back teeth.' },
      { q: 'Will I have sensitivity?', a: 'Because Zirconium is a poor conductor of heat and cold, patients typically experience much less sensitivity than with traditional metal crowns.' }
    ], [
      { q: 'Este zirconiul mai rezistent decât porțelanul?', a: 'Zirconiul este semnificativ mai rezistent, fiind ideal atât pentru dinții frontali, cât și pentru cei laterali.' },
      { q: 'Voi avea sensibilitate?', a: 'Pacienții experimentează de obicei mult mai puțină sensibilitate decât la coroanele metalice tradiționale.' }
    ]),
    seo: { title: 'Meva Clinic | Zirconium Crowns Istanbul', desc: 'Get durable, natural-looking zirconium crowns with CAD/CAM technology by Dr. Yusuf at Meva Clinic.' }
  }
];

export const findTreatment = (slug) => 
  treatmentsData.find(t => t.id === slug) || null;

export default treatmentsData;
