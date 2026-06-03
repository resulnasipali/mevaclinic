'use client';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { tUI } from '@/utils/uiTranslations';

type VideoTestimonialsProps = {
  isEn: boolean;
};

export default function VideoTestimonials({ isEn, lang = 'en' }: VideoTestimonialsProps & { lang?: string }) {
  // Using some mock data for luxury testimonials
  const videos = [
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      title: tUI("My VIP Journey to Istanbul", lang),
      name: "Sarah Jenkins, UK"
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      title: tUI("Life-changing Experience", lang),
      name: "David Miller, USA"
    },
    {
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      title: tUI("5-Star Medical Care", lang),
      name: "Elena Popa, RO"
    }
  ];

  return (
    <div className="w-full my-16 bg-[#0b1626] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              {tUI("Patient Stories", lang)}
            </h2>
            <p className="text-white/70 max-w-xl text-lg">
              {tUI("Watch the inspiring journeys of our patients who chose Meva Clinic for their transformation.", lang)}
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors">
            {tUI("View All Videos", lang)} →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-800 mb-4">
                <img 
                  src={vid.img} 
                  alt={vid.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Play className="text-white fill-white ml-1" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500 transition-colors">{vid.title}</h3>
              <p className="text-white/50 text-sm">{vid.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
