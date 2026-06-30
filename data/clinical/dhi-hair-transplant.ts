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
    "Candidates for DHI hair transplant in Turkey with a stable hair loss pattern and realistic expectations of density.",
    "Patients with an adequate donor area (occipital and temporal regions) verified during our detailed donor area assessment.",
    "International hair transplant patients comparing DHI hair transplant in Istanbul with other advanced micro-grafting techniques.",
    "Adults who require a direct hair implantation approach for natural hairline planning or target area density enhancement.",
    "Individuals who are medically suitable for local anesthesia and committed to post-operative care and hair transplant travel planning."
  ]),
  contraindications: t([
    "Diffuse Unpatterned Alopecia (DUPA) or unstable donor areas where healthy follicles are insufficient for graft extraction.",
    "Active scalp disorders such as untreated psoriasis, severe seborrheic dermatitis, or lichen planopilaris.",
    "Severe, uncontrolled metabolic conditions, active coagulation disorders, or medical instability under local anesthesia.",
    "Extremely weak donor area where graft extraction would cause donor area thinning or overharvesting.",
    "Heavy smoking or history of non-compliance with post-operative hygiene, washing, or clinical guidance."
  ]),
  preOpEvaluation: t([
    "Pre-Arrival Photo & Document Review: Remote donor assessment and preliminary hair restoration planning for international patients.",
    "Trichoscopic Scalp Evaluation: Microscopic mapping of follicular unit density, caliber, and graft extraction capacity.",
    "Hairline Design Istanbul Consultation: Collaborative hairline planning taking into account facial symmetry and age-appropriate design.",
    "Standard Laboratory Profile: Coagulation tests (PT/INR), blood counts, and infectious disease screenings.",
    "Medical Clearance Check: In-person evaluation of scalp condition, cardiovascular readiness, and anesthesia suitability."
  ]),
  risksComplications: t([
    "Temporary Shock Loss: Normal shedding of native or transplanted hair shafts post-procedure, resolving within 3-4 months.",
    "Localized Post-Op Swelling: Mild forehead or facial edema, managed with rest, head elevation, and cold compression.",
    "Folliculitis & Inflammation: Minor hair follicle irritation in recipient areas, treated with antiseptic solutions or topical antibiotics.",
    "Donor Thinning: Potential overharvesting of the occipital region, mitigated by strict adherence to donor area limits.",
    "Graft Survival Variability: Variation in graft retention caused by scalp circulation, compliance, or individual tissue response.",
    "Asymmetry or Uneven Density: Minor irregularities requiring a secondary density enhancement session in selected cases."
  ]),
  procedureSteps: t([
    { title: "Hairline Design & Mapping", desc: "demarcation of the hairline design Istanbul and donor extraction boundaries based on natural hairline planning." },
    { title: "Local Anesthesia Infiltration", desc: "Local anesthesia is administered using micro-spray pressure devices to minimize discomfort before standard infiltration." },
    { title: "Graft Extraction & Sorting", desc: "Individual follicular units are harvested using a motorized micro-punch (0.7-0.9mm). Grafts are sorted and hydrated in a nutrient solution." },
    { title: "Direct Implantation (Choi Pen)", desc: "Follicles are loaded into a specialized Choi implanter pen and inserted directly into the scalp, controlling depth, angle, and direction." },
    { title: "PRP & Dressing Application", desc: "Platelet-Rich Plasma is applied where appropriate to support healing. The donor zone is dressed, and post-op medication is provided." }
  ]),
  recoveryTimeline: t([
    { time: "Days 1-2 (First Wash)", desc: "Donor bandage is removed. The first washing is performed by our clinical coordinators, and aftercare guidance is reviewed." },
    { time: "Days 3-10 (Crust Shedding)", desc: "Redness and swelling resolve. Tiny crusts at graft sites are gently washed away following our structured daily protocols." },
    { time: "Weeks 2-4 (Shock Loss)", desc: "Temporary shock loss after hair transplant occurs. Transplanted hair shafts shed while active follicles remain healthy under the skin." },
    { time: "Months 3-12 (Maturation)", desc: "Regrowth begins at month 3. Initial outcomes are visible at month 6, with final density and natural hairline maturation at months 12-15." }
  ]),
  realisticOutcomes: t("DHI technique outcomes vary by patient and depend on donor area capacity, graft survival, and compliance. The Choi pen hair transplant provides precise angle control for a natural look. Visible regrowth begins around months 3-6, with full density achieved between 12 and 15 months. No specific density, graft survival rate, or final result can be guaranteed."),
  revisionPolicy: t("Final density is assessed 12-15 months post-op. If graft yield falls short of clinical targets due to physiological factors, a touch-up or revision session may be planned, subject to healthy donor area capacity and medical assessment."),
  doctorNote: t("The direct hair implantation method is a highly refined tool for natural hairline design and crown density. However, preserving the donor area is paramount. A successful hair transplant recovery is a partnership that requires strict adherence to our aftercare, washing, and lifestyle recommendations."),
  medicalDisclaimer: t("The hair restoration information on this page is for educational purposes only. Final suitability, hairline design, and graft estimates are determined exclusively after face-to-face donor area assessment and medical evaluation."),
  faq: t([
    { q: "What is DHI hair transplant in Turkey?", a: "Direct Hair Implantation (DHI) is an advanced hair restoration technique where hair follicles are extracted from the donor area and implanted directly into the recipient area using a specialized Choi implanter pen. This Choi-style implantation approach eliminates the need for separate pre-made channel incisions, resulting in less tissue trauma and supporting faster hair transplant recovery." },
    { q: "How does the Choi pen hair transplant improve hairline design in Istanbul?", a: "The Choi implanter pen allows the team to place each graft with precise control over its angle, direction, and depth. This is essential for natural hairline planning and creating a seamless transition that blends with your native hair flow." },
    { q: "Who is a suitable candidate for DHI technique?", a: "Ideal candidates are individuals with a stable hair loss pattern, adequate donor area density, and realistic expectations. During your donor area assessment, we evaluate graft quality to ensure we can achieve your density goals without causing donor area thinning or overharvesting." },
    { q: "What is shock loss after hair transplant?", a: "Shock loss is a temporary shedding of native or transplanted hair shafts that occurs 2-4 weeks after the procedure due to surgical micro-trauma. This is a normal physiological response; the underlying hair follicles remain healthy and will start sprouting new hair around month 3." },
    { q: "How is the DHI hair transplant in Istanbul coordinated for international patients?", a: "Our Istanbul hair transplant coordination includes pre-arrival photo assessments, travel planning assistance, premium hotel accommodation, local transfers, and in-person donor/design consultations. We also provide multilingual coordinator support, first-wash training, and remote post-op follow-up." },
    { q: "Can a perfect result be guaranteed?", a: "While graft survival rates are high when properly managed by experienced teams, individual results vary due to circulation, skin characteristics, and compliance. No specific density, graft survival rate, or final hair transplant result can be guaranteed." }
  ]),
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
    }
  ])
};
