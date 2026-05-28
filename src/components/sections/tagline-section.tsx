'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/contexts/language-context';

export function TaglineSection() {
  const { tr } = useLang();
  const tl = tr.tagline;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black border-t border-white/[0.07]"
      style={{ background: 'linear-gradient(90deg, #060606 0%, #0c0a0a 50%, #060606 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-6">
        {/* Crown + text */}
        <div className="flex items-center gap-5 min-w-0">
          {/* Crown SVG */}
          <svg
            width="22" height="18" viewBox="0 0 22 18" fill="none"
            className="shrink-0 opacity-50"
            style={{ color: '#C8A882' }}
          >
            <path
              d="M1 14L4.5 4L8.5 9L11 1L13.5 9L17.5 4L21 14H1Z"
              stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"
              fill="none"
            />
            <path d="M1 14H21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M2 17H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
          </svg>

          <p className="font-sans text-sm truncate">
            <span style={{ color: 'rgba(255,255,255,0.42)' }}>{tl.prefix} </span>
            <span className="font-semibold text-white">{tl.bold}</span>
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2 shrink-0">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
          >
            <ChevronLeft size={14} style={{ color: 'rgba(255,255,255,0.45)' }} />
          </button>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
          >
            <ChevronRight size={14} style={{ color: 'rgba(255,255,255,0.45)' }} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
