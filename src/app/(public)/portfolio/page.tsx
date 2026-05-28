'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const FILTERS = [
  { id: 'all', name: 'Все работы' },
  { id: 'face', name: 'Лицо' },
  { id: 'body', name: 'Тело' },
  { id: 'injections', name: 'Инъекции' },
  { id: 'laser', name: 'Лазер' },
];

const ITEMS = [
  { id: '1', service: 'Контурная пластика губ', master: 'Анна Петрова', category: 'injections', tag: 'Губы', gradient: 'from-rose-900/40 to-pink-900/20' },
  { id: '2', service: 'SMAS-лифтинг', master: 'Мария Соколова', category: 'face', tag: 'Лицо', gradient: 'from-amber-900/30 to-yellow-900/10' },
  { id: '3', service: 'Коррекция фигуры', master: 'Елена Кузнецова', category: 'body', tag: 'Тело', gradient: 'from-teal-900/30 to-emerald-900/10' },
  { id: '4', service: 'Мезотерапия волос', master: 'Ольга Новикова', category: 'face', tag: 'Волосы', gradient: 'from-violet-900/30 to-purple-900/10' },
  { id: '5', service: 'Биоревитализация', master: 'Анна Петрова', category: 'injections', tag: 'Кожа', gradient: 'from-sky-900/30 to-blue-900/10' },
  { id: '6', service: 'BBL Acne Protocol', master: 'Ирина Белова', category: 'laser', tag: 'Акне', gradient: 'from-orange-900/30 to-red-900/10' },
  { id: '7', service: 'RF-лифтинг', master: 'Мария Соколова', category: 'face', tag: 'Лицо', gradient: 'from-lime-900/30 to-green-900/10' },
  { id: '8', service: 'LPG-массаж', master: 'Елена Кузнецова', category: 'body', tag: 'Тело', gradient: 'from-cyan-900/30 to-teal-900/10' },
  { id: '9', service: 'Лазерная эпиляция', master: 'Ирина Белова', category: 'laser', tag: 'Эпиляция', gradient: 'from-fuchsia-900/30 to-pink-900/10' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const card = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function PortfolioPage() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Наши работы
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
              Портфолио до / после
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Реальные результаты наших клиентов. Каждая работа — это история преображения.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === f.id
                    ? 'bg-accent-warm text-dark'
                    : 'bg-border-subtle text-muted hover:text-white'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={card}
                  className="group relative overflow-hidden rounded-2xl bg-border-subtle aspect-[4/3] cursor-pointer"
                >
                  {/* Before side */}
                  <div className={`absolute inset-0 flex bg-linear-to-br ${item.gradient}`}>
                    <div className="flex-1 flex items-center justify-center border-r border-white/5">
                      <div className="text-center">
                        <span className="text-xs text-muted uppercase tracking-widest block mb-2">До</span>
                        <div className="w-8 h-px bg-muted/30 mx-auto" />
                      </div>
                    </div>
                    {/* After side */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-xs text-accent-warm uppercase tracking-widest block mb-2">После</span>
                        <div className="w-8 h-px bg-accent-warm/40 mx-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="absolute inset-y-0 left-1/2 w-px bg-accent-warm/20 group-hover:bg-accent-warm/60 transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark border border-accent-warm/30 group-hover:border-accent-warm group-hover:bg-accent-warm transition-all flex items-center justify-center">
                    <span className="text-accent-warm group-hover:text-dark text-xs font-bold transition-colors">↔</span>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-dark/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold text-white">{item.service}</p>
                    <p className="text-xs text-muted mt-0.5">{item.master}</p>
                  </div>

                  {/* Tag */}
                  <span className="absolute top-3 left-3 text-xs px-2.5 py-1 bg-dark/80 text-accent-warm rounded-full border border-accent-warm/20">
                    {item.tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border-subtle">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-semibold text-white mb-3">Хотите такой же результат?</h2>
          <p className="text-muted mb-8">Запишитесь на бесплатную консультацию</p>
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
