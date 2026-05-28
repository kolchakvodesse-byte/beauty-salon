'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const REVIEWS = [
  { id: '1', name: 'Екатерина М.', rating: 5, text: 'Посетила процедуру биоревитализации у Анны. Результат превзошёл все ожидания — кожа стала буквально сиять. Профессиональный подход, уютная атмосфера. Обязательно вернусь!', service: 'Биоревитализация', date: 'Май 2025', source: 'Google' },
  { id: '2', name: 'Ирина Д.', rating: 5, text: 'Делала курс RF-лифтинга. После 5 сеансов овал лица заметно подтянулся. Мария очень внимательна к деталям, подобрала программу индивидуально под мою кожу.', service: 'RF-лифтинг', date: 'Апрель 2025', source: 'Google' },
  { id: '3', name: 'Татьяна К.', rating: 5, text: 'Уже 2 года хожу только сюда. Команда профессионалов высокого уровня. Работают с новейшим оборудованием, всегда предлагают оптимальное решение. Рекомендую всем!', service: 'Комплексный уход', date: 'Апрель 2025', source: 'Google' },
  { id: '4', name: 'Светлана Р.', rating: 5, text: 'Делала коррекцию губ у Анны. Результат естественный и долговечный. Специалист объяснила каждый шаг, ответила на все вопросы. Очень довольна!', service: 'Контурная пластика', date: 'Март 2025', source: 'Google' },
  { id: '5', name: 'Наталья В.', rating: 5, text: 'INDIBA® — это что-то невероятное! После курса кожа восстановилась как за 10 лет назад. Мария — настоящий мастер своего дела. Спасибо огромное!', service: 'INDIBA® терапия', date: 'Март 2025', source: 'Google' },
  { id: '6', name: 'Анастасия П.', rating: 5, text: 'Пришла с проблемой акне, после курса BBL-терапии кожа стала чистой. Никогда не думала, что результат будет таким быстрым. Теперь советую всем подругам!', service: 'BBL Acne Protocol', date: 'Февраль 2025', source: 'Google' },
  { id: '7', name: 'Юлия О.', rating: 5, text: 'Прошла курс антицеллюлитного LPG-массажа. Результат виден уже через 3 сеанса. Елена — профессионал своего дела, работает деликатно и эффективно.', service: 'LPG-массаж', date: 'Февраль 2025', source: 'Google' },
  { id: '8', name: 'Марина С.', rating: 5, text: 'Записалась на химический пилинг. Кожа обновилась, стала более ровной и сияющей. Анна объяснила весь процесс и правила ухода после процедуры. Рекомендую!', service: 'Химический пилинг', date: 'Январь 2025', source: 'Google' },
  { id: '9', name: 'Ольга Т.', rating: 5, text: 'Лазерная эпиляция у Ирины — мой лучший выбор! Безболезненно, быстро, качественно. После 4 сеансов вопрос решён надолго. Очень довольна качеством обслуживания.', service: 'Лазерная эпиляция', date: 'Январь 2025', source: 'Google' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ReviewsPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Отзывы
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
              Что говорят клиенты
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Более 120 отзывов от реальных клиентов в Google. Средняя оценка — 5.0 из 5.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-10"
          >
            {/* Big rating */}
            <div className="text-center shrink-0">
              <p className="font-display text-7xl font-semibold text-white">5.0</p>
              <div className="flex gap-1 justify-center my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-accent-warm text-accent-warm" />
                ))}
              </div>
              <p className="text-sm text-muted">Google Reviews</p>
            </div>

            {/* Bars */}
            <div className="flex-1 w-full max-w-sm">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-muted w-4 text-right">{stars}</span>
                  <Star size={11} className="fill-accent-warm text-accent-warm shrink-0" />
                  <div className="flex-1 h-1.5 bg-border-subtle rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-warm rounded-full"
                      style={{ width: stars === 5 ? '95%' : stars === 4 ? '4%' : '1%' }}
                    />
                  </div>
                  <span className="text-xs text-muted w-6">{stars === 5 ? '114' : stars === 4 ? '5' : '1'}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { value: '120+', label: 'Отзывов' },
                { value: '98%', label: 'Рекомендуют' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-accent-warm">{s.value}</p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {REVIEWS.map((r) => (
              <motion.div
                key={r.id}
                variants={card}
                className="bg-border-subtle rounded-2xl p-6 flex flex-col gap-4"
              >
                <Quote size={20} className="text-accent-warm/40" />
                <p className="text-sm text-muted leading-relaxed grow">{r.text}</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className={s <= r.rating ? 'fill-accent-warm text-accent-warm' : 'text-border-subtle'} />
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-dark">
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-muted">{r.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted">{r.date}</p>
                    <p className="text-xs text-accent-warm/60">{r.source}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border-subtle">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-semibold text-white mb-3">Убедились в качестве?</h2>
          <p className="text-muted mb-8">Запишитесь на первую консультацию — это бесплатно</p>
          <Link
            href={ROUTES.booking}
            className="inline-block px-10 py-4 bg-accent-warm text-dark rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            Записаться онлайн
          </Link>
        </div>
      </section>
    </div>
  );
}
