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
    <Section id="why-us" padding="lg" background="subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-primary text-xs font-black uppercase tracking-[0.2em] font-sans px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 inline-block">The Foxx Difference</span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-text-heading font-display tracking-tight leading-tight">
                We build engines, <br />
                <span className="brand-gradient-text">not just outputs.</span>
              </h2>
            </div>
            <p className="text-brand-text-secondary max-w-lg font-sans font-medium text-base md:text-lg leading-relaxed opacity-90">
              ConversionFoxx is your growth engineering laboratory. We architect complete revenue systems that scale your business with mathematical precision.
            </p>
            
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors shrink-0">
                  <div className="w-6 h-6 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/40" />
                </div>
                <div className="text-lg font-black text-brand-text-heading font-display tracking-tight">Predictable Revenue Growth</div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors shrink-0">
                  <div className="w-6 h-6 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/40" />
                </div>
                <div className="text-lg font-black text-brand-text-heading font-display tracking-tight">Full Revenue Visibility</div>
              </div>
            </div>
          </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="core-card p-8 rounded-2xl hover:bg-white/5 transition-all group flex flex-col h-full hover-lift"
            >
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300 mb-6 w-fit">
                <reason.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors font-display tracking-tight">{reason.title}</h3>
              <p className="text-sm text-brand-text-secondary leading-[1.6] group-hover:text-brand-text-secondary transition-colors font-sans mb-4">{reason.description}</p>
              <div className="mt-auto pt-4 border-t border-white/5 text-xs font-bold text-brand-primary uppercase tracking-[0.1em] font-sans">
                Proven Outcome: Increased Yield
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
