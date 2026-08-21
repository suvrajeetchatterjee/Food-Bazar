import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cateringData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const images = GALLERY_ITEMS.map((item) => item.image);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7] text-[#2D2926] relative border-b border-[#EAE7E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 border-b border-[#C5A059] pb-1 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              Photo Showcase
            </span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2926]">
            Event <span className="italic text-[#C5A059] font-normal">Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5E574F] mt-2 font-light">
            Real photos from our catering setups, live cooking counters, and event decor.
          </p>
        </div>

        {/* Gallery Grid - Only Images, No Captions or Text */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xs overflow-hidden bg-[#2D2926] border border-[#EAE7E1] hover:border-[#C5A059] shadow-xs cursor-pointer transition-all duration-300"
            >
              <img
                src={imgSrc}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Pure Image View */}
        {activeLightboxIndex !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8 backdrop-blur-xs cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition z-50 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-xs border border-[#C5A059]/40 shadow-2xl flex items-center justify-center cursor-default bg-black"
            >
              <img
                src={images[activeLightboxIndex]}
                alt={`Full preview ${activeLightboxIndex + 1}`}
                className="max-h-[85vh] max-w-full w-auto h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium tracking-widest uppercase bg-black/50 px-4 py-1.5 rounded-full border border-white/10">
              {activeLightboxIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

