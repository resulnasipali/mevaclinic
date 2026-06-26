// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { MessageCircle, Plane, Star, HeartPulse, ArrowRight, Car, Building2, Shield } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';

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
    titleRo: 'Sosire Privată Istanbul',
    titleEn: 'Private Arrival Istanbul',
    descRo: 'Transfer privat aeroport-hotel cu șofer dedicat. Check-in la hotelul partener premium. Coordonatorul dvs. este disponibil 24/7.',
    descEn: 'Private airport-hotel transfer with dedicated driver. Check-in at the premium partner hotel. Your coordinator is available 24/7.',
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
    titleRo: 'Recuperare Premium',
    titleEn: 'Premium Recovery',
    descRo: 'Cameră de spital premium sau hotel partener premium. Mese dietetice adaptate protocolului post-operator. Fizioterapie și îngrijire continuă.',
    descEn: 'Premium hospital room or premium partner hotel. Dietary meals adapted to post-operative protocol. Physiotherapy and continuous care.',
    color: 'from-purple-500 to-purple-700',
    step: '04'
  },
  {
    icon: Shield,
    titleRo: 'Follow-up Pe Viață',
    titleEn: 'Lifetime Follow-up',
    descRo: 'Consultații video bilunare la 1, 3 și 6 luni. Coordonatorul dvs. este mereu disponibil pe WhatsApp. Programul de asistență clinică Meva.',
    descEn: 'Video consultations at 1, 3, and 6 months. Your coordinator is always available on WhatsApp. Meva structured care commitment.',
    color: 'from-green-500 to-green-700',
    step: '05'
  }
];

const vipLogistics = [
  {
    icon: Car,
    titleRo: 'Transfer Privat',
    titleEn: 'Private Transfer',
    descRo: 'Automobil confortabil sau SUV premium, șofer bilingv, așteptare în aeroport cu tăbliță personalizată.',
    descEn: 'Comfortable sedan or premium SUV, bilingual driver, airport greeting with personalized sign.',
    img: '/images/vip-transfer.jpg' // Local image you provided
  },
  {
    icon: Building2,
    titleRo: 'Hotel Partener Premium',
    titleEn: 'Premium Partner Hotel',
    descRo: 'Parteneri: Hilton Istanbul, InterContinental, Conrad Bosphorus. Cameră single premium inclusă în pachet.',
    descEn: 'Partners: Hilton Istanbul, InterContinental, Conrad Bosphorus. Premium single room included in package.',
    img: '/images/hotel.jpg' // Local image you provided
  },
  {
    icon: Shield,
    titleRo: 'Spital Premium',
    titleEn: 'Premium Hospital',
    descRo: 'Intervenții realizate la Liv Hospital, acreditat JCI. Standarde de siguranță la nivel mondial.',
    descEn: 'Interventions performed at Liv Hospital, JCI accredited. World-class safety standards.',
    img: '/images/hospital.webp' // Local image you provided
  }
];

const PatientJourney = ({ lang = 'en' }: { lang?: string }) => {
  const isRo = lang === 'ro';
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-prime/5 border border-prime/10 mb-6">
            <Plane size={16} className="text-accent" />
            <span className="text-[13px] font-medium text-prime tracking-wide">
              {tUI('The Meva Experience', lang)}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-prime mb-6">
            {tUI('Your Journey, ', lang)}<span className="text-accent">{tUI('Step by Step', lang)}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {tUI('From your first message to your full recovery — every detail is managed with precision and luxury by our dedicated team.', lang)
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-4 transition-all duration-300 ${isActive ? 'scale-110 shadow-xl' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'}`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`text-[11px] font-medium tracking-widest mb-2 transition-colors ${isActive ? 'text-accent' : 'text-gray-400'}`}>{s.step}</span>
                <span className={`text-sm font-medium text-center leading-tight transition-colors ${isActive ? 'text-prime' : 'text-gray-500 group-hover:text-prime'}`}>
                  {tUI(s.titleEn, lang)}
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
                  <span className="text-[11px] font-medium text-accent tracking-widest block mb-2">{s.step}</span>
                  <h3 className="text-2xl font-serif font-medium text-prime mb-3">{tUI(s.titleEn, lang)}</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-2xl text-lg">{tUI(s.descEn, lang)}</p>
                  {activeStep < steps.length - 1 && (
                    <button onClick={() => setActiveStep(activeStep + 1)} className="mt-6 flex items-center gap-2 text-[13px] font-medium text-prime hover:text-accent transition-colors">
                      {tUI('Next step', lang)} <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-5 mb-16">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-accent tracking-widest block mb-2">{s.step}</span>
                  <h4 className="font-medium text-prime text-lg">{tUI(s.titleEn, lang)}</h4>
                  <p className="text-[15px] text-gray-500 mt-2 leading-relaxed font-light">{tUI(s.descEn, lang)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Logistics Section */}
        <div className="bg-[#0b1626] rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-10 pt-10 pb-6">
            <p className="text-[11px] font-medium text-accent tracking-widest mb-3">
              {tUI('Private Logistics', lang)}
            </p>
            <h3 className="text-3xl font-serif font-medium text-white">
              {tUI('Comfort from the moment you land.', lang)}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {vipLogistics.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative overflow-hidden group h-48">
                  <Image
                    src={item.img}
                    alt={tUI(item.titleEn, lang)}
                    aria-label={tUI(item.titleEn, lang)}
                    fill={true}
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={18} className="text-accent" />
                      <span className="text-[12px] font-medium text-accent tracking-widest">
                        {tUI(item.titleEn, lang)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {tUI(item.descEn, lang)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-8 py-6 text-center">
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(tUI('Hello, I want to know more about the premium treatment coordination plan.', lang))}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'patient_journey_vip' })}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-yellow-400 text-[#0b1626] font-medium py-4 px-10 rounded-full transition-all shadow-lg text-[13px]"
            >
              {tUI('Request Coordination Details', lang)} <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
