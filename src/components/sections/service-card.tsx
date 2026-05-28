'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:border-accent-warm transition-colors">
        {service.image_url && (
          <div className="relative w-full h-48 mb-4 bg-border-subtle rounded overflow-hidden">
            <Image
              src={service.image_url}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        <h3 className="font-display text-xl font-semibold text-text mb-2">{service.name}</h3>
        <p className="text-muted text-sm mb-4 flex-grow">{service.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-semibold text-accent-warm">{formatPrice(service.price)}</p>
            {service.price_old && (
              <p className="text-xs text-muted line-through">{formatPrice(service.price_old)}</p>
            )}
          </div>
          <p className="text-xs text-muted">{service.duration_minutes} мин</p>
        </div>

        <Link href={`/booking?service=${service.id}`} className="w-full">
          <Button variant="primary" size="md" className="w-full">
            Записаться
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
}
