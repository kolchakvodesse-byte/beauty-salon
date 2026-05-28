import { supabase } from './client';
import type {
  Service,
  Master,
  Booking,
  Review,
  Promo,
  SiteSettings,
  ServiceCategory,
} from '@/lib/types';

// ============================================
// SERVICES
// ============================================
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');

  if (error) throw error;
  return data as Service[];
}

export async function getServiceById(id: string) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Service;
}

export async function getServicesByCategory(categorySlug: string) {
  const { data: category } = await supabase
    .from('service_categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();

  if (!category) return [];

  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('category_id', category.id)
    .eq('is_active', true)
    .order('sort_order');

  if (error) throw error;
  return data as Service[];
}

// ============================================
// CATEGORIES
// ============================================
export async function getCategories() {
  const { data, error } = await supabase
    .from('service_categories')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');

  if (error) throw error;
  return data as ServiceCategory[];
}

// ============================================
// MASTERS
// ============================================
export async function getMasters() {
  const { data, error } = await supabase
    .from('masters')
    .select('*')
    .eq('is_active', true)
    .order('sort_order');

  if (error) throw error;
  return data as Master[];
}

export async function getMasterById(id: string) {
  const { data, error } = await supabase
    .from('masters')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Master;
}

export async function getMastersByService(serviceId: string) {
  const { data, error } = await supabase
    .from('master_services')
    .select('master_id, masters(*)')
    .eq('service_id', serviceId);

  if (error) throw error;
  return data?.map((item) => item.masters) as unknown as Master[];
}

// ============================================
// BOOKINGS
// ============================================
export async function getBookingsByMasterAndDate(masterId: string, date: string) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('master_id', masterId)
    .eq('booking_date', date)
    .in('status', ['pending', 'confirmed']);

  if (error) throw error;
  return data as Booking[];
}

export async function createBooking(booking: any) {
  const { data, error } = await supabase.from('bookings').insert(booking).select();

  if (error) throw error;
  return data?.[0] as Booking;
}

export async function getClientBookings(clientId: string) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('client_id', clientId)
    .in('status', ['pending', 'confirmed'])
    .order('booking_date', { ascending: true });

  if (error) throw error;
  return data as Booking[];
}

// ============================================
// REVIEWS
// ============================================
export async function getPublishedReviews(limit = 10) {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as Review[];
}

export async function getAvgRating() {
  const { data, error } = await supabase
    .from('reviews')
    .select('rating')
    .eq('is_published', true);

  if (error || !data || data.length === 0) return 5;

  const avg = data.reduce((sum, r) => sum + r.rating, 0) / data.length;
  return Math.round(avg * 10) / 10;
}

// ============================================
// PROMOS
// ============================================
export async function getActivePromos() {
  const { data, error } = await supabase
    .from('promos')
    .select('*')
    .eq('is_active', true)
    .gt('valid_until', new Date().toISOString().split('T')[0])
    .order('sort_order');

  if (error) throw error;
  return data as Promo[];
}

// ============================================
// SITE SETTINGS
// ============================================
export async function getSiteSettings(): Promise<SiteSettings> {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .limit(1)
    .single();

  if (error) throw error;
  return data as SiteSettings;
}

// ============================================
// MASTER SCHEDULES
// ============================================
export async function getMasterSchedule(masterId: string) {
  const { data, error } = await supabase
    .from('master_schedules')
    .select('*')
    .eq('master_id', masterId)
    .eq('is_working', true);

  if (error) throw error;
  return data;
}
