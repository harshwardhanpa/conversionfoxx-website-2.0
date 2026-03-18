import React from 'react';
import { motion } from 'motion/react';

const tools = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Google Ads', icon: '🔍' },
  { name: 'Meta Ads', icon: '📱' },
  { name: 'CRM Tools', icon: '📊' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind', icon: '🌊' },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange text-sm font-bold uppercase tracking-widest"
          >
            Powered by Modern Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            The tools we use to <span className="text-brand-orange">build your future</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-brand-orange/30 transition-all duration-500 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {tool.icon}
              </div>
              <div className="text-lg font-bold text-white/60 group-hover:text-white transition-colors">
                {tool.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
