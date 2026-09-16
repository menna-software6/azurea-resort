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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#12343B]/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#F7F3EC] text-[#12343B] border border-[#D8C7A6] shadow-2xl my-8 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#12343B]/70 hover:text-[#12343B] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Header */}
        <div className="text-center mb-10 pb-6 border-b border-[#D8C7A6]/60">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99A5B] font-semibold block mb-2">
            {isAr ? 'قائمة الطعام المختارة' : 'Curated Tasting Menu'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#12343B] font-normal tracking-wide">
            {isAr ? venue.nameAr : venue.name}
          </h2>
          <p className="font-serif-luxury italic text-base text-[#12343B]/80 mt-1">
            {isAr ? venue.subheadingAr : venue.subheading}
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[#12343B]/70">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B99A5B]" />
              {isAr ? venue.hoursAr : venue.hours}
            </span>
            <span>•</span>
            <span>{isAr ? venue.dressCodeAr : venue.dressCode}</span>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {/* Starters */}
          <div>
            <h3 className="font-serif-luxury text-xl text-[#B99A5B] font-medium tracking-wider mb-4 border-b border-[#D8C7A6]/30 pb-1.5">
              {t('starters')}
            </h3>
            <div className="space-y-4">
              {venue.menuPreview.starters.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif-luxury text-base font-semibold text-[#12343B]">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-xs text-[#12343B]/70 italic mt-0.5">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                  <span className="font-serif-luxury text-sm font-semibold text-[#12343B] shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div>
            <h3 className="font-serif-luxury text-xl text-[#B99A5B] font-medium tracking-wider mb-4 border-b border-[#D8C7A6]/30 pb-1.5">
              {t('mains')}
            </h3>
            <div className="space-y-4">
              {venue.menuPreview.mains.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif-luxury text-base font-semibold text-[#12343B]">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-xs text-[#12343B]/70 italic mt-0.5">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                  <span className="font-serif-luxury text-sm font-semibold text-[#12343B] shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="font-serif-luxury text-xl text-[#B99A5B] font-medium tracking-wider mb-4 border-b border-[#D8C7A6]/30 pb-1.5">
              {t('desserts')}
            </h3>
            <div className="space-y-4">
              {venue.menuPreview.desserts.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-serif-luxury text-base font-semibold text-[#12343B]">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-xs text-[#12343B]/70 italic mt-0.5">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                  <span className="font-serif-luxury text-sm font-semibold text-[#12343B] shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Drink Box */}
          <div className="p-4 bg-white/70 border border-[#B99A5B]/40 rounded-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B99A5B]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B99A5B]">
                {t('signatureCocktail')}
              </span>
            </div>
            <div className="flex justify-between items-baseline gap-4">
              <div>
                <h4 className="font-serif-luxury text-base font-semibold text-[#12343B]">
                  {isAr ? venue.menuPreview.signatureCocktail.nameAr : venue.menuPreview.signatureCocktail.name}
                </h4>
                <p className="text-xs text-[#12343B]/70 italic mt-0.5">
                  {isAr ? venue.menuPreview.signatureCocktail.descriptionAr : venue.menuPreview.signatureCocktail.description}
                </p>
              </div>
              <span className="font-serif-luxury text-sm font-semibold text-[#12343B] shrink-0">
                {venue.menuPreview.signatureCocktail.price}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#D8C7A6]/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#12343B] text-[#F7F3EC] hover:bg-[#1a464f] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            {t('closeMenu')}
          </button>
        </div>
      </div>
    </div>
  );
};
