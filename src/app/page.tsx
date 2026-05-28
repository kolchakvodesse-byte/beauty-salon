import { Hero } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features-section';
import { TaglineSection } from '@/components/sections/tagline-section';
import { BrandSection } from '@/components/sections/brand-section';
import { ServicesFaceSection } from '@/components/sections/services-face-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { ServicesPreview } from '@/components/sections/services-preview';
import { PromosSection } from '@/components/sections/promos-section';
import { MastersPreview } from '@/components/sections/masters-preview';
import { PortfolioPreview } from '@/components/sections/portfolio-preview';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';

export const metadata = {
  title: 'Beauty Salon | Премиум эстетика',
  description:
    'Передовые эстетические процедуры. Клинически проверенные технологии. Онлайн-запись доступна.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <TaglineSection />
      <BrandSection />
      <ServicesFaceSection />
      <BenefitsSection />
      <ServicesPreview />
      <PromosSection />
      <MastersPreview />
      <PortfolioPreview />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
