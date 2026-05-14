import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Zap, Shield, HeartPulse, Microscope } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import BmiCalculator from '../components/BmiCalculator';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import LogisticsHub from '../components/LogisticsHub';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const Bariatric = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);

  const faqEn = [
    { q: "Why does Gastric Sleeve reduce hunger — not just food volume?", a: "Sleeve gastrectomy removes the gastric fundus — the primary site of Ghrelin (the hunger hormone) production. Published data shows a 60–70% reduction in fasting Ghrelin levels within 6 weeks post-op, which is why sleeve patients report reduced appetite rather than simply feeling 'full sooner'. This neuroendocrine effect is unique to sleeve and does not occur with the balloon." },
    { q: "How does Gastric Bypass put Type 2 Diabetes into remission?", a: "Bypass creates a Roux-en-Y anastomosis that bypasses the duodenum and proximal jejunum. This triggers an immediate increase in GLP-1 and PYY secretion from the distal gut — independent of weight loss. In 80% of T2D patients, fasting glucose normalises within days of surgery, before significant weight loss occurs. This is why Bypass is now classified as Metabolic Surgery by the IFSO and ADA." },
    { q: "What is your complication rate?", a: "Our anastomotic leak rate for sleeve is 0.18% and for bypass 0.3% — both significantly below the global benchmarks of 0.7% and 1.5% respectively (IFSO 2025). This is attributable to Da Vinci robotic suturing precision and our mandatory 48-hour post-op monitoring protocol." },
    { q: "What does the 12-Month Dietitian Support include?", a: "Monthly telemedicine consultations with a bariatric-specialist dietitian covering: (1) micronutrient panel monitoring (B12, iron, D3, zinc), (2) protein intake optimisation per lean body mass, (3) progression from liquid to solid phases, and (4) psychological eating behaviour support. This protocol reduces rebound weight gain by 73% vs. surgery without structured follow-up." },
    { q: "Is the surgery laparoscopic or robotic?", a: "Both. Sleeve procedures use advanced 4K laparoscopy. Gastric Bypass is performed with the Da Vinci robotic system, providing 3D high-definition vision, 7-axis instrument articulation, and tremor filtering — resulting in sub-millimetre anastomotic precision." },
    { q: "What is Mini-Bypass (OAGB) and who is it for?", a: "One Anastomosis Gastric Bypass (OAGB) creates a single connection vs. Roux-en-Y's two. It delivers 80% of Bypass metabolic benefits with 30% shorter operative time (45 min vs. 75 min). Indicated for BMI 40–50 patients who want strong metabolic outcomes with lower procedural complexity." },
  ];

  const faqRo = [
    { q: "De ce reduce Gastric Sleeve foamea — nu doar volumul de mâncare?", a: "Gastrectomia sleeve îndepărtează fundul gastric — principalul sit de producere a Ghrelinei (hormonul foamei). Datele publicate arată o reducere de 60–70% a nivelurilor de Grelină a jeun în 6 săptămâni post-op. Acesta este motivul pentru care pacienții sleeve raportează poftă redusă, nu doar senzație de sațietate mai rapidă. Acest efect neuroendocrin este unic sleeve-ului." },
    { q: "Cum induce Gastric Bypass remisia Diabetului de Tip 2?", a: "Bypass-ul creează o anastomoză Roux-en-Y care ocolește duodenul și jejunul proximal. Aceasta declanșează o creștere imediată a secreției de GLP-1 și PYY din intestinul distal — independent de pierderea în greutate. La 80% din pacienții cu DZ T2, glicemia à jeun se normalizează în câteva zile de la operație. Acesta este motivul pentru care Bypass-ul este clasificat acum ca Chirurgie Metabolică de IFSO și ADA." },
    { q: "Care este rata dumneavoastră de complicații?", a: "Rata noastră de fistulă anastomotică pentru sleeve este de 0,18% și pentru bypass de 0,3% — ambele semnificativ sub benchmarkurile globale de 0,7% și respectiv 1,5% (IFSO 2025). Acest lucru se datorează preciziei de sutură robotice Da Vinci și protocolului nostru obligatoriu de monitorizare 48 de ore post-op." },
    { q: "Ce include Suportul Dieătician pe 12 luni?", a: "Consultații lunare de telemedicină cu un dietetician specialist bariatric acoperind: (1) monitorizarea panelului de micronutrienți (B12, fier, D3, zinc), (2) optimizarea aportului de proteine per masă corporală slabă, (3) progresia de la faze lichide la solide, și (4) suport comportamental alimentar psihologic. Acest protocol reduce creșterea în greutate cu 73% vs. chirurgie fără urmărire structurată." },
    { q: "Operația este laparoscopică sau robotică?", a: "Ambele. Procedurile sleeve folosesc laparoscopie avansată 4K. Gastric Bypass se efectuează cu sistemul robotic Da Vinci, oferind viziune 3D de înaltă definiție, articulare a instrumentului pe 7 axe și filtrare a tremorului — rezultând precizie anastomotică sub-milimetrică." },
    { q: "Ce este Mini-Bypass (OAGB) și pentru cine este indicat?", a: "One Anastomosis Gastric Bypass (OAGB) creează o singură conexiune față de două ale Roux-en-Y. Oferă 80% din beneficiile metabolice ale Bypass-ului cu 30% timp operator mai scurt (45 min față de 75 min). Indicat pentru pacienți cu IMC 40–50 care doresc rezultate metabolice puternice cu complexitate procedurală mai scăzută." },
  ];

  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Advanced Bariatric & Metabolic Surgery | Meva Clinic" : "Chirurgie Bariatrică și Metabolică Avansată | Meva Clinic"}
        description={isEn ? "Robotic-assisted Gastric Sleeve and Bypass in Istanbul. JCI-accredited metabolic engineering." : "Gastric Sleeve și Bypass asistat robotic în Istanbul. Inginerie metabolică acreditată JCI."}
        path={isEn ? "/en/gastric-sleeve" : "/ro/gastric-sleeve"}
        schemaType="MedicalProcedure"
        keywords={isEn ? "gastric sleeve surgery Turkey, robotic bariatric surgery" : "chirurgie bariatrica, gastric sleeve pret Istanbul"}
        reviewer={isEn ? REVIEWERS.bariatric : { ...REVIEWERS.bariatric, name: REVIEWERS.bariatric.nameRo, specialty: REVIEWERS.bariatric.specialtyRo, credentials: REVIEWERS.bariatric.credentialsRo }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Treatments" : "Tratamente", path: null }, { label: isEn ? "Bariatric Surgery" : "Chirurgie Bariatrică", path: null }]} 
        />

        <div className="text-center mb-4 animate-fade-up"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center animate-fade-up [animation-delay:100ms]">
          {isEn ? "Metabolic Engineering & Precision" : "Inginerie Metabolică de Precizie"}
        </h1>

        <div className="flex justify-center mb-12 animate-fade-up [animation-delay:200ms]">
           <DoctorBadge text={isEn ? "JCI-Accredited Bariatric Center — Da Vinci Robotic Systems" : "Centru Bariatric Acreditat JCI — Sisteme Robotice Da Vinci"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden animate-fade-up [animation-delay:300ms]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <TechCard icon={Cpu} title="Da Vinci Robotic" sub={isEn ? 'Surgical Platform' : 'Platformă Chirurgicală'} value={isEn ? 'Sub-millimeter' : 'Sub-milimetrică'} />
            <TechCard icon={HeartPulse} title="Metabolic Reset" sub={isEn ? 'Clinical Outcome' : 'Rezultat Clinic'} value={isEn ? 'T2 Diabetes Remission' : 'Remisia Diabetului'} />
            <TechCard icon={Zap} title="12-Month Support" sub={isEn ? 'Nutritional Intel' : 'Inteligență Nutrițională'} value={isEn ? 'Personalized Care' : 'Îngrijire Personalizată'} />
            <TechCard icon={Shield} title="JCI Safety" sub={isEn ? 'Certification' : 'Certificare'} value={isEn ? 'Gold Standard' : 'Standard de Aur'} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24 reveal">
          <div className="lg:col-span-2 space-y-16">

            {/* ── GASTRIC SLEEVE: Ghrelin Science ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><Microscope size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'Gastric Sleeve · Mechanism of Action' : 'Gastric Sleeve · Mecanism de Acțiune'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'Why Sleeve Works: The Ghrelin Effect' : 'De ce Funcționează Sleeve: Efectul Ghrelinei'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Gastric Sleeve (sleeve gastrectomy) removes up to 80% of the stomach — but the surgical impact extends far beyond volume restriction. The resected portion includes the gastric fundus, the primary production site of Ghrelin, the peptide hormone responsible for hunger signalling to the hypothalamus.'
                  : 'Gastric Sleeve (gastrectomia sleeve) elimină până la 80% din stomac — dar impactul chirurgical se extinde cu mult dincolo de restricția de volum. Porțiunea rezecată include fundul gastric, principalul sit de producere a Ghrelinei, hormonul peptidic responsabil de semnalizarea foamei către hipotalamus.'}
                </p>
                <p>{isEn
                  ? 'Clinical studies (NEJM 2025) confirm a 60–70% reduction in fasting Ghrelin levels within 6 weeks post-operatively. This neuroendocrine recalibration is why sleeve patients report a genuine reduction in appetite — not simply a mechanical feeling of fullness — creating a sustainable hormonal environment for long-term weight maintenance.'
                  : 'Studiile clinice (NEJM 2025) confirmă o reducere de 60–70% a nivelurilor de Grelină à jeun în 6 săptămâni post-operator. Această recalibrare neuroendocrină explică de ce pacienții sleeve raportează o reducere autentică a apetitului — nu doar o senzație mecanică de sațietate — creând un mediu hormonal sustenabil pentru menținerea pe termen lung a greutății.'}
                </p>
              </div>
              {/* Ghrelin stat callout */}
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { val: '60–70%', label: isEn ? 'Ghrelin reduction at 6 weeks' : 'Reducere Grelină la 6 săptămâni' },
                  { val: '65–75%', label: isEn ? 'Excess weight loss at 12 months' : 'Pierdere exces ponderal la 12 luni' },
                  { val: '0.18%', label: isEn ? 'Anastomotic leak rate (vs 0.7% global)' : 'Rată fistulă (vs 0,7% global)' },
                ].map(s => (
                  <div key={s.val} className="flex-1 min-w-[140px] p-5 bg-prime rounded-2xl text-white">
                    <p className="text-2xl font-black text-accent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── GASTRIC BYPASS: Metabolic Surgery ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><HeartPulse size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'Gastric Bypass · Metabolic Surgery' : 'Gastric Bypass · Chirurgie Metabolică'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'Bypass: The Gold Standard for Diabetes Remission' : 'Bypass: Standardul de Aur pentru Remisia Diabetului'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Gastric Bypass (Roux-en-Y) reconstructs the digestive anatomy by creating a small gastric pouch (30mL) and rerouting the small intestine, bypassing the duodenum and proximal jejunum. This anatomical change triggers a cascade of incretin hormones — particularly GLP-1 and PYY — from the distal gut within hours of surgery.'
                  : 'Gastric Bypass (Roux-en-Y) reconstruiește anatomia digestivă creând un mic buzunar gastric (30mL) și reroutând intestinul subțire, ocolind duodenul și jejunul proximal. Această modificare anatomică declanșează o cascadă de hormoni incretinici — în special GLP-1 și PYY — din intestinul distal în câteva ore de la operație.'}
                </p>
                <p>{isEn
                  ? 'The critical clinical finding: in 80% of Type 2 Diabetic patients, fasting blood glucose normalises within 3–7 days post-operatively — before significant weight loss occurs. This weight-independent glycaemic remission is the defining characteristic of Metabolic Surgery, as recognised by the International Federation for the Surgery of Obesity (IFSO) and the American Diabetes Association (ADA) in their 2023 joint statement.'
                  : 'Constatarea clinică critică: la 80% dintre pacienții cu Diabet de Tip 2, glicemia à jeun se normalizează în 3–7 zile post-operator — înainte de apariția pierderii semnificative în greutate. Această remisie glicemică independentă de greutate este caracteristica definitorie a Chirurgiei Metabolice, recunoscută de Federația Internațională pentru Chirurgia Obezității (IFSO) și Asociația Americană a Diabetului (ADA) în declarația lor comună din 2023.'}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { val: '80%', label: isEn ? 'T2 Diabetes remission rate' : 'Rată remisie Diabet T2' },
                  { val: '75–85%', label: isEn ? 'Excess weight loss at 18 months' : 'Pierdere exces ponderal la 18 luni' },
                  { val: '0.3%', label: isEn ? 'Complication rate (vs 1.5% global)' : 'Rată complicații (vs 1,5% global)' },
                ].map(s => (
                  <div key={s.val} className="flex-1 min-w-[140px] p-5 bg-prime rounded-2xl text-white">
                    <p className="text-2xl font-black text-accent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── PROCEDURE COMPARISON TABLE ── */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-prime mb-6">
                {isEn ? 'Which Procedure Is Right for You?' : 'Ce Procedură vi se Potrivește?'}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead className="bg-prime text-white">
                    <tr>
                      {[isEn?'Criterion':'Criteriu', 'Gastric Sleeve', 'Gastric Bypass', isEn?'Mini-Bypass (OAGB)':'Mini-Bypass (OAGB)'].map(h => (
                        <th key={h} className="px-5 py-3 text-left font-bold text-xs uppercase tracking-widest">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      {
                        criterion: isEn ? 'Ideal BMI' : 'IMC Ideal',
                        sleeve: '30–45', bypass: '40–60', mini: '40–50'
                      },
                      {
                        criterion: isEn ? 'T2 Diabetes remission' : 'Remisie Diabet T2',
                        sleeve: '60%', bypass: '80%', mini: '75%'
                      },
                      {
                        criterion: isEn ? 'Operative time' : 'Timp operator',
                        sleeve: '45–60 min', bypass: '75–90 min', mini: '45–55 min'
                      },
                      {
                        criterion: isEn ? 'Hospital stay' : 'Spitalizare',
                        sleeve: isEn?'2–3 nights':'2–3 nopți', bypass: isEn?'3–4 nights':'3–4 nopți', mini: isEn?'2–3 nights':'2–3 nopți'
                      },
                      {
                        criterion: isEn ? 'Return to work' : 'Revenire la muncă',
                        sleeve: isEn?'7–10 days':'7–10 zile', bypass: isEn?'10–14 days':'10–14 zile', mini: isEn?'7–10 days':'7–10 zile'
                      },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <td className="px-5 py-3 font-bold text-prime text-xs">{row.criterion}</td>
                        <td className="px-5 py-3 text-gray-600">{row.sleeve}</td>
                        <td className="px-5 py-3 text-gray-600 font-semibold text-accent-dark">{row.bypass}</td>
                        <td className="px-5 py-3 text-gray-600">{row.mini}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── DIETITIAN SUPPORT ── */}
            <section className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Shield size={16} className="text-prime" /></div>
                <h2 className="text-xl font-serif font-bold text-prime">
                  {isEn ? '12-Month Post-Op Dietitian Protocol' : 'Protocol Dietetician Post-Op 12 Luni'}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? 'Surgery creates the biological opportunity. The 12-month dietitian protocol ensures you capitalise on it. Our bariatric nutritionists manage the transition across four clinical phases: liquid (weeks 1–2), purée (weeks 3–4), soft foods (weeks 5–8), and full reintegration (month 3+). Monthly micronutrient panels (B12, iron, D3, zinc) detect deficiencies before they become symptomatic. Studies show this structured approach reduces rebound weight gain by 73% at 5 years vs. surgery without follow-up.'
                  : 'Operația creează oportunitatea biologică. Protocolul dietetician pe 12 luni asigură că o valorificați. Nutriționiștii noștri bariatrici gestionează tranziția prin patru faze clinice: lichidă (săptămânile 1–2), piure (săptămânile 3–4), alimente moi (săptămânile 5–8) și reintegrare completă (luna 3+). Panelurile lunare de micronutrienți (B12, fier, D3, zinc) detectează deficiențele înainte de a deveni simptomatice. Studiile arată că această abordare structurată reduce creșterea în greutate cu 73% la 5 ani față de chirurgia fără urmărire.'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { phase: isEn?'Phase 1':'Faza 1', label: isEn?'Liquid Diet':'Dietă Lichidă', weeks: isEn?'Wk 1–2':'Săpt 1–2' },
                  { phase: isEn?'Phase 2':'Faza 2', label: isEn?'Purée':'Piure', weeks: isEn?'Wk 3–4':'Săpt 3–4' },
                  { phase: isEn?'Phase 3':'Faza 3', label: isEn?'Soft Foods':'Alimente Moi', weeks: isEn?'Wk 5–8':'Săpt 5–8' },
                  { phase: isEn?'Phase 4':'Faza 4', label: isEn?'Full Diet':'Dietă Completă', weeks: isEn?'Mo 3+':'Luna 3+' },
                ].map(p => (
                  <div key={p.phase} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-accent font-black text-xs uppercase tracking-widest">{p.phase}</p>
                    <p className="font-bold text-prime text-sm mt-1">{p.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{p.weeks}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── BMI CTA ── */}
            <section className="bg-[#0b1626] rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shrink-0">
                  <Activity size={22} className="text-prime" />
                </div>
                <div className="flex-1">
                  <p className="text-accent font-black text-xs uppercase tracking-widest mb-2">
                    {isEn ? 'Check Your Eligibility in 30 Seconds' : 'Verificați Eligibilitatea în 30 de Secunde'}
                  </p>
                  <h3 className="text-xl font-serif font-bold mb-3">
                    {isEn ? 'Are You a Bariatric Candidate?' : 'Ești Candidat pentru Chirurgie Bariatrică?'}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {isEn
                      ? 'Enter your height, weight, age and gender into our medical BMI tool. If your BMI is above 35, our algorithm immediately displays your bariatric eligibility and connects you with a coordinator.'
                      : 'Introduceți înălțimea, greutatea, vârsta și sexul în instrumentul nostru medical IMC. Dacă IMC-ul depășește 35, algoritmul nostru afișează imediat eligibilitatea bariatrică și vă conectează cu un coordonator.'}
                  </p>
                  <a
                    href="#bmi"
                    className="inline-flex items-center gap-2 bg-accent text-prime font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all text-sm"
                  >
                    <Activity size={15} />
                    {isEn ? 'Calculate My BMI Now' : 'Calculează IMC-ul Meu Acum'}
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-prime text-white rounded-[2rem] p-7 border border-white/5">
                <h3 className="font-serif font-bold text-lg text-accent mb-5 border-b border-white/10 pb-4">
                  {isEn ? 'Safety & Outcomes' : 'Siguranță & Rezultate'}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '🏥', label: isEn?'JCI Accredited Hospital':'Spital Acreditat JCI' },
                    { icon: '🤖', label: isEn?'Da Vinci Robotic Surgery':'Chirurgie Robotică Da Vinci' },
                    { icon: '📉', label: isEn?'0.18% leak rate (Sleeve)':'Rată fistulă 0,18% (Sleeve)' },
                    { icon: '📉', label: isEn?'0.3% complication rate (Bypass)':'Rată complicații 0,3% (Bypass)' },
                    { icon: '🩺', label: isEn?'12-mo dietitian follow-up':'Urmărire dietetician 12 luni' },
                    { icon: '🌍', label: isEn?'Romanian coordinator 24/7':'Coordonator român 24/7' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/905324675941"
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-green-500 transition-all text-sm shadow-lg"
              >
                📱 {isEn ? 'WhatsApp Free Quote' : 'Ofertă Gratuită WhatsApp'}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[3rem] p-12 mb-24 border border-gray-100 reveal">
           <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-bold text-prime mb-8">{isEn ? "Candidate Status Evaluation" : "Evaluarea Statusului de Candidat"}</h3>
              <BmiCalculator />
           </div>
        </div>

        <div className="mb-24 reveal">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "The 12-Month Recovery Roadmap" : "Drumul tău spre Recuperare (12 Luni)"}
              </h2>
           </div>
           <RecoverySimulator type="bariatric" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100 reveal">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Advanced Suitability Test" : "Test de Eligibilitate Avansat"}</h2>
                 <p className="text-gray-500">{isEn ? "Determine your candidacy for robotic metabolic surgery in 30 seconds." : "Determină eligibilitatea ta pentru chirurgia metabolică robotică în 30 de secunde."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "Robotic Bariatric Surgery" : "Chirurgie Bariatrică Robotică"} isEn={isEn} />
           </div>
        </div>

        <div className="mb-24 reveal">
           <PatientJourneyTimeline />
        </div>

        <LogisticsHub isEn={isEn} />

        <div className="max-w-4xl mx-auto mb-24 reveal">
          <h3 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical Intelligence FAQ" : "Întrebări Frecvente Clinice"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`} aria-hidden="true">
                    {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-8 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-6 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <MedicalReviewer reviewer={REVIEWERS.bariatric} isEn={isEn} />
        <CertRow isEn={isEn} />
        <LocalContext isEn={isEn} />

        <div className="text-center mt-20">
           <a 
             href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? "I want a robotic bariatric quote." : "Doresc o ofertă pentru chirurgie bariatrică robotică.")}`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'bariatric_page_cta' })}
             target="_blank" 
             rel="noreferrer" 
             className="bg-prime text-white font-bold py-6 px-16 rounded-2xl shadow-2xl hover:bg-[#0f1f38] transition-all text-xl inline-flex items-center group"
             aria-label={isEn ? "Contact us on WhatsApp for a metabolic quote" : "Contactați-ne pe WhatsApp pentru o ofertă metabolică"}
           >
              {isEn ? "Get Your Metabolic Quote" : "Obține Oferta Metabolică"} 
              <Activity size={24} className="ml-4 text-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
           </a>
        </div>
      </div>
    </div>
  );
}
export default Bariatric;
