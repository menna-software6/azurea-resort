export type Language = 'en' | 'ar';

export interface Room {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  pricePerNight: number;
  guests: number;
  size: string;
  bedType: string;
  bedTypeAr: string;
  view: string;
  viewAr: string;
  images: string[];
  amenities: { en: string; ar: string }[];
  features: { en: string; ar: string }[];
}

export interface Experience {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  duration?: string;
  durationAr?: string;
}

export interface MenuItem {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  nameAr: string;
  subheading: string;
  subheadingAr: string;
  description: string;
  descriptionAr: string;
  hours: string;
  hoursAr: string;
  dressCode: string;
  dressCodeAr: string;
  image: string;
  menuPreview: {
    starters: MenuItem[];
    mains: MenuItem[];
    desserts: MenuItem[];
    signatureCocktail: MenuItem;
  };
}

export interface SpaTreatment {
  id: string;
  name: string;
  nameAr: string;
  duration: string;
  durationAr: string;
  price: string;
  description: string;
  descriptionAr: string;
}

export interface Offer {
  id: string;
  title: string;
  titleAr: string;
  badge: string;
  badgeAr: string;
  nights: string;
  nightsAr: string;
  description: string;
  descriptionAr: string;
  included: { en: string; ar: string }[];
  image: string;
  startingPrice: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleAr: string;
  category: 'ROOMS' | 'BEACH' | 'DINING' | 'SPA' | 'EXPERIENCES';
  image: string;
  caption: string;
  captionAr: string;
}

export interface ExtraOption {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  description: string;
  descriptionAr: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  extras: string[];
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
}
