import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Solutions',
    content: 'ConversionFoxx transformed our digital presence. Their data-driven approach to growth is exactly what we needed to scale our SaaS product.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Nexus Retail',
    content: 'The web development team is top-notch. They built a conversion-focused platform that increased our sales by 40% in the first quarter.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Founder, EcoGrowth',
    content: 'Their social media management and paid ads strategy brought us consistent, high-quality leads. A truly strategic growth partner.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange text-sm font-bold uppercase tracking-widest"
          >
            What Our Clients Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Trusted by <span className="text-brand-orange">industry leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-brand-orange" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                
                <p className="text-white/70 leading-relaxed italic group-hover:text-white transition-colors">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-brand-orange">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-brand-orange transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
