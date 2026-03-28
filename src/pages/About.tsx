import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ArrowRight, Sparkles, Target, Eye, Zap, Layers, Rocket, ShieldCheck, BarChart3, Share2, Code, Smartphone, Megaphone, Database, Search, PenTool, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 pt-32">
        {/* 1. ABOUT HERO SECTION */}
        <section id="about-hero" className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mx-auto">
                <Sparkles className="w-4 h-4" />
                About ConversionFoxx
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                We Build Systems That <br />
                Scale Revenue Predictably
              </h1>
              <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
                ConversionFoxx is a growth system architecture firm. We help businesses scale through data-backed Growth Audits, high-performance Lead Generation, and our flagship Revenue Operations System. We don't just provide services; we build engines for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button to="/contact" size="xl" icon={ArrowRight}>
                  Get Free Growth Audit
                </Button>
                <Button to="/services" variant="secondary" size="xl">
                  See How It Works
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. OUR STORY SECTION */}
        <section id="our-story" className="py-24 px-4 md:px-8 bg-white/2 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Bridging the Gap Between <br />Traffic and Revenue</h2>
                <div className="space-y-6 text-brand-text-secondary text-lg leading-relaxed">
                  <p>
                    In today's digital landscape, many businesses invest heavily in beautiful websites and expensive advertising, yet they often fail to see measurable revenue growth. They have traffic, but they lack a system to convert that traffic into predictable profit.
                  </p>
                  <p>
                    ConversionFoxx was created to solve this. We realized that for a growth strategy to be truly successful, it must be built on a foundation of system-thinking and data-backed optimization.
                  </p>
                  <p>
                    Our agency was built to help ambitious brands stop wasting time on disconnected marketing tactics. Instead, we help them architect integrated, scalable systems that actually convert interest into revenue. We don't just deliver services; we deliver revenue engines.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square glass rounded-[3rem] flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-brand-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 p-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Rocket className="w-10 h-10 text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-bold italic">"Growth is not an accident; it's a system."</h3>
                  <div className="w-12 h-1 bg-brand-primary mx-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. MISSION AND VISION SECTION */}
        <section id="mission-vision" className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What Drives Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
                  <Target className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-brand-text-secondary text-lg leading-relaxed">
                  To help businesses turn marketing efforts into predictable revenue through system-based growth architecture and data-backed optimization.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-12 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors duration-500">
                  <Eye className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-brand-text-secondary text-lg leading-relaxed">
                  To become the world's leading growth architecture firm, known for building the most efficient and scalable revenue systems for ambitious brands.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. WHY BUSINESSES CHOOSE US SECTION */}
        <section id="why-choose-us" className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Why ConversionFoxx?</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Businesses Choose Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Revenue-Focused Thinking', description: 'We don\'t just look at clicks; we look at the bottom line. Every strategy is built to drive revenue.', icon: BarChart3 },
                { title: 'Tech + Marketing Under One Roof', description: 'We combine deep technical expertise with high-performance marketing for a unified growth strategy.', icon: Layers },
                { title: 'Scalable Systems', description: 'We build infrastructures that grow with your business, ensuring long-term stability and performance.', icon: ShieldCheck },
                { title: 'Fast, Strategic Execution', description: 'We move quickly without sacrificing quality, delivering results at the speed of modern business.', icon: Zap },
                { title: 'Clear Communication', description: 'We believe in transparency. You\'ll always know exactly what we\'re doing and why it matters.', icon: Share2 },
                { title: 'Data-Backed Decisions', description: 'No guesswork. We use advanced analytics and user data to drive every strategic move we make.', icon: TrendingUp },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group border-white/5 hover:border-brand-primary/30"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                    <item.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR EXPERTISE SECTION */}
        <section id="expertise" className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built to Support Modern Growth</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Built to support modern business growth across strategy, technology, and performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Growth Audit', description: 'Deep analysis of your entire growth system to find leaks and inefficiencies.', icon: Search },
                { title: 'Lead Generation', description: 'Scalable traffic systems built to drive high-quality leads predictably.', icon: Megaphone },
                { title: 'Conversion Optimization', description: 'Data-backed optimization to turn more of your traffic into revenue.', icon: TrendingUp },
                { title: 'Revenue Operations', description: 'The flagship system that ties your marketing and sales into a unified engine.', icon: Database },
                { title: 'System Architecture', description: 'Custom-built growth infrastructure designed for long-term scalability.', icon: Layers },
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <service.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
                </motion.div>
              ))}
              <div className="glass p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-6 bg-brand-primary/5 border-dashed border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
                <Button to="/contact" variant="primary">
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. RESULTS MINDSET SECTION */}
        <section id="results-mindset" className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">We Focus on Results <br /><span className="text-brand-primary">That Scale</span></h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Every Growth Audit, Lead Gen campaign, or Revenue Operations System we build is centered around efficiency, conversion, and long-term scalability. We don't believe in vanity metrics; we believe in revenue outcomes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    'Conversion-Oriented Execution',
                    'Performance Tracking',
                    'ROI-Focused Strategy',
                    'Long-Term Scalability'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand-primary group-hover:bg-white" />
                      </div>
                      <span className="font-medium text-white/80 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-primary">300%</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">ROI Increase</div>
                  </div>
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-primary">5X</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Lead Gen</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-primary">24/7</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Monitoring</div>
                  </div>
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-primary">100%</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TEAM OR LEADERSHIP SECTION */}
        <section id="team" className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Our Team</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The People Behind ConversionFoxx</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                ConversionFoxx brings together strategic thinking, technical expertise, and creative execution to deliver high-performance growth solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Alex Rivera', role: 'Founder & Growth Architect', bio: 'Specialist in revenue operations and scaling high-performance growth systems.' },
                { name: 'Sarah Chen', role: 'Systems Director', bio: 'Expert in building scalable technical infrastructure for revenue operations.' },
                { name: 'Marcus Thorne', role: 'Conversion Lead', bio: 'Focused on data-backed optimization and high-converting funnel entry.' },
                { name: 'Elena Vance', role: 'Operations Lead', bio: 'Ensuring every growth system runs at peak efficiency for our clients.' },
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all group text-center"
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-3xl text-brand-primary group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{member.name}</h3>
                  <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</div>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PROCESS SECTION */}
        <section id="process" className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">How We Work</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Timeline Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-brand-primary/20 -translate-y-1/2" />
              
              {[
                { title: 'Growth Audit', description: 'We dive deep into your business to find leaks and build a roadmap for growth.', icon: Search },
                { title: 'System Architecture', description: 'We design your custom Revenue Operations System to tie everything together.', icon: PenTool },
                { title: 'Execution & Launch', description: 'We launch your traffic systems and funnels with data-backed precision.', icon: Rocket },
                { title: 'Scale & Optimize', description: 'We continuously optimize the system to reach new heights of revenue.', icon: TrendingUp },
              ].map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 text-center"
                >
                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500">
                      <step.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark glass rounded-full flex items-center justify-center text-xs font-bold text-brand-primary border-brand-primary/20">
                        0{idx + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{step.title}</h3>
                    <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. INTERNAL CTA SECTION */}
        <section id="internal-cta" className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="glass p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden border-brand-primary/10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Want to See What We Can Build?</h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  Explore our services and discover how ConversionFoxx helps brands grow through strategy, technology, and performance.
                </p>
                <Button to="/services">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section id="final-cta" className="py-24 px-4 md:px-8 relative overflow-hidden">
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
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Let’s Build a <br />
                  Revenue System
                </h2>
                <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                  Whether you need a Growth Audit, better Lead Generation, or a complete Revenue Operations System, ConversionFoxx is ready to scale your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                  <Button to="/contact" size="xl" icon={ArrowRight}>
                    Get Free Growth Audit
                  </Button>
                  <Button to="/" variant="secondary" size="xl">
                    See How It Works
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

export default About;
