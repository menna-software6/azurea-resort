import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ROOMS } from '../data/resortData';
import { Room } from '../types';
import { RoomModal } from './RoomModal';
import { Users, Maximize, Eye, ArrowRight, ArrowLeft } from 'lucide-react';

interface RoomsSectionProps {
  onBookRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onBookRoom }) => {
  const { t, isRtl, language } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="rooms" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#12343B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold mb-3">
            {language === 'ar' ? 'ملاذات الإقامة الفاخرة' : 'Private Sanctuaries'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#12343B]">
            {t('roomsHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#12343B]/80 font-normal mt-3">
            {t('roomsSubheading')}
          </p>
          <div className="w-16 h-[1px] bg-[#B99A5B]/60 mt-6" />
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {ROOMS.map((room) => {
            const isAr = language === 'ar';
            return (
              <div
                key={room.id}
                className="group flex flex-col bg-[#F7F3EC] border border-[#D8C7A6]/50 transition-all duration-500 hover:border-[#B99A5B] hover:shadow-xl"
              >
                {/* Image Container with Subtle Zoom */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#12343B]/10">
                  <img
                    src={room.images[0]}
                    alt={isAr ? room.nameAr : room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#12343B]/85 text-[#D8C7A6] border border-[#B99A5B]/40 text-[9px] tracking-[0.25em] uppercase font-semibold">
                      {isAr ? room.categoryAr : room.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 border border-[#D8C7A6]/50">
                    <span className="text-[10px] tracking-wider uppercase text-[#12343B]/70 block">
                      {t('from')}
                    </span>
                    <span className="font-serif-luxury text-lg text-[#12343B] font-semibold">
                      ${room.pricePerNight}
                    </span>
                    <span className="text-[10px] text-[#12343B]/70 ml-1">
                      {t('perNight')}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl text-[#12343B] font-medium group-hover:text-[#B99A5B] transition-colors">
                      {isAr ? room.nameAr : room.name}
                    </h3>
                    <p className="font-serif-luxury italic text-xs sm:text-sm text-[#12343B]/75 mt-1 line-clamp-2">
                      {isAr ? room.taglineAr : room.tagline}
                    </p>
                    <p className="text-xs text-[#12343B]/80 leading-relaxed mt-4 line-clamp-3">
                      {isAr ? room.descriptionAr : room.description}
                    </p>
                  </div>

                  {/* Highlights / Specs */}
                  <div className="pt-4 border-t border-[#D8C7A6]/40 grid grid-cols-3 gap-2 text-center text-xs text-[#12343B]/80">
                    <div className="flex flex-col items-center">
                      <Users className="w-3.5 h-3.5 text-[#B99A5B] mb-1" />
                      <span className="text-[10px] uppercase tracking-wider text-[#12343B]/60">{t('guestsLabel')}</span>
                      <span className="font-medium">{room.guests} {t('adults')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Maximize className="w-3.5 h-3.5 text-[#B99A5B] mb-1" />
                      <span className="text-[10px] uppercase tracking-wider text-[#12343B]/60">{t('sizeLabel')}</span>
                      <span className="font-medium truncate">{room.size.split('/')[0]}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Eye className="w-3.5 h-3.5 text-[#B99A5B] mb-1" />
                      <span className="text-[10px] uppercase tracking-wider text-[#12343B]/60">{t('viewLabel')}</span>
                      <span className="font-medium truncate">{isAr ? 'بحرية' : 'Sea View'}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRoom(room)}
                      className="flex-1 py-3 px-4 bg-transparent hover:bg-white text-[#12343B] border border-[#D8C7A6] hover:border-[#B99A5B] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t('viewRoom')}</span>
                      {isRtl ? <ArrowLeft className="w-3 h-3 text-[#B99A5B]" /> : <ArrowRight className="w-3 h-3 text-[#B99A5B]" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => onBookRoom(room.id)}
                      className="py-3 px-4 bg-[#12343B] hover:bg-[#1a464f] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.18em] uppercase border border-[#B99A5B] transition-colors cursor-pointer"
                      title={t('bookThisRoom')}
                    >
                      {isAr ? 'حجز' : 'Book'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBookRoom={onBookRoom}
        />
      )}
    </section>
  );
};
