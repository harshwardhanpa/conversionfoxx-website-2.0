import React, { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'motion/react';
import { Star } from 'lucide-react';
import Section from './ui/Section';
import Container from './ui/Container';

// ✨ REFERENCES:
// - Motion Primitives parallax effects
// - Dribbble liquid glass testimonials
// - Apple design - Subtle layering and depth
// - Framer scroll-linked animations

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'VertexScale',
    content: 'ConversionFoxx transformed our entire approach to growth. In 6 months, we went from scattered efforts to a predictable, data-driven machine. Their Revenue Operations system is a game-changer.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 2,
    author: 'Marcus Rodriguez',
    role: 'VP of Growth',
    company: 'Quantos',
    content: 'The level of strategic thinking combined with execution excellence is unmatched. They don\'t just implement solutions—they build systems that compound over time. Our revenue attribution is finally clear.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 3,
    author: 'Priya Kapoor',
    role: 'Head of Product',
    company: 'GrowthVentures',
    content: 'What impressed me most was their ability to align technical implementation with business strategy. The dashboard they built gives us real-time visibility into every metric that matters. Highly recommended.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 4,
    author: 'James Williams',
    role: 'Founder',
    company: 'ScaleUp Labs',
    content: 'From day one, they understood our vision and delivered beyond expectations. Their holistic approach to growth—combining web dev, marketing, and operations—is exactly what we needed.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
  },
];

const TestimonialCard = ({
  testimonial,
  index,
  isActive,
}: {
  testimonial: Testimonial;
  index: number;
  isActive: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        damping: 15,
      }}
      animate={{
        scale: isActive ? 1.02 : 1,
        borderColor: isActive ? 'rgba(242, 125, 38, 0.4)' : 'rgba(255, 255, 255, 0.08)',
      }}
      transition={{ type: 'spring', damping: 12 }}
      className="group p-8 rounded-2xl border bg-gradient-to-br from-white/5 via-white/[0.02] to-white/[0.01] backdrop-blur-2xl hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 cursor-pointer"
    >
      {/* ANIMATED GRADIENT BORDER */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent" />

      {/* BACKGROUND ACCENT */}
      <motion.div
        animate={{
          opacity: isActive ? 0.1 : 0.05,
        }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary rounded-full blur-2xl pointer-events-none"
      />

      <div className="relative z-10">
        {/* STAR RATING - Animated reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          className="flex gap-1 mb-6"
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                damping: 10,
                delay: index * 0.1 + 0.3 + i * 0.05,
              }}
            >
              <Star className="w-5 h-5 fill-brand-primary text-brand-primary" />
            </motion.div>
          ))}
        </motion.div>

        {/* TESTIMONIAL TEXT - Smooth reveal */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1 + 0.1,
            duration: 0.6,
          }}
          className="text-lg text-brand-text-secondary font-medium leading-relaxed mb-8 italic"
        >
          "{testimonial.content}"
        </motion.p>

        {/* AUTHOR INFO - Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1 + 0.2,
            duration: 0.6,
          }}
          className="flex items-center gap-4 pt-6 border-t border-white/5"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={testimonial.image}
            alt={testimonial.author}
            loading="lazy"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-primary/20"
          />
          <div>
            <div className="font-bold text-brand-text-heading">{testimonial.author}</div>
            <div className="text-sm text-brand-text-secondary">
              {testimonial.role} at <span className="text-brand-primary font-medium">{testimonial.company}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="testimonials" padding="lg" background="subtle">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/8 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 glass"
          >
            ⭐ Trusted by Industry Leaders
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-brand-text-heading font-display mb-6 leading-tight"
          >
            What Our <span className="text-brand-primary">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-secondary font-medium"
          >
            Real results from companies that trusted us with their growth
          </motion.p>
        </motion.div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={idx}
              isActive={activeIndex === idx}
            />
          ))}
        </div>

        {/* STATS BAR - Glassmorphism style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5"
        >
          {[
            { number: '150+', label: 'Happy Clients' },
            { number: '4.9/5', label: 'Avg Rating' },
            { number: '98%', label: 'Recommendation Rate' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: 0.4 + idx * 0.1,
              }}
              className="p-6 rounded-xl border border-brand-primary/10 bg-white/[0.02] backdrop-blur-lg text-center"
            >
              <div className="text-3xl font-black text-brand-primary font-display mb-2">{stat.number}</div>
              <div className="text-sm text-brand-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Testimonials;
