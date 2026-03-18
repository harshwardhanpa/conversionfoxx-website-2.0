import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { 
  ArrowRight, 
  ChevronLeft, 
  Smartphone, 
  Layout as LayoutIcon, 
  Code2, 
  Layers, 
  Rocket, 
  LifeBuoy, 
  CheckCircle2, 
  Plus, 
  Minus,
  Search,
  Target,
  Zap,
  ShieldCheck,
  Database,
  Monitor,
  Megaphone,
  Map,
  Terminal,
  Cpu,
  TrendingUp
} from 'lucide-react';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const AppDevelopment: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you build MVPs?",
      answer: "Yes, we specialize in building Minimum Viable Products (MVPs) that focus on core functionality. This allows you to launch quickly, gather user feedback, and iterate based on real-world data before committing to a full-scale build."
    },
    {
      question: "Can you support both frontend and backend?",
      answer: "Absolutely. We provide full-stack development services, handling everything from the user interface (frontend) to the server-side logic, database management, and API integrations (backend)."
    },
    {
      question: "Do you help with planning before development starts?",
      answer: "Yes. We believe thorough planning is the foundation of a successful app. Our process starts with product discovery, feature mapping, and UX direction to ensure the technical build aligns with your business goals."
    },
    {
      question: "Can you improve an existing app?",
      answer: "Yes, we can perform technical audits and UI/UX reviews on existing applications to identify bottlenecks, improve performance, and modernize the interface for better usability."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "We do. We provide ongoing maintenance, security updates, and performance monitoring to ensure your application remains stable and scalable as your user base grows."
    }
  ];

  return (
    <Layout>
      {/* BREADCRUMB */}
      <Container className="pt-32 mb-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>
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
                  <Smartphone className="w-4 h-4" />
                  App Development
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  App Experiences Built for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                    Usability & Scale
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                  ConversionFoxx helps businesses turn digital ideas into reliable app experiences with thoughtful product structure, scalable development, and user-focused execution built for growth.
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
                <Card padding="lg" className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">App Architecture</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest">Scalable Build</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-bold">v2.4.0</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-40 w-full bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent" />
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-24 h-1 bg-brand-orange/20 rounded-full" />
                        <div className="w-16 h-1 bg-brand-orange/10 rounded-full" />
                        <div className="w-20 h-1 bg-brand-orange/20 rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
                      <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
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

        {/* 2. WHAT’S INCLUDED */}
        <Section id="whats-included" background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What’s Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Product Planning', description: 'Strategic mapping of features, user flows, and technical requirements to ensure a solid product foundation.', icon: Map },
                { title: 'UI-Focused Interfaces', description: 'Modern, intuitive app designs that prioritize user experience and brand consistency across all screens.', icon: LayoutIcon },
                { title: 'Full-Stack Development', description: 'Comprehensive frontend and backend engineering using modern, scalable tech stacks.', icon: Terminal },
                { title: 'System Integration', description: 'Seamlessly connecting your app with third-party APIs, CRMs, and internal business systems.', icon: Layers },
                { title: 'Testing & Launch', description: 'Rigorous quality assurance and launch preparation to ensure a smooth, bug-free deployment.', icon: Rocket },
                { title: 'Improvement Support', description: 'Ongoing performance monitoring and iterative updates to keep your app growing with your users.', icon: LifeBuoy },
              ].map((item, idx) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="lg"
                  className="group"
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
                  Building an app is more than just writing code. We help you navigate the technical and strategic challenges of bringing a digital product to life.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Unclear Direction', text: 'We help define your product roadmap and core feature set to avoid scope creep.' },
                  { title: 'Fragmented UX', text: 'We unify your app experience to ensure users can navigate with ease and clarity.' },
                  { title: 'Scalability Concerns', text: 'We build with a future-proof architecture that grows as your user base expands.' },
                  { title: 'Disconnected Workflows', text: 'We integrate your backend systems to ensure data flows seamlessly across your business.' },
                  { title: 'Launch Difficulty', text: 'We manage the technical complexity of moving from a concept to a live product.' },
                  { title: 'Technical Debt', text: 'We use clean code and modern standards to minimize long-term maintenance hurdles.' },
                ].map((problem, idx) => (
                  <Card
                    key={problem.title}
                    padding="md"
                    className="group"
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Product Discovery', description: 'We dive into your business goals, user needs, and market opportunities to define the core vision.', icon: Search },
                { step: '02', title: 'Feature Mapping', description: 'We map out the user journey and UX direction, prioritizing features for maximum impact.', icon: Target },
                { step: '03', title: 'Dev & Testing', description: 'Our engineers build your app in milestones, with continuous testing to ensure quality at every stage.', icon: Code2 },
                { step: '04', title: 'Launch & Iteration', description: 'We handle the technical launch and monitor user feedback to guide post-launch improvements.', icon: Rocket },
              ].map((item, idx) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="md"
                  className="text-center group"
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
            <Card padding="xl" className="relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold tracking-tight">Scope Snapshot</h2>
                  <p className="text-white/60 text-lg">
                    A clear overview of the practical outputs you can expect from our app development partnership.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Core Feature Definition',
                      'App Interface Structure',
                      'Development Milestones',
                      'Integration Readiness',
                      'Scalable Architecture',
                      'Launch Preparation'
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Smartphone className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Mobile</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Optimized</div>
                  </Card>
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Database className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Scalable</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Backend</div>
                  </Card>
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Layers className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Full</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Integration</div>
                  </Card>
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <ShieldCheck className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Secure</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Build</div>
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
                { title: 'Better Usability', description: 'An app that users can navigate intuitively, reducing friction and increasing retention.', icon: LayoutIcon },
                { title: 'Stronger Structure', description: 'A solid product foundation that supports complex features without breaking.', icon: CheckCircle2 },
                { title: 'Smoother Operations', description: 'Backend systems that automate workflows and support your business efficiency.', icon: Zap },
                { title: 'Scalable Foundation', description: 'A technical build that can handle more users and data as you grow.', icon: TrendingUp },
              ].map((outcome, idx) => (
                <Card
                  key={outcome.title}
                  hoverEffect={true}
                  padding="lg"
                  className="text-center group"
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
          <Container size="small">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Questions</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass rounded-2xl border-white/5 overflow-hidden">
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
                </div>
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
                  title: 'Web Development', 
                  description: 'Create modern, high-performing websites built for credibility, speed, and conversion.', 
                  icon: Monitor,
                  link: '/services/web-development'
                },
                { 
                  title: 'CRM Solutions', 
                  description: 'Streamline customer management, automate workflows, and build systems that support long-term business efficiency.', 
                  icon: Database,
                  link: '/services/crm-solutions'
                },
                { 
                  title: 'Paid Advertising', 
                  description: 'Launch and optimize ad campaigns that focus on visibility, lead generation, and measurable returns.', 
                  icon: Megaphone,
                  link: '/services/paid-advertising'
                },
              ].map((service) => (
                <Card
                  key={service.title}
                  hoverEffect={true}
                  padding="lg"
                  className="group"
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors">{service.description}</p>
                  <Button to={service.link} variant="ghost" className="p-0 h-auto hover:bg-transparent text-brand-orange font-bold flex items-center gap-2 group/btn">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
                    Planning a Digital <br />
                    <span className="text-brand-orange">Product or App?</span>
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Let’s turn your concept into a scalable application experience that supports users, operations, and long-term business growth.
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
    </Layout>
  );
};

export default AppDevelopment;
