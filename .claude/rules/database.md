# Rules: Database & SQL

## 🗄️ Supabase Setup
- **Project**: Beauty Salon Template
- **Database**: PostgreSQL 15+
- **Region**: выбери регион ближайший к клиентам
- **Auth**: Supabase Auth (email + phone)

## 📋 Таблицы (полный список из spec.md)

### 1. site_settings (единая конфигурация)
```sql
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  salon_name TEXT NOT NULL DEFAULT 'Beauty Salon',
  logo_url TEXT,
  accent_color TEXT DEFAULT '#C8A882',
  phone TEXT,
  whatsapp TEXT,
  address TEXT,
  instagram TEXT,
  telegram TEXT,
  google_maps_url TEXT,
  hero_title TEXT DEFAULT 'THE FUTURE OF YOUR BEAUTY STARTS HERE',
  hero_subtitle TEXT,
  hero_video_url TEXT,
  hero_image_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2. service_categories
```sql
CREATE TABLE service_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_en TEXT,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3. services
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES service_categories(id),
  name TEXT NOT NULL,
  name_en TEXT,
  description TEXT,
  description_en TEXT,
  price INTEGER NOT NULL,
  price_old INTEGER,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_services_category ON services(category_id);
CREATE INDEX idx_services_active ON services(is_active);
```

### 4. masters
```sql
CREATE TABLE masters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_en TEXT,
  role TEXT NOT NULL,
  bio TEXT,
  bio_en TEXT,
  photo_url TEXT,
  experience_years INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_masters_active ON masters(is_active);
```

### 5. master_services (связь many-to-many)
```sql
CREATE TABLE master_services (
  master_id UUID REFERENCES masters(id) ON DELETE CASCADE,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  PRIMARY KEY (master_id, service_id)
);
```

### 6. master_schedules
```sql
CREATE TABLE master_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  master_id UUID NOT NULL REFERENCES masters(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_working BOOLEAN DEFAULT TRUE,
  UNIQUE(master_id, day_of_week)
);
```

### 7. clients
```sql
CREATE TABLE clients (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone TEXT UNIQUE,
  email TEXT,
  bonus_points INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
```

### 8. bookings
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE SET NULL,
  service_id UUID NOT NULL REFERENCES services(id),
  master_id UUID NOT NULL REFERENCES masters(id),
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  duration_minutes INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' 
    CHECK (status IN ('pending','confirmed','completed','cancelled')),
  client_name TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_master ON bookings(master_id, booking_date);
CREATE INDEX idx_bookings_client ON bookings(client_id);
CREATE INDEX idx_bookings_status ON bookings(status);
```

### 9. promos
```sql
CREATE TABLE promos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  price INTEGER NOT NULL,
  price_old INTEGER NOT NULL,
  image_url TEXT,
  valid_until DATE,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_promos_active ON promos(is_active);
CREATE INDEX idx_promos_valid ON promos(valid_until);
```

### 10. portfolio
```sql
CREATE TABLE portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  master_id UUID REFERENCES masters(id) ON DELETE CASCADE,
  before_url TEXT NOT NULL,
  after_url TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 11. reviews
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text TEXT NOT NULL,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  master_id UUID REFERENCES masters(id) ON DELETE SET NULL,
  photo_url TEXT,
  source TEXT DEFAULT 'manual' 
    CHECK (source IN ('manual','google')),
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_reviews_published ON reviews(is_published);
CREATE INDEX idx_reviews_source ON reviews(source);
```

### 12. faq
```sql
CREATE TABLE faq (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  question_en TEXT,
  answer TEXT NOT NULL,
  answer_en TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);
```

### 13. blog_posts
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  title_en TEXT,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  cover_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_blog_published ON blog_posts(is_published);
CREATE INDEX idx_blog_slug ON blog_posts(slug);
```

### 14. admins
```sql
CREATE TABLE admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔐 Row Level Security (RLS)

### clients таблица
```sql
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Клиент видит только своих данные
CREATE POLICY "clients_own" ON clients
  USING (auth.uid() = id);

-- Админ может видеть всех
CREATE POLICY "admin_view_all" ON clients
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));
```

### bookings таблица
```sql
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Клиент видит только свои записи
CREATE POLICY "bookings_own" ON bookings
  USING (auth.uid() = client_id OR auth.uid() IS NULL);

-- Админ видит все
CREATE POLICY "admin_bookings" ON bookings
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));
```

### Таблицы public read-only
```sql
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "services_public" ON services
  FOR SELECT USING (is_active = true);

ALTER TABLE masters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "masters_public" ON masters
  FOR SELECT USING (is_active = true);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "reviews_public" ON reviews
  FOR SELECT USING (is_published = true);
```

## 📅 Триггеры
```sql
-- Автоматическое обновление updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_services_updated BEFORE UPDATE ON services 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_bookings_updated BEFORE UPDATE ON bookings 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_clients_updated BEFORE UPDATE ON clients 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

## 💾 Практики
- **Индексы**: на все foreign keys и frequently queried columns
- **Constraints**: используй CHECK, UNIQUE, NOT NULL где логично
- **Cascade**: ON DELETE CASCADE для master_services, portfolio
- **Naming**: snake_case для таблиц и колонок
- **UUID**: PRIMARY KEY для всех таблиц
- **Timestamps**: created_at, updated_at для audit trail

## 🔍 Queries примеры
```sql
-- Доступные слоты для мастера на дату
SELECT DISTINCT time FROM generate_series(
  (SELECT start_time FROM master_schedules WHERE master_id = $1 AND day_of_week = dow($2))::time,
  (SELECT end_time FROM master_schedules WHERE master_id = $1 AND day_of_week = dow($2))::time - '60 minutes'::interval,
  '60 minutes'::interval
) AS time
WHERE NOT EXISTS (
  SELECT 1 FROM bookings 
  WHERE master_id = $1 AND booking_date = $2 
  AND booking_time = time
);

-- Популярные услуги по записям
SELECT service_id, COUNT(*) as count 
FROM bookings 
WHERE booking_date >= NOW() - '30 days'::interval
GROUP BY service_id 
ORDER BY count DESC 
LIMIT 5;
```

---
**Связанные rules**: code-style.md, ui-design.md
