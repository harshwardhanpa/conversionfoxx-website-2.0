import React from 'react';
import { motion } from 'motion/react';
import { Search, Target, Zap, LayoutDashboard, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const services = [
  {
    title: 'Growth Audit',
    description: 'Deep analysis of your entire growth system to identify funnel gaps, tracking issues, and conversion leaks.',
    icon: Search,
    color: 'from-brand-primary/10 to-transparent',
    href: '/services/growth-audit',
  },
  {
    title: 'Lead Generation',
    description: 'Build scalable traffic systems through paid ads, creative strategy, and funnel entry optimization.',
    icon: Target,
    color: 'from-brand-primary/10 to-transparent',
    href: '/services/lead-generation',
  },
  {
    title: 'Conversion Optimization',
    description: 'Turn traffic into revenue with landing page optimization, A/B testing, and data-driven CRO strategy.',
    icon: Zap,
    color: 'from-brand-primary/10 to-transparent',
    href: '/services/conversion-optimization',
  },
  {
    title: 'Revenue Operations System',
    description: 'The core system that ties everything together: CRM setup, automation, and full revenue visibility.',
    icon: LayoutDashboard,
    color: 'from-brand-primary/10 to-transparent',
    isFlagship: true,
    href: '/services/revenue-operations-system',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-sm font-bold uppercase tracking-widest"
          >
            Our Growth Systems
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Predictable growth through <br />
            <span className="text-brand-text-secondary opacity-40">systematic optimization</span>
          </motion.h2>
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
              className={`group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 ${service.isFlagship ? 'lg:col-span-2 border-brand-primary/20' : ''}`}
            >
              <Link to={service.href} className="absolute inset-0 z-20" />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500 shrink-0">
                  <service.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-dark transition-colors" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    {service.isFlagship && (
                      <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                        Flagship System
                      </span>
                    )}
                  </div>
                  
                  <p className="text-brand-text-secondary opacity-50 leading-relaxed mb-6 group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors max-w-2xl">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:gap-3 transition-all">
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
            className="group relative bg-brand-dark-alt p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-6 overflow-hidden lg:col-span-2 border border-brand-primary/20"
          >
            <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-3xl font-bold text-brand-text-heading relative z-10">
              Ready to fix your <br /> growth system?
            </h3>
            <p className="text-brand-text-secondary relative z-10 max-w-lg">
              Get a deep analysis of your entire growth system and identify exactly where you're losing revenue.
            </p>
            <Button to="/contact" variant="primary" className="relative z-10" icon={ArrowRight}>
              Get Free Growth Audit
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
