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
    <section id="rooms" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#0B2126]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {language === 'ar' ? 'ملاذات الإقامة الفاخرة' : 'Private Sanctuaries'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('roomsHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#0B2126] font-normal mt-3">
            {t('roomsSubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {ROOMS.map((room) => {
            const isAr = language === 'ar';
            return (
              <div
                key={room.id}
                className="group flex flex-col bg-[#F7F3EC] border-2 border-[#12343B]/15 transition-all duration-500 hover:border-[#8C6D32] hover:shadow-2xl"
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
                    <span className="px-3.5 py-1 bg-[#0B2126] text-white border border-[#B99A5B]/70 text-[10px] tracking-[0.25em] uppercase font-bold shadow-md">
                      {isAr ? room.categoryAr : room.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 border border-[#12343B]/20 shadow-md">
                    <span className="text-[10px] tracking-wider uppercase text-[#0B2126] font-bold block">
                      {t('from')}
                    </span>
                    <span className="font-serif-luxury text-xl text-[#0B2126] font-bold">
                      ${room.pricePerNight}
                    </span>
                    <span className="text-[10px] text-[#0B2126] font-semibold ml-1">
                      {t('perNight')}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0B2126] font-semibold group-hover:text-[#8C6D32] transition-colors">
                      {isAr ? room.nameAr : room.name}
                    </h3>
                    <p className="font-serif-luxury italic text-sm text-[#18383F] font-medium mt-1.5 line-clamp-2">
                      {isAr ? room.taglineAr : room.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed mt-4 line-clamp-3 font-normal">
                      {isAr ? room.descriptionAr : room.description}
                    </p>
                  </div>

                  {/* Highlights / Specs */}
                  <div className="pt-4 border-t border-[#D8C7A6] grid grid-cols-3 gap-2 text-center text-xs text-[#0B2126]">
                    <div className="flex flex-col items-center">
                      <Users className="w-4 h-4 text-[#8C6D32] mb-1" />
                      <span className="text-[10px] uppercase tracking-wider text-[#0B2126] font-bold">{t('guestsLabel')}</span>
                      <span className="font-semibold text-[#0B2126] mt-0.5">{room.guests} {t('adults')}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Maximize className="w-4 h-4 text-[#8C6D32] mb-1" />
                      <span className="text-[10px] uppercase tracking-wider text-[#0B2126] font-bold">{t('sizeLabel')}</span>
                      <span className="font-semibold text-[#0B2126] truncate mt-0.5">{room.size.split('/')[0]}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Eye className="w-4 h-4 text-[#8C6D32] mb-1" />
                      <span className="text-[10px] uppercase tracking-wider text-[#0B2126] font-bold">{t('viewLabel')}</span>
                      <span className="font-semibold text-[#0B2126] truncate mt-0.5">{isAr ? 'بحرية' : 'Sea View'}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRoom(room)}
                      className="flex-1 py-3.5 px-4 bg-white hover:bg-[#0B2126] text-[#0B2126] hover:text-white border-2 border-[#0B2126] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>{t('viewRoom')}</span>
                      {isRtl ? <ArrowLeft className="w-3.5 h-3.5 text-[#8C6D32]" /> : <ArrowRight className="w-3.5 h-3.5 text-[#8C6D32]" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => onBookRoom(room.id)}
                      className="py-3.5 px-5 bg-[#0B2126] hover:bg-[#1a464f] text-white text-xs font-bold tracking-[0.2em] uppercase border border-[#B99A5B] transition-colors cursor-pointer shadow-sm"
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
