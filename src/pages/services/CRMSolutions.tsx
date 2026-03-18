import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  Database, 
  GitMerge, 
  Zap, 
  FormInput, 
  BarChart3, 
  Settings, 
  CheckCircle2, 
  Plus, 
  Minus,
  Search,
  Target,
  ShieldCheck,
  Monitor,
  Smartphone,
  Megaphone,
  Users,
  Workflow,
  ClipboardList,
  Eye
} from 'lucide-react';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Layout from '../../components/layout/Layout';

const CRMSolutions: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can you improve our existing CRM?",
      answer: "Yes, we often work with businesses that already have a CRM but aren't using it to its full potential. We can audit your current setup, clean up data, restructure pipelines, and add automation to make it more effective."
    },
    {
      question: "Do you help with automation?",
      answer: "Absolutely. Automation is a core part of our CRM service. We build workflows that handle lead assignment, follow-up reminders, status updates, and data syncing so your team can focus on selling."
    },
    {
      question: "Can CRM be connected with ads or website forms?",
      answer: "Yes, this is critical for lead management. We set up direct integrations so that every lead from your website forms or ad campaigns flows instantly into your CRM with the correct source tracking."
    },
    {
      question: "Is this useful for small teams?",
      answer: "Definitely. In fact, small teams often benefit the most from CRM solutions because automation acts as a force multiplier, allowing a small group to manage a large volume of leads without dropping the ball."
    },
    {
      question: "Will our team be able to use it easily after setup?",
      answer: "Yes. We prioritize 'Team Usability' in our process. We design the interface to be intuitive, remove unnecessary complexity, and provide training to ensure your team feels confident using the new system."
    }
  ];

  return (
    <Layout>
      <div className="relative z-10">
        {/* BREADCRUMB */}
        <Section padding="sm" className="pb-0">
          <Container>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </Container>
        </Section>

        {/* 1. SERVICE HERO */}
        <Section id="service-hero" className="pt-10 md:pt-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
                  <Database className="w-4 h-4" />
                  CRM Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Organize Growth, Sales, & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                    Customer Workflows
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                  ConversionFoxx helps businesses build smarter CRM systems that improve pipeline visibility, automate repetitive work, and support stronger customer follow-up through more organized processes.
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
                <Card padding="xl" className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                        <GitMerge className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Sales Pipeline</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest">Active Deals</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'New Lead', count: 12, color: 'bg-brand-orange/20' },
                      { label: 'Discovery', count: 8, color: 'bg-brand-orange/40' },
                      { label: 'Proposal', count: 5, color: 'bg-brand-orange/60' },
                      { label: 'Negotiation', count: 3, color: 'bg-brand-orange/80' },
                    ].map((stage, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-24 text-xs text-white/40 font-bold uppercase tracking-widest">{stage.label}</div>
                        <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(stage.count / 15) * 100}%` }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                            className={`h-full ${stage.color}`}
                          />
                        </div>
                        <div className="w-8 text-right text-sm font-bold">{stage.count}</div>
                      </div>
                    ))}
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
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Deliverables</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What’s Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'CRM Setup & Structuring', description: 'Technical configuration of your CRM platform tailored to your specific business model.', icon: Database },
                { title: 'Pipeline Design', description: 'Visual mapping of your sales stages to ensure clear deal tracking and forecasting.', icon: GitMerge },
                { title: 'Workflow Automation', description: 'Building automated triggers and actions to eliminate manual data entry and follow-ups.', icon: Zap },
                { title: 'Lead Flow Integration', description: 'Connecting website forms and ad platforms directly to your CRM for instant lead capture.', icon: FormInput },
                { title: 'Reporting Views', description: 'Custom dashboards that provide real-time visibility into sales performance and team activity.', icon: BarChart3 },
                { title: 'Optimization Support', description: 'Ongoing refinement of your processes to ensure the system evolves with your business.', icon: Settings },
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
                  A CRM should be a tool for growth, not a source of frustration. We fix the structural issues that prevent your team from being effective.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Messy Lead Management', text: 'We organize your leads so nothing falls through the cracks and every prospect is tracked.' },
                  { title: 'Poor Follow-up', text: 'We implement reminders and automated sequences to ensure consistent customer touchpoints.' },
                  { title: 'Disconnected Data', text: 'We centralize your customer information so your team has a single source of truth.' },
                  { title: 'Manual Workflows', text: 'We automate repetitive tasks to free up your team for high-value sales activities.' },
                  { title: 'Limited Visibility', text: 'We build dashboards that show exactly where every deal stands in your pipeline.' },
                  { title: 'Low Adoption', text: 'We simplify the system so your team actually enjoys using it every day.' },
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Process Review', description: 'We analyze your current sales and customer journey to identify bottlenecks.', icon: Search },
                { step: '02', title: 'Structure Planning', description: 'We map out the ideal CRM architecture, stages, and automation triggers.', icon: Workflow },
                { step: '03', title: 'Setup & Integration', description: 'We build the system and connect it with your website, ads, and email.', icon: Database },
                { step: '04', title: 'Team Usability', description: 'We refine the interface and provide training to ensure high team adoption.', icon: Users },
              ].map((item, idx) => (
                <Card
                  key={item.title}
                  hoverEffect={true}
                  padding="lg"
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
                    A clear overview of the practical outputs you receive with our CRM solutions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Custom Pipeline Stages',
                      'Automated Lead Routing',
                      'Lead Tracking Structure',
                      'Internal Visibility Dashboards',
                      'Process-Ready CRM Setup',
                      'Integration with Ad Platforms'
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
                    <ClipboardList className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Organized</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Data</div>
                  </Card>
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Zap className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Automated</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Workflows</div>
                  </Card>
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <Eye className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Full</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Visibility</div>
                  </Card>
                  <Card padding="md" className="text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <ShieldCheck className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Secure</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Access</div>
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
                { title: 'Cleaner Operations', description: 'Eliminate the chaos of spreadsheets and sticky notes with a centralized system.', icon: ClipboardList },
                { title: 'Follow-up Consistency', description: 'Never miss a lead again with automated reminders and structured tasks.', icon: CheckCircle2 },
                { title: 'Efficient Workflows', description: 'Reduce manual data entry and focus your team on closing deals.', icon: Zap },
                { title: 'Journey Visibility', description: 'Understand every touchpoint in the customer journey from lead to sale.', icon: Eye },
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
                  title: 'Paid Advertising', 
                  description: 'Launch and optimize ad campaigns that focus on visibility, lead generation, and measurable returns.', 
                  icon: Megaphone,
                  link: '/services/paid-advertising'
                },
                { 
                  title: 'Web Development', 
                  description: 'Create modern, high-performing websites built for credibility, speed, and conversion.', 
                  icon: Monitor,
                  link: '/services/web-development'
                },
                { 
                  title: 'App Development', 
                  description: 'Turn digital ideas into reliable app experiences with thoughtful product structure and scalable development.', 
                  icon: Smartphone,
                  link: '/services/app-development'
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
                    Need Better Systems <br />
                    <span className="text-brand-orange">Behind Your Growth?</span>
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Let’s build a CRM setup that improves visibility, saves time, and creates a more scalable way to manage leads and customer relationships.
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

export default CRMSolutions;
