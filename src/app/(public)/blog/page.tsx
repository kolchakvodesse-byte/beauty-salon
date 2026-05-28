'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const POSTS = [
  {
    id: '1',
    slug: 'biorewitalization-guide',
    title: 'Биоревитализация: полное руководство для начинающих',
    excerpt: 'Что такое биоревитализация, как подготовиться к процедуре, чего ожидать и сколько длится результат — рассказываем всё без прикрас.',
    category: 'Уход за кожей',
    date: '20 мая 2025',
    readTime: '5 мин',
    gradient: 'from-rose-900/40 to-pink-900/10',
  },
  {
    id: '2',
    slug: 'rf-lifting-vs-smas',
    title: 'RF-лифтинг vs SMAS-лифтинг: в чём разница?',
    excerpt: 'Сравниваем два самых популярных метода безоперационного омоложения. Кому подойдёт RF, а кому нужен SMAS?',
    category: 'Аппаратная косметология',
    date: '15 мая 2025',
    readTime: '7 мин',
    gradient: 'from-amber-900/40 to-yellow-900/10',
  },
  {
    id: '3',
    slug: 'bbl-acne-treatment',
    title: 'BBL при акне: как работает и кому подходит',
    excerpt: 'Технология BroadBand Light изменила подход к лечению акне. Объясняем механизм действия и рассказываем о реальных результатах наших клиентов.',
    category: 'Лазерные процедуры',
    date: '10 мая 2025',
    readTime: '6 мин',
    gradient: 'from-orange-900/40 to-red-900/10',
  },
  {
    id: '4',
    slug: 'indiba-therapy',
    title: 'INDIBA® 448 кГц: инновация в мире косметологии',
    excerpt: 'Почему INDIBA® стала золотым стандартом в профессиональной косметологии. Механизм действия, показания и ожидаемые результаты.',
    category: 'Аппаратная косметология',
    date: '5 мая 2025',
    readTime: '8 мин',
    gradient: 'from-teal-900/40 to-emerald-900/10',
  },
  {
    id: '5',
    slug: 'botox-myths',
    title: '7 мифов о ботоксе, которые пора развенчать',
    excerpt: '«Заморозит лицо», «вызывает привыкание», «опасно» — разбираем самые популярные заблуждения о ботулинотерапии.',
    category: 'Инъекции',
    date: '1 мая 2025',
    readTime: '5 мин',
    gradient: 'from-violet-900/40 to-purple-900/10',
  },
  {
    id: '6',
    slug: 'lpg-massage-results',
    title: 'LPG-массаж: реальные результаты после курса',
    excerpt: 'Сколько сеансов нужно для заметного эффекта, как подготовиться и как закрепить результат — делимся опытом наших клиентов.',
    category: 'Тело',
    date: '25 апреля 2025',
    readTime: '4 мин',
    gradient: 'from-sky-900/40 to-blue-900/10',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
              Блог
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mt-3 mb-4">
              Статьи и советы
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Экспертные материалы о процедурах, уходе за кожей и последних трендах в эстетической медицине.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-14 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border-subtle hover:border-accent-warm/40 transition-all duration-300 cursor-pointer"
          >
            {/* Image placeholder */}
            <div className={`h-64 lg:h-auto bg-linear-to-br ${POSTS[0].gradient} flex items-center justify-center relative`}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm/60 border border-accent-warm/20 px-4 py-2 rounded-full">
                {POSTS[0].category}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-border-subtle">
              <span className="text-xs text-accent-warm font-semibold uppercase tracking-wider mb-3">Главная статья</span>
              <h2 className="font-display text-3xl font-semibold text-white mb-4 group-hover:text-accent-warm transition-colors">
                {POSTS[0].title}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">{POSTS[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{POSTS[0].date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {POSTS[0].readTime}</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-accent-warm">
                  Читать <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {POSTS.slice(1).map((post) => (
              <motion.article
                key={post.id}
                variants={card}
                className="group rounded-2xl overflow-hidden border border-border-subtle hover:border-accent-warm/40 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Cover */}
                <div className={`h-44 bg-linear-to-br ${post.gradient} flex items-center justify-center`}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-warm/60 border border-accent-warm/20 px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 bg-border-subtle flex flex-col gap-3 grow">
                  <h3 className="font-display text-lg font-semibold text-white leading-snug group-hover:text-accent-warm transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-dark">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-accent-warm">
                      Читать <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
