import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
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
  Layers
} from 'lucide-react';

const Services: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('engagement-models');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 pt-32">
        {/* 1. SERVICES HERO */}
        <section id="services-hero" className="min-h-[60vh] flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mx-auto">
                <Sparkles className="w-4 h-4" />
                Our Expertise
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                Services Built to Grow <br />
                <span className="brand-gradient-text">
                  Modern Businesses
                </span>
              </h1>
              <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
                ConversionFoxx delivers growth-focused digital services that combine strategy, technology, and performance. Whether you need stronger visibility, better systems, or scalable digital products, our solutions are designed to move your business forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button to="/contact" size="xl" icon={ArrowRight}>
                  Get Free Growth Audit
                </Button>
                <Button 
                  onClick={scrollToProcess} 
                  variant="secondary" 
                  size="xl"
                >
                  See How It Works
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. SERVICE CATEGORY GRID */}
        <section id="explore-services" className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Explore Our Services</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Choose Your Growth Solution</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Choose the solution that fits your current growth stage, technical needs, and business goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Growth Audit', 
                  description: 'Deep analysis of your entire growth system: funnel gaps, tracking issues, and conversion leaks.', 
                  icon: FileSearch,
                  link: '/services/growth-audit'
                },
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
                  className={`glass p-10 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 group flex flex-col h-full relative ${service.flagship ? 'ring-2 ring-brand-primary/50 bg-brand-primary/5' : ''}`}
                >
                  {service.flagship && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Flagship
                    </div>
                  )}
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:brand-gradient transition-all duration-500">
                    <service.icon className="w-8 h-8 text-brand-primary group-hover:text-brand-dark transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-brand-text-secondary opacity-50 leading-relaxed mb-8 flex-grow group-hover:text-brand-text-secondary group-hover:opacity-100 transition-colors">
                    {service.description}
                  </p>
                  <Link to={service.link} className="inline-flex items-center gap-2 text-brand-primary font-bold group/btn hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHO WE HELP */}
        <section id="who-we-help" className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Who We Help</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Ambitious Brands</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Our services are built for businesses that need smarter execution, stronger systems, and measurable digital growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="glass p-8 rounded-3xl flex items-start gap-6 hover:bg-white/5 transition-colors group border-white/5 hover:border-brand-primary/20"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-colors">
                    <audience.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{audience.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{audience.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ENGAGEMENT MODELS */}
        <section id="engagement-models" className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">How We Work</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Engagement Models</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Flexible ways to partner with us based on your business needs and growth goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Project-Based', 
                  description: 'Ideal for specific deliverables like a new website, app launch, or CRM setup.',
                  features: ['Fixed Scope & Timeline', 'Expert Execution', 'Clear Deliverables'],
                  icon: Clock
                },
                { 
                  title: 'Monthly Retainer', 
                  description: 'Ongoing growth support for social media, paid ads, and continuous optimization.',
                  features: ['Continuous Growth', 'Priority Support', 'Data-Driven Refinement'],
                  icon: Calendar,
                  popular: true
                },
                { 
                  title: 'Strategic Consulting', 
                  description: 'High-level advisory for brands needing a roadmap before full execution.',
                  features: ['Growth Roadmaps', 'Tech Stack Audit', 'Conversion Strategy'],
                  icon: Users
                },
              ].map((model, idx) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative glass p-10 rounded-[3rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col ${model.popular ? 'ring-2 ring-brand-primary/50 bg-brand-primary/5' : ''}`}
                >
                  {model.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8">
                    <model.icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {model.description}
                  </p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    to="/contact" 
                    variant={model.popular ? 'primary' : 'outline'} 
                    className="w-full"
                  >
                    Inquire Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
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
                  Ready to Build Your <br />
                  <span className="brand-gradient-text">Growth Engine?</span>
                </h2>
                <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                  Whether you need a single project or a long-term growth partner, ConversionFoxx is ready to help you scale.
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

export default Services;
