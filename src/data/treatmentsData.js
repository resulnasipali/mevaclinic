// src/data/treatmentsData.js
/**
 * ULTIMATE CLINICAL DATABASE - PROFESSIONAL HOSPITAL HIERARCHY
 * This file contains all 35+ clinical modules with zero placeholders.
 * Enforces: { en: string, ro: string } for all multilingual fields.
 */

const t = (en, ro) => ({ en, ro });

export const treatmentsData = [
  // ==========================================
  // 1. BARIATRIC SURGERY (4)
  // ==========================================
  {
    id: 'gastric-sleeve',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Sleeve (Sleeve Gastrectomy)', 'Gastric Sleeve (Micșorare Stomac)'),
    shortDesc: t('The gold standard for rapid, sustainable weight loss. Dr. Cuma utilizes 3D laparoscopy to remove 80% of the stomach, reducing hunger hormones permanently.', 'Standardul de aur pentru slăbirea rapidă. Dr. Cuma utilizează laparoscopia 3D pentru a elimina 80% din stomac.'),
    isThisForMe: t(['BMI > 35', 'Weight-related health issues', 'Ready for lifestyle change'], ['IMC > 35', 'Probleme de sănătate legate de greutate', 'Pregătit pentru schimbarea stilului de viață']),
    semanticSeoText: t(
      "Gastric sleeve surgery, also known as sleeve gastrectomy, is a leading bariatric procedure performed at Meva Clinic's JCI-accredited facility in Istanbul. Dr. Cuma utilizes state-of-the-art 3D laparoscopy to precisely remove approximately 80% of the stomach. This not only restricts food intake but significantly reduces the production of ghrelin, the hunger hormone. The procedure offers rapid, sustainable weight loss with a 90% success rate. Our VIP package includes 5-star hotel accommodation, Mercedes VIP transfer, and 12 months of dedicated post-operative nutritional coaching to ensure long-term success.",
      "Operația de Gastric Sleeve (micșorarea stomacului) este o procedură bariatrică de top efectuată în clinica Meva din Istanbul, acreditată JCI. Dr. Cuma utilizează laparoscopia 3D de ultimă generație pentru a îndepărta cu precizie aproximativ 80% din stomac. Acest lucru nu doar restricționează aportul alimentar, dar reduce semnificativ producția de grelină, hormonul foamei. Procedura oferă o pierdere în greutate rapidă și durabilă, cu o rată de succes de 90%. Pachetul nostru VIP include cazare la hotel de 5 stele, transfer VIP cu Mercedes și 12 luni de coaching nutrițional dedicat."
    ),
    theProcedure: t('Laparoscopic resection of the stomach volume.', 'Rezecția laparoscopică a volumului stomacului.'),
    mevaAdvantage: t('Triple-row electronic stapling and 12-month nutrition support.', 'Capsulare electronică pe trei rânduri și suport nutrițional 12 luni.'),
    specs: t({ hospitalStay: '2-3 Nights', hotelStay: '4 Nights', returnToWork: '10 Days', anesthesia: 'General' }, { hospitalStay: '2-3 Nopți', hotelStay: '4 Nopți', returnToWork: '10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I regain weight?', a: 'With our nutritional follow-up, success rates are over 90%.' }], [{ q: 'Voi pune greutatea la loc?', a: 'Cu programul nostru de nutriție, rata de succes este de peste 90%.' }])
  },
  {
    id: 'gastric-bypass',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Bypass (Metabolic Surgery)', 'Gastric Bypass (Chirurgie Metabolică)'),
    shortDesc: t('Ideal for Type 2 Diabetes remission and severe obesity. Reroutes the digestive tract to limit absorption and volume.', 'Ideal pentru remisia diabetului de tip 2 și obezitate severă.'),
    isThisForMe: t(['BMI > 40', 'Type 2 Diabetes', 'Severe acid reflux'], ['IMC > 40', 'Diabet de tip 2', 'Reflux acid sever']),
    theProcedure: t('Creation of a small gastric pouch and intestinal rerouting.', 'Crearea unui mic buzunar gastric și rerutarea intestinală.'),
    mevaAdvantage: t('Highest diabetes remission rates in the region.', 'Cea mai mare rată de remisie a diabetului din regiune.'),
    specs: t({ hospitalStay: '3-4 Nights', hotelStay: '5 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '3-4 Nopți', hotelStay: '5 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it reversible?', a: 'It is intended to be permanent but technically reversible in emergencies.' }], [{ q: 'Este reversibilă?', a: 'Este concepută ca fiind permanentă, dar tehnic reversibilă în urgențe.' }])
  },
  {
    id: 'gastric-balloon',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Balloon (Allurion)', 'Balon Gastric (Allurion)'),
    shortDesc: t('Non-surgical weight loss. A swallowable capsule that induces fullness for 4-6 months. No anesthesia required.', 'Slăbire fără operație. O capsulă care se înghite și induce sațietatea timp de 4-6 luni.'),
    isThisForMe: t(['BMI 27-35', 'Fear of surgery', 'Jumpstart weight loss'], ['IMC 27-35', 'Teama de operație', 'Start rapid în slăbire']),
    theProcedure: t('Swallowing a capsule that inflates in the stomach.', 'Înghițirea unei capsule care se umflă în stomac.'),
    mevaAdvantage: t('Includes smart scale and app-monitored coaching.', 'Include cântar inteligent și coaching monitorizat prin aplicație.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Next Day', anesthesia: 'None' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'A doua zi', anesthesia: 'Fără' }),
    faq: t([{ q: 'How is it removed?', a: 'It passes naturally after 16 weeks.' }], [{ q: 'Cum se elimină?', a: 'Se elimină natural după 16 săptămâni.' }])
  },
  {
    id: 'gastric-botox',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Botox Injection', 'Botox Gastric (Injectare)'),
    shortDesc: t('Endoscopic procedure that slows stomach emptying, keeping you full longer and reducing appetite.', 'Procedură endoscopică ce încetinește golirea stomacului, reducând pofta de mâncare.'),
    isThisForMe: t(['Mild overweight', 'Appetite control issues', 'Non-surgical seekers'], ['Supraponderalitate ușoară', 'Controlul poftei de mâncare', 'Căutători de soluții non-chirurgicale']),
    theProcedure: t('Endoscopic injection into the stomach wall.', 'Injectare endoscopică în peretele stomacului.'),
    mevaAdvantage: t('15-minute procedure, zero recovery time.', 'Procedură de 15 minute, zero timp de recuperare.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Sedation' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Sedare' }),
    faq: t([{ q: 'How long does it last?', a: 'Effects last for 4-6 months.' }], [{ q: 'Cât timp durează?', a: 'Efectele durează 4-6 luni.' }])
  },

  // ==========================================
  // 2. HAIR & BROW TRANSPLANT (3)
  // ==========================================
  {
    id: 'meva-mixed-hair',
    category: 'hair',
    expert: 'MD Harun',
    title: t('Meva Mixed Technique (Sapphire + DHI)', 'Tehnica Mixtă Meva (Sapphire + DHI)'),
    shortDesc: t('The ultimate hybrid hair restoration. Sapphire FUE for a sharp hairline and DHI for maximum crown density.', 'Restaurarea hibridă supremă. Sapphire FUE pentru linia părului și DHI pentru densitate.'),
    isThisForMe: t(['Advanced hair loss', 'Desire for maximum density', 'Natural result seekers'], ['Pierdere avansată a părului', 'Dorință de densitate maximă', 'Căutători de rezultate naturale']),
    semanticSeoText: t(
      "The Meva Mixed Technique represents the pinnacle of hair restoration in Turkey, combining the precision of Sapphire FUE for a natural, sharp hairline with the high-density implantation of the DHI (Direct Hair Implantation) technique using the Choi Pen. MD Harun ensures a 99% graft survival rate by minimizing scalp trauma. This painless procedure is performed under local anesthesia and guarantees natural, lifelong results. Our exclusive packages cover all logistics from airport pickup to premium aftercare kits.",
      "Tehnica Mixtă Meva reprezintă apogeul restaurării capilare în Turcia, combinând precizia Sapphire FUE pentru o linie a părului naturală și conturată, cu implantarea de înaltă densitate a tehnicii DHI folosind stiloul Choi. MD Harun asigură o rată de supraviețuire a grefelor de 99% prin minimizarea traumei asupra scalpului. Această procedură nedureroasă garantează rezultate naturale pe viață. Pachetele noastre exclusive acoperă toată logistica, de la preluarea de la aeroport până la kituri premium de îngrijire."
    ),
    theProcedure: t('Sapphire micro-channels combined with direct Choi Pen implantation.', 'Micro-canale Sapphire combinate cu implantare directă cu stiloul Choi.'),
    mevaAdvantage: t('99% graft survival and 12-month growth guarantee.', 'Supraviețuire a grefelor de 99% și garanție de creștere 12 luni.'),
    specs: t({ hospitalStay: 'None', hotelStay: '3 Nights', returnToWork: '3 Days', anesthesia: 'Pain-Free Local' }, { hospitalStay: 'Fără', hotelStay: '3 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală fără durere' }),
    faq: t([{ q: 'When will I see results?', a: 'Final results appear between 10-12 months.' }], [{ q: 'Când voi vedea rezultatele?', a: 'Rezultatele finale apar între 10-12 luni.' }])
  },
  {
    id: 'dhi-hair-transplant',
    category: 'hair',
    expert: 'MD Harun',
    title: t('DHI (Direct Hair Implantation)', 'DHI (Implantare Directă de Păr)'),
    shortDesc: t('No-shave option available. High-density implantation using the specialized Choi Pen for faster healing.', 'Opțiune fără ras disponibilă. Implantare de înaltă densitate pentru vindecare rapidă.'),
    isThisForMe: t(['Female hair loss', 'No-shave seekers', 'Specific thinning areas'], ['Pierderea părului la femei', 'Cei care nu doresc ras în cap', 'Zone specifice de rărire']),
    theProcedure: t('Direct follicle transfer without separate channel opening.', 'Transfer direct de folicul fără deschidere separată de canale.'),
    mevaAdvantage: t('Less trauma to the scalp and higher density.', 'Traumă redusă asupra scalpului și densitate mai mare.'),
    specs: t({ hospitalStay: 'None', hotelStay: '3 Nights', returnToWork: '3 Days', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '3 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală' }),
    faq: t([{ q: 'Is it better than FUE?', a: 'For density in thinning areas, DHI is superior.' }], [{ q: 'Este mai bună decât FUE?', a: 'Pentru densitate în zonele rărite, DHI este superioară.' }])
  },
  {
    id: 'eyebrow-transplant',
    category: 'hair',
    expert: 'MD Harun',
    title: t('Eyebrow Transplant (Meva Secret)', 'Transplant de Sprâncene (Meva Secret)'),
    shortDesc: t('Micro-grafting of multi-follicles into single units. MD Harun designs using the Golden Ratio and 10-15 degree natural angles.', 'Micro-grefarea foliculilor multipli în unități unice. MD Harun proiectează folosind Proporția de Aur.'),
    isThisForMe: t(['Thin eyebrows', 'Scars in brow area', 'Permanent brow design seekers'], ['Sprâncene subțiri', 'Cicatrici în zona sprâncenelor', 'Căutători de design permanent']),
    theProcedure: t('DHI Choi Pen implantation at ultra-natural 10-15 degree angles.', 'Implantare DHI Choi Pen la unghiuri ultra-naturale de 10-15 grade.'),
    mevaAdvantage: t('The "Meva Secret": microscopic micro-grafting for undetectable results.', '"Secretul Meva": micro-grefare microscopică pentru rezultate nedetectabile.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: '2 Days', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: '2 Zile', anesthesia: 'Locală' }),
    faq: t([{ q: 'Will it look fake?', a: 'No, we use single-hair grafts to mimic natural brow texture.' }], [{ q: 'Va arăta artificial?', a: 'Nu, folosim grefe cu un singur fir pentru a imita textura naturală.' }])
  },

  // ==========================================
  // 3. DENTAL CARE (4)
  // ==========================================
  {
    id: 'dental-implants',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Premium Dental Implants', 'Implanturi Dentare Premium'),
    shortDesc: t('Straumann & Nobel Biocare systems. Permanent solution for missing teeth with lifetime warranty.', 'Sisteme Straumann & Nobel Biocare. Soluție permanentă pentru dinții lipsă cu garanție pe viață.'),
    isThisForMe: t(['Missing teeth', 'Uncomfortable dentures', 'Jawbone preservation seekers'], ['Dinți lipsă', 'Proteze inconfortabile', 'Cei care doresc conservarea osului']),
    theProcedure: t('Titanium root placement followed by zirconium crown.', 'Plasarea rădăcinii de titan urmată de coroana de zirconiu.'),
    mevaAdvantage: t('Same-day temporary crowns and digital planning.', 'Coroane temporare în aceeași zi și planificare digitală.'),
    specs: t({ hospitalStay: 'None', hotelStay: '5 Nights', returnToWork: 'Immediate', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '5 Nopți', returnToWork: 'Imediat', anesthesia: 'Locală' }),
    faq: t([{ q: 'Is it painful?', a: 'No, performed under local anesthesia with zero-pain protocol.' }], [{ q: 'Este dureros?', a: 'Nu, se efectuează sub anestezie locală cu protocol zero durere.' }])
  },
  {
    id: 'zirconium-crowns',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Zirconium Veneers & Crowns', 'Coroane și Fațete Zirconiu'),
    shortDesc: t('Highly durable and aesthetic metal-free restorations. Perfect light reflection for a natural look.', 'Restaurări fără metal, durabile și estetice. Reflexie perfectă a luminii.'),
    isThisForMe: t(['Discolored teeth', 'Chipped or broken teeth', 'Aesthetic improvement'], ['Dinți pătați', 'Dinți ciobiți sau rupți', 'Îmbunătățire estetică']),
    semanticSeoText: t(
      "Zirconium veneers and crowns at Meva Clinic provide an exceptional, highly durable, and aesthetic metal-free dental restoration. Utilizing advanced CAD/CAM digital design technology, Dr. Yusuf creates precision-milled crowns that perfectly mimic the light reflection and translucency of natural teeth. Zirconium is bio-compatible, ensuring excellent gum health without the dark lines associated with traditional metal-based crowns. Experience a flawless Hollywood smile with our comprehensive Turkey dental packages.",
      "Fațetele și coroanele din zirconiu la Meva Clinic oferă o restaurare dentară estetică, fără metal și extrem de durabilă. Utilizând tehnologia avansată de design digital CAD/CAM, Dr. Yusuf creează coroane frezate cu precizie care imită perfect reflexia luminii dinților naturali. Zirconiul este biocompatibil, asigurând o sănătate excelentă a gingiilor, fără liniile închise asociate coroanelor tradiționale. Obține un zâmbet Hollywood impecabil cu pachetele noastre dentare complete din Turcia."
    ),
    theProcedure: t('CAD/CAM digital design and precision milling.', 'Design digital CAD/CAM și frezare de precizie.'),
    mevaAdvantage: t('Bio-compatible material that protects gum health.', 'Material biocompatibil care protejează sănătatea gingiilor.'),
    specs: t({ hospitalStay: 'None', hotelStay: '5 Nights', returnToWork: 'Next Day', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '5 Nopți', returnToWork: 'A doua zi', anesthesia: 'Locală' }),
    faq: t([{ q: 'How long do they last?', a: '15-20 years with proper oral hygiene.' }], [{ q: 'Cât timp durează?', a: '15-20 de ani cu o igienă orală adecvată.' }])
  },
  {
    id: 'hollywood-smile',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Hollywood Smile Design', 'Design Zâmbet Hollywood'),
    shortDesc: t('Total smile makeover using E-Max or Zirconium veneers tailored to your facial proportions.', 'Transformare totală a zâmbetului folosind fațete E-Max sau Zirconiu.'),
    isThisForMe: t(['Gummy smile', 'Misaligned teeth', 'Total aesthetic reset seekers'], ['Zâmbet gingival', 'Dinți strâmbi', 'Cei care caută o resetare estetică totală']),
    theProcedure: t('Full arch rehabilitation with digital smile mapping.', 'Reabilitare completă a arcadei cu mapare digitală.'),
    mevaAdvantage: t('"Face-Driven" design for the most natural aesthetic.', 'Design "Face-Driven" pentru cea mai naturală estetică.'),
    specs: t({ hospitalStay: 'None', hotelStay: '6 Nights', returnToWork: 'Next Day', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '6 Nopți', returnToWork: 'A doua zi', anesthesia: 'Locală' }),
    faq: t([{ q: 'Will it look too white?', a: 'We customize shades to match your skin tone and lip line.' }], [{ q: 'Va arăta prea alb?', a: 'Personalizăm nuanțele pentru a se potrivi cu tonul pielii tale.' }])
  },
  {
    id: 'all-on-4-dental',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('All-on-4 / All-on-6 Restoration', 'Restaurare All-on-4 / All-on-6'),
    shortDesc: t('Full mouth reconstruction on 4 or 6 implants. Ideal for total tooth loss or failing teeth.', 'Reconstrucție totală a arcadei pe 4 sau 6 implanturi.'),
    isThisForMe: t(['Total tooth loss', 'Severe bone loss', 'Denture wearers'], ['Pierdere totală a dinților', 'Pierdere osoasă severă', 'Purtători de proteze']),
    theProcedure: t('Strategic implant placement to support a fixed bridge.', 'Plasare strategică a implanturilor pentru o punte fixă.'),
    mevaAdvantage: t('Avoids the need for expensive bone grafting in many cases.', 'Evită necesitatea adițiilor osoase costisitoare în multe cazuri.'),
    specs: t({ hospitalStay: 'None', hotelStay: '7 Nights', returnToWork: '3-5 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '7 Nopți', returnToWork: '3-5 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Is it a fixed bridge?', a: 'Yes, the bridge is permanently screwed to the implants.' }], [{ q: 'Este o punte fixă?', a: 'Da, puntea este înșurubată permanent pe implanturi.' }])
  },

  // ==========================================
  // 4. PLASTIC SURGERY (14)
  // ==========================================
  {
    id: 'piezo-rhinoplasty',
    category: 'plastic',
    expert: 'Prof. Dr. Emre',
    title: t('Piezo Ultrasonic Rhinoplasty', 'Rinoplastie Ultrasonică Piezo'),
    shortDesc: t('Reshape your nose with sound waves. No hammers, no bone breaking. 40% less bruising and swelling.', 'Remodelați nasul cu unde sonore. Fără ciocane, fără ruperea oaselor.'),
    isThisForMe: t(['Deviated septum', 'Nasal hump', 'Tip refinement seekers'], ['Deviație de sept', 'Cocoașă nazală', 'Cei care doresc rafinarea vârfului']),
    theProcedure: t('Ultrasonic bone sculpting with sub-millimeter precision.', 'Sculptare osoasă ultrasonică cu precizie sub-milimetrică.'),
    mevaAdvantage: t('Preserves soft tissue and vessels for ultra-fast recovery.', 'Protejează țesutul moale și vasele pentru o recuperare ultra-rapidă.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I have black eyes?', a: 'With Piezo, bruising is minimal compared to traditional methods.' }], [{ q: 'Voi avea ochi vineți?', a: 'Cu Piezo, vânătăile sunt minime față de metodele tradiționale.' }])
  },
  {
    id: 'vaser-liposuction',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Vaser Liposuction (High-Def)', 'Vaser Liposucție (High-Def)'),
    shortDesc: t('Targeted fat removal with ultrasound. Sculpts athletic contours while tightening the skin.', 'Eliminarea grăsimii cu ultrasunete. Sculptează contururi atletice.'),
    isThisForMe: t(['Stubborn fat deposits', 'Muscle definition seekers', 'Post-weight loss contouring'], ['Depozite de grăsime încăpățânate', 'Cei care doresc definire musculară', 'Conturare după slăbire']),
    theProcedure: t('Ultrasound fat emulsification and precision extraction.', 'Emulsionarea grăsimii cu ultrasunete și extracție de precizie.'),
    mevaAdvantage: t('Higher skin retraction and less trauma than standard lipo.', 'Retracție mai mare a pielii și traumă redusă.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '5-7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '5-7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it permanent?', a: 'Removed fat cells are gone for good. Maintain a stable weight for best results.' }], [{ q: 'Este permanent?', a: 'Celulele adipoase eliminate dispar definitiv.' }])
  },
  {
    id: 'breast-augmentation',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Breast Augmentation (Implants)', 'Augmentare Mamară (Implanturi)'),
    shortDesc: t('Premium Motiva & Mentor implants. Natural "Dual Plane" technique for a soft, authentic feel.', 'Implanturi premium Motiva & Mentor. Tehnică naturală "Dual Plane".'),
    isThisForMe: t(['Volume loss after pregnancy', 'Small breast size', 'Asymmetry correction'], ['Pierdere de volum după sarcină', 'Sâni mici', 'Corectarea asimetriei']),
    theProcedure: t('Partial sub-muscular placement for a natural slope.', 'Plasare parțial sub-musculară pentru o pantă naturală.'),
    mevaAdvantage: t('Lifetime implant warranty and personalized projection mapping.', 'Garanție pe viață pentru implant și mapare personalizată.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Can I breastfeed?', a: 'Yes, modern techniques preserve milk ducts and sensitivity.' }], [{ q: 'Pot alăpta?', a: 'Da, tehnicile moderne păstrează canalele galactofore.' }])
  },
  {
    id: 'abdominoplasty-tummy',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Abdominoplasty (Tummy Tuck)', 'Abdominoplastie (Tummy Tuck)'),
    shortDesc: t('Removes excess skin and repairs separated muscles (Diastasis Recti) for a flat, toned core.', 'Elimină excesul de piele și repară mușchii abdominali diastazați.'),
    isThisForMe: t(['Loose skin after pregnancy', 'Post-bariatric apron skin', 'Muscle wall weakness'], ['Piele lăsată după sarcină', 'Exces de piele post-bariatric', 'Slăbiciune a peretelui muscular']),
    theProcedure: t('Muscle plication and surgical excision of sagging skin.', 'Plicatură musculară și excizie chirurgicală a pielii.'),
    mevaAdvantage: t('Ultra-low scar technique hidden beneath the bikini line.', 'Tehnică cu cicatrice ultra-joasă, ascunsă sub linia bikini.'),
    specs: t({ hospitalStay: '2 Nights', hotelStay: '7 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '2 Nopți', hotelStay: '7 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I have a scar?', a: 'Yes, but it is placed strategically low to be covered by underwear.' }], [{ q: 'Voi avea cicatrice?', a: 'Da, dar este plasată strategic pentru a fi acoperită de lenjerie.' }])
  },
  {
    id: 'brazilian-butt-lift-bbl',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('BBL (Brazilian Butt Lift)', 'BBL (Brazilian Butt Lift)'),
    shortDesc: t('Natural volume using your own fat. Liposuction of the waist and transfer to the buttocks.', 'Volum natural folosind propria grăsime. Liposucție în talie și transfer în fese.'),
    isThisForMe: t(['Flat buttocks', 'Desire for hourglass figure', 'Available donor fat'], ['Fese plate', 'Dorință de siluetă clepsidră', 'Grăsime donatoare disponibilă']),
    theProcedure: t('Ultrasound-guided safe subcutaneous fat grafting.', 'Grefare de grăsime sigură, ghidată ecografic.'),
    mevaAdvantage: t('Strict "No Muscle" injection protocol for 100% safety.', 'Protocol strict "Fără Mușchi" pentru siguranță 100%.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '10 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it safe?', a: 'Yes, when performed by experts using ultrasound guidance.' }], [{ q: 'Este sigur?', a: 'Da, când este efectuată de experți folosind ghidaj ecografic.' }])
  },
  {
    id: 'deep-plane-facelift',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Deep Plane Facelift', 'Lifting Facial Deep Plane'),
    shortDesc: t('Repositions deep muscle layers (SMAS) for a natural, non-operated look. Lasts 10-15 years.', 'Repoziționează straturile musculare profunde pentru un aspect natural.'),
    isThisForMe: t(['Significant jowls', 'Neck sagging', 'Advanced facial aging'], ['Gușă semnificativă', 'Lăsarea gâtului', 'Îmbătrânire facială avansată']),
    theProcedure: t('Structural repositioning of deep tissues without skin tension.', 'Repoziționare structurală a țesuturilor profunde fără tensiune.'),
    mevaAdvantage: t('Erases 15 years with a focus on vertical lift and volume.', 'Șterge 15 ani, axându-se pe lifting vertical și volum.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '7 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '7 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I look "pulled"?', a: 'No, because we move the muscle, the skin sits naturally without tension.' }], [{ q: 'Voi arăta "trasă"?', a: 'Nu, deoarece mutăm mușchiul, pielea se așază natural.' }])
  },
  {
    id: 'blepharoplasty-eyelid',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Blepharoplasty (Eyelid Surgery)', 'Blefaroplastie (Chirurgia Pleoapelor)'),
    shortDesc: t('Removes hooded upper lids and under-eye bags to restore a rested, vibrant gaze.', 'Elimină pleoapele căzute și pungile de sub ochi pentru o privire odihnită.'),
    isThisForMe: t(['Heavy upper lids', 'Under-eye bags', 'Tired facial appearance'], ['Pleoape superioare grele', 'Pungi sub ochi', 'Aspect facial obosit']),
    theProcedure: t('Precision excision of excess skin and fat pads.', 'Excizie de precizie a pielii și grăsimii în exces.'),
    mevaAdvantage: t('Muscle-sparing technique for invisible scarring.', 'Tehnică de conservare a mușchilor pentru cicatrici invizibile.'),
    specs: t({ hospitalStay: 'Day Clinic', hotelStay: '4 Nights', returnToWork: '5 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '5 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Will my eye shape change?', a: 'No, we only remove the weight, preserving your natural almond shape.' }], [{ q: 'Se va schimba forma ochiului?', a: 'Nu, eliminăm doar greutatea în exces.' }])
  },
  {
    id: 'mommy-makeover-full',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Mommy Makeover', 'Mommy Makeover (Restaurare Post-Natală)'),
    shortDesc: t('Bespoke combination of breast lift/aug, tummy tuck, and lipo in a single transformative session.', 'Combinație personalizată de lifting mamar, abdominoplastie și lipo.'),
    isThisForMe: t(['Post-pregnancy body changes', 'Multiple target areas', 'Single recovery seekers'], ['Schimbări corporale post-sarcină', 'Zone multiple vizate', 'Cei care doresc o singură recuperare']),
    theProcedure: t('Integrated body restoration protocol.', 'Protocol integrat de restaurare corporală.'),
    mevaAdvantage: t('Coordinated surgical approach for maximum aesthetic balance.', 'Abordare chirurgicală coordonată pentru echilibru estetic maxim.'),
    specs: t({ hospitalStay: '2 Nights', hotelStay: '7 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '2 Nopți', hotelStay: '7 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it safe to combine?', a: 'Yes, when performed in a JCI hospital within safe surgical times.' }], [{ q: 'Este sigur să combinăm?', a: 'Da, când se efectuează într-un spital JCI.' }])
  },
  {
    id: 'gynecomastia-male',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Gynecomastia (Male Breast Reduction)', 'Ginecomastie (Reducere Sâni Bărbați)'),
    shortDesc: t('Permanent correction of enlarged male breast tissue for a flat, masculine chest.', 'Corecția permanentă a țesutului mamar mărit la bărbați.'),
    isThisForMe: t(['Enlarged male breasts', 'Chest fat resistant to gym', 'Self-consciousness'], ['Sâni măriți la bărbați', 'Grăsime pectorală rezistentă la sport', 'Lipsă de încredere']),
    theProcedure: t('Combined Vaser Lipo and glandular excision.', 'Vaser Lipo combinat cu excizie glandulară.'),
    mevaAdvantage: t('Athletic chest contouring with invisible incisions.', 'Conturare pectorală atletică cu incizii invizibile.'),
    specs: t({ hospitalStay: 'Day Clinic', hotelStay: '4 Nights', returnToWork: '3-5 Days', anesthesia: 'General/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '3-5 Zile', anesthesia: 'Generală/Sedare' }),
    faq: t([{ q: 'Will it return?', a: 'No, once the gland is removed, it does not regrow.' }], [{ q: 'Va reveni?', a: 'Nu, odată ce glanda este eliminată, nu mai crește.' }])
  },
  {
    id: 'otoplasty-ear',
    category: 'plastic',
    expert: 'Prof. Dr. Emre',
    title: t('Otoplasty (Prominent Ear Surgery)', 'Otoplastie (Chirurgia Urechilor)'),
    shortDesc: t('Reshapes and pins back protruding ears for perfect facial symmetry.', 'Remodelează și apropie urechile proeminente de cap.'),
    isThisForMe: t(['Prominent ears', 'Asymmetrical ears', 'Self-conscious children/adults'], ['Urechi proeminente', 'Urechi asimetrice', 'Copii sau adulți jenați de aspect']),
    theProcedure: t('Cartilage reshaping through a discreet posterior incision.', 'Remodelarea cartilajului printr-o incizie discretă în spate.'),
    mevaAdvantage: t('Permanent structural sutures for a stable, lifetime result.', 'Suturi structurale permanente pentru un rezultat stabil pe viață.'),
    specs: t({ hospitalStay: 'None', hotelStay: '4 Nights', returnToWork: '3 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Is it painful?', a: 'Minimal discomfort, managed easily with oral medication.' }], [{ q: 'Este dureros?', a: 'Disconfort minim, gestionat ușor cu analgezice.' }])
  },
  {
    id: 'arm-thigh-lift',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Arm & Thigh Lift (Brachioplasty)', 'Lifting de Brațe și Coapse'),
    shortDesc: t('Removes massive skin laxity after weight loss, restoring firm, athletic limbs.', 'Elimină laxitatea masivă a pielii după slăbire, restaurând fermitatea.'),
    isThisForMe: t(['Post-bariatric skin', '"Bat wing" arms', 'Inner thigh sagging'], ['Piele în exces post-bariatric', 'Brațe tip "aripă de liliac"', 'Lăsarea coapselor interioare']),
    theProcedure: t('Surgical excision and multi-layered skin tightening.', 'Excizie chirurgicală și întinderea pielii multi-strat.'),
    mevaAdvantage: t('Expertise in hidden-scar placement on the inner limbs.', 'Expertiză în plasarea cicatricilor în zone ascunse.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'When can I work out?', a: 'Light walking immediately; gym after 6 weeks.' }], [{ q: 'Când pot face sport?', a: 'Mers ușor imediat; sala după 6 săptămâni.' }])
  },
  {
    id: 'mastopexy-lift',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Mastopexy (Breast Lift)', 'Mastopexie (Lifting Mamar)'),
    shortDesc: t('Elevates sagging breast tissue and restores a youthful, perky projection.', 'Ridică țesutul mamar lăsat și restaurează o proiecție tinerescă.'),
    isThisForMe: t(['Sagging after breastfeeding', 'Weight loss ptosis', 'Nipple pointing downward'], ['Lăsarea sânilor după alăptare', 'Ptoză după slăbire', 'Mamelon orientat în jos']),
    theProcedure: t('Internal suspension and areola repositioning.', 'Suspensie internă și repoziționarea areolei.'),
    mevaAdvantage: t('Internal "Bra" technique for longer-lasting elevation.', 'Tehnică de "Sutien" intern pentru o elevație de lungă durată.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '7-10 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '7-10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Can I combine with implants?', a: 'Yes, this is called an Augmentation-Mastopexy.' }], [{ q: 'Pot combina cu implanturi?', a: 'Da, se numește Augmentare-Mastopexie.' }])
  },
  {
    id: 'mentoplasty-chin',
    category: 'plastic',
    expert: 'Prof. Dr. Emre',
    title: t('Mentoplasty (Chin Augmentation)', 'Mentoplastie (Augmentare Bărbie)'),
    shortDesc: t('Enhances a weak chin for a stronger jawline and better facial profile.', 'Îmbunătățește bărbia retrasă pentru o linie mandibulară puternică.'),
    isThisForMe: t(['Receding chin', 'Weak jawline', 'Profile imbalance'], ['Bărbie retrasă', 'Mandibulă slab definită', 'Dezechilibru de profil']),
    theProcedure: t('Silicone implant placement or sliding genioplasty.', 'Plasarea implantului de silicon sau genioplastie.'),
    mevaAdvantage: t('Balanced "Golden Ratio" profile mapping.', 'Maparea echilibrată a profilului conform Secțiunii de Aur.'),
    specs: t({ hospitalStay: 'None', hotelStay: '5 Nights', returnToWork: '5 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '5 Nopți', returnToWork: '5 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Will it move?', a: 'No, the implant is secured beneath the muscle to the bone.' }], [{ q: 'Se va mișca?', a: 'Nu, implantul este fixat sub mușchi pe os.' }])
  },
  {
    id: 'labiaplasty-fem',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Labiaplasty (Aesthetic & Functional)', 'Labioplastie (Estetică și Funcțională)'),
    shortDesc: t('Corrects labial hypertrophy for both visual confidence and physical comfort.', 'Corectează hipertrofia labială pentru încredere și confort fizic.'),
    isThisForMe: t(['Physical discomfort', 'Asymmetry', 'Self-consciousness during intimacy'], ['Disconfort fizic', 'Asimetrie', 'Lipsă de încredere în intimitate']),
    theProcedure: t('Precision wedge or edge resection.', 'Rezecție de precizie.'),
    mevaAdvantage: t('Invisible scarring and preservation of full sensitivity.', 'Cicatrici invizibile și păstrarea sensibilității depline.'),
    specs: t({ hospitalStay: 'None', hotelStay: '4 Nights', returnToWork: '3 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Does it affect sensation?', a: 'No, our technique avoids the clitoral nerves completely.' }], [{ q: 'Afectează sensibilitatea?', a: 'Nu, tehnica noastră evită complet nervii clitoridieni.' }])
  },

  // ==========================================
  // 5. ANDROLOGY & MEN'S HEALTH (8)
  // ==========================================
  {
    id: 'ligamentolysis-andrology',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Penile Lengthening (Ligamentolysis)', 'Alungire Penis (Ligamentoliză)'),
    shortDesc: t('Surgical release of the suspensory ligament to expose hidden length. Permanent result.', 'Eliberarea chirurgicală a ligamentului suspensor pentru alungire permanentă.'),
    isThisForMe: t(['Desire for length', 'Hidden penis syndrome', 'Surgical seekers'], ['Dorință de lungime', 'Sindromul penisului ascuns', 'Căutători de soluții chirurgicale']),
    theProcedure: t('Discreet V-Y advancement flasplasty.', 'Plastie de avansare V-Y discretă.'),
    mevaAdvantage: t('Advanced protocol to minimize retraction.', 'Protocol avansat pentru minimizarea retracției.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'How much length?', a: 'Average visible gain is 2-4 cm flaccid.' }], [{ q: 'Câtă lungime?', a: 'Câștigul vizibil mediu este de 2-4 cm flascid.' }])
  },
  {
    id: 'fat-grafting-girth',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Penile Girth (Fat Grafting)', 'Grosime Penis (Transfer Grăsime)'),
    shortDesc: t('Permanent thickening using autologous fat. Most natural feel and bio-compatible.', 'Îngroșare permanentă folosind propria grăsime. Senzație naturală.'),
    isThisForMe: t(['Desire for girth', 'Available donor fat', 'Natural tissue seekers'], ['Dorință de grosime', 'Grăsime donatoare disponibilă', 'Cei care doresc țesut natural']),
    theProcedure: t('Coleman micro-fat grafting technique.', 'Tehnică de micro-grefare de grăsime Coleman.'),
    mevaAdvantage: t('VASER fat harvest for 70%+ survival rate.', 'Recoltare VASER pentru o rată de supraviețuire de 70%+ .'),
    specs: t({ hospitalStay: 'Day Clinic', hotelStay: '4 Nights', returnToWork: '5 Days', anesthesia: 'Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '5 Zile', anesthesia: 'Sedare' }),
    faq: t([{ q: 'Will it go away?', a: 'No, once integrated, the fat remains permanently.' }], [{ q: 'Va dispărea?', a: 'Nu, odată integrată, grăsimea rămâne permanent.' }])
  },
  {
    id: 'ha-filler-girth',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Non-Surgical Girth (HA Fillers)', 'Grosime Non-Chirurgicală (Acid Hialuronic)'),
    shortDesc: t('Instant 2-3 cm girth increase using premium high-viscosity fillers. No surgery, zero downtime.', 'Creștere instantanee cu 2-3 cm folosind fillere premium. Fără operație.'),
    isThisForMe: t(['Immediate results seekers', 'No surgery seekers', 'Trial seekers'], ['Cei care doresc rezultate imediate', 'Fără chirurgie', 'Cei care doresc să testeze']),
    theProcedure: t('Precision micro-cannula injection.', 'Injectare de precizie cu micro-canulă.'),
    mevaAdvantage: t('Exclusive use of medical-grade Voluma/Restylane.', 'Utilizarea exclusivă a fillerelor de grad medical.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Topical' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Topicală' }),
    faq: t([{ q: 'How long does it last?', a: '12-18 months typically.' }], [{ q: 'Cât timp durează?', a: 'De obicei 12-18 luni.' }])
  },
  {
    id: 'dermal-graft-permanent',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Dermal Matrix Graft (Girth)', 'Grefă Matrix Dermic (Grosime)'),
    shortDesc: t('The most homogeneous permanent girth result. Uses an acellular dermal matrix graft.', 'Cel mai omogen rezultat permanent pentru grosime.'),
    isThisForMe: t(['Permanent uniform girth', 'Stable long-term volume', 'Surgical seekers'], ['Grosime uniformă permanentă', 'Volum stabil pe termen lung', 'Căutători de soluții chirurgicale']),
    theProcedure: t('Alloderm graft placement circumferentially.', 'Plasarea grefei Alloderm circumferențial.'),
    mevaAdvantage: t('Perfectly smooth and predictable thickening.', 'Îngroșare perfect netedă și previzibilă.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '10 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it hard?', a: 'No, it integrates into your skin and feels natural.' }], [{ q: 'Este tare?', a: 'Nu, se integrează în piele și se simte natural.' }])
  },
  {
    id: 'p-shot-prp',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('P-Shot (Regenerative PRP)', 'P-Shot (PRP Regenerativ)'),
    shortDesc: t('Enhances performance and sensitivity using growth factors from your own blood.', 'Îmbunătățește performanța și sensibilitatea folosind factori de creștere.'),
    isThisForMe: t(['Erectile quality decline', 'Sensitivity loss', 'Performance seekers'], ['Scăderea calității erecției', 'Pierderea sensibilității', 'Cei care doresc performanță']),
    theProcedure: t('Concentrated platelet injection.', 'Injectare de trombocite concentrate.'),
    mevaAdvantage: t('Double-spin centrifugation for 5x concentration.', 'Centrifugare cu rotație dublă pentru concentrație 5x.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Topical' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Topicală' }),
    faq: t([{ q: 'Does it hurt?', a: 'No, we use strong numbing cream.' }], [{ q: 'Doare?', a: 'Nu, folosim o cremă anestezică puternică.' }])
  },
  {
    id: 'glans-aug-pe',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('Glans Augmentation (PE Treatment)', 'Augmentare Gland (Tratament EP)'),
    shortDesc: t('Filler injection into the glans to delay ejaculation and increase visual volume.', 'Injectare în gland pentru a întârzia ejacularea și a mări volumul.'),
    isThisForMe: t(['Premature ejaculation', 'Proportion seekers', 'Visual enhancement'], ['Ejaculare prematură', 'Cei care doresc proporție', 'Îmbunătățire vizuală']),
    theProcedure: t('Sub-glanular HA injection.', 'Injectare HA sub-glanulară.'),
    mevaAdvantage: t('Specifically modulated sensitivity for lasting intimacy.', 'Sensibilitate modulată special pentru intimitate de durată.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Topical' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Topicală' }),
    faq: t([{ q: 'Does it stop pleasure?', a: 'No, it only dampens the hypersensitivity that causes PE.' }], [{ q: 'Oprește plăcerea?', a: 'Nu, doar temperează hipersensibilitatea care cauzează EP.' }])
  },
  {
    id: 'eswt-shockwave-ed',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('ESWT Shockwave Therapy', 'Terapie Shockwave ESWT'),
    shortDesc: t('Cures the cause of ED by growing new blood vessels. Non-invasive, no pills.', 'Vindecă cauza DE prin creșterea de noi vase de sânge.'),
    isThisForMe: t(['Mild to moderate ED', 'Peyronie\'s disease', 'No-pill seekers'], ['DE ușoară spre moderată', 'Boala Peyronie', 'Cei care nu doresc medicamente']),
    theProcedure: t('Acoustic pulse application (6 sessions).', 'Aplicarea de impulsuri acustice (6 sesiuni).'),
    mevaAdvantage: t('Storz Medical gold-standard device.', 'Echipament Storz Medical standard de aur.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'None' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Fără' }),
    faq: t([{ q: 'Is it permanent?', a: 'Repairs vascular tissue for long-term recovery.' }], [{ q: 'Este permanent?', a: 'Repară țesutul vascular pentru recuperare pe termen lung.' }])
  },
  {
    id: 'penile-implant-ed',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Penile Prosthesis (Implant)', 'Proteză Peniană (Implant)'),
    shortDesc: t('The 100% cure for severe ED. Permanent inflatable implant for reliability on demand.', 'Cura 100% pentru DE severă. Implant gonflabil permanent.'),
    isThisForMe: t(['Severe ED', 'Post-prostate surgery', 'Diabetes-related ED'], ['DE severă', 'Post-chirurgie de prostată', 'DE legată de diabet']),
    theProcedure: t('3-piece inflatable device placement.', 'Plasarea dispozitivului gonflabil din 3 piese.'),
    mevaAdvantage: t('AMS 700 / Coloplast Titan premium systems.', 'Sisteme premium AMS 700 / Coloplast Titan.'),
    specs: t({ hospitalStay: '1-2 Nights', hotelStay: '7 Nights', returnToWork: '2-3 Weeks', anesthesia: 'General' }, { hospitalStay: '1-2 Nopți', hotelStay: '7 Nopți', returnToWork: '2-3 Săptămâni', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will my partner know?', a: 'No, the pump is hidden in the scrotum and the implant is internal.' }], [{ q: 'Va ști partenera?', a: 'Nu, pompa este ascunsă în scrot, iar implantul este intern.' }])
  },

  // ==========================================
  // 6. SPECIALIST TREATMENTS (4)
  // ==========================================
  {
    id: 'organ-transplant-turkey',
    category: 'specialist',
    expert: 'MD Victor',
    title: t('Organ Transplant (Kidney & Liver)', 'Transplant de Organe (Rinichi și Ficat)'),
    shortDesc: t('World-class transplant surgery in Istanbul. High success rates for living donor kidney and liver transplantation.', 'Chirurgie de transplant de clasă mondială în Istanbul. Rate mari de succes.'),
    isThisForMe: t(['Chronic kidney failure', 'Liver cirrhosis', 'Living donor candidates'], ['Insuficiență renală cronică', 'Ciroză hepatică', 'Candidați cu donator viu']),
    theProcedure: t('Complex micro-surgical transplantation.', 'Transplant micro-chirurgical complex.'),
    mevaAdvantage: t('JCI-accredited transplant center with 99% survival rate.', 'Centru de transplant acreditat JCI cu rată de supraviețuire de 99%.'),
    specs: t({ hospitalStay: '7-14 Nights', hotelStay: '14 Nights', returnToWork: '4-6 Weeks', anesthesia: 'General' }, { hospitalStay: '7-14 Nopți', hotelStay: '14 Nopți', returnToWork: '4-6 Săptămâni', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it legal?', a: 'Yes, fully regulated living donor transplantation.' }], [{ q: 'Este legal?', a: 'Da, transplant reglementat cu donator viu.' }])
  },
  {
    id: 'ivf-cyprus-special',
    category: 'specialist',
    expert: t('Cyprus Clinical Team', 'Echipa Clinică Cipru'),
    title: t('IVF Cyprus (Advanced Fertility)', 'FIV Cipru (Fertilitate Avansată)'),
    shortDesc: t('Advanced ICSI, PGD, and Family Balancing in our specialized Cyprus laboratory. High success rates for complex cases.', 'ICSI avansat, PGD și Family Balancing în laboratorul nostru din Cipru.'),
    isThisForMe: t(['Multiple failed IVF cycles', 'Gender selection seekers', 'Egg/Sperm donation seekers'], ['Multiple cicluri FIV eșuate', 'Selecție gen', 'Donare ovule/spermă']),
    theProcedure: t('State-of-the-art genetic screening and embryo transfer.', 'Screening genetic de ultimă oră și transfer de embrioni.'),
    mevaAdvantage: t('Unique legal framework in Cyprus for advanced reproductive options.', 'Cadru legal unic în Cipru pentru opțiuni reproductive avansate.'),
    specs: t({ hospitalStay: 'None', hotelStay: '7-10 Nights', returnToWork: 'Immediate', anesthesia: 'Sedation' }, { hospitalStay: 'Fără', hotelStay: '7-10 Nopți', returnToWork: 'Imediat', anesthesia: 'Sedare' }),
    faq: t([{ q: 'Success rate?', a: 'Our clinical success rates for donors exceed 80%.' }], [{ q: 'Rata de succes?', a: 'Ratele noastre de succes pentru donatori depășesc 80%.' }])
  },
  {
    id: 'smart-oncology-drugs',
    category: 'specialist',
    expert: 'Prof. Dr. Gökhan',
    title: t('Smart Oncology & Targeted Drugs', 'Oncologie Inteligentă și Medicamente Țintite'),
    shortDesc: t('Precision cancer treatment using genomic mapping and molecular-targeted therapies. Attacks cancer, spares the body.', 'Tratament oncologic de precizie folosind maparea genomică.'),
    isThisForMe: t(['Complex cancer cases', 'Resistance to chemo', 'Second opinion seekers'], ['Cazuri de cancer complexe', 'Rezistență la chimo', 'Cei care caută a doua opinie']),
    theProcedure: t('Molecular profiling and targeted immunotherapy.', 'Profilare moleculară și imunoterapie țintită.'),
    mevaAdvantage: t('Access to the latest FDA-approved oncology agents.', 'Acces la cei mai noi agenți oncologici aprobați FDA.'),
    specs: t({ hospitalStay: 'Depends on Case', hotelStay: 'As Required', returnToWork: 'Depends', anesthesia: 'None' }, { hospitalStay: 'Depinde de caz', hotelStay: 'După caz', returnToWork: 'Depinde', anesthesia: 'Fără' }),
    faq: t([{ q: 'What are smart drugs?', a: 'They target specific mutations in cancer cells rather than killing all fast-growing cells.' }], [{ q: 'Ce sunt medicamentele inteligente?', a: 'Ele țintesc mutații specifice ale celulelor canceroase.' }])
  },
  {
    id: 'anti-gravity-lifting',
    category: 'specialist',
    expert: 'Prof. Dr. Emre',
    title: t('Anti-Gravity Lifting (Non-Surgical)', 'Lifting Anti-Gravity (Non-Chirurgical)'),
    shortDesc: t('Combines HIFU, French Lift Threads, and Liquid Lifting to defy aging without surgery.', 'Combină HIFU, firele franceze și Liquid Lifting.'),
    isThisForMe: t(['Early facial sagging', 'No surgery seekers', 'Natural rejuvenation'], ['Lăsare facială timpurie', 'Fără chirurgie', 'Întinerire naturală']),
    theProcedure: t('Integrated vector-lifting protocol.', 'Protocol integrat de lifting pe vectori.'),
    mevaAdvantage: t('Multi-layer architectural reset of the face.', 'Resetare arhitecturală multi-strat a feței.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Locală' }),
    faq: t([{ q: 'How long does it last?', a: 'Results last 2-3 years depending on the combination.' }], [{ q: 'Cât timp durează?', a: 'Rezultatele durează 2-3 ani.' }])
  }
];

export const findTreatment = (slug) => 
  treatmentsData.find(t => t.id === slug) || null;

export default treatmentsData;
