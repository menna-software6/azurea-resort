import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SPA_TREATMENTS } from '../data/resortData';
import { Clock, Sparkles, Flower2, HeartHandshake, CheckCircle } from 'lucide-react';

interface SpaSectionProps {
  onBookTreatment: () => void;
}

export const SpaSection: React.FC<SpaSectionProps> = ({ onBookTreatment }) => {
  const { t, isRtl, language } = useLanguage();
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);

  return (
    <section id="spa" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#12343B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B99A5B] font-semibold mb-3">
            {language === 'ar' ? 'العافية والصفاء الروحي' : 'Holistic Sanctuary'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#12343B]">
            {t('spaHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#12343B]/80 font-normal mt-3 max-w-2xl">
            {t('spaSubheading')}
          </p>
          <div className="w-16 h-[1px] bg-[#B99A5B]/60 mt-6" />
        </div>

        {/* Dual Layout: Imagery Showcase on Left, Treatment Rituals on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Spa Atmospheric Showcase */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden luxury-image-shadow bg-[#12343B]/5">
              <img
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=85"
                alt="AZUREA Spa Ritual Sanctuary"
                className="w-full h-[460px] sm:h-[560px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12343B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8C7A6] font-semibold block mb-1">
                  {language === 'ar' ? 'ملاذ العلاج بالمياه البحرية' : 'Thalassotherapy & Marine Botanicals'}
                </span>
                <p className="font-serif-luxury italic text-xl text-[#F7F3EC]">
                  {language === 'ar' ? 'استعادة التناغم الحقيقي بين الجسد والروح' : 'Quiet restoration aligned with the rhythm of the tides'}
                </p>
              </div>
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#F7F3EC] border border-[#D8C7A6] p-5 shadow-xl max-w-xs">
              <div className="flex items-center gap-2 mb-2 text-[#B99A5B]">
                <Flower2 className="w-4 h-4" />
                <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#12343B]">
                  {language === 'ar' ? 'مستخلصات برية نقية' : 'Organic Wild Flora'}
                </span>
              </div>
              <p className="text-xs text-[#12343B]/80 italic">
                {language === 'ar' ? 'زيوت إكليل الجبل واللافندر المقطرة يدوياً من حدائق المنتجع' : 'Locally distilled wild rosemary and Mediterranean lavender essences'}
              </p>
            </div>
          </div>

          {/* Treatment Menu on Right */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {SPA_TREATMENTS.map((treatment) => {
                const isAr = language === 'ar';
                const isSelected = selectedTreatmentId === treatment.id;

                return (
                  <div
                    key={treatment.id}
                    onClick={() => setSelectedTreatmentId(isSelected ? null : treatment.id)}
                    className={`p-6 border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-[#B99A5B] bg-[#F7F3EC] shadow-md'
                        : 'border-[#D8C7A6]/50 bg-white hover:border-[#D8C7A6] hover:bg-[#F7F3EC]/50'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#12343B] font-medium tracking-wide">
                        {isAr ? treatment.nameAr : treatment.name}
                      </h3>
                      <div className="flex items-center gap-4 text-xs font-semibold text-[#B99A5B] shrink-0">
                        <span className="flex items-center gap-1 text-[#12343B]/70 font-normal">
                          <Clock className="w-3.5 h-3.5 text-[#B99A5B]" />
                          {isAr ? treatment.durationAr : treatment.duration}
                        </span>
                        <span className="font-serif-luxury text-base text-[#12343B]">
                          {treatment.price}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#12343B]/80 leading-relaxed font-light">
                      {isAr ? treatment.descriptionAr : treatment.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Action */}
            <div className="pt-6 border-t border-[#D8C7A6]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-xs text-[#12343B]/70 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#B99A5B]" />
                <span>
                  {language === 'ar' ? 'جلسات مخصصة مع أخصائيي العافية العالميين' : 'Private consultations available with our resident wellness practitioners'}
                </span>
              </div>
              <button
                type="button"
                id="spa-book-treatment-btn"
                onClick={onBookTreatment}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#12343B] hover:bg-[#1a464f] text-[#F7F3EC] border border-[#B99A5B] text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 hover:shadow-lg cursor-pointer whitespace-nowrap active:scale-95"
              >
                {t('bookTreatment')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
