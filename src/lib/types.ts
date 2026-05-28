// Database types
export interface Service {
  id: string;
  category_id: string;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  price: number;
  price_old: number | null;
  duration_minutes: number;
  image_url: string | null;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  name_en: string;
  slug: string;
  icon: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface Master {
  id: string;
  name: string;
  name_en: string;
  role: string;
  bio: string | null;
  bio_en: string | null;
  photo_url: string | null;
  experience_years: number | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface Booking {
  id: string;
  client_id: string | null;
  service_id: string;
  master_id: string;
  booking_date: string;
  booking_time: string;
  duration_minutes: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  client_name: string;
  client_phone: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  bonus_points: number;
  created_at: string;
  updated_at: string;
}

export interface Promo {
  id: string;
  title: string;
  title_en: string;
  description: string | null;
  price: number;
  price_old: number;
  image_url: string | null;
  valid_until: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface Review {
  id: string;
  client_name: string;
  rating: number;
  text: string;
  service_id: string | null;
  master_id: string | null;
  photo_url: string | null;
  source: 'manual' | 'google';
  is_published: boolean;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  salon_name: string;
  logo_url: string | null;
  accent_color: string;
  phone: string | null;
  whatsapp: string | null;
  address: string | null;
  instagram: string | null;
  telegram: string | null;
  google_maps_url: string | null;
  hero_title: string;
  hero_subtitle: string | null;
  hero_video_url: string | null;
  hero_image_url: string | null;
  updated_at: string;
}

export interface Portfolio {
  id: string;
  service_id: string | null;
  master_id: string | null;
  before_url: string;
  after_url: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  question_en: string;
  answer: string;
  answer_en: string;
  sort_order: number;
  is_active: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  title_en: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_url: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

// Request/Response types
export interface BookingRequest {
  service_id: string;
  master_id: string;
  booking_date: string;
  booking_time: string;
  client_name: string;
  client_phone: string;
  email?: string;
  notes?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  user_metadata?: Record<string, any>;
}
