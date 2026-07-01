'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ChevronRight, 
  Activity, 
  User, 
  Calendar, 
  ShieldCheck, 
  Scale, 
  Dumbbell, 
  HeartPulse, 
  Info, 
  Globe, 
  Send, 
  CheckCircle2, 
  Loader2, 
  UserCheck 
} from 'lucide-react';
import Link from 'next/link';
import { tUI } from '@/utils/uiTranslations';
import { pushToDataLayer } from '@/utils/AnalyticsUtils';

interface QuizClientProps {
  lang: string;
}

export default function QuizClient({ lang }: QuizClientProps) {
  const isEn = lang === 'en';
  
  // Quiz Steps and Capture States
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [medicalHistory, setMedicalHistory] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [goal, setGoal] = useState('');
  
  // Lead Details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Romania');
  const [selectedPrefix, setSelectedPrefix] = useState('+40');

  const countryPrefixes = [
    { prefix: '+40', name: tUI('Romania', lang) },
    { prefix: '+44', name: 'UK' },
    { prefix: '+49', name: 'Germany' },
    { prefix: '+33', name: 'France' },
    { prefix: '+39', name: 'Italy' },
    { prefix: '+34', name: 'Spain' },
    { prefix: '+90', name: tUI('Turkey', lang) },
    { prefix: '+1', name: 'USA/Canada' },
    { prefix: '+31', name: 'Netherlands' },
    { prefix: '+32', name: 'Belgium' },
    { prefix: '+353', name: 'Ireland' },
    { prefix: '+41', name: 'Switzerland' },
    { prefix: '+971', name: 'UAE' },
    { prefix: '+966', name: 'Saudi Arabia' }
  ];

  // Auto-calculate BMI
  const weightVal = parseFloat(weight);
  const heightVal = parseFloat(height) / 100;
  const bmiVal = (weightVal && heightVal && heightVal > 0) 
    ? (weightVal / (heightVal * heightVal)).toFixed(1) 
    : '—';

  // Toggle multi-select medical conditions
  const handleMedicalToggle = (cond: string) => {
    if (cond === 'None') {
      setMedicalHistory(['None']);
    } else {
      let updated = medicalHistory.filter(c => c !== 'None');
      if (updated.includes(cond)) {
        updated = updated.filter(c => c !== cond);
      } else {
        updated.push(cond);
      }
      if (updated.length === 0) {
        updated = ['None'];
      }
      setMedicalHistory(updated);
    }
  };

  // Move from Step 5 to Step 6 with loader
  const triggerClinicalAnalysis = () => {
    setIsLoading(true);
    setLoadingText(tUI('Analyzing your clinical parameters...', lang));
    
    setTimeout(() => {
      setLoadingText(tUI('Please wait while our medical algorithm reviews your safety criteria.', lang));
    }, 700);

    setTimeout(() => {
      setIsLoading(false);
      setStep(6);
    }, 1500);
  };

  // Submit Lead
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);

    const fullPhone = `${selectedPrefix} ${phone}`;
    const quizDetails = `Gender: ${gender} | Age: ${ageGroup} | Height: ${height}cm | Weight: ${weight}kg | Calculated BMI: ${bmiVal} | History: ${medicalHistory.join(', ')} | Timeline: ${timeline} | Goal: ${goal} | Country: ${country}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'suitability_quiz',
          name,
          email: email || 'No email provided',
          phone: fullPhone,
          country,
          bmiScore: bmiVal !== '—' ? bmiVal : undefined,
          procedure: 'Treatment Suitability',
          details: quizDetails,
          source: 'EligibilityQuiz'
        })
      });

      if (response.ok) {
        import('@/utils/pixel').then(({ PxTrack }) => {
          PxTrack('Lead', { form_location: 'EligibilityQuiz', bmi: bmiVal });
          pushToDataLayer('generate_lead', { form_location: 'eligibility_quiz' });
          pushToDataLayer('form_submission_success', { form_location: 'eligibility_quiz' });
          setIsSuccess(true);
        });
      } else {
        alert(lang === 'ro' ? 'Eroare la trimiterea evaluării.' : 'Error submitting evaluation. Please try again.');
      }
    } catch (err) {
      console.error('Quiz submit error:', err);
      alert(lang === 'ro' ? 'Eroare de rețea. Reîncercați.' : 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Slide Variants for Step Animations
  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }
  } as const;

  const progressPercent = Math.round((step / 6) * 100);

  return (
    <div className="bg-[#0b1626] min-h-screen pt-32 pb-24 text-white font-sans overflow-hidden relative">
      {/* Decorative luxury background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-prime/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-8 flex justify-between items-center">
          <Link 
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft size={16} /> {tUI('Return to Home Page', lang)}
          </Link>
          {step > 1 && !isSuccess && !isLoading && (
            <button 
              onClick={() => setStep(step - 1)}
              className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold transition-colors py-2 px-3 hover:bg-white/5 rounded-lg -mr-3"
            >
              {tUI('Back', lang)}
            </button>
          )}
        </div>

        {/* Outer Quiz Box */}
        <div className="bg-[#112440]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          
          {/* Gold Progress Bar */}
          {!isSuccess && (
            <div className="h-1 w-full bg-white/10 relative overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}

          {/* Loader State */}
          {isLoading ? (
            <div className="p-6 sm:p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[380px] animate-fade-in">
              <Loader2 className="w-16 h-16 text-accent animate-spin mb-8" strokeWidth={1.5} />
              <h4 className="text-2xl font-serif font-bold text-white mb-4 tracking-wide">
                {loadingText}
              </h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                {tUI('JCI Pre-Qualifying Protocols Active', lang)}
              </p>
            </div>
          ) : isSuccess ? (
            /* Success State */
            <div className="p-6 sm:p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[420px] animate-scale-in">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <CheckCircle2 size={42} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                {tUI('Evaluation Submitted Successfully!', lang)}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                {tUI('A medical coordinator will contact you on WhatsApp within 15 minutes with your custom report.', lang)}
              </p>
              
              <div className="w-full max-w-xs space-y-4">
                <a
                  href={`https://wa.me/905324675941?text=${encodeURIComponent(
                    lang === 'ro' 
                      ? `Bună ziua, am completat testul de eligibilitate. Aș dori să primesc raportul meu clinic.` 
                      : `Hello, I have completed the suitability quiz and would like my report.`
                  )}`}
                  onClick={() => pushToDataLayer('whatsapp_click', { location: 'eligibility_quiz_success' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-4 px-6 rounded-2xl transition-all text-sm text-center shadow-lg hover:-translate-y-0.5"
                >
                  {tUI('Chat on WhatsApp Now', lang)}
                </a>
                <Link 
                  href={`/${lang}`}
                  className="block w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-6 rounded-2xl transition-all text-sm text-center border border-white/10"
                >
                  {tUI('Return to Home Page', lang)}
                </Link>
              </div>
            </div>
          ) : (
            /* Quiz Form Wizard */
            <div className="p-5 sm:p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="min-h-[300px]"
                >
                  
                  {/* STEP 1: Gender & Age */}
                  {step === 1 && (
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                        {tUI('Step 1: Gender & Age', lang)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
                        {tUI('Select Your Profile', lang)}
                      </h3>
                      
                      {/* Gender Selector */}
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{tUI('Gender', lang)}</p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {[
                          { val: 'Male', icon: User, label: tUI('Male', lang) },
                          { val: 'Female', icon: UserCheck, label: tUI('Female', lang) }
                        ].map(g => (
                          <button
                            key={g.val}
                            type="button"
                            onClick={() => setGender(g.val)}
                            className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 text-center flex flex-col items-center gap-3 ${
                              gender === g.val 
                                ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                                : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                            }`}
                          >
                            <g.icon size={28} className={gender === g.val ? 'text-accent' : 'text-gray-400'} />
                            <span className="font-bold text-sm uppercase tracking-wider">{g.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Age Group */}
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{tUI('Age Group', lang)}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['18-25', '26-35', '36-50', '50+'].map(age => (
                          <button
                            key={age}
                            type="button"
                            onClick={() => setAgeGroup(age)}
                            className={`py-4 px-3 rounded-xl border transition-all text-center text-sm font-bold tracking-wide ${
                              ageGroup === age
                                ? 'bg-accent/15 border-accent text-accent'
                                : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                            }`}
                          >
                            {age}
                          </button>
                        ))}
                      </div>

                      {/* Forward Action Button */}
                      <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                        <button
                          disabled={!gender || !ageGroup}
                          onClick={() => setStep(2)}
                          className="bg-accent hover:bg-yellow-400 disabled:opacity-30 disabled:hover:bg-accent text-[#0b1626] font-bold py-3.5 px-8 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg"
                        >
                          {tUI('Next', lang)} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Physical Metrics */}
                  {step === 2 && (
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                        {tUI('Step 2: Physical Metrics', lang)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                        {tUI('Metric Calibration', lang)}
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                        {tUI('Enter your weight and height to calculate your Body Mass Index (BMI) automatically.', lang)}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">
                            {tUI('Weight (kg)', lang)}
                          </label>
                          <div className="relative">
                            <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="number"
                              required
                              value={weight}
                              onChange={(e) => setWeight(e.target.value)}
                              placeholder="e.g. 85"
                              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-sans text-lg font-semibold"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">
                            {tUI('Height (cm)', lang)}
                          </label>
                          <div className="relative">
                            <Dumbbell className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="number"
                              required
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                              placeholder="e.g. 175"
                              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-sans text-lg font-semibold"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Display computed BMI indicator */}
                      {(weightVal > 0 && heightVal > 0) && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in mb-8">
                          <div className="flex items-center gap-3">
                            <Activity className="text-accent" size={24} />
                            <div>
                              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                                {tUI('Calculated BMI:', lang)}
                              </p>
                              <p className="text-lg font-bold text-white leading-none">
                                {parseFloat(bmiVal) < 18.5 ? tUI('Underweight', lang) : 
                                 parseFloat(bmiVal) < 25 ? tUI('Normal Weight', lang) :
                                 parseFloat(bmiVal) < 30 ? tUI('Overweight', lang) :
                                 parseFloat(bmiVal) < 35 ? tUI('Obesity Class I', lang) :
                                 tUI('Obesity Class II–III', lang)}
                              </p>
                            </div>
                          </div>
                          <span className="text-3xl font-bold font-serif text-accent">{bmiVal}</span>
                        </div>
                      )}

                      {/* Forward Action Button */}
                      <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                        <button
                          disabled={!weight || !height}
                          onClick={() => setStep(3)}
                          className="bg-accent hover:bg-yellow-400 disabled:opacity-30 disabled:hover:bg-accent text-[#0b1626] font-bold py-3.5 px-8 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg"
                        >
                          {tUI('Next', lang)} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Medical History */}
                  {step === 3 && (
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                        {tUI('Step 3: Medical History', lang)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                        {tUI('Medical Profile', lang)}
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                        {tUI('Select any pre-existing medical conditions (select all that apply):', lang)}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: 'Diabetes', label: tUI('Diabetes', lang) },
                          { id: 'Hypertension', label: tUI('Hypertension', lang) },
                          { id: 'Sleep Apnea', label: tUI('Sleep Apnea', lang) },
                          { id: 'None', label: tUI('None', lang) },
                          { id: 'Other', label: tUI('Other', lang) }
                        ].map(c => {
                          const isSelected = medicalHistory.includes(c.id);
                          return (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => handleMedicalToggle(c.id)}
                              className={`p-5 rounded-xl border transition-all text-left flex justify-between items-center font-bold text-sm ${
                                isSelected
                                  ? 'bg-accent/15 border-accent text-accent'
                                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                              }`}
                            >
                              <span>{c.label}</span>
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-accent border-accent text-[#0b1626]' : 'border-white/20'
                              }`}>
                                {isSelected && <span className="text-[10px] leading-none">✓</span>}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Forward Action Button */}
                      <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                        <button
                          disabled={medicalHistory.length === 0}
                          onClick={() => setStep(4)}
                          className="bg-accent hover:bg-yellow-400 disabled:opacity-30 disabled:hover:bg-accent text-[#0b1626] font-bold py-3.5 px-8 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg"
                        >
                          {tUI('Next', lang)} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Visit Timeline */}
                  {step === 4 && (
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                        {tUI('Step 4: Visit Timeline', lang)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                        {tUI('Travel Schedule', lang)}
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                        {tUI('When are you planning to travel for your procedure?', lang)}
                      </p>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'Within 1 month', label: tUI('Within 1 month', lang) },
                          { id: '2-3 months', label: tUI('2-3 months', lang) },
                          { id: 'Just researching', label: tUI('Just researching', lang) }
                        ].map(t => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTimeline(t.id)}
                            className={`p-6 rounded-2xl border-2 transition-all text-left flex justify-between items-center group ${
                              timeline === t.id
                                ? 'bg-accent/10 border-accent text-accent shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                                : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                            }`}
                          >
                            <span className="font-bold text-base">{t.label}</span>
                            <ChevronRight size={18} className="text-gray-500 group-hover:text-accent transition-colors" />
                          </button>
                        ))}
                      </div>

                      {/* Forward Action Button */}
                      <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                        <button
                          disabled={!timeline}
                          onClick={() => setStep(5)}
                          className="bg-accent hover:bg-yellow-400 disabled:opacity-30 disabled:hover:bg-accent text-[#0b1626] font-bold py-3.5 px-8 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg"
                        >
                          {tUI('Next', lang)} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Personal Goal */}
                  {step === 5 && (
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                        {tUI('Step 5: Personal Goal', lang)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                        {tUI('Treatment Objective', lang)}
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                        {tUI('What is your primary goal for this treatment?', lang)}
                      </p>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'Health improvement', label: tUI('Health improvement', lang) },
                          { id: 'Aesthetic confidence', label: tUI('Aesthetic confidence', lang) },
                          { id: 'All of the above', label: tUI('All of the above', lang) }
                        ].map(g => (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => setGoal(g.id)}
                            className={`p-6 rounded-2xl border-2 transition-all text-left flex justify-between items-center group ${
                              goal === g.id
                                ? 'bg-accent/10 border-accent text-accent shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                                : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                            }`}
                          >
                            <span className="font-bold text-base">{g.label}</span>
                            <ChevronRight size={18} className="text-gray-500 group-hover:text-accent transition-colors" />
                          </button>
                        ))}
                      </div>

                      {/* Forward Action Button */}
                      <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                        <button
                          disabled={!goal}
                          onClick={triggerClinicalAnalysis}
                          className="bg-accent hover:bg-yellow-400 disabled:opacity-30 disabled:hover:bg-accent text-[#0b1626] font-bold py-3.5 px-8 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg"
                        >
                          {tUI('Analyze Protocols', lang)} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 6: Lead Capture */}
                  {step === 6 && (
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                        {tUI('Step 6: Secure Lead Capture', lang)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                        {tUI('Your Assessment is Staged', lang)}
                      </h3>
                      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                        {tUI('Provide your details to receive your official clinical suitability report.', lang)}
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <input
                              type="text"
                              required
                              placeholder={tUI('Full Name', lang)}
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-sans text-sm font-semibold"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              required
                              placeholder={tUI('Email Address', lang)}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-sans text-sm font-semibold"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex border border-white/10 rounded-xl bg-white/5 focus-within:border-accent transition-all overflow-hidden">
                            <label htmlFor="quiz-country-prefix" className="sr-only">Country Code Prefix</label>
                            <select
                              id="quiz-country-prefix"
                              value={selectedPrefix}
                              onChange={(e) => setSelectedPrefix(e.target.value)}
                              className="w-[90px] bg-transparent outline-none pl-4 pr-2 text-sm font-bold text-gray-300 border-r border-white/10 cursor-pointer"
                            >
                              {countryPrefixes.map(c => (
                                <option key={c.prefix} value={c.prefix} className="bg-[#0b1626] text-white">
                                  {c.prefix} ({c.name})
                                </option>
                              ))}
                            </select>
                            <input
                              type="tel"
                              required
                              placeholder="7xx xxx xxx"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="flex-grow bg-transparent outline-none p-4 text-white font-sans text-sm font-semibold"
                            />
                          </div>
                          <div>
                            <label htmlFor="quiz-country" className="sr-only">{tUI('Select Country', lang)}</label>
                            <select
                              id="quiz-country"
                              required
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-sans text-sm font-semibold cursor-pointer"
                            >
                              <option value="Romania" className="bg-[#0b1626] text-white">{tUI('Romania', lang)}</option>
                              <option value="United Kingdom" className="bg-[#0b1626] text-white">United Kingdom</option>
                              <option value="Germany" className="bg-[#0b1626] text-white">Germany</option>
                              <option value="France" className="bg-[#0b1626] text-white">France</option>
                              <option value="Italy" className="bg-[#0b1626] text-white">Italy</option>
                              <option value="Spain" className="bg-[#0b1626] text-white">Spain</option>
                              <option value="Turkey" className="bg-[#0b1626] text-white">{tUI('Turkey', lang)}</option>
                              <option value="USA/Canada" className="bg-[#0b1626] text-white">USA / Canada</option>
                              <option value="Netherlands" className="bg-[#0b1626] text-white">Netherlands</option>
                              <option value="Belgium" className="bg-[#0b1626] text-white">Belgium</option>
                              <option value="Switzerland" className="bg-[#0b1626] text-white">Switzerland</option>
                            </select>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-accent hover:bg-yellow-400 disabled:opacity-50 text-[#0b1626] font-bold py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 hover:-translate-y-0.5"
                          >
                            {isSubmitting ? (
                              <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                              <>
                                {tUI('Submit My Evaluation', lang)} <Send size={16} />
                              </>
                            )}
                          </button>
                        </div>

                         {/* GDPR / KVKK Badge */}
                        <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest pt-4 border-t border-white/5">
                          <ShieldCheck size={14} className="text-accent" />
                          {tUI('Your data is encrypted and strictly used for medical assessment.', lang)}
                        </div>
                      </form>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
