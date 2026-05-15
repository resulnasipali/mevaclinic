import React, { useState } from 'react';
import { Calendar, Activity, ShieldCheck, HeartPulse, Microscope } from 'lucide-react';

const recoveryData = {
  oncology: [
    {
      stage: "1 Week",
      physical: "Acute recovery phase. Minimal fatigue. Real-time tumor tracking ensures zero collateral damage.",
      protocol: "Daily hydration monitoring and sub-millimeter dosimetry validation.",
      badge: "Robotic Precision"
    },
    {
      stage: "1 Month",
      physical: "Return to normal activity. Inflammation markers normalize. VOLO Optimizer effects stabilize.",
      protocol: "First post-op diagnostic imaging (PET-CT) to verify target remission.",
      badge: "Clinical Response"
    },
    {
      stage: "6 Months",
      physical: "Full metabolic recovery. Systemic strength restored. Cell regeneration optimization.",
      protocol: "Multidisciplinary board review of 6-month biochemical markers.",
      badge: "Molecular Stability"
    },
    {
      stage: "1 Year",
      physical: "Long-term surveillance phase. Complete integration of healthy tissue regeneration.",
      protocol: "Annual high-definition diagnostic mapping for permanent control.",
      badge: "Curative Success"
    }
  ],
  hair: [
    {
      stage: "1 Week",
      physical: "Grafts secured. Scabbing sheds as Sapphire FUE incisions heal. Redness subsides.",
      protocol: "Bio-Active preservation wash and laser therapy for graft oxygenation.",
      badge: "Graft Anchor"
    },
    {
      stage: "1 Month",
      physical: "Shock loss phase (normal). Follicles enter resting phase before permanent growth.",
      protocol: "Exosome booster session for vascularization support.",
      badge: "Dormancy Management"
    },
    {
      stage: "6 Months",
      physical: "Significant visual density. Hair shaft thickness increases by 40% vs. month 3.",
      protocol: "Mathematical density assessment vs. MD Harun's original model.",
      badge: "Growth Surge"
    },
    {
      stage: "1 Year",
      physical: "Final result. Natural hairline and maximum vertex density achieved.",
      protocol: "Final clinical photography and certification of graft survival.",
      badge: "Total Restoration"
    }
  ],
  bariatric: [
    {
      stage: "1 Week",
      physical: "Liquid phase. Rapid hormonal shift (GLP-1 increase). Initial 5-8kg loss common.",
      protocol: "Metabolic intelligence monitoring. 24/7 nutritionist support active.",
      badge: "Metabolic Shift"
    },
    {
      stage: "1 Month",
      physical: "Transition to soft solids. Energy levels spike as insulin resistance drops.",
      protocol: "Blood panel analysis: Glucose, Lipids, and Micronutrient levels.",
      badge: "Hormonal Reset"
    },
    {
      stage: "6 Months",
      physical: "50-70% of excess weight lost. Significant reduction in co-morbidities.",
      protocol: "Gastric volume calibration and advanced fitness protocol integration.",
      badge: "Peak Transformation"
    },
    {
      stage: "1 Year",
      physical: "Weight stabilization. Remission of type-2 diabetes in 85%+ of cases.",
      protocol: "Long-term nutritional intelligence plan and maintenance mapping.",
      badge: "Permanent Remission"
    }
  ]
};

const RecoverySimulator = ({ type = 'bariatric', isEn = true }) => {
  const [activeStep, setActiveStep] = useState(0);
  const currentData = recoveryData[type] || recoveryData.bariatric;
  const current = currentData[activeStep];

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-10">
        <Activity className="text-accent" size={24} />
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-prime">
          {isEn ? "Recovery Science Simulator" : "Simulatorul Științei Recuperării"}
        </h3>
      </div>

      {/* Range Slider */}
      <div className="mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-100 -translate-y-1/2 rounded-full"></div>
        <div 
          className="absolute top-1/2 left-0 h-1.5 bg-accent -translate-y-1/2 rounded-full transition-all duration-500"
          style={{ width: `${(activeStep / 3) * 100}%` }}
        ></div>
        <div className="relative flex justify-between">
          {currentData.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all z-10 border-4 shadow-lg
                ${activeStep === i 
                  ? 'bg-prime text-white border-accent scale-125' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-accent'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {currentData.map((s, i) => (
            <span key={i} className={`text-[10px] font-bold uppercase tracking-widest ${activeStep === i ? 'text-prime' : 'text-gray-300'}`}>
              {s.stage}
            </span>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in" key={activeStep}>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-lg text-[10px] font-bold uppercase tracking-widest">
            <HeartPulse size={12} /> {current.badge}
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              {isEn ? "What to Expect" : "La ce să te aștepți"}
            </h4>
            <p className="text-lg text-prime font-serif leading-relaxed">
              {current.physical}
            </p>
          </div>
        </div>

        <div className="space-y-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden">
          <Microscope className="absolute top-4 right-4 text-prime/5" size={48} />
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <ShieldCheck size={14} className="text-prime" />
              {isEn ? "Clinical Protocol" : "Protocol Clinic"}
            </h4>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              {current.protocol}
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200">
             <p className="text-[10px] font-bold text-prime uppercase tracking-widest">
                {isEn ? "Medical Validation: Board Review Required" : "Validare Medicală: Necesită Revizuirea Consiliului"}
             </p>
          </div>
        </div>
      </div>

      {/* CTA Inside Simulator */}
      <div className="mt-12 text-center">
         <p className="text-xs text-gray-400 font-medium italic">
            {isEn 
              ? "*Timeline results are averages based on clinical trials. Individual results vary per case." 
              : "*Rezultatele cronologice sunt medii bazate pe studii clinice. Rezultatele individuale variază pe caz."}
         </p>
      </div>
    </div>
  );
};

export default RecoverySimulator;
