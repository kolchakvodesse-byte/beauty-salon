'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

type CardId = 'peeling' | 'serums' | 'masks' | 'hydration' | 'apparatus' | 'injections' | 'massage' | 'steam';

interface CardItem {
  id: CardId;
  drift: number;
  pos: CSSProperties;
  mobilePos: CSSProperties;
  imageSrc?: string;
}

// Desktop positions — same as before
// Mobile positions — oval around the face (4 rows × 2 columns)
const CARDS: CardItem[] = [
  { id: 'peeling',    drift: 0.0, pos: { top: '5%',    left: '18%'  }, mobilePos: { top: '22%', left: '21%'  }, imageSrc: '/images/feature-17.jpg' },
  { id: 'serums',     drift: 0.7, pos: { top: '28%',   left: '11%'  }, mobilePos: { top: '42%', left: '2%'   }, imageSrc: '/images/feature-13.jpg' },
  { id: 'masks',      drift: 1.3, pos: { top: '53%',   left: '13%'  }, mobilePos: { top: '61%', left: '4%'   }, imageSrc: '/images/feature-12.jpg' },
  { id: 'hydration',  drift: 0.5, pos: { bottom: '5%', left: '17%'  }, mobilePos: { top: '79%', left: '21%'  }, imageSrc: '/images/feature-18.png' },
  { id: 'apparatus',  drift: 1.0, pos: { top: '5%',    right: '18%' }, mobilePos: { top: '22%', right: '21%' }, imageSrc: '/images/feature-14.jpg' },
  { id: 'injections', drift: 1.5, pos: { top: '28%',   right: '11%' }, mobilePos: { top: '42%', right: '2%'  }, imageSrc: '/images/feature-11.jpg' },
  { id: 'massage',    drift: 0.9, pos: { top: '53%',   right: '13%' }, mobilePos: { top: '61%', right: '4%'  }, imageSrc: '/images/feature-15.jpg' },
  { id: 'steam',      drift: 1.2, pos: { bottom: '5%', right: '17%' }, mobilePos: { top: '79%', right: '21%' }, imageSrc: '/images/feature-19.jpg' },
];

const CARD_ART: Record<string, string> = {
  peeling:    'radial-gradient(ellipse 55% 65% at 50% 45%, rgba(210,195,160,0.55) 0%, rgba(170,155,110,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  serums:     'radial-gradient(ellipse 50% 60% at 48% 50%, rgba(160,175,210,0.55) 0%, rgba(110,125,170,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  masks:      'radial-gradient(ellipse 55% 60% at 50% 52%, rgba(150,190,160,0.50) 0%, rgba(100,145,110,0.25) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  hydration:  'radial-gradient(ellipse 52% 65% at 50% 44%, rgba(140,185,210,0.55) 0%, rgba(90,140,175,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  apparatus:  'radial-gradient(ellipse 50% 60% at 52% 50%, rgba(170,140,210,0.52) 0%, rgba(120,90,170,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  injections: 'radial-gradient(ellipse 55% 62% at 48% 52%, rgba(210,165,165,0.52) 0%, rgba(170,110,110,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  massage:    'radial-gradient(ellipse 50% 65% at 50% 48%, rgba(200,185,160,0.52) 0%, rgba(155,138,110,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
  steam:      'radial-gradient(ellipse 55% 60% at 50% 46%, rgba(185,205,215,0.52) 0%, rgba(135,158,175,0.28) 50%, transparent 72%), linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.92) 100%)',
};

export function Hero() {
  const { tr } = useLang();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* ── Photo background ── */}
      <div className="absolute inset-0">
        {/* Desktop */}
        <div className="absolute inset-0 hidden sm:block hero-face-wrap">
          <Image
            src="/images/feature-3.jpg"
            alt="Beauty model"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
        {/* Mobile — portrait photo, covers full screen */}
        <div className="absolute inset-0 sm:hidden">
          <Image
            src="/images/hero-mobile.jpg"
            alt="Beauty model"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
        <div className="absolute inset-0 hero-grad-h bg-linear-to-r from-black/80 from-28% via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/35" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 65% at 68% 42%, rgba(155,75,110,0.16) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 45% 55% at 20% 45%, rgba(185,140,80,0.07) 0%, transparent 70%)' }} />
      </div>

      {/* ── Floating cards ── */}
      {CARDS.map((card) => (
        <motion.div
          key={card.id}
          className="absolute z-10 w-19.5 h-26.5 sm:w-27 sm:h-37"
          style={isMobile ? card.mobilePos : card.pos}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: card.drift * 0.12 + 0.4 }}
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.5 + card.drift * 0.4, repeat: Infinity, ease: 'easeInOut', delay: card.drift * 0.3 }}
            className="w-full h-full"
          >
            <Link href={ROUTES.services} className="block w-full h-full group">
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 group-hover:border-white/25 group-hover:scale-[1.04] transform transition-all duration-300 shadow-lg shadow-black/60">
                <div className="absolute inset-0 bg-[#111]" />
                {card.imageSrc ? (
                  <Image src={card.imageSrc} alt={tr.hero.cards[card.id].label} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className="absolute inset-0" style={{ background: CARD_ART[card.id] }} />
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-6"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)' }}
                >
                  <p className="text-white text-[9px] sm:text-[10px] font-semibold tracking-wide leading-snug" style={{ whiteSpace: 'pre-line' }}>{tr.hero.cards[card.id].label}</p>
                  <p className="text-white/40 text-[8px] sm:text-[9px] mt-0.5 tracking-wider leading-snug">{tr.hero.cards[card.id].sub}</p>
                </div>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(200,168,130,0.4)' }} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      ))}

    </section>
  );
}
