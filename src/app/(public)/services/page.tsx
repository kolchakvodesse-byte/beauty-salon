import { getServices, getCategories } from '@/lib/supabase/queries';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { ServicesClientPage } from '@/components/sections/services-client-page';
import type { Service, ServiceCategory } from '@/lib/types';

export const metadata = {
  title: 'Услуги | Beauty Salon',
  description: 'Полный каталог профессиональных эстетических услуг. Онлайн-запись доступна.',
};

const mockCategories: ServiceCategory[] = [
  { id: 'face', name: 'Лицо', name_en: 'Face', slug: 'face', icon: null, sort_order: 1, is_active: true, created_at: '' },
  { id: 'body', name: 'Тело', name_en: 'Body', slug: 'body', icon: null, sort_order: 2, is_active: true, created_at: '' },
  { id: 'hardware', name: 'Аппаратная', name_en: 'Hardware', slug: 'hardware', icon: null, sort_order: 3, is_active: true, created_at: '' },
  { id: 'laser', name: 'Лазер', name_en: 'Laser', slug: 'laser', icon: null, sort_order: 4, is_active: true, created_at: '' },
  { id: 'injections', name: 'Инъекции', name_en: 'Injections', slug: 'injections', icon: null, sort_order: 5, is_active: true, created_at: '' },
];

const mockServices: Service[] = [
  { id: '1', category_id: 'face', name: 'Классический уход за лицом', name_en: '', description: 'Глубокое очищение, тонизирование, увлажняющая маска. Подходит для всех типов кожи.', description_en: '', price: 3500, price_old: null, duration_minutes: 60, image_url: null, is_active: true, is_featured: true, sort_order: 1, created_at: '', updated_at: '' },
  { id: '2', category_id: 'face', name: 'Биоревитализация', name_en: '', description: 'Инъекционное увлажнение кожи гиалуроновой кислотой. Восстановление тургора и сияния.', description_en: '', price: 9500, price_old: 12000, duration_minutes: 45, image_url: null, is_active: true, is_featured: true, sort_order: 2, created_at: '', updated_at: '' },
  { id: '3', category_id: 'injections', name: 'Контурная пластика губ', name_en: '', description: 'Увеличение и коррекция формы губ филлерами на основе гиалуроновой кислоты.', description_en: '', price: 12000, price_old: null, duration_minutes: 60, image_url: null, is_active: true, is_featured: false, sort_order: 3, created_at: '', updated_at: '' },
  { id: '4', category_id: 'hardware', name: 'RF-лифтинг', name_en: '', description: 'Безинъекционное подтяжение кожи с помощью радиочастотного воздействия.', description_en: '', price: 6500, price_old: 8000, duration_minutes: 60, image_url: null, is_active: true, is_featured: true, sort_order: 4, created_at: '', updated_at: '' },
  { id: '5', category_id: 'hardware', name: 'INDIBA® терапия', name_en: '', description: 'Глубокое тепловое воздействие для омоложения и лечения кожи. Клинически доказанная эффективность.', description_en: '', price: 7500, price_old: null, duration_minutes: 75, image_url: null, is_active: true, is_featured: false, sort_order: 5, created_at: '', updated_at: '' },
  { id: '6', category_id: 'laser', name: 'Лазерная эпиляция', name_en: '', description: 'Эффективное удаление волос диодным лазером. Безболезненно, долговечно.', description_en: '', price: 2500, price_old: null, duration_minutes: 30, image_url: null, is_active: true, is_featured: false, sort_order: 6, created_at: '', updated_at: '' },
  { id: '7', category_id: 'laser', name: 'BBL Acne Protocol', name_en: '', description: 'Лечение акне и постакне BBL-лазером. Видимый результат уже после 2–3 процедур.', description_en: '', price: 8500, price_old: 11000, duration_minutes: 45, image_url: null, is_active: true, is_featured: true, sort_order: 7, created_at: '', updated_at: '' },
  { id: '8', category_id: 'body', name: 'Антицеллюлитный массаж', name_en: '', description: 'Интенсивный курсовой массаж для коррекции фигуры и улучшения состояния кожи тела.', description_en: '', price: 4500, price_old: null, duration_minutes: 60, image_url: null, is_active: true, is_featured: false, sort_order: 8, created_at: '', updated_at: '' },
  { id: '9', category_id: 'body', name: 'LPG-массаж', name_en: '', description: 'Аппаратный массаж для коррекции фигуры, лимфодренажа и антицеллюлитного эффекта.', description_en: '', price: 5000, price_old: 6500, duration_minutes: 45, image_url: null, is_active: true, is_featured: false, sort_order: 9, created_at: '', updated_at: '' },
  { id: '10', category_id: 'injections', name: 'Ботулинотерапия', name_en: '', description: 'Коррекция мимических морщин ботулотоксином. Естественный омолаживающий эффект.', description_en: '', price: 15000, price_old: null, duration_minutes: 45, image_url: null, is_active: true, is_featured: false, sort_order: 10, created_at: '', updated_at: '' },
  { id: '11', category_id: 'face', name: 'Химический пилинг', name_en: '', description: 'Обновление кожи с помощью кислотного пилинга. Выравнивание тона, сужение пор.', description_en: '', price: 4000, price_old: null, duration_minutes: 50, image_url: null, is_active: true, is_featured: false, sort_order: 11, created_at: '', updated_at: '' },
  { id: '12', category_id: 'hardware', name: 'Микротоковая терапия', name_en: '', description: 'Лифтинг и тонизирование мышц лица токами низкой частоты. Безболезненно.', description_en: '', price: 4500, price_old: null, duration_minutes: 60, image_url: null, is_active: true, is_featured: false, sort_order: 12, created_at: '', updated_at: '' },
];

async function getData(): Promise<{ services: Service[]; categories: ServiceCategory[] }> {
  if (!isSupabaseConfigured) {
    return { services: mockServices, categories: mockCategories };
  }
  try {
    const [services, categories] = await Promise.all([getServices(), getCategories()]);
    return { services, categories };
  } catch {
    return { services: mockServices, categories: mockCategories };
  }
}

export default async function ServicesPage() {
  const { services, categories } = await getData();

  return (
    <main className="bg-dark min-h-screen">
      {/* Page header */}
      <section className="pt-20 pb-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
            Каталог
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
            Наши услуги
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Полный спектр профессиональных эстетических процедур с применением передовых технологий.
          </p>
        </div>
      </section>

      {/* Services with filter */}
      <ServicesClientPage services={services} categories={categories} />
    </main>
  );
}
