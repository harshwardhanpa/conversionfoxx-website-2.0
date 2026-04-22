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
    <Section id="tech-stack" padding="lg" background="subtle">
      <Container>
        <div className="text-center space-y-6 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] font-sans"
          >
            Integrated Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text-heading max-w-4xl mx-auto font-display"
          >
            The tech stack behind your <br />
            <span className="text-brand-primary">revenue engine.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="saas-border p-10 rounded-3xl group text-center"
            >
              <div className="text-5xl mb-6 relative z-10 filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                {tool.icon}
              </div>
              <h3 className="text-sm font-black text-white/30 uppercase tracking-[0.2em] group-hover:text-brand-primary transition-colors duration-700 font-sans">
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
