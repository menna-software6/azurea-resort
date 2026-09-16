import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DINING_VENUES } from '../data/resortData';
import { DiningVenue } from '../types';
import { DiningMenuModal } from './DiningMenuModal';
import { Clock, Utensils, Sparkles } from 'lucide-react';

export const DiningSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);

  return (
    <section id="dining" className="py-24 sm:py-32 lg:py-40 bg-[#F7F3EC] text-[#0B2126]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {language === 'ar' ? 'فنون الطهي الساحلي' : 'Culinary Horizons'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('diningHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#0B2126] font-normal mt-3 max-w-2xl">
            {t('diningSubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {DINING_VENUES.map((venue) => {
            const isAr = language === 'ar';
            return (
              <div
                key={venue.id}
                className="group flex flex-col bg-white border-2 border-[#12343B]/15 transition-all duration-500 hover:border-[#8C6D32] hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#12343B]/10">
                  <img
                    src={venue.image}
                    alt={isAr ? venue.nameAr : venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2126]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-[#0B2126] text-white text-[10px] tracking-[0.25em] uppercase font-bold border border-[#B99A5B]/70 shadow-md">
                      {isAr ? venue.subheadingAr : venue.subheading}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0B2126] font-semibold group-hover:text-[#8C6D32] transition-colors">
                      {isAr ? venue.nameAr : venue.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed font-normal mt-3 line-clamp-3">
                      {isAr ? venue.descriptionAr : venue.description}
                    </p>
                  </div>

                  {/* Hours & Dress Code */}
                  <div className="pt-4 border-t border-[#D8C7A6] space-y-2.5 text-xs text-[#0B2126] font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#8C6D32] shrink-0" />
                      <span className="font-semibold text-[#0B2126]">{isAr ? venue.hoursAr : venue.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#8C6D32] shrink-0" />
                      <span className="font-semibold text-[#0B2126]">{isAr ? venue.dressCodeAr : venue.dressCode}</span>
                    </div>
                  </div>

                  {/* View Menu Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedVenue(venue)}
                      className="w-full py-3.5 px-4 bg-white hover:bg-[#0B2126] text-[#0B2126] hover:text-white border-2 border-[#0B2126] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xs"
                    >
                      <Utensils className="w-3.5 h-3.5 text-[#8C6D32]" />
                      <span>{t('viewMenu')}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Menu Modal */}
      {selectedVenue && (
        <DiningMenuModal
          venue={selectedVenue}
          onClose={() => setSelectedVenue(null)}
        />
      )}
    </section>
  );
};
