export type Lang = 'en' | 'ua' | 'ru' | 'ar';

export const LANG_DIR: Record<Lang, 'ltr' | 'rtl'> = {
  en: 'ltr', ua: 'ltr', ru: 'ltr', ar: 'rtl',
};

export const CONTACT = {
  phone: '+971 4 388 5500',
  phoneLink: '+97143885500',
  whatsapp: '+971 55 123 4567',
  whatsappLink: '971551234567',
  email: 'info@beautysalon.ae',
  address: {
    en: 'Marina Walk, Dubai Marina, Dubai, UAE',
    ua: 'Marina Walk, Дубай Марина, Дубай, ОАЕ',
    ru: 'Marina Walk, Dubai Marina, Дубай, ОАЭ',
    ar: 'Marina Walk، دبي مارينا، دبي، الإمارات',
  },
} as const;

export const t = {
  // ════════════════════════════════════════════════════
  en: {
    nav: {
      services: 'Services & Prices',
      masters: 'Specialists',
      promo: 'Promotions',
      portfolio: 'Portfolio',
      reviews: 'Reviews',
      faq: 'FAQ',
      blog: 'Blog',
      about: 'About Us',
      contacts: 'Contacts',
    },
    header: { book: 'Book Now', bookOnline: 'Book Online' },

    hero: {
      line1: 'THE FUTURE',
      line2: 'OF YOUR BEAUTY',
      line3: 'STARTS HERE',
      subtitle1: 'Advanced aesthetic procedures.',
      subtitle2: 'Clinically proven technologies.',
      bookNow: 'Book Now',
      ourServices: 'Our Services',
      videoLabel: 'Watch salon video',
      stats: [
        { value: '10+', label: 'years caring for your beauty' },
        { value: '5000+', label: 'happy clients' },
        { value: '20+', label: 'premium procedures' },
      ],
      cards: {
        peeling:    { label: 'Peeling',               sub: 'Chemical · Enzyme' },
        serums:     { label: 'Serums',                sub: 'Vitamin C · Retinol' },
        masks:      { label: 'Masks',                 sub: 'Alginate · Sheet' },
        hydration:  { label: 'Hydration',             sub: 'Hyaluronic · Biorevit' },
        apparatus:  { label: 'Hardware\nCosmetology', sub: 'BBL · RF · INDIBA®' },
        injections: { label: 'Beauty\nInjections',    sub: 'Contouring · Botox' },
        massage:    { label: 'Face\nMassage',         sub: 'Lymphatic · Sculpt' },
        steam:      { label: 'Steam\nTreatments',     sub: 'Ozone · Steam' },
      },
    },

    brand: {
      salonName: 'BEAUTY SALON',
      location: 'AESTHETIC · DUBAI',
      universeOf: 'Universe of',
      universeAccent: 'beauty',
      text: 'Entrust your beauty to aesthetic medicine professionals. Innovative procedures for face and body that enhance your individuality and preserve youth.',
      bookNow: 'Book Now',
    },

    benefits: {
      eyebrow: 'Why us',
      title: 'Our Advantages',
      items: [
        { title: 'TECHNOLOGY',    description: 'The latest clinically proven devices. INDIBA®, Endolift® and other cutting-edge solutions.' },
        { title: 'INDIVIDUALITY', description: 'Personalised approach for every client. We craft a programme tailored to your uniqueness.' },
        { title: 'RESULTS',       description: 'Achieving the desired effect with minimal downtime. We guarantee quality.' },
        { title: 'ETERNAL YOUTH', description: 'Maintaining a natural look and youthful skin. Prevention and correction of ageing.' },
        { title: 'NATURALNESS',   description: 'A harmony-based approach. We preserve your individuality and highlight natural beauty.' },
        { title: 'A-LIST TEAM',   description: 'Internationally certified professionals with years of experience. The best in the field.' },
      ],
    },

    servicesPreview: {
      eyebrow: 'Catalogue',
      title: 'Our Services',
      viewAll: 'All Services',
      bookBtn: 'Book Now',
      items: [
        { name: 'Facial Care',           description: 'Deep cleansing, hydration and rejuvenation of facial skin with professional products.',               price: 'from 350 AED', duration: '60 min',    tag: 'Popular' },
        { name: 'Contour Plastics',      description: 'Fillers and biorevitalisation for facial contouring and deep hydration.',                             price: 'from 800 AED', duration: '45 min',    tag: 'Hit' },
        { name: 'Laser Hair Removal',    description: 'Effective removal of unwanted hair with minimal discomfort.',                                         price: 'from 150 AED', duration: '30–90 min', tag: null },
        { name: 'Body Massage',          description: 'Relaxing and therapeutic massage from certified specialists.',                                        price: 'from 400 AED', duration: '60 min',    tag: null },
        { name: 'Hardware Cosmetology',  description: 'INDIBA®, RF lifting, microcurrents — advanced technologies for your skin.',                          price: 'from 550 AED', duration: '45 min',    tag: 'New' },
        { name: 'Chemical Peels',        description: 'Chemical and mechanical peels for skin renewal and a radiant glow.',                                  price: 'from 250 AED', duration: '40 min',    tag: null },
      ],
    },

    promos: {
      eyebrow: 'Special Offers',
      title: 'June Promotions',
      viewAll: 'All Promotions',
      until: 'until',
      bookBtn: 'Book Now',
      items: [
        { title: 'Woman Health',           description: 'Comprehensive women\'s wellness programme: gynaecological massage, body correction and skin care.',  validUntil: 'May 31',  badge: 'Hit of the month' },
        { title: 'Advanced Bio-Stimulation', description: 'Biostimulation and regeneration protocol using PRP therapy and meso-cocktails.',                validUntil: 'Jun 15',  badge: 'Popular' },
        { title: 'BBL Acne Protocols',    description: 'Acne and post-acne treatment using BBL technology. Clear skin in just 3 sessions.',                  validUntil: 'May 30',  badge: 'Ending soon' },
        { title: 'Anti-Age Complex',      description: 'RF lifting + botulinum therapy + contour plastics. Rejuvenation without surgery.',                    validUntil: 'Jun 30',  badge: null },
      ],
    },

    masters: {
      eyebrow: 'Our Team',
      title: 'A-List Specialists',
      viewAll: 'All Specialists',
      experience: 'yrs exp.',
      items: [
        { name: 'Anna Petrova',   role: 'Aesthetic Cosmetologist',       specialties: ['Injection Cosmetology', 'Skin Care', 'Laser Procedures'] },
        { name: 'Maria Sokolova', role: 'Hardware Cosmetology Expert',   specialties: ['INDIBA®', 'RF Lifting', 'Microcurrents'] },
        { name: 'Elena Kuznetsova', role: 'Body Specialist',             specialties: ['Massage', 'Wraps', 'LPG Massage'] },
        { name: 'Olga Novikova',  role: 'Trichologist-Dermatologist',    specialties: ['Hair Treatment', 'Mesotherapy', 'PRP Therapy'] },
      ],
    },

    portfolio: {
      eyebrow: 'Our Work',
      title: 'Portfolio Before/After',
      viewAll: 'All Work',
      before: 'Before',
      after: 'After',
      items: [
        { service: 'Contour Plastics',    master: 'Anna Petrova',    tag: 'Lips' },
        { service: 'RF Lifting',          master: 'Maria Sokolova',  tag: 'Face' },
        { service: 'Body Correction',     master: 'Elena Kuznetsova',tag: 'Body' },
        { service: 'Hair Mesotherapy',    master: 'Olga Novikova',   tag: 'Hair' },
        { service: 'Biorevitalisation',   master: 'Anna Petrova',    tag: 'Skin' },
        { service: 'Laser Hair Removal',  master: 'Maria Sokolova',  tag: 'Body' },
      ],
    },

    reviews: {
      eyebrow: 'Reviews',
      title: 'What Our Clients Say',
      ratingText: 'on Google · 120+ reviews',
      items: [
        { name: 'Ekaterina M.', text: 'Had a biorevitalisation session with Anna. The results exceeded all expectations — my skin literally glows. Professional approach and a cosy atmosphere. Will definitely return!', service: 'Biorevitalisation', date: 'May 2025' },
        { name: 'Irina D.',     text: 'Did a course of RF lifting. After 5 sessions my facial contour noticeably tightened. Maria pays great attention to detail and personalised the programme for my skin.', service: 'RF Lifting', date: 'April 2025' },
        { name: 'Tatiana K.',   text: 'I\'ve been coming here for 2 years. A highly professional team. They use the latest equipment and always offer the best solution. Highly recommend!', service: 'Comprehensive Care', date: 'April 2025' },
        { name: 'Svetlana R.',  text: 'Had lip augmentation with Anna. The result looks natural and lasts. She explained every step and answered all my questions. Very satisfied!', service: 'Contour Plastics', date: 'March 2025' },
        { name: 'Natalia V.',   text: 'INDIBA® is absolutely incredible! After the course my skin recovered like it\'s 10 years younger. Maria is a true master. Thank you so much!', service: 'INDIBA® Therapy', date: 'March 2025' },
        { name: 'Anastasia P.', text: 'Came in with an acne problem, after a BBL course my skin cleared up completely. Never thought the results would come so fast. Now I recommend it to all my friends!', service: 'BBL Acne Protocol', date: 'February 2025' },
      ],
    },

    faq: {
      eyebrow: 'Q & A',
      title: 'FAQ',
      items: [
        { question: 'How do I book a procedure?', answer: 'You can book online via the form on our website, by phone or through WhatsApp. After booking you will receive a confirmation and a reminder the day before.' },
        { question: 'Is an initial consultation required?', answer: 'For most procedures an initial consultation is recommended. Our specialist will assess your skin condition, discuss your expectations and select the best programme. The consultation is free.' },
        { question: 'Are there any contraindications?', answer: 'Yes, some procedures have contraindications (pregnancy, certain skin conditions, metal implants, etc.). All contraindications are clarified during the consultation.' },
        { question: 'How many sessions are needed to see results?', answer: 'It depends on the procedure and your skin condition. Some procedures show results after the first session; others require a course of 5–10 sessions. Your specialist will create a personalised plan.' },
        { question: 'Is there a recovery period?', answer: 'Most of our procedures require no recovery time. Injectable methods may cause minor redness or swelling for 1–3 days. Your specialist will advise on aftercare.' },
        { question: 'How long do results last?', answer: 'Results vary by procedure. Contour plastics last 12–18 months, biorevitalisation 6–12 months. Maintenance treatments are recommended to sustain results.' },
        { question: 'Do you accept card payments?', answer: 'Yes, we accept cash and all major bank cards. Instalment plans at 0% interest are also available on selected treatment packages.' },
      ],
    },

    services: {
      title: 'Our Services',
      cards: {
        body:       { label: 'Body Correction', sub: 'LPG · Massage · Wraps' },
        face:       { label: 'Facial Care',      sub: 'Peels · Biorevitalisation' },
        injections: { label: 'Injections',       sub: 'Contouring · Botox' },
        laser:      { label: 'Hardware',         sub: 'BBL · RF · INDIBA®' },
      },
      cta: 'View Services & Prices',
    },

    tagline: {
      prefix: "We don't just improve appearances —",
      bold:   'we reveal your uniqueness.',
    },

    features: {
      items: [
        { title: 'INDIVIDUAL\nAPPROACH',    description: 'We create personal programmes for each client' },
        { title: 'INNOVATIVE\nTECHNOLOGY', description: 'We use only proven and safe methods' },
        { title: 'PREMIUM\nSERVICE',        description: 'Comfort, aesthetics and care at every step' },
        { title: 'LUXURY\nATMOSPHERE',     description: 'A space where you relax and transform' },
      ],
    },

    cta: {
      title: 'Ready to transform?',
      subtitle: 'Book a free consultation right now and get a personalised treatment plan.',
      bookOnline: 'Book Online',
      whatsapp: 'WhatsApp',
      call: 'Call Us',
    },

    footer: {
      tagline: 'Premium aesthetic clinic. Advanced technologies and a personalised approach to every client.',
      columns: { services: 'Services', clinic: 'Clinic', info: 'Information' },
      links: {
        facial: 'Facial Care', injections: 'Injection Cosmetology', hardware: 'Hardware Cosmetology',
        massage: 'Body Massage', laser: 'Laser Hair Removal', masters: 'Specialists',
        portfolio: 'Portfolio', promo: 'Promotions', reviews: 'Reviews', blog: 'Blog',
        about: 'About Us', faq: 'FAQ', booking: 'Online Booking', contacts: 'Contacts', account: 'My Account',
      },
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },

  // ════════════════════════════════════════════════════
  ua: {
    nav: {
      services: 'Послуги та ціни',
      masters: 'Спеціалісти',
      promo: 'Акції',
      portfolio: 'Портфоліо',
      reviews: 'Відгуки',
      faq: 'FAQ',
      blog: 'Блог',
      about: 'Про нас',
      contacts: 'Контакти',
    },
    header: { book: 'Записатись', bookOnline: 'Записатись онлайн' },

    hero: {
      line1: 'МАЙБУТНЄ',
      line2: 'ВАШОЇ КРАСИ',
      line3: 'ПОЧИНАЄТЬСЯ ТУТ',
      subtitle1: 'Передові естетичні процедури.',
      subtitle2: 'Клінічно перевірені технології.',
      bookNow: 'Записатись зараз',
      ourServices: 'Наші послуги',
      videoLabel: 'Дивитись відео про салон',
      stats: [
        { value: '10+', label: 'років дбаємо про вашу красу' },
        { value: '5000+', label: 'задоволених клієнтів' },
        { value: '20+', label: 'преміальних процедур' },
      ],
      cards: {
        peeling:    { label: 'Пілінг',                  sub: 'Хімічний · Ензимний' },
        serums:     { label: 'Сироватки',               sub: 'Вітамін C · Ретинол' },
        masks:      { label: 'Маски',                   sub: 'Альгінатні · Тканинні' },
        hydration:  { label: 'Зволоження',              sub: 'Гіалуронова · Біоревіт' },
        apparatus:  { label: 'Апаратна\nкосметологія',  sub: 'BBL · RF · INDIBA®' },
        injections: { label: 'Ін\'єкції\nкраси',        sub: 'Контурна · Ботокс' },
        massage:    { label: 'Масаж\nобличчя',          sub: 'Лімфодренаж · Скульпт' },
        steam:      { label: 'Парові\nпроцедури',       sub: 'Озонування · Пар' },
      },
    },

    brand: {
      salonName: 'САЛОН КРАСИ',
      location: 'AESTHETIC · DUBAI',
      universeOf: 'Всесвіт',
      universeAccent: 'краси',
      text: 'Довірте свою красу професіоналам естетичної медицини. Інноваційні процедури для обличчя та тіла, що підкреслять вашу індивідуальність і збережуть молодість.',
      bookNow: 'Записатись зараз',
    },

    benefits: {
      eyebrow: 'Чому ми',
      title: 'Наші переваги',
      items: [
        { title: 'ТЕХНОЛОГІЇ',      description: 'Новітні клінічно перевірені апарати. INDIBA®, Endolift® та інші передові рішення.' },
        { title: 'ІНДИВІДУАЛЬНІСТЬ', description: 'Персоналізований підхід до кожного клієнта. Розробляємо програму під вашу унікальність.' },
        { title: 'РЕЗУЛЬТАТ',       description: 'Досягнення бажаного ефекту з мінімальним відновлювальним періодом. Гарантуємо якість.' },
        { title: 'ВІЧНА МОЛОДІСТЬ', description: 'Підтримання природного вигляду та молодості шкіри. Профілактика вікових змін.' },
        { title: 'НАТУРАЛЬНІСТЬ',   description: 'Підхід, заснований на гармонії. Зберігаємо вашу індивідуальність, підкреслюємо природну красу.' },
        { title: 'A-LIST КОМАНДА',  description: 'Міжнародно сертифіковані професіонали з багаторічним досвідом. Найкращі у своїй справі.' },
      ],
    },

    servicesPreview: {
      eyebrow: 'Каталог',
      title: 'Наші послуги',
      viewAll: 'Всі послуги',
      bookBtn: 'Записатись',
      items: [
        { name: 'Догляд за обличчям',    description: 'Глибоке очищення, зволоження та омолодження шкіри обличчя професійними засобами.',          price: 'від 350 AED', duration: '60 хв',    tag: 'Популярне' },
        { name: 'Контурна пластика',     description: 'Філери та біоревіталізація для корекції овалу обличчя та зволоження зсередини.',              price: 'від 800 AED', duration: '45 хв',    tag: 'Хіт' },
        { name: 'Лазерна епіляція',      description: 'Ефективне видалення небажаного волосся з мінімальним дискомфортом.',                         price: 'від 150 AED', duration: '30–90 хв', tag: null },
        { name: 'Масаж тіла',            description: 'Розслаблювальний та лікувальний масаж від сертифікованих спеціалістів.',                     price: 'від 400 AED', duration: '60 хв',    tag: null },
        { name: 'Апаратна косметологія', description: 'INDIBA®, RF-ліфтинг, мікроструми — передові технології для вашої шкіри.',                   price: 'від 550 AED', duration: '45 хв',    tag: 'Новинка' },
        { name: 'Пілінги',               description: 'Хімічні та механічні пілінги для оновлення та сяяння шкіри.',                                price: 'від 250 AED', duration: '40 хв',    tag: null },
      ],
    },

    promos: {
      eyebrow: 'Спеціальні пропозиції',
      title: 'Акції червня',
      viewAll: 'Всі акції',
      until: 'до',
      bookBtn: 'Записатись',
      items: [
        { title: 'Woman Health',             description: 'Комплексна програма жіночого здоров\'я: гінекологічний масаж, корекція тіла, догляд за шкірою.', validUntil: '31 травня', badge: 'Хіт місяця' },
        { title: 'Advanced Bio-Stimulation', description: 'Протокол біостимуляції та регенерації із застосуванням PRP-терапії та мезококтейлів.',           validUntil: '15 червня', badge: 'Популярне' },
        { title: 'BBL Acne Protocols',       description: 'Лікування акне та постакне за допомогою BBL-технології. Чиста шкіра вже через 3 процедури.',       validUntil: '30 травня', badge: 'Скоро закінчується' },
        { title: 'Anti-Age Комплекс',        description: 'RF-ліфтинг + ботулінотерапія + контурна пластика. Омолодження без операцій.',                     validUntil: '30 червня', badge: null },
      ],
    },

    masters: {
      eyebrow: 'Наша команда',
      title: 'A-List спеціалісти',
      viewAll: 'Всі спеціалісти',
      experience: 'р. досвіду',
      items: [
        { name: 'Анна Петрова',    role: 'Косметолог-естетист',              specialties: ['Ін\'єкційна косметологія', 'Догляд за шкірою', 'Лазерні процедури'] },
        { name: 'Марія Соколова',  role: 'Майстер апаратної косметології',   specialties: ['INDIBA®', 'RF-ліфтинг', 'Мікроструми'] },
        { name: 'Олена Кузнецова', role: 'Спеціаліст з тіла',                specialties: ['Масаж', 'Обгортання', 'LPG-масаж'] },
        { name: 'Ольга Новікова',  role: 'Трихолог-дерматолог',              specialties: ['Лікування волосся', 'Мезотерапія', 'PRP-терапія'] },
      ],
    },

    portfolio: {
      eyebrow: 'Наші роботи',
      title: 'Портфоліо до/після',
      viewAll: 'Всі роботи',
      before: 'До',
      after: 'Після',
      items: [
        { service: 'Контурна пластика',  master: 'Анна Петрова',    tag: 'Губи' },
        { service: 'RF-ліфтинг',         master: 'Марія Соколова',  tag: 'Обличчя' },
        { service: 'Корекція фігури',    master: 'Олена Кузнецова', tag: 'Тіло' },
        { service: 'Мезотерапія волосся',master: 'Ольга Новікова',  tag: 'Волосся' },
        { service: 'Біоревіталізація',   master: 'Анна Петрова',    tag: 'Шкіра' },
        { service: 'Лазерна епіляція',   master: 'Марія Соколова',  tag: 'Тіло' },
      ],
    },

    reviews: {
      eyebrow: 'Відгуки',
      title: 'Що кажуть клієнти',
      ratingText: 'в Google · 120+ відгуків',
      items: [
        { name: 'Катерина М.', text: 'Відвідала процедуру біоревіталізації у Анни. Результат перевершив усі очікування — шкіра буквально сяє. Професійний підхід, затишна атмосфера. Обов\'язково повернусь!', service: 'Біоревіталізація', date: 'Травень 2025' },
        { name: 'Ірина Д.',    text: 'Пройшла курс RF-ліфтингу. Після 5 сеансів овал обличчя помітно підтягнувся. Марія дуже уважна до деталей, підібрала програму індивідуально.', service: 'RF-ліфтинг', date: 'Квітень 2025' },
        { name: 'Тетяна К.',   text: 'Вже 2 роки ходжу тільки сюди. Команда професіоналів високого рівня. Працюють з найновішим обладнанням, завжди пропонують оптимальне рішення. Рекомендую всім!', service: 'Комплексний догляд', date: 'Квітень 2025' },
        { name: 'Світлана Р.', text: 'Робила корекцію губ у Анни. Результат природний та довговічний. Спеціаліст пояснила кожен крок, відповіла на всі запитання. Дуже задоволена!', service: 'Контурна пластика', date: 'Березень 2025' },
        { name: 'Наталія В.',  text: 'INDIBA® — це щось неймовірне! Після курсу шкіра відновилася наче за 10 років тому. Марія — справжній майстер своєї справи. Велике дякую!', service: 'INDIBA® терапія', date: 'Березень 2025' },
        { name: 'Анастасія П.',text: 'Прийшла з проблемою акне, після курсу BBL-терапії шкіра стала чистою. Ніколи не думала, що результат буде таким швидким. Тепер раджу всім подругам!', service: 'BBL Acne Protocol', date: 'Лютий 2025' },
      ],
    },

    faq: {
      eyebrow: 'Питання та відповіді',
      title: 'FAQ',
      items: [
        { question: 'Як записатись на процедуру?', answer: 'Записатись можна онлайн через форму на сайті, телефоном або через WhatsApp. Після запису ви отримаєте підтвердження та нагадування за день до процедури.' },
        { question: 'Чи потрібна попередня консультація?', answer: 'Для більшості процедур первинна консультація рекомендована. Наш спеціаліст оцінить стан шкіри, обговорить ваші очікування і підбере оптимальну програму. Консультація безкоштовна.' },
        { question: 'Чи є протипоказання?', answer: 'Так, ряд процедур має протипоказання (вагітність, деякі шкірні захворювання, металеві імпланти тощо). Всі протипоказання уточнюються на консультації.' },
        { question: 'Скільки потрібно сеансів для помітного результату?', answer: 'Залежить від процедури та вихідного стану шкіри. Деякі процедури дають результат вже після першого сеансу, інші вимагають курсу з 5–10 процедур.' },
        { question: 'Чи є відновлювальний період?', answer: 'Більшість наших процедур не потребують реабілітації. Для ін\'єкційних методів можливе незначне почервоніння або набряк протягом 1–3 днів.' },
        { question: 'Як довго зберігається результат?', answer: 'Тривалість результату варіюється залежно від процедури. Контурна пластика — 12–18 місяців, біоревіталізація — 6–12 місяців. Для підтримання результату рекомендуються підтримувальні процедури.' },
        { question: 'Чи приймаєте оплату карткою?', answer: 'Так, приймаємо готівку та всі види банківських карток. Також доступна розстрочка 0% на деякі пакети процедур.' },
      ],
    },

    services: {
      title: 'Наші послуги',
      cards: {
        body:       { label: 'Корекція тіла',      sub: 'LPG · Масаж · Обгортання' },
        face:       { label: 'Догляд за обличчям', sub: 'Пілінги · Біоревіталізація' },
        injections: { label: 'Ін\'єкції',           sub: 'Контурна · Ботокс' },
        laser:      { label: 'Апаратна',            sub: 'BBL · RF · INDIBA®' },
      },
      cta: 'Перейти до послуг та цін',
    },

    tagline: {
      prefix: 'Ми не просто покращуємо зовнішність —',
      bold:   'ми розкриваємо вашу унікальність.',
    },

    features: {
      items: [
        { title: 'ІНДИВІДУАЛЬНИЙ\nПІДХІД',      description: 'Створюємо персональні програми для кожного клієнта' },
        { title: 'ІННОВАЦІЙНІ\nТЕХНОЛОГІЇ',     description: 'Використовуємо лише перевірені та безпечні методики' },
        { title: 'ПРЕМІАЛЬНИЙ\nСЕРВІС',          description: 'Комфорт, естетика і турбота на кожному етапі' },
        { title: 'АТМОСФЕРА\nРОКОШІ',           description: 'Простір, де ви розслабляєтесь і перетворюєтесь' },
      ],
    },

    cta: {
      title: 'Готові змінитись?',
      subtitle: 'Запишіться на безкоштовну консультацію прямо зараз і отримайте персональний план процедур.',
      bookOnline: 'Записатись онлайн',
      whatsapp: 'WhatsApp',
      call: 'Зателефонувати',
    },

    footer: {
      tagline: 'Преміум естетична клініка. Передові технології та персоналізований підхід до кожного клієнта.',
      columns: { services: 'Послуги', clinic: 'Клініка', info: 'Інформація' },
      links: {
        facial: 'Догляд за обличчям', injections: 'Ін\'єкційна косметологія', hardware: 'Апаратна косметологія',
        massage: 'Масаж тіла', laser: 'Лазерна епіляція', masters: 'Спеціалісти',
        portfolio: 'Портфоліо', promo: 'Акції', reviews: 'Відгуки', blog: 'Блог',
        about: 'Про нас', faq: 'FAQ', booking: 'Онлайн запис', contacts: 'Контакти', account: 'Особистий кабінет',
      },
      rights: 'Усі права захищено.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання',
    },
  },

  // ════════════════════════════════════════════════════
  ru: {
    nav: {
      services: 'Услуги и цены',
      masters: 'Специалисты',
      promo: 'Акции',
      portfolio: 'Портфолио',
      reviews: 'Отзывы',
      faq: 'FAQ',
      blog: 'Блог',
      about: 'О нас',
      contacts: 'Контакты',
    },
    header: { book: 'Записаться', bookOnline: 'Записаться онлайн' },

    hero: {
      line1: 'БУДУЩЕЕ',
      line2: 'ВАШЕЙ КРАСОТЫ',
      line3: 'НАЧИНАЕТСЯ ЗДЕСЬ',
      subtitle1: 'Передовые эстетические процедуры.',
      subtitle2: 'Клинически проверенные технологии.',
      bookNow: 'Записаться сейчас',
      ourServices: 'Наши услуги',
      videoLabel: 'Смотреть видео о салоне',
      stats: [
        { value: '10+', label: 'лет заботимся о вашей красоте' },
        { value: '5000+', label: 'довольных клиентов' },
        { value: '20+', label: 'премиальных процедур' },
      ],
      cards: {
        peeling:    { label: 'Пилинг',                   sub: 'Химический · Энзимный' },
        serums:     { label: 'Сыворотки',                sub: 'Витамин C · Ретинол' },
        masks:      { label: 'Маски',                    sub: 'Альгинатные · Тканевые' },
        hydration:  { label: 'Увлажнение',               sub: 'Гиалуроновая · Биоревит' },
        apparatus:  { label: 'Аппаратная\nкосметология', sub: 'BBL · RF · INDIBA®' },
        injections: { label: 'Инъекции красоты',         sub: 'Контурная · Ботокс' },
        massage:    { label: 'Массаж лица',              sub: 'Лимфодренаж · Скульпт' },
        steam:      { label: 'Паровые процедуры',        sub: 'Озонирование · Пар' },
      },
    },

    brand: {
      salonName: 'САЛОН КРАСОТЫ',
      location: 'AESTHETIC · DUBAI',
      universeOf: 'Вселенная',
      universeAccent: 'красоты',
      text: 'Доверьте свою красоту профессионалам эстетической медицины. Инновационные процедуры для лица и тела, которые подчеркнут вашу индивидуальность и сохранят молодость.',
      bookNow: 'Записаться сейчас',
    },

    benefits: {
      eyebrow: 'Почему мы',
      title: 'Наши преимущества',
      items: [
        { title: 'ТЕХНОЛОГИИ',      description: 'Новейшие клинически проверенные аппараты. INDIBA®, Endolift® и другие передовые решения.' },
        { title: 'ИНДИВИДУАЛЬНОСТЬ', description: 'Персонализированный подход к каждому клиенту. Разрабатываем программу под вашу уникальность.' },
        { title: 'РЕЗУЛЬТАТ',       description: 'Достижение желаемого эффекта с минимальным восстановительным периодом. Гарантируем качество.' },
        { title: 'ВЕЧНАЯ МОЛОДОСТЬ', description: 'Поддержание естественного вида и молодости кожи. Профилактика и коррекция возрастных изменений.' },
        { title: 'НАТУРАЛЬНОСТЬ',   description: 'Подход, основанный на гармонии. Сохраняем вашу индивидуальность, подчёркиваем природную красоту.' },
        { title: 'A-LIST КОМАНДА',  description: 'Международно сертифицированные профессионалы с многолетним опытом. Лучшие в своём деле.' },
      ],
    },

    servicesPreview: {
      eyebrow: 'Каталог',
      title: 'Наши услуги',
      viewAll: 'Все услуги',
      bookBtn: 'Записаться',
      items: [
        { name: 'Уход за лицом',           description: 'Глубокое очищение, увлажнение и омоложение кожи лица профессиональными средствами.',          price: 'от 350 AED', duration: '60 мин',    tag: 'Популярное' },
        { name: 'Контурная пластика',      description: 'Филлеры и биоревитализация для коррекции овала лица и увлажнения изнутри.',                   price: 'от 800 AED', duration: '45 мин',    tag: 'Хит' },
        { name: 'Лазерная эпиляция',       description: 'Эффективное удаление нежелательных волос с минимальным дискомфортом.',                        price: 'от 150 AED', duration: '30–90 мин', tag: null },
        { name: 'Массаж тела',             description: 'Расслабляющий и лечебный массаж от сертифицированных специалистов.',                          price: 'от 400 AED', duration: '60 мин',    tag: null },
        { name: 'Аппаратная косметология', description: 'INDIBA®, RF-лифтинг, микротоки — передовые технологии для вашей кожи.',                      price: 'от 550 AED', duration: '45 мин',    tag: 'Новинка' },
        { name: 'Пилинги',                 description: 'Химические и механические пилинги для обновления и сияния кожи.',                             price: 'от 250 AED', duration: '40 мин',    tag: null },
      ],
    },

    promos: {
      eyebrow: 'Специальные предложения',
      title: 'Акции июня',
      viewAll: 'Все акции',
      until: 'до',
      bookBtn: 'Записаться',
      items: [
        { title: 'Woman Health',             description: 'Комплексная программа женского здоровья: гинекологический массаж, коррекция тела, уход за кожей.', validUntil: '31 мая',  badge: 'Хит месяца' },
        { title: 'Advanced Bio-Stimulation', description: 'Протокол биостимуляции и регенерации с применением PRP-терапии и мезококтейлей.',                  validUntil: '15 июня', badge: 'Популярное' },
        { title: 'BBL Acne Protocols',       description: 'Лечение акне и постакне с помощью BBL-технологии. Чистая кожа уже через 3 процедуры.',              validUntil: '30 мая',  badge: 'Скоро заканчивается' },
        { title: 'Anti-Age Комплекс',        description: 'RF-лифтинг + ботулинотерапия + контурная пластика. Омоложение без операций.',                      validUntil: '30 июня', badge: null },
      ],
    },

    masters: {
      eyebrow: 'Наша команда',
      title: 'A-List специалисты',
      viewAll: 'Все специалисты',
      experience: 'лет опыта',
      items: [
        { name: 'Анна Петрова',   role: 'Косметолог-эстетист',                specialties: ['Инъекционная косметология', 'Уход за кожей', 'Лазерные процедуры'] },
        { name: 'Мария Соколова', role: 'Мастер аппаратной косметологии',      specialties: ['INDIBA®', 'RF-лифтинг', 'Микротоки'] },
        { name: 'Елена Кузнецова', role: 'Специалист по телу',                 specialties: ['Массаж', 'Обёртывания', 'LPG-массаж'] },
        { name: 'Ольга Новикова', role: 'Трихолог-дерматолог',                 specialties: ['Лечение волос', 'Мезотерапия', 'PRP-терапия'] },
      ],
    },

    portfolio: {
      eyebrow: 'Наши работы',
      title: 'Портфолио до/после',
      viewAll: 'Все работы',
      before: 'До',
      after: 'После',
      items: [
        { service: 'Контурная пластика', master: 'Анна Петрова',    tag: 'Губы' },
        { service: 'RF-лифтинг',         master: 'Мария Соколова',  tag: 'Лицо' },
        { service: 'Коррекция фигуры',   master: 'Елена Кузнецова', tag: 'Тело' },
        { service: 'Мезотерапия волос',  master: 'Ольга Новикова',  tag: 'Волосы' },
        { service: 'Биоревитализация',   master: 'Анна Петрова',    tag: 'Кожа' },
        { service: 'Лазерная эпиляция',  master: 'Мария Соколова',  tag: 'Тело' },
      ],
    },

    reviews: {
      eyebrow: 'Отзывы',
      title: 'Что говорят клиенты',
      ratingText: 'в Google · 120+ отзывов',
      items: [
        { name: 'Екатерина М.', text: 'Посетила процедуру биоревитализации у Анны. Результат превзошёл все ожидания — кожа стала буквально сиять. Профессиональный подход, уютная атмосфера. Обязательно вернусь!', service: 'Биоревитализация', date: 'Май 2025' },
        { name: 'Ирина Д.',    text: 'Делала курс RF-лифтинга. После 5 сеансов овал лица заметно подтянулся. Мария очень внимательна к деталям, подобрала программу индивидуально под мою кожу.', service: 'RF-лифтинг', date: 'Апрель 2025' },
        { name: 'Татьяна К.',  text: 'Уже 2 года хожу только сюда. Команда профессионалов высокого уровня. Работают с новейшим оборудованием, всегда предлагают оптимальное решение. Рекомендую всем!', service: 'Комплексный уход', date: 'Апрель 2025' },
        { name: 'Светлана Р.', text: 'Делала коррекцию губ у Анны. Результат естественный и долговечный. Специалист объяснила каждый шаг, ответила на все вопросы. Очень довольна!', service: 'Контурная пластика', date: 'Март 2025' },
        { name: 'Наталья В.',  text: 'INDIBA® — это что-то невероятное! После курса кожа восстановилась как за 10 лет назад. Мария — настоящий мастер своего дела. Спасибо огромное!', service: 'INDIBA® терапия', date: 'Март 2025' },
        { name: 'Анастасия П.',text: 'Пришла с проблемой акне, после курса BBL-терапии кожа стала чистой. Никогда не думала, что результат будет таким быстрым. Теперь советую всем подругам!', service: 'BBL Acne Protocol', date: 'Февраль 2025' },
      ],
    },

    faq: {
      eyebrow: 'Вопросы и ответы',
      title: 'FAQ',
      items: [
        { question: 'Как записаться на процедуру?', answer: 'Записаться можно онлайн через форму на сайте, по телефону или через WhatsApp. После записи вы получите подтверждение и напоминание за день до процедуры.' },
        { question: 'Нужна ли предварительная консультация?', answer: 'Для большинства процедур первичная консультация рекомендована. Наш специалист оценит состояние кожи, обсудит ваши ожидания и подберёт оптимальную программу. Консультация бесплатна.' },
        { question: 'Есть ли противопоказания?', answer: 'Да, ряд процедур имеет противопоказания (беременность, некоторые кожные заболевания, наличие металлических имплантов и др.). Все противопоказания уточняются на консультации.' },
        { question: 'Сколько нужно сеансов для заметного результата?', answer: 'Зависит от процедуры и исходного состояния кожи. Некоторые процедуры дают результат уже после первого сеанса, другие требуют курса из 5–10 процедур.' },
        { question: 'Есть ли восстановительный период?', answer: 'Большинство наших процедур не требуют реабилитации. Для инъекционных методов возможно небольшое покраснение или отёк в течение 1–3 дней.' },
        { question: 'Как долго сохраняется результат?', answer: 'Длительность результата варьируется от процедуры. Контурная пластика — 12–18 месяцев, биоревитализация — 6–12 месяцев. Для поддержания результата рекомендуются поддерживающие процедуры.' },
        { question: 'Принимаете ли вы оплату картой?', answer: 'Да, принимаем оплату наличными и всеми видами банковских карт. Также доступна рассрочка 0% на некоторые пакеты процедур.' },
      ],
    },

    services: {
      title: 'Наши услуги',
      cards: {
        body:       { label: 'Коррекция тела',  sub: 'LPG · Массаж · Обёртывания' },
        face:       { label: 'Уход за лицом',   sub: 'Пилинги · Биоревитализация' },
        injections: { label: 'Инъекции',         sub: 'Контурная · Ботокс' },
        laser:      { label: 'Аппаратная',       sub: 'BBL · RF · INDIBA®' },
      },
      cta: 'Перейти в услуги и цены',
    },

    tagline: {
      prefix: 'Мы не просто улучшаем внешность —',
      bold:   'мы раскрываем вашу уникальность.',
    },

    features: {
      items: [
        { title: 'ИНДИВИДУАЛЬНЫЙ\nПОДХОД',      description: 'Создаём персональные программы для каждого клиента' },
        { title: 'ИННОВАЦИОННЫЕ\nТЕХНОЛОГИИ',   description: 'Используем только проверенные и безопасные методики' },
        { title: 'ПРЕМИАЛЬНЫЙ\nСЕРВИС',          description: 'Комфорт, эстетика и забота на каждом этапе' },
        { title: 'АТМОСФЕРА\nРОСКОШИ',          description: 'Пространство, где вы расслабляетесь и преображаетесь' },
      ],
    },

    cta: {
      title: 'Готовы преобразиться?',
      subtitle: 'Запишитесь на бесплатную консультацию прямо сейчас и получите персональный план процедур.',
      bookOnline: 'Записаться онлайн',
      whatsapp: 'WhatsApp',
      call: 'Позвонить',
    },

    footer: {
      tagline: 'Премиум эстетическая клиника. Передовые технологии и персонализированный подход к каждому клиенту.',
      columns: { services: 'Услуги', clinic: 'Клиника', info: 'Информация' },
      links: {
        facial: 'Уход за лицом', injections: 'Инъекционная косметология', hardware: 'Аппаратная косметология',
        massage: 'Массаж тела', laser: 'Лазерная эпиляция', masters: 'Специалисты',
        portfolio: 'Портфолио', promo: 'Акции', reviews: 'Отзывы', blog: 'Блог',
        about: 'О нас', faq: 'FAQ', booking: 'Запись онлайн', contacts: 'Контакты', account: 'Личный кабинет',
      },
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
    },
  },

  // ════════════════════════════════════════════════════
  ar: {
    nav: {
      services: 'الخدمات والأسعار',
      masters: 'المتخصصون',
      promo: 'العروض',
      portfolio: 'المعرض',
      reviews: 'التقييمات',
      faq: 'الأسئلة الشائعة',
      blog: 'المدونة',
      about: 'عنّا',
      contacts: 'اتصل بنا',
    },
    header: { book: 'احجز الآن', bookOnline: 'الحجز الإلكتروني' },

    hero: {
      line1: 'مستقبل',
      line2: 'جمالك',
      line3: 'يبدأ هنا',
      subtitle1: 'إجراءات تجميلية متقدمة.',
      subtitle2: 'تقنيات مثبتة سريريًا.',
      bookNow: 'احجز الآن',
      ourServices: 'خدماتنا',
      videoLabel: 'مشاهدة فيديو الصالون',
      stats: [
        { value: '10+', label: 'سنوات من الرعاية بجمالك' },
        { value: '5000+', label: 'عميل سعيد' },
        { value: '20+', label: 'إجراء متميز' },
      ],
      cards: {
        peeling:    { label: 'تقشير',            sub: 'كيميائي · إنزيمي' },
        serums:     { label: 'أمصال',             sub: 'فيتامين C · ريتينول' },
        masks:      { label: 'أقنعة',             sub: 'ألجينات · قماشية' },
        hydration:  { label: 'ترطيب',             sub: 'هيالوروني · بيوريفيت' },
        apparatus:  { label: 'تجميل\nبالأجهزة',  sub: 'BBL · RF · INDIBA®' },
        injections: { label: 'حقن\nالجمال',       sub: 'تخطيط · بوتوكس' },
        massage:    { label: 'تدليك\nالوجه',      sub: 'ليمفاوي · نحت' },
        steam:      { label: 'علاجات\nبخارية',    sub: 'أوزون · بخار' },
      },
    },

    brand: {
      salonName: 'صالون تجميل',
      location: 'AESTHETIC · DUBAI',
      universeOf: 'عالم',
      universeAccent: 'الجمال',
      text: 'ثق بجمالك لمتخصصين في الطب التجميلي. إجراءات مبتكرة للوجه والجسم تبرز فرادتك وتحافظ على شبابك.',
      bookNow: 'احجز الآن',
    },

    benefits: {
      eyebrow: 'لماذا نحن',
      title: 'مزايانا',
      items: [
        { title: 'التقنية',       description: 'أحدث الأجهزة المثبتة سريريًا. INDIBA® و Endolift® وحلول متطورة أخرى.' },
        { title: 'الفردية',       description: 'نهج شخصي لكل عميل. نضع برنامجًا مصممًا خصيصًا لتميزك.' },
        { title: 'النتائج',       description: 'تحقيق التأثير المطلوب مع الحد الأدنى من وقت التعافي. نضمن الجودة.' },
        { title: 'الشباب الدائم', description: 'الحفاظ على المظهر الطبيعي وشباب البشرة. الوقاية وتصحيح علامات التقدم في العمر.' },
        { title: 'الطبيعية',      description: 'نهج قائم على التناسق. نحافظ على فرادتك ونبرز الجمال الطبيعي.' },
        { title: 'فريق A-LIST',   description: 'محترفون حاصلون على شهادات دولية بخبرة سنوات. الأفضل في مجالهم.' },
      ],
    },

    servicesPreview: {
      eyebrow: 'الكتالوج',
      title: 'خدماتنا',
      viewAll: 'جميع الخدمات',
      bookBtn: 'احجز الآن',
      items: [
        { name: 'العناية بالوجه',     description: 'تنظيف عميق وترطيب وتجديد شباب بشرة الوجه بمنتجات احترافية.',                  price: 'من 350 درهم', duration: '60 دقيقة',    tag: 'الأكثر طلبًا' },
        { name: 'تجميل الوجه بالحشوات', description: 'الحشوات والبيوريفيتاليزيشن لتحديد ملامح الوجه والترطيب العميق.',              price: 'من 800 درهم', duration: '45 دقيقة',    tag: 'الأكثر مبيعًا' },
        { name: 'إزالة الشعر بالليزر', description: 'إزالة فعّالة للشعر غير المرغوب فيه مع الحد الأدنى من الإزعاج.',              price: 'من 150 درهم', duration: '30–90 دقيقة', tag: null },
        { name: 'مساج الجسم',          description: 'مساج مريح وعلاجي من متخصصين معتمدين.',                                        price: 'من 400 درهم', duration: '60 دقيقة',    tag: null },
        { name: 'التجميل بالأجهزة',   description: '‏INDIBA® و RF lifting والتيارات الدقيقة — تقنيات متقدمة لبشرتك.',              price: 'من 550 درهم', duration: '45 دقيقة',    tag: 'جديد' },
        { name: 'التقشير الكيميائي',  description: 'تقشير كيميائي وميكانيكي لتجديد البشرة وإضفاء توهج رائع.',                     price: 'من 250 درهم', duration: '40 دقيقة',    tag: null },
      ],
    },

    promos: {
      eyebrow: 'عروض خاصة',
      title: 'عروض يونيو',
      viewAll: 'جميع العروض',
      until: 'حتى',
      bookBtn: 'احجز الآن',
      items: [
        { title: 'Woman Health',             description: 'برنامج شامل لصحة المرأة: مساج نسائي، تصحيح الجسم، العناية بالبشرة.',       validUntil: '31 مايو',  badge: 'أفضل الشهر' },
        { title: 'Advanced Bio-Stimulation', description: 'بروتوكول التحفيز الحيوي والتجديد باستخدام علاج PRP والميزوكوكتيلات.',      validUntil: '15 يونيو', badge: 'الأكثر طلبًا' },
        { title: 'BBL Acne Protocols',       description: 'علاج حب الشباب وآثاره بتقنية BBL. بشرة نقية في 3 جلسات فقط.',             validUntil: '30 مايو',  badge: 'ينتهي قريبًا' },
        { title: 'مجمع Anti-Age',            description: 'RF lifting + بوتولينوثيرابي + تجميل بالحشوات. تجديد الشباب دون جراحة.',   validUntil: '30 يونيو', badge: null },
      ],
    },

    masters: {
      eyebrow: 'فريقنا',
      title: 'متخصصو A-List',
      viewAll: 'جميع المتخصصين',
      experience: 'سنوات خبرة',
      items: [
        { name: 'آنا بيتروفا',       role: 'أخصائية تجميل جمالي',        specialties: ['حقن التجميل', 'العناية بالبشرة', 'الإجراءات الليزرية'] },
        { name: 'ماريا سوكولوفا',    role: 'خبيرة التجميل بالأجهزة',     specialties: ['INDIBA®', 'RF Lifting', 'التيارات الدقيقة'] },
        { name: 'إيلينا كوزنيتسوفا', role: 'أخصائية الجسم',              specialties: ['المساج', 'الأقنعة', 'LPG Massage'] },
        { name: 'أولغا نوفيكوفا',    role: 'طبيبة أمراض جلدية وشعر',     specialties: ['علاج الشعر', 'الميزوثيرابي', 'علاج PRP'] },
      ],
    },

    portfolio: {
      eyebrow: 'أعمالنا',
      title: 'معرض قبل وبعد',
      viewAll: 'جميع الأعمال',
      before: 'قبل',
      after: 'بعد',
      items: [
        { service: 'تجميل الوجه بالحشوات', master: 'آنا بيتروفا',       tag: 'الشفاه' },
        { service: 'RF Lifting',            master: 'ماريا سوكولوفا',    tag: 'الوجه' },
        { service: 'تصحيح الجسم',          master: 'إيلينا كوزنيتسوفا', tag: 'الجسم' },
        { service: 'ميزوثيرابي الشعر',     master: 'أولغا نوفيكوفا',    tag: 'الشعر' },
        { service: 'البيوريفيتاليزيشن',    master: 'آنا بيتروفا',       tag: 'البشرة' },
        { service: 'إزالة الشعر بالليزر',  master: 'ماريا سوكولوفا',    tag: 'الجسم' },
      ],
    },

    reviews: {
      eyebrow: 'التقييمات',
      title: 'ما يقوله عملاؤنا',
      ratingText: 'في Google · أكثر من 120 تقييم',
      items: [
        { name: 'يكاترينا م.', text: 'أجريت جلسة البيوريفيتاليزيشن مع آنا. النتائج تجاوزت كل التوقعات — بشرتي تتألق حرفيًا. نهج احترافي وأجواء دافئة. سأعود بالتأكيد!', service: 'البيوريفيتاليزيشن', date: 'مايو 2025' },
        { name: 'إيرينا د.',    text: 'أكملت دورة RF Lifting. بعد 5 جلسات تحسّن توضيح ملامح وجهي بشكل ملحوظ. ماريا منتبهة جدًا للتفاصيل وصممت البرنامج بشكل خاص لبشرتي.', service: 'RF Lifting', date: 'أبريل 2025' },
        { name: 'تاتيانا ك.',   text: 'أزور هذا المكان منذ سنتين. فريق محترف على أعلى مستوى. يعملون بأحدث المعدات ويقدمون دائمًا الحل الأمثل. أوصي بشدة!', service: 'الرعاية الشاملة', date: 'أبريل 2025' },
        { name: 'سفيتلانا ر.',  text: 'أجريت تكبير الشفاه مع آنا. النتيجة طبيعية ودائمة. شرحت الأخصائية كل خطوة وأجابت على جميع أسئلتي. راضية جدًا!', service: 'تجميل الوجه بالحشوات', date: 'مارس 2025' },
        { name: 'ناتاليا ف.',   text: '‏INDIBA® شيء رائع حقًا! بعد الدورة تعافت بشرتي كأنها تصغر 10 سنوات. ماريا محترفة حقيقية. شكرًا جزيلًا!', service: 'علاج INDIBA®', date: 'مارس 2025' },
        { name: 'أناستاسيا ب.', text: 'جئت بمشكلة حب الشباب، وبعد دورة BBL أصبحت بشرتي نظيفة. لم أكن أتخيل أن النتيجة ستكون سريعة إلى هذا الحد. الآن أنصح به جميع صديقاتي!', service: 'BBL Acne Protocol', date: 'فبراير 2025' },
      ],
    },

    faq: {
      eyebrow: 'أسئلة وأجوبة',
      title: 'الأسئلة الشائعة',
      items: [
        { question: 'كيف أحجز موعدًا؟', answer: 'يمكنك الحجز إلكترونيًا عبر النموذج على موقعنا، أو بالهاتف، أو عبر واتساب. بعد الحجز ستتلقى تأكيدًا وتذكيرًا قبل يوم من الموعد.' },
        { question: 'هل يُشترط إجراء استشارة أولية؟', answer: 'يُوصى بالاستشارة الأولية لمعظم الإجراءات. سيقيّم أخصائيونا حالة بشرتك ويناقش توقعاتك ويختار البرنامج الأمثل. الاستشارة مجانية.' },
        { question: 'هل توجد موانع للعلاج؟', answer: 'نعم، لبعض الإجراءات موانع (الحمل، بعض أمراض الجلد، الغرسات المعدنية، إلخ). يتم توضيح جميع الموانع خلال الاستشارة.' },
        { question: 'كم عدد الجلسات اللازمة لرؤية نتائج ملموسة؟', answer: 'يعتمد ذلك على الإجراء وحالة البشرة الأولية. بعض الإجراءات تُظهر نتائج بعد الجلسة الأولى، وبعضها يتطلب دورة من 5 إلى 10 جلسات.' },
        { question: 'هل هناك فترة نقاهة؟', answer: 'لا تستلزم معظم إجراءاتنا فترة تعافٍ. قد تحدث احمرار طفيف أو انتفاخ لمدة 1–3 أيام مع الأساليب الحقنية.' },
        { question: 'كم تدوم النتائج؟', answer: 'تختلف مدة النتائج باختلاف الإجراء. تجميل الوجه بالحشوات: 12–18 شهرًا، البيوريفيتاليزيشن: 6–12 شهرًا. يُنصح بإجراء جلسات صيانة للحفاظ على النتائج.' },
        { question: 'هل تقبلون الدفع ببطاقة؟', answer: 'نعم، نقبل الدفع نقدًا وبجميع أنواع البطاقات البنكية. كما يتوفر التقسيط بدون فوائد على بعض حزم الإجراءات.' },
      ],
    },

    services: {
      title: 'خدماتنا',
      cards: {
        body:       { label: 'تصحيح الجسم',    sub: 'LPG · مساج · أقنعة' },
        face:       { label: 'العناية بالوجه', sub: 'تقشير · بيوريفيتاليزيشن' },
        injections: { label: 'الحقن',           sub: 'تخطيط · بوتوكس' },
        laser:      { label: 'الأجهزة',         sub: 'BBL · RF · INDIBA®' },
      },
      cta: 'عرض الخدمات والأسعار',
    },

    tagline: {
      prefix: 'نحن لا نحسّن المظهر فقط —',
      bold:   'نكشف تميزك الفريد.',
    },

    features: {
      items: [
        { title: 'النهج\nالفردي',        description: 'نضع برامج شخصية لكل عميل' },
        { title: 'التقنيات\nالمبتكرة',   description: 'نستخدم فقط المناهج المثبتة والآمنة' },
        { title: 'الخدمة\nالمتميزة',     description: 'الراحة والجماليات والرعاية في كل خطوة' },
        { title: 'أجواء\nالفخامة',       description: 'مكان تسترخي فيه وتتحول' },
      ],
    },

    cta: {
      title: 'هل أنت مستعد للتحول؟',
      subtitle: 'احجز استشارة مجانية الآن واحصل على خطة إجراءات شخصية.',
      bookOnline: 'الحجز الإلكتروني',
      whatsapp: 'واتساب',
      call: 'اتصل بنا',
    },

    footer: {
      tagline: 'عيادة تجميل متميزة. تقنيات متقدمة ونهج شخصي لكل عميل.',
      columns: { services: 'الخدمات', clinic: 'العيادة', info: 'معلومات' },
      links: {
        facial: 'العناية بالوجه', injections: 'حقن التجميل', hardware: 'التجميل بالأجهزة',
        massage: 'مساج الجسم', laser: 'إزالة الشعر بالليزر', masters: 'المتخصصون',
        portfolio: 'المعرض', promo: 'العروض', reviews: 'التقييمات', blog: 'المدونة',
        about: 'عنّا', faq: 'الأسئلة الشائعة', booking: 'الحجز الإلكتروني', contacts: 'اتصل بنا', account: 'حسابي',
      },
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
    },
  },
} as const;

export type Translations = typeof t[Lang];
