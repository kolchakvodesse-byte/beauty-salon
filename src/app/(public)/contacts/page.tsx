'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Share2 } from 'lucide-react';

const HOURS = [
  { days: 'Понедельник — Пятница', time: '09:00 — 21:00' },
  { days: 'Суббота', time: '10:00 — 20:00' },
  { days: 'Воскресенье', time: '10:00 — 18:00' },
];

const SOCIALS = [
  { icon: Share2, label: 'Instagram', href: 'https://instagram.com', handle: '@beauty_salon' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/79991234567', handle: '+7 (999) 123-45-67' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/beautysalon', handle: '@beauty_salon' },
];

export default function ContactsPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Контакты
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Готовы ответить на ваши вопросы и записать на удобное время.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left — contact info */}
            <div className="lg:col-span-1 space-y-6">

              {/* Phone & Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-border-subtle rounded-2xl p-6"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-5">Контактные данные</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:+79991234567" className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-accent-warm/10 flex items-center justify-center shrink-0 group-hover:bg-accent-warm/20 transition-colors">
                        <Phone size={15} className="text-accent-warm" />
                      </div>
                      <div>
                        <p className="text-xs text-muted mb-0.5">Телефон</p>
                        <p className="text-white text-sm font-medium group-hover:text-accent-warm transition-colors">+7 (999) 123-45-67</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@beauty.salon" className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-accent-warm/10 flex items-center justify-center shrink-0 group-hover:bg-accent-warm/20 transition-colors">
                        <Mail size={15} className="text-accent-warm" />
                      </div>
                      <div>
                        <p className="text-xs text-muted mb-0.5">Email</p>
                        <p className="text-white text-sm font-medium group-hover:text-accent-warm transition-colors">info@beauty.salon</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-warm/10 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-accent-warm" />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-0.5">Адрес</p>
                      <p className="text-white text-sm">ул. Красоты, 123, Москва</p>
                      <p className="text-xs text-muted mt-0.5">м. Красная площадь, 5 мин пешком</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-border-subtle rounded-2xl p-6"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <Clock size={16} className="text-accent-warm" /> Режим работы
                </h3>
                <ul className="space-y-3">
                  {HOURS.map((h) => (
                    <li key={h.days} className="flex items-center justify-between text-sm">
                      <span className="text-muted">{h.days}</span>
                      <span className="text-white font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-border-subtle rounded-2xl p-6"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-5">Мы в соцсетях</h3>
                <ul className="space-y-3">
                  {SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-lg bg-dark flex items-center justify-center group-hover:bg-accent-warm/10 transition-colors">
                          <s.icon size={15} className="text-muted group-hover:text-accent-warm transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs text-muted">{s.label}</p>
                          <p className="text-white text-sm group-hover:text-accent-warm transition-colors">{s.handle}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right — form + map */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-border-subtle rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-semibold text-white mb-6">Напишите нам</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">Имя *</label>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        required
                        className="w-full bg-dark border border-dark rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">Телефон *</label>
                      <input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        required
                        className="w-full bg-dark border border-dark rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-dark border border-dark rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Ваш вопрос или пожелание..."
                      className="w-full bg-dark border border-dark rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-warm text-dark font-semibold rounded-xl hover:bg-accent-light transition-colors"
                  >
                    Отправить сообщение
                  </button>
                  <p className="text-xs text-muted text-center">
                    Обычно отвечаем в течение 15 минут в рабочие часы
                  </p>
                </form>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-border-subtle rounded-2xl overflow-hidden h-56 relative flex items-center justify-center"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(200,168,130,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,130,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-accent-warm flex items-center justify-center mx-auto mb-3">
                    <MapPin size={18} className="text-dark" />
                  </div>
                  <p className="text-sm font-medium text-white">ул. Красоты, 123</p>
                  <p className="text-xs text-muted mt-1">Москва</p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-xs text-accent-warm border border-accent-warm/30 px-4 py-1.5 rounded-full hover:bg-accent-warm/10 transition-colors"
                  >
                    Открыть в картах →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
