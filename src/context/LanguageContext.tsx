import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand
    brandName: 'AZUREA',
    brandTagline: 'Private Coastal Resort',
    
    // Navigation
    navHome: 'Home',
    navRooms: 'Rooms',
    navExperiences: 'Experiences',
    navDining: 'Dining',
    navSpa: 'Spa',
    navOffers: 'Offers',
    navGallery: 'Gallery',
    navAbout: 'About',
    navContact: 'Contact',
    bookYourStay: 'BOOK YOUR STAY',
    
    // Hero
    heroOverline: 'ESCAPE TO THE BLUE',
    heroTagline: 'Where the Mediterranean meets quiet luxury',
    exploreAzurea: 'EXPLORE AZUREA',
    scrollDown: 'Scroll to immerse',
    
    // Search Bar
    checkIn: 'CHECK-IN',
    checkOut: 'CHECK-OUT',
    guests: 'GUESTS',
    room: 'ROOM',
    checkAvailability: 'CHECK AVAILABILITY',
    selectDates: 'Select dates',
    adults: 'Guests',
    anyRoom: 'All Suites & Villas',
    
    // Intro
    introHeading: 'A place to slow down',
    introText: 'Hidden between sea and sky, AZUREA is a private coastal retreat designed for those who value quiet moments, refined comfort, and unforgettable views. Here, time bends to the cadence of the Mediterranean surf, framed by hand-carved stone, warm ivory terraces, and centuries of architectural grace.',
    introSignature: 'The Sanctuary of Azure Serenity',
    
    // Rooms
    roomsHeading: 'ROOMS & SUITES',
    roomsSubheading: 'Stay where the horizon begins',
    from: 'From',
    perNight: '/ night',
    viewRoom: 'VIEW ROOM',
    bookThisRoom: 'BOOK THIS ROOM',
    sizeLabel: 'Size',
    guestsLabel: 'Guests',
    viewLabel: 'View',
    amenitiesLabel: 'Sanctuary Amenities',
    featuresLabel: 'Villa Privileges',
    
    // Experiences
    experiencesHeading: 'THE AZUREA EXPERIENCE',
    experiencesSubheading: 'Unscripted coastal moments curated for quiet reflection',
    exploreMore: 'Discover Experience',
    
    // Dining
    diningHeading: 'DINING',
    diningSubheading: 'Gastronomy rooted in Mediterranean soil, sea, and solar warmth',
    viewMenu: 'VIEW MENU',
    openingHours: 'Hours',
    dressCode: 'Attire',
    starters: 'Preludes & Raw Bar',
    mains: 'Coastal Mains',
    desserts: 'Sweet Confections',
    signatureCocktail: 'Signature Concoction',
    closeMenu: 'Close Menu',
    
    // Spa
    spaHeading: 'A RITUAL OF STILLNESS',
    spaSubheading: 'Marine botanicals, warm stone therapies, and deep oceanic calm',
    bookTreatment: 'BOOK A TREATMENT',
    treatmentDuration: 'Duration',
    treatmentPrice: 'Investment',
    
    // Offers
    offersHeading: 'CURATED PRIVILEGES',
    offersSubheading: 'Thoughtfully designed stays honoring the art of slow travel',
    viewOffer: 'VIEW OFFER',
    bookNow: 'BOOK NOW',
    includesLabel: 'Package Highlights',
    
    // Gallery
    galleryHeading: 'THE VISUAL ARCHIVE',
    gallerySubheading: 'Architecture, horizons, and intimate glimpses of coastal life',
    tabAll: 'ALL',
    tabRooms: 'ROOMS',
    tabBeach: 'BEACH',
    tabDining: 'DINING',
    tabSpa: 'SPA',
    tabExperiences: 'EXPERIENCES',
    imageOf: 'of',
    
    // About
    aboutHeading: 'MORE THAN A STAY / A PLACE TO REMEMBER',
    resortStory: 'The Story of AZUREA',
    architectureText: 'Carved seamlessly into ancient coastal cliffs',
    hospitalityText: 'Unobtrusive, bespoke Mediterranean hospitality',
    sustainabilityText: '100% sustainable solar energy and marine reef conservation',
    learnMore: 'Learn More',
    
    // Location
    locationHeading: 'THE COASTAL RETREAT',
    locationSubheading: 'Secluded Mediterranean Sanctuary',
    coordinatesLabel: 'Coordinates',
    accessBySea: 'Arrival by Private Yacht',
    accessByAir: 'Helipad Access Available',
    accessByRoad: '45 min from Nice International Airport',
    
    // Contact
    contactHeading: 'BEGIN YOUR JOURNEY',
    contactSubheading: 'Our dedicated reservations team is at your service',
    contactName: 'Full Name',
    contactEmail: 'Email Address',
    contactMessage: 'Message or Special Requests',
    sendMessage: 'SEND MESSAGE',
    messageSentSuccess: 'Thank you. Your message has been received with priority by our reservations team.',
    phoneLabel: 'Telephone',
    emailLabel: 'Direct Inquiries',
    conciergeLabel: 'Concierge Desk',
    
    // Booking Modal
    bookingModalTitle: 'RESERVE YOUR STAY',
    stepDates: '1. Dates & Guests',
    stepRoom: '2. Select Sanctuary',
    stepExtras: '3. Optional Privileges',
    stepDetails: '4. Guest Details',
    stepConfirmation: '5. Confirmation',
    selectedRoom: 'Selected Sanctuary',
    selectRoomPrompt: 'Please select a suite or villa to continue',
    nightsCount: 'Nights',
    baseRate: 'Sanctuary Rate',
    extrasTotal: 'Curated Enhancements',
    estimatedTotal: 'Total Estimated Stay',
    guestDetailsTitle: 'Primary Guest Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    specialNotes: 'Personal Preferences & Dietary Notes',
    confirmBooking: 'CONFIRM RESERVATION',
    bookingConfirmed: 'YOUR STAY IS CONFIRMED',
    bookingRef: 'Booking Reference',
    demoNotice: 'Portfolio Demonstration: No payment is charged and no real booking is placed.',
    close: 'Close',
    back: 'Back',
    continue: 'Continue',
    reset: 'Start New Booking'
  },
  ar: {
    // Brand
    brandName: 'أزوريا',
    brandTagline: 'منتجع ساحلي خاص',
    
    // Navigation
    navHome: 'الرئيسية',
    navRooms: 'الأجنحة والفلل',
    navExperiences: 'التجارب',
    navDining: 'المطاعم',
    navSpa: 'السبا',
    navOffers: 'العروض',
    navGallery: 'معرض الصور',
    navAbout: 'عن أزوريا',
    navContact: 'اتصل بنا',
    bookYourStay: 'احجز إقامتك',
    
    // Hero
    heroOverline: 'الهروب إلى زرقة المتوسط',
    heroTagline: 'حيث يلتقي هدوء البحر مع أسمى معايير الفخامة',
    exploreAzurea: 'استكشف أزوريا',
    scrollDown: 'مرر لأسفل للاستكشاف',
    
    // Search Bar
    checkIn: 'تسجيل الوصول',
    checkOut: 'تسجيل المغادرة',
    guests: 'عدد الضيوف',
    room: 'نوع الإقامة',
    checkAvailability: 'التحقق من التوفر',
    selectDates: 'اختر التواريخ',
    adults: 'ضيوف',
    anyRoom: 'جميع الأجنحة والفلل',
    
    // Intro
    introHeading: 'ملاذ للسكينة والهدوء',
    introText: 'بين صفحة البحر وعنان السماء، يقف أزوريا كملاذ ساحلي خاص صُمم خصيصاً لأولئك الذين ينشدون لحظات السكينة، والراحة الرفيعة، والإطلالات الساحرة التي تسكن الذاكرة. هنا يتباطأ الزمن ليتناغم مع إيقاع أمواج المتوسط الهادئة، وسط جدران حجرية منحوتة وتراسات عاجية تنبض بالدفء.',
    introSignature: 'ملاذ السكينة والزرقة الخالدة',
    
    // Rooms
    roomsHeading: 'الأجنحة والفلل الفاخرة',
    roomsSubheading: 'إقامة حيث يبدأ الأفق اللانهائي',
    from: 'ابتداءً من',
    perNight: '/ ليلة',
    viewRoom: 'تفاصيل الإقامة',
    bookThisRoom: 'احجز هذا الجناح',
    sizeLabel: 'المساحة',
    guestsLabel: 'السعة',
    viewLabel: 'الإطلالة',
    amenitiesLabel: 'وسائل الراحة الحصرية',
    featuresLabel: 'امتيازات الفيلا',
    
    // Experiences
    experiencesHeading: 'تجارب أزوريا الحصرية',
    experiencesSubheading: 'لحظات ساحلية منتقاة بعناية لصفاء الذهن واستعادة الهدوء',
    exploreMore: 'اكتشف التجربة',
    
    // Dining
    diningHeading: 'فنون الطهي والمطاعم',
    diningSubheading: 'مأكولات متوسطية مستوحاة من خيرات البحر والشمس والتربة الخصبة',
    viewMenu: 'استعراض قائمة الطعام',
    openingHours: 'ساعات العمل',
    dressCode: 'طبيعة اللباس',
    starters: 'المقبلات والأطباق الباردة',
    mains: 'الأطباق الرئيسية الساحلية',
    desserts: 'الحلويات الراقية',
    signatureCocktail: 'المشروب المميز للمطعم',
    closeMenu: 'إغلاق القائمة',
    
    // Spa
    spaHeading: 'طقوس السكينة والعافية',
    spaSubheading: 'مستخلصات نباتية بحرية، أحجار دافئة، وهدوء بحري عميق',
    bookTreatment: 'حجز جلسة استرخاء',
    treatmentDuration: 'المدة',
    treatmentPrice: 'السعر',
    
    // Offers
    offersHeading: 'عروض وامتيازات خاصة',
    offersSubheading: 'باقات إقامة مدروسة تحتفي بفلسفة السفر المتمهل والراقي',
    viewOffer: 'تفاصيل العرض',
    bookNow: 'احجز الآن',
    includesLabel: 'مزايا الباقة',
    
    // Gallery
    galleryHeading: 'الأرشيف البصري',
    gallerySubheading: 'ملامح معمارية، آفاق بحرية، ولحظات آسرة من الحياة الساحلية',
    tabAll: 'الكل',
    tabRooms: 'الأجنحة',
    tabBeach: 'الشاطئ',
    tabDining: 'المطاعم',
    tabSpa: 'السبا',
    tabExperiences: 'التجارب',
    imageOf: 'من',
    
    // About
    aboutHeading: 'أكثر من مجرد إقامة / ذكرى لا تُنسى',
    resortStory: 'قصة منتجع أزوريا',
    architectureText: 'منحوت بانسيابية في المنحدرات الساحلية القديمة',
    hospitalityText: 'ضيافة متوسطية راقية ومخصصة لكل ضيف',
    sustainabilityText: 'طاقة شمسية نظيفة 100% وحماية كاملة للشعاب الساحلية',
    learnMore: 'اقرأ المزيد',
    
    // Location
    locationHeading: 'الموقع والوصول',
    locationSubheading: 'ملاذ ساحلي منعزل على البحر الأبيض المتوسط',
    coordinatesLabel: 'الإحداثيات الجغرافية',
    accessBySea: 'الوصول باليخت الخاص إلى المرسى',
    accessByAir: 'منصة هبوط طائرات مروحية متوفرة',
    accessByRoad: '45 دقيقة من مطار نيس الدولي',
    
    // Contact
    contactHeading: 'ابدأ رحلتك معنا',
    contactSubheading: 'فريق الحجوزات الخاص في خدمتكم على مدار الساعة',
    contactName: 'الاسم الكامل',
    contactEmail: 'البريد الإلكتروني',
    contactMessage: 'الرسالة أو الرغبات الخاصة',
    sendMessage: 'إرسال الرسالة',
    messageSentSuccess: 'شكراً لك. تم استلام طلبكم بعناية وسيتم الرد عليكم فوراً من قبل فريق الحجوزات.',
    phoneLabel: 'الهاتف المباشر',
    emailLabel: 'الاستفسارات العامة',
    conciergeLabel: 'مكتب الكونسيرج',
    
    // Booking Modal
    bookingModalTitle: 'حجز إقامتك الخاصة',
    stepDates: '1. التواريخ والضيوف',
    stepRoom: '2. اختيار الجناح أو الفيلا',
    stepExtras: '3. الامتيازات الإضافية',
    stepDetails: '4. بيانات الضيف',
    stepConfirmation: '5. تأكيد الحجز',
    selectedRoom: 'الإقامة المختارة',
    selectRoomPrompt: 'يرجى اختيار جناح أو فيلا للمتابعة',
    nightsCount: 'عدد الليالي',
    baseRate: 'سعر الإقامة الأساسي',
    extrasTotal: 'الامتيازات المختارة',
    estimatedTotal: 'إجمالي تكلفة الإقامة التقديرية',
    guestDetailsTitle: 'بيانات الضيف الأساسي',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    specialNotes: 'تفضيلات خاصة وملاحظات غذائية',
    confirmBooking: 'تأكيد الحجز النهائي',
    bookingConfirmed: 'تم تأكيد حجز إقامتك بنجاح',
    bookingRef: 'رقم الحجز المرجعي',
    demoNotice: 'نسخة تجريبية للمحفظة: لا يتم فرض أي رسوم مالية حقيقية.',
    close: 'إغلاق',
    back: 'السابق',
    continue: 'متابعة',
    reset: 'بدء حجز جديد'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const isRtl = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
