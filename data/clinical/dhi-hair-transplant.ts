const t = (en: any) => ({
  en,
  ro: en,
  es: en,
  it: en,
  ru: en,
  fr: en,
  de: en
});

export const dhiHairTransplantClinical = {
  suitability: t([
    "Patients experiencing androgenetic alopecia corresponding to Norwood Scale classifications Grade 2 to Grade 5, with stabilized hair loss patterns.",
    "Individuals with sufficient donor hair density in the occipital (back) and temporal (sides) areas of the scalp to supply healthy follicular units.",
    "Patients seeking targeted density restoration in thinning areas (e.g., hairline, crown) without the necessity of shaving the entire recipient area.",
    "Adult patients (preferably 22 years or older) whose hair loss patterns have matured and been clinically mapped."
  ]),
  contraindications: t([
    "Diffuse Unpatterned Alopecia (DUPA) or scarring alopecias, where the donor area itself is unstable and lacks healthy, permanent follicles.",
    "Inadequate donor area density or poor tissue elasticity, which prevents safe graft extraction without risking visible thinning (over-harvesting).",
    "Active scalp dermatological conditions, including untreated scalp psoriasis, severe seborrheic dermatitis, active lichen planopilaris, or alopecia areata.",
    "Uncontrolled systemic diseases (such as advanced cardiovascular disease, severe diabetes mellitus) or active blood coagulation disorders that increase surgical risk.",
    "Hypersensitivity to local anesthetics (e.g., lidocaine, bupivacaine)."
  ]),
  preOpEvaluation: t([
    "Trichoscopic Scalp Analysis: Microscopic assessment of donor area hair density, caliber, and follicular unit composition (singles, doubles, triples) to calculate exact graft yield.",
    "Comprehensive Blood Screening: Complete Blood Count (CBC), coagulation profile (PT, APTT, INR), and infectious disease screening (Hepatitis B/C, HIV).",
    "Cardiovascular and Metabolic Assessment: Blood pressure monitoring, electrocardiogram (EKG) for patients with relevant history, and HbA1c testing for diabetic patients.",
    "Trichological Design Mapping: Pre-operative demarcation of the recipient hairline and extraction zone, taking into account future hair loss projections."
  ]),
  risksComplications: t([
    "Shock Loss (Temporary Alopecia): Temporary shedding of native hair in the recipient or donor areas due to surgical trauma, which typically resolves within 3 to 4 months.",
    "Folliculitis and Minor Infections: Inflammation of the hair follicles in the recipient area, usually managed with topical antibiotics and proper hygiene.",
    "Donor Area Over-Harvesting: Excessive extraction of grafts leading to permanent visible thinning or a patchy appearance in the occipital region.",
    "Poor Graft Survival: Graft failure caused by mechanical trauma during extraction, dehydration of follicles, or incorrect placement depth.",
    "Post-Operative Edema: Mild to moderate swelling of the forehead and periocular region, resolving spontaneously within 3 to 5 days."
  ]),
  procedureSteps: t([
    { title: "Scalp Preparation and Hair Trim", desc: "The donor area is trimmed to facilitate precise extraction, while the recipient area is cleaned and left unshaved if requested." },
    { title: "Local Anesthesia Administration", desc: "Comfort-focused local anesthesia is administered using specialized pressure-injection devices to minimize needle discomfort, followed by standard infiltration." },
    { title: "Follicular Unit Extraction (FUE)", desc: "Individual grafts are extracted from the donor zone using a micro-motorized punch (sizes ranging from 0.7mm to 0.9mm) to protect the surrounding tissue." },
    { title: "Graft Sorting and Preservation", desc: "Extracted grafts are immediately sorted by follicle count under microscopes and preserved in a chilled, nutrient-rich hypothermic solution." },
    { title: "Direct Implantation (DHI)", desc: "Using specialized CHOI Implanter Pens, the surgeon or trained technician loads the grafts and inserts them directly into the recipient area. The angle, depth, and direction of each implant are adjusted to match natural growth." },
    { title: "Post-Op Treatment and Dressing", desc: "The donor area is cleaned and dressed, and a regenerative treatment (such as Platelet-Rich Plasma or Exosomes) is applied to support graft healing." }
  ]),
  recoveryTimeline: t([
    { time: "Day 1-2 (Initial Care)", desc: "First wash is performed at the clinic. The donor bandage is removed, and the scalp is inspected. Mild swelling and tiny crusts at graft sites are expected." },
    { time: "Days 3-10 (Crust Shedding)", desc: "Daily gentle washing with clinical shampoo to soften and gradually shed the crusts. Redness in both donor and recipient areas begins to fade." },
    { time: "Weeks 2-4 (Shedding Phase)", desc: "Transplanted hair shafts shed (shock loss). This is a normal physiological process; the hair follicles remain healthy and dormant under the skin." },
    { time: "Months 3-12 (Growth & Density)", desc: "New hair begins to sprout at month 3. Gradual thickening occurs, with 60% of final density visible at month 6, and complete natural density achieved by month 12 to 15." }
  ]),
  realisticOutcomes: t("Clinical literature reports high graft survival rates in suitable DHI hair transplant candidates when graft handling, implantation timing, donor quality and post-operative care are carefully managed. Individual results vary after medical assessment. The final result is designed to provide a natural hairline design, with graft angles and density that blend seamlessly with your native hair. Results are visible starting at 3-4 months, with full density and texture maturation achieved between 12 and 15 months post-procedure."),
  revisionPolicy: t("Meva Clinic monitors hair restoration progress at 3, 6, and 12 months post-procedure through structured photo-evaluations. Because hair maturation takes up to 15 months, final density assessments are made after this period. If graft yield falls short of clinical expectations due to physiological factors, a secondary touch-up or revision procedure may be discussed, subject to the availability of healthy donor reserves and a clinical evaluation of scalp health."),
  doctorNote: t("DHI is an excellent technique for restoring density in thinning areas because it allows direct implantation without pre-made incisions. However, the success of the procedure relies heavily on graft handling and donor zone preservation. Protecting your donor area is our priority to ensure that you have viable options for the future if hair loss progresses."),
  medicalDisclaimer: t("The hair restoration information provided on this page is for educational purposes only. Individual hair loss patterns and donor capacities vary. Final eligibility and graft estimates are determined during a clinical consultation with our hair restoration specialists."),
  references: t([
    {
      text: "International Society of Hair Restoration Surgery (ISHRS): Core Curriculum Guidelines on Follicular Unit Extraction and Implanter Pen Usage.",
      url: "https://ishrs.org/",
      type: "source"
    },
    {
      text: "Journal of Cutaneous and Aesthetic Surgery: 'Direct Hair Transplantation: A Modified Follicular Unit Extraction Technique' (2013).",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3714620/",
      type: "study"
    },
    {
      text: "American Academy of Dermatology (AAD): Clinical Guidelines on the Diagnosis and Management of Androgenetic Alopecia.",
      url: "https://www.aad.org/public/diseases/hair-loss/types/alopecia",
      type: "source"
    },
    {
      text: "Indian Journal of Dermatology, Venereology and Leprology: 'Direct Hair Implantation: Technical Review and Safety Profile of Implanter Pens'.",
      url: "https://ijdvl.com/",
      type: "source"
    }
  ])
};
