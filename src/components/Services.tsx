import React from 'react';
import { motion } from 'motion/react';
import { Search, Target, Zap, LayoutDashboard, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import Section from './ui/Section';
import Container from './ui/Container';

const steps = [
  {
    step: 'Step 1',
    title: 'Traffic Acquisition',
    description: 'We deploy scalable acquisition systems to attract high-intent buyers through precision-engineered digital channels.',
    outcome: 'Predictable high-quality lead flow',
    icon: Target,
    color: 'from-brand-primary/20 to-transparent',
  },
  {
    step: 'Step 2',
    title: 'Conversion Architecture',
    description: 'We optimize the entire customer journey, eliminating friction and turning existing traffic into measurable revenue.',
    outcome: 'Maximizing ROI on every visitor',
    icon: Zap,
    color: 'from-brand-primary/20 to-transparent',
  },
  {
    step: 'Step 3',
    title: 'Revenue Operations',
    description: 'We integrate full-funnel tracking and CRM automation to ensure no lead is lost and every dollar is accounted for.',
    outcome: 'Complete visibility into profitability',
    icon: LayoutDashboard,
    color: 'from-brand-primary/30 to-transparent',
    isFlagship: true,
  },
  {
    step: 'Step 4',
    title: 'System Optimization',
    description: 'We run continuous A/B tests and data-backed experiments to refine the growth engine and unlock hidden revenue.',
    outcome: 'Sustainable, compounded growth over time',
    icon: Search,
    color: 'from-brand-primary/20 to-transparent',
  },
];

const Services: React.FC = () => {
  return (
    <Section id="services" padding="lg" className="bg-[#080808]">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,110,34,0.02)_0%,transparent_100%)] pointer-events-none" />

      <Container>
        <div className="text-center space-y-6 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] font-sans"
          >
            The Growth Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-brand-text-heading font-display tracking-tight"
          >
            Our Growth <span className="text-brand-primary">System.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-secondary max-w-xl mx-auto text-base md:text-lg font-medium font-sans leading-relaxed"
          >
            We don’t offer isolated services. We build complete, end-to-end revenue systems that identifies gaps and fixes leaks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group hover-lift saas-card p-8 md:p-10 rounded-[2rem] flex flex-col h-full overflow-hidden ${step.isFlagship ? 'md:col-span-2' : ''}`}
            >
              {/* Step Counter */}
              <div className="absolute top-8 right-8 text-6xl font-display font-black text-white/[0.01] pointer-events-none group-hover:text-brand-primary/[0.05] transition-colors duration-700">
                0{idx + 1}
              </div>
              
              <div className="relative z-10 space-y-8 flex flex-col h-full text-left">
                <div className="flex items-center justify-between">
                  <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300 transition-all duration-300">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold font-sans text-brand-primary uppercase tracking-[0.2em] bg-brand-primary/5 px-3 py-1 rounded-full border border-brand-primary/10">
                    {step.step}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-brand-text-heading font-display tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-brand-text-secondary/70 text-base leading-relaxed font-sans max-w-lg">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 space-y-3">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em] font-sans">System Outcome</div>
                  <div className="flex items-center gap-3 text-brand-text-heading font-bold text-base font-sans">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    {step.outcome}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative saas-card p-12 md:p-20 rounded-[2rem] flex flex-col justify-center items-center text-center gap-10 overflow-hidden lg:col-span-2 shadow-2xl hover:border-brand-primary/30"
          >
            <div className="absolute inset-0 bg-brand-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-brand-text-heading font-display tracking-tight">
                Ready to fix your <br /> growth system?
              </h3>
              <p className="text-brand-text-secondary/60 max-w-lg mx-auto font-sans font-medium leading-relaxed text-base md:text-lg">
                Get a deep analysis of your entire growth engine and identify exactly where you're losing revenue.
              </p>
            </div>
            <Button to="/contact" size="lg" icon={ArrowRight} className="relative z-10">
              Get Growth Audit
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
