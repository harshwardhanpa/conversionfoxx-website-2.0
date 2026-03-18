import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  Megaphone, 
  Target, 
  Users, 
  Settings, 
  BarChart3, 
  CheckCircle2, 
  Plus, 
  Minus,
  Search,
  Zap,
  ShieldCheck,
  Database,
  Monitor,
  Share2,
  TrendingUp,
  PieChart,
  MousePointerClick,
  Rocket
} from 'lucide-react';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Layout from '../../components/layout/Layout';

const PaidAdvertising: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which ad platforms do you support?",
      answer: "We support all major advertising platforms including Google Ads (Search, Display, YouTube), Meta Ads (Facebook, Instagram), LinkedIn Ads, and TikTok Ads. We recommend platforms based on where your specific audience is most active."
    },
    {
      question: "Do you create ad strategy and execution both?",
      answer: "Yes, we handle the entire lifecycle. This includes initial strategy, audience research, creative direction, technical setup, daily management, and ongoing optimization."
    },
    {
      question: "Can this work with an existing website?",
      answer: "Absolutely. We can drive traffic to your existing website. However, we often recommend optimizing your landing pages first to ensure the traffic we send actually converts into business."
    },
    {
      question: "How often are campaigns optimized?",
      answer: "Campaigns are monitored daily and optimized continuously. We run A/B tests on creatives, refine targeting parameters, and adjust bidding strategies based on real-time performance data."
    },
    {
      question: "Can paid ads be combined with CRM and landing pages?",
      answer: "This is actually our recommended approach. By combining paid ads with high-converting landing pages and a CRM system, you create a seamless funnel that captures and nurtures leads efficiently."
    }
  ];

  return (
    <Layout>
      <div className="relative z-10 pt-32">
        {/* BREADCRUMB */}
        <Container className="mb-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </Container>

        {/* 1. SERVICE HERO */}
        <Section id="service-hero" className="min-h-[60vh] flex items-center justify-center">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
                  <Megaphone className="w-4 h-4" />
                  Paid Advertising
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Reach, Relevance, & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                    Measurable Growth
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                  ConversionFoxx builds and manages paid advertising systems designed to help businesses reach the right audience, improve campaign efficiency, and generate more meaningful business outcomes.
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
                <Card padding="lg" className="rounded-[3rem] relative z-10" hoverEffect={false}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Campaign ROI</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest">Real-time Data</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold">+24.8%</div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-end gap-2 h-32">
                      {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                          className="flex-1 bg-brand-orange/20 rounded-t-lg border-t border-brand-orange/40"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Card padding="md" className="rounded-2xl border-white/5" hoverEffect={false}>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">CPA</div>
                        <div className="text-xl font-bold text-brand-orange">$14.20</div>
                      </Card>
                      <Card padding="md" className="rounded-2xl border-white/5" hoverEffect={false}>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">ROAS</div>
                        <div className="text-xl font-bold text-brand-orange">4.2x</div>
                      </Card>
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
              <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What’s Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Campaign Strategy', description: 'Defining goals, budget allocation, and platform selection to maximize your advertising ROI.', icon: Target },
                { title: 'Audience Research', description: 'In-depth analysis to identify and target your ideal customers based on behavior and intent.', icon: Users },
                { title: 'Ad Creative Direction', description: 'Strategic guidance on visuals and copy that stop the scroll and drive meaningful clicks.', icon: Layout },
                { title: 'Setup & Management', description: 'Technical implementation and daily monitoring of your campaigns across all platforms.', icon: Settings },
                { title: 'Budget Refinement', description: 'Continuous optimization of your spend to ensure every dollar is working toward your goals.', icon: Zap },
                { title: 'Performance Review', description: 'Transparent reporting and strategic reviews to translate data into actionable business insights.', icon: BarChart3 },
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
                  Paid advertising can be a black hole for budget if not managed with precision. We eliminate the guesswork and focus on efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Wasted Ad Spend', text: 'We cut out non-performing placements and keywords that drain your budget without results.' },
                  { title: 'Weak Targeting', text: 'We refine your audience parameters to ensure your ads reach high-intent prospects.' },
                  { title: 'Low Efficiency', text: 'We optimize bidding and creative performance to lower your cost-per-acquisition.' },
                  { title: 'Poor Follow-through', text: 'We align your ads with conversion-ready landing pages to ensure clicks turn into leads.' },
                  { title: 'Inconsistent Reporting', text: 'We provide clear, data-backed visibility into exactly how your campaigns are performing.' },
                  { title: 'Stagnant Scaling', text: 'We identify winning patterns and systematically scale your budget for growth.' },
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
                { step: '01', title: 'Goal & Funnel Review', description: 'We analyze your business objectives and existing sales funnel to define the right strategy.', icon: Search },
                { step: '02', title: 'Campaign Setup', description: 'We build the technical foundation, tracking, and initial creative sets for your campaigns.', icon: Settings },
                { step: '03', title: 'Testing & Optimization', description: 'We launch A/B tests and refine targeting based on initial performance data.', icon: Zap },
                { step: '04', title: 'Reporting & Scaling', description: 'We review results transparently and scale winning campaigns to drive more volume.', icon: Rocket },
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
                    A clear overview of the practical outputs you receive with our paid advertising management.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Campaign Architecture',
                      'Targeting Approach',
                      'Ad Management Routines',
                      'Optimization Cycles',
                      'Reporting Visibility',
                      'Technical Tracking Setup'
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
                    <PieChart className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Data</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Driven</div>
                  </Card>
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <MousePointerClick className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">High</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Intent</div>
                  </Card>
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <ShieldCheck className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Verified</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Tracking</div>
                  </Card>
                  <Card padding="md" className="rounded-3xl text-center space-y-2 bg-white/5 border-white/10" hoverEffect={false}>
                    <TrendingUp className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold">Scalable</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Systems</div>
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
                { title: 'Campaign Clarity', description: 'Understand exactly where your budget is going and what it is producing.', icon: PieChart },
                { title: 'Targeting Quality', description: 'Reach the people who are actually looking for your products or services.', icon: Target },
                { title: 'Cost Efficiency', description: 'Lower your acquisition costs through systematic optimization and testing.', icon: Zap },
                { title: 'Conversion Traffic', description: 'Drive users who are ready to take action, not just passive browsers.', icon: MousePointerClick },
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
            <Card
              padding="xl"
              className="rounded-[3rem] text-center space-y-10 relative overflow-hidden border-brand-orange/20"
              hoverEffect={false}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
              
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Ready to Improve Your <br />
                  <span className="text-brand-orange">Campaign Performance?</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                  Let’s build an advertising strategy that sharpens targeting, improves efficiency, and supports stronger lead or sales outcomes.
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
          </Container>
        </Section>
      </div>
    </Layout>
  );
};

export default PaidAdvertising;
