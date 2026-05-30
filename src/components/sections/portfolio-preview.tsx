'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

// Order matches tr.portfolio.items: contour, rf, body, hair, skin, laser
const PORTFOLIO_IMAGES = [
  { before: '/images/portfolio3-laser-before.jpg', after: '/images/portfolio3-laser-after.jpg' },
  { before: '/images/portfolio4-laser-before.jpg', after: '/images/portfolio4-laser-after.jpg' },
  { before: '/images/portfolio5-laser-before.jpg', after: '/images/portfolio5-laser-after.jpg' },
  { before: '/images/portfolio2-laser-before.jpg', after: '/images/portfolio22-laser-after.jpg' },
  { before: '/images/portfolio1-laser-before.jpg', after: '/images/portfolio2-laser-after.jpg' },
  { before: '/images/portfolio-laser-before.jpg', after: '/images/portfolio-laser-after.jpg' },
];

export function PortfolioPreview() {
  const { tr } = useLang();
  const p = tr.portfolio;

  return (
    <section className="py-24 bg-border-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-warm">{p.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3">{p.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href={ROUTES.portfolio} className="flex items-center gap-2 text-sm text-accent-warm hover:text-accent-light transition-colors">
              {p.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.items.map((item, i) => {
            const imgs = PORTFOLIO_IMAGES[i];
            return (
              <motion.div key={i} variants={itemVariants} className="group relative overflow-hidden rounded-xl bg-border-subtle aspect-4/3 cursor-pointer">

                {/* Split images */}
                <div className="absolute inset-0 flex">
                  {/* Before half */}
                  <div className="relative flex-1 overflow-hidden">
                    <Image
                      src={imgs.before}
                      alt={`${item.service} before`}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="brightness-70 saturate-75"
                    />
                    <div className="absolute inset-0 bg-dark/25" />
                    <span className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-white/50 uppercase tracking-widest">{p.before}</span>
                  </div>

                  {/* After half */}
                  <div className="relative flex-1 overflow-hidden">
                    <Image
                      src={imgs.after}
                      alt={`${item.service} after`}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="brightness-95"
                    />
                    <div className="absolute inset-0 bg-dark/10" />
                    <span className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-accent-warm/80 uppercase tracking-widest">{p.after}</span>
                  </div>
                </div>

                {/* Divider line */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-accent-warm/40 group-hover:bg-accent-warm transition-colors duration-300" />

                {/* Drag handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent-warm/25 border border-accent-warm/60 group-hover:bg-accent-warm group-hover:scale-110 transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <span className="text-accent-warm group-hover:text-dark text-xs font-bold select-none">↔</span>
                </div>

                {/* Bottom info on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-dark/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold text-white">{item.service}</p>
                  <p className="text-xs text-muted">{item.master}</p>
                </div>

                {/* Tag */}
                <span className="absolute top-3 right-3 text-xs px-2.5 py-1 bg-dark/80 text-accent-warm rounded-full backdrop-blur-sm">{item.tag}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
