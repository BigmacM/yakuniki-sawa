'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: { src: string; label: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.96)' }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop tap to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close lightbox"
      />

      {/* Image */}
      <div className="absolute inset-0 flex items-center justify-center p-16">
        <div className="relative w-full h-full max-w-5xl">
          <Image
            src={images[index].src}
            alt={images[index].label}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal/80 border border-ember/30 rounded-full flex items-center justify-center text-washi hover:bg-ember hover:text-charcoal transition-colors"
        aria-label="Close"
      >
        ✕
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-charcoal/80 border border-ember/30 rounded-full flex items-center justify-center text-washi hover:bg-ember hover:text-charcoal transition-colors"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-charcoal/80 border border-ember/30 rounded-full flex items-center justify-center text-washi hover:bg-ember hover:text-charcoal transition-colors"
        aria-label="Next"
      >
        ›
      </button>

      {/* Counter + label */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="font-oswald text-washi/80 text-sm tracking-widest uppercase">
          {images[index].label}
        </p>
        <p className="font-open-sans text-washi/40 text-xs mt-1">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
