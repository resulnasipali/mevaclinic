import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-2xl cursor-ew-resize select-none group shadow-2xl"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt={`Clinical Outcome ${afterLabel}`} aria-label={`Clinical Outcome ${afterLabel}`} loading="lazy" decoding="async" className="w-full h-full object-cover" draggable="false" />
        <span className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold shadow backdrop-blur-sm z-10 pointer-events-none">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 h-full border-r-4 border-white/80 shadow-[2px_0_10px_rgba(0,0,0,0.5)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt={`Initial Condition ${beforeLabel}`} aria-label={`Initial Condition ${beforeLabel}`} loading="lazy" decoding="async" className="w-full h-full object-cover max-w-none" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }} draggable="false" />
        <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold shadow backdrop-blur-sm z-10 pointer-events-none">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-transform group-hover:scale-110"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
      >
        <div className="flex gap-1">
          <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
