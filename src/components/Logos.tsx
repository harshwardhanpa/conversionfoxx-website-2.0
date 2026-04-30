import React from 'react';
import { motion } from 'motion/react';
import Container from './ui/Container';

const logos = [
  { name: 'Acme Corp', slug: 'acme' },
  { name: 'GlobalTech', slug: 'globaltech' },
  { name: 'Vertex Systems', slug: 'vertex' },
  { name: 'Quantos', slug: 'quantos' },
  { name: 'Streamline', slug: 'streamline' },
  { name: 'Innovate', slug: 'innovate' },
];

const Logos: React.FC = () => {
  return (
    <div className="py-12 bg-brand-dark/50 border-y border-white/5 overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] font-sans">
            Trusted by High-Growth Enterprises
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-xl font-black text-white/40 font-display tracking-tighter"
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Logos;
