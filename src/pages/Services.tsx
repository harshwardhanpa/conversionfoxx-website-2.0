import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  ArrowRight, 
  Sparkles, 
  FileSearch, 
  Target, 
  MousePointer2, 
  Workflow, 
  CheckCircle2, 
  Users, 
  Rocket, 
  ShoppingBag, 
  Briefcase, 
  Settings,
  Clock,
  Calendar,
  Zap,
  TrendingUp,
  Layers,
  ChevronRight
} from 'lucide-react';

const Services: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('engagement-models');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="relative z-10 pt-20">
        {/* 1. SERVICES HERO */}
        <Section className="relative overflow-hidden pt-32 pb-20">
          {/* Background Decorative Elements */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-sans font-bold uppercase tracking-[0.2em] mx-auto border border-orange-500/20">
                <Sparkles className="w-4 h-4" />
                Our Expertise
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-brand-text-heading max-w-4xl mx-auto">
                Services Built to Grow <br />
                <span className="text-orange-500">
                  Modern Businesses
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto font-sans font-normal leading-relaxed">
                ConversionFoxx delivers growth-focused digital services that combine strategy, technology, and performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button to="/contact" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition w-full sm:w-auto">
                  Get Free Growth Audit
                </Button>
                <Button 
                  onClick={scrollToProcess} 
                  variant="secondary" 
                  size="lg"
                  className="border border-white/20 hover:border-orange-500 px-6 py-3 rounded-xl w-full sm:w-auto text-white"
                >
                  See How It Works
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* 2. SERVICE CATEGORY GRID */}
        <Section id="explore-services" background="subtle">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <span className="text-orange-500 text-sm font-sans font-bold uppercase tracking-[0.2em]">Explore Our Services</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-text-heading max-w-2xl mx-auto">We don’t offer isolated services.</h2>
              <p className="text-gray-400 font-sans max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                We build complete revenue systems that identify gaps, fix leaks, and drive predictable growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Growth Audit', 
                  description: 'Identify exactly where your revenue system is leaking — from traffic and tracking to conversion and follow-ups.', 
                  icon: FileSearch,
                  link: '/services/growth-audit'
                },
                { 
                  title: 'Lead Generation', 
                  description: 'Attract high-intent buyers through scalable acquisition systems designed for consistent and qualified lead flow.', 
                  icon: Target,
                  link: '/services/lead-generation'
                },
                { 
                  title: 'Conversion Optimization', 
                  description: 'Turn existing traffic into paying customers by eliminating friction, improving user journeys, and optimizing key conversion points.', 
                  icon: MousePointer2,
                  link: '/services/conversion-optimization'
                },
                { 
                  title: 'Revenue Operations System', 
                  description: 'A fully integrated system that captures, tracks, nurtures, and converts every lead — ensuring no opportunity is lost.', 
                  icon: Workflow,
                  link: '/services/revenue-operations-system',
                  flagship: true
                },
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="h-full"
                >
                  <Card 
                    padding="lg" 
                    className={`h-full flex flex-col relative transition-all duration-300 ${service.flagship ? 'ring-2 ring-orange-500/50 bg-orange-500/10' : ''}`}
                  >
                    {service.flagship && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg">
                        Flagship
                      </div>
                    )}
                    <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500 inline-flex items-center justify-center mb-6 w-fit">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-text-heading">{service.title}</h3>
                    <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <Link to={service.link} className="inline-flex items-center gap-2 text-orange-500 font-sans font-bold group/btn hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 3. WHO WE HELP */}
        <Section id="who-we-help">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <span className="text-orange-500 text-sm font-sans font-bold uppercase tracking-[0.2em]">Who We Help</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-text-heading max-w-2xl mx-auto">Built for Ambitious Brands</h2>
              <p className="text-gray-400 font-sans max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                Our services are built for businesses that need smarter execution and measurable digital growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Startups', text: 'Building their first scalable digital foundation and market presence.', icon: Rocket },
                { title: 'Growing Businesses', text: 'Needing better lead generation and conversion systems to scale.', icon: TrendingUp },
                { title: 'E-commerce Brands', text: 'Looking for stronger campaigns and optimized customer journeys.', icon: ShoppingBag },
                { title: 'Service Companies', text: 'Wanting a more professional online presence and authority.', icon: Briefcase },
                { title: 'Operations Teams', text: 'Ready to improve efficiency through CRM and automation.', icon: Settings },
              ].map((audience, idx) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card padding="md" className="flex items-start gap-6 h-full group">
                    <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500 inline-flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <audience.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-brand-text-heading">{audience.title}</h3>
                      <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-xl">{audience.text}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 4. HOW WE WORK */}
        <Section id="engagement-models" background="subtle">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-text-heading max-w-2xl mx-auto">How We Work</h2>
              <p className="text-gray-400 font-sans max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                A structured approach to identify gaps, fix leaks, and scale your revenue system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Audit & Diagnose', 
                  description: 'We analyze your entire funnel — from traffic and tracking to conversion and follow-ups — to identify exactly where revenue is being lost.',
                  icon: FileSearch
                },
                { 
                  title: 'Build & Optimize', 
                  description: 'We implement and refine acquisition, conversion, and automation systems to turn your existing traffic into measurable revenue.',
                  icon: Zap
                },
                { 
                  title: 'Automate & Scale', 
                  description: 'We build systems that capture, nurture, and convert leads automatically, allowing you to scale without increasing operational complexity.',
                  icon: TrendingUp
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card padding="xl" className="h-full group">
                    <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500 inline-flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-text-heading">{step.title}</h3>
                    <p className="text-gray-400 font-sans leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FINAL CTA SECTION */}
        <Section id="final-cta" className="relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" className="text-center space-y-10 relative overflow-hidden border-orange-500/20 shadow-2xl shadow-orange-500/5" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                  <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] text-brand-text-heading max-w-4xl mx-auto">
                    Ready to Build Your <br />
                    <span className="text-orange-500">Growth Engine?</span>
                  </h2>
                  <p className="text-gray-400 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    Whether you need a single project or a long-term growth partner, ConversionFoxx is ready to help you scale.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <Button to="/contact" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition w-full sm:w-auto">
                      Get Free Growth Audit
                    </Button>
                    <Button to="/" variant="secondary" size="lg" className="border border-white/20 hover:border-orange-500 px-6 py-3 rounded-xl w-full sm:w-auto text-white">
                      See How It Works
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

export default Services;
