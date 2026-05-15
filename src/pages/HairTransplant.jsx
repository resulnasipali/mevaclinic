import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Microscope, Target, Shield, HeartPulse, Sparkles, UserCheck } from 'lucide-react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const hairRecoveryEn = [
  { period: 'Day 1', label: 'Procedure completed, bio-active dressing applied' },
  { period: 'Day 3', label: 'First clinical wash, graft stability check' },
  { period: 'Day 10', label: 'Scab removal, 98% graft adherence achieved' },
  { period: 'Month 3', label: 'Shock-loss phase ends, new growth begins' },
  { period: 'Month 12', label: 'Final density maturation and aesthetic peak' },
];

const hairRecoveryRo = [
  { period: 'Ziua 1', label: 'Procedură finalizată, pansament bio-activ' },
  { period: 'Ziua 3', label: 'Prima spălare clinică, verificarea grefelor' },
  { period: 'Ziua 10', label: 'Îndepărtarea crustelor, aderență de 98%' },
  { period: 'Luna 3', label: 'Finalul fazei de shock-loss, creștere nouă' },
  { period: 'Luna 12', label: 'Maturarea densității finale și vârful estetic' },
];

const faqEn = [
  { q: "What is Exosome-Enhanced Graft Survival?", a: "It is a regenerative protocol where mesenchymal exosomes are applied to the recipient area to boost vascularization and ensure the highest possible survival rate for transplanted follicles." },
  { q: "How does MD Harun's protocol differ?", a: "MD Harun utilizes a proprietary 'Mathematical Graft Mapping' system and Sapphire FUE blades to create channels that precisely match the natural growth angle of your hair." },
  { q: "What is Bio-Active Preservation?", a: "During the extraction phase, follicles are stored in a specialized solution (HypoThermosol) at controlled temperatures to prevent ischemia-reperfusion injury." }
];

const faqRo = [
  { q: "Ce este supraviețuirea grefelor îmbunătățită cu Exozomi?", a: "Un protocol regenerativ în care exozomii mezenchimali sunt aplicați pentru a stimula vascularizarea și a asigura rata maximă de supraviețuire." },
  { q: "Cum diferă protocolul MD Harun?", a: "MD Harun utilizează un sistem de 'Mapping Matematic al Grefelor' și lame de Safir pentru a crea canale care respectă unghiul natural de creștere." },
  { q: "Ce este conservarea Bio-Activă?", a: "Folosul grefelor sunt păstrate într-o soluție specializată (HypoThermosol) la temperaturi controlate pentru a preveni degradarea celulară." }
];

const HairTransplant = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Regenerative Hair Restoration | MD Harun Istanbul" : "Restaurare Capilară Regenerativă | MD Harun Istanbul"}
        description={isEn ? "Advanced Sapphire FUE with Exosome enhancement. Precision hair transplant by MD Harun." : "Implant de păr Sapphire FUE cu tratament cu exozomi. Precizie coordonată de MD Harun."}
        path={isEn ? "/en/hair-transplant" : "/ro/implant-par"}
        schemaType="MedicalProcedure"
        keywords="FUE hair transplant Istanbul, DHI hair restoration Turkey, implant de par Turcia, clinica transplant par DHI Istanbul"
        reviewer={REVIEWERS.hair}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight">
          {isEn ? "Precision Follicular Engineering" : "Inginerie Foliculară de Precizie"}
        </h1>

        <div className="flex justify-center mb-12">
           <DoctorBadge text={isEn ? "Clinical Protocol by MD Harun" : "Protocol Clinic coordonat de MD Harun"} />
        </div>

        {/* Technical Spec Cards */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={Microscope} title="Sapphire FUE" sub={isEn ? 'Blade Tech' : 'Tehnologie Lamă'} value={isEn ? 'V-Shape Precision' : 'Precizie în V'} />
            <TechCard icon={Sparkles} title="Exosome Boost" sub={isEn ? 'Regenerative' : 'Regenerativ'} value={isEn ? '+98% Survival' : 'Supraviețuire +98%'} />
            <TechCard icon={Target} title="Graft Mapping" sub={isEn ? 'Mathematical' : 'Matematic'} value={isEn ? 'Natural Density' : 'Densitate Naturală'} />
            <TechCard icon={Shield} title="Bio-Preservation" sub={isEn ? 'Storage' : 'Stocare'} value="HypoThermosol" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6">
                {isEn ? "The Regenerative Revolution: Exosome Therapy" : "Revoluția Regenerativă: Terapia cu Exozomi"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "Traditional hair transplants focus on the physical movement of follicles. At Meva Clinic, under MD Harun's guidance, we treat the biological environment. Our 'Exosome-Enhanced' protocol involves the application of mesenchymal stem cell-derived exosomes to the scalp, triggering cellular repair and rapid revascularization of the newly implanted grafts." 
                    : "Implantul de păr tradițional se concentrează pe mișcarea fizică a foliculilor. La Meva Clinic, sub îndrumarea MD Harun, tratăm mediul biologic. Protocolul nostru 'Exosome-Enhanced' implică aplicarea exozomilor pentru a declanșa repararea celulară."}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6">
                {isEn ? "Sapphire FUE & Bio-Active Preservation" : "Sapphire FUE și Conservarea Bio-Activă"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "We utilize Sapphire FUE blades, which allow for smaller, more precise 'V-shape' incisions compared to traditional steel. This minimizes trauma and allows for higher graft density. During the process, every graft is stored in a Bio-Active solution to prevent ischemia, ensuring that each follicle remains in a peak viable state." 
                    : "Utilizăm lame de Safir, care permit incizii mai mici și mai precise în formă de 'V'. Acest lucru minimizează trauma și permite o densitate mai mare. Fiecare grefă este păstrată într-o soluție bio-activă pentru a preveni ischemia."}
                </p>
              </div>
            </section>

            {/* Performance Table */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 overflow-hidden">
               <h3 className="text-2xl font-serif font-bold text-prime mb-6 text-center">{isEn ? "Clinical Success Metrics" : "Metrici de Succes Clinic"}</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-gray-500">
                   <thead className="text-xs text-prime uppercase bg-gray-100">
                     <tr>
                       <th className="px-6 py-4">{isEn ? "Metric" : "Indicator"}</th>
                       <th className="px-6 py-4">{isEn ? "Standard FUE" : "FUE Standard"}</th>
                       <th className="px-6 py-4 text-accent">{isEn ? "Meva Sapphire+" : "Meva Sapphire+"}</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-200">
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Graft Survival Rate" : "Rata Supraviețuire"}</td>
                       <td className="px-6 py-4">80-85%</td>
                       <td className="px-6 py-4 font-bold text-prime">98%+</td>
                     </tr>
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Healing Time" : "Timp Vindecare"}</td>
                       <td className="px-6 py-4">15-20 {isEn ? "Days" : "Zile"}</td>
                       <td className="px-6 py-4 font-bold text-prime">7-10 {isEn ? "Days" : "Zile"}</td>
                     </tr>
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Channel Precision" : "Precizie Canale"}</td>
                       <td className="px-6 py-4">{isEn ? "Manual" : "Manuală"}</td>
                       <td className="px-6 py-4 font-bold text-prime">{isEn ? "Sapphire V-Shape" : "Safir în V"}</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0b1626] text-white p-8 rounded-[2rem] shadow-xl">
               <UserCheck className="text-accent mb-4" size={32} />
               <h3 className="text-xl font-bold mb-4">{isEn ? "MD Harun" : "MD Harun"}</h3>
               <p className="text-sm text-gray-400 leading-relaxed mb-6">
                 {isEn 
                   ? "A world-renowned hair restoration expert who personally designs every frontal hairline and graft distribution plan." 
                   : "Un expert recunoscut mondial care proiectează personal fiecare linie frontală și plan de distribuție a grefelor."}
               </p>
               <div className="text-xs font-bold text-accent uppercase tracking-widest">{isEn ? "ISHRS Member" : "Membru ISHRS"}</div>
            </div>
          </div>
        </div>

        <div className="mb-24">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "Biological Recovery Pathway" : "Calea de Recuperare Biologică"}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                 {isEn ? "Visualize the maturation of your newly implanted follicles over 12 months." : "Vizualizează maturarea noilor tăi foliculii implantați pe parcursul a 12 luni."}
              </p>
           </div>
           <RecoverySimulator type="hair" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Graft Eligibility Test" : "Test de Eligibilitate Grefă"}</h2>
                 <p className="text-gray-500">{isEn ? "Calculate your potential graft requirement and donor suitability." : "Calculează necesarul tău potențial de grefe și eligibilitatea zonei donatoare."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "Sapphire FUE Hair Transplant" : "Implant Păr Sapphire FUE"} isEn={isEn} />
           </div>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Procedure FAQ" : "Întrebări Procedură"}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-50'}`} aria-hidden="true">
                    <Plus size={18} />
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-8 overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-50 pt-6">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MedicalReviewer reviewer={REVIEWERS.hair} isEn={isEn} />
        <CertRow isEn={isEn} />

        <LocalContext isEn={isEn} />
      </div>
    </div>
  );
}

export default HairTransplant;
