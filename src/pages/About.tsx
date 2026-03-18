import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Eye, Zap, Layers, Rocket, ShieldCheck, BarChart3, Share2, Code, Smartphone, Megaphone, Database, Search, PenTool, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-orange/5 blur-[100px] rounded-full" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mx-auto">
                <Sparkles className="w-4 h-4" />
                About ConversionFoxx
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                We Build Systems That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                  Drive Real Business Growth
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                ConversionFoxx is a growth-focused tech agency helping businesses scale through powerful digital solutions, performance marketing, and conversion-driven strategy. We combine technology, creativity, and data to help brands grow with purpose.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 107, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Let's Talk
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto glass text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
                  >
                    Explore Services
                  </motion.button>
                </Link>
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
                <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Bridging the Gap Between <br /><span className="text-brand-orange">Presence and Performance</span></h2>
                <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                  <p>
                    In today's digital landscape, many businesses invest heavily in beautiful websites, expensive advertising, and complex digital tools, yet they often fail to see measurable business growth. They have a presence, but they lack performance.
                  </p>
                  <p>
                    ConversionFoxx was created to bridge this critical gap. We realized that for a digital strategy to be truly successful, it must be built on a foundation of conversion-focused thinking and scalable technology.
                  </p>
                  <p>
                    Our agency was built to help ambitious brands stop wasting time on disconnected digital efforts. Instead, we help them build integrated, scalable systems that actually convert interest into revenue. We don't just deliver projects; we deliver growth engines.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square glass rounded-[3rem] flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 p-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-brand-orange/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Rocket className="w-10 h-10 text-brand-orange" />
                  </div>
                  <h3 className="text-3xl font-bold italic">"Growth is not an accident; it's a system."</h3>
                  <div className="w-12 h-1 bg-brand-orange mx-auto" />
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
                className="glass p-12 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-500">
                  <Target className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  To help businesses turn digital efforts into measurable growth through smart strategy, strong execution, and systems built to perform.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-12 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-500">
                  <Eye className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  To become a trusted growth and technology partner for ambitious brands seeking sustainable, scalable, and results-driven digital success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. WHY BUSINESSES CHOOSE US SECTION */}
        <section id="why-choose-us" className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Why ConversionFoxx?</span>
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
                  className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group border-white/5 hover:border-brand-orange/30"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                    <item.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
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
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built to Support Modern Growth</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Built to support modern business growth across strategy, technology, and performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Social Media Management', description: 'Strategic content and community management built to drive authority and engagement.', icon: Share2 },
                { title: 'Web Development', description: 'High-performance, conversion-focused websites built with modern tech stacks.', icon: Code },
                { title: 'App Development', description: 'Native and cross-platform mobile applications that deliver seamless user experiences.', icon: Smartphone },
                { title: 'Paid Advertising', description: 'Data-driven Meta and Google Ads campaigns optimized for maximum ROI.', icon: Megaphone },
                { title: 'CRM Solutions', description: 'Custom CRM implementations and automation to streamline your sales workflows.', icon: Database },
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
                </motion.div>
              ))}
              <div className="glass p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-6 bg-brand-orange/5 border-dashed border-2 border-brand-orange/20">
                <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
                <Link to="/contact">
                  <button className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    Let's Talk
                  </button>
                </Link>
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
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">We Focus on Results <br /><span className="text-brand-orange">That Matter</span></h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Every campaign, website, workflow, or system we build is centered around performance, efficiency, conversion, and long-term scalability. We don't believe in vanity metrics; we believe in business outcomes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    'Conversion-Oriented Execution',
                    'Performance Tracking',
                    'ROI-Focused Strategy',
                    'Long-Term Scalability'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand-orange group-hover:bg-white" />
                      </div>
                      <span className="font-medium text-white/80 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-orange">300%</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">ROI Increase</div>
                  </div>
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-orange">5X</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Lead Gen</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-orange">24/7</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Monitoring</div>
                  </div>
                  <div className="glass p-8 rounded-3xl text-center space-y-2">
                    <div className="text-4xl font-bold text-brand-orange">100%</div>
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
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Team</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The People Behind ConversionFoxx</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                ConversionFoxx brings together strategic thinking, technical expertise, and creative execution to deliver high-performance growth solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Alex Rivera', role: 'Founder & Strategy Lead', bio: 'Expert in digital growth and performance marketing systems.' },
                { name: 'Sarah Chen', role: 'Technical Director', bio: 'Specializing in scalable architecture and modern web tech.' },
                { name: 'Marcus Thorne', role: 'Creative Director', bio: 'Focused on conversion-driven design and user experience.' },
                { name: 'Elena Vance', role: 'Operations Manager', bio: 'Ensuring seamless execution and client success across all projects.' },
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all group text-center"
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-3xl text-brand-orange group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-orange transition-colors">{member.name}</h3>
                  <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">{member.role}</div>
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
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">How We Work</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Timeline Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent -translate-y-1/2" />
              
              {[
                { title: 'Discover & Strategize', description: 'We dive deep into your business to build a roadmap for measurable growth.', icon: Search },
                { title: 'Design & Build', description: 'Our team executes the strategy with high-performance tech and creative design.', icon: PenTool },
                { title: 'Launch & Optimize', description: 'We launch your systems and continuously refine them for maximum conversion.', icon: Rocket },
                { title: 'Scale & Improve', description: 'With a solid foundation, we scale your presence to reach new heights.', icon: TrendingUp },
              ].map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 text-center"
                >
                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                      <step.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark glass rounded-full flex items-center justify-center text-xs font-bold text-brand-orange border-brand-orange/20">
                        0{idx + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">{step.title}</h3>
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
            <div className="glass p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden border-brand-orange/10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 blur-[100px] rounded-full" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Want to See What We Can Build?</h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  Explore our services and discover how ConversionFoxx helps brands grow through strategy, technology, and performance.
                </p>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
                  >
                    View Services
                  </motion.button>
                </Link>
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
              className="glass p-12 md:p-24 rounded-[3rem] text-center space-y-10 relative overflow-hidden border-brand-orange/20"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Let’s Build Something That <br />
                  <span className="text-brand-orange">Actually Works</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                  Whether you need better systems, stronger digital presence, or real growth support, ConversionFoxx is ready to help.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 107, 0, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all"
                    >
                      Let's Talk
                      <ArrowRight className="w-6 h-6" />
                    </motion.button>
                  </Link>
                  <Link to="/">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto glass text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all"
                    >
                      Go Back Home
                    </motion.button>
                  </Link>
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
