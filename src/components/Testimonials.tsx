import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Solutions',
    content: 'The Growth Audit was a eye-opener. ConversionFoxx identified leaks in our funnel we didn\'t even know existed. Our ROI has doubled since implementing their Revenue Operations System.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Nexus Retail',
    content: 'Unlike traditional agencies, ConversionFoxx focuses on the entire system. Their Lead Generation and Conversion Optimization strategies have created a predictable growth engine for us.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Founder, EcoGrowth',
    content: 'Their analytical approach to growth is refreshing. They don\'t just run ads; they build scalable systems. Our conversion lift has been consistent and significant.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" padding="xl" background="subtle">
      <Container>
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] font-sans"
          >
            What Our Clients Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display"
          >
            Trusted by <span className="brand-gradient-text">industry leaders</span>
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
              className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-brand-primary" />
              </div>
              
              <div className="relative z-10 space-y-6 flex flex-col h-full">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                
                <p className="text-brand-text-secondary opacity-70 leading-[1.6] italic group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors flex-grow font-sans">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-white/10 flex items-center gap-4 shrink-0">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-brand-primary font-display">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-brand-text-heading group-hover:text-brand-primary transition-colors font-display">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-brand-text-secondary opacity-40 uppercase tracking-widest font-sans">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
