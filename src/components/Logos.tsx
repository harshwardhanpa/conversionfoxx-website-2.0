import React from 'react';
import { motion } from 'motion/react';
import Container from './ui/Container';
import { useResponsiveAnimation } from './utils/useResponsiveAnimation';

const logos = [
  { name: 'Acme Corp', slug: 'acme' },
  { name: 'GlobalTech', slug: 'globaltech' },
  { name: 'Vertex Systems', slug: 'vertex' },
  { name: 'Quantos', slug: 'quantos' },
  { name: 'Streamline', slug: 'streamline' },
  { name: 'Innovate', slug: 'innovate' },
];

const Logos: React.FC = () => {
  const { getTransition, getViewport } = useResponsiveAnimation();

  return (
    <div className="py-12 bg-brand-dark/50 border-y border-white/5 overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-white/50 uppercase tracking-[0.3em] font-sans">
            Trusted by High-Growth Enterprises
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={getViewport({ once: true })}
              transition={getTransition({ delay: idx * 0.1 })}
              className="text-xl font-black text-white/60 font-display tracking-tighter"
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
