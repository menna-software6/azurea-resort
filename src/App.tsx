import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { RoomsSection } from './components/RoomsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DiningSection } from './components/DiningSection';
import { SpaSection } from './components/SpaSection';
import { OffersSection } from './components/OffersSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

const ResortAppContent: React.FC = () => {
  const { isRtl, language } = useLanguage();

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);
  const [bookingCheckIn, setBookingCheckIn] = useState<string | undefined>(undefined);
  const [bookingCheckOut, setBookingCheckOut] = useState<string | undefined>(undefined);
  const [bookingGuests, setBookingGuests] = useState<number | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomForBooking(roomId);
    setIsBookingOpen(true);
  };

  const handleSearchCheckAvailability = (checkIn: string, checkOut: string, guests: number) => {
    setBookingCheckIn(checkIn);
    setBookingCheckOut(checkOut);
    setBookingGuests(guests);
    setIsBookingOpen(true);
  };

  const handleBookOffer = (offerId: string) => {
    // Open booking modal prefilled
    setIsBookingOpen(true);
  };

  const handleBookTreatment = () => {
    // Open booking modal
    setIsBookingOpen(true);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#F7F3EC] text-[#12343B] selection:bg-[#B99A5B]/30 selection:text-[#12343B] ${
        isRtl ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* Luxury Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main View Portfolios */}
      <main id="main-content">
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onCheckAvailability={handleSearchCheckAvailability}
        />

        {/* Editorial Introduction Section */}
        <Introduction />

        {/* Accommodations: Suites & Villas */}
        <RoomsSection onBookRoom={(roomId) => handleOpenBooking(roomId)} />

        {/* Coastal Experiences & Activities */}
        <ExperiencesSection />

        {/* Culinary Arts & Dining Venues */}
        <DiningSection />

        {/* Wellness & Spa Rituals */}
        <SpaSection onBookTreatment={handleBookTreatment} />

        {/* Curated Privileges & Offers */}
        <OffersSection onBookOffer={handleBookOffer} />

        {/* Architectural Visual Portfolio & Lightbox */}
        <GallerySection />

        {/* Heritage, Philosophy, & Sustainability */}
        <AboutSection />

        {/* Coastal Map Placement & Arrival Logistics */}
        <LocationSection />

        {/* Direct Inquiries & Concierge Desk */}
        <ContactSection />
      </main>

      {/* Global Sanctuary Footer */}
      <Footer />

      {/* Full-Feature Frontend Demo Booking Engine */}
      <BookingModal
        isOpen={isBookingOpen}
        initialRoomId={selectedRoomForBooking}
        initialCheckIn={bookingCheckIn}
        initialCheckOut={bookingCheckOut}
        initialGuests={bookingGuests}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <ResortAppContent />
    </LanguageProvider>
  );
}
