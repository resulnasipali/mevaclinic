import React, { useEffect } from 'react';
import { Plane, MapPin, Users, ShieldCheck, PhoneCall, ArrowRight, Star } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const RomaniaSpecial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flights = [
    { city: 'București (OTP)', time: '1h 15m', airline: 'TAROM / Turkish Airlines' },
    { city: 'Cluj-Napoca (CLJ)', time: '1h 45m', airline: 'Turkish Airlines / Charter' },
    { city: 'Iași (IAS)', time: '1h 30m', airline: 'TAROM / Turkish Airlines' }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <DynamicSEO 
        title="Meva Clinic: Centrul de Excelență pentru Pacienții din România"
        description="Pachete VIP medicale în Istanbul special create pentru pacienții din România. Traducător dedicat, zboruri scurte și expertiză JCI."
        path="/ro/romani-istanbul"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
             🇷🇴 Istanbul - Destinația Nr. 1 pentru Pacienții Români
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 leading-[1.1]">
            Podul Medical <span className="text-accent">România-Istanbul</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Meva Clinic oferă o experiență all-inclusive fără bariere lingvistice. Suntem partenerul tău de încredere pentru chirurgie de top în Turcia.
          </p>
        </div>

        {/* Flight & Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-prime mb-8 flex items-center gap-3">
              <Plane className="text-accent" /> Zboruri Directe & Logistică
            </h2>
            <div className="space-y-4">
              {flights.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div>
                    <p className="font-bold text-prime">{f.city}</p>
                    <p className="text-xs text-gray-400">{f.airline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-bold">{f.time}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Durată Zbor</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 italic">
              *Echipa noastră preia pacientul direct de la poarta de sosiri a Aeroportului Istanbul (IST).
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
               <img src="https://images.unsplash.com/photo-1541432901042-2dad30b370d9?auto=format&fit=crop&q=80&w=1000" alt="Istanbul Medical Tourism" aria-label="Istanbul Medical Tourism" width="1000" height="1000" loading="eager" fetchpriority="high" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-prime text-white p-6 rounded-2xl shadow-xl max-w-xs">
               <Star className="text-accent mb-2" fill="currentColor" />
               <p className="font-bold text-lg mb-1">98% Satisfacție</p>
               <p className="text-xs text-gray-400">Peste 2500 de pacienți români tratați cu succes în ultimii 3 ani.</p>
            </div>
          </div>
        </div>

        {/* Romanian Support Team */}
        <div className="bg-[#0b1626] text-white rounded-[3rem] p-12 md:p-20 mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
           <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Echipă dedicată vorbitoare de limba Română</h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Uită de grija traducerii. La Meva Clinic, vei fi asistat de la prima consultație online până la externare de un coordonator medical român. Consultul cu medicii specialiști turci este tradus simultan pentru a asigura o comunicare perfectă.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Users className="text-accent" /></div>
                    <span className="font-bold">Traducător 24/7 Inclus</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><PhoneCall className="text-accent" /></div>
                    <span className="font-bold">Asistență Post-Operatorie RO</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Why Meva for Romanians */}
        <div className="text-center mb-24">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12">De ce aleg românii Meva Clinic?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Prețuri Competitive', desc: 'Costuri cu până la 50% mai mici decât în clinicile private din București sau Cluj.', icon: <ArrowRight className="text-accent" /> },
                { title: 'Standarde JCI', desc: 'Acreditare internațională de aur pe care puține spitale din România o dețin.', icon: <ShieldCheck className="text-accent" /> },
                { title: 'Tehnologie 2026', desc: 'Acces la sisteme robotice Da Vinci și CyberKnife S7 indisponibile regional.', icon: <MapPin className="text-accent" /> }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
                   <div className="mb-6 flex justify-center">{item.icon}</div>
                   <h3 className="text-xl font-bold text-prime mb-4">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="text-center">
           <a 
             href="https://wa.me/905324675941" 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'romania_special_cta' })}
             className="bg-prime text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:bg-[#0f1f38] transition-all inline-flex items-center gap-4"
           >
              Vreau o consultație gratuită în Română <ArrowRight />
           </a>
        </div>
      </div>
    </div>
  );
};

export default RomaniaSpecial;
