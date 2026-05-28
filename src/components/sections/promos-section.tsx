'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

const PRICES = [
  { price: 1490, priceOld: 2100 },
  { price: 1850, priceOld: 2700 },
  { price: 990,  priceOld: 1500 },
  { price: 2490, priceOld: 3500 },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function PromosSection() {
  const { tr } = useLang();
  const p = tr.promos;

  return (
    <section className="py-24 bg-border-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">{p.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">{p.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href={ROUTES.promo} className="flex items-center gap-2 text-sm text-accent-warm hover:text-accent-light transition-colors">
              {p.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.items.map((promo, i) => {
            const { price, priceOld } = PRICES[i];
            const discount = Math.round((1 - price / priceOld) * 100);
            return (
              <motion.div key={i} variants={cardVariants} className="relative bg-dark rounded-xl p-8 border border-border-subtle hover:border-accent-warm/40 transition-all duration-300 flex flex-col justify-between gap-6">
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
                <p className="text-muted text-sm leading-relaxed -mt-2">{promo.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-white">{price.toLocaleString('en-US')} AED</p>
                    <p className="text-sm text-muted line-through mt-0.5">{priceOld.toLocaleString('en-US')} AED</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock size={13} />
                      <span>{p.until} {promo.validUntil}</span>
                    </div>
                    <Link href={ROUTES.booking} className="px-5 py-2.5 bg-accent-warm text-dark text-sm font-semibold rounded-lg hover:bg-accent-light transition-colors">
                      {p.bookBtn}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
