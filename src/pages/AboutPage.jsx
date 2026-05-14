import React, { useEffect } from 'react';
import { ShieldCheck, Award, Users, HeartPulse, GraduationCap, Microscope, CheckCircle2, ChevronRight, Globe } from 'lucide-react';
import { CertRow } from '../components/ClinicalBadges';
import DynamicSEO from '../components/DynamicSEO';

const AboutPage = () => {
  const isEn = window.location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-0 overflow-hidden">
      <DynamicSEO 
        title={isEn ? "About Meva Clinic | Excellence in International Healthcare" : "Despre Meva Clinic | Excelență în Sănătate Internațională"}
        description={isEn ? "Discover the mission and medical leadership of Meva Clinic. JCI-accredited excellence in Istanbul." : "Descoperă misiunea și conducerea medicală Meva Clinic. Excelență acreditată JCI în Istanbul."}
        path={isEn ? "/en/about-us" : "/ro/despre-noi"}
      />

      {/* 1. THE MISSION (Elite Excellence) */}
      <section className="relative py-24 md:py-32 bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-[0.3em] uppercase mb-8">
            <ShieldCheck size={16} />
            <span>{isEn ? "Institutional Authority" : "Autoritate Instituțională"}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
            {isEn ? "Beyond Surgery: A Commitment to Medical Excellence" : "Dincolo de Chirurgie: Un Angajament pentru Excelență Medicală"}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans leading-relaxed">
            {isEn 
              ? "At Meva Clinic, we believe that world-class healthcare is a fusion of advanced surgical engineering and deeply personalized patient care. Our mission is to bridge the gap between scientific innovation and human empathy." 
              : "La Meva Clinic, credem că sănătatea de talie mondială este o fuziune între ingineria chirurgicală avansată și îngrijirea profund personalizată a pacientului. Misiunea noastră este să eliminăm decalajul dintre inovația științifică și empatia umană."}
          </p>
        </div>
      </section>

      {/* 2. MEDICAL LEADERSHIP (The Core) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="bg-gray-100 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Harun Alakaya Chief Medical Officer Istanbul"
                  aria-label="Dr. Harun Alakaya Chief Medical Officer Istanbul"
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-prime to-transparent text-white">
                   <h3 className="text-3xl font-serif font-bold">Dr. Harun Alakaya, MD</h3>
                   <p className="text-accent font-bold uppercase tracking-widest text-sm">{isEn ? "Chief Medical Officer" : "Director Medical"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-prime">
                <GraduationCap size={24} className="text-accent" />
                <h4 className="text-xl font-serif font-bold italic">{isEn ? "Medical Philosophy" : "Filozofia Medicală"}</h4>
              </div>
              <h2 className="text-4xl font-serif font-bold text-prime">
                {isEn ? "Leading with Precision & Academic Rigor" : "Conducem prin Precizie și Rigoare Academică"}
              </h2>
              <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "Dr. Harun Alakaya stands at the forefront of modern hair transplantation and surgical aesthetics. With over 15 years of clinical experience, his approach is defined by an uncompromising focus on sub-millimetric precision and biological integration." 
                    : "Dr. Harun Alakaya se află în prima linie a transplantului de păr modern și a esteticii chirurgicale. Cu peste 15 ani de experiență clinică, abordarea sa este definită de un accent fără compromisuri pe precizia sub-milimetrică și integrarea biologică."}
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent">
                   <p className="italic font-medium text-prime">
                      {isEn 
                        ? '"True surgical excellence isn’t just about the procedure; it’s about the mathematical predictability of the outcome and the patient’s long-term quality of life."' 
                        : '"Adevărata excelență chirurgicală nu se rezumă doar la procedură; este vorba despre predictibilitatea matematică a rezultatului și calitatea vieții pe termen lung a pacientului."'}
                   </p>
                </div>
                <p>
                  {isEn 
                    ? "Our Multidisciplinary Board brings together top specialists in Oncology, Bariatric Surgery, and Aesthetics to ensure that every patient receives a 360-degree clinical evaluation before any intervention." 
                    : "Consiliul nostru Multidisciplinar reunește specialiști de top în Oncologie, Chirurgie Bariatrică și Estetică pentru a asigura că fiecare pacient primește o evaluare clinică la 360 de grade înainte de orice intervenție."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCREDITATION & SAFETY (The Trust) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-prime mb-4">{isEn ? "Clinical Standards & Patient Safety" : "Standarde Clinice și Siguranța Pacientului"}</h2>
            <p className="text-gray-500 font-sans max-w-2xl mx-auto">{isEn ? "Meva Clinic operates exclusively within JCI-accredited facilities that meet the highest European medical protocols." : "Meva Clinic operează exclusiv în facilități acreditate JCI care respectă cele mai înalte protocoale medicale europene."}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-prime/5 flex items-center justify-center text-prime mb-6 group-hover:bg-prime group-hover:text-white transition-all">
                  <Microscope size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime mb-3">{isEn ? "JCI Accredited Facility" : "Facilitate Acreditată JCI"}</h4>
               <p className="text-sm text-gray-500 leading-relaxed">{isEn ? "Global gold standard for clinical quality and patient safety management." : "Standardul de aur global pentru calitatea clinică și managementul siguranței pacienților."}</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-prime/5 flex items-center justify-center text-prime mb-6 group-hover:bg-prime group-hover:text-white transition-all">
                  <Activity size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime mb-3">{isEn ? "24/7 Medical Monitoring" : "Monitorizare Medicală 24/7"}</h4>
               <p className="text-sm text-gray-500 leading-relaxed">{isEn ? "Post-operative care handled by specialized clinical staff around the clock." : "Îngrijire post-operatorie gestionată non-stop de personal clinic specializat."}</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-prime/5 flex items-center justify-center text-prime mb-6 group-hover:bg-prime group-hover:text-white transition-all">
                  <Users size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime mb-3">{isEn ? "Global Patient Rights" : "Drepturile Globale ale Pacienților"}</h4>
               <p className="text-sm text-gray-500 leading-relaxed">{isEn ? "Strict adherence to international medical ethics and transparency." : "Aderarea strictă la etica medicală internațională și transparență."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CONSULTANCY EDGE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1626] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
               <Globe className="w-full h-full scale-150 animate-pulse" />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                {isEn ? "The Meva Consultancy Advantage" : "Avantajul Consultanței Meva"}
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "We don't just organize surgeries; we manage lives. Our Medical Consultants serve as the professional bridge between Bucharest, London, and Istanbul." 
                    : "Nu organizăm doar intervenții chirurgicale; gestionăm vieți. Consultanții noștri medicali servesc ca punte profesională între București, Londra și Istanbul."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                   <div className="flex gap-4">
                      <CheckCircle2 size={24} className="text-accent shrink-0" />
                      <div>
                         <h5 className="font-bold text-white mb-1">{isEn ? "Local Coordination" : "Coordonare Locală"}</h5>
                         <p className="text-sm text-gray-400">{isEn ? "Face-to-face assistance in your native language." : "Asistență față în față în limba ta maternă."}</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <CheckCircle2 size={24} className="text-accent shrink-0" />
                      <div>
                         <h5 className="font-bold text-white mb-1">{isEn ? "24/7 Clinical Support" : "Suport Clinic 24/7"}</h5>
                         <p className="text-sm text-gray-400">{isEn ? "Immediate connection with our Istanbul medical board." : "Conexiune imediată cu consiliul medical din Istanbul."}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-10">
             {isEn ? "Ready to start your premium medical journey?" : "Ești gata să începi călătoria ta medicală premium?"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
               onClick={() => window.location.href = isEn ? '/en#stats' : '/ro#stats'}
               className="bg-accent text-prime font-bold py-5 px-10 rounded-2xl shadow-xl hover:bg-prime hover:text-white transition-all flex items-center justify-center gap-3"
            >
               {isEn ? "View Our Clinical Outcomes" : "Vezi Rezultatele Noastre Clinice"}
               <ChevronRight size={20} />
            </button>
            <button 
               onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
               className="border-2 border-prime text-prime font-bold py-5 px-10 rounded-2xl hover:bg-prime hover:text-white transition-all"
            >
               {isEn ? "Meet the Doctors" : "Cunoaște Medicii"}
            </button>
          </div>
        </div>
        <div className="mt-24">
           <CertRow isEn={isEn} />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
