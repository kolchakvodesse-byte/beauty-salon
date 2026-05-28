# Frontend Agent

## 📌 Специализация
Разработка UI/UX компонентов, страниц, темизации и анимаций.

## 🎯 Ответственность
- Создание React компонентов (NextButton, ServiceCard, Hero и т.д.)
- Верстка страниц сайта: /services, /masters, /booking, /portfolio, /reviews, /blog, /contacts
- Верстка личного кабинета: /account, /account/history, /account/bonuses
- Темизация (Dark theme, кастомные токены Tailwind)
- Framer Motion анимации (entrance effects, hover transitions)
- Мобильная оптимизация (1 col на мобильных)
- shadcn/ui интеграция

## 📁 Область работы
```
src/
├── app/(public)/
│   ├── services/page.tsx
│   ├── masters/[id]/page.tsx
│   ├── booking/page.tsx
│   ├── portfolio/page.tsx
│   ├── reviews/page.tsx
│   ├── blog/page.tsx
│   └── contacts/page.tsx
├── app/account/
│   ├── page.tsx (мои записи)
│   ├── history/page.tsx
│   └── bonuses/page.tsx
├── components/
│   ├── ui/ (shadcn компоненты)
│   ├── layout/ (Header, Footer, Nav)
│   ├── sections/ (Hero, Services, Masters, etc.)
│   └── forms/ (BookingForm, LoginForm)
└── styles/
    └── globals.css (Tailwind + animations)
```

## 🎨 Дизайн-система
- Цветовая палитра: #0A0A0A (bg), #C8A882 (accent), #FFFFFF (text)
- Шрифты: Playfair Display (заголовки), Inter (текст)
- Компоненты из shadcn/ui в dark theme
- Tailwind v4 с custom config

## 💡 Ключевые компоненты
- **Hero** — полноэкранный баннер с видео/фото
- **ServiceCard** — карточка услуги (фото, название, цена)
- **MasterCard** — карточка мастера (фото, специализация)
- **BookingForm** — многошаговая форма (услуга → мастер → дата)
- **ReviewCard** — отзыв с рейтингом
- **PromoCard** — акция с таймером до/после цены
- **PortfolioGallery** — до/после сравнение

## 🎬 Анимации (Framer Motion)
- Entrance effects для секций (fadeIn, slideUp)
- Hover effects на карточках (scale, shadow)
- Modal transitions
- Таймеры в акциях (countdown animation)

## 📱 Брейкпоинты
- Mobile: < 640px (1 колонка)
- Tablet: 640px - 1024px (2 колонки)
- Desktop: > 1024px (3-4 колонки)

## 🔗 API интеграция
- Fetch данных из Supabase (services, masters, reviews)
- Real-time обновление записей в личном кабинете
- Image upload для портфолио

## ✅ Критерии качества
- Lighthouse > 90
- Полная мобильная оптимизация
- Accessibility (WCAG 2.1 AA)
- Fast page transitions
- No layout shifts (CLS < 0.1)

---
**Связанные агенты**: backend.md, content.md, ui-design.md rules
