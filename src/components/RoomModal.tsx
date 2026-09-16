import React, { useState } from 'react';
import { Room } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, Users, Maximize, Eye, BedDouble, Check, ChevronLeft, ChevronRight, CalendarCheck } from 'lucide-react';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onBookRoom }) => {
  const { t, isRtl, language } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#12343B]/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#F7F3EC] text-[#12343B] border border-[#D8C7A6]/70 shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#12343B]/80 hover:bg-[#12343B] text-white rounded-full transition-all focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Slider */}
        <div className="relative h-72 sm:h-96 w-full bg-black/20 overflow-hidden">
          <img
            src={room.images[activeImageIndex]}
            alt={language === 'ar' ? room.nameAr : room.name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12343B]/70 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Controls */}
          {room.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white text-[#12343B] transition-colors focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white text-[#12343B] transition-colors focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Thumbnail indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {room.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-1.5 transition-all rounded-full ${
                      idx === activeImageIndex ? 'w-8 bg-[#B99A5B]' : 'w-2 bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 bg-[#12343B]/80 text-[#D8C7A6] border border-[#B99A5B]/40 text-[10px] tracking-[0.25em] uppercase font-semibold">
              {language === 'ar' ? room.categoryAr : room.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Header Title & Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#D8C7A6]/50 pb-6">
            <div>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#12343B] font-normal tracking-wide">
                {language === 'ar' ? room.nameAr : room.name}
              </h2>
              <p className="font-serif-luxury italic text-base sm:text-lg text-[#12343B]/80 mt-1">
                {language === 'ar' ? room.taglineAr : room.tagline}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] tracking-wider text-[#12343B]/70 uppercase block">
                {t('from')}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif-luxury text-3xl sm:text-4xl text-[#12343B] font-semibold">
                  ${room.pricePerNight}
                </span>
                <span className="text-xs text-[#12343B]/70">{t('perNight')}</span>
              </div>
            </div>
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white/60 border border-[#D8C7A6]/40 text-xs text-[#12343B]">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#B99A5B] shrink-0" />
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#12343B]/60">{t('guestsLabel')}</p>
                <p className="font-medium">{room.guests} {t('adults')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Maximize className="w-4 h-4 text-[#B99A5B] shrink-0" />
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#12343B]/60">{t('sizeLabel')}</p>
                <p className="font-medium">{room.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-[#B99A5B] shrink-0" />
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#12343B]/60">{t('viewLabel')}</p>
                <p className="font-medium">{language === 'ar' ? room.viewAr : room.view}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-[#B99A5B] shrink-0" />
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#12343B]/60">Bed</p>
                <p className="font-medium truncate">{language === 'ar' ? room.bedTypeAr : room.bedType}</p>
              </div>
            </div>
          </div>

          {/* Narrative Description */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-[#B99A5B] mb-2">
              {language === 'ar' ? 'عن هذا الملاذ' : 'Sanctuary Overview'}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#12343B]/85">
              {language === 'ar' ? room.descriptionAr : room.description}
            </p>
          </div>

          {/* Amenities & Privileges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D8C7A6]/50">
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-[#12343B] mb-3">
                {t('amenitiesLabel')}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#12343B]/80">
                {room.amenities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase font-semibold text-[#12343B] mb-3">
                {t('featuresLabel')}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#12343B]/80">
                {room.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-[#D8C7A6]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#12343B]/70">
              <CalendarCheck className="w-4 h-4 text-[#B99A5B]" />
              <span>{language === 'ar' ? 'متوفر للحجز الفوري مع إلغاء مرن' : 'Available for immediate reservation with flexible notice'}</span>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-[#D8C7A6] hover:bg-white text-[#12343B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              >
                {t('close')}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookRoom(room.id);
                }}
                className="flex-1 sm:flex-none px-8 py-3 bg-[#12343B] hover:bg-[#1a464f] text-[#F7F3EC] border border-[#B99A5B] text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {t('bookThisRoom')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
