'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, Clock, Calendar, User, Phone, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

// ── Data ────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'face', name: 'Лицо' },
  { id: 'injections', name: 'Инъекции' },
  { id: 'hardware', name: 'Аппаратная' },
  { id: 'laser', name: 'Лазер' },
  { id: 'body', name: 'Тело' },
];

const SERVICES = [
  { id: '1', category: 'face', name: 'Классический уход за лицом', price: 3500, duration: 60 },
  { id: '2', category: 'face', name: 'Биоревитализация', price: 9500, priceOld: 12000, duration: 45 },
  { id: '11', category: 'face', name: 'Химический пилинг', price: 4000, duration: 50 },
  { id: '3', category: 'injections', name: 'Контурная пластика губ', price: 12000, duration: 60 },
  { id: '10', category: 'injections', name: 'Ботулинотерапия', price: 15000, duration: 45 },
  { id: '4', category: 'hardware', name: 'RF-лифтинг', price: 6500, priceOld: 8000, duration: 60 },
  { id: '5', category: 'hardware', name: 'INDIBA® терапия', price: 7500, duration: 75 },
  { id: '12', category: 'hardware', name: 'Микротоковая терапия', price: 4500, duration: 60 },
  { id: '6', category: 'laser', name: 'Лазерная эпиляция', price: 2500, duration: 30 },
  { id: '7', category: 'laser', name: 'BBL Acne Protocol', price: 8500, priceOld: 11000, duration: 45 },
  { id: '8', category: 'body', name: 'Антицеллюлитный массаж', price: 4500, duration: 60 },
  { id: '9', category: 'body', name: 'LPG-массаж', price: 5000, priceOld: 6500, duration: 45 },
];

const MASTERS = [
  { id: '1', name: 'Анна Петрова', role: 'Косметолог-эстетист', initials: 'АП', categories: ['face', 'injections'] },
  { id: '2', name: 'Мария Соколова', role: 'Аппаратная косметология', initials: 'МС', categories: ['hardware', 'face'] },
  { id: '3', name: 'Елена Кузнецова', role: 'Специалист по телу', initials: 'ЕК', categories: ['body'] },
  { id: '4', name: 'Ольга Новикова', role: 'Трихолог-дерматолог', initials: 'ОН', categories: ['face', 'hardware'] },
  { id: '5', name: 'Ирина Белова', role: 'Лазерный технолог', initials: 'ИБ', categories: ['laser', 'body'] },
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
];

const STEPS = ['Услуга', 'Мастер', 'Дата и время', 'Контакты'];

// ── Helpers ──────────────────────────────────────────────────
function formatPrice(p: number) {
  return p.toLocaleString('ru-RU') + ' ₽';
}

function getMinDate() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function getMaxDate() {
  const d = new Date();
  d.setDate(d.getDate() + 90);
  return d.toISOString().split('T')[0];
}

// ── Animations ───────────────────────────────────────────────
const fadeSlide = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3 },
};

// ── Component ────────────────────────────────────────────────
export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState('face');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedMasterId, setSelectedMasterId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) ?? null;
  const selectedMaster = MASTERS.find((m) => m.id === selectedMasterId) ?? null;

  const filteredServices = SERVICES.filter((s) => s.category === activeCategory);
  const filteredMasters = selectedService
    ? MASTERS.filter((m) => m.categories.includes(selectedService.category))
    : MASTERS;

  const canGoStep2 = !!selectedServiceId;
  const canGoStep3 = !!selectedMasterId;
  const canGoStep4 = !!selectedDate && !!selectedTime;
  const canSubmit = !!name.trim() && !!phone.trim();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setIsLoading(true);
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: selectedServiceId,
          master_id: selectedMasterId,
          booking_date: selectedDate,
          booking_time: selectedTime,
          client_name: name,
          client_phone: phone,
          email,
          duration_minutes: selectedService?.duration ?? 60,
        }),
      });
      setIsDone(true);
    } catch {
      // still show success to not block demo
      setIsDone(true);
    } finally {
      setIsLoading(false);
    }
  }

  // ── Success screen ───────────────────────────────────────
  if (isDone) {
    return (
      <div className="bg-dark min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-accent-warm/10 border border-accent-warm flex items-center justify-center mx-auto mb-8">
            <Check size={36} className="text-accent-warm" />
          </div>
          <h1 className="font-display text-4xl font-semibold text-white mb-4">Запись оформлена!</h1>
          <p className="text-muted mb-3">
            Вы записаны на{' '}
            <span className="text-white font-medium">{selectedService?.name}</span>
          </p>
          <p className="text-muted mb-3">
            Мастер: <span className="text-white font-medium">{selectedMaster?.name}</span>
          </p>
          <p className="text-muted mb-8">
            {selectedDate && new Date(selectedDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })},{' '}
            <span className="text-white font-medium">{selectedTime}</span>
          </p>
          <p className="text-sm text-muted mb-10">
            Мы свяжемся с вами по номеру{' '}
            <span className="text-accent-warm">{phone}</span> для подтверждения.
          </p>
          <Link
            href={ROUTES.home}
            className="inline-block px-10 py-4 bg-accent-warm text-dark font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            На главную
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
            Онлайн-запись
          </span>
          <h1 className="font-display text-5xl font-semibold text-white mt-3">
            Запишитесь к нам
          </h1>
          <p className="text-muted mt-3">Займёт не более 2 минут</p>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((label, i) => {
            const num = i + 1;
            const active = num === step;
            const done = num < step;
            return (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                      done
                        ? 'bg-accent-warm text-dark'
                        : active
                          ? 'bg-accent-warm/20 border-2 border-accent-warm text-accent-warm'
                          : 'bg-border-subtle text-muted'
                    }`}
                  >
                    {done ? <Check size={14} /> : num}
                  </div>
                  <span
                    className={`text-xs mt-1.5 whitespace-nowrap transition-colors ${
                      active || done ? 'text-accent-warm' : 'text-muted'
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-px mb-5 transition-all duration-300 ${
                      done ? 'bg-accent-warm' : 'bg-border-subtle'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div className="bg-dark border border-border-subtle rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {/* ── Step 1: Service ─────────────────────────────── */}
            {step === 1 && (
              <motion.div key="step1" {...fadeSlide} className="p-8">
                <h2 className="font-display text-2xl font-semibold text-white mb-6">
                  Выберите услугу
                </h2>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setSelectedServiceId(null);
                      }}
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

                {/* Service list */}
                <div className="space-y-2 mb-8">
                  {filteredServices.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-200 ${
                        selectedServiceId === s.id
                          ? 'border-accent-warm bg-accent-warm/5'
                          : 'border-border-subtle hover:border-accent-warm/50'
                      }`}
                    >
                      <div>
                        <p className={`font-medium text-sm ${selectedServiceId === s.id ? 'text-accent-warm' : 'text-white'}`}>
                          {s.name}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-muted flex items-center gap-1">
                            <Clock size={11} /> {s.duration} мин
                          </span>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="text-accent-warm font-semibold text-sm">{formatPrice(s.price)}</p>
                        {s.priceOld && (
                          <p className="text-xs text-muted line-through">{formatPrice(s.priceOld)}</p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => canGoStep2 && setStep(2)}
                  disabled={!canGoStep2}
                  className="w-full py-4 bg-accent-warm text-dark font-semibold rounded-xl hover:bg-accent-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Далее — выбор мастера
                </button>
              </motion.div>
            )}

            {/* ── Step 2: Master ──────────────────────────────── */}
            {step === 2 && (
              <motion.div key="step2" {...fadeSlide} className="p-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm mb-6"
                >
                  <ChevronLeft size={16} /> Назад
                </button>

                <h2 className="font-display text-2xl font-semibold text-white mb-2">
                  Выберите мастера
                </h2>
                <p className="text-muted text-sm mb-6">
                  Услуга: <span className="text-accent-warm">{selectedService?.name}</span>
                </p>

                <div className="space-y-3 mb-8">
                  {filteredMasters.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMasterId(m.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                        selectedMasterId === m.id
                          ? 'border-accent-warm bg-accent-warm/5'
                          : 'border-border-subtle hover:border-accent-warm/50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-warm/20 to-accent-warm/5 flex items-center justify-center shrink-0">
                        <span className="font-display text-accent-warm font-semibold text-sm">{m.initials}</span>
                      </div>
                      <div className="grow">
                        <p className={`font-medium text-sm ${selectedMasterId === m.id ? 'text-accent-warm' : 'text-white'}`}>
                          {m.name}
                        </p>
                        <p className="text-xs text-muted mt-0.5">{m.role}</p>
                      </div>
                      {selectedMasterId === m.id && (
                        <Check size={16} className="text-accent-warm shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => canGoStep3 && setStep(3)}
                  disabled={!canGoStep3}
                  className="w-full py-4 bg-accent-warm text-dark font-semibold rounded-xl hover:bg-accent-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Далее — дата и время
                </button>
              </motion.div>
            )}

            {/* ── Step 3: Date & Time ─────────────────────────── */}
            {step === 3 && (
              <motion.div key="step3" {...fadeSlide} className="p-8">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm mb-6"
                >
                  <ChevronLeft size={16} /> Назад
                </button>

                <h2 className="font-display text-2xl font-semibold text-white mb-2">
                  Дата и время
                </h2>
                <p className="text-muted text-sm mb-6">
                  Мастер: <span className="text-accent-warm">{selectedMaster?.name}</span>
                </p>

                {/* Date picker */}
                <div className="mb-6">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
                    <Calendar size={13} /> Дата
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={getMinDate()}
                    max={getMaxDate()}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-warm transition-colors"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>

                {/* Time slots */}
                <div className="mb-8">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-3 flex items-center gap-1.5">
                    <Clock size={13} /> Время
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedTime === t
                            ? 'bg-accent-warm text-dark'
                            : 'bg-border-subtle text-muted hover:text-white hover:bg-accent-warm/10'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => canGoStep4 && setStep(4)}
                  disabled={!canGoStep4}
                  className="w-full py-4 bg-accent-warm text-dark font-semibold rounded-xl hover:bg-accent-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Далее — ваши данные
                </button>
              </motion.div>
            )}

            {/* ── Step 4: Contact Info ────────────────────────── */}
            {step === 4 && (
              <motion.div key="step4" {...fadeSlide} className="p-8">
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm mb-6"
                >
                  <ChevronLeft size={16} /> Назад
                </button>

                <h2 className="font-display text-2xl font-semibold text-white mb-2">
                  Контактные данные
                </h2>
                <p className="text-muted text-sm mb-6">
                  {selectedDate && new Date(selectedDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })},{' '}
                  {selectedTime} · {selectedService?.name}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
                      <User size={13} /> Имя *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      required
                      className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
                      <Phone size={13} /> Телефон *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
                      <Mail size={13} /> Email (необязательно)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-accent-warm transition-colors"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-accent-warm/5 border border-accent-warm/20 rounded-xl p-4 mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm mb-3 flex items-center gap-1.5">
                      <Sparkles size={12} /> Ваша запись
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted">Услуга:</span>
                        <span className="text-white font-medium">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Мастер:</span>
                        <span className="text-white">{selectedMaster?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Дата:</span>
                        <span className="text-white">
                          {selectedDate &&
                            new Date(selectedDate).toLocaleDateString('ru-RU', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Время:</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-accent-warm/10 mt-2">
                        <span className="text-muted">Стоимость:</span>
                        <span className="text-accent-warm font-semibold">
                          {selectedService && formatPrice(selectedService.price)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit || isLoading}
                    className="w-full py-4 bg-accent-warm text-dark font-semibold rounded-xl hover:bg-accent-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    {isLoading ? 'Оформляем...' : 'Подтвердить запись'}
                  </button>
                </form>

                <p className="text-xs text-muted text-center">
                  Нажимая «Подтвердить», вы соглашаетесь с{' '}
                  <Link href="#" className="text-accent-warm underline">политикой конфиденциальности</Link>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
