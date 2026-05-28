'use client';

import { motion } from 'framer-motion';
import { Zap, User, Heart, Sparkles, Leaf, Star } from 'lucide-react';
import { useLang } from '@/contexts/language-context';

const ICONS = [Zap, User, Heart, Sparkles, Leaf, Star];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function BenefitsSection() {
  const { tr } = useLang();

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">
            {tr.benefits.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">
            {tr.benefits.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle"
        >
          {tr.benefits.items.map((b, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={b.title}
                variants={cardVariants}
                className="group bg-dark p-8 hover:bg-border-subtle transition-colors duration-300 cursor-default"
              >
                <Icon size={28} className="text-accent-warm mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
