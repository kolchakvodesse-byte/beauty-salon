'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { CONTACT } from '@/lib/i18n';
import { useLang } from '@/contexts/language-context';
import { MessageCircle, Phone } from 'lucide-react';

export function CtaSection() {
  const { tr } = useLang();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-accent-warm via-accent-light to-accent-warm/80 p-12 md:p-16 text-center"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-dark/20 blur-2xl" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-dark mb-4">
              {tr.cta.title}
            </h2>
            <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
              {tr.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ROUTES.booking}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-dark text-accent-warm rounded-lg font-semibold text-base hover:bg-dark/80 transition-colors shadow-lg"
              >
                {tr.cta.bookOnline}
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsappLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/20 backdrop-blur-sm text-dark rounded-lg font-semibold text-base hover:bg-white/30 transition-colors border border-dark/10"
              >
                <MessageCircle size={18} />
                {tr.cta.whatsapp}
              </a>
              <a
                href={`tel:${CONTACT.phoneLink}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/20 backdrop-blur-sm text-dark rounded-lg font-semibold text-base hover:bg-white/30 transition-colors border border-dark/10"
              >
                <Phone size={18} />
                {tr.cta.call}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
