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
    <Section id="results" padding="lg">
      <Container>
        <div className="text-center space-y-6 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] font-sans"
          >
            Validated Growth Performance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-brand-text-heading font-display max-w-4xl mx-auto tracking-tight"
          >
            Systems that power <br />
            <span className="text-brand-primary">hyper-scale growth.</span>
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
              className="group relative saas-card p-10 rounded-2xl border-white/5 hover:border-brand-primary/30 transition-all duration-500 text-center flex flex-col h-full hover-lift liquid-glass"
            >
              <div className="absolute inset-0 brand-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-2xl" />
              
              <div className="relative z-10 space-y-6 flex flex-col h-full">
                <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-500 mb-4 mx-auto w-fit shadow-xl shadow-brand-primary/10">
                  <result.icon className="w-8 h-8" />
                </div>
                
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white group-hover:brand-gradient-text transition-all duration-700 font-display tracking-tighter">
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
