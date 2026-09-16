import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/resortData';
import { MapPin, Navigation, Anchor, Plane, Car, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section id="location" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#0B2126]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {isAr ? 'الموقع الجغرافي والوصول' : 'Geographic Placement'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('locationHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#0B2126] font-normal mt-3 max-w-2xl">
            {t('locationSubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
        </div>

        {/* Map & Arrival Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Architectural Static Map Presentation */}
          <div className="lg:col-span-7 bg-[#F7F3EC] border-2 border-[#12343B]/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px] shadow-sm">
            {/* Compass Rose & Coordinate Header */}
            <div className="flex items-center justify-between border-b border-[#12343B]/20 pb-4 z-10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B2126]">
                <Compass className="w-4 h-4 text-[#8C6D32]" />
                <span className="tracking-widest font-mono text-xs">{CONTACT_INFO.coordinates}</span>
              </div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#8C6D32] font-bold">
                {isAr ? 'الريفييرا المتوسطية' : 'Mediterranean Riviera'}
              </span>
            </div>

            {/* Stylized Vector Topographic Coastal Map */}
            <div className="relative my-8 py-12 flex items-center justify-center">
              <svg
                viewBox="0 0 600 340"
                className="w-full h-auto max-h-[260px] text-[#0B2126]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coastal Contours */}
                <path
                  d="M10,40 Q150,90 280,60 T580,90"
                  stroke="#8C6D32"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M0,140 Q140,210 300,160 T600,200"
                  stroke="#12343B"
                  strokeWidth="2"
                />
                <path
                  d="M0,220 Q160,280 340,230 T600,280"
                  stroke="#0B2126"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />
                {/* Sea Depth Wave Lines */}
                <path
                  d="M100,260 Q200,280 320,260 T520,270"
                  stroke="#8C6D32"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                />
                {/* Coastal Cliffs Landmark */}
                <circle cx="340" cy="180" r="42" fill="#8C6D32" fillOpacity="0.15" />
                <circle cx="340" cy="180" r="24" fill="#8C6D32" fillOpacity="0.3" />
                <circle cx="340" cy="180" r="7" fill="#0B2126" />
                <circle cx="340" cy="180" r="3" fill="#8C6D32" />

                {/* Marker Callout */}
                <rect x="240" y="102" width="200" height="46" fill="#0B2126" rx="3" stroke="#8C6D32" strokeWidth="1" />
                <text x="340" y="122" fill="#FFFFFF" fontSize="12" fontFamily="serif" textAnchor="middle" letterSpacing="2" fontWeight="bold">
                  AZUREA RESORT
                </text>
                <text x="340" y="137" fill="#D8C7A6" fontSize="8.5" textAnchor="middle" letterSpacing="1.5" fontWeight="bold">
                  PRIVATE REEF & HARBOR
                </text>
                <line x1="340" y1="148" x2="340" y2="173" stroke="#0B2126" strokeWidth="2" />

                {/* Nearby Navigational Points */}
                <circle cx="120" cy="90" r="4" fill="#0B2126" />
                <text x="120" y="80" fill="#0B2126" fontSize="10" fontWeight="bold" textAnchor="middle">
                  St. Jean Cape
                </text>

                <circle cx="510" cy="110" r="4" fill="#0B2126" />
                <text x="510" y="98" fill="#0B2126" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Esterel Bay
                </text>

                {/* Maritime Depth Soundings */}
                <text x="210" y="240" fill="#0B2126" opacity="0.7" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  42m
                </text>
                <text x="440" y="230" fill="#0B2126" opacity="0.7" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  68m
                </text>
              </svg>
            </div>

            {/* Map Footer Information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#12343B]/20 pt-4 text-xs text-[#0B2126] z-10 font-medium">
              <span className="font-bold">{isAr ? CONTACT_INFO.addressAr : CONTACT_INFO.addressEn}</span>
              <span className="text-[#8C6D32] font-bold tracking-wider">
                {isAr ? 'مرسى يخوت مجهز بالكامل' : 'Superyacht Draft Approved (6m)'}
              </span>
            </div>
          </div>

          {/* Access & Arrival Privileges */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 bg-[#F7F3EC] border-2 border-[#12343B]/20 flex flex-col justify-between h-full space-y-6 shadow-sm">
              <div>
                <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#8C6D32] block mb-2">
                  {isAr ? 'خيارات الوصول المريحة' : 'Arrival Pathways'}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0B2126] font-medium">
                  {isAr ? 'وصول سلس إلى ملاذك الخاص' : 'Effortless Arrival to Stillness'}
                </h3>
              </div>

              <div className="space-y-5">
                {/* Sea Transfer */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-white border-2 border-[#12343B]/15 text-[#8C6D32] shrink-0 shadow-xs">
                    <Anchor className="w-5 h-5 text-[#8C6D32]" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                      {t('accessBySea')}
                    </h4>
                    <p className="text-xs text-[#18383F] leading-relaxed mt-1 font-normal">
                      {isAr
                        ? 'مرسى خاص آمن يستقبل اليخوت حتى طول 65 متراً مع خدمات التزود والصيانة وطاقم الاستقبال.'
                        : 'Private deep-water tender marina accommodating vessels up to 65m with full mooring service and shore power.'}
                    </p>
                  </div>
                </div>

                {/* Air Transfer */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-white border-2 border-[#12343B]/15 text-[#8C6D32] shrink-0 shadow-xs">
                    <Plane className="w-5 h-5 text-[#8C6D32]" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                      {t('accessByAir')}
                    </h4>
                    <p className="text-xs text-[#18383F] leading-relaxed mt-1 font-normal">
                      {isAr
                        ? 'منصة هليكوبتر خاصة معتمدة لهبوط الطائرات المروحية المباشر من مطارات نيس أو كان أو موناكو.'
                        : 'On-site cliffside helipad for direct 12-minute transfers from Nice, Cannes, or Monaco.'}
                    </p>
                  </div>
                </div>

                {/* Road Transfer */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-white border-2 border-[#12343B]/15 text-[#8C6D32] shrink-0 shadow-xs">
                    <Car className="w-5 h-5 text-[#8C6D32]" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                      {t('accessByRoad')}
                    </h4>
                    <p className="text-xs text-[#18383F] leading-relaxed mt-1 font-normal">
                      {isAr
                        ? 'أسطول سيارات رولز رويس ومايباخ مع سائق خاص متاح لنقل الضيوف من وإلى المطارات ومحطات القطار السريع.'
                        : 'Complimentary private Mercedes Maybach chauffeur service upon request from nearby private aviation terminals.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coordinates Pill */}
              <div className="pt-4 border-t border-[#12343B]/20 flex items-center justify-between text-xs text-[#0B2126] font-bold">
                <span className="uppercase tracking-widest">{t('coordinatesLabel')}</span>
                <span className="font-mono text-[#0B2126] text-xs">{CONTACT_INFO.coordinates}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
