import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookingSearchBar } from './BookingSearchBar';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (roomId?: string) => void;
  onExplore: () => void;
  onSearchAvailability: (params: { checkIn: string; checkOut: string; guests: number; roomId: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore, onSearchAvailability }) => {
  const { t, isRtl, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Cinematic Background Image with Slow Zoom Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=88"
          alt="AZUREA Mediterranean Luxury Coastal Sanctuary"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          fetchPriority="high"
        />
        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12343B]/90 via-[#12343B]/40 to-[#12343B]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#12343B]/30 to-[#12343B]/70" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center text-white my-auto z-10 flex flex-col items-center">
        {/* Subtle Gold Emblem Monogram */}
        <div className="mb-6 flex items-center justify-center">
          <div className="w-12 h-[1px] bg-[#B99A5B]/80" />
          <span className="mx-4 text-[#D8C7A6] tracking-[0.4em] text-xs font-serif-luxury uppercase">
            {language === 'ar' ? 'الملاذ الخاص' : 'Exclusive Retreat'}
          </span>
          <div className="w-12 h-[1px] bg-[#B99A5B]/80" />
        </div>

        {/* Brand Main Title */}
        <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl tracking-[0.2em] font-light uppercase text-[#F7F3EC] drop-shadow-sm mb-3">
          AZUREA
        </h1>

        {/* Brand Tagline */}
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#D8C7A6] font-medium mb-8">
          {language === 'ar' ? 'منتجع ساحلي خاص' : 'Private Coastal Resort'}
        </p>

        {/* Hero Overline & Luxury Headline */}
        <div className="max-w-2xl mx-auto mb-10 space-y-3">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B99A5B] font-semibold">
            {t('heroOverline')}
          </p>
          <p className="text-lg sm:text-2xl lg:text-3xl font-serif-luxury italic text-[#F7F3EC]/90 font-normal leading-relaxed">
            {t('heroTagline')}
          </p>
        </div>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
          <button
            type="button"
            id="hero-book-stay-button"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-9 py-4 bg-[#B99A5B] text-[#12343B] hover:bg-[#d8c7a6] text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-95 whitespace-nowrap"
          >
            {t('bookYourStay')}
          </button>
          <button
            type="button"
            id="hero-explore-button"
            onClick={onExplore}
            className="w-full sm:w-auto px-9 py-4 bg-transparent text-[#F7F3EC] hover:text-white border border-[#D8C7A6]/60 hover:border-white text-xs font-medium tracking-[0.22em] uppercase transition-all duration-300 backdrop-blur-xs cursor-pointer active:scale-95 whitespace-nowrap"
          >
            {t('exploreAzurea')}
          </button>
        </div>
      </div>

      {/* Booking Search Bar Positioned Near Hero Base */}
      <div className="w-full z-20 mt-12 sm:mt-16">
        <BookingSearchBar onSearch={onSearchAvailability} />
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="flex justify-center mt-6 z-10">
        <a
          href="#intro"
          className="text-[#D8C7A6]/70 hover:text-[#B99A5B] transition-colors flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll down to introduction"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase">
            {t('scrollDown')}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#B99A5B]" />
        </a>
      </div>
    </section>
  );
};
