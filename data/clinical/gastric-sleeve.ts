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
    "Patients with a Body Mass Index (BMI) of 40 or higher, or a BMI of 35 or higher accompanied by serious weight-related medical conditions such as Type 2 diabetes, severe hypertension, or obstructive sleep apnea.",
    "Individuals who have documented unsuccessful attempts at sustained weight loss through structured dietary, exercise, and behavioral modification programs.",
    "Patients who are mentally and emotionally prepared to commit to permanent lifestyle adjustments, including lifetime dietary changes and regular post-operative clinical follow-ups."
  ]),
  contraindications: t([
    "Severe, uncontrolled psychiatric conditions or active substance abuse/dependence that may impair the patient's capacity to adhere to life-long post-operative nutritional guidelines.",
    "Active gastrointestinal disease such as untreated severe esophagitis, severe gastroesophageal reflux disease (GERD) with large hiatal hernia, or active peptic ulcer disease.",
    "Severe coagulation disorders, advanced portal hypertension with gastric varices, or systemic medical conditions that make general anesthesia or laparoscopic surgery high-risk.",
    "Pregnancy or planning to become pregnant within 18 months post-operatively."
  ]),
  preOpEvaluation: t([
    "Complete Laboratory Panels: Complete Blood Count (CBC), liver and kidney function tests, fasting glucose, HbA1c, lipid profile, thyroid panel, and comprehensive vitamin/mineral levels.",
    "Cardiopulmonary Screening: Electrocardiogram (EKG), chest X-ray, and pulmonary function tests to evaluate anesthesia tolerance.",
    "Gastrointestinal Diagnostics: Upper GI endoscopy (esophagogastroduodenoscopy or EGD) to assess the stomach lining, check for hiatal hernias, and screen for Helicobacter pylori infection.",
    "Multidisciplinary Clearance: Mandatory pre-operative consultations and clearance from a cardiologist, pulmonologist, endocrinologist, bariatric dietitian, and clinical psychologist."
  ]),
  risksComplications: t([
    "Staple Line Leak: A rare clinical complication where gastric fluid leaks from the staple line into the abdominal cavity, requiring urgent medical intervention or surgical revision.",
    "Hemorrhage: Bleeding along the stapled edge of the stomach, which is monitored closely post-operatively and managed conservatively or surgically if necessary.",
    "Stenosis or Stricture: Narrowing of the new gastric sleeve due to scar tissue, which may cause persistent nausea, vomiting, and difficulty swallowing, requiring endoscopic dilation.",
    "Nutritional Deficiencies: Chronic malabsorption of essential micro-nutrients, particularly Vitamin B12, iron, calcium, and Vitamin D, necessitating lifetime daily supplementation.",
    "New-Onset or Worsened GERD: Persistent acid reflux due to the increased intra-gastric pressure within the narrowed stomach tube."
  ]),
  procedureSteps: t([
    { title: "Anesthesia & Monitoring", desc: "The patient is placed under general anesthesia, continuously monitored by a board-certified anesthesiologist throughout the procedure." },
    { title: "Laparoscopic Access", desc: "Multiple small, minimally invasive incisions (typically 5-12mm) are made in the upper abdomen to insert trocars, a laparoscope, and specialized surgical instruments." },
    { title: "Gastric Mobilization", desc: "The blood vessels and attachments along the greater curvature of the stomach are carefully dissected using ultrasonic energy devices to mobilize the gastric body." },
    { title: "Stomach Resection", desc: "A calibration tube (bougie, typically 36F to 40F) is inserted into the stomach to guide the resection. The surgeon uses triple-row titanium linear staplers to divide and remove approximately 80% of the stomach." },
    { title: "Leak Testing and Hemostasis", desc: "An intraoperative leak test (methylene blue or air leak test) is performed to verify staple line integrity. The surgical edge is inspected for absolute hemostasis." },
    { title: "Closure", desc: "The resected portion of the stomach is extracted, the abdominal cavity is irrigated, trocars are removed, and the small incisions are closed with absorbable sutures." }
  ]),
  recoveryTimeline: t([
    { time: "Days 1-2 (Hospital)", desc: "Immediate post-op monitoring, pain management using patient-controlled analgesia, early ambulation within hours of surgery to prevent DVT, and initiation of a clear liquid diet." },
    { time: "Days 3-5 (Hotel)", desc: "Discharge from the hospital to a luxury recovery hotel. Transition to a full liquid diet (unsweetened protein shakes, strained broths). Patients are advised to walk frequently." },
    { time: "Weeks 2-4 (Transition)", desc: "Introduction of pureed and soft foods (mashed vegetables, soft eggs, pureed fish). Most patients return to light desk work and resume gentle physical activities." },
    { time: "Months 3+ (Stability)", desc: "Transition to solid foods in small, protein-rich portions. Rapid weight loss occurs, and patients experience increased energy levels alongside metabolic recovery." }
  ]),
  realisticOutcomes: t("On average, patients lose approximately 60% to 70% of their excess body weight within the first 12 to 18 months following a gastric sleeve procedure. Beyond weight reduction, clinical studies demonstrate a high rate of remission or significant improvement in weight-related comorbidities: up to 80% of Type 2 diabetes cases, 70% of hypertension cases, and over 85% of obstructive sleep apnea cases show clinical resolution. Long-term weight stability is highly dependent on adherence to daily nutritional protocols and regular physical activity."),
  revisionPolicy: t("Meva Clinic provides a comprehensive 12-month post-operative follow-up program, including regular consultations with bariatric surgeons and clinical dietitians. In cases of insufficient weight loss, weight regain, or persistent clinical complications (such as severe strictures or intractable GERD), patients undergo a complete diagnostic workup (barium swallow, endoscopy). Any subsequent revisional procedure, such as conversion of the sleeve to a Roux-en-Y gastric bypass, is proposed only after a multidisciplinary medical board review and individual anatomical evaluation."),
  doctorNote: t("Bariatric surgery is not an instant cure for obesity; it is a powerful metabolic tool designed to assist you in making permanent lifestyle alterations. The physical restriction of the gastric sleeve must be matched by a conscious, daily commitment to protein-first nutrition, adequate hydration, and behavioral change. Our team is here to support you at every stage of this transformation journey."),
  medicalDisclaimer: t("The medical information provided on this page is for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Eligibility for bariatric surgery is determined solely by qualified medical practitioners after a comprehensive, face-to-face clinical evaluation."),
  references: t([
    "American Society for Metabolic and Bariatric Surgery (ASMBS) and International Federation for the Surgery of Obesity and Metabolic Disorders (IFSO): Joint Consensus Statement on Indications for Bariatric Surgery, 2022.",
    "National Institutes of Health (NIH) Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults.",
    "The Lancet: 'Long-term metabolic and weight-loss outcomes of sleeve gastrectomy versus Roux-en-Y gastric bypass' (Clinical Trial Data, 2020).",
    "World Health Organization (WHO) Technical Report Series on the Prevention and Management of the Global Epidemic of Obesity."
  ])
};
