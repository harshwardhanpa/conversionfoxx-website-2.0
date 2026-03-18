import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'The Future of Digital Transformation in 2026',
    preview: 'Exploring how AI and cloud computing are reshaping the IT landscape for modern enterprises.',
    category: 'Technology',
    image: 'https://picsum.photos/seed/tech/800/600',
  },
  {
    title: '5 Growth Strategies for SaaS Startups',
    preview: 'How to leverage data-driven marketing to scale your SaaS product faster and more efficiently.',
    category: 'Growth',
    image: 'https://picsum.photos/seed/growth/800/600',
  },
  {
    title: 'Why Conversion-Focused Design Matters',
    preview: 'The psychology behind high-converting websites and how to apply it to your digital products.',
    category: 'Design',
    image: 'https://picsum.photos/seed/design/800/600',
  },
];

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
              className="text-brand-orange text-sm font-bold uppercase tracking-widest"
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
              Latest from <span className="text-brand-orange">our blog</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="text-brand-orange font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight className="w-5 h-5" />
          </motion.button>
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
                <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors">
                  {blog.preview}
                </p>
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm group-hover:gap-3 transition-all">
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
