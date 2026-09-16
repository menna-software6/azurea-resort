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
    <section id="spa" className="py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#0B2126] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D32] font-bold mb-3">
            {language === 'ar' ? 'العافية والصفاء الروحي' : 'Holistic Sanctuary'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-[#0B2126]">
            {t('spaHeading')}
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#0B2126] font-normal mt-3 max-w-2xl">
            {t('spaSubheading')}
          </p>
          <div className="w-16 h-[1.5px] bg-[#8C6D32] mt-6" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2126]/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#D8C7A6] font-bold block mb-1">
                  {language === 'ar' ? 'ملاذ العلاج بالمياه البحرية' : 'Thalassotherapy & Marine Botanicals'}
                </span>
                <p className="font-serif-luxury italic text-xl text-white drop-shadow">
                  {language === 'ar' ? 'استعادة التناغم الحقيقي بين الجسد والروح' : 'Quiet restoration aligned with the rhythm of the tides'}
                </p>
              </div>
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#F7F3EC] border-2 border-[#12343B]/20 p-5 shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 mb-2 text-[#8C6D32]">
                <Flower2 className="w-4 h-4" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#0B2126]">
                  {language === 'ar' ? 'مستخلصات برية نقية' : 'Organic Wild Flora'}
                </span>
              </div>
              <p className="text-xs text-[#18383F] font-medium leading-relaxed">
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
                    className={`p-6 border-2 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-[#8C6D32] bg-[#F7F3EC] shadow-lg'
                        : 'border-[#12343B]/15 bg-white hover:border-[#8C6D32] hover:bg-[#F7F3EC]/60 shadow-xs'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#0B2126] font-semibold tracking-wide">
                        {isAr ? treatment.nameAr : treatment.name}
                      </h3>
                      <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
                        <span className="flex items-center gap-1 text-[#0B2126] font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#8C6D32]" />
                          {isAr ? treatment.durationAr : treatment.duration}
                        </span>
                        <span className="font-serif-luxury text-lg font-bold text-[#0B2126]">
                          {treatment.price}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#18383F] leading-relaxed font-normal">
                      {isAr ? treatment.descriptionAr : treatment.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Action */}
            <div className="pt-6 border-t border-[#D8C7A6] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-xs text-[#0B2126] font-semibold flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#8C6D32] shrink-0" />
                <span>
                  {language === 'ar' ? 'جلسات مخصصة مع أخصائيي العافية العالميين' : 'Private consultations available with our resident wellness practitioners'}
                </span>
              </div>
              <button
                type="button"
                id="spa-book-treatment-btn"
                onClick={onBookTreatment}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0B2126] hover:bg-[#1a464f] text-white border border-[#B99A5B] text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300 hover:shadow-xl cursor-pointer whitespace-nowrap active:scale-95 shadow-sm"
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
