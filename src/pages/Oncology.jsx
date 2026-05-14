import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Cpu, Zap, Brain, Shield, Microscope, Target, HeartPulse } from 'lucide-react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const oncologyRecoveryEn = [
  { period: 'Day 1', label: 'Robotic session completed, outpatient return to hotel' },
  { period: 'Day 2-5', label: 'Sub-clinical monitoring, personalized diet initiation' },
  { period: 'Week 2', label: 'Biological marker analysis, return to light activity' },
  { period: 'Month 1', label: 'Primary imaging verification (PET-CT/MRI)' },
  { period: 'Month 3', label: 'Multidisciplinary tumor response evaluation' },
];

const oncologyRecoveryRo = [
  { period: 'Ziua 1', label: 'Sesiune robotică finalizată, revenire la hotel' },
  { period: 'Zilele 2-5', label: 'Monitorizare sub-clinică, inițiere dietă personalizată' },
  { period: 'Săptămâna 2', label: 'Analiza markerilor biologici, revenire la activitate' },
  { period: 'Luna 1', label: 'Prima verificare imagistică (PET-CT/RMN)' },
  { period: 'Luna 3', label: 'Evaluarea răspunsului tumoral multidisciplinar' },
];

const faqEn = [
  { q: "What makes CyberKnife S7 unique?", a: "The S7 with VOLO Optimizer is the only robotic system capable of real-time tumor tracking and motion correction with ±0.5mm precision, allowing for higher doses without harming healthy tissue." },
  { q: "How does Radixact with Synchrony work?", a: "Synchrony technology uses AI to synchronize the radiation beam with the patient's breathing cycle, ensuring the target is hit even as it moves within the chest or abdomen." },
  { q: "What is Immunotherapy and who qualifies?", a: "Immunotherapy uses checkpoint inhibitors (PD-1/PD-L1, CTLA-4) to unleash the immune system against cancer cells. Eligibility is determined by tumour PD-L1 expression, TMB (tumour mutational burden) and MSI status — all tested in our molecular pathology lab." },
  { q: "What is PROTAC targeted therapy?", a: "PROteolysis TArgeting Chimeras (PROTACs) are bifunctional molecules that hijack the cell's own protein degradation machinery (ubiquitin-proteasome system) to destroy disease-causing oncoproteins — including those previously considered 'undruggable'. Unlike classic targeted therapy that inhibits proteins, PROTACs eliminate them entirely." },
  { q: "What is the Multidisciplinary Tumor Board?", a: "A weekly case conference where surgical oncologists, radiation oncologists, medical oncologists, radiologists and pathologists jointly engineer a personalised treatment plan. All cases at Meva are board-reviewed before treatment initiation." },
  { q: "Are robotic radiation treatments painful?", a: "No. CyberKnife and Radixact are non-invasive, non-surgical procedures requiring no anaesthesia, no incisions and causing zero pain during delivery." }
];

const faqRo = [
  { q: "Ce face CyberKnife S7 unic?", a: "Modelul S7 cu VOLO Optimizer este singurul sistem robotic capabil de urmărire tumorală în timp real și corecție a mișcării la o precizie de ±0,5mm, permițând doze mai mari fără a afecta țesuturile sănătoase." },
  { q: "Cum funcționează Radixact cu Synchrony?", a: "Tehnologia Synchrony folosește AI pentru a sincroniza fasciculul de radiații cu ciclul respirator al pacientului, eliminând erorile cauzate de mișcare în piept sau abdomen." },
  { q: "Ce este imunoterapia și cine este eligibil?", a: "Imunoterapia utilizează inhibitori ai punctelor de control imun (PD-1/PD-L1, CTLA-4) pentru a elibera sistemul imunitar împotriva celulelor canceroase. Eligibilitatea este determinată de expresia PD-L1 tumorală, TMB (povara mutațională tumorală) și statusul MSI — toate testate în laboratorul nostru de patologie moleculară." },
  { q: "Ce este terapia țintită PROTAC?", a: "PROteolysis TArgeting Chimeras (PROTAC) sunt molecule bifuncționale care deturnează propria mașinărie de degradare a proteinelor a celulei (sistemul ubiquitin-proteazom) pentru a distruge oncoproteinele cauzatoare de boală — inclusiv cele considerate anterior 'nedrogabile'. Spre deosebire de terapia țintită clasică care inhibă proteinele, PROTAC le elimină complet." },
  { q: "Ce este Tumor Board-ul Multidisciplinar?", a: "O conferință de caz săptămânală unde oncologii chirurgicali, oncologii de radioterapie, oncologii medicali, radiologii și patologii proiectează împreună un plan de tratament personalizat. Toate cazurile la Meva sunt revizuite de board înainte de inițierea tratamentului." },
  { q: "Tratamentele cu radiații robotice sunt dureroase?", a: "Nu. CyberKnife și Radixact sunt proceduri non-invazive, non-chirurgicale care nu necesită anestezie, nu implică incizii și nu provoacă durere în timpul administrării." }
];

const Oncology = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Scientific Oncology Excellence | CyberKnife S7 Istanbul" : "Excelență în Oncologie Științifică | CyberKnife S7 Istanbul"}
        description={isEn ? "Advanced oncology featuring CyberKnife S7 with VOLO Optimizer and Radixact Synchrony under JCI safety protocols." : "Oncologie avansată cu CyberKnife S7, VOLO Optimizer și Radixact Synchrony sub protocoale de siguranță JCI."}
        path={isEn ? "/en/oncology" : "/ro/oncologie"}
        schemaType="MedicalProcedure"
        keywords="advanced oncology treatment Turkey, CyberKnife therapy Istanbul, tratament oncologic Turcia"
        reviewer={REVIEWERS.oncology}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Treatments" : "Tratamente", path: null }, { label: isEn ? "Oncology" : "Oncologie", path: null }]} 
        />
        
        <div className="text-center mb-6 animate-fade-up">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight animate-fade-up [animation-delay:100ms]">
          {isEn ? "The Future of Robotic Radiosurgery" : "Viitorul Radiochirurgiei Robotice"}
        </h1>

        <div className="flex justify-center mb-12 animate-fade-up [animation-delay:200ms]">
           <DoctorBadge text={isEn ? "Multidisciplinary Tumor Board — Clinical Collective Intelligence" : "Tumor Board Multidisciplinar — Inteligență Colectivă Clinică"} />
        </div>

        {/* Technical Specification Grid */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden animate-fade-up [animation-delay:300ms]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <TechCard icon={Cpu} title="CyberKnife S7 + VOLO" sub={isEn ? 'Precision Engine' : 'Motor de Precizie'} value="±0.44mm" />
            <TechCard icon={Zap} title="Radixact Synchrony" sub={isEn ? 'Motion Tracking' : 'Urmărire Mișcare'} value={isEn ? 'AI-Driven' : 'Bazat pe AI'} />
            <TechCard icon={Target} title={isEn ? 'Stereotactic Target' : 'Țintă Stereotactică'} sub={isEn ? 'Methodology' : 'Metodologie'} value={isEn ? 'Sub-Millimeter' : 'Sub-Milimetrică'} />
            <TechCard icon={Shield} title="JCI Accredited" sub={isEn ? 'Safety Standard' : 'Standard Siguranță'} value={isEn ? 'Gold Standard' : 'Standard de Aur'} />
          </div>
        </div>

        {/* Scientific Content Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-16">

            {/* ── IMMUNOTHERAPY ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><Brain size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'Immunotherapy · Next-Generation Oncology' : 'Imunoterapie · Oncologie de Nouă Generație'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'Checkpoint Immunotherapy: Unleashing Your Immune System' : 'Imunoterapie Checkpoint: Eliberarea Sistemului Imunitar'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Cancer cells express surface proteins (PD-L1, CD47) that function as “don’t eat me” signals, effectively disabling cytotoxic T-lymphocytes that would otherwise destroy them. Immune checkpoint inhibitors — monoclonal antibodies targeting PD-1, PD-L1 and CTLA-4 receptors — block these evasion signals, restoring the immune system’s ability to recognise and eliminate malignant cells.'
                  : 'Celulele canceroase exprimă proteine de suprafață (PD-L1, CD47) care funcționează ca semnale “nu mă mânca”, dezactivând efectiv limfocitele T citotoxice care altfel le-ar distruge. Inhibitorii punctelor de control imunitar — anticorpi monoclonali care țintesc receptorii PD-1, PD-L1 și CTLA-4 — blochează aceste semnale de evaziune, restabilind capacitatea sistemului imunitar de a recunoaște și elimina celulele maligne.'}
                </p>
                <p>{isEn
                  ? 'Patient eligibility is determined by a comprehensive molecular tumour profiling panel: PD-L1 expression (TPS/CPS score), tumour mutational burden (TMB), microsatellite instability (MSI-H/dMMR) status, and NTRK/RET fusion screening. Our molecular pathology laboratory completes this panel within 5 working days.'
                  : 'Eligibilitatea pacientului este determinată de un panel complet de profilare moleculară a tumorii: expresia PD-L1 (scor TPS/CPS), povara mutațională tumorală (TMB), statusul instabilității microsatelitare (MSI-H/dMMR) și screening pentru fuziunile NTRK/RET. Laboratorul nostru de patologie moleculară finalizează acest panel în 5 zile lucrătoare.'}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { val: '5 days', label: isEn ? 'Full molecular profiling panel' : 'Panel profilare moleculară complet' },
                  { val: '40–60%', label: isEn ? 'Response rate in PD-L1 high tumours' : 'Rată răspuns tumori PD-L1 ridicate' },
                  { val: 'JCI', label: isEn ? 'Accredited oncology protocols' : 'Protocoale oncologie acreditate' },
                ].map(s => (
                  <div key={s.val} className="flex-1 min-w-[140px] p-5 bg-prime rounded-2xl text-white">
                    <p className="text-2xl font-black text-accent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── PROTAC ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><Microscope size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'PROTAC Technology · Targeted Protein Degradation' : 'Tehnologie PROTAC · Degradare Proteică Ȟintită'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'PROTAC: Eliminating the “Undruggable” Oncoproteins' : 'PROTAC: Eliminarea Oncoproteinelor “Nedrogabile”'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Conventional targeted therapies inhibit oncoproteins by occupying their active site — but many of the most aggressive cancer drivers (KRAS G12C, β-catenin, STAT3) lack tractable binding pockets, making them resistant to classical small-molecule inhibitors. PROteolysis TArgeting Chimeras (PROTACs) circumvent this entirely.'
                  : 'Terapiile țintite convenționale inhibă oncoproteinele ocupându-le situsul activ — dar mulți dintre cei mai agresivi motori oncogeni (KRAS G12C, β-catenină, STAT3) nu posedă buzunare de legare tractabile, făcându-i rezistenți la inhibitorii clasici de molecule mici. Chimerele de țintire a proteolizei (PROTAC) depășesc complet acest lucru.'}
                </p>
                <p>{isEn
                  ? 'A PROTAC molecule is a bifunctional warhead: one arm binds the target oncoprotein, the other recruits an E3 ubiquitin ligase. This proximity triggers polyubiquitination of the target, flagging it for degradation by the 26S proteasome. Unlike classical inhibitors, a single PROTAC molecule can catalytically degrade multiple copies of its target — the “hook effect” — and remains unaffected by resistance mutations at the active site.'
                  : 'O moleculă PROTAC este un focos bifuncțional: un braț leagă oncoproteină țintă, celălalt recrutează o E3 ubiquitin ligază. Această proximitate declansșează poliubiquitinarea țintei, marcand-o pentru degradare de către proteazomul 26S. Spre deosebire de inhibitorii clasici, o singură moleculă PROTAC poate degrada catalitic mai multe copii ale țintei sale — “efectul cârlig” — rămânând neafectat de mutațiile de rezistență la situsul activ.'}
                </p>
              </div>
              <div className="mt-6 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-prime/50 mb-3">{isEn ? 'Currently Available PROTAC Protocols at Meva' : 'Protocoale PROTAC Disponibile la Meva'}</p>
                <div className="flex flex-wrap gap-2">
                  {['ARV-471 (ER+ Breast Cancer)', 'ARV-110 (CRPC / Prostate)', 'KT-474 (IRAK4 — Haematological)', 'BRD4 PROTAC (TNBC)', 'Custom MDM2 Protocol'].map(p => (
                    <span key={p} className="text-xs bg-white border border-gray-200 text-prime font-semibold px-3 py-1.5 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── TUMOR BOARD ── */}
            <section className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Shield size={16} className="text-prime" /></div>
                <h2 className="text-xl font-serif font-bold text-prime">{isEn ? 'Multidisciplinary Tumor Board' : 'Tumor Board Multidisciplinar'}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? 'Every Meva oncology patient is presented at a weekly multidisciplinary case conference before any treatment begins. The board comprises surgical oncologists, radiation oncologists, medical oncologists, diagnostic radiologists and molecular pathologists. Treatment decisions are consensus-based and documented per NCCN/ESMO guidelines.'
                  : 'Fiecare pacient oncologic Meva este prezentat la o conferință de caz multidisciplinară săptămânală înainte de începerea oricărui tratament. Board-ul cuprinde oncologi chirurgicali, oncologi de radioterapie, oncologi medicali, radiologi diagnosticieni și patologi moleculari. Deciziile de tratament sunt bazate pe consens și documentate conform ghidurilor NCCN/ESMO.'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { role: isEn?'Surgical Oncology':'Oncologie Chirurgicală', icon: '✂️' },
                  { role: isEn?'Radiation Oncology':'Oncologie Radiație', icon: '⚡' },
                  { role: isEn?'Medical Oncology':'Oncologie Medicală', icon: '💊' },
                  { role: isEn?'Diagnostic Radiology':'Radiologie', icon: '🩻' },
                  { role: isEn?'Molecular Pathology':'Patologie Moleculară', icon: '🔬' },
                ].map(r => (
                  <div key={r.role} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-2xl mb-1">{r.icon}</p>
                    <p className="text-xs font-bold text-prime leading-tight">{r.role}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-prime text-white rounded-[2rem] p-7 border border-white/5">
                <h3 className="font-serif font-bold text-lg text-accent mb-5 border-b border-white/10 pb-4">
                  {isEn ? 'Technology Stack' : 'Stack Tehnologic'}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '🤖', label: 'CyberKnife S7 + VOLO Optimizer' },
                    { icon: '⚡', label: 'Radixact + Synchrony AI' },
                    { icon: '🧬', label: isEn?'Molecular PD-L1 / TMB / MSI Testing':'Testare Moleculară PD-L1/TMB/MSI' },
                    { icon: '💊', label: isEn?'PROTAC Protocol Library':'Bibliotecă Protocol PROTAC' },
                    { icon: '🏥', label: isEn?'JCI Accredited Oncology Centre':'Centru Oncologie Acreditat JCI' },
                    { icon: '🌍', label: isEn?'NCCN / ESMO Guideline Adherence':'Aderare Ghiduri NCCN/ESMO' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://wa.me/905324675941" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-green-500 transition-all text-sm shadow-lg">
                📱 {isEn ? 'Oncology Second Opinion' : 'A Doua Opinie Oncologică'}
              </a>
            </div>
          </div>
        </div>

        {/* Recovery Simulator */}
        <div className="mb-24 reveal">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "The Biological Recovery Pathway" : "Calea de Recuperare Biologică"}
              </h2>
           </div>
           <RecoverySimulator type="oncology" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100 reveal">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Suitability Assessment" : "Evaluarea Eligibilității"}</h2>
                 <p className="text-gray-500">{isEn ? "Find out if CyberKnife S7 is the right clinical solution for your condition." : "Află dacă CyberKnife S7 este soluția clinică potrivită pentru afecțiunea ta."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "CyberKnife S7 Oncology" : "Oncologie CyberKnife S7"} isEn={isEn} />
           </div>
        </div>

        <div className="mb-24 reveal">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Integrated Patient Journey" : "Călătoria Integrată a Pacientului"}</h2>
           <PatientJourneyTimeline />
        </div>

        <CertRow isEn={isEn} />
        <LocalContext isEn={isEn} />

        <div className="text-center mt-20">
           <a 
             href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? "I would like to request a Tumor Board evaluation." : "Doresc să solicit o evaluare Tumor Board.")}`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'oncology_board_request' })}
             target="_blank" 
             rel="noreferrer" 
             aria-label={isEn ? "Request Medical Board Evaluation" : "Solicită Evaluare Tumor Board"}
             className="bg-prime text-white font-bold py-6 px-16 rounded-2xl shadow-2xl hover:bg-[#0f1f38] transition-all text-xl inline-flex items-center group"
           >
              {isEn ? "Request Medical Board Evaluation" : "Solicită Evaluare Tumor Board"} 
              <Activity size={24} className="ml-4 text-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
           </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <MedicalReviewer reviewer={REVIEWERS.oncology} isEn={isEn} />
      </div>
    </div>
  );
}

export default Oncology;
