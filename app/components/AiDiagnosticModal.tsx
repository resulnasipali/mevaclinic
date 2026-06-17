// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ScanFace, Activity, CheckCircle, Smartphone } from 'lucide-react';

export default function AiDiagnosticModal({ lang }: { lang: string }) {
  const whatsappNumber = lang === 'ro' ? '905324675941' : '905366511599';
  const [step, setStep] = useState(0); // 0: Idle, 1: Details, 2: Scanning, 3: Result
  const [loadingProgress, setLoadingProgress] = useState(0);

  const startAnalysis = () => {
    setStep(2);
    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setLoadingProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setTimeout(() => setStep(3), 500);
      }
    }, 150);
  };

  return (
    <div className="w-full bg-[#0b1626] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden my-16 shadow-2xl border border-gray-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-amber-500/30">
              <Bot size={18} />
              {tUI("AI-Powered System", lang)}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {tUI("Instant Medical Diagnosis", lang)}
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              {tUI("Discover your ideal treatment plan in 60 seconds. Our advanced AI maps your needs to our S-Tier surgical protocols.", lang)}
            </p>

            {step === 0 && (
              <button 
                onClick={() => setStep(1)}
                className="bg-amber-500 hover:bg-amber-600 text-[#0b1626] font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-3 group"
              >
                <ScanFace className="group-hover:rotate-12 transition-transform" />
                {tUI("Start Free Analysis", lang)}
              </button>
            )}
          </motion.div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-6">{tUI("Basic Parameters", lang)}</h3>
                <div className="space-y-4">
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                    <option value="" className="text-black">{tUI("Select Area of Interest", lang)}</option>
                    <option value="hair" className="text-black">{tUI("Hair Restoration", lang)}</option>
                    <option value="body" className="text-black">{tUI("Body Sculpting / Bariatric", lang)}</option>
                    <option value="dental" className="text-black">{tUI("Dental Aesthetics", lang)}</option>
                  </select>
                  <input 
                    type="number" 
                    placeholder={tUI("Age", lang)} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                  <div className="flex gap-4">
                    <input 
                      type="number" 
                      placeholder={tUI("Height (cm)", lang)} 
                      className="w-1/2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                    />
                    <input 
                      type="number" 
                      placeholder={tUI("Weight (kg)", lang)} 
                      className="w-1/2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button 
                    onClick={startAnalysis}
                    className="w-full bg-white text-[#0b1626] font-bold text-lg px-8 py-4 rounded-xl mt-4 hover:bg-gray-100 transition-colors"
                  >
                    {tUI("Generate 3D Model", lang)}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-32 h-32 mb-8">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 border-4 border-t-amber-500 border-r-amber-500/30 border-b-amber-500/10 border-l-amber-500/50 rounded-full"
                  />
                  <Activity className="absolute inset-0 m-auto text-amber-500 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tUI("AI is analyzing...", lang)}</h3>
                <p className="text-amber-500 font-mono text-xl">{loadingProgress}%</p>
                <p className="text-gray-400 text-sm mt-4">
                  {tUI("Mapping biometric data to surgical protocols", lang)}
                </p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-400 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {tUI("Analysis Complete (100% Match)", lang)}
                </h3>
                <p className="text-gray-300 mb-8">
                  {tUI("Our AI has formulated your personalized surgical blueprint. For strict medical privacy, your detailed report and pricing have been securely generated.", lang)}
                </p>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  className="w-full bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-3 hover:bg-[#1ebd5a]"
                >
                  <Smartphone />
                  {tUI("Get My Report on WhatsApp", lang)}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
