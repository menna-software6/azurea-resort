import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_CONTENT } from '../data/resortData';
import { Leaf, Award, Shield, Anchor } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#F7F3EC] text-[#12343B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {isAr ? 'عن منتجع أزوريا' : 'The Heritage'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.06em] text-[#0B2126] max-w-4xl">
            {isAr ? ABOUT_CONTENT.headingAr : ABOUT_CONTENT.headingEn}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
        </div>

        {/* Narrative & Architectural Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story Narrative on Left */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-[#8C6D32]">
                {isAr ? ABOUT_CONTENT.subheadingAr : ABOUT_CONTENT.subheadingEn}
              </span>
              <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#0B2126] font-medium leading-relaxed">
                “{isAr ? ABOUT_CONTENT.introAr : ABOUT_CONTENT.introEn}”
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#18383F] leading-relaxed font-normal">
              {isAr ? ABOUT_CONTENT.philosophyAr : ABOUT_CONTENT.philosophyEn}
            </p>

            {/* Sustainability Commitment Card */}
            <div className="p-6 bg-white border-2 border-[#12343B]/15 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#8C6D32]">
                <Leaf className="w-5 h-5 text-[#8C6D32]" />
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#0B2126]">
                  {isAr ? 'استدامة بيئية ورعاية بحرية' : 'Sustainable Coastal Stewardship'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed font-normal">
                {isAr ? ABOUT_CONTENT.sustainabilityAr : ABOUT_CONTENT.sustainabilityEn}
              </p>
            </div>

            {/* Accolades & Recognition */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#D8C7A6]">
              <div>
                <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0B2126]">
                  100%
                </span>
                <p className="text-xs tracking-wider uppercase text-[#0B2126] font-bold mt-1">
                  {isAr ? 'طاقة شمسية نظيفة' : 'Solar Microgrid'}
                </p>
              </div>
              <div>
                <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0B2126]">
                  32
                </span>
                <p className="text-xs tracking-wider uppercase text-[#0B2126] font-bold mt-1">
                  {isAr ? 'أجنحة وفلل حصرية' : 'Exclusive Keys'}
                </p>
              </div>
              <div>
                <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0B2126]">
                  2.4 km
                </span>
                <p className="text-xs tracking-wider uppercase text-[#0B2126] font-bold mt-1">
                  {isAr ? 'ساحل طبيعي محمي' : 'Pristine Shoreline'}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Architecture Showcase on Right */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden luxury-image-shadow bg-[#12343B]/5 group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
                alt="AZUREA Mediterranean Heritage"
                className="w-full h-[480px] sm:h-[580px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2126]/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 bg-[#0B2126] text-[#F7F3EC] p-6 border border-[#B99A5B] shadow-2xl max-w-xs">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8C7A6] font-bold block mb-1">
                {isAr ? 'فلسفة الضيافة' : 'Guiding Vision'}
              </span>
              <p className="font-serif-luxury italic text-sm text-white font-medium">
                {isAr ? '«الهدوء هو أرفع أشكال الفخامة»' : '“True stillness is the highest form of refinement”'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
