'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const MASTER_INITIALS = ['АП', 'МС', 'ЕК', 'ОН', 'АП', 'МС'];

export function ServicesPreview() {
  const { tr } = useLang();
  const sp = tr.servicesPreview;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">{sp.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">{sp.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href={ROUTES.services} className="flex items-center gap-2 text-sm text-accent-warm hover:text-accent-light transition-colors">
              {sp.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sp.items.map((service, i) => (
            <motion.div key={i} variants={cardVariants} className="group relative bg-border-subtle rounded-xl p-6 hover:border hover:border-accent-warm/30 transition-all duration-300 cursor-default border border-transparent">
              {service.tag && (
                <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wider px-2 py-1 bg-accent-warm/10 text-accent-warm rounded-full">
                  {service.tag}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-accent-warm transition-colors">{service.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-dark">
                <span className="text-accent-warm font-semibold">{service.price}</span>
                <span className="text-xs text-muted">{service.duration}</span>
              </div>
              <Link href={`${ROUTES.booking}?service=${i}`} className="mt-4 block w-full text-center py-2.5 text-sm font-semibold text-dark bg-accent-warm rounded-lg hover:bg-accent-light transition-colors">
                {sp.bookBtn}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
