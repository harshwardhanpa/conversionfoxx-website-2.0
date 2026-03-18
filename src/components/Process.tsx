import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, TrendingUp, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Discover & Strategy',
    description: 'We dive deep into your business goals, target audience, and market landscape to build a roadmap.',
    icon: Search,
  },
  {
    title: 'Build & Execute',
    description: 'Our expert team brings the strategy to life with high-performance tech and creative execution.',
    icon: PenTool,
  },
  {
    title: 'Optimize & Improve',
    description: 'We continuously monitor performance and refine every element for maximum conversion and ROI.',
    icon: TrendingUp,
  },
  {
    title: 'Scale & Grow',
    description: 'With a solid foundation, we scale your digital presence to reach new heights and dominate your market.',
    icon: Rocket,
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
            className="text-brand-orange text-sm font-bold uppercase tracking-widest"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            How we <span className="text-brand-orange">drive results</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 text-center"
              >
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark glass rounded-full flex items-center justify-center text-xs font-bold text-brand-orange border-brand-orange/20">
                      0{idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
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
