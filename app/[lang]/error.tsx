'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Meva Clinic] Page Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0b1626] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle size={36} className="text-accent" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-serif font-bold text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          We encountered an unexpected issue. Our support team is available on WhatsApp to assist you directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 bg-accent text-[#0b1626] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-all shadow-lg"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
          >
            Return Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-8 text-left text-xs text-red-400 bg-red-500/5 border border-red-500/20 rounded-xl p-4 overflow-auto">
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
}
