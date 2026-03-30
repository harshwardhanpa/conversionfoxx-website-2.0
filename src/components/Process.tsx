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
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-sm font-sans font-bold uppercase tracking-widest"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight"
          >
            How we drive results
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-brand-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 text-center"
              >
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-8 h-8 text-brand-primary group-hover:text-brand-dark transition-colors" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark glass rounded-full flex items-center justify-center text-xs font-sans font-bold text-brand-primary border-brand-primary/20">
                      0{idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-brand-text-heading group-hover:text-brand-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-text-secondary font-sans opacity-50 leading-relaxed group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors">
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
