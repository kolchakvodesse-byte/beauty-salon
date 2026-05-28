-- Migration 001: Initialize database schema
-- Beauty Salon Template - PostgreSQL 15+
-- Status: Production-ready

-- ============================================
-- 1. SITE SETTINGS (Конфигурация сайта)
-- ============================================
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

-- ============================================
-- 2. SERVICE CATEGORIES (Категории услуг)
-- ============================================
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

CREATE INDEX idx_service_categories_slug ON service_categories(slug);
CREATE INDEX idx_service_categories_active ON service_categories(is_active);

-- ============================================
-- 3. SERVICES (Услуги)
-- ============================================
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES service_categories(id) ON DELETE SET NULL,
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
CREATE INDEX idx_services_featured ON services(is_featured);

-- ============================================
-- 4. MASTERS (Мастера)
-- ============================================
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

-- ============================================
-- 5. MASTER_SERVICES (Связь мастер ↔ услуга)
-- ============================================
CREATE TABLE master_services (
  master_id UUID NOT NULL REFERENCES masters(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  PRIMARY KEY (master_id, service_id)
);

CREATE INDEX idx_master_services_service ON master_services(service_id);

-- ============================================
-- 6. MASTER_SCHEDULES (Расписание мастеров)
-- ============================================
CREATE TABLE master_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  master_id UUID NOT NULL REFERENCES masters(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_working BOOLEAN DEFAULT TRUE,
  UNIQUE(master_id, day_of_week)
);

CREATE INDEX idx_master_schedules_master ON master_schedules(master_id);

-- ============================================
-- 7. CLIENTS (Клиенты)
-- ============================================
CREATE TABLE clients (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  bonus_points INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_phone ON clients(phone);

-- ============================================
-- 8. BOOKINGS (Записи на услуги)
-- ============================================
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE SET NULL,
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
  master_id UUID NOT NULL REFERENCES masters(id) ON DELETE RESTRICT,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  duration_minutes INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' 
    CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  client_name TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(master_id, booking_date, booking_time)
);

CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_master ON bookings(master_id, booking_date);
CREATE INDEX idx_bookings_client ON bookings(client_id);
CREATE INDEX idx_bookings_status ON bookings(status);

-- ============================================
-- 9. PROMOS (Акции и промоции)
-- ============================================
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
CREATE INDEX idx_promos_valid_until ON promos(valid_until);

-- ============================================
-- 10. PORTFOLIO (До/После галерея)
-- ============================================
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

CREATE INDEX idx_portfolio_service ON portfolio(service_id);
CREATE INDEX idx_portfolio_master ON portfolio(master_id);
CREATE INDEX idx_portfolio_active ON portfolio(is_active);

-- ============================================
-- 11. REVIEWS (Отзывы клиентов)
-- ============================================
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text TEXT NOT NULL,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  master_id UUID REFERENCES masters(id) ON DELETE SET NULL,
  photo_url TEXT,
  source TEXT DEFAULT 'manual' CHECK (source IN ('manual', 'google')),
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_reviews_published ON reviews(is_published);
CREATE INDEX idx_reviews_source ON reviews(source);
CREATE INDEX idx_reviews_rating ON reviews(rating);

-- ============================================
-- 12. FAQ (Часто задаваемые вопросы)
-- ============================================
CREATE TABLE faq (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  question_en TEXT,
  answer TEXT NOT NULL,
  answer_en TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_faq_active ON faq(is_active);

-- ============================================
-- 13. BLOG_POSTS (Статьи блога)
-- ============================================
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

-- ============================================
-- 14. ADMINS (Администраторы)
-- ============================================
CREATE TABLE admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TRIGGERS (Автоматические обновления)
-- ============================================
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

-- ============================================
-- COMMENTS (Документация схемы)
-- ============================================
COMMENT ON TABLE site_settings IS 'Глобальные настройки сайта (одна запись)';
COMMENT ON TABLE services IS 'Услуги салона с ценами и длительностью';
COMMENT ON TABLE masters IS 'Мастера салона';
COMMENT ON TABLE bookings IS 'Записи клиентов на услуги';
COMMENT ON TABLE clients IS 'Зарегистрированные клиенты (от auth.users)';
COMMENT ON COLUMN bookings.status IS 'pending → confirmed → completed или cancelled';
