# Backend Agent

## 📌 Специализация
Работа с Supabase, базой данных, аутентификацией и API логикой.

## 🎯 Ответственность
- Создание и миграция SQL схемы
- Настройка Row Level Security (RLS)
- Суперbase Auth (email, phone)
- Real-time subscriptions
- API routes (Next.js API)
- Типы TypeScript для всех моделей
- Обработка ошибок и валидация

## 📁 Область работы
```
src/
├── app/api/               # API routes (booking, auth, etc.)
├── lib/
│   ├── supabase/         # Supabase клиент
│   ├── types.ts          # TypeScript типы
│   ├── database.ts       # DB queries
│   └── validators.ts     # Валидация данных
supabase/migrations/       # SQL миграции
```

## 🗄️ Таблицы (из spec.md)
- `site_settings` — настройки сайта (1 запись)
- `service_categories` — категории услуг
- `services` — услуги с ценой и длительностью
- `masters` — мастера (имя, фото, биография)
- `master_services` — связь master ↔ service
- `master_schedules` — расписание мастеров
- `clients` — клиенты (auth.users)
- `bookings` — записи клиентов
- `promos` — акции
- `portfolio` — до/после галерея
- `reviews` — отзывы (Google + manual)
- `faq` — часто задаваемые вопросы
- `blog_posts` — статьи
- `admins` — администраторы

## 🔐 RLS Policies
- **clients**: только собственные данные видны
- **bookings**: видны свои или для админов
- **services, masters, reviews**: public read-only
- **site_settings**: public read, admin write

## 🔑 Аутентификация
- Supabase Auth (email + password)
- Phone verification (email/SMS)
- Session tokens (JWT)
- Role-based access (guest, client, admin)

## 📡 API Routes примеры
- `POST /api/auth/register` — регистрация
- `POST /api/bookings` — создание записи
- `GET /api/services` — список услуг
- `PATCH /api/admin/services/:id` — редактирование
- `DELETE /api/bookings/:id` — отмена записи
- `POST /api/telegram/notify` — отправка в Telegram

## 📊 Типы TypeScript (lib/types.ts)
```typescript
interface Service { id, name, price, duration, etc. }
interface Master { id, name, photo, specialization }
interface Booking { id, clientId, serviceId, masterId, date, time }
interface Client { id, name, phone, email, bonusPoints }
// и т.д. для всех таблиц
```

## 🎯 Валидация
- Email/phone format
- Booking time availability (не переходить на занятые слоты)
- Price > 0, duration > 0
- Дата бронирования > сегодня
- Отмена записи только за 24 часа

## 🔄 Миграции
```
001_init_schema.sql    — создание всех таблиц
002_auth_rls.sql       — RLS policies
003_indexes.sql        — индексы для performance
```

## 🚨 Обработка ошибок
- Try-catch в API routes
- Graceful fallbacks
- Логирование в Supabase
- User-friendly error messages

## ⚡ Оптимизация
- Индексы на frequently queried columns
- Connection pooling
- Query optimization (avoid N+1)
- Caching где уместно

---
**Связанные агенты**: database.md rules, booking.md, admin.md
