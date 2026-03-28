import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'Why Most Businesses Fail at Scaling Ads',
    preview: 'Scaling isn’t just about increasing budget. It’s about creative strategy and funnel entry optimization.',
    category: 'Lead Gen',
    image: 'https://picsum.photos/seed/ads/800/600',
  },
  {
    title: 'The Real Reason Your Funnel Isn’t Converting',
    preview: 'Stop blaming the traffic. Discover the conversion leaks that are draining your revenue every single day.',
    category: 'CRO',
    image: 'https://picsum.photos/seed/funnel/800/600',
  },
  {
    title: 'From Leads to Revenue: Building a Growth System',
    preview: 'Why a fragmented marketing approach fails and how a unified Revenue Operations System changes everything.',
    category: 'Systems',
    image: 'https://picsum.photos/seed/revenue/800/600',
  },
];

import Button from './ui/Button';

const Blog: React.FC = () => {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary text-sm font-bold uppercase tracking-widest"
            >
              Insights & Resources
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Latest from our blog
            </motion.h2>
          </div>
          <Button 
            to="/blogs"
            variant="ghost"
            className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] glass rounded-[2.5rem] mb-6 overflow-hidden border-none relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-white">
                  {blog.category}
                </div>
              </div>
              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors leading-tight text-brand-text-heading">
                  {blog.title}
                </h3>
                <p className="text-brand-text-secondary opacity-40 text-sm leading-relaxed line-clamp-2 group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors">
                  {blog.preview}
                </p>
                <div className="flex items-center gap-2 text-brand-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
