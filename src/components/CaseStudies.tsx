import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';
import Button from './ui/Button';

const cases = [
  {
    category: 'High-Growth Tech',
    title: 'How VertexScale achieved 4.2x Lead Velocity in 6 Months.',
    description: 'We re-engineered their entire conversion architecture and deployed a custom Revenue Operations system to automate lead nurturing.',
    results: ['420% Increase in SQLs', '28% Lower CAC', 'Automated Pipeline Tracking'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    category: 'Enterprise Infrastructure',
    title: 'Transforming Quantos from Manual Sales to a Predictable Engine.',
    description: 'A complete overhaul of their traffic acquisition and CRM integration, resulting in 100% visibility into customer acquisition cost.',
    results: ['3.5x Expansion Revenue', 'Complete Attribution Tracking', '140+ Qualified Demos/month'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
  }
];

const CaseStudies: React.FC = () => {
  return (
    <Section id="case-studies" padding="lg" background="subtle">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-6 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] font-sans"
            >
              Proven Growth Systems
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-brand-text-heading font-display tracking-tight"
            >
              Measurable <span className="text-brand-primary">Business Outcomes.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="secondary" to="/contact" icon={ArrowRight}>
              View All Outcomes
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group core-card overflow-hidden hover-lift flex flex-col h-full"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-white/5">
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/10 text-xs font-bold text-brand-primary uppercase tracking-[0.2em] font-sans">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-6">
                <h3 className="text-2xl font-black text-brand-text-heading font-display tracking-tight group-hover:text-brand-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-brand-text-secondary font-sans leading-relaxed flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 space-y-4">
                  {item.results.map((result) => (
                    <div key={result} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                      <span className="text-sm font-bold text-white tracking-wide font-sans">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CaseStudies;
