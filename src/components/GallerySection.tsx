import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

type FilterCategory = 'ALL' | 'ROOMS' | 'BEACH' | 'DINING' | 'SPA' | 'EXPERIENCES';

export const GallerySection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const categories: { key: FilterCategory; labelKey: string }[] = [
    { key: 'ALL', labelKey: 'tabAll' },
    { key: 'ROOMS', labelKey: 'tabRooms' },
    { key: 'BEACH', labelKey: 'tabBeach' },
    { key: 'DINING', labelKey: 'tabDining' },
    { key: 'SPA', labelKey: 'tabSpa' },
    { key: 'EXPERIENCES', labelKey: 'tabExperiences' },
  ];

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#12343B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold mb-3">
            {language === 'ar' ? 'معرض الصور' : 'Visual Portfolio'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#12343B]">
            {t('galleryHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#12343B]/80 font-normal mt-3 max-w-2xl">
            {t('gallerySubheading')}
          </p>
          <div className="w-16 h-[1px] bg-[#B99A5B]/60 mt-6" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setActiveLightboxIndex(null);
                }}
                className={`px-4 sm:px-6 py-2 rounded-none text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#12343B] text-[#F7F3EC] border border-[#B99A5B] shadow-sm'
                    : 'bg-transparent text-[#12343B]/70 hover:text-[#12343B] border border-[#D8C7A6]/50 hover:border-[#D8C7A6]'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isAr = language === 'ar';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative h-80 sm:h-96 overflow-hidden bg-[#12343B]/5 cursor-pointer border border-[#D8C7A6]/40 hover:border-[#B99A5B] transition-all duration-500 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={isAr ? item.titleAr : item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12343B]/90 via-[#12343B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[#D8C7A6] font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-medium text-[#F7F3EC]">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="text-xs text-[#D8C7A6]/80 italic mt-1 line-clamp-2">
                    {isAr ? item.captionAr : item.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[#B99A5B]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'عرض ملء الشاشة' : 'Expand View'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-[#12343B]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between text-white z-20" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs tracking-widest text-[#D8C7A6] uppercase">
              <span>{activeLightboxIndex + 1}</span> {t('imageOf')} <span>{filteredItems.length}</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Content with Prev/Next Controls */}
          <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
              }}
              className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[75vh] flex flex-col items-center">
              <img
                src={currentItem.image}
                alt={language === 'ar' ? currentItem.titleAr : currentItem.title}
                className="max-h-[68vh] max-w-full object-contain shadow-2xl border border-[#D8C7A6]/30"
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
              }}
              className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div className="text-center text-white pb-2 z-20" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif-luxury text-2xl text-[#F7F3EC]">
              {language === 'ar' ? currentItem.titleAr : currentItem.title}
            </h3>
            <p className="font-serif-luxury italic text-sm text-[#D8C7A6]/80 mt-1 max-w-xl mx-auto">
              {language === 'ar' ? currentItem.captionAr : currentItem.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
