// Color palette
export const COLORS = {
  dark: '#0A0A0A',
  accent: '#C8A882',
  accentLight: '#D4B5A0',
  text: '#FFFFFF',
  muted: '#6B6B6B',
  borderSubtle: '#1A1A1A',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
} as const;

// Typography
export const FONTS = {
  display: 'font-display',
  sans: 'font-sans',
} as const;

// Booking constants
export const BOOKING = {
  MIN_ADVANCE_DAYS: 0,
  MAX_ADVANCE_DAYS: 90,
  SLOT_DURATION_MINUTES: 15,
  CANCELLATION_HOURS: 24,
} as const;

// Service categories
export const SERVICE_CATEGORIES = {
  FACE: 'face',
  BODY: 'body',
  HAIR: 'hair',
  NAILS: 'nails',
  SPA: 'spa',
} as const;

// Master roles
export const MASTER_ROLES = {
  BEAUTICIAN: 'beautician',
  HAIRSTYLIST: 'hairstylist',
  MASSEUSE: 'masseuse',
  COSMETOLOGIST: 'cosmetologist',
  NAIL_MASTER: 'nail_master',
} as const;

// Status badges
export const STATUS_LABELS = {
  pending: 'В ожидании',
  confirmed: 'Подтверждено',
  completed: 'Завершено',
  cancelled: 'Отменено',
} as const;

// URLs
export const ROUTES = {
  home: '/',
  services: '/services',
  masters: '/masters',
  portfolio: '/portfolio',
  promo: '/promo',
  reviews: '/reviews',
  blog: '/blog',
  booking: '/booking',
  faq: '/faq',
  contacts: '/contacts',
  about: '/about',
  account: '/account',
  accountHistory: '/account/history',
  accountBonuses: '/account/bonuses',
  admin: '/admin',
  adminServices: '/admin/services',
  adminMasters: '/admin/masters',
  adminBookings: '/admin/bookings',
  adminPromos: '/admin/promos',
  adminReviews: '/admin/reviews',
  adminSettings: '/admin/settings',
  adminAnalytics: '/admin/analytics',
} as const;

// Rating stars
export const RATING_STARS = [1, 2, 3, 4, 5] as const;

// Days of week
export const DAYS_OF_WEEK = [
  { value: 0, label: 'Воскресенье', labelEn: 'Sunday' },
  { value: 1, label: 'Понедельник', labelEn: 'Monday' },
  { value: 2, label: 'Вторник', labelEn: 'Tuesday' },
  { value: 3, label: 'Среда', labelEn: 'Wednesday' },
  { value: 4, label: 'Четверг', labelEn: 'Thursday' },
  { value: 5, label: 'Пятница', labelEn: 'Friday' },
  { value: 6, label: 'Суббота', labelEn: 'Saturday' },
] as const;
