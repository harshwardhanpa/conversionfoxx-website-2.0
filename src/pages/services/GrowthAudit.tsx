import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  Search, 
  Zap, 
  ShieldCheck, 
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
  Target,
  Users,
  TrendingUp,
  FileSearch,
  Activity,
  AlertCircle,
  Layers,
  MousePointer2,
  Workflow
} from 'lucide-react';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const GrowthAudit: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly is a Growth Audit?",
      answer: "A Growth Audit is a deep-dive analysis of your entire marketing and sales funnel. We look at your tracking, traffic sources, landing page performance, and conversion rates to identify exactly where you're losing money and where the biggest opportunities for growth are."
    },
    {
      question: "How long does the audit take?",
      answer: "A standard Growth Audit typically takes 7-10 business days to complete. This allows us to gather enough data, perform deep technical checks, and prepare a comprehensive strategy document for your team."
    },
    {
      question: "What do I get at the end of the audit?",
      answer: "You receive a detailed Growth Roadmap. This includes a breakdown of all identified leaks, a technical tracking audit, competitor analysis, and a prioritized list of action items to improve your revenue immediately."
    },
    {
      question: "Is this just for paid ads?",
      answer: "No. While we look closely at paid traffic, the audit covers your entire ecosystem—including organic traffic, email marketing, site speed, and user experience. We look at the system, not just the channel."
    },
    {
      question: "What happens after the audit?",
      answer: "After the audit, we present our findings and the roadmap. You can then choose to implement the changes yourself, or partner with us to execute the strategy through our Lead Generation and Conversion Optimization services."
    }
  ];

  return (
    <>
      <div className="relative z-10">
        {/* BREADCRUMB */}
        <Container className="pt-32 mb-8">
          <Button 
            to="/services" 
            variant="ghost" 
            size="sm" 
            icon={ChevronLeft} 
            className="p-0 hover:bg-transparent text-white/40 hover:text-brand-primary"
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
                  <FileSearch className="w-4 h-4" />
                  Growth Audit
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Stop Guessing. <br />
                  Start Auditing.
                </h1>
                <p className="text-lg md:text-xl text-brand-text-secondary font-light leading-relaxed max-w-xl">
                  Deep analysis of your entire growth system. We identify funnel gaps, tracking issues, conversion leaks, and traffic inefficiencies that are holding your revenue back.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Button to="/contact" size="lg" icon={ArrowRight}>
                    Get Your Growth Audit
                  </Button>
                  <Button to="/services" variant="secondary" size="lg">
                    See How It Works
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
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/5" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="aspect-square bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                        <Activity className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div className="aspect-square bg-white/5 rounded-2xl" />
                      <div className="aspect-square bg-white/5 rounded-2xl" />
                    </div>
                    <div className="h-32 w-full bg-white/5 rounded-2xl mt-4" />
                  </div>
                </Card>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* 2. WHAT’S INCLUDED */}
        <Section id="whats-included" background="subtle">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Analysis</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What’s Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Funnel Gap Analysis', description: 'Identifying where users drop off in your journey and why they aren\'t converting.', icon: Layers },
                { title: 'Technical Tracking Audit', description: 'Ensuring your data is accurate across GA4, Meta Pixel, and your CRM.', icon: Activity },
                { title: 'Conversion Leak Detection', description: 'Finding specific pages or elements that are killing your conversion rates.', icon: AlertCircle },
                { title: 'Traffic Inefficiency Check', description: 'Analyzing your traffic sources to see which ones are actually driving revenue.', icon: TrendingUp },
                { title: 'Competitor Benchmarking', description: 'Seeing how your growth system stacks up against the industry leaders.', icon: Target },
                { title: 'Prioritized Growth Roadmap', description: 'A step-by-step action plan to fix leaks and scale your revenue.', icon: Rocket },
              ].map((item) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="lg"
                  className="rounded-[2.5rem] group"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <item.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-dark transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-brand-text-secondary opacity-50 leading-relaxed group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors">{item.description}</p>
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
                <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Pain Points</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Problems We Help Solve</h2>
                <p className="text-brand-text-secondary text-lg leading-relaxed">
                  Most businesses are flying blind. They spend money on traffic but don't know why it's not converting. We provide the clarity you need to scale.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Stagnant Revenue', text: 'We find the bottlenecks that are keeping your growth flat.' },
                  { title: 'High Acquisition Costs', text: 'We identify inefficient spend and optimize for better ROI.' },
                  { title: 'Inaccurate Data', text: 'We fix tracking issues so you can make decisions based on truth.' },
                  { title: 'Low Conversion Rates', text: 'We pinpoint exactly why visitors aren\'t taking action.' },
                  { title: 'Fragmented Systems', text: 'We align your marketing and sales tools for a unified view.' },
                  { title: 'Lack of Strategy', text: 'We provide a clear, data-backed roadmap for your next 90 days.' },
                ].map((problem) => (
                  <Card
                    key={problem.title}
                    padding="md"
                    className="rounded-3xl group"
                  >
                    <h3 className="text-lg font-bold mb-2 text-brand-primary">{problem.title}</h3>
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
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">The Workflow</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Data Integration', description: 'We connect to your tracking and CRM systems to gather raw growth data.', icon: Database },
                { step: '02', title: 'Technical Analysis', description: 'Our analysts perform a deep-dive into your funnel and tracking setup.', icon: Search },
                { step: '03', title: 'Strategy Development', description: 'We build a prioritized roadmap based on the biggest revenue opportunities.', icon: BarChart3 },
                { step: '04', title: 'Roadmap Delivery', description: 'We present our findings and provide a clear execution plan for your team.', icon: Rocket },
              ].map((item) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="md"
                  className="rounded-[2.5rem] text-center group"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <item.icon className="w-8 h-8 text-brand-primary group-hover:text-brand-dark transition-colors" />
                  </div>
                  <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  <p className="text-brand-text-secondary opacity-50 leading-relaxed group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 7. SERVICE FAQ */}
        <Section id="faq">
          <Container className="max-w-3xl">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Questions</span>
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
                      <Minus className="w-5 h-5 text-brand-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-brand-primary" />
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
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Explore More</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Related Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Lead Generation', 
                  description: 'Build scalable traffic systems that bring in high-quality leads consistently through paid channels.', 
                  icon: Target,
                  link: '/services/lead-generation'
                },
                { 
                  title: 'Conversion Optimization', 
                  description: 'Turn more visitors into customers through data-driven A/B testing and landing page optimization.', 
                  icon: MousePointer2,
                  link: '/services/conversion-optimization'
                },
                { 
                  title: 'Revenue Operations System', 
                  description: 'Our flagship service. A unified data infrastructure that aligns marketing, sales, and revenue.', 
                  icon: Workflow,
                  link: '/services/revenue-operations-system'
                },
              ].map((service) => (
                <Card
                  key={service.title}
                  hoverEffect={true}
                  padding="lg"
                  className="rounded-[2.5rem] group"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <service.icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors">{service.description}</p>
                  <Button to={service.link} variant="ghost" size="sm" icon={ArrowRight} className="p-0 hover:bg-transparent text-brand-primary">
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
              <Card padding="xl" className="text-center space-y-10 relative overflow-hidden border-brand-primary/20" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
                
                <div className="relative z-10 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    Ready to Find Your <br />
                    Growth Bottlenecks?
                  </h2>
                  <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Get a comprehensive Growth Audit and a prioritized roadmap to scale your revenue. No more guessing, just data-backed growth.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Button to="/contact" size="lg" icon={ArrowRight}>
                      Get Your Growth Audit
                    </Button>
                    <Button to="/services" variant="secondary" size="lg">
                      See How It Works
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default GrowthAudit;
