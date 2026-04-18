import React from 'react';
import { motion } from 'motion/react';
import { Search, Target, Zap, LayoutDashboard, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import Section from './ui/Section';
import Container from './ui/Container';

const services = [
  {
    title: 'Growth Audit',
    description: 'Identify exactly where your revenue system is leaking — from traffic and tracking to conversion and follow-ups.',
    icon: Search,
    color: 'from-brand-primary/10 to-transparent',
    href: '/services/growth-audit',
  },
  {
    title: 'Lead Generation',
    description: 'Attract high-intent buyers through scalable acquisition systems designed for consistent and qualified lead flow.',
    icon: Target,
    color: 'from-brand-primary/10 to-transparent',
    href: '/services/lead-generation',
  },
  {
    title: 'Conversion Optimization',
    description: 'Turn existing traffic into paying customers by eliminating friction, improving user journeys, and optimizing key conversion points.',
    icon: Zap,
    color: 'from-brand-primary/10 to-transparent',
    href: '/services/conversion-optimization',
  },
  {
    title: 'Revenue Operations System',
    description: 'A fully integrated system that captures, tracks, nurtures, and converts every lead — ensuring no opportunity is lost.',
    icon: LayoutDashboard,
    color: 'from-brand-primary/10 to-transparent',
    isFlagship: true,
    href: '/services/revenue-operations-system',
  },
];

const Services: React.FC = () => {
  return (
    <Section id="services" padding="xl">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <Container>
        <div className="text-center space-y-6 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] font-sans"
          >
            Our Growth Systems
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display"
          >
            We don’t offer isolated services. <br />
            <span className="text-brand-text-secondary opacity-40">We build complete revenue systems.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-secondary max-w-2xl mx-auto text-lg font-sans"
          >
            We build complete revenue systems that identify gaps, fix leaks, and drive predictable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative glass p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col h-full ${service.isFlagship ? 'lg:col-span-2 border-brand-primary/20' : ''}`}
            >
              <Link to={service.href} className="absolute inset-0 z-20" />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8 h-full">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500 shrink-0">
                  <service.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-dark transition-colors" />
                </div>
                
                <div className="flex-1 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors font-display">
                      {service.title}
                    </h3>
                    {service.isFlagship && (
                      <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded-full font-sans">
                        Flagship System
                      </span>
                    )}
                  </div>
                  
                  <p className="text-brand-text-secondary opacity-50 leading-[1.6] mb-8 group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors max-w-2xl font-sans">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all font-sans">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative bg-brand-dark-alt p-10 md:p-16 rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-8 overflow-hidden lg:col-span-2 border border-brand-primary/20"
          >
            <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-text-heading font-display">
                Ready to fix your <br /> growth system?
              </h3>
              <p className="text-brand-text-secondary max-w-lg mx-auto font-sans leading-[1.6]">
                Get a deep analysis of your entire growth system and identify exactly where you're losing revenue.
              </p>
            </div>
            <Button to="/contact" variant="primary" className="relative z-10" size="lg" icon={ArrowRight}>
              Get Free Growth Audit
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
