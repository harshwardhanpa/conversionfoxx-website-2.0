import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, TrendingUp, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Growth Audit',
    description: 'We perform a deep analysis of your current growth system to identify leaks and inefficiencies.',
    icon: Search,
  },
  {
    title: 'System Architecture',
    description: 'We design a custom Revenue Operations System to tie your marketing and sales together.',
    icon: PenTool,
  },
  {
    title: 'Execution & Launch',
    description: 'We build your traffic systems and funnels, launching data-backed lead generation campaigns.',
    icon: Rocket,
  },
  {
    title: 'Continuous Optimization',
    description: 'We use real-time data to optimize every part of the system for maximum revenue output.',
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
            className="px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] font-sans"
          >
            Engineering Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text-heading font-display"
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative saas-border p-10 rounded-[3.5rem] transition-all duration-700 text-center"
              >
                <div className="relative z-10 space-y-8">
                  <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-700 shadow-xl shadow-brand-primary/10">
                    <step.icon className="w-10 h-10 text-brand-primary group-hover:text-brand-dark transition-colors duration-700" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-dark border-2 border-brand-primary/20 rounded-full flex items-center justify-center text-xs font-black text-brand-primary">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-brand-text-heading group-hover:text-brand-primary transition-colors duration-700 font-display">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-text-secondary/60 font-sans text-sm leading-relaxed group-hover:text-brand-text-secondary transition-colors duration-700">
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
