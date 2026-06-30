const t = (en: any) => ({
  en,
  ro: en,
  es: en,
  it: en,
  ru: en,
  fr: en,
  de: en
});

export const gastricSleeveClinical = {
  suitability: t([
    "Patients exploring gastric sleeve in Turkey with a Body Mass Index (BMI) of 40 or higher, or a BMI of 35 or higher accompanied by metabolic weight-related comorbidities.",
    "Candidates for weight loss surgery Turkey who have struggled to sustain reduction through medically supervised lifestyle, diet, and exercise programs.",
    "International bariatric patients seeking structured bariatric surgery travel planning and comprehensive Istanbul bariatric surgery coordination.",
    "Individuals requiring a laparoscopic gastric sleeve as a primary metabolic intervention to support appetite regulation and hormonal changes.",
    "Patients demonstrating psychological readiness and a firm commitment to long-term bariatric follow-up and dietary adjustment."
  ]),
  contraindications: t([
    "Severe, untreated psychiatric disorders, clinical depression, or active substance dependence that compromises adherence to long-term post-operative guidelines.",
    "Severe portal hypertension with active gastric varices, severe uncorrected coagulopathy, or advanced cardiovascular/pulmonary disease that precludes safe general anesthesia.",
    "Active gastrointestinal bleeding, large unreduced hiatal hernias with severe esophagitis, or untreated Barrett’s esophagus where a bypass may be clinically preferred.",
    "Pregnancy or planning to conceive within the first 12 to 18 months of the rapid post-operative weight-loss phase.",
    "Inability or unwillingness to commit to permanent nutritional supplementation, liquid/pureed gastric sleeve diet stages, or clinical monitoring."
  ]),
  preOpEvaluation: t([
    "Comprehensive Bariatric Consultation: In-depth medical history review and obesity surgery Istanbul planning by the bariatric team.",
    "Advanced Gastrointestinal Diagnostics: Upper endoscopy (EGD) where appropriate to assess stomach lining, hiatal hernias, and screen for H. pylori.",
    "Multidisciplinary Medical Assessment for Gastric Sleeve: Specialist evaluations from cardiology, pulmonology, endocrinology, and anesthesiology.",
    "Clinical Laboratory Profile: Full blood count, metabolic panel, liver/kidney function tests, thyroid profile, HbA1c, lipid panel, and baseline vitamin screenings.",
    "Psychological & Nutritional Readiness: Nutritional counseling to prepare patients for progressive post-op diet stages and lifestyle change."
  ]),
  risksComplications: t([
    "Staple Line Leak: Gastric fluid leakage into the abdominal cavity, managed via endoscopic stents, drainage, or surgical revision.",
    "Bleeding & Hemostasis Risks: Post-operative hemorrhage along the stapled edge, monitored closely and managed surgically or conservatively.",
    "Gastric Sleeve Stricture: Persistent narrowing or twisting of the sleeve tube due to scar tissue, requiring endoscopic balloon dilation.",
    "Nutritional Deficiencies: Inadequate absorption of iron, calcium, folate, and vitamins (B12, D), requiring structured daily supplementation.",
    "New-Onset Reflux (GERD): Increased intra-gastric pressure or anatomical changes that may cause or worsen acid reflux symptoms.",
    "Thromboembolic Complications: Deep vein thrombosis (DVT) or pulmonary embolism, mitigated via early mobilization and anticoagulants."
  ]),
  procedureSteps: t([
    { title: "Anesthesia & Access", desc: "The patient is placed under general anesthesia. Minimally invasive laparoscopic incisions (5-12mm) are made to introduce camera and specialized tools." },
    { title: "Gastric Mobilization", desc: "The blood vessels and attachments along the greater curvature of the stomach are mobilized using advanced energy devices from the pylorus to the esophagus." },
    { title: "Sleeve Resection", desc: "A bougie calibration tube (bougie, typically 36F-40F) is placed. A surgical linear stapler resects approximately 80% of the stomach, creating a narrow sleeve." },
    { title: "Leak Verification", desc: "An intraoperative leak test (dye or air insufflation) is performed to inspect staple line integrity and verify complete hemostasis." },
    { title: "Extraction & Closure", desc: "The resected stomach portion is removed, port sites are closed using absorbable sutures, and local anesthetic is applied for pain control." }
  ]),
  recoveryTimeline: t([
    { time: "Days 1-2 (Hospital)", desc: "In-hospital monitoring at our partner facility. Focus on early mobilization, pain control, and introduction of clear liquids." },
    { time: "Days 3-5 (Hotel)", desc: "Transition to a premium hotel in Istanbul. Initiation of full liquids (strained soups, protein shakes) and regular light walking." },
    { time: "Weeks 2-4 (Pureed)", desc: "Gradual return home. Transition to pureed/soft foods (eggs, mashed vegetables, fish). Avoid carbonation and drinking with meals." },
    { time: "Months 2-6 (Solid Food)", desc: "Transition to small, structured solid meals focusing on lean proteins. Continued metabolic improvement and significant excess weight loss." }
  ]),
  realisticOutcomes: t("Weight reduction outcomes vary by patient and depend on lifestyle change, nutrition, and bariatric follow-up. On average, patients can achieve a reduction of 60% to 70% of excess body weight within the first 12 to 18 months. Clinical studies indicate significant improvement or remission of obesity-related comorbidities, including Type 2 diabetes, hypertension, and sleep apnea. No weight-loss amount, cure, or health outcome can be guaranteed."),
  revisionPolicy: t("In cases of insufficient weight loss, severe reflux, or structural complications, a comprehensive diagnostic workup is performed. Revisional procedures (such as conversion to a gastric bypass) may be considered after multidisciplinary bariatric board review and personalized evaluation."),
  doctorNote: t("Sleeve gastrectomy is a powerful tool to reset your metabolism, but it is not a shortcut. Long-term weight stability and metabolic health require a lifetime commitment to healthy eating, structural exercise, hydration, and nutritional follow-up support."),
  medicalDisclaimer: t("The medical information on this page is for educational purposes only. Final eligibility, treatment planning, and surgical decisions are made exclusively after clinical assessment, blood tests, and face-to-face evaluations by the bariatric team."),
  faq: t([
    { q: "Who is a candidate for gastric sleeve in Turkey?", a: "Generally, candidates are individuals with a BMI of 40 or higher, or a BMI of 35 or higher with obesity-related health concerns. All candidates undergo a thorough medical assessment for gastric sleeve, including metabolic panels, cardiology clearance, and nutritional reviews, to determine if bariatric surgery is appropriate." },
    { q: "How is the sleeve gastrectomy Istanbul pathway structured?", a: "Our Istanbul bariatric surgery coordination includes remote document review, pre-op testing (blood panels, cardiology, upper endoscopy), in-person surgeon consultation, a laparoscopic gastric sleeve procedure with 2-3 nights of hospital recovery, and hotel stay before return-home planning." },
    { q: "What are the primary gastric sleeve risks?", a: "Potential risks include staple-line leak, bleeding, stricture (narrowing of the stomach), gastroesophageal reflux (GERD), and long-term nutritional deficiencies. These risks are minimized through advanced surgical techniques (like triple-row stapling) and post-op guidance." },
    { q: "What are the gastric sleeve diet stages after surgery?", a: "The diet progresses from clear liquids (first week) to full liquids (second week), followed by pureed and soft foods (weeks 3-4), before transitioning to small, structured solid meals. Patients must focus on high protein, avoid drinking liquids with meals, and take daily vitamin supplements." },
    { q: "Is long-term bariatric follow-up required?", a: "Yes, regular follow-up is critical. Our coordination programs include 12 months of nutritional support and coaching. Continued medical checks and annual blood panels are recommended to prevent vitamin deficiencies and support weight maintenance." },
    { q: "How much weight will I lose after weight loss surgery Turkey?", a: "On average, patients can lose 60% to 70% of excess weight in 12-18 months. However, individual weight-loss outcomes vary by patient and depend heavily on post-operative lifestyle modifications, dietary habits, and long-term follow-up adherence. No specific result can be guaranteed." }
  ]),
  references: t([
    {
      text: "American Society for Metabolic and Bariatric Surgery (ASMBS) and International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO): Joint Consensus Statement on Indications for Bariatric Surgery (2022).",
      url: "https://pubmed.ncbi.nlm.nih.gov/36526732/",
      type: "study"
    },
    {
      text: "National Institutes of Health (NIH) Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults.",
      url: "https://www.nhlbi.nih.gov/health-topics/all-publications-and-resources/clinical-guidelines-identification-evaluation-and",
      type: "source"
    },
    {
      text: "The Lancet Diabetes & Endocrinology: 'Long-term metabolic and weight-loss outcomes of sleeve gastrectomy versus Roux-en-Y gastric bypass' (By-Band-Sleeve Trial, 2025).",
      url: "https://pubmed.ncbi.nlm.nih.gov/40622470/",
      type: "study"
    }
  ])
};
