import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';

// ✨ REFERENCES:
// - Motion Primitives text reveal effects
// - Apple design - Sequential reveals with stagger
// - Framer marketplace - Process timeline animations
// - Glassmorphism depth layering - Dribbble

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Audit',
    description: 'We dive deep into your current operations, identifying conversion leaks and revenue opportunities.',
    details: [
      'Traffic and conversion analysis',
      'Competitor benchmarking',
      'Revenue operations assessment',
      'Growth potential mapping',
    ],
    icon: <span className="text-4xl">🔍</span>,
    color: 'from-blue-500/20',
  },
  {
    id: 2,
    number: '02',
    title: 'Strategy & Planning',
    description: 'We architect a connected growth system tailored to your business model and market position.',
    details: [
      'Revenue roadmap creation',
      'Channel strategy',
      'Tech stack planning',
      'Attribution framework',
    ],
    icon: <span className="text-4xl">🗺️</span>,
    color: 'from-purple-500/20',
  },
  {
    id: 3,
    number: '03',
    title: 'Implementation',
    description: 'Our team executes across all channels—development, marketing, operations, and optimization.',
    details: [
      'System build-out',
      'Campaign deployment',
      'Integration setup',
      'Team training',
    ],
    icon: <span className="text-4xl">⚙️</span>,
    color: 'from-orange-500/20',
  },
  {
    id: 4,
    number: '04',
    title: 'Optimization & Scale',
    description: 'We continuously measure, learn, and optimize to compound your growth month over month.',
    details: [
      'Performance tracking',
      'A/B testing',
      'Revenue optimization',
      'Scaling playbooks',
    ],
    icon: <span className="text-4xl">📈</span>,
    color: 'from-green-500/20',
  },
];

const ProcessStepCard = ({
  step,
  index,
  isActive,
  onHover,
}: {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        type: 'spring',
        damping: 14,
      }}
      onHoverStart={() => onHover(step.id)}
      onHoverEnd={() => onHover(null)}
      className="group relative"
    >
      {/* CONNECTING LINE - Animated */}
      {index < steps.length - 1 && (
        <motion.div
          animate={{
            height: isActive ? '200px' : '100px',
            opacity: isActive ? 0.6 : 0.2,
          }}
          transition={{ type: 'spring', damping: 12 }}
          className="absolute -bottom-[110px] left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-primary to-transparent pointer-events-none hidden lg:block"
        />
      )}

      {/* CARD CONTAINER */}
      <motion.div
        animate={{
          y: isActive ? -16 : 0,
          borderColor: isActive ? 'rgba(242, 125, 38, 0.4)' : 'rgba(255, 255, 255, 0.08)',
          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
        }}
        transition={{ type: 'spring', damping: 12, stiffness: 120 }}
        className={`p-8 rounded-2xl border bg-gradient-to-br ${step.color} to-white/[0.02] backdrop-blur-2xl h-full group-hover:shadow-2xl group-hover:shadow-brand-primary/10 transition-all duration-300`}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent" />

        {/* ANIMATED BACKGROUND BLOB */}
        <motion.div
          animate={{
            scale: isActive ? 1.3 : 0.9,
            opacity: isActive ? 0.15 : 0.05,
          }}
          transition={{ type: 'spring', damping: 20 }}
          className="absolute -top-16 -right-16 w-48 h-48 bg-brand-primary rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10">
          {/* STEP NUMBER - Oversized and animated */}
          <motion.div
            animate={{
              scale: isActive ? 1.2 : 1,
              color: isActive ? '#F27D26' : 'rgba(255, 255, 255, 0.3)',
            }}
            transition={{ type: 'spring', damping: 12 }}
            className="text-7xl font-black font-display mb-6 leading-none"
          >
            {step.number}
          </motion.div>

          {/* ICON */}
          <motion.div
            animate={{
              scale: isActive ? 1.15 : 1,
              rotate: isActive ? 8 : 0,
            }}
            transition={{ type: 'spring', damping: 12 }}
            className="mb-6"
          >
            {step.icon}
          </motion.div>

          {/* TITLE - Animated color */}
          <motion.h3
            animate={{
              color: isActive ? '#F27D26' : '#FFFFFF',
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold font-display mb-3 leading-tight"
          >
            {step.title}
          </motion.h3>

          {/* DESCRIPTION */}
          <p className="text-base text-brand-text-secondary leading-relaxed mb-6">
            {step.description}
          </p>

          {/* DETAILS - Expandable list */}
          <motion.div
            initial={false}
            animate={{
              height: isActive ? 'auto' : '0',
              opacity: isActive ? 1 : 0,
              marginBottom: isActive ? 24 : 0,
            }}
            transition={{ type: 'spring', damping: 15 }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 mb-6">
              {step.details.map((detail, i) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -10,
                  }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.3,
                  }}
                  className="flex items-start gap-3 text-sm text-brand-text-secondary"
                >
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA - Interactive */}
          <motion.div
            animate={{
              x: isActive ? 6 : 0,
            }}
            transition={{ type: 'spring', damping: 12 }}
            className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group/link cursor-pointer hover:gap-3 transition-all"
          >
            <span>Explore this phase</span>
            <motion.span
              animate={{
                x: isActive ? 4 : 0,
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

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Section id="process" padding="lg" background="subtle">
      <Container>
        {/* HEADER */}
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
            🔄 Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-brand-text-heading font-display mb-6 leading-tight"
          >
            The <span className="text-brand-primary">Revenue System</span> We Build For You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-secondary font-medium"
          >
            A proven 4-phase methodology that transforms scattered efforts into a predictable, compounding growth engine.
          </motion.p>
        </motion.div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <ProcessStepCard
              key={step.id}
              step={step}
              index={idx}
              isActive={activeStep === step.id}
              onHover={setActiveStep}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-16 border-t border-white/5 text-center"
        >
          <p className="text-brand-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Each phase builds on the previous one, creating compounding returns. Let's discuss which phase your business needs first.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-primary text-brand-dark font-bold font-display transition-all hover:shadow-xl hover:shadow-brand-primary/30"
          >
            <span>Start Your Growth Audit</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Process;
