'use client';

import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let rafId: number;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function move(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function tick() {
      cx = lerp(cx, tx, 0.08);
      cy = lerp(cy, ty, 0.08);
      el!.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', move);
    tick();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[400px] h-[400px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(120,100,255,0.18) 0%, rgba(80,60,220,0.08) 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
