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
            ? 'bg-[#F7F3EC]/98 backdrop-blur-md shadow-md border-b border-[#D8C7A6]/70 py-3 text-[#0B2126]'
            : 'bg-gradient-to-b from-[#0B2126]/90 via-[#0B2126]/40 to-transparent py-5 text-white'
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
              <span
                className={`font-serif-luxury text-2xl sm:text-3xl tracking-[0.25em] font-semibold uppercase transition-colors ${
                  scrolled
                    ? 'text-[#0B2126] group-hover:text-[#8C6D32]'
                    : 'text-white group-hover:text-[#D8C7A6] drop-shadow'
                }`}
              >
                AZUREA
              </span>
            </div>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-semibold transition-colors ${
                scrolled ? 'text-[#12343B]' : 'text-white/95 drop-shadow-sm'
              }`}
            >
              {isRtl ? 'منتجع ساحلي خاص' : 'Private Coastal Resort'}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.16em] uppercase font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-all duration-200 ${
                  scrolled
                    ? 'text-[#0B2126] hover:text-[#8C6D32]'
                    : 'text-white hover:text-[#D8C7A6] drop-shadow-sm'
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
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] tracking-wider font-bold transition-all ${
                scrolled
                  ? 'border-[#12343B]/40 bg-white text-[#0B2126] shadow-xs'
                  : 'border-white/50 bg-[#0B2126]/60 text-white backdrop-blur-sm'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#B99A5B]" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === 'en'
                    ? scrolled
                      ? 'text-[#0B2126] bg-[#D8C7A6]/40 font-extrabold'
                      : 'text-white bg-white/25 font-extrabold'
                    : scrolled
                    ? 'text-[#12343B]/80 hover:text-[#0B2126]'
                    : 'text-white/80 hover:text-white'
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
                    ? scrolled
                      ? 'text-[#0B2126] bg-[#D8C7A6]/40 font-extrabold'
                      : 'text-white bg-white/25 font-extrabold'
                    : scrolled
                    ? 'text-[#12343B]/80 hover:text-[#0B2126]'
                    : 'text-white/80 hover:text-white'
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
              className="px-6 py-2.5 bg-[#0B2126] text-white hover:bg-[#1a464f] text-[11px] font-bold tracking-[0.22em] uppercase border border-[#B99A5B] transition-all duration-300 hover:shadow-lg cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
            >
              {t('bookYourStay')}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile language switch */}
            <div
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold border ${
                scrolled
                  ? 'border-[#12343B]/40 bg-white text-[#0B2126]'
                  : 'border-white/50 bg-[#0B2126]/60 text-white'
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
                scrolled ? 'text-[#0B2126]' : 'text-white drop-shadow'
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
