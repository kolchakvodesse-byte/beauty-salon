'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

const EXPERIENCE = [8, 6, 10, 7];
const INITIALS = ['АП', 'МС', 'ЕК', 'ОН'];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function MastersPreview() {
  const { tr } = useLang();
  const m = tr.masters;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">{m.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">{m.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href={ROUTES.masters} className="flex items-center gap-2 text-sm text-accent-warm hover:text-accent-light transition-colors">
              {m.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {m.items.map((master, i) => (
            <motion.div key={i} variants={cardVariants} className="group bg-border-subtle rounded-xl overflow-hidden hover:border hover:border-accent-warm/30 border border-transparent transition-all duration-300">
              <div className="h-56 bg-linear-to-br from-dark to-border-subtle flex items-center justify-center">
                <span className="font-display text-5xl font-semibold text-accent-warm/40 group-hover:text-accent-warm/70 transition-colors">
                  {INITIALS[i]}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-warm transition-colors">{master.name}</h3>
                <p className="text-xs text-accent-warm mt-1 mb-3">{master.role}</p>
                <p className="text-xs text-muted mb-4">{EXPERIENCE[i]} {m.experience}</p>
                <div className="flex flex-wrap gap-1.5">
                  {master.specialties.slice(0, 2).map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 bg-dark rounded-full text-muted">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
