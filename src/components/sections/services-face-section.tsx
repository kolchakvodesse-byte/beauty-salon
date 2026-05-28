'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { useLang } from '@/contexts/language-context';

interface CardConfig {
  id: string;
  label: string;
  sub: string;
  drift: number;
  pos: CSSProperties;
  imageSrc?: string;
}

const CARDS: CardConfig[] = [
  { id: 'peeling',    label: 'Пилинг',                  sub: 'Химический · Энзимный',   drift: 0.0, pos: { top: '4%',    left: '1%'   } },
  { id: 'serums',     label: 'Сыворотки',                sub: 'Витамин C · Ретинол',     drift: 0.8, pos: { top: '31%',   left: '-2%'  } },
  { id: 'masks',      label: 'Маски',                    sub: 'Альгинатные · Тканевые',  drift: 1.4, pos: { bottom: '27%', left: '-2%'  } },
  { id: 'hydration',  label: 'Увлажнение',               sub: 'Гиалуроновая · Биоревит', drift: 0.5, pos: { bottom: '4%',  left: '4%'   } },
  { id: 'apparatus',  label: 'Аппаратная\nкосметология', sub: 'BBL · RF · INDIBA®',      drift: 1.0, pos: { top: '4%',    right: '1%'  } },
  { id: 'injections', label: 'Инъекции красоты',         sub: 'Контурная · Ботокс',      drift: 1.6, pos: { top: '31%',   right: '-2%' } },
  { id: 'massage',    label: 'Массаж лица',              sub: 'Лимфодренаж · Скульпт',   drift: 0.9, pos: { bottom: '27%', right: '-2%' } },
  { id: 'steam',      label: 'Паровые процедуры',        sub: 'Озонирование · Пар',      drift: 1.2, pos: { bottom: '4%',  right: '4%'  } },
];

const CARD_ART: Record<string, string> = {
  peeling:
    'radial-gradient(ellipse 55% 65% at 50% 45%, rgba(210,195,160,0.55) 0%, rgba(170,155,110,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  serums:
    'radial-gradient(ellipse 50% 60% at 48% 50%, rgba(160,175,210,0.55) 0%, rgba(110,125,170,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  masks:
    'radial-gradient(ellipse 55% 60% at 50% 52%, rgba(150,190,160,0.50) 0%, rgba(100,145,110,0.25) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  hydration:
    'radial-gradient(ellipse 52% 65% at 50% 44%, rgba(140,185,210,0.55) 0%, rgba(90,140,175,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  apparatus:
    'radial-gradient(ellipse 50% 60% at 52% 50%, rgba(170,140,210,0.52) 0%, rgba(120,90,170,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  injections:
    'radial-gradient(ellipse 55% 62% at 48% 52%, rgba(210,165,165,0.52) 0%, rgba(170,110,110,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  massage:
    'radial-gradient(ellipse 50% 65% at 50% 48%, rgba(200,185,160,0.52) 0%, rgba(155,138,110,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
  steam:
    'radial-gradient(ellipse 55% 60% at 50% 46%, rgba(185,205,215,0.52) 0%, rgba(135,158,175,0.28) 50%, transparent 72%), ' +
    'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 28%, transparent 62%, rgba(8,8,8,0.92) 100%)',
};

function FacePortrait() {
  return (
    <motion.div
      animate={{ scale: [1, 1.006, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: 400, height: 560, position: 'relative', flexShrink: 0 }}
    >
      <Image
        src="/images/face-hero.jpg"
        alt="Beauty model"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 72% 78% at 50% 44%, transparent 28%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.96) 100%)',
        pointerEvents: 'none',
      }} />
    </motion.div>
  );
}

function FloatingCard({ card }: { card: CardConfig }) {
  return (
    <motion.div
      className="absolute"
      style={{ width: 178, height: 230, ...card.pos }}
      initial={{ opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: card.drift * 0.1 + 0.2 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5 + card.drift * 0.4, repeat: Infinity, ease: 'easeInOut', delay: card.drift * 0.3 }}
        className="w-full h-full"
      >
        <Link href={ROUTES.services} className="block w-full h-full group">
          <div className="relative w-full h-full rounded-[18px] overflow-hidden border border-white/8 group-hover:border-white/22 group-hover:scale-[1.03] transform transition-all duration-300 shadow-xl shadow-black/70">
            <div className="absolute inset-0 bg-[#141414]" />

            {card.imageSrc ? (
              <Image
                src={card.imageSrc}
                alt={card.label}
                fill
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="absolute inset-0" style={{ background: CARD_ART[card.id] }} />
            )}

            <div
              className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 55%, transparent 100%)' }}
            >
              <p className="text-white text-[11px] font-semibold tracking-wide" style={{ whiteSpace: 'pre-line' }}>{card.label}</p>
              <p className="text-white/40 text-[10px] mt-1 tracking-wider">{card.sub}</p>
            </div>

            <div
              className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(200,168,130,0.45)' }}
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function ServicesFaceSection() {
  const { tr } = useLang();

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-between py-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 52% 46% at 50% 52%, rgba(80,45,12,0.12) 0%, transparent 68%)' }}
      />

      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl sm:text-4xl font-semibold text-white text-center relative z-10 px-4"
      >
        {tr.services.title}
      </motion.h2>

      <div
        className="relative flex items-center justify-center"
        style={{ width: '100%', maxWidth: 900, height: 'clamp(560px, 78vw, 660px)' }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <FacePortrait />
        </div>

        {CARDS.map((card) => (
          <FloatingCard key={card.id} card={card} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10"
      >
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-40 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(140,100,255,0.5), transparent)' }}
        />
        <Link
          href={ROUTES.services}
          className="inline-flex items-center px-9 py-3.5 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
        >
          {tr.services.cta}
        </Link>
      </motion.div>
    </section>
  );
}
