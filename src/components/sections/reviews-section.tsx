'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLang } from '@/contexts/language-context';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function ReviewsSection() {
  const { tr } = useLang();
  const r = tr.reviews;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">{r.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">{r.title}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center justify-center gap-3 mb-16">
          <div className="flex gap-1">
            {[1,2,3,4,5].map((s) => <Star key={s} size={18} className="fill-accent-warm text-accent-warm" />)}
          </div>
          <span className="font-semibold text-white text-lg">5.0</span>
          <span className="text-muted text-sm">{r.ratingText}</span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r.items.map((review, i) => (
            <motion.div key={i} variants={cardVariants} className="bg-border-subtle rounded-xl p-6 flex flex-col gap-4">
              <Quote size={20} className="text-accent-warm/40" />
              <p className="text-sm text-muted leading-relaxed grow">{review.text}</p>
              <div className="flex gap-1 mt-1">
                {[1,2,3,4,5].map((s) => <Star key={s} size={14} className="fill-accent-warm text-accent-warm" />)}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-dark">
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-muted">{review.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted">{review.date}</p>
                  <p className="text-xs text-accent-warm/60">Google</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
