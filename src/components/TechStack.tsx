import React from 'react';
import { motion } from 'motion/react';
import { Cloud, BarChart3, Search, Globe, Briefcase, Zap, Database, MousePointer2 } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';

const tools = [
  { name: 'HubSpot', icon: Database },
  { name: 'Salesforce', icon: Cloud },
  { name: 'GA4', icon: BarChart3 },
  { name: 'Google Ads', icon: Search },
  { name: 'Meta Ads', icon: Globe },
  { name: 'LinkedIn Ads', icon: Briefcase },
  { name: 'Zapier', icon: Zap },
  { name: 'Hotjar', icon: MousePointer2 },
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
              className="saas-card p-10 rounded-2xl group text-center hover-lift liquid-glass"
            >
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary inline-flex items-center justify-center mb-6 w-fit mx-auto group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-500 shadow-xl shadow-brand-primary/10 glass">
                <tool.icon className="w-6 h-6" />
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
