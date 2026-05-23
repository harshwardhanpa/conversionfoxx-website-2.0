import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';

// ✨ REFERENCES:
// - Motion Primitives (shadcn) - Magnetic button effects
// - Dribbble glassmorphism cards - Layer depth and blur
// - Apple Liquid Glass - Fluid animations on interaction
// - Tomorrow.io design - Glassmorphism weather cards

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const services: ServiceItem[] = [
  {
    id: 'social-media',
    icon: '👥',
    title: 'Social Media Management',
    description: 'Strategic content creation and community management to build brand authority and drive engagement at scale.',
    features: ['Content Strategy', 'Community Management', 'Analytics'],
    color: 'from-blue-500/20',
    gradient: 'group-hover:from-blue-500/30',
  },
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Web Development',
    description: 'High-performance, conversion-focused websites built with React and Next.js that rank and convert visitors.',
    features: ['React/Next.js', 'E-commerce', 'Custom CMS'],
    color: 'from-purple-500/20',
    gradient: 'group-hover:from-purple-500/30',
  },
  {
    id: 'app-dev',
    icon: '📱',
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.',
    features: ['iOS/Android', 'React Native', 'Flutter'],
    color: 'from-pink-500/20',
    gradient: 'group-hover:from-pink-500/30',
  },
  {
    id: 'paid-ads',
    icon: '🎯',
    title: 'Paid Advertising',
    description: 'Data-driven Meta and Google Ads campaigns optimized for maximum ROI and qualified lead generation.',
    features: ['Google Ads', 'Meta Ads', 'Retargeting'],
    color: 'from-orange-500/20',
    gradient: 'group-hover:from-orange-500/30',
  },
  {
    id: 'crm',
    icon: '🗄️',
    title: 'CRM Solutions',
    description: 'Custom CRM implementations and automation to streamline your sales pipeline and customer management.',
    features: ['Salesforce', 'HubSpot', 'Automation'],
    color: 'from-green-500/20',
    gradient: 'group-hover:from-green-500/30',
  },
  {
    id: 'growth',
    icon: '📈',
    title: 'Growth Audit',
    description: 'Deep analysis of your current performance, identifying leaks, opportunities, and the roadmap to scale.',
    features: ['Data Analysis', 'Roadmap', 'Recommendations'],
    color: 'from-red-500/20',
    gradient: 'group-hover:from-red-500/30',
  },
];

const ServiceCard = ({
  service,
  index,
  isHovered,
  onHover,
}: {
  service: ServiceItem;
  index: number;
  isHovered: string | null;
  onHover: (id: string | null) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        type: 'spring',
        damping: 15,
      }}
      onHoverStart={() => onHover(service.id)}
      onHoverEnd={() => onHover(null)}
      className="group h-full"
    >
      {/* GLASS CARD WITH LIQUID EFFECT */}
      <motion.div
        animate={{
          y: isHovered === service.id ? -12 : 0,
          borderColor: isHovered === service.id ? 'rgba(242, 125, 38, 0.4)' : 'rgba(255, 255, 255, 0.08)',
        }}
        transition={{ type: 'spring', damping: 12, stiffness: 120 }}
        className={`relative overflow-hidden p-8 rounded-2xl h-full border transition-all duration-500 ${service.color} ${service.gradient} bg-gradient-to-br to-white/[0.02] backdrop-blur-2xl group-hover:shadow-2xl group-hover:shadow-brand-primary/10`}
      >
        {/* GRADIENT BORDER EFFECT - Inspired by Apple design */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent" />

        {/* ANIMATED BACKGROUND BLOB */}
        <motion.div
          animate={{
            scale: isHovered === service.id ? 1.2 : 0.8,
            opacity: isHovered === service.id ? 0.15 : 0.05,
          }}
          transition={{ type: 'spring', damping: 20 }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-brand-primary rounded-full blur-3xl pointer-events-none"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col h-full">
          {/* ICON - Animated scale on hover */}
          <motion.div
            animate={{
              scale: isHovered === service.id ? 1.15 : 1,
              rotate: isHovered === service.id ? 6 : 0,
            }}
            transition={{ type: 'spring', damping: 12 }}
            className="text-5xl mb-6 inline-block w-fit"
          >
            {service.icon}
          </motion.div>

          {/* TITLE - Animated color shift */}
          <motion.h3
            animate={{
              color: isHovered === service.id ? '#F27D26' : '#FFFFFF',
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold font-display mb-3 leading-tight"
          >
            {service.title}
          </motion.h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-brand-text-secondary leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* FEATURES - Staggered reveal on hover */}
          <motion.div
            initial={false}
            animate={{
              height: isHovered === service.id ? 'auto' : '0',
              opacity: isHovered === service.id ? 1 : 0,
              marginBottom: isHovered === service.id ? 16 : 0,
            }}
            transition={{ type: 'spring', damping: 15 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isHovered === service.id ? 1 : 0,
                    x: isHovered === service.id ? 0 : -10,
                  }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2 text-xs font-medium text-brand-primary"
                >
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LEARN MORE LINK - Animated arrow */}
          <motion.div
            animate={{
              x: isHovered === service.id ? 4 : 0,
            }}
            transition={{ type: 'spring', damping: 12 }}
            className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group/link"
          >
            <span>Learn more</span>
            <motion.span
              animate={{
                x: isHovered === service.id ? 6 : 0,
              }}
              transition={{ type: 'spring', damping: 12 }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <Section id="services" padding="lg">
      <Container>
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/8 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 glass"
          >
            ✨ What We Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-brand-text-heading font-display tracking-tight mb-6 leading-tight"
          >
            Complete Growth &amp; Technology{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary/70">
              Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-secondary font-medium leading-relaxed"
          >
            From strategy to execution, we deliver integrated solutions that work together to drive sustainable revenue growth.
          </motion.p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              isHovered={hoveredService}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-20 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-text-heading font-display mb-2">
              Ready to explore our services?
            </h3>
            <p className="text-brand-text-secondary">
              Let's discuss which solution fits your growth goals.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button to="/contact" icon={ArrowRight} size="lg">
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;
