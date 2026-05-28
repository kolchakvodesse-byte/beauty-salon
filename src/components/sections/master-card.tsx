'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Master } from '@/lib/types';
import { getInitials } from '@/lib/utils';

interface MasterCardProps {
  master: Master;
}

export function MasterCard({ master }: MasterCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
      <Card className="text-center hover:border-accent-warm transition-colors">
        {master.photo_url ? (
          <div className="relative w-full h-48 mb-4 bg-border-subtle rounded-lg overflow-hidden">
            <Image
              src={master.photo_url}
              alt={master.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-48 mb-4 bg-border-subtle rounded-lg flex items-center justify-center">
            <span className="text-4xl font-semibold text-accent-warm">
              {getInitials(master.name)}
            </span>
          </div>
        )}

        <h3 className="font-display text-xl font-semibold text-text mb-1">{master.name}</h3>
        <p className="text-accent-warm text-sm mb-2">{master.role}</p>
        {master.experience_years && (
          <p className="text-xs text-muted mb-3">Опыт: {master.experience_years} лет</p>
        )}
        {master.bio && <p className="text-sm text-muted">{master.bio}</p>}
      </Card>
    </motion.div>
  );
}
