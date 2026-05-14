import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicSEO from '../components/DynamicSEO';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { CertRow } from '../components/ClinicalBadges';

const Contact = () => {
  const location = useLocation();
  const isEn = location.pathname.includes('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <DynamicSEO 
        title={isEn ? "Contact Us - Meva Clinic" : "Contactați-ne - Meva Clinic"}
        description={isEn ? "Get in touch with Meva Clinic in Istanbul." : "Luați legătura cu Meva Clinic din Istanbul."}
        path={isEn ? "/en/contact" : "/ro/contact"}
        schemaType="ContactPage"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[#8B6914] text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck size={14} aria-hidden="true" />
            {isEn ? "Secure Contact" : "Contact Securizat"}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">
            {isEn ? "Contact Us" : "Contactați-ne"}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {isEn
              ? "Fill out the form and our clinical team will respond within 15 minutes."
              : "Completați formularul și echipa noastră clinică vă va răspunde în 15 minute."}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* LEFT: Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6">

            {/* Info Card */}
            <div className="bg-[#0b1626] text-white rounded-3xl p-8 shadow-2xl space-y-7">
              <h2 className="text-2xl font-serif font-bold">
                {isEn ? "Get in touch" : "Ia legătura cu noi"}
              </h2>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{isEn ? "Location" : "Locație"}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Acibadem Partner Clinic<br />
                    Istanbul, {isEn ? 'Turkey' : 'Turcia'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{isEn ? "Phone / WhatsApp" : "Telefon / WhatsApp"}</p>
                  <a href="tel:+905324675941" className="text-accent font-bold hover:text-yellow-300 transition-colors text-lg" aria-label="+90 532 467 59 41">
                    +90 532 467 59 41
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">Email</p>
                  <a href="mailto:info@mevaclinic.com" className="text-gray-300 hover:text-accent transition-colors text-sm">
                    info@mevaclinic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{isEn ? "Office Hours" : "Program de Lucru"}</p>
                  <p className="text-gray-300 text-sm">
                    {isEn ? "Mon–Sat: 09:00 – 18:00" : "Luni–Sâm: 09:00 – 18:00"}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-56 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <iframe 
                title="Meva Clinic Istanbul Location"
                src="https://maps.google.com/maps?q=Istanbul,Acibadem&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 contact-map-filter"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* RIGHT: Full Contact Form with File Upload */}
          <div className="lg:col-span-3">
            <ContactForm isEn={isEn} />
          </div>

        </div>

        {/* Cert row */}
        <div className="mt-16">
          <CertRow isEn={isEn} />
        </div>

      </div>
    </div>
  );
};

export default Contact;

