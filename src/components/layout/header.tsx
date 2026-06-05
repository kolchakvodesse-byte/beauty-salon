'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';
import type { Lang } from '@/lib/i18n';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ua', label: 'UA' },
  { code: 'ru', label: 'RU' },
  { code: 'ar', label: 'AR' },
];

export function Header() {
  const { lang, setLang, tr } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navItems = [
    { label: tr.nav.services,  href: ROUTES.services },
    { label: tr.nav.masters,   href: ROUTES.masters },
    { label: tr.nav.promo,     href: ROUTES.promo },
    { label: tr.nav.portfolio, href: ROUTES.portfolio },
    { label: tr.nav.reviews,   href: ROUTES.reviews },
    { label: tr.nav.faq,       href: ROUTES.faq },
    { label: tr.nav.blog,      href: ROUTES.blog },
    { label: tr.nav.about,     href: ROUTES.about },
    { label: tr.nav.contacts,  href: ROUTES.contacts },
  ];

  return (
    <>
      {/* ── Main header ─────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="px-5 sm:px-8 h-20 flex items-center justify-between relative">

          {/* Left: hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="relative z-10 w-11 h-11 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block w-[18px] h-[1.5px] bg-white rounded-full" />
              <span className="block w-[14px] h-[1.5px] bg-white/60 rounded-full" />
              <span className="block w-[18px] h-[1.5px] bg-white rounded-full" />
            </div>
          </button>

          {/* Center: logo */}
          <Link href={ROUTES.home} className="absolute left-1/2 -translate-x-1/2 text-center group">
            <p className="font-display text-[17px] font-semibold text-white tracking-[0.18em] leading-none group-hover:text-white/80 transition-colors">
              {tr.brand.salonName}
            </p>
            <p className="text-[8px] tracking-[0.5em] text-white/40 mt-[3px] font-sans uppercase">
              AESTHETIC
            </p>
          </Link>

          {/* Right: lang switcher + CTA */}
          <div className="relative z-10 flex items-center gap-3">

            {/* Desktop: full pill */}
            <div className="hidden sm:flex items-center gap-1 bg-white/6 border border-white/10 rounded-full px-2 py-1">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                    lang === code ? 'bg-white text-black' : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile: dropdown */}
            <div ref={langRef} className="relative sm:hidden">
              <button
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1 bg-white/6 border border-white/10 rounded-full px-3 py-1.5"
              >
                <span className="text-[11px] font-semibold text-white tracking-wider">
                  {lang.toUpperCase()}
                </span>
                <motion.span
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex items-center"
                >
                  <ChevronDown size={12} className="text-white/60" />
                </motion.span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scaleY: 0.85 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -6, scaleY: 0.85 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute top-full mt-2 right-0 bg-black/95 border border-white/12 rounded-xl overflow-hidden min-w-[56px] shadow-xl"
                  >
                    {LANGS.filter(({ code }) => code !== lang).map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => { setLang(code); setLangOpen(false); }}
                        className="block w-full px-4 py-2 text-[11px] font-semibold text-white/55 hover:text-white hover:bg-white/10 transition-colors text-center"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop CTA only */}
            <Link
              href={ROUTES.booking}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-white/90 transition-colors tracking-wide"
            >
              {tr.header.book}
            </Link>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen overlay menu ─────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] flex flex-col"
            style={{ background: 'rgba(0,0,0,0.97)' }}
          >
            {/* Header row inside overlay */}
            <div className="px-5 sm:px-8 h-20 flex items-center justify-between shrink-0">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
              >
                <X size={18} className="text-white" />
              </button>

              <Link href={ROUTES.home} onClick={() => setOpen(false)} className="absolute left-1/2 -translate-x-1/2 text-center">
                <p className="font-display text-[17px] font-semibold text-white tracking-[0.18em] leading-none">
                  {tr.brand.salonName}
                </p>
                <p className="text-[8px] tracking-[0.5em] text-white/40 mt-[3px] font-sans uppercase">
                  AESTHETIC
                </p>
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white/6 border border-white/10 rounded-full px-2 py-1">
                  {LANGS.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className={`px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                        lang === code ? 'bg-white text-black' : 'text-white/45 hover:text-white/80'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <Link
                  href={ROUTES.booking}
                  onClick={() => setOpen(false)}
                  className="hidden sm:inline-flex items-center px-5 py-2.5 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-white/90 transition-colors tracking-wide"
                >
                  {tr.header.book}
                </Link>
                <div className="sm:hidden w-11" />
              </div>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col items-start justify-center flex-1 px-8 sm:px-16 gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.055, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-3xl sm:text-4xl md:text-5xl text-white/60 hover:text-white transition-colors duration-200 leading-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="px-8 sm:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-white/10"
            >
              <a href="tel:+97143885500" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                +971 4 388 5500
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <a href="https://wa.me/971551234567" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                WhatsApp
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <Link
                href={ROUTES.booking}
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex items-center px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                {tr.header.bookOnline}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
