import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';
import Container from './ui/Container';

import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const Blog: React.FC = () => {
  const blogs = blogPosts.slice(0, 3); // Use the latest 3 posts for the home page

  return (
    <Section id="blogs" padding="lg" background="subtle">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] font-sans"
            >
              Insights & Resources
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-brand-text-heading font-display tracking-tight leading-[1.1]"
            >
              Latest from our <span className="text-brand-primary">blog.</span>
            </motion.h2>
          </div>
          <Button 
            to="/blogs"
            variant="ghost"
            className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all font-sans text-sm uppercase tracking-widest"
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
              className="group"
            >
              <Link to={`/blogs/${blog.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] bg-white/5 rounded-2xl mb-6 overflow-hidden border border-white/5 relative shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-white font-sans">
                    {blog.category}
                  </div>
                </div>
                <div className="space-y-4 px-2 flex flex-col h-full">
                  <h3 className="text-xl md:text-2xl font-black text-brand-text-heading font-display tracking-tight leading-tight group-hover:text-brand-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm leading-[1.6] line-clamp-3 transition-colors flex-grow font-sans mt-2 opacity-80 group-hover:opacity-100">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-sm group-hover:gap-3 transition-all shrink-0 font-sans">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
