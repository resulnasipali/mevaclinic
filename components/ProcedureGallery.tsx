'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

import { TreatmentImage } from '@/utils/getTreatmentImages';

interface ProcedureGalleryProps {
  images: TreatmentImage[];
  title?: string;
}

export default function ProcedureGallery({ images, title = "Clinical Outcomes" }: ProcedureGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-prime mb-4">
            {title}
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real results from our patients. Witness the transformational outcomes achieved by our expert medical team.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative aspect-square group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(index)}
              title={img.caption}
            >
              <Image 
                src={img.url} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-prime/0 group-hover:bg-prime/30 transition-colors duration-500 flex items-center justify-center z-10">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
          >
            <X size={28} />
          </button>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Main Image */}
          <div 
            className="relative w-full max-w-5xl aspect-auto max-h-[85vh] h-full mx-auto p-4 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
            />
            
            {/* Image Caption */}
            <div className="absolute bottom-[-35px] text-center w-full text-white/80 font-medium">
              <p className="text-sm md:text-base tracking-wide">{images[currentIndex].caption}</p>
              <div className="text-white/40 text-xs tracking-widest mt-1">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
