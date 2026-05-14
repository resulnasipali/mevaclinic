import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, Plane, Star, HeartPulse, ArrowRight, Car, Building2, Shield } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const steps = [
  {
    icon: MessageCircle,
    titleRo: 'Consultație Online',
    titleEn: 'Online Consultation',
    descRo: 'Trimiteți dosarul medical. Chirurgul specialist analizează cazul dvs. și răspunde în 24h cu un plan personalizat.',
    descEn: 'Submit your medical file. The specialist surgeon analyzes your case and responds within 24h with a personalized plan.',
    color: 'from-blue-500 to-blue-600',
    step: '01'
  },
  {
    icon: Plane,
    titleRo: 'Sosire VIP Istanbul',
    titleEn: 'VIP Arrival Istanbul',
    descRo: 'Transfer privat aeroport-hotel cu șofer dedicat. Check-in la hotelul partener de 5 stele. Coordonatorul dvs. este disponibil 24/7.',
    descEn: 'Private airport-hotel transfer with dedicated driver. Check-in at the 5-star partner hotel. Your coordinator is available 24/7.',
    color: 'from-accent to-yellow-400',
    step: '02'
  },
  {
    icon: HeartPulse,
    titleRo: 'Excelență Clinică',
    titleEn: 'Clinical Excellence',
    descRo: 'Investigații preoperatorii complete în spitalul JCI. Intervenția chirurgicală cu protocoale WHO. Monitorizare 24/7 post-operator.',
    descEn: 'Complete pre-operative workup in JCI hospital. Surgical intervention with WHO protocols. 24/7 post-operative monitoring.',
    color: 'from-prime to-[#0d2a4a]',
    step: '03'
  },
  {
    icon: Star,
    titleRo: 'Recuperare 5 Stele',
    titleEn: '5-Star Recovery',
    descRo: 'Cameră de spital premium sau hotel 5 stele. Mese dietetice adaptate protocolului post-operator. Fizioterapie și îngrijire continuă.',
    descEn: 'Premium hospital room or 5-star hotel. Dietary meals adapted to post-operative protocol. Physiotherapy and continuous care.',
    color: 'from-purple-500 to-purple-700',
    step: '04'
  },
  {
    icon: Shield,
    titleRo: 'Follow-up Pe Viață',
    titleEn: 'Lifetime Follow-up',
    descRo: 'Consultații video bilunare la 1, 3 și 6 luni. Coordonatorul dvs. este mereu disponibil pe WhatsApp. Garanția rezultatelor Meva.',
    descEn: 'Video consultations at 1, 3, and 6 months. Your coordinator is always available on WhatsApp. Meva results guarantee.',
    color: 'from-green-500 to-green-700',
    step: '05'
  }
];

const vipLogistics = [
  {
    icon: Car,
    titleRo: 'Transfer VIP',
    titleEn: 'VIP Transfer',
    descRo: 'Mercedes S-Class sau SUV premium, șofer bilingv, așteptare în aeroport cu tăbliță personalizată.',
    descEn: 'Mercedes S-Class or premium SUV, bilingual driver, airport greeting with personalized sign.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: Building2,
    titleRo: 'Hotel 5 Stele',
    titleEn: '5-Star Hotel',
    descRo: 'Parteneri: Hilton Istanbul, InterContinental, Conrad Bosphorus. Camera single VIP inclusă în pachet.',
    descEn: 'Partners: Hilton Istanbul, InterContinental, Conrad Bosphorus. VIP single room included in package.',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop'
  }
];

const PatientJourney = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-prime/5 border border-prime/10 mb-4">
            <Plane size={14} className="text-accent" />
            <span className="text-xs font-bold text-prime uppercase tracking-widest">
              {isEn ? 'The Meva Experience' : 'Experiența Meva'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">
            {isEn ? 'Your Journey, ' : 'Călătoria Ta, '}<span className="text-accent">{isEn ? 'Step by Step' : 'Pas cu Pas'}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans">
            {isEn
              ? 'From your first message to your full recovery — every detail is managed with precision and luxury by our dedicated team.'
              : 'De la primul mesaj până la recuperarea completă — fiecare detaliu este gestionat cu precizie și lux de echipa noastră dedicată.'
            }
          </p>
        </div>

        {/* Timeline — desktop horizontal */}
        <div className="hidden lg:flex items-start justify-between relative mb-16">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = activeStep === i;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex flex-col items-center relative z-10 group flex-1"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-3 transition-all duration-300 ${isActive ? 'scale-110 shadow-xl' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'}`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest mb-1 transition-colors ${isActive ? 'text-accent' : 'text-gray-400'}`}>{s.step}</span>
                <span className={`text-sm font-bold text-center leading-tight transition-colors ${isActive ? 'text-prime' : 'text-gray-500 group-hover:text-prime'}`}>
                  {isEn ? s.titleEn : s.titleRo}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active step detail */}
        <div className="hidden lg:block bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-16 transition-all duration-500">
          {(() => {
            const s = steps[activeStep];
            const Icon = s.icon;
            return (
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg shrink-0`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.step}</span>
                  <h3 className="text-2xl font-serif font-bold text-prime mb-2">{isEn ? s.titleEn : s.titleRo}</h3>
                  <p className="text-gray-500 font-sans leading-relaxed max-w-2xl">{isEn ? s.descEn : s.descRo}</p>
                  {activeStep < steps.length - 1 && (
                    <button onClick={() => setActiveStep(activeStep + 1)} className="mt-4 flex items-center gap-2 text-sm font-bold text-prime hover:text-accent transition-colors">
                      {isEn ? 'Next step' : 'Pasul următor'} <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-4 mb-16">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{s.step}</span>
                  <h4 className="font-bold text-prime text-base">{isEn ? s.titleEn : s.titleRo}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{isEn ? s.descEn : s.descRo}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Logistics Section */}
        <div className="bg-[#0b1626] rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-8 pt-8 pb-4">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
              {isEn ? 'VIP Logistics' : 'Logistică VIP'}
            </p>
            <h3 className="text-2xl font-serif font-bold text-white">
              {isEn ? 'Comfort from the moment you land.' : 'Confort din momentul aterizării.'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {vipLogistics.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative overflow-hidden group">
                  <img
                    src={item.img}
                    alt={isEn ? item.titleEn : item.titleRo}
                    aria-label={isEn ? item.titleEn : item.titleRo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">
                        {isEn ? item.titleEn : item.titleRo}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">
                      {isEn ? item.descEn : item.descRo}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-8 py-6 text-center">
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'Hello, I want to know more about the VIP all-inclusive package.' : 'Buna ziua, doresc informatii despre pachetul VIP all-inclusive.')}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'patient_journey_vip' })}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold py-3 px-8 rounded-xl transition-all shadow-lg text-sm"
            >
              {isEn ? 'Request VIP Package Details' : 'Solicită Detalii Pachet VIP'} <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
