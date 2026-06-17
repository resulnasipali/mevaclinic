'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') || false;
  const whatsappNumber = isEn ? '905366511599' : '905324675941';

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('meva_exit_popup');
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenPopup && !show) {
        setShow(true);
        sessionStorage.setItem('meva_exit_popup', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0b1626]/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-[2rem] w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl relative"
        >
          <button 
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 text-gray-800 p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X size={24} />
          </button>

          {/* Image Side */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
              alt="Luxury Clinic"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-amber-500 font-serif font-bold text-4xl mb-2">10% OFF</div>
              <p className="text-white font-medium text-lg">
                {isEn ? 'Your Complete VIP Treatment Package' : 'Pachetul Dvs. VIP de Tratament'}
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-[#0b1626] mb-4">
              {isEn ? "Wait! Don't leave your new smile behind." : "Așteptați! Nu plecați fără noul zâmbet."}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {isEn 
                ? 'Get a free, no-obligation medical consultation with our head surgeon right now and claim your exclusive 10% discount on the entire VIP package.'
                : 'Obțineți o consultație medicală gratuită, fără obligații, cu chirurgul nostru principal chiar acum și revendicați reducerea exclusivă de 10%.'}
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
                <span>{isEn ? 'Free 3D Treatment Plan' : 'Plan de Tratament 3D Gratuit'}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
                <span>{isEn ? 'Direct Surgeon Access' : 'Acces Direct la Chirurg'}</span>
              </li>
            </ul>

            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              className="w-full bg-amber-500 text-white font-bold text-lg py-4 rounded-xl text-center shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1"
            >
              {isEn ? 'Claim My 10% Discount' : 'Revendică Reducerea de 10%'}
            </a>
            
            <button 
              onClick={() => setShow(false)}
              className="mt-4 text-gray-400 hover:text-gray-600 font-medium text-sm text-center w-full"
            >
              {isEn ? 'No thanks, I prefer paying full price.' : 'Nu mulțumesc, prefer să plătesc prețul întreg.'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
