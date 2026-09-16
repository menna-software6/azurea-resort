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
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#0B2126]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {language === 'ar' ? 'معرض الصور' : 'Visual Portfolio'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('galleryHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#0B2126] font-normal mt-3 max-w-2xl">
            {t('gallerySubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
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
                className={`px-5 sm:px-6 py-2.5 rounded-none text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0B2126] text-white border-2 border-[#0B2126] shadow-md'
                    : 'bg-white text-[#0B2126] hover:bg-[#F7F3EC] border-2 border-[#12343B]/20 hover:border-[#0B2126]'
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
                className="group relative h-80 sm:h-96 overflow-hidden bg-[#12343B]/5 cursor-pointer border-2 border-[#12343B]/15 hover:border-[#8C6D32] transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={isAr ? item.titleAr : item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2126] via-[#0B2126]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#D8C7A6] font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-medium text-white">
                    {isAr ? item.titleAr : item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F7F3EC] mt-1 line-clamp-2 font-normal">
                    {isAr ? item.captionAr : item.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs tracking-widest uppercase font-bold text-[#D8C7A6]">
                    <Maximize2 className="w-4 h-4" />
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
          className="fixed inset-0 z-50 bg-[#0B2126]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between text-white z-20" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs tracking-widest text-[#D8C7A6] uppercase font-bold">
              <span>{activeLightboxIndex + 1}</span> {t('imageOf')} <span>{filteredItems.length}</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
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
              className="absolute left-2 sm:left-6 p-3.5 rounded-full bg-[#0B2126]/80 hover:bg-black text-white transition-colors z-20 cursor-pointer border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[75vh] flex flex-col items-center">
              <img
                src={currentItem.image}
                alt={language === 'ar' ? currentItem.titleAr : currentItem.title}
                className="max-h-[68vh] max-w-full object-contain shadow-2xl border-2 border-white/20"
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
              }}
              className="absolute right-2 sm:right-6 p-3.5 rounded-full bg-[#0B2126]/80 hover:bg-black text-white transition-colors z-20 cursor-pointer border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Caption */}
          <div className="text-center text-white pb-2 z-20" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
              {language === 'ar' ? currentItem.titleAr : currentItem.title}
            </h3>
            <p className="font-serif-luxury italic text-base text-[#F7F3EC] mt-1 max-w-xl mx-auto font-normal">
              {language === 'ar' ? currentItem.captionAr : currentItem.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
