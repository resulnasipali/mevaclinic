// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';
import { motion } from 'framer-motion';
import { Plane, Hotel, Stethoscope, Star } from 'lucide-react';

export default function PatientJourney({ lang }: { lang: string }) {
  const steps = [
    {
      icon: <Plane size={32} />,
      title: tUI("VIP Airport Transfer", lang),
      desc: tUI("Step off the plane into a luxury Mercedes Vito. No stress, no waiting.", lang),
      img: "/images/vip-transfer.jpeg"
    },
    {
      icon: <Hotel size={32} />,
      title: tUI("5-Star Accommodation", lang),
      desc: tUI("Relax in a premium hotel suite chosen specifically for your comfort and recovery.", lang),
      img: "/images/hotel.jpg"
    },
    {
      icon: <Stethoscope size={32} />,
      title: tUI("World-Class Procedure", lang),
      desc: tUI("Experience S-Tier medical care in our internationally accredited facilities.", lang),
      img: "/images/hospital.webp"
    },
    {
      icon: <Star size={32} />,
      title: tUI("Tourism & Return", lang),
      desc: tUI("Enjoy the beauty of Istanbul before returning home completely transformed.", lang),
      img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b1626] mb-6">
            {tUI("The VIP Patient Journey", lang)}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {tUI("We handle every detail of your trip so you can focus entirely on your transformation.", lang)}
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-500 mb-6 shadow-sm border border-amber-100 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b1626] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                </motion.div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-amber-500 rounded-full z-10 items-center justify-center">
                  <div className="w-2 h-2 bg-[#0b1626] rounded-full" />
                </div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                    <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0b1626]/10" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
