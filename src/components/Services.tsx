import React from 'react';
import { motion } from 'motion/react';
import { Share2, Code, Smartphone, Megaphone, Database, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and community management to build brand authority and engagement.',
    icon: Share2,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Web Development',
    description: 'High-performance, conversion-focused websites built with modern tech stacks like React and Next.js.',
    icon: Code,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
    icon: Smartphone,
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Paid Advertising',
    description: 'Data-driven Meta and Google Ads campaigns optimized for maximum ROI and lead generation.',
    icon: Megaphone,
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    title: 'CRM Solutions',
    description: 'Custom CRM implementations and automation to streamline your sales and customer management.',
    icon: Database,
    color: 'from-violet-500/20 to-purple-500/20',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange text-sm font-bold uppercase tracking-widest"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Complete growth and technology <br />
            <span className="text-white/40">solutions under one roof</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed mb-8 group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-brand-orange group-hover:gap-3 transition-all">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group relative bg-brand-orange p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-3xl font-bold text-white relative z-10">
              Need a custom <br /> solution?
            </h3>
            <p className="text-white/80 relative z-10">
              Let's discuss your unique business challenges.
            </p>
            <button className="bg-white text-brand-orange px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform relative z-10">
              Get a Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
