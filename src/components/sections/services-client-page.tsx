'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCard } from '@/components/sections/service-card';
import type { Service, ServiceCategory } from '@/lib/types';

interface Props {
  services: Service[];
  categories: ServiceCategory[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ServicesClientPage({ services, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category_id === activeCategory);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-accent-warm text-dark'
                : 'bg-border-subtle text-muted hover:text-white'
            }`}
          >
            Все
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-accent-warm text-dark'
                  : 'bg-border-subtle text-muted hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-muted mb-8">
          Показано {filtered.length} из {services.length} услуг
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">В этой категории нет услуг</p>
        )}
      </div>
    </section>
  );
}
