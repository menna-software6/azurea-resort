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
    <section id="dining" className="py-24 sm:py-32 lg:py-40 bg-[#F7F3EC] text-[#12343B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold mb-3">
            {language === 'ar' ? 'فنون الطهي الساحلي' : 'Culinary Horizons'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#12343B]">
            {t('diningHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#12343B]/80 font-normal mt-3 max-w-2xl">
            {t('diningSubheading')}
          </p>
          <div className="w-16 h-[1px] bg-[#B99A5B]/60 mt-6" />
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {DINING_VENUES.map((venue) => {
            const isAr = language === 'ar';
            return (
              <div
                key={venue.id}
                className="group flex flex-col bg-white border border-[#D8C7A6]/50 transition-all duration-500 hover:border-[#B99A5B] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#12343B]/10">
                  <img
                    src={venue.image}
                    alt={isAr ? venue.nameAr : venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12343B]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-[#12343B] text-[9px] tracking-[0.25em] uppercase font-semibold border border-[#D8C7A6]/60">
                      {isAr ? venue.subheadingAr : venue.subheading}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-3xl text-[#12343B] font-medium group-hover:text-[#B99A5B] transition-colors">
                      {isAr ? venue.nameAr : venue.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#12343B]/80 leading-relaxed font-light mt-3 line-clamp-3">
                      {isAr ? venue.descriptionAr : venue.description}
                    </p>
                  </div>

                  {/* Hours & Dress Code */}
                  <div className="pt-4 border-t border-[#D8C7A6]/40 space-y-2 text-xs text-[#12343B]/75">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                      <span>{isAr ? venue.hoursAr : venue.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                      <span>{isAr ? venue.dressCodeAr : venue.dressCode}</span>
                    </div>
                  </div>

                  {/* View Menu Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedVenue(venue)}
                      className="w-full py-3 px-4 bg-transparent hover:bg-[#12343B] text-[#12343B] hover:text-[#F7F3EC] border border-[#D8C7A6] hover:border-[#12343B] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Utensils className="w-3.5 h-3.5 text-[#B99A5B]" />
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
