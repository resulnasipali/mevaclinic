'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') || false;
  const whatsappNumber = isEn ? '905366511599' : '905324675941';
  const phoneNumber = isEn ? '+905366511599' : '+905324675941';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl p-6 mb-4 w-[320px] border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-[#0b1626] font-serif text-xl">{isEn ? 'Instant Price Quote' : 'Ofertă de Preț Instantă'}</h3>
                <p className="text-gray-500 text-sm mt-1">{isEn ? 'Our medical experts reply in 2 mins.' : 'Experții noștri răspund în 2 minute.'}</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 bg-gray-50 p-1 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-[#25D366] text-white p-4 rounded-2xl hover:bg-[#1ebd5a] transition-colors mb-3 font-bold shadow-md shadow-[#25D366]/20"
            >
              <MessageCircle size={24} />
              {isEn ? 'Chat on WhatsApp' : 'Discută pe WhatsApp'}
            </a>
            
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 w-full bg-[#0b1626] text-white p-4 rounded-2xl hover:bg-[#12233b] transition-colors font-bold shadow-md shadow-[#0b1626]/20"
            >
              <Phone size={20} />
              {isEn ? 'Request a Callback' : 'Solicitați Apel'}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/40 relative"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping bg-amber-500/50"></span>
        )}
        <MessageCircle size={32} className="relative z-10" />
      </motion.button>
    </div>
  );
}
