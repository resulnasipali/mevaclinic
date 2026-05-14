import React from 'react';
import { ShieldCheck, Award, CheckCircle, Microscope, HeartPulse, Zap } from 'lucide-react';

// Reusable glassmorphism tech-spec card
export const TechCard = ({ icon: Icon, title, value, sub }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
      <Icon size={18} className="text-accent" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{sub}</p>
      <p className="font-bold text-white text-sm leading-snug">{title}</p>
      {value && <p className="text-xs text-accent font-bold mt-0.5">{value}</p>}
    </div>
  </div>
);

// Certification/Trust row
export const CertRow = ({ isEn }) => (
  <div className="mt-12 pt-8 border-t border-gray-100">
    <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
      {isEn ? 'Accreditations & Certifications' : 'Acreditări & Certificări'}
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {[
        { label: 'JCI Accredited', icon: ShieldCheck, color: 'text-blue-500' },
        { label: 'TÜV Certified', icon: Award, color: 'text-green-500' },
        { label: 'Ministry of Health TR', icon: CheckCircle, color: 'text-prime' },
        { label: 'ISAPS Member', icon: HeartPulse, color: 'text-accent' },
        { label: 'ISO 9001:2015', icon: Microscope, color: 'text-purple-500' },
      ].map((cert, i) => {
        const Icon = cert.icon;
        return (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
            <Icon size={14} className={cert.color} />
            <span className="text-xs font-bold text-gray-600">{cert.label}</span>
          </div>
        );
      })}
    </div>
  </div>
);

// Recovery Timeline component
export const RecoveryTimeline = ({ steps, isEn }) => (
  <div className="my-10 bg-gray-50 rounded-3xl p-8 border border-gray-100">
    <div className="flex items-center gap-2 mb-6">
      <Zap size={16} className="text-accent" />
      <h3 className="font-bold text-prime uppercase tracking-widest text-sm">
        {isEn ? 'Recovery Timeline' : 'Cronologie Recuperare'}
      </h3>
    </div>
    <div className="flex flex-col md:flex-row gap-0">
      {steps.map((s, i) => (
        <div key={i} className="flex md:flex-col items-start md:items-center flex-1 relative">
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-4 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-gray-200 z-0" />
          )}
          <div className="w-8 h-8 rounded-full bg-accent text-[#0b1626] font-black text-xs flex items-center justify-center shrink-0 z-10 shadow-md">
            {i + 1}
          </div>
          <div className="ml-4 md:ml-0 md:mt-3 md:text-center pb-6 md:pb-0 md:px-2">
            <p className="font-bold text-prime text-sm">{s.period}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Clinically Verified 2026 badge
export const VerifiedBadge = ({ isEn }) => (
  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
    <CheckCircle size={13} className="text-green-500" />
    <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
      {isEn ? 'Clinically Verified 2026' : 'Verificat Clinic 2026'}
    </span>
  </div>
);

// Lead magnet box (for facelift etc.)
export const LeadMagnetBox = ({ isEn, pdfLabel, onCapture }) => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const handle = (e) => {
    e.preventDefault();
    console.log('[MEVA PDF LEAD]', { email, guide: pdfLabel });
    setDone(true);
    if (onCapture) onCapture(email);
  };
  return (
    <div className="my-10 bg-gradient-to-br from-[#0b1626] to-[#0d2a4a] rounded-3xl p-8 text-white border border-white/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
          <Award size={22} className="text-accent" />
        </div>
        <div className="flex-grow">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
            {isEn ? 'Free Clinical Resource' : 'Resursă Clinică Gratuită'}
          </p>
          <h4 className="font-bold text-xl font-serif mb-2">{pdfLabel}</h4>
          <p className="text-sm text-gray-400 mb-5">
            {isEn
              ? 'Includes: Clinical recovery timeline, nutritional protocol, and edema management guide — written by our surgical team.'
              : 'Include: Cronologia recuperării clinice, protocolul nutrițional și ghidul de management al edemului — redactat de echipa chirurgicală Meva.'
            }
          </p>
          {!done ? (
            <form onSubmit={handle} className="flex gap-2">
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder={isEn ? 'Your email address' : 'Adresa ta de email'}
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-all">
                {isEn ? 'Download Free' : 'Descarcă Gratuit'}
              </button>
            </form>
          ) : (
            <p className="text-green-400 font-bold text-sm flex items-center gap-2">
              <CheckCircle size={16} /> {isEn ? 'Guide sent to your email!' : 'Ghidul a fost trimis pe email!'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
