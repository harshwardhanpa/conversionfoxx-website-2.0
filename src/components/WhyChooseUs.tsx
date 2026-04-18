import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Layers, Rocket, ShieldCheck, BarChart3 } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';

const reasons = [
  {
    title: 'System Thinking',
    description: 'We don’t just fix parts; we optimize the entire growth system for maximum efficiency.',
    icon: Layers,
  },
  {
    title: 'Revenue Focused',
    description: 'We focus on the metrics that matter: ROI, conversion rates, and bottom-line revenue.',
    icon: Target,
  },
  {
    title: 'Data-Backed Strategy',
    description: 'No guesswork. We use deep analytics and Growth Audits to drive every decision.',
    icon: BarChart3,
  },
  {
    title: 'Full Visibility',
    description: 'Our Revenue Operations Systems give you complete visibility into your pipeline.',
    icon: Zap,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'We build systems that grow with your business, ensuring long-term stability.',
    icon: ShieldCheck,
  },
  {
    title: 'Rapid Optimization',
    description: 'We move fast, testing and iterating to find the most efficient path to growth.',
    icon: Rocket,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Section id="why-us" padding="xl" background="subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] font-sans">Why ConversionFoxx?</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display">
                We build systems, <br />
                <span className="brand-gradient-text">not just services</span>
              </h2>
            </div>
            <p className="text-brand-text-secondary text-lg leading-[1.6] max-w-xl font-sans">
              ConversionFoxx is your strategic growth partner. We don't just run ads or build pages—we architect complete revenue systems that scale your business predictably.
            </p>
            
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors shrink-0">
                  <div className="w-6 h-6 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/40" />
                </div>
                <div className="text-lg font-bold text-brand-text-heading font-display">Predictable Revenue Growth</div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors shrink-0">
                  <div className="w-6 h-6 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/40" />
                </div>
                <div className="text-lg font-bold text-brand-text-heading font-display">Full Revenue Visibility</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group flex flex-col h-full"
              >
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                  <reason.icon className="w-5 h-5 text-brand-primary group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-brand-primary transition-colors font-display">{reason.title}</h3>
                <p className="text-sm text-brand-text-secondary opacity-50 leading-[1.6] group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors font-sans">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
