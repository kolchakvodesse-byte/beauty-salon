'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

const CARD_CONFIG = [
  { bg: 'linear-gradient(135deg, #1a0d12 0%, #2a1018 100%)', tint: 'radial-gradient(ellipse 70% 80% at 20% 30%, rgba(160,80,100,0.55) 0%, transparent 65%)' },
  { bg: 'linear-gradient(135deg, #0d0d1a 0%, #111228 100%)', tint: 'radial-gradient(ellipse 70% 80% at 75% 25%, rgba(100,80,160,0.50) 0%, transparent 65%)' },
  { bg: 'linear-gradient(135deg, #1a1208 0%, #2a1e0a 100%)', tint: 'radial-gradient(ellipse 70% 80% at 70% 80%, rgba(170,110,50,0.55) 0%, transparent 65%)' },
  { bg: 'linear-gradient(135deg, #0d1410 0%, #111c14 100%)', tint: 'radial-gradient(ellipse 70% 80% at 30% 70%, rgba(120,150,100,0.45) 0%, transparent 65%)' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function FeaturesSection() {
  const { tr } = useLang();
  const items = tr.features.items;

  return (
    <section className="bg-black px-3 pb-3">
      {/* Mobile: horizontal carousel | Desktop: grid */}
      <div
        className="carousel-scroll flex gap-3 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item, i) => {
          const cfg = CARD_CONFIG[i];
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative rounded-2xl overflow-hidden snap-start shrink-0 w-[78vw] sm:w-auto"
              style={{ minHeight: '280px' }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0" style={{ background: cfg.bg }} />

              {/* Color tint */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: cfg.tint }} />

              {/* Bottom gradient for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(200,168,130,0.45)' }}
              />

              {/* Content */}
              <div className="relative z-10 p-7 sm:p-8 flex flex-col justify-between h-full" style={{ minHeight: '280px' }}>
                <div>
                  <span
                    className="font-sans font-semibold uppercase tracking-[0.25em]"
                    style={{ fontSize: '10px', color: 'rgba(200,168,130,0.55)' }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="font-display font-semibold text-white mt-4 leading-tight group-hover:text-accent-warm transition-colors duration-300"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', whiteSpace: 'pre-line' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 font-sans text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300"
                    style={{ color: 'rgba(255,255,255,0.40)' }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={ROUTES.services}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-accent-warm/15"
                    style={{ border: '1px solid rgba(255,255,255,0.18)' }}
                  >
                    <ArrowRight
                      size={14}
                      className="text-white/45 group-hover:text-accent-warm transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
