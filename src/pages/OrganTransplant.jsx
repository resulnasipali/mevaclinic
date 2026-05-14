import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Shield, HeartPulse, Microscope } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';

const faqEn = [
  { q: 'Do you offer cadaveric organ transplants?', a: 'No. Meva Clinic exclusively performs Living-Donor transplants. Living-donor grafts have a 10-year survival rate of 87–92% vs. 70–75% for cadaveric organs, due to minimised cold ischaemia time and the ability to schedule the operation electively under optimal conditions.' },
  { q: 'Who can be a living donor?', a: 'A living donor must be a blood relative (up to 4th degree consanguinity) or spouse. The donor evaluation includes: ABO blood typing, HLA crossmatch, kidney function panel (eGFR), liver volumetry (CT), psychological evaluation, and Ethics Board approval. This process takes 2–3 weeks.' },
  { q: 'What immunosuppression protocol is used post-transplant?', a: 'Our standard induction uses basiliximab (IL-2 receptor antagonist) + methylprednisolone. Maintenance: tacrolimus (target trough 8–12 ng/mL month 1–3) + mycophenolate mofetil + low-dose prednisolone. mTOR inhibitors (everolimus) are introduced at month 3 to reduce calcineurin nephrotoxicity. All protocols are individualised based on PRA and DSA antibody levels.' },
  { q: 'How is bone marrow transplant different from organ transplant?', a: 'Bone marrow transplant (BMT/HSCT) does not require surgical implantation — haematopoietic stem cells are infused intravenously after myeloablative or reduced-intensity conditioning. The challenge is GVHD prevention and engraftment monitoring. Matched unrelated donor (MUD), haploidentical and autologous transplants are all available at Meva.' },
  { q: 'What is the Da Vinci robotic technique used for?', a: 'Da Vinci Xi is used for laparoscopic donor nephrectomy (kidney harvesting) and the vascular anastomosis phase of liver transplantation. Its 7-axis articulation and 3D visualisation enable sub-millimetre vessel suturing, reducing bleeding risk and anastomotic leak rate by 40% vs. open technique.' },
];

const faqRo = [
  { q: 'Oferiți transplanturi de la cadavru?', a: 'Nu. Meva Clinic efectuează exclusiv transplanturi de la Donator Viu. Grefele de la donator viu au o rată de supraviețuire la 10 ani de 87–92% vs. 70–75% pentru organele cadaverice, datorită timpului de ischemie rece minimizat și posibilității de a programa operația electiv în condiții optime.' },
  { q: 'Cine poate fi donator viu?', a: 'Un donator viu trebuie să fie o rudă de sânge (până la gradul 4 de consanguinitate) sau soț/soție. Evaluarea donatorului include: tipaj sanguin ABO, crossmatch HLA, panel funcție renală (eGFR), volumetrie hepatică (CT), evaluare psihologică și aprobare Comisie Etică. Acest proces durează 2–3 săptămâni.' },
  { q: 'Ce protocol de imunosupresie este utilizat post-transplant?', a: 'Inducția noastră standard utilizează basiliximab (antagonist receptor IL-2) + metilprednisolon. Menținere: tacrolimus (țintă trough 8–12 ng/mL lunile 1–3) + micofenolat mofetil + prednisolon doză mică. Inhibitorii mTOR (everolimus) sunt introduși la luna 3 pentru a reduce nefrotoxicitatea calcineurinei. Toate protocoalele sunt individualizate pe baza nivelurilor de anticorpi PRA și DSA.' },
  { q: 'Cum diferă transplantul de măduvă osoasă de transplantul de organ?', a: 'Transplantul de măduvă osoasă (TMO/TCSH) nu necesită implantare chirurgicală — celulele stem hematopoietice sunt perfuzate intravenos după condiționare mieloablativă sau de intensitate redusă. Provocarea constă în prevenirea GVHD și monitorizarea prize. Transplanturi de la donator nepersonal compatibil (MUD), haploidentic și autolog sunt toate disponibile la Meva.' },
  { q: 'Pentru ce este utilizată tehnica robotică Da Vinci?', a: 'Da Vinci Xi este utilizat pentru nefrectomia laparoscopică a donatorului (recoltarea rinichiului) și faza anastomozei vasculare a transplantului hepatic. Articularea sa pe 7 axe și vizualizarea 3D permit suturarea vaselor sub milimetru, reducând riscul de sângerare și rata de scurgere anastomotică cu 40% față de tehnica deschisă.' },
];

const OrganTransplant = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Organ Transplant | Meva Clinic Istanbul" : "Transplant de Organe | Meva Clinic Istanbul"}
        description={isEn ? "Living Donor Kidney and Liver transplants via state-of-the-art Robotic Surgery." : "Transplant Renal și Hepatic de la donator viu prin chirurgie robotică de precizie."}
        path={isEn ? "/en/organ-transplant" : "/ro/transplant-organe"}
        schemaType="MedicalProcedure"
        keywords="transplant de organe Turcia, liver transplant Istanbul, kidney transplant Turkey"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 text-center">
          {isEn ? "Life-Saving Medical Excellence" : "Excelență Medicală Salvatoare de Vieți"}
        </h1>
        <div className="flex justify-center mb-8">
           <DoctorBadge text={isEn ? "Da Vinci Robotic Center — JCI Accredited" : "Centru Robotic Da Vinci — Acreditat JCI"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-3xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard icon={Cpu} title="Da Vinci Xi Robotic" sub={isEn ? 'Platform' : 'Platformă'} value={isEn ? 'Micro-anastomosis precision' : 'Precizie micro-anastomoză'} />
          <TechCard icon={Microscope} title="Cross-Matching Hub" sub={isEn ? 'Immunology' : 'Imunologie'} value={isEn ? 'Advanced compatibility panel' : 'Panel de compatibilitate avansat'} />
          <TechCard icon={HeartPulse} title="Living Donor Focus" sub={isEn ? 'Graft Strategy' : 'Strategie Grefă'} value={isEn ? 'Superior organ longevity' : 'Longevitate superioară'} />
          <TechCard icon={Shield} title="JCI Sterile Isolation" sub={isEn ? 'Environment' : 'Mediu'} value={isEn ? 'Zero-infection target' : 'Țintă zero-infecții'} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600 mb-16">
          {/* Kidney */}
          <div className="mb-10 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Microscope size={16} className="text-prime" /></div>
              <h3 className="text-2xl font-bold text-prime m-0">{isEn ? 'Kidney Transplant — Laparoscopic Living-Donor' : 'Transplant Renal — Donator Viu Laparoscopic'}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">{isEn
              ? 'Living-donor kidney transplantation offers a 10-year graft survival rate of 87–92% — significantly superior to cadaveric (70–75%) and dialysis (50% at 5 years). The donor nephrectomy is performed laparoscopically (3 × 1 cm ports), with Da Vinci Xi robotic-assisted vascular dissection, reducing donor hospital stay to 2–3 days and return to work within 3–4 weeks.'
              : 'Transplantul renal de la donator viu oferă o rată de supraviețuire a grefei la 10 ani de 87–92% — semnificativ superioară celei cadaverice (70–75%) și dializei (50% la 5 ani). Nefrectomia donatorului este efectuată laparoscopic (3 × 1 cm porturi), cu disecție vasculară asistată robotic Da Vinci Xi, reducând spitalizarea donatorului la 2–3 zile și revenirea la muncă în 3–4 săptămâni.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { val: '87–92%', label: isEn ? '10-year graft survival' : 'Supraviețuire grefă 10 ani' },
                { val: '2–3 days', label: isEn ? 'Donor hospital stay' : 'Spitalizare donator' },
                { val: '1–2 wk', label: isEn ? 'Recipient discharge' : 'Externare primitor' },
              ].map(s => (
                <div key={s.val} className="p-4 bg-prime rounded-xl text-white text-center min-w-[120px]">
                  <p className="text-xl font-black text-accent">{s.val}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Liver */}
          <div className="mb-10 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><HeartPulse size={16} className="text-prime" /></div>
              <h3 className="text-2xl font-bold text-prime m-0">{isEn ? 'Liver Transplant — Right Lobe Living-Donor' : 'Transplant Hepatic — Lob Drept Donator Viu'}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">{isEn
              ? "The liver's unique regenerative capacity (hepatocyte proliferation via HGF/EGFR signalling) permits transplantation of the right lobe (55–65% of liver volume) from a living donor. Volumetric CT planning ensures the donor retains a future liver remnant (FLR) of ≥ 30% to prevent post-hepatectomy liver failure (PHLF). Indications: end-stage cirrhosis (Child-Pugh C / MELD > 15), hepatocellular carcinoma within Milan criteria, acute liver failure."
              : "Capacitatea regenerativă unică a ficatului (proliferare hepatocite via semnalizare HGF/EGFR) permite transplantul lobului drept (55–65% din volumul hepatic) de la un donator viu. Planificarea CT volumetrică asigură că donatorul reține un volum hepatic restant viitor (FLR) de ≥ 30% pentru a preveni insuficiența hepatică post-hepatectomie (PHLF). Indicații: ciroză terminală (Child-Pugh C / MELD > 15), carcinom hepatocelular în criterii Milano, insuficiență hepatică acută."}
            </p>
            <div className="p-4 bg-white rounded-xl border border-gray-100 text-xs font-semibold text-prime">
              {isEn ? 'Multidisciplinary Team: Hepatobiliary Surgeon · Transplant Anesthesiologist · Hepatologist · Intensivist · Clinical Transplant Coordinator · Immunologist' : 'Echipă Multidisciplinară: Chirurg Hepatobiliar · Anestezist Transplant · Hepatolog · Intensivist · Coordonator Transplant Clinic · Imunolog'}
            </div>
          </div>

          {/* Bone Marrow */}
          <div className="p-8 bg-[#0b1626] rounded-[2rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Shield size={16} className="text-prime" /></div>
              <h3 className="text-2xl font-bold text-accent m-0">{isEn ? 'Bone Marrow Transplant (HSCT)' : 'Transplant Măduvă Osoasă (TCSH)'}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{isEn
              ? 'Haematopoietic Stem Cell Transplantation (HSCT) is the curative treatment for haematological malignancies (AML, ALL, MDS, lymphoma) and non-malignant haematopoietic disorders (aplastic anaemia, thalassaemia). Meva offers: (1) Allogeneic MUD (10/10 HLA-matched unrelated donor from international registry), (2) Haploidentical (50% match — parent, sibling, child), (3) Autologous (own stem cell mobilisation and re-infusion). Conditioning regimen (myeloablative or RIC) is engineered by the haematology board based on disease and patient fitness score.'
              : 'Transplantul de Celule Stem Hematopoietice (TCSH) este tratamentul curativ pentru malignități hematologice (LAM, LAL, SMD, limfom) și tulburări hematopoietice non-maligne (anemie aplastică, talasemie). Meva oferă: (1) Alogen MUD (donator nepersonal compatibil HLA 10/10 din registru internațional), (2) Haploidentic (compatibilitate 50% — părinte, frate, copil), (3) Autolog (mobilizarea și reinfuzia propriilor celule stem). Regimul de condiționare (mieloablativ sau RIC) este proiectat de board-ul de hematologie pe baza bolii și scorului de fitness al pacientului.'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: isEn?'MUD Allogeneic':'Alogen MUD', icon: '🌍' },
                { label: isEn?'Haploidentical':'Haploidentic', icon: '👨‍👩‍👧' },
                { label: isEn?'Autologous':'Autolog', icon: '🔄' },
                { label: isEn?'GVHD Prophylaxis':'Profilaxie GVHD', icon: '🛡️' },
              ].map(c => (
                <div key={c.label} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-2xl mb-1">{c.icon}</p>
                  <p className="text-xs font-bold text-gray-300">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Patient Journey" : "Călătoria Pacientului"}</h3>
          <PatientJourneyTimeline />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Frequently Asked Questions" : "Întrebări Frecvente"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
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
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-12">
           <a 
             href="/#ai-assistant" 
             className="bg-prime text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:bg-[#0f1f38] transition-all text-lg inline-flex items-center"
             aria-label={isEn ? "Discuss Your Organ Transplant Case" : "Discută Cazul de Transplant de Organe"}
           >
              {isEn ? "Discuss Your Case Confidentially" : "Discută Cazul Tău în Confidențialitate"} <Activity size={20} className="ml-3 text-accent" aria-hidden="true" />
           </a>
        </div>
        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}
export default OrganTransplant;
