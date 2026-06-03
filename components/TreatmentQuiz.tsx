// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronRight, Phone, Mail, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { pushToDataLayer } from '../utils/AnalyticsUtils';

const quizData = {
  hair: {
    titleRo: 'Sunt Candidat la Implant de Păr?',
    titleEn: 'Am I a Hair Transplant Candidate?',
    questions: [
      {
        idRo: 'Câți ani aveți?',
        idEn: 'What is your age?',
        options: [
          { labelRo: '18–25 ani', labelEn: '18–25 years', score: 1 },
          { labelRo: '26–35 ani', labelEn: '26–35 years', score: 3 },
          { labelRo: '36–50 ani', labelEn: '36–50 years', score: 3 },
          { labelRo: 'Peste 50 ani', labelEn: 'Over 50 years', score: 2 }
        ]
      },
      {
        idRo: 'Care este stadiul căderii părului?',
        idEn: 'What is your hair loss stage?',
        options: [
          { labelRo: 'Linie frontală retrasă', labelEn: 'Receding hairline', score: 3 },
          { labelRo: 'Chelie parțială (vertex)', labelEn: 'Partial baldness (crown)', score: 3 },
          { labelRo: 'Chelie avansată', labelEn: 'Advanced baldness', score: 2 },
          { labelRo: 'Chelie totală', labelEn: 'Complete baldness', score: 1 }
        ]
      },
      {
        idRo: 'Aveți afecțiuni cronice?',
        idEn: 'Do you have chronic conditions?',
        options: [
          { labelRo: 'Nu, sunt sănătos', labelEn: 'No, I am healthy', score: 3 },
          { labelRo: 'Diabet controlat', labelEn: 'Controlled diabetes', score: 2 },
          { labelRo: 'Hipertensiune', labelEn: 'Hypertension', score: 2 },
          { labelRo: 'Boli autoimune', labelEn: 'Autoimmune conditions', score: 1 }
        ]
      },
      {
        idRo: 'Densitatea zonei donatoare (ceafă)?',
        idEn: 'Donor area density (back of head)?',
        options: [
          { labelRo: 'Densă, groasă', labelEn: 'Dense, thick', score: 3 },
          { labelRo: 'Medie', labelEn: 'Medium', score: 2 },
          { labelRo: 'Rară', labelEn: 'Sparse', score: 1 },
          { labelRo: 'Nu știu', labelEn: "I don't know", score: 2 }
        ]
      },
      {
        idRo: 'Care este obiectivul tău principal?',
        idEn: 'What is your primary goal?',
        options: [
          { labelRo: 'Linie frontală naturală', labelEn: 'Natural hairline', score: 3 },
          { labelRo: 'Densitate totală', labelEn: 'Full density', score: 3 },
          { labelRo: 'Completare vertex', labelEn: 'Crown coverage', score: 3 },
          { labelRo: 'Primă evaluare', labelEn: 'Initial evaluation only', score: 2 }
        ]
      }
    ]
  },
  bariatric: {
    titleRo: 'Sunt Candidat la Chirurgie Bariatrică?',
    titleEn: 'Am I a Bariatric Surgery Candidate?',
    questions: [
      {
        idRo: 'Care este indicele dumneavoastră de masă corporală (IMC)?',
        idEn: 'What is your Body Mass Index (BMI)?',
        options: [
          { labelRo: 'Sub 30 (supraponderal)', labelEn: 'Under 30 (overweight)', score: 1 },
          { labelRo: '30–35 (obezitate gr. I)', labelEn: '30–35 (Grade I obesity)', score: 2 },
          { labelRo: '35–40 (obezitate gr. II)', labelEn: '35–40 (Grade II obesity)', score: 3 },
          { labelRo: 'Peste 40 (obezitate gr. III)', labelEn: 'Over 40 (Grade III obesity)', score: 3 }
        ]
      },
      {
        idRo: 'Aveți diabet de tip 2?',
        idEn: 'Do you have type 2 diabetes?',
        options: [
          { labelRo: 'Da, insulino-dependent', labelEn: 'Yes, insulin-dependent', score: 3 },
          { labelRo: 'Da, controlat medicamentos', labelEn: 'Yes, medication-controlled', score: 3 },
          { labelRo: 'Pre-diabet', labelEn: 'Pre-diabetes', score: 2 },
          { labelRo: 'Nu', labelEn: 'No', score: 1 }
        ]
      },
      {
        idRo: 'Ați încercat diete/programe de slăbire?',
        idEn: 'Have you tried diets/weight loss programs?',
        options: [
          { labelRo: 'Da, fără succes pe termen lung', labelEn: 'Yes, without long-term success', score: 3 },
          { labelRo: 'Da, cu succes parțial', labelEn: 'Yes, with partial success', score: 2 },
          { labelRo: 'Nu am încercat sistematic', labelEn: 'Not systematically', score: 1 },
          { labelRo: 'Nu doresc dietă, vreau soluție definitivă', labelEn: 'I want a definitive solution', score: 3 }
        ]
      },
      {
        idRo: 'Aveți probleme cardiovasculare?',
        idEn: 'Do you have cardiovascular problems?',
        options: [
          { labelRo: 'Nu', labelEn: 'No', score: 3 },
          { labelRo: 'Hipertensiune controlată', labelEn: 'Controlled hypertension', score: 2 },
          { labelRo: 'Apnee în somn', labelEn: 'Sleep apnea', score: 2 },
          { labelRo: 'Afecțiune cardiacă diagnosticată', labelEn: 'Diagnosed heart condition', score: 1 }
        ]
      },
      {
        idRo: 'Care este vârsta dumneavoastră?',
        idEn: 'What is your age?',
        options: [
          { labelRo: '18–30 ani', labelEn: '18–30 years', score: 3 },
          { labelRo: '31–45 ani', labelEn: '31–45 years', score: 3 },
          { labelRo: '46–60 ani', labelEn: '46–60 years', score: 2 },
          { labelRo: 'Peste 60 ani', labelEn: 'Over 60 years', score: 1 }
        ]
      }
    ]
  },
  dental: {
    titleRo: 'Sunt Candidat la Estetică Dentară?',
    titleEn: 'Am I a Dental Aesthetics Candidate?',
    questions: [
      {
        idRo: 'Care este obiectivul tău principal?',
        idEn: 'What is your primary goal?',
        options: [
          { labelRo: 'Hollywood Smile (fațete/coroane)', labelEn: 'Hollywood Smile (veneers/crowns)', score: 3 },
          { labelRo: 'Implanturi dentare', labelEn: 'Dental implants', score: 3 },
          { labelRo: 'Albire și igienizare', labelEn: 'Whitening & cleaning', score: 2 },
          { labelRo: 'Tratament carii / fațetare parțială', labelEn: 'Decay treatment / partial veneer', score: 2 }
        ]
      },
      {
        idRo: 'Aveți dinți lipsă?',
        idEn: 'Do you have missing teeth?',
        options: [
          { labelRo: 'Da, un singur dinte lipsă', labelEn: 'Yes, one missing tooth', score: 3 },
          { labelRo: 'Da, mai mulți dinți lipsă', labelEn: 'Yes, multiple missing teeth', score: 3 },
          { labelRo: 'Nu, dar am dinți deteriorați/criați', labelEn: 'No, but damaged/decayed teeth', score: 3 },
          { labelRo: 'Nu, doar probleme de culoare/aliniere', labelEn: 'No, only color/alignment issues', score: 2 }
        ]
      },
      {
        idRo: 'Aveți probleme active cu gingiile (parodontoză)?',
        idEn: 'Do you have active gum disease (periodontitis)?',
        options: [
          { labelRo: 'Nu, gingii sănătoase', labelEn: 'No, healthy gums', score: 3 },
          { labelRo: 'Da, formă ușoară (sângerări la periaj)', labelEn: 'Yes, mild (bleeding when brushing)', score: 2 },
          { labelRo: 'Da, formă severă (dinți mobili)', labelEn: 'Yes, severe (mobile teeth)', score: 1 },
          { labelRo: 'Nu știu', labelEn: "I don't know", score: 2 }
        ]
      },
      {
        idRo: 'Fumați?',
        idEn: 'Do you smoke?',
        options: [
          { labelRo: 'Nu funez', labelEn: 'I do not smoke', score: 3 },
          { labelRo: 'Fumez ocazional / Vape', labelEn: 'Occasional smoker / Vape', score: 2 },
          { labelRo: 'Fumez zilnic', labelEn: 'Daily smoker', score: 2 },
          { labelRo: 'Fumător greu (peste 1 pachet/zi)', labelEn: 'Heavy smoker (over 1 pack/day)', score: 1 }
        ]
      },
      {
        idRo: 'Care este vârsta dumneavoastră?',
        idEn: 'What is your age?',
        options: [
          { labelRo: '18–35 ani', labelEn: '18–35 years', score: 3 },
          { labelRo: '36–50 ani', labelEn: '36–50 years', score: 3 },
          { labelRo: '51–65 ani', labelEn: '51–65 years', score: 2 },
          { labelRo: 'Peste 65 ani', labelEn: 'Over 65 years', score: 2 }
        ]
      }
    ]
  },
  plastic: {
    titleRo: 'Sunt Candidat la Chirurgie Plastică?',
    titleEn: 'Am I a Plastic Surgery Candidate?',
    questions: [
      {
        idRo: 'Ce procedură luați în considerare?',
        idEn: 'What procedure are you considering?',
        options: [
          { labelRo: 'Rinoplastie (corecție nas)', labelEn: 'Rhinoplasty (nose correction)', score: 3 },
          { labelRo: 'Facelift / Necklift (lifting facial)', labelEn: 'Facelift / Necklift', score: 3 },
          { labelRo: 'Liposucție Vaser / Remodelare', labelEn: 'Vaser Liposuction / Sculpting', score: 3 },
          { labelRo: 'Estetică mamară (mărire/ridicare)', labelEn: 'Breast aesthetics (implants/lift)', score: 3 }
        ]
      },
      {
        idRo: 'Ați mai avut o operație în aceeași zonă?',
        idEn: 'Have you had surgery in the same area before?',
        options: [
          { labelRo: 'Nu, este prima intervenție', labelEn: 'No, this is my first intervention', score: 3 },
          { labelRo: 'Da, acum mai puțin de un an (revizie necesară)', labelEn: 'Yes, less than a year ago (revision needed)', score: 1 },
          { labelRo: 'Da, acum mai mulți ani', labelEn: 'Yes, several years ago', score: 2 },
          { labelRo: 'Nu, dar am făcut proceduri non-invazive (acid/toxină)', labelEn: 'No, but had non-invasive procedures', score: 3 }
        ]
      },
      {
        idRo: 'Luați medicamente anticoagulante?',
        idEn: 'Do you take blood-thinning medications?',
        options: [
          { labelRo: 'Nu', labelEn: 'No', score: 3 },
          { labelRo: 'Da, pot fi întrerupte la recomandarea medicului', labelEn: 'Yes, can be paused on doctor recommendation', score: 2 },
          { labelRo: 'Da, tratament permanent vital', labelEn: 'Yes, vital permanent treatment', score: 1 },
          { labelRo: 'Nu știu', labelEn: "I don't know", score: 2 }
        ]
      },
      {
        idRo: 'Fumați?',
        idEn: 'Do you smoke?',
        options: [
          { labelRo: 'Nu funez', labelEn: 'I do not smoke', score: 3 },
          { labelRo: 'Fumez ocazional / Vape', labelEn: 'Occasional smoker / Vape', score: 2 },
          { labelRo: 'Fumez zilnic', labelEn: 'Daily smoker', score: 2 },
          { labelRo: 'Fumător greu (peste 1 pachet/zi)', labelEn: 'Heavy smoker (over 1 pack/day)', score: 1 }
        ]
      },
      {
        idRo: 'Care este starea dumneavoastră generală de sănătate?',
        idEn: 'What is your overall health status?',
        options: [
          { labelRo: 'Excelentă, fără boli cronice', labelEn: 'Excellent, no chronic diseases', score: 3 },
          { labelRo: 'Bună, boli cronice controlate', labelEn: 'Good, controlled chronic diseases', score: 2 },
          { labelRo: 'Modestă, necesită investigații complexe', labelEn: 'Fair, requires complex investigations', score: 1 }
        ]
      }
    ]
  }
};

const getResult = (score, lang) => {
  if (score >= 13) return {
    label: tUI("Excellent Candidate", lang),
    color: 'text-green-500',
    bg: 'bg-green-500/10 border-green-500/20',
    msgRo: 'Profilul tău medical corespunde criteriilor ideale pentru această procedură. Recomandăm o evaluare clinică completă.',
    msgEn: 'Your medical profile matches the ideal criteria for this procedure. We recommend a complete clinical evaluation.'
  };
  if (score >= 9) return {
    label: tUI("Good Candidate", lang),
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    msgRo: 'Există indicații favorabile în profilul tău. Câteva investigații suplimentare vor confirma eligibilitatea completă.',
    msgEn: 'There are favorable indications in your profile. A few additional investigations will confirm full eligibility.'
  };
  return {
    label: tUI("Needs Evaluation", lang),
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    msgRo: 'Profilul tău necesită o analiză detaliată de către specialistul nostru înainte de a stabili eligibilitatea.',
    msgEn: 'Your profile requires detailed analysis by our specialist before determining eligibility.'
  };
};

const TreatmentQuiz = () => {
  const pathname = usePathname();
  const lang = (pathname || "/").split('/')[1] || 'en';
  const isEn = lang === 'en';

  const [activeType, setActiveType] = useState(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const reset = () => { 
    setActiveType(null);
    setStep(0); 
    setAnswers([]); 
    setContact({ name: '', phone: '', email: '' }); 
    setSubmitted(false); 
  };

  if (!activeType) {
    return (
      <div className="bg-[#0b1626] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl text-white p-6 md:p-10">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-3">
            {tUI("Clinical Check", lang)}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
            {tUI("Select Area of Interest", lang)}
          </h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            {tUI("Select your treatment area to launch your personalized clinical suitability assessment.", lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            { id: 'hair', labelEn: 'Hair Transplant', labelRo: 'Implant de Păr', descEn: 'Sapphire FUE & DHI candidacy', descRo: 'Evaluare tehnică Safir & DHI' },
            { id: 'bariatric', labelEn: 'Bariatric Surgery', labelRo: 'Chirurgie Bariatrică', descEn: 'Gastric Sleeve & Bypass compatibility', descRo: 'Compatibilitate micșorare stomac' },
            { id: 'dental', labelEn: 'Dental Aesthetics', labelRo: 'Estetică Dentară', descEn: 'Hollywood Smile & Implants fit', descRo: 'Compatibilitate coroane & fațete' },
            { id: 'plastic', labelEn: 'Plastic Surgery', labelRo: 'Chirurgie Plastică', descEn: 'Rhinoplasty & Facelift checks', descRo: 'Evaluare Rinoplastie & Facelift' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveType(item.id)}
              className="flex flex-col text-left p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-accent/10 hover:border-accent transition-all duration-300 group"
            >
              <span className="font-bold text-white text-base group-hover:text-accent transition-colors">
                {lang === 'ro' ? item.labelRo : item.labelEn}
              </span>
              <span className="text-xs text-gray-400 mt-1 font-light group-hover:text-white/80 transition-colors">
                {lang === 'ro' ? item.descRo : item.descEn}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const quiz = quizData[activeType] || quizData.hair;
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore, lang);
  const progress = Math.round(((step) / (quiz.questions.length + 1)) * 100);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone) return;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'treatment_quiz',
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          procedure: activeType,
          bmiScore: activeType === 'bariatric' ? totalScore.toString() : undefined,
          details: `Quiz Result: ${result.label}. Answers score sequence: ${answers.join(', ')}`,
          source: 'TreatmentQuizPage',
        }),
      });
      if (response.ok) {
        pushToDataLayer('generate_lead', { form_location: 'treatment_quiz' });
        pushToDataLayer('form_submission_success', { form_location: 'treatment_quiz' });
        setSubmitted(true);
      } else {
        alert(lang === 'ro' ? 'Eroare la trimiterea răspunsurilor.' : 'Error submitting answers. Please try again.');
      }
    } catch (err) {
      console.error('Quiz submit error:', err);
      alert(lang === 'ro' ? 'Eroare de rețea.' : 'Network error. Please try again.');
    }
  };

  const currentQ = quiz.questions[step];

  return (
    <div className="bg-[#0b1626] rounded-3xl border border-white/10 overflow-hidden shadow-2xl text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-prime to-[#0d1e35] px-6 py-5 border-b border-white/10">
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
          {tUI("Candidacy Assessment", lang)}
        </p>
        <h3 className="text-xl font-serif font-bold">
          {lang === 'ro' ? quiz.titleRo : quiz.titleEn}
        </h3>
        {step <= quiz.questions.length && !submitted && (
          <div className="mt-3">
            <div className="flex justify-between text-[10px] text-gray-400 mb-1">
              <span>{tUI("Step ${step + 1} of ${quiz.questions.length + 1}", lang).replace('${step + 1}', String(step + 1)).replace('${quiz.questions.length + 1}', String(quiz.questions.length + 1))}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Questions */}
        {!submitted && step < quiz.questions.length && (
          <div>
            <p className="font-bold text-lg mb-5 leading-snug">
              {lang === 'ro' ? currentQ.idRo : currentQ.idEn}
            </p>
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.score)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-200 text-sm font-medium flex items-center justify-between group"
                >
                  <span>{lang === 'ro' ? opt.labelRo : opt.labelEn}</span>
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Contact capture */}
        {!submitted && step === quiz.questions.length && (
          <div>
            <div className={`p-4 rounded-2xl border mb-5 ${result.bg}`}>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                {tUI("Your Preliminary Score", lang)}
              </p>
              <p className={`text-2xl font-serif font-bold ${result.color}`}>{result.label}</p>
              <p className="text-sm text-gray-300 mt-1">
                {lang === 'ro' ? result.msgRo : result.msgEn}
              </p>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {tUI("Enter your details to receive your full suitability report and a personalized protocol from our specialists.", lang)}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" required placeholder={tUI("Full Name", lang)}
                value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="tel" required placeholder={tUI("Phone / WhatsApp", lang)}
                value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email" placeholder={tUI("Email (optional)", lang)}
                value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="w-full bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                {tUI("Get My Full Report", lang)} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}

        {/* Success state */}
        {submitted && (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-400" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-serif font-bold mb-2">
              {tUI("Report Sent!", lang)}
            </h4>
            <p className="text-sm text-gray-400 mb-5">
              {tUI("A specialist will contact you within 15 minutes with your personalized evaluation.", lang)}
            </p>
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(tUI("Hello, I just completed the candidacy quiz and want my results.", lang))}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'treatment_quiz_success' })}
              target="_blank" rel="noreferrer"
              className="block w-full bg-[#25D366] hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all text-sm mb-3"
            >
              {tUI("Chat on WhatsApp Now", lang)}
            </a>
            <button onClick={reset} className="text-xs text-gray-500 hover:text-white transition-colors">
              {tUI("Retake quiz", lang)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentQuiz;
