'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const CATEGORIES = [
  { id: 'all', name: 'Все' },
  { id: 'general', name: 'Общие' },
  { id: 'procedures', name: 'Процедуры' },
  { id: 'booking', name: 'Запись' },
  { id: 'payment', name: 'Оплата' },
];

const FAQS = [
  { id: '1', cat: 'booking', question: 'Как записаться на процедуру?', answer: 'Записаться можно онлайн через форму на сайте, по телефону или через WhatsApp. После записи вы получите подтверждение и напоминание за 24 часа до процедуры.' },
  { id: '2', cat: 'general', question: 'Нужна ли предварительная консультация?', answer: 'Для большинства процедур первичная консультация рекомендована. Наш специалист оценит состояние кожи, обсудит ваши ожидания и подберёт оптимальную программу. Консультация бесплатна.' },
  { id: '3', cat: 'procedures', question: 'Есть ли противопоказания?', answer: 'Да, ряд процедур имеет противопоказания: беременность и лактация, некоторые кожные заболевания в стадии обострения, наличие металлических имплантов (для аппаратных методик). Все противопоказания уточняются на консультации.' },
  { id: '4', cat: 'procedures', question: 'Сколько нужно сеансов для заметного результата?', answer: 'Зависит от процедуры и исходного состояния. Некоторые процедуры (биоревитализация, контурная пластика) дают результат уже после первого сеанса. Аппаратные методики (RF-лифтинг, INDIBA®) требуют курса из 5–10 процедур. Специалист составит индивидуальный план.' },
  { id: '5', cat: 'procedures', question: 'Есть ли восстановительный период?', answer: 'Большинство наших процедур не требуют реабилитации. Для инъекционных методов возможно небольшое покраснение или отёк в течение 1–3 дней. Специалист расскажет о правилах ухода после каждой процедуры.' },
  { id: '6', cat: 'procedures', question: 'Как долго сохраняется результат?', answer: 'Контурная пластика: 12–18 месяцев. Биоревитализация: 6–12 месяцев. RF-лифтинг: 12–24 месяца. Ботулинотерапия: 4–6 месяцев. Лазерная эпиляция: постоянное снижение волос после 6–8 сеансов.' },
  { id: '7', cat: 'payment', question: 'Принимаете ли вы оплату картой?', answer: 'Да, принимаем оплату наличными, всеми видами банковских карт (Visa, Mastercard, МИР). Также доступна рассрочка 0% на 3/6/12 месяцев на пакеты процедур от 10 000 ₽.' },
  { id: '8', cat: 'booking', question: 'Можно ли отменить или перенести запись?', answer: 'Да. Просим уведомить нас о переносе или отмене не позднее чем за 24 часа до назначенного времени. В противном случае взимается компенсация в размере 50% стоимости процедуры.' },
  { id: '9', cat: 'general', question: 'Работаете ли вы с мужчинами?', answer: 'Да, мы принимаем клиентов любого пола. Ряд процедур (уход за кожей, аппаратная косметология, лазерная эпиляция, мезотерапия) одинаково эффективны для мужчин.' },
  { id: '10', cat: 'procedures', question: 'Что такое INDIBA® терапия?', answer: 'INDIBA® — это аппаратная методика с применением радиочастотного тока 448 кГц. Воздействие происходит на трёх уровнях: кожа, подкожная клетчатка, мышцы. Стимулирует клеточный метаболизм, усиливает производство коллагена и эластина. Эффект омоложения без боли и восстановительного периода.' },
  { id: '11', cat: 'payment', question: 'Есть ли программа лояльности?', answer: 'Да! За каждое посещение начисляются бонусные баллы (1 балл = 1 рубль). Баллами можно оплатить до 30% стоимости следующей процедуры. После 10 визитов вы получаете статус «VIP» со скидкой 10% на все услуги.' },
  { id: '12', cat: 'general', question: 'Какие сертификаты есть у специалистов?', answer: 'Все наши специалисты имеют медицинское образование и международные сертификаты по своим направлениям. Сертификаты по работе с INDIBA®, Endolift®, BBL-технологиями, PRP-терапии. Регулярно проходят повышение квалификации в России и за рубежом.' },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof FAQS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-sans text-base font-medium transition-colors ${isOpen ? 'text-accent-warm' : 'text-white group-hover:text-accent-warm'}`}>
          {faq.question}
        </span>
        <span className="shrink-0 text-accent-warm">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed pb-5">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState<string | null>('1');

  const filtered = activeCategory === 'all' ? FAQS : FAQS.filter((f) => f.cat === activeCategory);

  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Вопросы и ответы
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
              FAQ
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Ответы на самые частые вопросы о наших процедурах, записи и оплате.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-accent-warm text-dark'
                    : 'bg-border-subtle text-muted hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </motion.div>

          {/* Still have questions */}
          <div className="mt-16 bg-accent-warm/5 border border-accent-warm/20 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold text-white mb-3">Остались вопросы?</h3>
            <p className="text-muted text-sm mb-6">Напишите нам — ответим в течение 15 минут</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/79991234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-warm text-dark font-semibold rounded-lg text-sm hover:bg-accent-light transition-colors"
              >
                WhatsApp
              </a>
              <Link
                href={ROUTES.contacts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent-warm/40 text-accent-warm rounded-lg text-sm hover:border-accent-warm transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
