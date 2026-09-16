import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ROOMS, EXTRA_OPTIONS } from '../data/resortData';
import { Room } from '../types';
import {
  X,
  Calendar,
  Users,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  BedDouble,
  Maximize,
  Eye,
  Info
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
  onClose,
}) => {
  const { t, isRtl, language } = useLanguage();
  const isAr = language === 'ar';

  const [step, setStep] = useState<number>(1);

  // Today + 14 days
  const today = new Date();
  const defCheckIn = new Date(today);
  defCheckIn.setDate(today.getDate() + 14);
  const defCheckOut = new Date(today);
  defCheckOut.setDate(today.getDate() + 18);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || formatDate(defCheckIn));
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || formatDate(defCheckOut));
  const [guests, setGuests] = useState<number>(initialGuests || 2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId || ROOMS[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  
  // Guest Details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Confirmation state
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialRoomId) {
      setSelectedRoomId(initialRoomId);
    }
  }, [initialRoomId]);

  if (!isOpen) return null;

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(1, dOut.getTime() - dIn.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  // Cost calculations
  const roomCost = selectedRoom.pricePerNight * nights;
  const extrasCost = selectedExtras.reduce((sum, extraId) => {
    const extra = EXTRA_OPTIONS.find((e) => e.id === extraId);
    if (!extra) return sum;
    if (extra.id === 'extra-breakfast') {
      return sum + extra.price * nights * guests;
    }
    return sum + extra.price;
  }, 0);
  const totalCost = roomCost + extrasCost;

  const handleNextStep = () => {
    if (step === 4) {
      // Validate guest details
      const newErrors: { [key: string]: string } = {};
      if (!firstName.trim()) newErrors.firstName = isAr ? 'يرجى إدخال الاسم الأول' : 'First name is required';
      if (!lastName.trim()) newErrors.lastName = isAr ? 'يرجى إدخال اسم العائلة' : 'Last name is required';
      if (!email.trim() || !email.includes('@')) newErrors.email = isAr ? 'بريد إلكتروني صالح مطلوب' : 'Valid email is required';
      if (!phone.trim()) newErrors.phone = isAr ? 'رقم الهاتف مطلوب' : 'Phone number is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      // Generate booking reference
      const randomRef = 'AZR-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setStep(5);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleReset = () => {
    setStep(1);
    setSelectedExtras([]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#12343B]/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#F7F3EC] text-[#12343B] border border-[#D8C7A6] shadow-2xl my-6 flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-[#12343B] text-white flex items-center justify-between border-b border-[#B99A5B]/40">
          <div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#D8C7A6] font-semibold block">
              {isAr ? 'حجز إقامة حصرية' : 'Exclusive Reservation'}
            </span>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#F7F3EC]">
              {t('bookingModalTitle')}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#D8C7A6] hover:text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar (Hidden on confirmation step) */}
        {step < 5 && (
          <div className="bg-[#FFFFFF] border-b border-[#D8C7A6]/50 px-4 sm:px-8 py-3">
            <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-[#12343B]">
              <span className={step >= 1 ? 'text-[#B99A5B] font-bold' : 'text-[#12343B]/40'}>
                {t('stepDates')}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D8C7A6]" />
              <span className={step >= 2 ? 'text-[#B99A5B] font-bold' : 'text-[#12343B]/40'}>
                {t('stepRoom')}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D8C7A6]" />
              <span className={step >= 3 ? 'text-[#B99A5B] font-bold' : 'text-[#12343B]/40'}>
                {t('stepExtras')}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#D8C7A6]" />
              <span className={step >= 4 ? 'text-[#B99A5B] font-bold' : 'text-[#12343B]/40'}>
                {t('stepDetails')}
              </span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          {/* STEP 1: Dates & Guests */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#12343B] font-normal mb-1">
                  {isAr ? 'حدد تواريخ إقامتك وعدد الضيوف' : 'Choose Your Stay Window'}
                </h3>
                <p className="text-xs text-[#12343B]/70 font-light">
                  {isAr ? 'استمتع بإقامة هادئة مع تسجيل وصول مرن' : 'Experience effortless coastal tranquility with flexible check-in times'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-white border border-[#D8C7A6]/50">
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B99A5B]" />
                    {t('checkIn')}
                  </label>
                  <input
                    type="date"
                    id="modal-check-in-date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="p-3 bg-[#F7F3EC] border border-[#D8C7A6]/60 text-sm focus:outline-none focus:border-[#B99A5B]"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B99A5B]" />
                    {t('checkOut')}
                  </label>
                  <input
                    type="date"
                    id="modal-check-out-date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="p-3 bg-[#F7F3EC] border border-[#D8C7A6]/60 text-sm focus:outline-none focus:border-[#B99A5B]"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B99A5B]" />
                    {t('guests')}
                  </label>
                  <select
                    id="modal-guests-count"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="p-3 bg-[#F7F3EC] border border-[#D8C7A6]/60 text-sm focus:outline-none focus:border-[#B99A5B]"
                  >
                    <option value={1}>1 {t('adults')}</option>
                    <option value={2}>2 {t('adults')}</option>
                    <option value={3}>3 {t('adults')}</option>
                    <option value={4}>4 {t('adults')}</option>
                    <option value={6}>6 {t('adults')}</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-white/70 border border-[#D8C7A6]/40 flex items-center justify-between text-xs text-[#12343B]/80">
                <span>{t('nightsCount')}: <strong className="text-[#12343B] font-semibold">{nights}</strong></span>
                <span className="text-[#B99A5B] font-medium">{isAr ? 'أدنى مدة إقامة ليلتان' : 'Minimum 2 nights recommended'}</span>
              </div>
            </div>
          )}

          {/* STEP 2: Select Room */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#12343B] font-normal mb-1">
                  {isAr ? 'اختر جناحك أو فيلتك الخاصة' : 'Select Your Sanctuary'}
                </h3>
                <p className="text-xs text-[#12343B]/70 font-light">
                  {isAr ? 'جميع الأجنحة والفلل تتمتع بإطلالات مباشرة على البحر المتوسط' : 'All accommodations offer unobstructed Mediterranean vistas and bespoke luxury'}
                </p>
              </div>

              <div className="space-y-4">
                {ROOMS.map((room) => {
                  const isSelected = selectedRoomId === room.id;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-4 sm:p-5 border transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center cursor-pointer ${
                        isSelected
                          ? 'border-[#B99A5B] bg-white shadow-md ring-1 ring-[#B99A5B]'
                          : 'border-[#D8C7A6]/60 bg-white/60 hover:bg-white hover:border-[#D8C7A6]'
                      }`}
                    >
                      <img
                        src={room.images[0]}
                        alt={isAr ? room.nameAr : room.name}
                        className="w-full sm:w-36 h-28 object-cover shrink-0"
                      />
                      <div className="flex-grow space-y-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <h4 className="font-serif-luxury text-xl font-medium text-[#12343B]">
                            {isAr ? room.nameAr : room.name}
                          </h4>
                          <span className="font-serif-luxury text-lg font-semibold text-[#12343B]">
                            ${room.pricePerNight} <span className="text-xs text-[#12343B]/60 font-sans">{t('perNight')}</span>
                          </span>
                        </div>
                        <p className="text-xs text-[#12343B]/75 line-clamp-1">
                          {isAr ? room.taglineAr : room.tagline}
                        </p>
                        <div className="flex flex-wrap gap-4 text-[11px] text-[#12343B]/60 pt-1">
                          <span>{room.size}</span>
                          <span>•</span>
                          <span>{room.guests} {t('adults')}</span>
                          <span>•</span>
                          <span>{isAr ? room.viewAr : room.view}</span>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-[#B99A5B] bg-[#B99A5B] text-white'
                              : 'border-[#D8C7A6] bg-transparent'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Optional Extras */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#12343B] font-normal mb-1">
                  {isAr ? 'عزز إقامتك بامتيازات استثنائية' : 'Elevate Your Sanctuary Experience'}
                </h3>
                <p className="text-xs text-[#12343B]/70 font-light">
                  {isAr ? 'خدمات إضافية منتقاة تمنحك أقصى درجات الراحة' : 'Optional bespoke privileges curated exclusively for your stay'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EXTRA_OPTIONS.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'border-[#B99A5B] bg-white shadow-md ring-1 ring-[#B99A5B]'
                          : 'border-[#D8C7A6]/60 bg-white/70 hover:bg-white hover:border-[#D8C7A6]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-serif-luxury text-lg font-medium text-[#12343B]">
                            {isAr ? extra.nameAr : extra.name}
                          </h4>
                          <p className="text-xs text-[#12343B]/70 font-light mt-1">
                            {isAr ? extra.descriptionAr : extra.description}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-1 transition-colors ${
                            isChecked
                              ? 'border-[#B99A5B] bg-[#B99A5B] text-white'
                              : 'border-[#D8C7A6] bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-[#D8C7A6]/40 flex justify-between items-baseline text-xs">
                        <span className="text-[#12343B]/60 uppercase tracking-wider">
                          {extra.id === 'extra-breakfast' ? (isAr ? 'لكل ضيف / يوم' : 'per guest / day') : (isAr ? 'للإقامة' : 'per stay')}
                        </span>
                        <span className="font-serif-luxury text-base font-semibold text-[#12343B]">
                          +${extra.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Guest Details & Summary */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#12343B] font-normal mb-1">
                  {t('guestDetailsTitle')}
                </h3>
                <p className="text-xs text-[#12343B]/70 font-light">
                  {isAr ? 'يرجى تزويدنا ببيانات التواصل لتأكيد حجز إقامتكم الفاخرة' : 'Please provide primary guest particulars for private arrival coordination'}
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white border border-[#D8C7A6]/50">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-1.5">
                    {t('firstName')} *
                  </label>
                  <input
                    type="text"
                    id="guest-first-name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName) setErrors({ ...errors, firstName: '' });
                    }}
                    placeholder="Alexander"
                    className={`w-full p-2.5 bg-[#F7F3EC] border text-xs focus:outline-none ${
                      errors.firstName ? 'border-red-400' : 'border-[#D8C7A6]/60 focus:border-[#B99A5B]'
                    }`}
                  />
                  {errors.firstName && <span className="text-[10px] text-red-500">{errors.firstName}</span>}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-1.5">
                    {t('lastName')} *
                  </label>
                  <input
                    type="text"
                    id="guest-last-name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (errors.lastName) setErrors({ ...errors, lastName: '' });
                    }}
                    placeholder="Sterling"
                    className={`w-full p-2.5 bg-[#F7F3EC] border text-xs focus:outline-none ${
                      errors.lastName ? 'border-red-400' : 'border-[#D8C7A6]/60 focus:border-[#B99A5B]'
                    }`}
                  />
                  {errors.lastName && <span className="text-[10px] text-red-500">{errors.lastName}</span>}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-1.5">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="guest-email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="alexander@domain.com"
                    className={`w-full p-2.5 bg-[#F7F3EC] border text-xs focus:outline-none ${
                      errors.email ? 'border-red-400' : 'border-[#D8C7A6]/60 focus:border-[#B99A5B]'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-1.5">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    id="guest-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+44 7911 123456"
                    className={`w-full p-2.5 bg-[#F7F3EC] border text-xs focus:outline-none ${
                      errors.phone ? 'border-red-400' : 'border-[#D8C7A6]/60 focus:border-[#B99A5B]'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500">{errors.phone}</span>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#12343B]/70 mb-1.5">
                    {t('specialNotes')}
                  </label>
                  <textarea
                    rows={2}
                    id="guest-special-requests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder={isAr ? 'أي متطلبات وصول، حميات غذائية، أو مناسبات خاصة...' : 'Dietary allergies, preferred champagne, yacht tender coordination...'}
                    className="w-full p-2.5 bg-[#F7F3EC] border border-[#D8C7A6]/60 text-xs focus:outline-none focus:border-[#B99A5B]"
                  />
                </div>
              </div>

              {/* Order Cost Breakdown Box */}
              <div className="p-5 bg-white border border-[#B99A5B]/40 space-y-2 text-xs">
                <div className="flex justify-between text-[#12343B]/80">
                  <span>{isAr ? selectedRoom.nameAr : selectedRoom.name} ({nights} {t('nightsCount')} x ${selectedRoom.pricePerNight})</span>
                  <span>${roomCost}</span>
                </div>
                {extrasCost > 0 && (
                  <div className="flex justify-between text-[#12343B]/80">
                    <span>{t('extrasTotal')}</span>
                    <span>+${extrasCost}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#D8C7A6]/50 flex justify-between items-baseline font-semibold text-sm text-[#12343B]">
                  <span>{t('estimatedTotal')}</span>
                  <span className="font-serif-luxury text-2xl text-[#12343B]">${totalCost}</span>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-3 bg-[#12343B]/5 border border-[#D8C7A6]/50 flex items-start gap-2 text-[11px] text-[#12343B]/75">
                <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
                <span>{t('demoNotice')}</span>
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation Screen */}
          {step === 5 && (
            <div className="py-8 flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-[#B99A5B]/20 rounded-full text-[#B99A5B]">
                <CheckCircle2 className="w-14 h-14" />
              </div>

              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99A5B] font-semibold block mb-1">
                  {t('bookingRef')}: <strong className="font-mono text-[#12343B] text-sm">{bookingRef}</strong>
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#12343B] font-normal">
                  {t('bookingConfirmed')}
                </h3>
                <p className="text-xs sm:text-sm text-[#12343B]/80 max-w-md mx-auto mt-2 leading-relaxed font-light">
                  {isAr
                    ? `أهلاً بك يا ${firstName} ${lastName}. لقد تم تسجيل حجز إقامتك الاستثنائية في منتجع أزوريا الساحلي.`
                    : `Welcome, ${firstName} ${lastName}. Your private coastal retreat at AZUREA has been seamlessly provisioned.`}
                </p>
              </div>

              {/* Summary Card */}
              <div className="w-full max-w-md bg-white border border-[#D8C7A6] p-6 text-left text-xs space-y-3 shadow-md">
                <div className="flex justify-between border-b border-[#D8C7A6]/40 pb-2">
                  <span className="text-[#12343B]/70">{t('selectedRoom')}</span>
                  <strong className="text-[#12343B]">{isAr ? selectedRoom.nameAr : selectedRoom.name}</strong>
                </div>
                <div className="flex justify-between border-b border-[#D8C7A6]/40 pb-2">
                  <span className="text-[#12343B]/70">Dates</span>
                  <span>{checkIn} → {checkOut} ({nights} {t('nightsCount')})</span>
                </div>
                <div className="flex justify-between border-b border-[#D8C7A6]/40 pb-2">
                  <span className="text-[#12343B]/70">{t('guests')}</span>
                  <span>{guests} {t('adults')}</span>
                </div>
                {selectedExtras.length > 0 && (
                  <div className="flex justify-between border-b border-[#D8C7A6]/40 pb-2">
                    <span className="text-[#12343B]/70">{t('extrasTotal')}</span>
                    <span>{selectedExtras.length} Selected</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 font-semibold text-sm">
                  <span>{t('estimatedTotal')}</span>
                  <span className="font-serif-luxury text-xl text-[#12343B]">${totalCost}</span>
                </div>
              </div>

              {/* Demonstration Disclaimer */}
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] max-w-md text-center rounded">
                {isAr
                  ? 'تنويه: هذا نموذج واجهة أمامية (Frontend Demo) لمحفظة الأعمال الاحترافية. لم يتم سحب أي مبالغ.'
                  : 'Frontend Demo Portfolio Notice: This confirmation simulation does not process live payment or create a real-world hotel reservation.'}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 bg-[#12343B] text-[#F7F3EC] hover:bg-[#1a464f] border border-[#B99A5B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
                >
                  {t('close')}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-transparent border border-[#D8C7A6] hover:bg-white text-[#12343B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
                >
                  {t('reset')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions (Steps 1 to 4) */}
        {step < 5 && (
          <div className="p-4 sm:p-6 bg-[#FFFFFF] border-t border-[#D8C7A6]/50 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-5 py-2.5 border border-[#D8C7A6] hover:bg-[#F7F3EC] text-[#12343B] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1.5"
              >
                {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                <span>{t('back')}</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-8 py-3 bg-[#12343B] hover:bg-[#1a464f] text-[#F7F3EC] border border-[#B99A5B] text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{step === 4 ? t('confirmBooking') : t('continue')}</span>
              {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
