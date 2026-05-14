import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronRight, Phone, Mail, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
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
  }
};

const getResult = (score, isEn) => {
  if (score >= 13) return {
    label: isEn ? 'Excellent Candidate' : 'Candidat Excelent',
    color: 'text-green-500',
    bg: 'bg-green-500/10 border-green-500/20',
    msgRo: 'Profilul tău medical corespunde criteriilor ideale pentru această procedură. Recomandăm o evaluare clinică completă.',
    msgEn: 'Your medical profile matches the ideal criteria for this procedure. We recommend a complete clinical evaluation.'
  };
  if (score >= 9) return {
    label: isEn ? 'Good Candidate' : 'Candidat Bun',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    msgRo: 'Există indicații favorabile în profilul tău. Câteva investigații suplimentare vor confirma eligibilitatea completă.',
    msgEn: 'There are favorable indications in your profile. A few additional investigations will confirm full eligibility.'
  };
  return {
    label: isEn ? 'Needs Evaluation' : 'Necesită Evaluare',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    msgRo: 'Profilul tău necesită o analiză detaliată de către specialistul nostru înainte de a stabili eligibilitatea.',
    msgEn: 'Your profile requires detailed analysis by our specialist before determining eligibility.'
  };
};

const TreatmentQuiz = ({ type = 'hair' }) => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const quiz = quizData[type] || quizData.hair;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore, isEn);
  const progress = Math.round(((step) / (quiz.questions.length + 1)) * 100);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type,
      score: totalScore,
      result: result.label,
      answers,
      contact,
      timestamp: new Date().toISOString()
    };
    console.log('[MEVA CRM LEAD]', payload);
    pushToDataLayer('generate_lead', { form_location: 'treatment_quiz' });
    pushToDataLayer('form_submission_success', { form_location: 'treatment_quiz' });
    setSubmitted(true);
  };

  const reset = () => { setStep(0); setAnswers([]); setContact({ name: '', phone: '', email: '' }); setSubmitted(false); };

  const currentQ = quiz.questions[step];

  return (
    <div className="bg-[#0b1626] rounded-3xl border border-white/10 overflow-hidden shadow-2xl text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-prime to-[#0d1e35] px-6 py-5 border-b border-white/10">
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
          {isEn ? 'Candidacy Assessment' : 'Evaluare Candidatură'}
        </p>
        <h3 className="text-xl font-serif font-bold">{isEn ? quiz.titleEn : quiz.titleRo}</h3>
        {step <= quiz.questions.length && !submitted && (
          <div className="mt-3">
            <div className="flex justify-between text-[10px] text-gray-400 mb-1">
              <span>{isEn ? `Step ${step + 1} of ${quiz.questions.length + 1}` : `Pasul ${step + 1} din ${quiz.questions.length + 1}`}</span>
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
              {isEn ? currentQ.idEn : currentQ.idRo}
            </p>
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.score)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-200 text-sm font-medium flex items-center justify-between group"
                >
                  <span>{isEn ? opt.labelEn : opt.labelRo}</span>
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
                {isEn ? 'Your Preliminary Score' : 'Scorul Tău Preliminar'}
              </p>
              <p className={`text-2xl font-serif font-bold ${result.color}`}>{result.label}</p>
              <p className="text-sm text-gray-300 mt-1">{isEn ? result.msgEn : result.msgRo}</p>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {isEn
                ? 'Enter your details to receive your full suitability report and a personalized protocol from our specialists.'
                : 'Introduceți datele pentru a primi raportul complet de eligibilitate și un protocol personalizat de la specialiștii noștri.'
              }
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" required placeholder={isEn ? 'Full Name' : 'Nume Complet'}
                value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="tel" required placeholder={isEn ? 'Phone / WhatsApp' : 'Telefon / WhatsApp'}
                value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email" placeholder={isEn ? 'Email (optional)' : 'Email (opțional)'}
                value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="w-full bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                {isEn ? 'Get My Full Report' : 'Primește Raportul Complet'} <ArrowRight size={16} />
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
              {isEn ? 'Report Sent!' : 'Raport Trimis!'}
            </h4>
            <p className="text-sm text-gray-400 mb-5">
              {isEn
                ? 'A specialist will contact you within 15 minutes with your personalized evaluation.'
                : 'Un specialist vă va contacta în 15 minute cu evaluarea personalizată.'
              }
            </p>
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'Hello, I just completed the candidacy quiz and want my results.' : 'Buna ziua, am completat chestionarul de candidatura si doresc rezultatele.')}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'treatment_quiz_success' })}
              target="_blank" rel="noreferrer"
              className="block w-full bg-[#25D366] hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all text-sm mb-3"
            >
              {isEn ? 'Chat on WhatsApp Now' : 'Vorbește pe WhatsApp Acum'}
            </a>
            <button onClick={reset} className="text-xs text-gray-500 hover:text-white transition-colors">
              {isEn ? 'Retake quiz' : 'Reia chestionarul'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentQuiz;
