import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFERS } from '../data/resortData';
import { Offer } from '../types';
import { Check, Calendar, ArrowRight, ArrowLeft, Sparkles, X } from 'lucide-react';

interface OffersSectionProps {
  onBookOffer: (offerId: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onBookOffer }) => {
  const { t, isRtl, language } = useLanguage();
  const [selectedOfferModal, setSelectedOfferModal] = useState<Offer | null>(null);

  return (
    <section id="offers" className="py-24 sm:py-32 lg:py-40 bg-[#F7F3EC] text-[#0B2126]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {language === 'ar' ? 'باقات الإقامة الاستثنائية' : 'Exclusive Privileges'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('offersHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#0B2126] font-normal mt-3 max-w-2xl">
            {t('offersSubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {OFFERS.map((offer) => {
            const isAr = language === 'ar';

            return (
              <div
                key={offer.id}
                className="group flex flex-col bg-white border-2 border-[#12343B]/15 transition-all duration-500 hover:border-[#8C6D32] hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#12343B]/10">
                  <img
                    src={offer.image}
                    alt={isAr ? offer.titleAr : offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2126]/70 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-[#0B2126] text-white border border-[#B99A5B]/80 text-[10px] tracking-[0.2em] uppercase font-bold shadow-md">
                      {isAr ? offer.badgeAr : offer.badge}
                    </span>
                  </div>

                  {/* Nights */}
                  <div className="absolute bottom-4 right-4 bg-white px-3.5 py-1 border-2 border-[#0B2126]/20 text-xs font-bold text-[#0B2126] shadow-sm">
                    {isAr ? offer.nightsAr : offer.nights}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0B2126] font-semibold tracking-wide group-hover:text-[#8C6D32] transition-colors">
                      {isAr ? offer.titleAr : offer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed font-normal mt-2 line-clamp-3">
                      {isAr ? offer.descriptionAr : offer.description}
                    </p>

                    {/* Included Highlights */}
                    <div className="mt-5 pt-4 border-t border-[#D8C7A6]">
                      <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#8C6D32] block mb-2">
                        {t('includesLabel')}
                      </span>
                      <ul className="space-y-2 text-xs text-[#0B2126] font-medium">
                        {offer.included.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#8C6D32] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{isAr ? item.ar : item.en}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="pt-4 border-t border-[#D8C7A6] flex flex-col space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#18383F] font-bold">
                        {t('from')}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif-luxury text-3xl text-[#0B2126] font-bold">
                          ${offer.startingPrice}
                        </span>
                        <span className="text-xs text-[#18383F] font-semibold">
                          {isAr ? 'للباقة' : 'package'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedOfferModal(offer)}
                        className="flex-1 py-3 px-3 bg-white hover:bg-[#F7F3EC] text-[#0B2126] border-2 border-[#0B2126] text-xs font-bold tracking-[0.16em] uppercase transition-colors text-center cursor-pointer shadow-xs active:scale-98"
                      >
                        {t('viewOffer')}
                      </button>
                      <button
                        type="button"
                        onClick={() => onBookOffer(offer.id)}
                        className="flex-1 py-3 px-3 bg-[#0B2126] hover:bg-[#1a464f] text-white border border-[#B99A5B] text-xs font-bold tracking-[0.16em] uppercase transition-colors shadow-sm text-center cursor-pointer active:scale-98"
                      >
                        {t('bookNow')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Offer Detail Modal */}
      {selectedOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B2126]/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#F7F3EC] text-[#0B2126] border-2 border-[#12343B]/25 p-6 sm:p-10 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedOfferModal(null)}
              className="absolute top-4 right-4 p-2 text-[#0B2126] hover:text-[#8C6D32] transition-colors cursor-pointer"
              aria-label="Close offer modal"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#8C6D32] block mb-1">
              {language === 'ar' ? selectedOfferModal.badgeAr : selectedOfferModal.badge}
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#0B2126] font-semibold mb-3">
              {language === 'ar' ? selectedOfferModal.titleAr : selectedOfferModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed mb-6 font-normal">
              {language === 'ar' ? selectedOfferModal.descriptionAr : selectedOfferModal.description}
            </p>

            <div className="p-5 bg-white border-2 border-[#12343B]/15 mb-6 shadow-xs">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#0B2126] mb-3">
                {t('includesLabel')}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#0B2126] font-medium">
                {selectedOfferModal.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8C6D32] shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#12343B]/20">
              <div>
                <span className="text-xs text-[#18383F] font-bold uppercase block">{t('from')}</span>
                <span className="font-serif-luxury text-3xl font-bold text-[#0B2126]">${selectedOfferModal.startingPrice}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const offerId = selectedOfferModal.id;
                  setSelectedOfferModal(null);
                  onBookOffer(offerId);
                }}
                className="px-8 py-3 bg-[#0B2126] text-white hover:bg-[#1a464f] border border-[#B99A5B] text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-md cursor-pointer"
              >
                {t('bookNow')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
