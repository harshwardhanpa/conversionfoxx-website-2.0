import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, TrendingUp, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Traffic System',
    description: 'We deploy precision-engineered acquisition systems to capture and dominate high-intent search and social intent.',
    icon: Search,
  },
  {
    title: 'Conversion Architecture',
    description: 'We re-engineer your user journey to eliminate friction and ensure every visitor is funneled toward high-value conversions.',
    icon: PenTool,
  },
  {
    title: 'Revenue Operations',
    description: 'We build the CRM automation and full-funnel tracking needed to turn raw leads into predictable expansion revenue.',
    icon: Rocket,
  },
  {
    title: 'Growth Optimization',
    description: 'Continuous multivariate testing and data analysis that identifies hidden leaks and scales winning growth experiments.',
    icon: TrendingUp,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-[100px] relative overflow-hidden bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] font-sans"
          >
            Engineering Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-brand-text-heading font-display tracking-tight"
          >
            How we engine <br />
            <span className="text-brand-primary">your growth.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-[40%] left-0 right-0 h-px bg-white/5 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative core-card p-10 rounded-2xl transition-all duration-500 text-center hover-lift overflow-hidden"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.02] transition-colors duration-500" />
                
                <div className="relative z-10 space-y-8">
                  <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary inline-flex items-center justify-center mx-auto mb-10 group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-brand-primary/5">
                    <step.icon className="w-8 h-8" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-dark border-2 border-brand-primary/20 rounded-full flex items-center justify-center text-xs font-black text-brand-primary">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-brand-text-heading group-hover:text-brand-primary/90 transition-colors duration-700 font-display tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-text-secondary font-sans text-sm leading-relaxed transition-colors duration-700">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
