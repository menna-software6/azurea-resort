import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Waves, Sun, Sparkles } from 'lucide-react';

export const Introduction: React.FC = () => {
  const { t, isRtl, language } = useLanguage();

  return (
    <section id="intro" className="py-24 sm:py-32 lg:py-40 bg-[#F7F3EC] text-[#0B2126] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Section Tag */}
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {language === 'ar' ? 'روح المكان' : 'The Essence of Sanctuary'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('introHeading')}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6 mb-8" />
        </div>

        {/* Editorial Text Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <p className="font-serif-luxury italic text-xl sm:text-2xl lg:text-3xl text-[#0B2126] leading-relaxed font-normal">
            “{t('introText')}”
          </p>
          <p className="mt-6 text-xs sm:text-sm tracking-[0.35em] uppercase text-[#8C6D32] font-bold">
            {t('introSignature')}
          </p>
        </div>

        {/* Dual High-End Architectural Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Large Image */}
          <div className="md:col-span-7 relative group">
            <div className="overflow-hidden luxury-image-shadow bg-[#12343B]/5">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85"
                alt="AZUREA Coastal Architecture and Terrace"
                className="w-full h-[420px] sm:h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* High-contrast caption */}
            <div className="mt-3 flex items-center justify-between text-xs tracking-wider text-[#0B2126] font-medium">
              <span>{language === 'ar' ? 'العمارة الساحلية المتناغمة' : 'Sculpted Limestone Terraces'}</span>
              <span className="font-mono text-[11px] text-[#8C6D32]">38° 42' N, 9° 25' W</span>
            </div>
          </div>

          {/* Secondary Stacked Image & Luxury Highlights */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="overflow-hidden luxury-image-shadow bg-[#12343B]/5 group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Private Sea Cove at AZUREA"
                className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Three Hallmarks of Luxury */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6 pt-4 border-t border-[#D8C7A6]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#0B2126]/10 text-[#8C6D32] shrink-0">
                  <Waves className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-xl text-[#0B2126] font-semibold tracking-wide">
                    {language === 'ar' ? 'خصوصية مطلقة' : 'Secluded Coastline'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed mt-1 font-normal">
                    {language === 'ar' ? 'شاطئ خاص يمتد على مساحة كيلومترين من الخلجان الطبيعية المحمية' : 'Two kilometers of protected Mediterranean waters and natural sea grottos'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#0B2126]/10 text-[#8C6D32] shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-xl text-[#0B2126] font-semibold tracking-wide">
                    {language === 'ar' ? 'فخامة معمارية هادئة' : 'Quiet Architecture'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed mt-1 font-normal">
                    {language === 'ar' ? 'أحجار كلسية مصقولة يدوياً وتراسات ممتدة تعكس ضياء الشمس' : 'Natural limestone, warm ivory textures, and uninterrupted horizon lines'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#0B2126]/10 text-[#8C6D32] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-xl text-[#0B2126] font-semibold tracking-wide">
                    {language === 'ar' ? 'خدمة مخصصة بالكامل' : 'Bespoke Hospitality'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed mt-1 font-normal">
                    {language === 'ar' ? 'كونسيرج شخصي متاح على مدار الساعة لتلبية أدق تفاصيل راحتكم' : 'Unobtrusive private butler service tailored precisely to your cadence'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
