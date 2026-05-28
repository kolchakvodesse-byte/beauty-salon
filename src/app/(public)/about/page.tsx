'use client';

import { motion } from 'framer-motion';
import { Zap, User, Heart, Star, Leaf, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const VALUES = [
  { icon: Zap, title: 'Технологии', desc: 'Работаем только на клинически проверенном оборудовании мирового уровня: INDIBA®, Endolift®, BBL.' },
  { icon: User, title: 'Индивидуальность', desc: 'Каждый клиент уникален. Разрабатываем персональные программы под конкретные задачи и тип кожи.' },
  { icon: Heart, title: 'Результат', desc: 'Гарантируем видимый эффект с минимальным восстановительным периодом. Ваш результат — наша гордость.' },
  { icon: Sparkles, title: 'Вечная молодость', desc: 'Поддержание молодости — это не разовая процедура, а системный подход к уходу за собой.' },
  { icon: Leaf, title: 'Натуральность', desc: 'Подчёркиваем вашу природную красоту. Никакой искусственности — только гармония и естественность.' },
  { icon: Star, title: 'A-List команда', desc: 'Международно сертифицированные специалисты с опытом от 5 до 15 лет. Лучшие в своём деле.' },
];

const TEAM = [
  { name: 'Анна Петрова', role: 'Косметолог-эстетист', exp: 8, initials: 'АП', certs: ['Контурная пластика', 'Биоревитализация', 'Ботулинотерапия'] },
  { name: 'Мария Соколова', role: 'Аппаратная косметология', exp: 6, initials: 'МС', certs: ['INDIBA® Certified', 'RF-лифтинг', 'Микротоки'] },
  { name: 'Елена Кузнецова', role: 'Специалист по телу', exp: 10, initials: 'ЕК', certs: ['LPG-массаж', 'Антицеллюлитные программы', 'SPA-терапия'] },
  { name: 'Ольга Новикова', role: 'Трихолог-дерматолог', exp: 7, initials: 'ОН', certs: ['PRP-терапия', 'Мезотерапия', 'Дерматоскопия'] },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-20 border-b border-border-subtle relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(200,168,130,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,130,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-warm/4 blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              О нас
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mt-3 mb-6 leading-[1.05]">
              Будущее вашей
              <br />
              <span className="text-accent-warm">красоты</span> здесь
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              Мы — команда международно сертифицированных специалистов, объединённых страстью к эстетической медицине и искренним желанием помочь вам выглядеть и чувствовать себя лучшей версией себя.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border-subtle"
          >
            {[
              { value: '500+', label: 'Довольных клиентов' },
              { value: '10+', label: 'Лет на рынке' },
              { value: '15+', label: 'Видов процедур' },
              { value: '5.0★', label: 'Средний рейтинг' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-semibold text-accent-warm">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
                Наша история
              </span>
              <h2 className="font-display text-4xl font-semibold text-white mt-3 mb-6">
                Как всё началось
              </h2>
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p>
                  Клиника была основана с простой идеей: сделать передовую эстетическую медицину доступной и понятной каждому. Мы устали видеть, как клиенты переплачивают за процедуры в премиальных салонах, не получая ожидаемого результата.
                </p>
                <p>
                  Сегодня наша команда — это 6 международно сертифицированных специалистов с суммарным опытом более 50 лет. Мы работаем только с проверенным оборудованием и препаратами ведущих мировых производителей.
                </p>
                <p>
                  Каждая процедура — это не просто манипуляция, а тщательно продуманный протокол, адаптированный под конкретного клиента. Мы не гонимся за количеством — мы гордимся качеством.
                </p>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-linear-to-br from-accent-warm/10 to-border-subtle border border-border-subtle flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl font-semibold text-accent-warm/30 mb-2">10+</p>
                  <p className="text-muted text-sm uppercase tracking-widest">лет опыта</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-dark border border-accent-warm/30 rounded-xl p-4 shadow-xl">
                <p className="font-display text-2xl font-semibold text-accent-warm">500+</p>
                <p className="text-xs text-muted mt-0.5">клиентов</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Наши ценности
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">
              Почему выбирают нас
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                className="group bg-dark p-8 hover:bg-border-subtle transition-colors"
              >
                <v.icon size={28} className="text-accent-warm mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white mb-3">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Команда
            </span>
            <h2 className="font-display text-4xl font-semibold text-white mt-3">
              Наши специалисты
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {TEAM.map((m) => (
              <motion.div
                key={m.name}
                variants={item}
                className="group bg-border-subtle rounded-2xl overflow-hidden hover:border hover:border-accent-warm/30 border border-transparent transition-all"
              >
                <div className="h-48 bg-linear-to-br from-dark to-border-subtle flex items-center justify-center">
                  <span className="font-display text-5xl font-semibold text-accent-warm/30 group-hover:text-accent-warm/60 transition-colors">
                    {m.initials}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-warm transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs text-accent-warm mt-0.5 mb-3">{m.role}</p>
                  <p className="text-xs text-muted mb-3">Опыт {m.exp} лет</p>
                  <ul className="space-y-1">
                    {m.certs.map((c) => (
                      <li key={c} className="text-xs text-muted flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent-warm shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href={ROUTES.masters}
              className="inline-flex items-center gap-2 text-accent-warm hover:text-accent-light transition-colors text-sm"
            >
              Все специалисты →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-semibold text-white mb-4">Готовы познакомиться?</h2>
          <p className="text-muted mb-8">Запишитесь на бесплатную консультацию — мы расскажем, что подойдёт именно вам</p>
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
