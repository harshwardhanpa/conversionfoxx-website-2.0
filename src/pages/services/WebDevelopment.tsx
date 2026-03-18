import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  Code, 
  Layout as LayoutIcon, 
  Zap, 
  ShieldCheck, 
  Search, 
  Settings, 
  Smartphone, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Minus,
  Database,
  Globe,
  Cpu,
  Monitor,
  Rocket,
  Megaphone,
  Share2,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Layout from '../../components/layout/Layout';

const WebDevelopment: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you build custom websites?",
      answer: "Yes, every website we build is custom-designed and developed from the ground up. We don't use generic templates. This ensures your site perfectly aligns with your brand identity and business goals."
    },
    {
      question: "Is the site mobile responsive?",
      answer: "Absolutely. We follow a mobile-first development approach, ensuring your website looks and functions perfectly on smartphones, tablets, and desktops of all sizes."
    },
    {
      question: "Can you redesign an existing website?",
      answer: "Yes, we specialize in modernizing outdated websites. We can perform a complete overhaul of your visual design, technical architecture, and content structure to improve performance and conversion."
    },
    {
      question: "Will the website be easy to update later?",
      answer: "Yes. We typically build with a scalable content structure or integrate a user-friendly CMS (Content Management System) that allows your team to easily update text, images, and blog posts without needing a developer."
    },
    {
      question: "Can this be combined with paid ads or CRM?",
      answer: "Definitely. We often build websites specifically designed to serve as high-converting landing pages for paid ad campaigns and integrate them directly with CRMs like HubSpot or Salesforce for seamless lead management."
    }
  ];

  return (
    <Layout>
      <div className="relative z-10">
        {/* BREADCRUMB */}
        <Container className="pt-32 mb-8">
          <Button 
            to="/services" 
            variant="ghost" 
            size="sm" 
            icon={ChevronLeft} 
            className="p-0 hover:bg-transparent text-white/40 hover:text-brand-orange"
          >
            Back to Services
          </Button>
        </Container>

        {/* 1. SERVICE HERO */}
        <Section id="service-hero" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
                  <Code className="w-4 h-4" />
                  Web Development
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Websites Built for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                    Performance & Conversion
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                  ConversionFoxx creates modern websites that do more than look good. We build digital experiences designed to improve trust, speed, usability, and the actions that matter most to your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Button to="/contact" size="lg" icon={ArrowRight}>
                    Let's Talk
                  </Button>
                  <Button to="/services" variant="secondary" size="lg">
                    View All Services
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <Card padding="lg" className="rounded-[3rem] border-white/10 relative z-10" hoverEffect={false}>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="aspect-square bg-brand-orange/10 rounded-2xl flex items-center justify-center">
                        <Zap className="w-8 h-8 text-brand-orange" />
                      </div>
                      <div className="aspect-square bg-white/5 rounded-2xl" />
                      <div className="aspect-square bg-white/5 rounded-2xl" />
                    </div>
                    <div className="h-32 w-full bg-white/5 rounded-2xl mt-4" />
                  </div>
                </Card>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* 2. WHAT’S INCLUDED */}
        <Section id="whats-included" background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Deliverables</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What’s Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Custom Website Design', description: 'Bespoke UI/UX design tailored to your brand identity and optimized for user conversion.', icon: LayoutIcon },
                { title: 'Responsive Frontend', description: 'Modern, high-performance frontend development that works perfectly on all devices.', icon: Smartphone },
                { title: 'Conversion Landing Pages', description: 'Strategic landing pages designed specifically to turn ad traffic into leads and sales.', icon: Target },
                { title: 'Scalable CMS Structure', description: 'Flexible content management systems that allow your team to update content effortlessly.', icon: Database },
                { title: 'Performance Optimization', description: 'Lightning-fast load times and technical optimization for superior Core Web Vitals.', icon: Zap },
                { title: 'Technical Support', description: 'Ongoing maintenance, security updates, and performance monitoring to keep your site at its peak.', icon: ShieldCheck },
              ].map((item) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="lg"
                  className="rounded-[2.5rem] group"
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <item.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 3. PROBLEMS WE HELP SOLVE */}
        <Section id="problems-we-solve">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Pain Points</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Problems We Help Solve</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  A website should be your hardest-working employee. If it's not driving results, it's a liability. We solve the technical hurdles that hold your business back.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Outdated Experience', text: 'We modernize your digital presence to match your current brand authority.' },
                  { title: 'Poor Mobile Usability', text: 'We build mobile-first to capture the majority of users browsing on handheld devices.' },
                  { title: 'Low Trust', text: 'We use premium design and social proof placement to build instant credibility.' },
                  { title: 'Slow Load Speeds', text: 'We eliminate technical debt and optimize code for near-instant page loads.' },
                  { title: 'Poor Structure', text: 'We reorganize site architecture to guide users naturally toward conversion.' },
                  { title: 'Conversion Failure', text: 'We implement strategic CTAs and forms that turn passive visitors into active leads.' },
                ].map((problem) => (
                  <Card
                    key={problem.title}
                    padding="md"
                    className="rounded-3xl group"
                  >
                    <h3 className="text-lg font-bold mb-2 text-brand-orange">{problem.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{problem.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. HOW IT WORKS */}
        <Section id="how-it-works" background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">The Workflow</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery & Planning', description: 'We map out your site structure, user journeys, and technical requirements.', icon: Search },
                { step: '02', title: 'Wireframes & UI Direction', description: 'We create high-fidelity UI designs and interactive prototypes for your approval.', icon: LayoutIcon },
                { step: '03', title: 'Development & Testing', description: 'Our developers build your site using clean code, followed by rigorous testing.', icon: Code },
                { step: '04', title: 'Launch & Improvement', description: 'We handle the technical launch and monitor performance for continuous optimization.', icon: Rocket },
              ].map((item) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="md"
                  className="rounded-[2.5rem] text-center group"
                >
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <item.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 5. SCOPE SNAPSHOT */}
        <Section id="scope-snapshot">
          <Container>
            <Card padding="xl" className="rounded-[3rem] relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold tracking-tight">Scope Snapshot</h2>
                  <p className="text-white/60 text-lg">
                    A clear overview of the practical outputs you receive with our web development service.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Responsive Page Layouts',
                      'Core Business Sections',
                      'Performance-Ready Setup',
                      'Scalable Site Structure',
                      'Conversion-Minded Architecture',
                      'Technical SEO Foundation'
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Monitor className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Responsive</div>
                  </Card>
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Zap className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">&lt; 2s</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Load Time</div>
                  </Card>
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Database className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Scalable</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Structure</div>
                  </Card>
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Target className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">High</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Conversion</div>
                  </Card>
                </div>
              </div>
            </Card>
          </Container>
        </Section>

        {/* 6. DESIGNED FOR MEANINGFUL OUTCOMES */}
        <Section id="outcomes" background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Success Metrics</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meaningful Outcomes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Online Credibility', description: 'A premium digital presence that positions you as a leader in your industry.', icon: ShieldCheck },
                { title: 'User Experience', description: 'Intuitive navigation and fast performance that keep users engaged longer.', icon: Users },
                { title: 'Conversion Readiness', description: 'Strategic architecture designed to turn passive visitors into active leads.', icon: Target },
                { title: 'Scalable Foundation', description: 'A future-proof technical setup that grows alongside your business.', icon: Database },
              ].map((outcome) => (
                <Card
                  key={outcome.title}
                  hoverEffect={true}
                  padding="lg"
                  className="rounded-[2.5rem] text-center group"
                >
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <outcome.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{outcome.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{outcome.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 7. SERVICE FAQ */}
        <Section id="faq">
          <Container className="max-w-3xl">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Questions</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} padding="none" className="rounded-2xl overflow-hidden" hoverEffect={false}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    {activeFaq === idx ? (
                      <Minus className="w-5 h-5 text-brand-orange" />
                    ) : (
                      <Plus className="w-5 h-5 text-brand-orange" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 8. RELATED SERVICES */}
        <Section id="related-services" background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Explore More</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Related Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Paid Advertising', 
                  description: 'Launch and optimize ad campaigns that focus on visibility, lead generation, and measurable returns.', 
                  icon: Megaphone,
                  link: '/services/paid-advertising'
                },
                { 
                  title: 'CRM Solutions', 
                  description: 'Streamline customer management, automate workflows, and build systems that support long-term business efficiency.', 
                  icon: Database,
                  link: '/services/crm-solutions'
                },
                { 
                  title: 'Social Media Management', 
                  description: 'Build attention, trust, and a consistent brand presence through strategic content and engagement systems.', 
                  icon: Share2,
                  link: '/services/social-media-management'
                },
              ].map((service) => (
                <Card
                  key={service.title}
                  hoverEffect={true}
                  padding="lg"
                  className="rounded-[2.5rem] group"
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors">{service.description}</p>
                  <Button to={service.link} variant="ghost" size="sm" icon={ArrowRight} className="p-0 hover:bg-transparent text-brand-orange">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 9. FINAL CTA */}
        <Section id="final-cta">
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
                    Need a Website That <br />
                    <span className="text-brand-orange">Actually Performs?</span>
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Let’s build a website that supports your brand, improves user experience, and helps turn visitors into real business opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Button to="/contact" size="lg" icon={ArrowRight}>
                      Let's Talk
                    </Button>
                    <Button to="/services" variant="secondary" size="lg">
                      Back to Services
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

export default WebDevelopment;
