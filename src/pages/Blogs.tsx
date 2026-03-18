import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Mail, 
  BookOpen, 
  Lightbulb, 
  Zap, 
  TrendingUp, 
  Layout as LayoutIcon, 
  Settings, 
  Smartphone, 
  Megaphone, 
  Database, 
  Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const categories = [
  'All',
  'Growth Strategy',
  'Social Media',
  'Web Development',
  'App Development',
  'Paid Advertising',
  'CRM & Automation',
  'Business Insights'
];

const blogPosts = [
  {
    slug: 'better-website-structure-improves-lead-quality',
    category: 'Web Development',
    title: 'How a Better Website Structure Improves Lead Quality',
    excerpt: 'A well-structured website doesn’t just look good; it guides users toward conversion. Learn how information architecture impacts your bottom line.',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/web/800/600'
  },
  {
    slug: 'when-businesses-should-invest-in-crm-automation',
    category: 'CRM & Automation',
    title: 'When Businesses Should Invest in CRM Automation',
    excerpt: 'Manual lead management can only take you so far. Discover the signs that your business is ready for automated sales workflows.',
    date: 'Mar 12, 2026',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/crm/800/600'
  },
  {
    slug: 'paid-advertising-mistakes-that-quietly-waste-budget',
    category: 'Paid Advertising',
    title: 'Paid Advertising Mistakes That Quietly Waste Budget',
    excerpt: 'Are your ad campaigns leaking money? We identify the common pitfalls in PPC and how to refine your targeting for better ROI.',
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    image: 'https://picsum.photos/seed/ads/800/600'
  },
  {
    slug: 'social-media-content-consistency-and-effectiveness',
    category: 'Social Media',
    title: 'What Makes Social Media Content More Consistent and Effective',
    excerpt: 'Consistency is the key to social growth. Learn our framework for creating content that resonates and stays on schedule.',
    date: 'Mar 08, 2026',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/social/800/600'
  },
  {
    slug: 'plan-an-app-product-before-development-starts',
    category: 'App Development',
    title: 'How to Plan an App Product Before Development Starts',
    excerpt: 'The most successful apps are built on a foundation of rigorous planning. Here’s our pre-development checklist for founders.',
    date: 'Mar 05, 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/app/800/600'
  },
  {
    slug: 'conversion-focused-design-matters-more-than-visual-trends',
    category: 'Growth Strategy',
    title: 'Why Conversion-Focused Design Matters More Than Visual Trends',
    excerpt: 'Trends fade, but conversion principles are timeless. Explore why we prioritize user action over aesthetic novelties.',
    date: 'Mar 02, 2026',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/design/800/600'
  },
  {
    slug: 'digital-systems-support-long-term-business-growth',
    category: 'Business Insights',
    title: 'How Digital Systems Support Long-Term Business Growth',
    excerpt: 'Scalability isn’t just about more sales; it’s about the systems that handle them. Learn how to build a resilient digital foundation.',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/systems/800/600'
  },
  {
    slug: 'signs-your-business-has-outgrown-manual-lead-management',
    category: 'CRM & Automation',
    title: 'Signs Your Business Has Outgrown Manual Lead Management',
    excerpt: 'If you’re losing leads in spreadsheets, it’s time for a change. We break down the transition from manual to automated tracking.',
    date: 'Feb 25, 2026',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/manual/800/600'
  }
];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="relative z-10">
        {/* 1. BLOGS HERO */}
        <Section className="relative pt-40 pb-24 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  ConversionFoxx Insights
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Insights That Help <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400 text-glow">
                    Businesses Grow
                  </span> Smarter
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                  Explore practical insights from ConversionFoxx on digital growth, marketing performance, websites, applications, CRM systems, and the strategies that help modern businesses move forward.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button to="/contact" size="xl" icon={ArrowRight}>
                    Let's Talk
                  </Button>
                  <Button to="/services" variant="secondary" size="xl">
                    Explore Services
                  </Button>
                </div>
                <p className="text-white/40 text-sm italic">
                  “Built for founders, marketers, and businesses looking for clearer digital direction.”
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <Card padding="lg" className="rounded-[3rem] border-white/10 shadow-2xl" hoverEffect={false}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Growth Strategy</div>
                        <div className="text-xs text-white/40">5 min read</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 translate-x-8">
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <LayoutIcon className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Web Development</div>
                        <div className="text-xs text-white/40">7 min read</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 translate-x-4">
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">CRM & Automation</div>
                        <div className="text-xs text-white/40">4 min read</div>
                      </div>
                    </div>
                  </div>
                </Card>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* 2. FEATURED ARTICLE SECTION */}
        <Section background="subtle">
          <Container>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-2xl font-bold tracking-tight uppercase tracking-widest text-white/40">Featured Insight</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card padding="none" className="rounded-[3rem] border-white/5 overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/featured/1200/800" 
                      alt="Featured Article" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 md:p-16 flex flex-col justify-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-widest text-brand-orange">
                      Growth Strategy
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                      Why Connected Systems Matter More Than Isolated Marketing Tactics
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      Businesses often invest in campaigns, websites, and tools separately, but real growth comes when those systems work together. Here’s how connected execution creates stronger long-term performance.
                    </p>
                    <div className="flex items-center gap-6 text-white/40 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Mar 18, 2026
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        5 min read
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button to="/blogs/scaling-digital-growth-with-connected-systems" size="lg" icon={ArrowRight}>
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Container>
        </Section>

        {/* 3. BLOG CATEGORIES / FILTER BAR & 4. BLOG SEARCH BAR */}
        <Section className="py-12 sticky top-24 z-30">
          <Container>
            <div className="glass p-4 rounded-[2rem] border-white/10 flex flex-col lg:flex-row items-center gap-6 shadow-2xl">
              {/* Categories */}
              <div className="flex-1 w-full overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 min-w-max px-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                        activeCategory === category 
                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="w-full lg:w-96 relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search insights, topics, and ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full glass bg-white/5 border-white/10 rounded-xl pl-14 pr-6 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* 5. BLOG GRID SECTION */}
        <Section className="py-12 pb-24">
          <Container>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
              <div className="text-white/40 text-sm font-bold uppercase tracking-widest">
                Showing {filteredPosts.length} Results
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blogs/${post.slug}`} className="block space-y-6">
                      <div className="aspect-[16/10] glass rounded-[2.5rem] overflow-hidden border-none relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                          {post.category}
                        </div>
                      </div>
                      <div className="space-y-4 px-2">
                        <div className="flex items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-brand-orange font-bold text-sm group-hover:gap-3 transition-all pt-2">
                          Read More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card padding="xl" className="text-center border-white/5">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-white/20" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-white/40">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                  className="mt-8 text-brand-orange font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </Card>
            )}
          </Container>
        </Section>

        {/* 6. EDITORIAL HIGHLIGHTS / TOPICS SECTION */}
        <Section background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Deep Dives</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Explore Popular Themes</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Growth & Conversion',
                  description: 'Strategies focused on turning digital traffic into measurable business revenue.',
                  icon: TrendingUp,
                  links: [
                    { name: 'The Psychology of High-Converting Landing Pages', slug: 'psychology-of-conversion' },
                    { name: 'A/B Testing Frameworks for Modern SaaS', slug: 'ab-testing-frameworks' },
                    { name: 'How to Reduce Churn Through Better Onboarding', slug: 'reduce-churn-onboarding' }
                  ]
                },
                {
                  title: 'Technology & Product Systems',
                  description: 'Insights into building scalable, reliable, and high-performing digital infrastructure.',
                  icon: Settings,
                  links: [
                    { name: 'Why We Choose React for Enterprise Applications', slug: 'why-react-enterprise' },
                    { name: 'The Role of API-First Architecture in Growth', slug: 'api-first-architecture' },
                    { name: 'Securing Your Digital Assets in a Cloud-First World', slug: 'securing-digital-assets' }
                  ]
                },
                {
                  title: 'Marketing Performance & Visibility',
                  description: 'Technical marketing insights that improve reach, relevance, and ROI.',
                  icon: Megaphone,
                  links: [
                    { name: 'Advanced SEO Strategies for 2026', slug: 'advanced-seo-2026' },
                    { name: 'How to Scale Paid Ads Without Losing Efficiency', slug: 'scale-paid-ads' },
                    { name: 'The Impact of Site Speed on Ad Quality Scores', slug: 'site-speed-ad-quality' }
                  ]
                }
              ].map((topic, idx) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card padding="lg" className="h-full hover:border-brand-orange/20 transition-all duration-500 group">
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-all duration-500">
                      <topic.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{topic.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                      {topic.description}
                    </p>
                    <div className="space-y-4">
                      {topic.links.map((link) => (
                        <Link 
                          key={link.slug} 
                          to={`/blogs/${link.slug}`}
                          className="flex items-center justify-between group/link py-3 border-b border-white/5 hover:border-brand-orange/30 transition-colors"
                        >
                          <span className="text-sm font-medium text-white/70 group-hover/link:text-white transition-colors line-clamp-1">
                            {link.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-white/20 group-hover/link:text-brand-orange transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 7. NEWSLETTER / CONTENT CTA SECTION */}
        <Section>
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" className="text-center space-y-8 relative overflow-hidden border-brand-orange/20" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Stay Connected With New Insights</h2>
                  <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Get practical ideas on growth, performance, systems, and digital execution from the ConversionFoxx perspective.
                  </p>
                  
                  <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
                    />
                    <Button type="submit" size="lg">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
                    No spam. Just useful insights.
                  </p>
                </div>
              </Card>
            </motion.div>
          </Container>
        </Section>

        {/* 8. WHY OUR INSIGHTS MATTER SECTION */}
        <Section>
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Editorial Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built Around Real Business Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Practical, Not Theoretical',
                  description: 'We skip the buzzwords and focus on the actual steps required to achieve digital results.',
                  icon: Lightbulb
                },
                {
                  title: 'Built for Growth Decisions',
                  description: 'Our content is designed to help founders and marketers make better strategic choices.',
                  icon: TrendingUp
                },
                {
                  title: 'Informed by Real Execution',
                  description: 'Everything we write is based on the work we do every day for our clients.',
                  icon: Zap
                },
                {
                  title: 'Focused on Clarity and Action',
                  description: 'We aim to leave you with a clear understanding of the next step for your business.',
                  icon: ArrowRight
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card padding="md" className="h-full text-center group">
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange transition-all duration-500">
                      <item.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 9. FINAL CTA SECTION */}
        <Section className="relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" className="text-center space-y-10 relative overflow-hidden border-brand-orange/20" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
                
                <div className="relative z-10 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    Need Help Turning <br />
                    <span className="text-brand-orange">Insight Into Action?</span>
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    If your business needs stronger systems, better execution, or clearer digital direction, ConversionFoxx is ready to help.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Button to="/contact" size="xl" icon={ArrowRight}>
                      Let's Talk
                    </Button>
                    <Button to="/services" variant="secondary" size="xl">
                      Explore Services
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Container>
        </Section>
      </div>
    </Layout>
  );
};

export default Blogs;
