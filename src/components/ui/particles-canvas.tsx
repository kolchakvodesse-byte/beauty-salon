'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export function ParticlesCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0;
    let H = 0;
    const NUM = 280;
    const SPEED = 4.5;

    const stars: Star[] = [];

    function init() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
      stars.length = 0;
      for (let i = 0; i < NUM; i++) {
        stars.push({
          x: (Math.random() - 0.5) * W * 2,
          y: (Math.random() - 0.5) * H * 2,
          z: Math.random() * W,
          pz: 0,
        });
      }
    }

    function draw() {
      ctx!.fillStyle = 'rgba(0,0,0,0.18)';
      ctx!.fillRect(0, 0, W, H);

      ctx!.save();
      ctx!.translate(W / 2, H / 2);

      for (const s of stars) {
        s.pz = s.z;
        s.z -= SPEED;

        if (s.z <= 0) {
          s.x = (Math.random() - 0.5) * W * 2;
          s.y = (Math.random() - 0.5) * H * 2;
          s.z = W;
          s.pz = W;
          continue;
        }

        const sx = (s.x / s.z) * W;
        const sy = (s.y / s.z) * H;
        const px = (s.x / s.pz) * W;
        const py = (s.y / s.pz) * H;

        const size = Math.max(0.3, (1 - s.z / W) * 2.2);
        const alpha = Math.min(1, (1 - s.z / W) * 1.6);

        ctx!.beginPath();
        ctx!.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx!.lineWidth = size;
        ctx!.moveTo(px, py);
        ctx!.lineTo(sx, sy);
        ctx!.stroke();
      }

      ctx!.restore();
      animId = requestAnimationFrame(draw);
    }

    init();
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    draw();

    const ro = new ResizeObserver(() => {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
