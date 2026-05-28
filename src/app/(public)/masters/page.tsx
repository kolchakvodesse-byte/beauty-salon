import { getMasters } from '@/lib/supabase/queries';
import { MasterCard } from '@/components/sections/master-card';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import type { Master } from '@/lib/types';

export const metadata = {
  title: 'Мастера | Beauty Salon',
  description: 'Наша команда международно сертифицированных специалистов.',
};

const mockMasters: Master[] = [
  {
    id: '1',
    name: 'Анна Петрова',
    name_en: 'Anna Petrova',
    role: 'Косметолог-эстетист',
    bio: 'Международно сертифицированный специалист с опытом 8 лет. Специализируется на инъекционной косметологии и уходе за кожей.',
    bio_en: null,
    photo_url: null,
    experience_years: 8,
    is_active: true,
    sort_order: 1,
    created_at: '',
  },
  {
    id: '2',
    name: 'Мария Соколова',
    name_en: 'Maria Sokolova',
    role: 'Мастер аппаратной косметологии',
    bio: 'Эксперт по аппаратным методикам: INDIBA®, RF-лифтинг, микротоки. 6 лет в профессии.',
    bio_en: null,
    photo_url: null,
    experience_years: 6,
    is_active: true,
    sort_order: 2,
    created_at: '',
  },
  {
    id: '3',
    name: 'Елена Кузнецова',
    name_en: 'Elena Kuznetsova',
    role: 'Специалист по телу',
    bio: 'Сертифицированный массажист и специалист по коррекции фигуры с опытом 10 лет.',
    bio_en: null,
    photo_url: null,
    experience_years: 10,
    is_active: true,
    sort_order: 3,
    created_at: '',
  },
  {
    id: '4',
    name: 'Ольга Новикова',
    name_en: 'Olga Novikova',
    role: 'Трихолог-дерматолог',
    bio: 'Специалист по здоровью волос и кожи головы. PRP-терапия, мезотерапия. 7 лет опыта.',
    bio_en: null,
    photo_url: null,
    experience_years: 7,
    is_active: true,
    sort_order: 4,
    created_at: '',
  },
  {
    id: '5',
    name: 'Ирина Белова',
    name_en: 'Irina Belova',
    role: 'Лазерный технолог',
    bio: 'Специалист по лазерной эпиляции и BBL-терапии. Работает на оборудовании последнего поколения.',
    bio_en: null,
    photo_url: null,
    experience_years: 5,
    is_active: true,
    sort_order: 5,
    created_at: '',
  },
  {
    id: '6',
    name: 'Наталья Орлова',
    name_en: 'Natalia Orlova',
    role: 'Нутрициолог-косметолог',
    bio: 'Холистический подход к красоте: изнутри и снаружи. Разрабатывает программы питания и ухода.',
    bio_en: null,
    photo_url: null,
    experience_years: 9,
    is_active: true,
    sort_order: 6,
    created_at: '',
  },
];

async function getMastersData(): Promise<Master[]> {
  if (!isSupabaseConfigured) return mockMasters;
  try {
    return await getMasters();
  } catch {
    return mockMasters;
  }
}

export default async function MastersPage() {
  const masters = await getMastersData();

  return (
    <main className="bg-dark min-h-screen">
      {/* Page header */}
      <section className="pt-20 pb-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
            Наша команда
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
            A-List специалисты
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Международно сертифицированные профессионалы с многолетним опытом. Каждый мастер — эксперт в своей области.
          </p>
        </div>
      </section>

      {/* Masters grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masters.map((master) => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border-subtle">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-semibold text-white mb-3">
            Выбрали мастера?
          </h2>
          <p className="text-muted mb-8">Запишитесь на удобное время прямо сейчас</p>
          <a
            href="/booking"
            className="inline-block px-10 py-4 bg-accent-warm text-dark rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            Записаться онлайн
          </a>
        </div>
      </section>
    </main>
  );
}
