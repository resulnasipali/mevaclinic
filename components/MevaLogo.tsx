import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface MevaLogoProps {
  className?: string;
  href?: string;
  variant?: 'light' | 'dark'; // variant kept for architectural compatibility
}

export const MevaLogo = ({ className = "w-[240px] h-auto", href = "/", variant = "light" }: MevaLogoProps) => {
  return (
    <Link 
      href={href} 
      aria-label="Meva Clinic Home" 
      className={`flex items-center tracking-tight select-none relative ${className}`}
    >
      <Image 
        src="/images/meva-logo-premium.png" 
        alt="Meva Clinic Premium Logo" 
        width={1000} 
        height={558} // Accurate aspect ratio derived from 5504x3072 source
        sizes="(max-width: 768px) 250px, 400px"
        className="w-full h-auto object-contain"
        priority={true} // Essential for LCP (Largest Contentful Paint) optimization
      />
    </Link>
  );
};
