import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Rocket } from 'lucide-react';

const results = [
  {
    metric: '300%',
    label: 'Increase in ROI',
    description: 'Achieved within 60 days for a global e-commerce brand.',
    icon: TrendingUp,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    metric: '5X',
    label: 'Lead Generation',
    description: 'For a SaaS client through data-backed marketing strategies.',
    icon: Users,
    color: 'from-brand-orange/20 to-orange-400/20',
  },
  {
    metric: 'Zero to Scalable',
    label: 'Digital Presence',
    description: 'Built a full digital ecosystem for a startup in under 3 months.',
    icon: Rocket,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange text-sm font-bold uppercase tracking-widest"
          >
            Real Results. Real Growth.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Numbers that <span className="text-brand-orange">speak for themselves</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass p-10 rounded-[3rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                  <result.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {result.metric}
                </div>
                
                <div className="text-xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                  {result.label}
                </div>
                
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
