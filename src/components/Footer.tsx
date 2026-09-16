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
    <footer className="bg-[#0b2126] text-[#F7F3EC] border-t border-[#D8C7A6]/30 overflow-hidden">
      {/* Upper Newsletter & Brand Ribbon */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-[#D8C7A6]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Essence */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#D8C7A6] font-bold block">
              {isAr ? 'الملاذ الساحلي الخاص' : 'Private Coastal Sanctuary'}
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium tracking-[0.1em]">
              AZUREA
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F3EC] leading-relaxed font-normal max-w-md">
              {isAr
                ? 'ملاذ متوسطي خاص صُمم للباحثين عن الصفاء، الضيافة الرفيعة، واللحظات الخالدة بين البحر والسماء.'
                : 'A secluded Mediterranean retreat crafted for those who value quiet cadence, bespoke hospitality, and boundless sea horizons.'}
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 bg-[#12343B] border-2 border-[#D8C7A6]/40 shadow-xl">
              <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#D8C7A6] block mb-1">
                {isAr ? 'نشرة أزوريا الفصلية' : 'The Azurian Dispatch'}
              </span>
              <p className="text-xs sm:text-sm text-[#F7F3EC] mb-4 font-normal">
                {isAr
                  ? 'اشترك لتلقي دعوات حصرية لأجنحة الموسم الجديد وتجارب الإبحار الخاصة.'
                  : 'Subscribe for private invitations, seasonal suite debuts, and maritime private dining.'}
              </p>

              {newsletterSuccess ? (
                <div className="flex items-center gap-2 p-3.5 bg-[#B99A5B]/30 border border-[#B99A5B] text-white text-xs font-semibold">
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
                      className="flex-grow px-4 py-3 bg-[#0b2126] border-2 border-[#D8C7A6]/50 text-white placeholder:text-[#D8C7A6]/70 text-xs font-medium focus:outline-none focus:border-[#D8C7A6]"
                    />
                    <button
                      type="submit"
                      id="newsletter-subscribe-btn"
                      className="px-6 py-3 bg-[#B99A5B] hover:bg-[#cbb075] text-[#0B2126] font-bold text-xs tracking-[0.2em] uppercase transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-98"
                    >
                      <span>{t('subscribe')}</span>
                      {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {newsletterError && <p className="text-[11px] text-red-300 font-semibold">{newsletterError}</p>}
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
            <h4 className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#D8C7A6]">
              {isAr ? 'دليل المنتجع' : 'Sanctuary Directory'}
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-xs text-[#F7F3EC] font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#D8C7A6] transition-colors py-0.5 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge & Contact */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#D8C7A6]">
              {isAr ? 'مكتب الاستقبال والحجوزات' : 'Private Reservations Desk'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F3EC] font-medium leading-relaxed">
              <p>{isAr ? CONTACT_INFO.addressAr : CONTACT_INFO.addressEn}</p>
              <p className="font-mono text-xs text-[#D8C7A6] font-semibold">{CONTACT_INFO.coordinates}</p>
              <p>Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-[#D8C7A6] font-semibold underline underline-offset-2">{CONTACT_INFO.phone}</a></p>
              <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-[#D8C7A6] font-semibold underline underline-offset-2">{CONTACT_INFO.email}</a></p>
            </div>
          </div>

          {/* Socials & Accreditations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#D8C7A6]">
              {isAr ? 'قنوات التواصل' : 'Social Presence'}
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-[#F7F3EC] font-medium">
              {CONTACT_INFO.socials.map((soc, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[#D8C7A6]/20 pb-1.5">
                  <span className="text-[#D8C7A6] font-semibold">{soc.name}</span>
                  <span className="text-white text-xs font-semibold">{soc.handle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Ribbon */}
        <div className="mt-16 pt-8 border-t border-[#D8C7A6]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C7A6] font-medium">
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
