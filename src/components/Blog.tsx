import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';
import Container from './ui/Container';

import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const Blog: React.FC = () => {
  const blogs = blogPosts.slice(1, 4); // Use some posts for the home page

  return (
    <Section id="blogs" padding="xl" background="subtle">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary text-sm font-bold uppercase tracking-[0.2em] font-sans"
            >
              Insights & Resources
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display"
            >
              Latest from our blog
            </motion.h2>
          </div>
          <Button 
            to="/blogs"
            variant="ghost"
            className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all font-sans"
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
                <div className="aspect-[16/10] glass rounded-[2.5rem] mb-6 overflow-hidden border-none relative shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-white font-sans">
                    {blog.category}
                  </div>
                </div>
                <div className="space-y-4 px-2 flex flex-col h-full">
                  <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors leading-tight text-brand-text-heading font-display">
                    {blog.title}
                  </h3>
                  <p className="text-brand-text-secondary opacity-40 text-sm leading-[1.6] line-clamp-2 group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors flex-grow font-sans">
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
