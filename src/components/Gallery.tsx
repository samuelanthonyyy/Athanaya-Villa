import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/villaData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'gwk' | 'pool' | 'rooms' | 'surroundings'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'gwk', label: 'Garuda Wisnu Kencana' },
    { id: 'pool', label: 'Swimming Pools' },
    { id: 'rooms', label: 'Bedrooms & Living' },
    { id: 'surroundings', label: 'Jimbaran & Bali' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(index >= 0 ? index : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#2D2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B58554] font-semibold block mb-3">
            Visual Story
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2D2723] tracking-tight leading-tight">
            Artistic Glimpses of Athanaya
          </h2>
          <div className="w-16 h-0.5 bg-[#B58554]/40 mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#5E5246] leading-relaxed">
            From the distant silhouette of Garuda Wisnu Kencana against sunset skies to the serene turquoise pools and tranquil carved bedrooms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#B58554] text-white shadow-xs'
                  : 'bg-[#EFE7DC] text-[#5C4E42] hover:bg-[#E2D8CA]'
              }`}
              id={`gallery-filter-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => {
            // Give some items featured layout widths
            const isFeatured = index === 0 || index === 5;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isFeatured ? 'sm:col-span-2 aspect-16/10' : 'aspect-4/3'
                }`}
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white" />

                {/* Badge Tag always visible */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1C1713]/60 backdrop-blur-md text-white/90 text-[11px] font-medium tracking-wide">
                  {item.categoryLabel}
                </div>

                {/* Caption & Zoom Icon appearing on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
                  <div>
                    <h3 className="text-base font-serif font-semibold text-white mb-1 drop-shadow-xs">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-3 text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors z-50 cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl w-full max-h-[88vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden max-h-[70vh] shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-auto h-auto max-h-[70vh] max-w-full object-contain"
              />
            </div>
            <div className="text-center mt-4 max-w-2xl px-4 text-white">
              <span className="text-xs uppercase tracking-widest text-[#E6C28B] font-semibold">
                {filteredItems[lightboxIndex].categoryLabel} ({lightboxIndex + 1} of {filteredItems.length})
              </span>
              <h3 className="text-xl font-serif font-medium mt-1 mb-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
