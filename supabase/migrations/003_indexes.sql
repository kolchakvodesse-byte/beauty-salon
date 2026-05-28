-- Migration 003: Performance indexes and optimizations
-- Beauty Salon Template - PostgreSQL 15+

-- ============================================
-- SERVICE_CATEGORIES INDEXES
-- ============================================
CREATE INDEX idx_service_categories_sort 
  ON service_categories(sort_order) 
  WHERE is_active = true;

-- ============================================
-- SERVICES INDEXES
-- ============================================
CREATE INDEX idx_services_category_active 
  ON services(category_id, is_active);

CREATE INDEX idx_services_price 
  ON services(price) 
  WHERE is_active = true;

-- Full-text search на названиях услуг (для поиска)
CREATE INDEX idx_services_name_trgm 
  ON services 
  USING gin (name gin_trgm_ops);

-- ============================================
-- MASTERS INDEXES
-- ============================================
CREATE INDEX idx_masters_sort 
  ON masters(sort_order) 
  WHERE is_active = true;

-- ============================================
-- MASTER_SERVICES INDEXES (многие-ко-многим)
-- ============================================
CREATE INDEX idx_master_services_master 
  ON master_services(master_id);

-- ============================================
-- MASTER_SCHEDULES INDEXES
-- ============================================
-- Быстрый поиск расписания по дню недели
CREATE INDEX idx_schedules_day_of_week 
  ON master_schedules(day_of_week) 
  WHERE is_working = true;

CREATE INDEX idx_schedules_master_day 
  ON master_schedules(master_id, day_of_week);

-- ============================================
-- BOOKINGS INDEXES (критично для performance)
-- ============================================
-- Частый запрос: "Найти все записи на эту дату для этого мастера"
CREATE INDEX idx_bookings_master_date 
  ON bookings(master_id, booking_date) 
  WHERE status != 'cancelled';

-- Поиск свободных слотов
CREATE INDEX idx_bookings_master_date_time 
  ON bookings(master_id, booking_date, booking_time) 
  WHERE status IN ('pending', 'confirmed');

-- Для клиента: "Мои записи"
CREATE INDEX idx_bookings_client_date 
  ON bookings(client_id, booking_date) 
  WHERE status IN ('pending', 'confirmed');

-- Для аналитики: "Записи за период"
CREATE INDEX idx_bookings_date_range 
  ON bookings(booking_date) 
  WHERE status IN ('confirmed', 'completed');

-- ============================================
-- PROMOS INDEXES
-- ============================================
CREATE INDEX idx_promos_active_valid 
  ON promos(is_active, valid_until);

-- Автоматическое скрытие истёкших акций
CREATE INDEX idx_promos_expired 
  ON promos(valid_until) 
  WHERE is_active = true AND valid_until < NOW()::date;

-- ============================================
-- REVIEWS INDEXES
-- ============================================
-- Для публичного отображения отзывов
CREATE INDEX idx_reviews_published_created 
  ON reviews(is_published, created_at DESC) 
  WHERE is_published = true;

-- Для модерации
CREATE INDEX idx_reviews_unpublished 
  ON reviews(is_published, created_at DESC) 
  WHERE is_published = false;

-- Средний рейтинг по услуге
CREATE INDEX idx_reviews_service_rating 
  ON reviews(service_id, rating) 
  WHERE is_published = true;

-- ============================================
-- PORTFOLIO INDEXES
-- ============================================
CREATE INDEX idx_portfolio_active 
  ON portfolio(is_active) 
  WHERE is_active = true;

CREATE INDEX idx_portfolio_service_active 
  ON portfolio(service_id) 
  WHERE is_active = true;

CREATE INDEX idx_portfolio_master_active 
  ON portfolio(master_id) 
  WHERE is_active = true;

-- ============================================
-- BLOG_POSTS INDEXES
-- ============================================
-- Для публичной выдачи
CREATE INDEX idx_blog_published_date 
  ON blog_posts(is_published, published_at DESC) 
  WHERE is_published = true;

-- Full-text search на статьях
CREATE INDEX idx_blog_title_trgm 
  ON blog_posts 
  USING gin (title gin_trgm_ops);

-- ============================================
-- FAQ INDEXES
-- ============================================
CREATE INDEX idx_faq_active_sort 
  ON faq(sort_order) 
  WHERE is_active = true;

-- ============================================
-- CLIENTS INDEXES
-- ============================================
-- Для быстрого поиска по телефону при регистрации
CREATE INDEX idx_clients_phone_unique 
  ON clients(phone) 
  WHERE phone IS NOT NULL;

-- ============================================
-- COMPOSITE INDEXES (для JOIN-ов)
-- ============================================

-- Для booking_form: найти все доступные мастера услуги на дату
CREATE INDEX idx_master_services_date 
  ON master_services(service_id);

-- Для admin: статистика по категориям
CREATE INDEX idx_services_category_sort 
  ON services(category_id, sort_order) 
  WHERE is_active = true;

-- ============================================
-- MATERIALIZED VIEWS (для кэширования)
-- ============================================

-- Кэш популярных услуг (обновляется вручную или по расписанию)
CREATE MATERIALIZED VIEW popular_services AS
SELECT 
  s.id,
  s.name,
  COUNT(b.id) as booking_count,
  AVG(r.rating)::numeric(2,1) as avg_rating,
  COUNT(CASE WHEN r.is_published THEN 1 END) as review_count
FROM services s
LEFT JOIN bookings b ON s.id = b.service_id 
  AND b.booking_date >= NOW()::date - '30 days'::interval
LEFT JOIN reviews r ON s.id = r.service_id
WHERE s.is_active = true
GROUP BY s.id, s.name
ORDER BY booking_count DESC;

CREATE INDEX idx_popular_services_bookings 
  ON popular_services(booking_count DESC);

-- ============================================
-- STATISTICS (для Query Planner)
-- ============================================
-- Обнови статистику таблиц для лучшей оптимизации
ANALYZE services;
ANALYZE bookings;
ANALYZE masters;
ANALYZE reviews;
ANALYZE clients;

-- ============================================
-- COMMENTS (Документация)
-- ============================================
COMMENT ON INDEX idx_bookings_master_date IS 
  'Критический индекс для поиска свободных слотов при бронировании';

COMMENT ON INDEX idx_services_name_trgm IS 
  'Триграмм индекс для полнотекстового поиска услуг';

COMMENT ON MATERIALIZED VIEW popular_services IS 
  'Кэш популярных услуг - обновить после добавления/редактирования услуг';
