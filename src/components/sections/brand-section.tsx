'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { ParticlesCanvas } from '@/components/ui/particles-canvas';
import { useLang } from '@/contexts/language-context';

export function BrandSection() {
  const { tr } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <ParticlesCanvas className="z-0 opacity-40" />

      <div className="absolute inset-0 z-1 bg-linear-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />

      <motion.div style={{ y }} className="relative z-10 text-center px-4 w-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-semibold text-white leading-none tracking-tight w-full overflow-hidden"
          style={{ fontSize: 'clamp(3rem, 9vw, 10rem)' }}
        >
          {tr.brand.salonName}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-white/35 tracking-[0.5em] text-sm sm:text-base uppercase mt-4"
        >
          {tr.brand.location}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-px bg-white/20 mx-auto my-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-snug">
            {tr.brand.universeOf}{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #818cf8)' }}>
              {tr.brand.universeAccent}
            </span>
          </h3>
          <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8 font-sans">
            {tr.brand.text}
          </p>
          <Link
            href={ROUTES.booking}
            className="inline-flex items-center justify-center px-9 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors tracking-wide"
          >
            {tr.brand.bookNow}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
