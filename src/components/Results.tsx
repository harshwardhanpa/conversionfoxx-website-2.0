import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Rocket } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';

const results = [
  {
    metric: '320%',
    label: 'Revenue Growth',
    description: 'Average revenue increase for clients after implementing our Revenue Operations System.',
    icon: TrendingUp,
    color: 'from-brand-primary/20 to-brand-primary/10',
  },
  {
    metric: '4.5X',
    label: 'Lead Quality',
    description: 'Increase in qualified lead volume through systematic funnel entry optimization.',
    icon: Users,
    color: 'from-brand-primary/20 to-brand-primary/10',
  },
  {
    metric: '28%',
    label: 'Conversion Lift',
    description: 'Average conversion rate improvement following our comprehensive Growth Audit.',
    icon: Rocket,
    color: 'from-brand-primary/20 to-brand-primary/10',
  },
];

const Results: React.FC = () => {
  return (
    <Section id="results" padding="xl">
      <Container>
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] font-sans"
          >
            Real Results. Real Growth.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display"
          >
            Numbers that speak for themselves
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
              className="group relative glass p-10 rounded-[3rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 text-center flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
              
              <div className="relative z-10 space-y-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500 shrink-0">
                  <result.icon className="w-8 h-8 text-brand-primary group-hover:text-brand-dark transition-colors" />
                </div>
                
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white group-hover:text-brand-primary transition-colors font-display">
                  {result.metric}
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-brand-text-heading group-hover:text-white transition-colors font-display">
                  {result.label}
                </h3>
                
                <p className="text-brand-text-secondary opacity-50 leading-[1.6] group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors font-sans">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Results;
