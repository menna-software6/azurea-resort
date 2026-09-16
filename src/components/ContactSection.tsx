import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/resortData';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = isAr ? 'يرجى إدخال الاسم الكريم' : 'Please provide your full name';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = isAr ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address';
    }
    if (!message.trim() || message.trim().length < 5) {
      newErrors.message = isAr ? 'يرجى كتابة رسالتكم' : 'Please compose your message or inquiry';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#12343B] text-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#D8C7A6] font-bold mb-3">
            {isAr ? 'التواصل المباشر' : 'Private Enquiries'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-white">
            {t('contactHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#F7F3EC] font-normal mt-3 max-w-2xl">
            {t('contactSubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#D8C7A6] mt-6" />
        </div>

        {/* Dual Layout: Contact Info & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details on Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
                {isAr ? 'فريق الضيافة في خدمتكم' : 'At Your Complete Disposal'}
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F3EC] leading-relaxed font-normal">
                {isAr
                  ? 'سواء كنتم تخططون لإقامة هادئة، أو مناسبة خاصة، أو وصول بحري، يسعد مستشارو الحجوزات بمرافقتكم في كل خطوة.'
                  : 'Whether arranging a secluded retreat, helicopter rendezvous, or bespoke culinary requests, our reservations team ensures an effortless journey.'}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 pt-4 border-t border-[#D8C7A6]/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0B2126] text-[#B99A5B] border border-[#D8C7A6]/40 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D8C7A6] font-bold block">{t('phoneLabel')}</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="font-serif-luxury text-xl text-white hover:text-[#D8C7A6] font-medium transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0B2126] text-[#B99A5B] border border-[#D8C7A6]/40 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D8C7A6] font-bold block">{t('emailLabel')}</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-serif-luxury text-xl text-white hover:text-[#D8C7A6] font-medium transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0B2126] text-[#B99A5B] border border-[#D8C7A6]/40 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D8C7A6] font-bold block">Location</span>
                  <p className="text-sm text-white font-medium leading-relaxed mt-0.5">
                    {isAr ? CONTACT_INFO.addressAr : CONTACT_INFO.addressEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links & Recognition */}
            <div className="pt-6 border-t border-[#D8C7A6]/30">
              <span className="text-[11px] uppercase tracking-widest text-[#D8C7A6] font-bold block mb-3">
                {isAr ? 'الملف الإعلامي والتواصل' : 'Press & Social Presence'}
              </span>
              <div className="flex flex-wrap gap-4 text-xs text-white">
                {CONTACT_INFO.socials.map((soc, idx) => (
                  <span key={idx} className="px-3.5 py-2 bg-[#0B2126] border border-[#D8C7A6]/40 text-white font-medium shadow-xs">
                    <span className="text-[#D8C7A6] font-bold mr-1.5">{soc.name}:</span>
                    {soc.handle}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form on Right */}
          <div className="lg:col-span-7 bg-[#18424a] border-2 border-[#D8C7A6]/40 p-8 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-[#B99A5B]/20 rounded-full text-[#B99A5B] mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium">
                  {isAr ? 'تم استلام استفساركم بنجاح' : 'Inquiry Received'}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F3EC] max-w-md leading-relaxed font-normal">
                  {t('messageSentSuccess')}
                </p>
                <div className="p-3 bg-[#0B2126] border border-[#D8C7A6]/40 text-xs text-[#F7F3EC] max-w-md text-left sm:text-center mt-2">
                  <span className="text-[#D8C7A6] font-bold block mb-0.5">
                    {isAr ? 'تنويه المحفظة البرمجية' : 'Portfolio Demonstration Notice'}
                  </span>
                  {isAr
                    ? 'هذا نموذج تفاعلي لواجهة المستخدم (Frontend Demo). لم يتم إرسال بريد إلكتروني فعلي.'
                    : 'This is an interactive frontend demo form with real validation. No real email is dispatched.'}
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 px-7 py-3 bg-white text-[#0B2126] hover:bg-[#F7F3EC] text-xs font-bold tracking-widest uppercase transition-colors shadow-md"
                >
                  {isAr ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#F7F3EC] mb-2">
                    {t('contactName')} *
                  </label>
                  <input
                    type="text"
                    id="contact-name-input"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder={isAr ? 'الاسم الكريم' : 'Lord / Lady / Full Name'}
                    className={`w-full px-4 py-3 bg-[#0B2126] border text-white placeholder:text-[#D8C7A6]/70 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400' : 'border-[#D8C7A6]/50 focus:border-[#D8C7A6]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-300 mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#F7F3EC] mb-2">
                    {t('contactEmail')} *
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="guest@luxury.com"
                    className={`w-full px-4 py-3 bg-[#0B2126] border text-white placeholder:text-[#D8C7A6]/70 text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-red-400' : 'border-[#D8C7A6]/50 focus:border-[#D8C7A6]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-300 mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#F7F3EC] mb-2">
                    {t('contactMessage')} *
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder={
                      isAr
                        ? 'أخبرنا بتفضيلات إقامتك، التواريخ المقترحة، أو أي متطلبات خاصة...'
                        : 'Share your intended dates, room preferences, or celebratory arrangements...'
                    }
                    className={`w-full px-4 py-3 bg-[#0B2126] border text-white placeholder:text-[#D8C7A6]/70 text-sm focus:outline-none transition-colors ${
                      errors.message ? 'border-red-400' : 'border-[#D8C7A6]/50 focus:border-[#D8C7A6]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-300 mt-1 font-medium">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-send-btn"
                    className="w-full py-4 bg-[#B99A5B] hover:bg-[#cbb075] text-[#0B2126] font-bold text-xs tracking-[0.22em] uppercase transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t('sendMessage')}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
