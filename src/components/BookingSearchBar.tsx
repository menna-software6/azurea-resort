import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ROOMS } from '../data/resortData';
import { Calendar, Users, Home, Search } from 'lucide-react';

interface BookingSearchBarProps {
  onSearch: (searchParams: { checkIn: string; checkOut: string; guests: number; roomId: string }) => void;
}

export const BookingSearchBar: React.FC<BookingSearchBarProps> = ({ onSearch }) => {
  const { t, isRtl, language } = useLanguage();

  // Sensible default dates: check-in 14 days from now, checkout 18 days
  const today = new Date();
  const defaultCheckInDate = new Date(today);
  defaultCheckInDate.setDate(today.getDate() + 14);
  const defaultCheckOutDate = new Date(today);
  defaultCheckOutDate.setDate(today.getDate() + 18);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDate(defaultCheckInDate));
  const [checkOut, setCheckOut] = useState<string>(formatDate(defaultCheckOutDate));
  const [guests, setGuests] = useState<number>(2);
  const [roomId, setRoomId] = useState<string>('ocean-view-suite');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      guests,
      roomId
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-[#12343B]/20 shadow-2xl p-4 sm:p-5 lg:p-6 text-[#0B2126]"
        id="hero-booking-search-form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Check-In */}
          <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-[#12343B]/15 pb-3 sm:pb-0 sm:pr-4">
            <label className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#0B2126] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8C6D32]" />
              {t('checkIn')}
            </label>
            <input
              type="date"
              id="search-check-in-input"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer text-[#0B2126]"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col border-b sm:border-b-0 lg:border-r border-[#12343B]/15 pb-3 sm:pb-0 sm:pr-4">
            <label className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#0B2126] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8C6D32]" />
              {t('checkOut')}
            </label>
            <input
              type="date"
              id="search-check-out-input"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer text-[#0B2126]"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-[#12343B]/15 pb-3 sm:pb-0 sm:pr-4">
            <label className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#0B2126] mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#8C6D32]" />
              {t('guests')}
            </label>
            <select
              id="search-guests-select"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="bg-transparent text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer text-[#0B2126]"
            >
              <option value={1}>1 {t('adults')}</option>
              <option value={2}>2 {t('adults')}</option>
              <option value={3}>3 {t('adults')}</option>
              <option value={4}>4 {t('adults')}</option>
              <option value={6}>6 {t('adults')}</option>
            </select>
          </div>

          {/* Room Selection */}
          <div className="flex flex-col pb-3 sm:pb-0">
            <label className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#0B2126] mb-1.5 flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-[#8C6D32]" />
              {t('room')}
            </label>
            <select
              id="search-room-select"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer truncate text-[#0B2126]"
            >
              <option value="any">{t('anyRoom')}</option>
              {ROOMS.map((room) => (
                <option key={room.id} value={room.id}>
                  {language === 'ar' ? room.nameAr : room.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-3 border-t border-[#12343B]/15 flex justify-end">
          <button
            type="submit"
            id="search-availability-submit-btn"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0B2126] text-white hover:bg-[#1a464f] text-xs font-bold tracking-[0.22em] uppercase border border-[#B99A5B] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <Search className="w-4 h-4 text-[#B99A5B]" />
            <span>{t('checkAvailability')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
