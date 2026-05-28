-- Migration 002: Row Level Security (RLS) policies
-- Beauty Salon Template - PostgreSQL 15+
-- Protect data with granular permissions

-- ============================================
-- CLIENTS TABLE - RLS
-- ============================================
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Клиент видит только свои данные
CREATE POLICY "clients_own_data"
  ON clients
  FOR SELECT
  USING (auth.uid() = id);

-- Админ видит всех клиентов
CREATE POLICY "admin_clients_view"
  ON clients
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Клиент может обновлять свои данные
CREATE POLICY "clients_update_own"
  ON clients
  FOR UPDATE
  USING (auth.uid() = id);

-- Админ может обновлять данные клиентов
CREATE POLICY "admin_clients_update"
  ON clients
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- BOOKINGS TABLE - RLS
-- ============================================
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Клиент видит свои записи
CREATE POLICY "bookings_own_data"
  ON bookings
  FOR SELECT
  USING (auth.uid() = client_id OR auth.uid() IS NULL);

-- Админ видит все записи
CREATE POLICY "admin_bookings_view"
  ON bookings
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Клиент может создавать записи
CREATE POLICY "bookings_create"
  ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Клиент может отменять свои записи
CREATE POLICY "bookings_update_own"
  ON bookings
  FOR UPDATE
  USING (auth.uid() = client_id);

-- Админ может редактировать любые записи
CREATE POLICY "admin_bookings_update"
  ON bookings
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- SERVICES TABLE - RLS (Public read-only)
-- ============================================
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Все видят активные услуги
CREATE POLICY "services_public_read"
  ON services
  FOR SELECT
  USING (is_active = true);

-- Админ видит все услуги (включая неактивные)
CREATE POLICY "admin_services_view"
  ON services
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Админ может создавать, обновлять, удалять услуги
CREATE POLICY "admin_services_write"
  ON services
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_services_update"
  ON services
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_services_delete"
  ON services
  FOR DELETE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- MASTERS TABLE - RLS (Public read-only)
-- ============================================
ALTER TABLE masters ENABLE ROW LEVEL SECURITY;

-- Все видят активных мастеров
CREATE POLICY "masters_public_read"
  ON masters
  FOR SELECT
  USING (is_active = true);

-- Админ видит всех мастеров
CREATE POLICY "admin_masters_view"
  ON masters
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Админ может управлять мастерами
CREATE POLICY "admin_masters_write"
  ON masters
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_masters_update"
  ON masters
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_masters_delete"
  ON masters
  FOR DELETE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- MASTER_SCHEDULES TABLE - RLS
-- ============================================
ALTER TABLE master_schedules ENABLE ROW LEVEL SECURITY;

-- Все видят расписания активных мастеров
CREATE POLICY "schedules_public_read"
  ON master_schedules
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM masters WHERE id = master_id AND is_active = true));

-- Админ видит все расписания
CREATE POLICY "admin_schedules_view"
  ON master_schedules
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Админ может управлять расписаниями
CREATE POLICY "admin_schedules_write"
  ON master_schedules
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_schedules_update"
  ON master_schedules
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- REVIEWS TABLE - RLS
-- ============================================
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Все видят опубликованные отзывы
CREATE POLICY "reviews_public_read"
  ON reviews
  FOR SELECT
  USING (is_published = true);

-- Админ видит все отзывы
CREATE POLICY "admin_reviews_view"
  ON reviews
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Все могут создавать отзывы (модерируются админом)
CREATE POLICY "reviews_create"
  ON reviews
  FOR INSERT
  WITH CHECK (true);

-- Админ может управлять отзывами
CREATE POLICY "admin_reviews_update"
  ON reviews
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_reviews_delete"
  ON reviews
  FOR DELETE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- PROMOS TABLE - RLS (Public read-only)
-- ============================================
ALTER TABLE promos ENABLE ROW LEVEL SECURITY;

-- Все видят активные акции
CREATE POLICY "promos_public_read"
  ON promos
  FOR SELECT
  USING (is_active = true);

-- Админ видит все акции
CREATE POLICY "admin_promos_view"
  ON promos
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- Админ может управлять акциями
CREATE POLICY "admin_promos_write"
  ON promos
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_promos_update"
  ON promos
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_promos_delete"
  ON promos
  FOR DELETE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- PORTFOLIO TABLE - RLS (Public read-only)
-- ============================================
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "portfolio_public_read"
  ON portfolio
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "admin_portfolio_write"
  ON portfolio
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_portfolio_update"
  ON portfolio
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- FAQ TABLE - RLS (Public read-only)
-- ============================================
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;

CREATE POLICY "faq_public_read"
  ON faq
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "admin_faq_write"
  ON faq
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_faq_update"
  ON faq
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- BLOG_POSTS TABLE - RLS
-- ============================================
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "blog_public_read"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "admin_blog_view"
  ON blog_posts
  FOR SELECT
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_blog_write"
  ON blog_posts
  FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_blog_update"
  ON blog_posts
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================
-- SITE_SETTINGS TABLE - RLS
-- ============================================
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Все видят настройки
CREATE POLICY "settings_public_read"
  ON site_settings
  FOR SELECT
  USING (true);

-- Админ может обновлять настройки
CREATE POLICY "admin_settings_update"
  ON site_settings
  FOR UPDATE
  USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));
