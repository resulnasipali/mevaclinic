const t = (en: any) => ({
  en,
  ro: en,
  es: en,
  it: en,
  ru: en,
  fr: en,
  de: en
});

export const ivfCyprusSpecialClinical = {
  suitability: t([
    "Couples or individuals seeking international fertility treatment abroad with structured care coordination.",
    "Patients requiring initial fertility assessment, diagnostic reviews, and remote case planning in Istanbul, Turkey.",
    "Patients exploring Istanbul and Cyprus IVF coordination pathways to optimize their fertility journey.",
    "Candidates seeking advanced ICSI, egg/sperm donor options, or genetic screening (PGT) where legally and medically indicated.",
    "Patients with previous unsuccessful IVF cycles who require customized stimulation and laboratory protocols."
  ]),
  contraindications: t([
    "Severe, uncorrected systemic diseases (e.g., uncontrolled cardiac conditions or active malignancies) that render pregnancy life-threatening.",
    "Severe active uterine infections or untreated endometrial pathologies that compromise embryo implantation.",
    "Patients who do not meet the legal criteria or age limits defined by the destination clinic's local regulations.",
    "Systemic health factors that clinically preclude safe ovarian stimulation or egg retrieval under sedation.",
    "Unwillingness to undergo comprehensive infectious disease screening (HIV, Hepatitis B/C, Syphilis) required by international clinic standards."
  ]),
  preOpEvaluation: t([
    "Ovarian Reserve Testing: Blood tests for AMH (Anti-Müllerian Hormone), FSH, and Estradiol to evaluate egg quantity and guide stimulation dosing.",
    "Follicle Ultrasound: Baseline transvaginal ultrasound to measure Antral Follicle Count (AFC) and assess uterine cavity health.",
    "Semen Analysis: Assessment of sperm count, motility, and morphology to determine suitability for Intracytoplasmic Sperm Injection (ICSI).",
    "Medical History & Lifestyle Review: In-depth evaluation of previous IVF cycles, age factors, systemic health, and smoking status.",
    "Legal and Administrative Review: Assessing patient-specific fertility needs against local legal frameworks in Turkey and Cyprus."
  ]),
  risksComplications: t([
    "Ovarian Hyperstimulation Syndrome (OHSS): A systemic response to hormone stimulation, minimized through low-dose antagonist protocols and careful monitoring.",
    "Multiple Pregnancy: Risk of twin or triplet pregnancy, managed through selective single embryo transfer (SET) protocols.",
    "Ectopic Pregnancy: The embryo implanting outside the uterus, requiring immediate medical evaluation and management.",
    "Retrieval Procedure Risks: Minor risk of bleeding, localized infection, or transient reaction to light sedation.",
    "Embryonic Development Failure: The risk that eggs fail to fertilize or embryos fail to develop to the blastocyst stage in the laboratory."
  ]),
  procedureSteps: t([
    { title: "Fertility Assessment", desc: "Comprehensive review of medical history, ovarian reserve tests, and hormone profiling coordinated remotely or in Istanbul." },
    { title: "Ovarian Stimulation", desc: "Structured hormone protocol with regular ultrasound tracking and laboratory monitoring." },
    { title: "Egg Retrieval & ICSI", desc: "Surgical egg collection under sedation followed by Intracytoplasmic Sperm Injection in the lab." },
    { title: "Embryo Development", desc: "Cultivation of embryos in specialized incubators under the care of specialized laboratory embryologists." },
    { title: "Genetic Screening (Optional)", desc: "Advanced PGD/PGT-A screening for chromosomal health or family balancing where medically indicated and legally appropriate." },
    { title: "Embryo Transfer & Support", desc: "Carefully timed transfer of selected embryos into the uterus followed by follow-up support." }
  ]),
  recoveryTimeline: t([
    { time: "First 24 Hours", desc: "Rest at your hotel accommodation after egg retrieval. Mild cramping or light spotting is normal and managed with acetaminophen." },
    { time: "Days 2-5 (Cultivation)", desc: "Normal light activities can be resumed. Embryologists monitor fertilization and development. Daily updates are shared by the care team." },
    { time: "Embryo Transfer Day", desc: "A brief, non-surgical outpatient procedure. Followed by a short period of clinical rest before returning to your hotel." },
    { time: "Weeks 1-2 Post-Transfer", desc: "Maintain light activities, avoid strenuous exercise, and continue prescribed progesterone support. A blood pregnancy test is scheduled 10-12 days post-transfer." }
  ]),
  realisticOutcomes: t("Ovarian stimulation and embryo development outcomes vary significantly. No pregnancy or success outcome can be guaranteed. Long-term performance and success rates depend on maternal age, ovarian reserve, partner or donor semen quality, uterine receptivity, and lifestyle factors. The coordinated pathways in Istanbul and Cyprus provide structured, JCI-standard medical support, but final clinical eligibility and success depend on individual biological factors and specialist medical assessment."),
  revisionPolicy: t("If a stimulation cycle yields insufficient follicles, the cycle may be canceled or modified prior to retrieval. In the event of a failed cycle or non-implantation, a clinical review is conducted to adjust future hormone protocols, laboratory techniques, or alternative pathway options."),
  doctorNote: t("Successful IVF planning requires a highly personalized approach. We focus on thorough pre-assessment and optimizing uterine and ovarian health before travel. Our coordination pathway is designed to minimize stress, which is a key clinical factor in reproductive success."),
  medicalDisclaimer: t("The clinical information on this page is for educational purposes only. Final eligibility, legal suitability, and treatment planning for Istanbul and Cyprus IVF pathways are determined exclusively after medical record review and direct clinical evaluation by fertility specialists."),
  faq: t([
    { q: "Where does my treatment take place?", a: "The IVF Cyprus Special coordinates pathways across locations. Initial consultation, medical history review, diagnostic planning, and fertility assessments can be conducted in Istanbul, Turkey, or coordinated remotely. If advanced laboratory services, donor programs, or specific embryo screenings are legally and medically appropriate, the active phase is performed at our specialized Northern Cyprus partner facility. The final pathway is customized based on medical assessment, legal suitability, and clinic availability." },
    { q: "Can a successful pregnancy be guaranteed?", a: "No fertility treatment or clinic can guarantee a successful pregnancy. Success rates are case-specific and influenced by age, reproductive history, genetics, and lifestyle. Our coordination team helps plan the safest and most optimal pathway without making absolute outcome claims." },
    { q: "What is the difference between Istanbul and Cyprus IVF pathways?", a: "The Istanbul pathway is focused on diagnostic assessment, initial cycles, and standard IVF/ICSI under Turkey's legal framework. The Cyprus fertility route is selected when patients require advanced options, donor-assisted cycles, or preimplantation genetic testing (PGT) under Northern Cyprus's permissive legal regulations. We coordinate diagnostics and scheduling for both routes based on patient-specific fertility needs." },
    { q: "How many trips are required for IVF coordination?", a: "The journey is designed to minimize travel. Most patients complete the process in a single trip of 7 to 10 days to the destination clinic, provided that initial stimulation drugs are started at home under remote monitoring. If diagnostic reviews are required in person, a short preliminary trip to Istanbul may be planned." },
    { q: "What does the international coordination package include?", a: "Our premium packages provide comprehensive support, including remote pre-assessment, hotel accommodations, private airport transfers, multilingual coordinator support, appointment scheduling, and guidance on post-treatment follow-up." },
    { q: "Is genetic testing (PGD/PGT) available for all couples?", a: "Preimplantation genetic testing is available for chromosomal screening and family balancing, but its application depends on legal regulations, medical indications, and clinic availability. The clinical team reviews the legal and medical suitability of genetic screening for each couple individually during assessment." }
  ]),
  references: t([
    {
      text: "American Society for Reproductive Medicine (ASRM): Assisted Reproductive Technology (ART) Practice Guidelines and Recommendations.",
      url: "https://www.asrm.org/",
      type: "source"
    },
    {
      text: "European Society of Human Reproduction and Embryology (ESHRE): Good Practice Recommendations for IVF/ICSI Laboratory and Embryo Transfer Procedures.",
      url: "https://www.eshre.eu/",
      type: "source"
    },
    {
      text: "Human Reproduction (Oxford Academic Journal): 'Evaluating factors affecting clinical pregnancy rates in assisted reproduction coordination' (2024).",
      url: "https://academic.oup.com/humrep",
      type: "study"
    }
  ])
};
