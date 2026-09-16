import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES } from '../data/resortData';
import { Clock, Compass, ArrowRight, ArrowLeft } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const { t, isRtl, language } = useLanguage();
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experiences" className="py-24 sm:py-32 lg:py-40 bg-[#12343B] text-[#F7F3EC] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B99A5B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8C7A6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold mb-3">
            {language === 'ar' ? 'رحلات ولحظات استثنائية' : 'Immersive Escapes'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#F7F3EC]">
            {t('experiencesHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#D8C7A6]/90 font-normal mt-3 max-w-2xl">
            {t('experiencesSubheading')}
          </p>
          <div className="w-16 h-[1px] bg-[#B99A5B]/60 mt-6" />
        </div>

        {/* Editorial Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => {
            const isAr = language === 'ar';
            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveExpId(exp.id)}
                className="group relative bg-[#18424a] border border-[#D8C7A6]/20 overflow-hidden transition-all duration-500 hover:border-[#B99A5B]/80 hover:shadow-2xl"
              >
                {/* Image Aspect Box */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={isAr ? exp.titleAr : exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12343B] via-[#12343B]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#12343B]/80 text-[#D8C7A6] border border-[#B99A5B]/30 text-[9px] tracking-[0.25em] uppercase font-semibold">
                      {isAr ? exp.categoryAr : exp.category}
                    </span>
                  </div>

                  {/* Duration Badge if available */}
                  {exp.duration && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/40 backdrop-blur-xs text-[#D8C7A6] text-[10px] tracking-wider rounded">
                      <Clock className="w-3 h-3 text-[#B99A5B]" />
                      <span>{isAr ? exp.durationAr : exp.duration}</span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif-luxury text-2xl text-[#F7F3EC] font-medium tracking-wide group-hover:text-[#B99A5B] transition-colors">
                    {isAr ? exp.titleAr : exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C7A6]/80 leading-relaxed font-light line-clamp-3">
                    {isAr ? exp.descriptionAr : exp.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#B99A5B] group-hover:text-white transition-colors">
                    <span>{t('exploreMore')}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
