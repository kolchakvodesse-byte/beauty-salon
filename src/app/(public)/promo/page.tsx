'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const PROMOS = [
  {
    id: '1',
    title: 'Woman Health',
    description: 'Комплексная программа женского здоровья: гинекологический массаж, коррекция тела, уход за кожей. Программа рассчитана на 4 процедуры, включает диагностику и персональный план.',
    price: 14900,
    priceOld: 21000,
    validUntil: '31 мая 2025',
    badge: 'Хит месяца',
    includes: ['4 процедуры', 'Консультация', 'Персональный план', 'Диагностика кожи'],
  },
  {
    id: '2',
    title: 'Advanced Bio-Stimulation',
    description: 'Протокол биостимуляции и регенерации с применением PRP-терапии и мезококтейлей. Омоложение на клеточном уровне. Результат заметен уже после первого сеанса.',
    price: 18500,
    priceOld: 27000,
    validUntil: '15 июня 2025',
    badge: 'Популярное',
    includes: ['PRP-терапия', 'Мезотерапия', '3 сеанса', 'Уход за кожей'],
  },
  {
    id: '3',
    title: 'BBL Acne Protocols',
    description: 'Лечение акне и постакне с помощью BBL-технологии. Чистая кожа уже через 3 процедуры. Протокол включает подготовительный уход и реабилитацию.',
    price: 9900,
    priceOld: 15000,
    validUntil: '30 мая 2025',
    badge: 'Скоро заканчивается',
    includes: ['3 BBL-процедуры', 'Подготовительный уход', 'Реабилитация', 'Домашний уход'],
  },
  {
    id: '4',
    title: 'Anti-Age Комплекс',
    description: 'RF-лифтинг + ботулинотерапия + контурная пластика. Омоложение без операций. Комплексный подход к коррекции возрастных изменений.',
    price: 24900,
    priceOld: 35000,
    validUntil: '30 июня 2025',
    badge: null,
    includes: ['RF-лифтинг', 'Ботулинотерапия', 'Контурная пластика', 'Консультация'],
  },
  {
    id: '5',
    title: 'Body Contouring Program',
    description: 'Программа коррекции фигуры: LPG-массаж + INDIBA® + обёртывания. 6 сеансов для видимого результата. Помогает убрать целлюлит и скорректировать объёмы.',
    price: 19900,
    priceOld: 29000,
    validUntil: '30 июня 2025',
    badge: null,
    includes: ['6 сеансов LPG', 'INDIBA® терапия', '2 обёртывания', 'Персональный план'],
  },
  {
    id: '6',
    title: 'SMAS Lifting & Collagen Boost',
    description: 'Ультразвуковой SMAS-лифтинг в сочетании с коллагеностимулирующей терапией. Эффект подтяжки без хирургического вмешательства сохраняется до 18 месяцев.',
    price: 32900,
    priceOld: 48000,
    validUntil: '15 июля 2025',
    badge: 'Премиум',
    includes: ['SMAS-лифтинг', 'Коллагеновая терапия', 'PRP-терапия', 'Послепроцедурный уход'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function PromoPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Специальные предложения
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
              Акции и программы
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Ограниченные предложения на комплексные программы. Запишитесь сейчас — цены действуют до указанной даты.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PROMOS.map((promo) => {
              const discount = Math.round((1 - promo.price / promo.priceOld) * 100);
              return (
                <motion.div
                  key={promo.id}
                  variants={card}
                  className="relative bg-dark rounded-2xl p-8 border border-border-subtle hover:border-accent-warm/40 transition-all duration-300 flex flex-col gap-5"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {promo.badge && (
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-accent-warm text-dark rounded-full mb-3">
                          {promo.badge}
                        </span>
                      )}
                      <h3 className="font-display text-2xl font-semibold text-white">{promo.title}</h3>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-accent-warm bg-accent-warm/10 px-2.5 py-1 rounded-lg">
                      -{discount}%
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">{promo.description}</p>

                  {/* Includes */}
                  <ul className="grid grid-cols-2 gap-1.5">
                    {promo.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-1.5 text-xs text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent-warm shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-border-subtle">
                    <div>
                      <p className="text-3xl font-semibold text-white">
                        {promo.price.toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-sm text-muted line-through mt-0.5">
                        {promo.priceOld.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        <Clock size={13} />
                        <span>до {promo.validUntil}</span>
                      </div>
                      <Link
                        href={ROUTES.booking}
                        className="flex items-center gap-2 px-5 py-2.5 bg-accent-warm text-dark text-sm font-semibold rounded-xl hover:bg-accent-light transition-colors"
                      >
                        Записаться <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Info banner */}
      <section className="py-12 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent-warm/5 border border-accent-warm/20 rounded-2xl p-8 text-center">
            <p className="text-sm text-muted max-w-xl mx-auto">
              Не нашли подходящую акцию?{' '}
              <a href="https://wa.me/79991234567" className="text-accent-warm hover:text-accent-light transition-colors">
                Напишите нам в WhatsApp
              </a>{' '}
              — составим индивидуальное предложение под ваши задачи.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
