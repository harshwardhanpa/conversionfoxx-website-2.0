import React from 'react';
import { motion } from 'motion/react';
import Section from './ui/Section';
import Container from './ui/Container';

const tools = [
  { name: 'HubSpot', icon: '🧡' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'GA4', icon: '📊' },
  { name: 'Google Ads', icon: '🔍' },
  { name: 'Meta Ads', icon: '📱' },
  { name: 'LinkedIn Ads', icon: '💼' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Hotjar', icon: '🔥' },
];

const TechStack: React.FC = () => {
  return (
    <Section id="tech-stack" padding="xl">
      <Container>
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] font-sans"
          >
            Powered by Modern Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display"
          >
            The tools we use to build your future
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
              className="glass p-8 rounded-3xl border-white/5 hover:border-brand-primary/30 transition-all duration-500 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-text-secondary opacity-60 group-hover:text-brand-text-heading group-hover:opacity-100 transition-colors font-display">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TechStack;
