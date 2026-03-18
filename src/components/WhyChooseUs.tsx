import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Layers, Rocket, ShieldCheck, BarChart3 } from 'lucide-react';

const reasons = [
  {
    title: 'Results-Driven Approach',
    description: 'We focus on metrics that matter—ROI, conversion rates, and revenue growth.',
    icon: Target,
  },
  {
    title: 'Conversion-Focused Strategy',
    description: 'Every pixel and line of code is optimized to turn visitors into loyal customers.',
    icon: Zap,
  },
  {
    title: 'End-to-End Solutions',
    description: 'From initial discovery to final scaling, we handle the entire growth lifecycle.',
    icon: Layers,
  },
  {
    title: 'Fast Execution',
    description: 'We move at the speed of tech, delivering high-quality results in record time.',
    icon: Rocket,
  },
  {
    title: 'Scalable Systems',
    description: 'We build infrastructures that grow with your business, ensuring long-term stability.',
    icon: ShieldCheck,
  },
  {
    title: 'Data-Backed Decisions',
    description: 'No guesswork. We use advanced analytics to drive every strategic move.',
    icon: BarChart3,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Why ConversionFoxx?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              We bridge the gap between <br />
              <span className="text-brand-orange">technology and growth</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              ConversionFoxx is more than an IT agency. We are your strategic growth partner, dedicated to building digital ecosystems that actually drive results.
            </p>
            
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <div className="w-6 h-6 bg-brand-orange rounded-full" />
                </div>
                <div className="text-lg font-bold">100% Client Satisfaction</div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <div className="w-6 h-6 bg-brand-orange rounded-full" />
                </div>
                <div className="text-lg font-bold">Data-Driven Methodology</div>
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
                className="glass p-6 rounded-3xl hover:bg-white/5 transition-all group"
              >
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors">
                  <reason.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors">{reason.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
