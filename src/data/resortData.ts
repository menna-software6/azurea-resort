import { Room, Experience, DiningVenue, SpaTreatment, Offer, GalleryItem, ExtraOption } from '../types';

export const RESORT_NAME = 'AZUREA';
export const RESORT_TAGLINE_EN = 'Private Coastal Resort';
export const RESORT_TAGLINE_AR = 'منتجع ساحلي خاص';

export const ROOMS: Room[] = [
  {
    id: 'ocean-view-suite',
    name: 'Ocean View Suite',
    nameAr: 'جناح الإطلالة البحرية',
    category: 'Suites',
    categoryAr: 'الأجنحة',
    tagline: 'Panoramic azure vistas and gentle sea breezes',
    taglineAr: 'إطلالات بحرية بانورامية مع نسيم المتوسط الهادئ',
    description: 'Perched along the natural limestone cliffside, the Ocean View Suite offers an intimate sanctuary where minimalist Mediterranean design meets timeless coastal serenity. Expansive floor-to-ceiling glass reveals uninterrupted horizons of the blue sea.',
    descriptionAr: 'يتربع جناح الإطلالة البحرية على المنحدرات الكلسية الطبيعية ليمنحك ملاذاً هادئاً يجمع بين بساطة التصميم المتوسطي والأناقة الساحلية الخالدة. نوافذ ممتدة من الأرض إلى السقف تكشف آفاق البحر اللا متناهية.',
    pricePerNight: 420,
    guests: 2,
    size: '75 m² / 807 sq ft',
    bedType: 'King bed with Egyptian cotton linens',
    bedTypeAr: 'سرير كينغ مع أغطية من القطن المصري الفاخر',
    view: 'Unobstructed Mediterranean Sea',
    viewAr: 'إطلالة مباشرة على البحر الأبيض المتوسط',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
    ],
    amenities: [
      { en: 'Private sea-view terrace with daybed', ar: 'شرفة خاصة مطلة على البحر مع سرير استرخاء' },
      { en: 'Freestanding marble soaking tub', ar: 'حوض استحمام رخامي مستقل بإطلالة بحرية' },
      { en: 'Bespoke organic botanical amenities', ar: 'مستحضرات استحمام عضوية مصممة حصرياً' },
      { en: 'Dyson Supersonic hair styling system', ar: 'مصفف شعر دايسون سوبرسونيك' },
      { en: 'Curated artisanal mini-bar and wine cellar', ar: 'بار ومشروبات ومختارات نبيذ منتقاة' },
      { en: 'Twice-daily housekeeping with evening turndown', ar: 'خدمة ترتيب الغرف مرتين يومياً مع تجهيز المساء' }
    ],
    features: [
      { en: 'High-speed encrypted fiber WiFi', ar: 'إنترنت فائق السرعة عبر الألياف البصرية' },
      { en: 'Sonos architectural sound system', ar: 'نظام صوتي معماري متطور من سونوس' },
      { en: 'Dedicated 24-hour coastal concierge', ar: 'مساعد كونسيرج ساحلي مخصص على مدار الساعة' }
    ]
  },
  {
    id: 'private-pool-villa',
    name: 'Private Pool Villa',
    nameAr: 'فيلا المسبح الخاص',
    category: 'Villas',
    categoryAr: 'الفلل',
    tagline: 'Secluded waterfront sanctuary with heated infinity pool',
    taglineAr: 'ملاذ ساحلي معزول مع مسبح لا متناهي مدفأ',
    description: 'Surrounded by fragrant jasmine and ancient olive groves, the Private Pool Villa provides ultimate privacy. Unwind in your sunken outdoor lounge or submerge into your turquoise horizon pool overlooking the coastline.',
    descriptionAr: 'تحيط بها حدائق الياسمين العطرة وأشجار الزيتون المعمرة، لتوفر فيلا المسبح الخاص أقصى درجات الخصوصية والسكينة. استرخِ في الجلسة الخارجية الغائرة أو اسبح في مسبحك الفيروزي المطل على الأفق البحري.',
    pricePerNight: 680,
    guests: 3,
    size: '145 m² / 1,560 sq ft',
    bedType: 'California King + private daybed salon',
    bedTypeAr: 'سرير كاليفورنيا كينغ مع صالون استرخاء خاص',
    view: 'Private infinity pool and coastal cliff',
    viewAr: 'مسبح خاص مع إطلالة الجرف والساحل',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    ],
    amenities: [
      { en: 'Private 12-meter heated salt infinity pool', ar: 'مسبح مياه مالحة مدفأ بطول 12 متراً' },
      { en: 'Sunken fireside outdoor lounge', ar: 'مجلس خارجي غائر مع مدفأة حجرية' },
      { en: 'Outdoor rain shower under olive trees', ar: 'دش مطري في الهواء الطلق بين أشجار الزيتون' },
      { en: 'In-villa private chef dining upon request', ar: 'إمكانية إعداد العشاء بواسطة طاهٍ خاص داخل الفيلا' },
      { en: 'Champagne welcome with Mediterranean caviar', ar: 'استقبال فاخر مع مشروب ترحيبي وكافيار متوسطي' },
      { en: 'Complimentary private beach cabana', ar: 'كابانا شاطئية خاصة ومجانية طوال فترة الإقامة' }
    ],
    features: [
      { en: 'Sub-Zero gourmet kitchen', ar: 'مطبخ عصري مجهز بأحدث التجهيزات' },
      { en: 'Private motorized electric buggy', ar: 'عربة كهربائية خاصة للتنقل في أرجاء المنتجع' },
      { en: 'Personal butler service', ar: 'خدمة نادل شخصي مخصص' }
    ]
  },
  {
    id: 'azure-presidential-villa',
    name: 'Azure Presidential Villa',
    nameAr: 'فيلا أزور الرئاسية',
    category: 'Exclusive Estate',
    categoryAr: 'الجناح الملكي الرئاسي',
    tagline: 'The pinnacle of Mediterranean architectural prestige',
    taglineAr: 'قمة الفخامة المعمارية والخصوصية المتوسطية',
    description: 'Standing proudly on AZUREA’s most secluded promontory, the Azure Presidential Villa is our crown jewel. Designed for discerning royal and executive guests, it features double-height stone walls, two master wings, an oversized dual-level infinity pool, and a private helicopter pad access.',
    descriptionAr: 'تقف فيلا أزور الرئاسية بشموخ على أعلى نتوء ساحلي خاص لتكون درة تاج أزوريا. صُممت للنخبة وكبار الشخصيات، وتضم جناحين رئيسيين منفصلين، جدراناً حجرية مزدوجة الارتفاع، مسبحاً لا متناهياً من مستويين، ومنصة خاصة لهبوط المروحيات.',
    pricePerNight: 1200,
    guests: 6,
    size: '380 m² / 4,090 sq ft',
    bedType: 'Two Master Suites with bespoke King beds',
    bedTypeAr: 'جناحان رئيسيان بسريرين كينغ مصممين يدوياً',
    view: '360° Coastal cliffs, private cove, and open sea',
    viewAr: 'إطلالة بانورامية 360 درجة على الجرف والخليج الخاص',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    ],
    amenities: [
      { en: 'Dual-level tiered infinity pool with sea cave', ar: 'مسبح لا متناهي متدرج من مستويين مع كهف مائي' },
      { en: 'Private wellness spa wing with Finnish sauna', ar: 'جناح سبا خاص مع ساونا فنلندية وغرفة بخار' },
      { en: 'Direct gated path to a private secluded cove', ar: 'ممر خاص ومحمي يؤدي مباشرة إلى خليج رملي منعزل' },
      { en: 'Dedicated executive chef & sommelier', ar: 'طاهٍ تنفيذي وخبير مشروبات متفرغان بالكامل' },
      { en: 'Rolls-Royce or yacht airport chauffeur', ar: 'نقل بسيارة رولز رويس أو يخت خاص من المطار' },
      { en: 'Private wine cellar stocked with Grand Crus', ar: 'قبو خاص يضم أندر أصناف المشروبات المعتقة' }
    ],
    features: [
      { en: 'Private screening theater & library', ar: 'صالة سينما ومكتبة قراءة خاصة' },
      { en: 'Helipad direct transfer access', ar: 'إمكانية الهبوط المباشر على منصة الطائرات المروحية' },
      { en: '24-hour discreet security protection', ar: 'حراسة وأمن خاص على مدار 24 ساعة بأعلى درجات السرية' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'private-beach',
    title: 'Private Beach',
    titleAr: 'الشاطئ الخاص',
    category: 'Coastal Sanctuary',
    categoryAr: 'ملاذ ساحلي',
    description: 'Powder-soft golden sands framed by dramatic Mediterranean limestone. Enjoy cushioned cabanas, attentive beach attendants, and crystal-clear waters.',
    descriptionAr: 'رمال ذهبية ناعمة تحيط بها المنحدرات الكلسية المهيبة. استمتع بكابانات مريحة، وخدمة استثنائية، ومياه بلورية صافية.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    duration: 'All Day',
    durationAr: 'طوال اليوم'
  },
  {
    id: 'infinity-pool',
    title: 'Infinity Pool',
    titleAr: 'المسبح اللا متناهي',
    category: 'Architectural Water',
    categoryAr: 'تصميم مائي استثنائي',
    description: 'Seamlessly merging with the Mediterranean horizon, our 50-meter temperature-regulated pool is carved directly into the cliff edge.',
    descriptionAr: 'يمتزج مسبحنا المنحوت في حافة الجرف بطول 50 متراً والمضبوط حرارياً مع أفق البحر المتوسط في لوحة بصرية ساحرة.',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=85',
    duration: '07:00 – 21:00',
    durationAr: '07:00 – 21:00'
  },
  {
    id: 'sunset-cruise',
    title: 'Sunset Cruise',
    titleAr: 'رحلة غروب الشمس باليخت',
    category: 'Nautical Journey',
    categoryAr: 'رحلة بحرية خاصة',
    description: 'Board the resort’s custom Riva yacht as golden hour paints the sea in shades of copper, amber, and deep azure. Served with chilled champagne and freshly shucked oysters.',
    descriptionAr: 'انطلق على متن يخت ريفا الخاص بالمنتجع بينما تلوّن شمس الأصيل صفحة المياه بتدرجات الذهب والنحاس والأزرق الملكي.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    duration: '3 Hours',
    durationAr: '3 ساعات'
  },
  {
    id: 'fine-dining-experience',
    title: 'Fine Dining',
    titleAr: 'تجربة الطهي الرفيع',
    category: 'Gastronomy',
    categoryAr: 'فنون الطهي',
    description: 'Michelin-starred culinary artistry celebrating wild coastal herbs, morning line-caught Mediterranean seafood, and hand-pressed vintage olive oils.',
    descriptionAr: 'إبداعات طهي حاصلة على نجوم ميشلان تحتفي بالأعشاب البرية العطرية، وصيد الصباح الطازج، وزيت الزيتون البكر المعصور يدوياً.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    duration: 'Evening Service',
    durationAr: 'الفترة المسائية'
  },
  {
    id: 'spa-experience',
    title: 'Spa Sanctuary',
    titleAr: 'ملاذ السبا الشامل',
    category: 'Holistic Wellness',
    categoryAr: 'عافية شاملة',
    description: 'Ancient marine thalassotherapy rituals, essential oils distilled from local coastal rosemary, and treatments designed to slow heart rates and soothe the senses.',
    descriptionAr: 'طقوس العلاج بمياه البحر النقية، والزيوت المستخلصة من إكليل الجبل البري، لتجديد طاقة الجسد واستعادة التوازن العميق.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    duration: 'Custom Rituals',
    durationAr: 'جلسات مخصصة'
  },
  {
    id: 'water-sports',
    title: 'Water Sports',
    titleAr: 'الرياضات البحرية الهادئة',
    category: 'Adventure',
    categoryAr: 'مغامرات بحرية',
    description: 'Explore hidden sea grottos with electric sea bobs, glide silently on carbon-fiber paddleboards, or sail private windcatamarans along the coastal reserve.',
    descriptionAr: 'استكشف المغارات البحرية الخفية بمعدات سي بوب الكهربائية، أو تجول بألواح التجديف المصنوعة من ألياف الكربون في محمية الساحل.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85',
    duration: 'Upon Request',
    durationAr: 'حسب الطلب'
  },
  {
    id: 'private-excursions',
    title: 'Private Excursions',
    titleAr: 'جولات استكشافية خاصة',
    category: 'Heritage & Discovery',
    categoryAr: 'تراث واستكشاف',
    description: 'Private helicopter flights over ancient coastal ruins, guided vineyard tastings at historic hillside estates, and secluded cliffside picnic lunches prepared by our culinary team.',
    descriptionAr: 'رحلات هليكوبتر فوق الآثار الساحلية القديمة، وجولات خاصة لتذوق محاصيل المزارع التاريخية، ونزهات استثنائية في قمم التلال.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    duration: 'Half or Full Day',
    durationAr: 'نصف يوم أو يوم كامل'
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'onda',
    name: 'ONDA',
    nameAr: 'أوندا',
    subheading: 'Mediterranean Restaurant',
    subheadingAr: 'مطعم البحر الأبيض المتوسط',
    description: 'An open-air amphitheater of taste overlooking the waves. ONDA captures the pure essence of the Mediterranean, combining the freshest catches of the day with ancestral grilling techniques over aromatic citrus wood.',
    descriptionAr: 'مسرح مفتوح للنكهات يطل مباشرة على الأمواج المتكسرة. يجسد أوندا جوهر المطبخ المتوسطي الأصيل، مجمعاً بين صيد اليوم الطازج وتقنيات الشواء التقليدي على خشب أشجار الحمضيات العطرة.',
    hours: '12:30 – 15:30 | 19:30 – 23:00',
    hoursAr: '12:30 – 15:30 | 19:30 – 23:00',
    dressCode: 'Resort Elegant',
    dressCodeAr: 'أناقة المنتجع الراقية',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    menuPreview: {
      starters: [
        {
          name: 'Carpaccio di Spigola',
          nameAr: 'كارباتشيو سمك القاروص',
          description: 'Wild sea bass, Amalfi lemon pearls, cold-pressed green olive oil, sea salt',
          descriptionAr: 'قاروص بري، حبيبات ليمون أمالفي، زيت زيتون أخضر معصور على البارد، ملح بحري',
          price: '$38'
        },
        {
          name: 'Burrata Pugliese Affumicata',
          nameAr: 'بوراتا بوليزية مدخنة',
          description: 'Heirloom sun-ripened tomatoes, sweet basil emulsion, 25-year balsamic',
          descriptionAr: 'طماطم ناضجة تحت الشمس، مستحلب الريحان العطري، خل بلسمي معتق 25 عاماً',
          price: '$34'
        }
      ],
      mains: [
        {
          name: 'Dentice in Crosta di Sale',
          nameAr: 'سمك النهاش الأحمر المغلف بملح البحر',
          description: 'Wild Mediterranean red snapper baked whole in aromatic herb salt crust',
          descriptionAr: 'سمك النهاش الأحمر مخبوز بالكامل داخل غلاف من ملح البحر والأعشاب المتوسطية',
          price: '$85'
        },
        {
          name: 'Tagliolini al Tartufo Estivo',
          nameAr: 'تاليوليني بالكمأة الصيفية',
          description: 'Handmade yolk pasta, cultured alpine butter, shaved black summer truffles',
          descriptionAr: 'باستا طازجة محضرة يدوياً، زبدة جبلية، رقائق الكمأة الصيفية السوداء',
          price: '$68'
        }
      ],
      desserts: [
        {
          name: 'Soufflé al Limone di Sorrento',
          nameAr: 'سوفليه ليمون سورينتو',
          description: 'Warm citrus soufflé, Madagascar vanilla bean gelato, candied peel',
          descriptionAr: 'سوفليه دافئ بالليمون الفواح، جيلاتو فانيليا مدغشقر، قشور حمضيات مكرملة',
          price: '$24'
        }
      ],
      signatureCocktail: {
        name: 'The Azure Breeze',
        nameAr: 'نسيم أزور الأزرق',
        description: 'Botanical coastal gin, bergamot liqueur, clarified coastal tonic, fresh rosemary sprig',
        descriptionAr: 'مستخلصات نباتية ساحلية، ليكيور البرغموت العطري، تونيك نقي، عرق إكليل الجبل الطازج',
        price: '$26'
      }
    }
  },
  {
    id: 'sora',
    name: 'SORA',
    nameAr: 'سورا',
    subheading: 'Rooftop Dining',
    subheadingAr: 'مطعم التراس العلوي',
    description: 'Perched on the highest point of the resort, SORA unites Japanese omakase precision with Mediterranean freshness. Dine under a canopy of stars with 360-degree views of the coastline.',
    descriptionAr: 'يتربع سورا على أعلى نقطة في المنتجع ليمزج بين دقة الأوماكاسي اليابانية ونضارة المكونات المتوسطية. تجربة طعام حالمة تحت سماء مرصعة بالنجوم مع إطلالة 360 درجة على الساحل.',
    hours: '18:30 – 00:00 (Dinner & Cocktails)',
    hoursAr: '18:30 – 00:00 (عشاء ومشروبات)',
    dressCode: 'Smart Casual Chic',
    dressCodeAr: 'ملابس أنيقة ومريحة',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
    menuPreview: {
      starters: [
        {
          name: 'Bluefin Toro Tartare',
          nameAr: 'تارتار التونة ذات الزعانف الزرقاء',
          description: 'Oscietra caviar, dashi shoyu, crisp nori cracker, gold leaf',
          descriptionAr: 'كافيار أوسيترا، صلصة الداشي شويو، مقرمشات نوري، رقائق الذهب الخالص',
          price: '$52'
        },
        {
          name: 'Hamachi with Yuzu Truffle',
          nameAr: 'سمك الهاماتشي مع صوص اليوزو والكمأة',
          description: 'Yellowtail slices, white truffle essence, serrano pepper, micro shiso',
          descriptionAr: 'شرائح السمك الأبيض، خلاصة الكمأة البيضاء، فلفل سيرانو، أوراق الشيسو الدقيقة',
          price: '$42'
        }
      ],
      mains: [
        {
          name: 'A5 Miyazaki Wagyu Ribeye',
          nameAr: 'لحم واغيو ميازاكي درجة A5',
          description: 'Charred over binchotan charcoal, smoked wasabi butter, sea salt flakes',
          descriptionAr: 'مشوي على فحم البينشوتان الياباني، زبدة الواسابي المدخنة، رقائق الملح البحري',
          price: '$140'
        },
        {
          name: 'Glazed Black Cod in White Miso',
          nameAr: 'سمك القد الأسود بصلصة الميسو الأبيض',
          description: 'Marinated for 72 hours in Saikyo miso, pickled baby ginger',
          descriptionAr: 'متبل لمدة 72 ساعة في ميسو سايكيو الحلو، زنجبيل مخلل ناعم',
          price: '$78'
        }
      ],
      desserts: [
        {
          name: 'Matcha Fondant Noir',
          nameAr: 'فوندان الماتشا والشوكولاتة الداكنة',
          description: 'Molten organic Uji matcha center, yuzu sorbet, sesame tuile',
          descriptionAr: 'حلوى الشوكولاتة الذائبة مع قلب الماتشا العضوي وسوربيه اليوزو المنعش',
          price: '$26'
        }
      ],
      signatureCocktail: {
        name: 'Sora Twilight Highball',
        nameAr: 'هاي بول الشفق من سورا',
        description: 'Japanese single malt whisky, smoked cedar smoke, artisanal soda, dried yuzu wheel',
        descriptionAr: 'مشروب ياباني فاخر مع دخان خشب الأرز، صودا نقية، وشريحة يوزو مجففة',
        price: '$28'
      }
    }
  },
  {
    id: 'the-cove',
    name: 'THE COVE',
    nameAr: 'ذا كوف',
    subheading: 'Beach Bar',
    subheadingAr: 'بار الشاطئ الراقي',
    description: 'Barefoot luxury beside gentle surf. Sip artisanal cocktails, savor chilled crudo, and unwind to ambient acoustic sounds as the sun dips into the tranquil azure waters.',
    descriptionAr: 'فخامة هادئة بدون تكلف بمحاذاة أمواج البحر الهادئة. تذوق المشروبات المبتكرة وأطباق الكرودو الباردة على وقع النغمات الموسيقية الهادئة لحظة غروب الشمس.',
    hours: '10:00 – Sunset (20:30)',
    hoursAr: '10:00 – حتى مغيب الشمس (20:30)',
    dressCode: 'Beach Chic',
    dressCodeAr: 'أزياء شاطئية أنيقة',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    menuPreview: {
      starters: [
        {
          name: 'Oysters on Crushed Ice',
          nameAr: 'محار طازج على الثلج المجروش',
          description: 'Half-dozen Brittany fines de claire, shallot mignonette, fresh citrus',
          descriptionAr: 'نصف درزن من محار بريتاني الفاخر، صلصة الشالوت والخل، حمضيات طازجة',
          price: '$45'
        },
        {
          name: 'Crispy Calamari Fritti',
          nameAr: 'كالاماري مقرمش على الطريقة المتوسطية',
          description: 'Tender squid, saffron aioli, grilled lemon, smoked paprika',
          descriptionAr: 'حبار طري، أيولي الزعفران، ليمون مشوي، بابريكا مدخنة',
          price: '$28'
        }
      ],
      mains: [
        {
          name: 'The Cove Grilled Lobster Roll',
          nameAr: 'شطيرة لوبستر ذا كوف المشوية',
          description: 'Warm butter-poached Maine lobster, brioche roll, tarragon mayo',
          descriptionAr: 'لحم اللوبستر المطهو بالزبدة الفاخرة، خبز بريوش محمص، مايونيز الطرخون',
          price: '$48'
        },
        {
          name: 'Mediterranean Mezze Board',
          nameAr: 'تشكيلة المازة المتوسطية',
          description: 'Whipped feta, smoked eggplant mutabal, kalamata tapenade, warm pita',
          descriptionAr: 'جبن الفيتا المخفوق، متبل الباذنجان المدخن، معجون زيتون كالاماتا، خبز دافئ',
          price: '$36'
        }
      ],
      desserts: [
        {
          name: 'Frozen Granita al Caffè',
          nameAr: 'جرانيتا القهوة الإيطالية المثلجة',
          description: 'Espresso granita, sweet whipped mascarpone, chocolate shards',
          descriptionAr: 'جرانيتا قهوة الإسبريسو المثلجة، كريمة ماسكاربوني محلاة، قطع شوكولاتة',
          price: '$18'
        }
      ],
      signatureCocktail: {
        name: 'Mediterranean Spritz',
        nameAr: 'سبريتز المتوسط الحصري',
        description: 'Italicus bergamot, crisp prosecco, green olive, fresh thyme',
        descriptionAr: 'مشروب إيتاليكوس بنكهة البرغموت، بروسيكو فوار، زيتون أخضر وزعتر بري',
        price: '$22'
      }
    }
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'deep-coastal-massage',
    name: 'Deep Coastal Renewal Massage',
    nameAr: 'تدليك التجدد الساحلي العميق',
    duration: '90 Minutes',
    durationAr: '90 دقيقة',
    price: '$260',
    description: 'Therapeutic pressure combining warm heated volcanic stones with cold-pressed rosemary and sweet almond oils to dissolve deep tension.',
    descriptionAr: 'ضغط علاجي يدمج بين الأحجار البركانية الساخنة وزيوت إكليل الجبل واللوز الحلو لإذابة التوتر واستعادة راحة العضلات.'
  },
  {
    id: 'marine-collagen-facial',
    name: 'Marine Collagen Radiance Facial',
    nameAr: 'جلسة نضارة الكولاجين البحري للوجه',
    duration: '75 Minutes',
    durationAr: '75 دقيقة',
    price: '$240',
    description: 'Purifying bio-marine peptides, cold sea-kelp infusion, and gentle lymphatic drainage leave the complexion luminous, lifted, and hydrated.',
    descriptionAr: 'ببتيدات بحرية منقية ومستخلصات عشب البحر البارد مع تدليك تصريف لمفاوي يمنح البشرة نضارة وتألقاً فورياً.'
  },
  {
    id: 'mediterranean-salt-scrub',
    name: 'Mediterranean Salt & Botanical Body Polish',
    nameAr: 'تقشير الجسم بملح البحر والأعشاب النباتية',
    duration: '60 Minutes',
    durationAr: '60 دقيقة',
    price: '$195',
    description: 'Mineral-rich sea salt crystals harvested from local salt flats blended with lavender and citrus oils for whole-body velvet softness.',
    descriptionAr: 'بلورات الملح البحري الغنية بالمعادن الممزوجة بزيوت اللافندر والحمضيات لتقشير لطيف يمنح الجسم نعومة الحرير.'
  },
  {
    id: 'private-couples-suite',
    name: 'Private Sunset Spa Suite Ritual',
    nameAr: 'طقوس جناح السبا الخاص للأزواج',
    duration: '150 Minutes',
    durationAr: '150 دقيقة',
    price: '$580',
    description: 'Exclusive use of the cliffside private hydrotherapy pool, synchronized couples massage, bottle of Dom Pérignon, and fresh artisan treats.',
    descriptionAr: 'استخدام حصري لمسبح العلاج المائي الخاص المطل على الجرف، تدليك متزامن للأزواج، مشروب ترحيبي فاخر وفواكه طازجة.'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'romantic-escape',
    title: 'ROMANTIC ESCAPE',
    titleAr: 'الملاذ الرومانسي الحالم',
    badge: 'Couples Retreat',
    badgeAr: 'إقامة رومانسية خاصة',
    nights: '3 Nights',
    nightsAr: '3 ليالٍ',
    description: 'An idyllic romantic sanctuary designed for celebrations of love, anniversaries, and honeymooners along the azure sea.',
    descriptionAr: 'إقامة رومانسية لا تُنسى مصممة خصيصاً للاحتفال بلحظات الحب، وشهر العسل، والذكرى السنوية أمام أمواج البحر الصافية.',
    included: [
      { en: 'Three nights in a luxury Ocean View Suite or Pool Villa', ar: 'إقامة 3 ليالٍ في جناح مطل على البحر أو فيلا بمسبح' },
      { en: 'Candlelit 5-course private dinner on the beach', ar: 'عشاء شاطئي رومانسي خاص من 5 أطباق على ضوء الشموع' },
      { en: 'Couples 90-minute signature spa ritual with champagne', ar: 'جلسة سبا فاخرة للأزواج مدتها 90 دقيقة مع مشروب ترحيبي' },
      { en: 'Daily gourmet champagne breakfast in bed or terrace', ar: 'إفطار فاخر يومي يُقدم في السرير أو على الشرفة الخاصة' }
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    startingPrice: 1850
  },
  {
    id: 'summer-at-azurea',
    title: 'SUMMER AT AZUREA',
    titleAr: 'صيف أزوريا الذهبي',
    badge: 'Seasonal Privilege',
    badgeAr: 'ميزة الموسم الحصرية',
    nights: '4 Nights',
    nightsAr: '4 ليالٍ',
    description: 'Bask in long sun-drenched days, crisp sea breezes, and private yacht journeys across secret Mediterranean coves.',
    descriptionAr: 'استمتع بأيام الصيف المشمسة، ونسيم البحر العليل، ورحلات اليخوت الخاصة لاستكشاف الخلجان المتوسطية السرية.',
    included: [
      { en: 'Four nights of pure coastal villa luxury', ar: 'إقامة 4 ليالٍ من الفخامة الساحلية المطلقة في إحدى الفلل' },
      { en: 'Daily artisanal breakfast buffet at ONDA', ar: 'إفطار يومي متكامل من أطايب المطبخ المتوسطي في مطعم أوندا' },
      { en: 'Reserved front-row private beach cabana with fresh fruit and evian spritz', ar: 'كابانا شاطئية محجوزة في الصف الأمامي مع فواكه طازجة' },
      { en: 'Complimentary 2-hour sunset yacht cruise', ar: 'رحلة يخت مجانية لمدة ساعتين عند مغيب الشمس' }
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    startingPrice: 2400
  },
  {
    id: 'wellness-retreat',
    title: 'WELLNESS RETREAT',
    titleAr: 'برنامج استعادة العافية والسكينة',
    badge: 'Body & Soul Balance',
    badgeAr: 'توازن الجسد والروح',
    nights: '5 Nights',
    nightsAr: '5 ليالٍ',
    description: 'A transformative immersion focused on restorative sleep, coastal movement, detoxifying nutrition, and quiet contemplation.',
    descriptionAr: 'رحلة استشفاء شاملة تركز على النوم العميق، والحركة الهادئة، والتغذية الصحية العضوية المنقية، والتأمل التأملي.',
    included: [
      { en: 'Five nights in a quiet secluded cliffside villa', ar: 'إقامة 5 ليالٍ في فيلا هادئة ومنعزلة على حافة الجرف' },
      { en: 'Daily personalized spa & hydrotherapy treatments', ar: 'علاجات سبا يومية مخصصة وعلاج مائي متطور' },
      { en: 'Private sunrise yoga and breathwork sessions', ar: 'جلسات يوغا خاصة عند شروق الشمس وتمارين تنفس واعية' },
      { en: 'Customized farm-to-table wellness menu consultation', ar: 'قائمة طعام صحية مخصصة من منتجات المزارع العضوية' }
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
    startingPrice: 3200
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Cliffside Infinity Edge',
    titleAr: 'حافة المسبح اللا متناهي المعلقة',
    category: 'EXPERIENCES',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=85',
    caption: 'Where heated turquoise water flows seamlessly into the Mediterranean Sea',
    captionAr: 'حيث تتدفق المياه الفيروزية الصافية بانسيابية نحو أفق البحر المتوسط'
  },
  {
    id: 'g-2',
    title: 'Azure Presidential Villa Living Salon',
    titleAr: 'صالون فيلا أزور الرئاسية',
    category: 'ROOMS',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    caption: 'Airy double-height limestone architecture and panoramic coastal glass',
    captionAr: 'عمارة كلسية مزدوجة الارتفاع مع واجهات زجاجية بانورامية'
  },
  {
    id: 'g-3',
    title: 'The Private Beach at Dawn',
    titleAr: 'الشاطئ الخاص مع أول خيوط الفجر',
    category: 'BEACH',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    caption: 'Pristine secluded golden sands before the first morning light',
    captionAr: 'رمال ذهبية بكر مع سكون الصباح الأول'
  },
  {
    id: 'g-4',
    title: 'Candlelit Dining at ONDA',
    titleAr: 'أمسية على ضوء الشموع في مطعم أوندا',
    category: 'DINING',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    caption: 'Culinary mastery paired with gentle sound of crashing coastal surf',
    captionAr: 'إبداع طهي راقٍ يتناغم مع صوت الأمواج الهادئة'
  },
  {
    id: 'g-5',
    title: 'Holistic Spa Sanctuary Suite',
    titleAr: 'جناح السبا والهدوء الطبيعي',
    category: 'SPA',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=85',
    caption: 'Natural stone water basins and soothing herbal infusions',
    captionAr: 'أحواض حجرية طبيعية مع عبق الأعشاب العطرية المهدئة'
  },
  {
    id: 'g-6',
    title: 'Private Sunset Riva Yacht',
    titleAr: 'يخت ريفا الخاص عند مغيب الشمس',
    category: 'EXPERIENCES',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    caption: 'Cruising through secluded coastal grottos under golden evening skies',
    captionAr: 'إبحار بين الكهوف الساحلية الساحرة تحت سماء الغروب الذهبية'
  },
  {
    id: 'g-7',
    title: 'Ocean View Suite Balcony',
    titleAr: 'شرفة جناح الإطلالة البحرية',
    category: 'ROOMS',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85',
    caption: 'Gentle sea breezes and comfortable teak loungers',
    captionAr: 'نسيم البحر العليل ومقاعد خشب الساج المريحة للاسترخاء'
  },
  {
    id: 'g-8',
    title: 'SORA Starlit Rooftop Terrace',
    titleAr: 'تراس سورا العلوي تحت أضواء النجوم',
    category: 'DINING',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
    caption: 'Sublime artisanal cocktails and Mediterranean night air',
    captionAr: 'مشروبات مبتكرة ونكهات يابانية متوسطية تحت السماء المفتوحة'
  },
  {
    id: 'g-9',
    title: 'Private Pool Villa Patio',
    titleAr: 'فناء فيلا المسبح الخاص',
    category: 'ROOMS',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    caption: 'Sunken fireside lounge overlooking private heated water',
    captionAr: 'جلسة خارجية غائرة تطل على مسبح خاص بمياه دافئة'
  }
];

export const EXTRA_OPTIONS: ExtraOption[] = [
  {
    id: 'extra-breakfast',
    name: 'Artisanal Champagne Breakfast',
    nameAr: 'إفطار فاخر مع مشروب ترحيبي يومياً',
    price: 45,
    description: 'Daily in-room or seaside terrace gourmet spread with fresh baked pastries and pressed juices',
    descriptionAr: 'بوفيه إفطار فاخر يومي في الجناح أو على التراس مع مخبوزات طازجة وعصائر طبيعية'
  },
  {
    id: 'extra-transfer',
    name: 'VIP Chauffeur Airport Transfer',
    nameAr: 'خدمة نقل فاخرة بسائق خاص من وإلى المطار',
    price: 180,
    description: 'Private luxury Mercedes Maybach or luxury yacht transfer directly to resort check-in',
    descriptionAr: 'استقبال خاص بسيارة مايباخ أو يخت فاخر مباشرة إلى مكتب الاستقبال الخاص'
  },
  {
    id: 'extra-spa',
    name: 'Signature 90-Min Marine Spa Ritual',
    nameAr: 'جلسة سبا بحرية مميزة لمدة 90 دقيقة',
    price: 240,
    description: 'Revitalizing full body massage and herbal hydrotherapy session for ultimate stillness',
    descriptionAr: 'تدليك علاجي لكامل الجسد مع جلسة علاج مائي بالأعشاب الطبيعية'
  },
  {
    id: 'extra-dinner',
    name: 'Private Candlelit Beach Dinner',
    nameAr: 'عشاء رومانسي خاص على الشاطئ بضوء الشموع',
    price: 320,
    description: '5-course bespoke menu prepared by personal chef on the edge of the Mediterranean tide',
    descriptionAr: 'عشاء خاص من خمسة أطباق يحضره طاهٍ خاص عند حافة مياه البحر الهادئة'
  }
];

export const ABOUT_CONTENT = {
  headingEn: 'MORE THAN A STAY / A PLACE TO REMEMBER',
  headingAr: 'أكثر من مجرد إقامة / ذكرى محفورة في الوجدان',
  subheadingEn: 'The Philosophy of AZUREA',
  subheadingAr: 'فلسفة أزوريا',
  introEn: 'Conceived as an homage to the timeless rhythm of the Mediterranean, AZUREA was sculpted into the natural limestone promontory where ancient sea trade once drifted past.',
  introAr: 'وُلد منتجع أزوريا كتحية إجلال لإيقاع البحر الأبيض المتوسط الخالد، حيث نُحتت مبانيه في قلب الجرف الكلسي الطبيعي في موقع تاريخي شهد عبور أقدم الرحلات البحرية.',
  philosophyEn: 'Our ethos is built upon quiet luxury: the luxury of unhurried time, uncluttered horizons, and warm hospitality that anticipates every unspoken wish without intrusion. Every angle frames the sea; every stone carries the sun’s warmth.',
  philosophyAr: 'تقوم فلسفتنا على مفهوم الهدوء والفخامة غير المتكلفة: رفاهية الوقت المتمهل، والآفاق المفتوحة الخالية من الضجيج، والضيافة الدافئة التي تستبق رغباتك دون تطفل. كل زاوية معمارية تحتفي بالبحر، وكل حجر يحتفظ بدفء الشمس.',
  sustainabilityEn: 'AZUREA operates with complete environmental mindfulness: 100% solar-assisted micro-grid power, closed-loop seawater desalination, organic botanical gardens supplying our dining kitchens, and an active marine conservation fund protecting our private coastal reefs.',
  sustainabilityAr: 'يعمل منتجع أزوريا بنظام بيئي مستدام متكامل: طاقة شمسية نظيفة، محطة تحلية مياه بنظام الحلقة المغلقة، وحدائق عضوية تغذي مطابخنا يومياً، بالإضافة إلى صندوق حماية الشعاب البحرية الساحلية.'
};

export const CONTACT_INFO = {
  addressEn: 'AZUREA Private Coastal Resort, Route de la Calanque 14, Mediterranean Coast',
  addressAr: 'منتجع أزوريا الساحلي الخاص، طريق لا كالانك 14، ساحل البحر الأبيض المتوسط',
  phone: '+33 4 94 88 20 00',
  email: 'reservations@azurearesort.com',
  conciergeEmail: 'concierge@azurearesort.com',
  coordinates: "43°12'44.2\"N 6°38'19.1\"E",
  socials: [
    { name: 'Instagram', handle: '@azurearesort' },
    { name: 'Architectural Digest', handle: 'Feature #820' },
    { name: 'Condé Nast Traveler', handle: 'Gold List 2026' }
  ]
};
