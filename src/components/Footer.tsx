import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/resortData';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const isAr = language === 'ar';

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterError(isAr ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
  };

  const navLinks = [
    { label: t('navSuites'), href: '#rooms' },
    { label: t('navExperiences'), href: '#experiences' },
    { label: t('navDining'), href: '#dining' },
    { label: t('navWellness'), href: '#spa' },
    { label: t('navOffers'), href: '#offers' },
    { label: t('navGallery'), href: '#gallery' },
    { label: t('navAbout'), href: '#about' },
    { label: t('navLocation'), href: '#location' },
    { label: t('navContact'), href: '#contact' },
  ];

  return (
    <footer className="bg-[#0b2126] text-[#F7F3EC] border-t border-[#D8C7A6]/20 overflow-hidden">
      {/* Upper Newsletter & Brand Ribbon */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-[#D8C7A6]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Essence */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold block">
              {isAr ? 'الملاذ الساحلي الخاص' : 'Private Coastal Sanctuary'}
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F7F3EC] font-normal tracking-[0.1em]">
              AZUREA
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C7A6]/80 leading-relaxed font-light max-w-md">
              {isAr
                ? 'ملاذ متوسطي خاص صُمم للباحثين عن الصفاء، الضيافة الرفيعة، واللحظات الخالدة بين البحر والسماء.'
                : 'A secluded Mediterranean retreat crafted for those who value quiet cadence, bespoke hospitality, and boundless sea horizons.'}
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6">
            <div className="p-6 bg-[#12343B]/60 border border-[#D8C7A6]/20">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B99A5B] block mb-1">
                {isAr ? 'نشرة أزوريا الفصلية' : 'The Azurian Dispatch'}
              </span>
              <p className="text-xs text-[#D8C7A6]/80 mb-4 font-light">
                {isAr
                  ? 'اشترك لتلقي دعوات حصرية لأجنحة الموسم الجديد وتجارب الإبحار الخاصة.'
                  : 'Subscribe for private invitations, seasonal suite debuts, and maritime private dining.'}
              </p>

              {newsletterSuccess ? (
                <div className="flex items-center gap-2 p-3 bg-[#B99A5B]/20 text-[#D8C7A6] text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A5B]" />
                  <span>
                    {isAr ? 'شكراً لاشتراككم. يسعدنا مشاركة عالم أزوريا معكم.' : 'Thank you. You have been added to our private correspondence.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      id="newsletter-email-input"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterError) setNewsletterError('');
                      }}
                      placeholder="patron@azurea-resort.com"
                      className="flex-grow px-4 py-2.5 bg-[#0b2126] border border-[#D8C7A6]/30 text-white text-xs focus:outline-none focus:border-[#B99A5B]"
                    />
                    <button
                      type="submit"
                      id="newsletter-subscribe-btn"
                      className="px-6 py-2.5 bg-[#B99A5B] hover:bg-[#d8c7a6] text-[#12343B] font-semibold text-xs tracking-[0.2em] uppercase transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t('subscribe')}</span>
                      {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                    </button>
                  </div>
                  {newsletterError && <p className="text-[11px] text-red-300">{newsletterError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Quick Nav */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B99A5B]">
              {isAr ? 'دليل المنتجع' : 'Sanctuary Directory'}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#D8C7A6]/80 font-light">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge & Contact */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B99A5B]">
              {isAr ? 'مكتب الاستقبال والحجوزات' : 'Private Reservations Desk'}
            </h4>
            <div className="space-y-2 text-xs text-[#D8C7A6]/80 font-light">
              <p>{isAr ? CONTACT_INFO.addressAr : CONTACT_INFO.addressEn}</p>
              <p className="font-mono text-[11px] text-[#B99A5B]">{CONTACT_INFO.coordinates}</p>
              <p>Phone: <span className="text-white">{CONTACT_INFO.phone}</span></p>
              <p>Email: <span className="text-white">{CONTACT_INFO.email}</span></p>
            </div>
          </div>

          {/* Socials & Accreditations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#B99A5B]">
              {isAr ? 'قنوات التواصل' : 'Social Presence'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#D8C7A6]/80 font-light">
              {CONTACT_INFO.socials.map((soc, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[#D8C7A6]/10 pb-1">
                  <span>{soc.name}</span>
                  <span className="text-white text-[11px]">{soc.handle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Ribbon */}
        <div className="mt-16 pt-8 border-t border-[#D8C7A6]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8C7A6]/60">
          <p>© {new Date().getFullYear()} AZUREA Private Coastal Resort. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Sanctuary</span>
            <span className="hover:text-white cursor-pointer transition-colors">Maritime Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
