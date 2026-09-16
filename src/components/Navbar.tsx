import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { language, setLanguage, isRtl, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('navHome') },
    { href: '#rooms', label: t('navRooms') },
    { href: '#experiences', label: t('navExperiences') },
    { href: '#dining', label: t('navDining') },
    { href: '#spa', label: t('navSpa') },
    { href: '#offers', label: t('navOffers') },
    { href: '#gallery', label: t('navGallery') },
    { href: '#about', label: t('navAbout') },
    { href: '#contact', label: t('navContact') },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F7F3EC]/95 backdrop-blur-md shadow-sm border-b border-[#D8C7A6]/40 py-3.5 text-[#12343B]'
            : 'bg-gradient-to-b from-[#12343B]/80 via-[#12343B]/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col items-start focus:outline-none"
            id="brand-logo-link"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.25em] font-medium uppercase transition-colors group-hover:text-[#B99A5B]">
                AZUREA
              </span>
            </div>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.3em] uppercase transition-colors ${
                scrolled ? 'text-[#12343B]/70' : 'text-white/80'
              }`}
            >
              {isRtl ? 'منتجع ساحلي خاص' : 'Private Coastal Resort'}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.14em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-all duration-300 hover:text-[#B99A5B] ${
                  scrolled ? 'text-[#12343B]/80 hover:text-[#B99A5B]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Language Switcher */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] tracking-wider font-semibold transition-all ${
                scrolled
                  ? 'border-[#D8C7A6] bg-white/70 text-[#12343B]'
                  : 'border-white/30 bg-black/20 text-white backdrop-blur-sm'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#B99A5B]" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === 'en'
                    ? 'text-[#B99A5B] font-bold'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="opacity-40">|</span>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === 'ar'
                    ? 'text-[#B99A5B] font-bold'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label="التبديل إلى العربية"
              >
                AR
              </button>
            </div>

            {/* Book Your Stay CTA */}
            <button
              type="button"
              id="nav-book-stay-button"
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-[#12343B] text-[#F7F3EC] hover:bg-[#1a464f] text-[11px] font-medium tracking-[0.2em] uppercase border border-[#B99A5B]/60 transition-all duration-300 hover:border-[#B99A5B] hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
            >
              {t('bookYourStay')}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile language switch */}
            <div
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium border ${
                scrolled
                  ? 'border-[#D8C7A6] text-[#12343B]'
                  : 'border-white/30 text-white'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="font-bold text-[#B99A5B]"
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>

            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                scrolled ? 'text-[#12343B]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#12343B]/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between p-8 pt-28 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="w-8 h-[1px] bg-[#B99A5B] mb-2" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#F7F3EC] hover:text-[#B99A5B] text-lg tracking-[0.2em] uppercase font-serif-luxury transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center gap-4 text-sm tracking-wider text-[#D8C7A6]">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'en' ? 'text-white bg-[#B99A5B]/30 font-semibold' : 'text-[#D8C7A6]'
              }`}
            >
              English
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'ar' ? 'text-white bg-[#B99A5B]/30 font-semibold' : 'text-[#D8C7A6]'
              }`}
            >
              العربية (RTL)
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full max-w-xs py-3.5 bg-[#B99A5B] text-[#12343B] font-semibold text-xs tracking-[0.22em] uppercase transition-all duration-300 hover:bg-[#d8c7a6]"
          >
            {t('bookYourStay')}
          </button>
        </div>
      </div>
    </>
  );
};
