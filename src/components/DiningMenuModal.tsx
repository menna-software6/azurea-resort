import React from 'react';
import { DiningVenue } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, UtensilsCrossed, Clock, Sparkles } from 'lucide-react';

interface DiningMenuModalProps {
  venue: DiningVenue | null;
  onClose: () => void;
}

export const DiningMenuModal: React.FC<DiningMenuModalProps> = ({ venue, onClose }) => {
  const { t, isRtl, language } = useLanguage();

  if (!venue) return null;

  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#0B2126]/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#F7F3EC] text-[#0B2126] border-2 border-[#12343B]/25 shadow-2xl my-8 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#0B2126] hover:text-[#8C6D32] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Header */}
        <div className="text-center mb-10 pb-6 border-b border-[#12343B]/20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#8C6D32] font-bold block mb-2">
            {isAr ? 'قائمة الطعام المختارة' : 'Curated Tasting Menu'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0B2126] font-semibold tracking-wide">
            {isAr ? venue.nameAr : venue.name}
          </h2>
          <p className="font-serif-luxury italic text-base text-[#18383F] font-medium mt-1">
            {isAr ? venue.subheadingAr : venue.subheading}
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[#0B2126] font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#8C6D32]" />
              <span className="font-semibold">{isAr ? venue.hoursAr : venue.hours}</span>
            </span>
            <span>•</span>
            <span className="font-semibold">{isAr ? venue.dressCodeAr : venue.dressCode}</span>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {/* Starters */}
          <div>
            <h3 className="font-serif-luxury text-xl text-[#8C6D32] font-bold tracking-wider mb-4 border-b border-[#12343B]/20 pb-1.5">
              {t('starters')}
            </h3>
            <div className="space-y-4">
              {venue.menuPreview.starters.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#18383F] font-normal mt-0.5">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                  <span className="font-serif-luxury text-base font-bold text-[#0B2126] shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div>
            <h3 className="font-serif-luxury text-xl text-[#8C6D32] font-bold tracking-wider mb-4 border-b border-[#12343B]/20 pb-1.5">
              {t('mains')}
            </h3>
            <div className="space-y-4">
              {venue.menuPreview.mains.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#18383F] font-normal mt-0.5">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                  <span className="font-serif-luxury text-base font-bold text-[#0B2126] shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="font-serif-luxury text-xl text-[#8C6D32] font-bold tracking-wider mb-4 border-b border-[#12343B]/20 pb-1.5">
              {t('desserts')}
            </h3>
            <div className="space-y-4">
              {venue.menuPreview.desserts.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#18383F] font-normal mt-0.5">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                  <span className="font-serif-luxury text-base font-bold text-[#0B2126] shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Drink Box */}
          <div className="p-4 bg-white border-2 border-[#8C6D32]/40 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#8C6D32]" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#8C6D32]">
                {t('signatureCocktail')}
              </span>
            </div>
            <div className="flex justify-between items-baseline gap-4">
              <div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                  {isAr ? venue.menuPreview.signatureCocktail.nameAr : venue.menuPreview.signatureCocktail.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#18383F] font-normal mt-0.5">
                  {isAr ? venue.menuPreview.signatureCocktail.descriptionAr : venue.menuPreview.signatureCocktail.description}
                </p>
              </div>
              <span className="font-serif-luxury text-base font-bold text-[#0B2126] shrink-0">
                {venue.menuPreview.signatureCocktail.price}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#12343B]/20 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-3 bg-[#0B2126] text-white hover:bg-[#1a464f] text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-sm cursor-pointer"
          >
            {t('closeMenu')}
          </button>
        </div>
      </div>
    </div>
  );
};
