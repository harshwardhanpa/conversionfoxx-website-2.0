import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Layout as LayoutIcon, 
  Settings, 
  Smartphone, 
  Megaphone, 
  Database,
  Quote,
  Users
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import Button from '../components/ui/Button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, we'd fetch data based on slug. 
  // For this demo, we'll assume the slug is 'scaling-digital-growth-with-connected-systems'
  // or any other placeholder.

  const relatedArticles = [
    {
      slug: 'how-a-better-website-structure-improves-lead-quality',
      category: 'Web Development',
      title: 'How a Better Website Structure Improves Lead Quality',
      excerpt: 'A well-structured website doesn’t just look good; it guides users toward conversion. Learn how information architecture impacts your bottom line.',
      image: 'https://picsum.photos/seed/web/800/600'
    },
    {
      slug: 'when-businesses-should-invest-in-crm-automation',
      category: 'CRM & Automation',
      title: 'When Businesses Should Invest in CRM Automation',
      excerpt: 'Manual lead management can only take you so far. Discover the signs that your business is ready for automated sales workflows.',
      image: 'https://picsum.photos/seed/crm/800/600'
    },
    {
      slug: 'paid-advertising-mistakes-that-quietly-waste-budget',
      category: 'Paid Advertising',
      title: 'Paid Advertising Mistakes That Quietly Waste Budget',
      excerpt: 'Are your ad campaigns leaking money? We identify the common pitfalls in PPC and how to refine your targeting for better ROI.',
      image: 'https://picsum.photos/seed/ads/800/600'
    }
  ];

  return (
    <>
      <div className="relative z-10">
        {/* 1. BLOG POST HERO */}
        <section className="relative pt-40 pb-16 px-4 md:px-8 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-text-secondary/40 mb-12">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blogs" className="hover:text-brand-primary transition-colors">Blogs</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-text-secondary/60 truncate">Why Connected Systems Matter More Than Isolated Marketing Tactics</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 glass border-brand-primary/20 text-brand-primary text-[10px] font-sans font-semibold uppercase tracking-[0.2em] rounded-full">
                  Growth Strategy
                </div>
                <Link to="/blogs" className="flex items-center gap-2 text-brand-text-secondary/50 hover:text-brand-primary text-[10px] font-sans font-semibold uppercase tracking-[0.2em] transition-colors group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blogs
                </Link>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.1] text-brand-text-heading">
                Why Connected Systems Matter More Than Isolated Marketing Tactics
              </h1>

              <p className="text-xl md:text-2xl text-brand-text-secondary font-sans font-normal leading-[1.6]">
                Businesses often invest in websites, campaigns, tools, and workflows separately. But when those systems are disconnected, growth becomes harder to sustain. Here’s why connected execution creates stronger long-term performance.
              </p>

              <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] text-brand-text-secondary/50 font-sans font-semibold uppercase tracking-[0.2em]">Author</div>
                      <div className="text-sm font-sans font-semibold text-brand-text-heading">ConversionFoxx Team</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-brand-text-secondary/40" />
                    </div>
                    <div>
                      <div className="text-[10px] text-brand-text-secondary/50 font-sans font-semibold uppercase tracking-[0.2em]">Date</div>
                      <div className="text-sm font-sans font-semibold text-brand-text-heading">Mar 18, 2026</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-brand-text-secondary/40" />
                    </div>
                    <div>
                      <div className="text-[10px] text-brand-text-secondary/50 font-sans font-semibold uppercase tracking-[0.2em]">Read Time</div>
                      <div className="text-sm font-sans font-semibold text-brand-text-heading">5 min read</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-brand-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-brand-primary transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. FEATURED ARTICLE VISUAL OR HIGHLIGHT PANEL */}
        <section className="pb-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[3rem] border-brand-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-brand-primary/20 rounded-[2rem] flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-all duration-500">
                  <Zap className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold leading-tight text-brand-text-heading">
                    Growth improves when your website, ads, content, CRM, and customer journey work as one connected system — not as isolated tasks.
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. ARTICLE CONTENT SECTION */}
        <section className="pb-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-orange max-w-none">
              <div className="space-y-12 text-brand-text-secondary font-sans leading-[1.6] text-lg font-normal">
                <section className="space-y-6">
                  <p>
                    In the modern digital landscape, businesses are often overwhelmed by the sheer number of platforms and tools available. It’s common to see a company investing heavily in a beautiful website, running aggressive ad campaigns on social media, and implementing a complex CRM system—all as separate, siloed initiatives.
                  </p>
                  <p>
                    While each of these efforts may have individual merit, their true power is unlocked only when they are integrated into a cohesive ecosystem. When these systems are disconnected, the result is often a fragmented customer experience, inefficient data handling, and lost momentum that makes sustainable growth significantly harder to achieve.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-semibold text-brand-text-heading tracking-tight">Section 1: Why Isolated Execution Creates Friction</h2>
                  <p>
                    Isolated execution is the "silent killer" of digital performance. When marketing and technology teams work in silos, several critical points of friction emerge:
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      </div>
                      <span className="font-sans"><strong className="text-brand-text-heading font-semibold">Fragmented Messaging:</strong> Users see one message in an ad, but find a different tone or offer on the landing page, leading to immediate distrust.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      </div>
                      <span className="font-sans"><strong className="text-brand-text-heading font-semibold">Disconnected Lead Handling:</strong> A lead fills out a form, but because the website doesn't talk to the CRM, the sales team doesn't see it for 24 hours. By then, the lead has moved on.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      </div>
                      <span className="font-sans"><strong className="text-brand-text-heading font-semibold">Inconsistent User Experience:</strong> The transition from a social media post to a mobile app or a checkout page feels jarring rather than seamless.</span>
                    </li>
                  </ul>
                  <p>
                    Ultimately, these gaps create a weak handoff between marketing (the promise) and operations (the delivery), resulting in a lower return on investment for every dollar spent.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-semibold text-brand-text-heading tracking-tight">Section 2: What Connected Systems Actually Look Like</h2>
                  <p>
                    A connected digital ecosystem is one where data and user intent flow freely between platforms. Instead of a series of stops, the customer journey becomes a continuous stream.
                  </p>
                  <div className="glass p-8 rounded-3xl border-white/5 my-8">
                    <p className="italic text-brand-text-secondary font-sans font-normal leading-[1.7] mb-0">
                      "Imagine a scenario where a targeted ad leads a user to a highly focused landing page. The data from that interaction is immediately pushed to a CRM, which triggers a personalized follow-up email based on the specific service the user showed interest in. Simultaneously, your analytics dashboard shows exactly which ad creative led to that specific revenue."
                    </p>
                  </div>
                  <p>
                    This level of connectivity ensures that every touchpoint informs the next. Insights from your CRM inform your future ad targeting, and your website's performance data guides your content strategy. The system learns and optimizes as a single unit.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-semibold text-brand-text-heading tracking-tight">Section 3: The Business Impact of Better Connection</h2>
                  <p>
                    The transition from isolated to connected systems isn't just a technical upgrade; it's a strategic business move with measurable impacts:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="font-display font-semibold text-brand-primary">Better Efficiency</div>
                      <p className="text-sm font-sans leading-relaxed">Automated handoffs reduce manual data entry and human error, allowing your team to focus on high-value tasks.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-display font-semibold text-brand-primary">Stronger Data Visibility</div>
                      <p className="text-sm font-sans leading-relaxed">When systems are linked, you get a "single source of truth" for your business performance across the entire funnel.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-display font-semibold text-brand-primary">Improved Conversion</div>
                      <p className="text-sm font-sans leading-relaxed">A seamless journey reduces drop-off rates and makes it easier for customers to say 'yes' at every stage.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-display font-semibold text-brand-primary">Scalable Growth</div>
                      <p className="text-sm font-sans leading-relaxed">Systems that work together can handle increased volume without breaking, providing a foundation for long-term expansion.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-semibold text-brand-text-heading tracking-tight">Section 4: Common Signs a Business Needs Better System Alignment</h2>
                  <p>
                    How do you know if your systems are disconnected? Look for these practical "red flags" in your daily operations:
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-brand-primary" />
                      </div>
                      <p className="text-sm font-sans mb-0 leading-relaxed">Leads are coming in from your website or ads, but follow-up is inconsistent or slow because the data isn't reaching the right people.</p>
                    </li>
                    <li className="flex items-start gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-brand-primary" />
                      </div>
                      <p className="text-sm font-sans mb-0 leading-relaxed">You have healthy website traffic, but your conversion rate is weak because the content doesn't align with the user's entry point.</p>
                    </li>
                    <li className="flex items-start gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-4 h-4 text-brand-primary" />
                      </div>
                      <p className="text-sm font-sans mb-0 leading-relaxed">Your teams are using multiple tools (Email, CRM, Project Management) that do not talk to each other, leading to duplicate work.</p>
                    </li>
                    <li className="flex items-start gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Megaphone className="w-4 h-4 text-brand-primary" />
                      </div>
                      <p className="text-sm font-sans mb-0 leading-relaxed">You are running ad campaigns but have no clear visibility into which specific ads are actually resulting in closed deals.</p>
                    </li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-semibold text-brand-text-heading tracking-tight">Section 5: Where to Start</h2>
                  <p>
                    Building a connected ecosystem doesn't have to happen overnight. We recommend a practical starting framework to avoid overwhelm:
                  </p>
                  <ol className="space-y-6 list-none pl-0">
                    <li className="flex gap-6">
                      <div className="text-4xl font-display font-black text-brand-text-heading opacity-10 flex-shrink-0">01</div>
                      <div>
                        <div className="font-display font-semibold text-brand-text-heading mb-1">Audit Current Systems</div>
                        <p className="text-sm font-sans leading-relaxed">Map out every tool you use and how data currently moves (or doesn't move) between them.</p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <div className="text-4xl font-display font-black text-brand-text-heading opacity-10 flex-shrink-0">02</div>
                      <div>
                        <div className="font-display font-semibold text-brand-text-heading mb-1">Identify Disconnect Points</div>
                        <p className="text-sm font-sans leading-relaxed">Find the biggest gaps where leads are lost or where manual work is slowing you down.</p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <div className="text-4xl font-display font-black text-brand-text-heading opacity-10 flex-shrink-0">03</div>
                      <div>
                        <div className="font-display font-semibold text-brand-text-heading mb-1">Improve One Journey at a Time</div>
                        <p className="text-sm font-sans leading-relaxed">Don't try to fix everything at once. Pick your most important customer journey and connect those dots first.</p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <div className="text-4xl font-display font-black text-brand-text-heading opacity-10 flex-shrink-0">04</div>
                      <div>
                        <div className="font-display font-semibold text-brand-text-heading mb-1">Prioritize Clarity Before Complexity</div>
                        <p className="text-sm font-sans leading-relaxed">A simple, well-connected system is always more effective than a complex, broken one.</p>
                      </div>
                    </li>
                  </ol>
                </section>

                <section className="space-y-6 pt-8 border-t border-white/5">
                  <h2 className="text-3xl font-display font-semibold text-brand-text-heading tracking-tight">Conclusion</h2>
                  <p>
                    In a world of fragmented digital noise, the businesses that win are those that provide the most seamless, connected experience. By moving away from isolated marketing tactics and toward a connected system of growth, you create a more resilient foundation for your brand.
                  </p>
                  <p>
                    At ConversionFoxx, we believe that technology should serve your growth, not complicate it. When your systems work as one, your business moves with a level of clarity and speed that isolated tactics can never match.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </section>

        {/* 4. KEY TAKEAWAYS SECTION */}
        <section className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-brand-text-heading">Key Takeaways</h2>
              <p className="text-brand-text-secondary font-sans font-normal leading-[1.6]">A quick summary of the core insights from this article.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Connected systems create smoother customer journeys',
                  description: 'Reducing friction at every touchpoint leads to higher trust and better conversion rates.'
                },
                {
                  title: 'Better tool alignment improves operational clarity',
                  description: 'When your tools talk to each other, your team spends less time on data and more time on strategy.'
                },
                {
                  title: 'Unlock more value from existing traffic',
                  description: 'Stronger follow-up systems ensure that no lead is left behind, maximizing your current marketing spend.'
                },
                {
                  title: 'Marketing and systems must work together',
                  description: 'Growth is a team sport. Your technical infrastructure must support your marketing promises.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl border-white/5 flex gap-6 group hover:border-brand-primary/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-semibold mb-2 text-brand-text-heading">{item.title}</h4>
                    <p className="text-brand-text-secondary font-sans text-sm leading-[1.6]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. INLINE CTA / SERVICE RELEVANCE SECTION */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[3rem] border-brand-primary/20 text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-text-heading">Need Help Building Better Connected Systems?</h2>
              <p className="text-brand-text-secondary font-sans text-lg max-w-2xl mx-auto font-normal leading-[1.6]">
                ConversionFoxx helps businesses improve the connection between digital presence, lead flow, customer management, and performance execution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Button to="/contact" size="lg" icon={ArrowRight} className="font-sans font-bold">
                  Let's Talk
                </Button>
                <Button to="/services" variant="secondary" size="lg" className="font-sans font-bold">
                  Explore Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. AUTHOR OR PUBLISHER NOTE SECTION */}
        <section className="pb-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="glass p-8 rounded-3xl border-white/5 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-brand-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Quote className="w-10 h-10 text-brand-primary" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-xl font-display font-semibold text-brand-text-heading">About ConversionFoxx Insights</h4>
                <p className="text-brand-text-secondary/60 font-sans text-sm leading-[1.6]">
                  Our articles are built around practical business questions in growth, technology, performance, and digital systems. We write to help modern businesses make clearer, smarter digital decisions.
                </p>
                <Link to="/blogs" className="text-brand-primary font-sans font-bold text-sm hover:underline inline-flex items-center gap-2">
                  View More Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RELATED ARTICLES SECTION */}
        <section className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-display font-semibold tracking-tight text-brand-text-heading">Related Insights</h2>
              <Link to="/blogs" className="text-brand-primary font-sans font-bold text-sm hover:underline flex items-center gap-2">
                View All Blogs
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((post, idx) => (
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
                      <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-text-heading">
                        {post.category}
                      </div>
                    </div>
                    <div className="space-y-4 px-2">
                      <h3 className="text-2xl font-display font-semibold group-hover:text-brand-primary transition-colors leading-tight text-brand-text-heading">
                        {post.title}
                      </h3>
                      <p className="text-brand-text-secondary/60 font-sans text-sm leading-[1.6] line-clamp-2 group-hover:text-brand-text-secondary transition-colors">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-brand-primary font-sans font-bold text-sm group-hover:gap-3 transition-all pt-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA SECTION */}
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-24 rounded-[3rem] text-center space-y-10 relative overflow-hidden border-brand-primary/20"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.1] text-brand-text-heading">
                  Want to Turn Strategy <br />
                  <span className="brand-gradient-text">Into Real Execution?</span>
                </h2>
                <p className="text-brand-text-secondary font-sans text-lg md:text-xl max-w-2xl mx-auto font-normal leading-[1.6]">
                  If your business needs stronger systems, smarter digital structure, or better performance alignment, ConversionFoxx is ready to help.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                  <Button to="/contact" size="lg" icon={ArrowRight} className="font-sans font-bold">
                    Let's Talk
                  </Button>
                  <Button to="/services" variant="secondary" size="lg" className="font-sans font-bold">
                    Explore Services
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;
