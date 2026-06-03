'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CertRow } from '@/components/ClinicalBadges';
import ContactForm from '@/components/ContactForm';
import { tUI } from '@/utils/uiTranslations';

interface ContactClientProps {
  lang: string;
}

export default function ContactClient({ lang }: ContactClientProps) {
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="text-left mb-8">
            <Link 
              href={`/${lang}`} 
              className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-600 transition-colors"
            >
              <ArrowLeft size={16} /> {tUI("Return to Home Page", lang)}
            </Link>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <ShieldCheck size={14} aria-hidden="true" />
            {tUI("Secure Contact", lang)}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#0b1626] mb-4"
          >
            {tUI("Contact Us", lang)}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-1 bg-amber-500 mx-auto rounded-full origin-center"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto"
          >
            {tUI("Fill out the form and our clinical team will respond within 15 minutes.", lang)}
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* LEFT: Contact Info + Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Card */}
            <div className="bg-[#0b1626] text-white rounded-3xl p-8 shadow-2xl space-y-7 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-colors duration-500" />
              <h2 className="text-2xl font-serif font-bold relative z-10">
                {tUI("Get in touch", lang)}
              </h2>

              <div className="flex items-start gap-5 relative z-10 group/item">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{tUI("Location", lang)}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tUI("Altunizade, Uskudar, Istanbul, Turkey", lang)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 relative z-10 group/item">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{tUI("Phone / WhatsApp", lang)}</p>
                  <a href="tel:+905324675941" className="text-amber-500 font-bold hover:text-amber-400 transition-colors text-lg" aria-label="+90 532 467 59 41">
                    +90 532 467 59 41
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 relative z-10 group/item">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">Email</p>
                  <a href="mailto:info@mevaclinic.com" className="text-gray-300 hover:text-amber-500 transition-colors text-sm">
                    info@mevaclinic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 relative z-10 group/item">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{tUI("Office Hours", lang)}</p>
                  <p className="text-gray-300 text-sm">
                    {tUI("Mon–Sat: 09:00 – 18:00", lang)}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-56 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <iframe 
                title="Meva Clinic Istanbul Location"
                src="https://maps.google.com/maps?q=Altunizade,Uskudar,Istanbul,Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT: Full Contact Form with File Upload */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ContactForm isEn={isEn} />
          </motion.div>
        </div>

        {/* Cert row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <CertRow isEn={isEn} />
        </motion.div>

      </div>
    </div>
  );
}
