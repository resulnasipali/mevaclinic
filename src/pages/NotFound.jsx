import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50 pt-32 pb-24">
     <AlertCircle size={80} className="text-accent mb-6" />
     <h1 className="text-4xl font-serif font-bold text-prime mb-4">Pagina nu a fost găsită / Page Not Found</h1>
     <p className="text-gray-500 mb-8 font-sans max-w-md text-lg">
       Ne cerem scuze, dar adresa pe care ați accesat-o nu există în sistem.<br/>
       We apologize, but the requested URL does not exist.
     </p>
     <Link to="/" className="bg-prime hover:bg-[#0b1626] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
        Începe din nou (Return Home)
     </Link>
  </div>
);

export default NotFound;
