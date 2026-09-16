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
    <section id="offers" className="py-24 sm:py-32 lg:py-40 bg-[#F7F3EC] text-[#12343B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold mb-3">
            {language === 'ar' ? 'باقات الإقامة الاستثنائية' : 'Exclusive Privileges'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#12343B]">
            {t('offersHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#12343B]/80 font-normal mt-3 max-w-2xl">
            {t('offersSubheading')}
          </p>
          <div className="w-16 h-[1px] bg-[#B99A5B]/60 mt-6" />
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {OFFERS.map((offer) => {
            const isAr = language === 'ar';

            return (
              <div
                key={offer.id}
                className="group flex flex-col bg-white border border-[#D8C7A6]/50 transition-all duration-500 hover:border-[#B99A5B] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#12343B]/10">
                  <img
                    src={offer.image}
                    alt={isAr ? offer.titleAr : offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12343B]/70 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#12343B]/85 text-[#D8C7A6] border border-[#B99A5B]/40 text-[9px] tracking-[0.2em] uppercase font-semibold">
                      {isAr ? offer.badgeAr : offer.badge}
                    </span>
                  </div>

                  {/* Nights */}
                  <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 border border-[#D8C7A6]/50 text-xs font-semibold text-[#12343B]">
                    {isAr ? offer.nightsAr : offer.nights}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl text-[#12343B] font-medium tracking-wide group-hover:text-[#B99A5B] transition-colors">
                      {isAr ? offer.titleAr : offer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#12343B]/80 leading-relaxed font-light mt-2 line-clamp-3">
                      {isAr ? offer.descriptionAr : offer.description}
                    </p>

                    {/* Included Highlights */}
                    <div className="mt-5 pt-4 border-t border-[#D8C7A6]/40">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B99A5B] block mb-2">
                        {t('includesLabel')}
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#12343B]/75">
                        {offer.included.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B99A5B] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{isAr ? item.ar : item.en}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and Actions */}
                  <div className="pt-4 border-t border-[#D8C7A6]/40 flex flex-col space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-[#12343B]/60">
                        {t('from')}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif-luxury text-2xl text-[#12343B] font-semibold">
                          ${offer.startingPrice}
                        </span>
                        <span className="text-[10px] text-[#12343B]/60">
                          {isAr ? 'للباقة' : 'package'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedOfferModal(offer)}
                        className="flex-1 py-2.5 px-3 bg-transparent hover:bg-[#F7F3EC] text-[#12343B] border border-[#D8C7A6] text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
                      >
                        {t('viewOffer')}
                      </button>
                      <button
                        type="button"
                        onClick={() => onBookOffer(offer.id)}
                        className="flex-1 py-2.5 px-3 bg-[#12343B] hover:bg-[#1a464f] text-[#F7F3EC] border border-[#B99A5B] text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors shadow-sm"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12343B]/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#F7F3EC] text-[#12343B] border border-[#D8C7A6] p-6 sm:p-10 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedOfferModal(null)}
              className="absolute top-4 right-4 p-2 text-[#12343B]/70 hover:text-[#12343B]"
              aria-label="Close offer modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B99A5B] block mb-1">
              {language === 'ar' ? selectedOfferModal.badgeAr : selectedOfferModal.badge}
            </span>
            <h3 className="font-serif-luxury text-3xl text-[#12343B] font-normal mb-3">
              {language === 'ar' ? selectedOfferModal.titleAr : selectedOfferModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#12343B]/80 leading-relaxed mb-6 font-light">
              {language === 'ar' ? selectedOfferModal.descriptionAr : selectedOfferModal.description}
            </p>

            <div className="p-4 bg-white/70 border border-[#D8C7A6]/50 mb-6">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#12343B] mb-3">
                {t('includesLabel')}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#12343B]/80">
                {selectedOfferModal.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#D8C7A6]/50">
              <div>
                <span className="text-[10px] text-[#12343B]/60 uppercase block">{t('from')}</span>
                <span className="font-serif-luxury text-2xl font-semibold">${selectedOfferModal.startingPrice}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const offerId = selectedOfferModal.id;
                  setSelectedOfferModal(null);
                  onBookOffer(offerId);
                }}
                className="px-8 py-3 bg-[#12343B] text-[#F7F3EC] hover:bg-[#1a464f] border border-[#B99A5B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
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
