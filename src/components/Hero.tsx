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
        {/* Luxury High-Contrast Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2126] via-[#12343B]/60 to-[#0B2126]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#12343B]/40 to-[#0B2126]/85" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center text-white my-auto z-10 flex flex-col items-center">
        {/* Gold Emblem Monogram */}
        <div className="mb-6 flex items-center justify-center">
          <div className="w-14 h-[1.5px] bg-[#D8C7A6]" />
          <span className="mx-4 text-[#F7F3EC] tracking-[0.45em] text-xs sm:text-sm font-serif-luxury font-medium uppercase drop-shadow">
            {language === 'ar' ? 'الملاذ الخاص' : 'Exclusive Retreat'}
          </span>
          <div className="w-14 h-[1.5px] bg-[#D8C7A6]" />
        </div>

        {/* Brand Main Title - Refined, editorial, thin serif typography */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl tracking-[0.15em] font-light uppercase text-[#F7F3EC]/90 drop-shadow-[0_1px_2px_rgba(11,33,38,0.45)] mb-4 select-none">
          AZUREA
        </h1>

        {/* Brand Tagline */}
        <p className="text-sm sm:text-base tracking-[0.4em] uppercase text-[#F7F3EC] font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mb-8">
          {language === 'ar' ? 'منتجع ساحلي خاص' : 'Private Coastal Resort'}
        </p>

        {/* Hero Overline & Luxury Headline */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#D8C7A6] font-bold drop-shadow">
            {t('heroOverline')}
          </p>
          <p className="text-xl sm:text-3xl lg:text-4xl font-serif-luxury italic text-white font-normal leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]">
            “{t('heroTagline')}”
          </p>
        </div>

        {/* Hero Action Buttons - Strong text/background contrast */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
          <button
            type="button"
            id="hero-book-stay-button"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-10 py-4 bg-[#B99A5B] hover:bg-[#d8c7a6] text-[#0B2126] text-xs font-bold tracking-[0.24em] uppercase transition-all duration-300 shadow-2xl hover:shadow-gold-glow cursor-pointer active:scale-95 whitespace-nowrap"
          >
            {t('bookYourStay')}
          </button>
          <button
            type="button"
            id="hero-explore-button"
            onClick={onExplore}
            className="w-full sm:w-auto px-10 py-4 bg-[#0B2126]/70 hover:bg-[#0B2126] text-white hover:text-white border-2 border-white/70 hover:border-white text-xs font-bold tracking-[0.24em] uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer active:scale-95 whitespace-nowrap shadow-xl"
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
