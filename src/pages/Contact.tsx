import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '../components/ui/Button';
import { 
  Mail, 
  Calendar, 
  Briefcase, 
  Zap, 
  User, 
  Building, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Plus, 
  Minus, 
  ArrowRight, 
  ChevronRight,
  Globe,
  ShieldCheck,
  TrendingUp,
  Layout as LayoutIcon,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { inquiryService } from '../services/inquiryService';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [settings, setSettings] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await inquiryService.getSettings();
        setSettings(data);
      } catch (err) {
        console.error('Error fetching contact settings:', err);
      }
    };
    fetchSettings();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await inquiryService.createInquiry({
        name: formState.name,
        email: formState.email,
        service: formState.service,
        budget: formState.budget,
        message: formState.message
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setError(settings?.error_message || 'Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const contactOptions = [
    {
      title: 'Email Us',
      description: 'Send us your requirements, questions, or project goals and we’ll get back to you with clarity.',
      info: 'hello@conversionfoxx.com',
      icon: <Mail className="w-6 h-6 text-brand-primary" />,
      delay: 0.1
    },
    {
      title: 'Book a Consultation',
      description: 'Start with a focused conversation about your business goals, digital gaps, and growth opportunities.',
      info: 'Schedule a Call',
      icon: <Calendar className="w-6 h-6 text-brand-primary" />,
      delay: 0.2
    },
    {
      title: 'Business Inquiries',
      description: 'For partnerships, proposals, and long-term collaboration opportunities.',
      info: 'Partnership Desk',
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />,
      delay: 0.3
    },
    {
      title: 'Quick Response',
      description: 'Share the basics and we’ll guide you to the right service or next action.',
      info: 'Fast-track Inquiry',
      icon: <Zap className="w-6 h-6 text-brand-primary" />,
      delay: 0.4
    }
  ];

  const whyContactUs = [
    {
      title: 'Clear Strategic Direction',
      description: 'We don’t just build; we plan. Every project starts with a clear roadmap aligned with your business objectives.',
      icon: <Globe className="w-6 h-6 text-brand-primary" />
    },
    {
      title: 'Connected Revenue Thinking',
      description: 'We bridge the gap between traffic and revenue to ensure your systems actually scale your business.',
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />
    },
    {
      title: 'Practical, Business-Focused Execution',
      description: 'No fluff, no over-engineering. We focus on high-impact solutions that solve real business challenges efficiently.',
      icon: <LayoutIcon className="w-6 h-6 text-brand-primary" />
    },
    {
      title: 'Scalable Solutions for Modern Brands',
      description: 'Our systems are built to grow with you. We ensure your digital foundation can handle future expansion.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    }
  ];

  const nextSteps = [
    {
      step: '01',
      title: 'Growth Audit',
      description: 'We perform a preliminary analysis of your growth system to identify immediate opportunities.'
    },
    {
      step: '02',
      title: 'Discovery Call',
      description: 'We dive deep into your business model, revenue goals, and current bottlenecks.'
    },
    {
      step: '03',
      title: 'System Architecture',
      description: 'We present a tailored roadmap and system design to scale your revenue predictably.'
    },
    {
      step: '04',
      title: 'Execution & Launch',
      description: 'Once aligned, we begin building and optimizing your high-performance growth engine.'
    }
  ];

  const faqs = [
    {
      question: 'What is a Growth Audit?',
      answer: 'A Growth Audit is a deep analysis of your entire revenue engine. We look at your traffic sources, funnel conversion rates, and tracking infrastructure to find where you are losing money and where the biggest opportunities for growth are.'
    },
    {
      question: 'How is this different from a marketing agency?',
      answer: 'Traditional agencies focus on tactics like "running ads" or "posting on social." We focus on systems. We architect the entire Revenue Operations System that connects your traffic to your bottom line, ensuring every dollar spent on marketing has a clear path to revenue.'
    },
    {
      question: 'Do you work with businesses of different sizes?',
      answer: 'We typically work with businesses doing $500k to $10M in annual revenue that are looking to scale predictably. However, we also have specific frameworks for high-growth startups.'
    },
    {
      question: 'How soon can we see results?',
      answer: 'Our Growth Audit typically takes 7-10 days. Once we begin implementation, most clients see measurable improvements in lead quality and conversion rates within the first 30-60 days.'
    },
    {
      question: 'What is the Revenue Operations System?',
      answer: 'It is our flagship service. It is a unified system that integrates your lead generation, sales CRM, and data analytics into one high-performance engine. It gives you 100% visibility into your revenue pipeline.'
    }
  ];

  return (
    <>
      <div className="relative z-10">
        {/* 1. CONTACT HERO */}
        <section className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 text-brand-primary text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                  </span>
                  Let's Connect
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] text-brand-text-heading">
                  Let’s Build a <br />
                  <span className="brand-gradient-text">
                    Revenue System
                  </span> That Scales
                </h1>
                <p className="text-lg md:text-xl text-brand-text-secondary font-sans font-normal leading-[1.6] max-w-xl">
                  Whether you need a Growth Audit, high-performance Lead Generation, or a complete Revenue Operations System, ConversionFoxx is ready to help you scale with precision.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button 
                    to="#contact-form" 
                    className="w-full sm:w-auto" 
                    size="xl" 
                    icon={ArrowRight}
                    onClick={() => {
                      const el = document.getElementById('contact-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Free Growth Audit
                  </Button>
                  <Button 
                    to="/services" 
                    variant="secondary" 
                    className="w-full sm:w-auto" 
                    size="xl"
                  >
                    See How It Works
                  </Button>
                </div>
                <p className="text-brand-text-secondary/40 text-sm font-sans italic">
                  “Tell us what you need. We’ll help you find the right next step.”
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 glass p-8 rounded-[3rem] border-white/10 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5">
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-display font-bold text-brand-text-heading">New Message</div>
                        <div className="text-xs text-brand-text-secondary font-sans">From: Potential Client</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 translate-x-8">
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-display font-bold text-brand-text-heading">Project Scope</div>
                        <div className="text-xs text-brand-text-secondary font-sans">Status: Analyzing...</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 translate-x-4">
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-display font-bold text-brand-text-heading">Meeting Scheduled</div>
                        <div className="text-xs text-brand-text-secondary font-sans">Tomorrow at 10:00 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. CONTACT OPTIONS SECTION */}
        <section className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-brand-text-heading">How You Can Reach Us</h2>
              <p className="text-brand-text-secondary font-sans max-w-2xl mx-auto text-lg leading-[1.6]">Multiple ways to connect without friction. Choose the one that fits your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactOptions.map((option, idx) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: option.delay }}
                  className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <div className="group-hover:text-white transition-colors">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors text-brand-text-heading">{option.title}</h3>
                  <p className="text-brand-text-secondary font-sans text-sm leading-[1.6] mb-6 group-hover:text-brand-text-secondary transition-colors">
                    {option.description}
                  </p>
                  <div className="text-brand-primary font-sans font-bold text-[10px] tracking-[0.2em] uppercase">
                    {option.info}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CONTACT FORM SECTION */}
        <section id="contact-form" className="py-24 px-4 md:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="glass p-8 md:p-16 rounded-[3rem] border-white/5 shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-brand-text-heading">Tell Us About Your Project</h2>
                  <p className="text-brand-text-secondary font-sans text-lg leading-[1.6] max-w-2xl mx-auto">Share a few details and our team will reach out with the most relevant next step.</p>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                            <User className="w-4 h-4 text-brand-primary" />
                            Full Name
                          </label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans placeholder:text-brand-text-secondary/20 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                            <Building className="w-4 h-4 text-brand-primary" />
                            Company Name
                          </label>
                          <input
                            required
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleInputChange}
                            placeholder="Acme Corp"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans placeholder:text-brand-text-secondary/20 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-brand-primary" />
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans placeholder:text-brand-text-secondary/20 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-brand-primary" />
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans placeholder:text-brand-text-secondary/20 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-brand-primary" />
                            Service Needed
                          </label>
                          <select
                            required
                            name="service"
                            value={formState.service}
                            onChange={handleInputChange}
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-brand-dark">Select a service</option>
                            <option value="growth-audit" className="bg-brand-dark">Growth Audit</option>
                            <option value="lead-gen" className="bg-brand-dark">Lead Generation</option>
                            <option value="cro" className="bg-brand-dark">Conversion Optimization</option>
                            <option value="rev-ops" className="bg-brand-dark">Revenue Operations System</option>
                            <option value="multiple" className="bg-brand-dark">Multiple Services</option>
                            <option value="not-sure" className="bg-brand-dark">Not Sure Yet</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-brand-primary" />
                            Project Budget
                          </label>
                          <select
                            required
                            name="budget"
                            value={formState.budget}
                            onChange={handleInputChange}
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-brand-dark">Select a budget range</option>
                            <option value="under-1k" className="bg-brand-dark">Under $1,000</option>
                            <option value="1k-3k" className="bg-brand-dark">$1,000 – $3,000</option>
                            <option value="3k-7k" className="bg-brand-dark">$3,000 – $7,000</option>
                            <option value="7k-plus" className="bg-brand-dark">$7,000+</option>
                            <option value="discuss" className="bg-brand-dark">Let’s Discuss</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-text-secondary/70 ml-1 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-brand-primary" />
                          Project Details / Message
                        </label>
                        <textarea
                          required
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows={5}
                          placeholder="Tell us about your challenges and what you're looking to achieve..."
                          className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-brand-text-heading font-sans placeholder:text-brand-text-secondary/20 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none"
                        ></textarea>
                      </div>
                      
                      {error && (
                        <div className="p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center gap-3 text-brand-primary">
                          <AlertCircle size={20} />
                          <p className="text-sm font-sans font-bold">{error}</p>
                        </div>
                      )}

                      <div className="pt-4 text-center">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto font-sans font-bold"
                          size="xl"
                          icon={isSubmitting ? undefined : ArrowRight}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            "Send Inquiry"
                          )}
                        </Button>
                        <p className="mt-6 text-brand-text-secondary/30 text-sm font-sans flex items-center justify-center gap-2">
                          <ShieldCheck className="w-4 h-4" />
                          Your information stays private and is only used to respond to your inquiry.
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-8"
                    >
                      <div className="w-24 h-24 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-12 h-12 text-brand-primary" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-4xl font-display font-bold text-brand-text-heading">Inquiry Sent Successfully!</h3>
                        <p className="text-brand-text-secondary font-sans text-lg max-w-md mx-auto leading-[1.6]">
                          {settings?.success_message || `Thank you for reaching out, ${formState.name.split(' ')[0]}. Our team has received your details and will get back to you within 24 hours.`}
                        </p>
                      </div>

                      <div className="pt-4">
                        <Button to="/" variant="outline">
                          Back to Home
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHY CONTACT US SECTION */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-brand-text-heading">Why Businesses Reach Out to ConversionFoxx</h2>
              <p className="text-brand-text-secondary font-sans max-w-2xl mx-auto text-lg leading-[1.6]">We focus on the intersection of technical excellence and business growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyContactUs.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all duration-500 text-center group"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <div className="group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-primary transition-colors text-brand-text-heading">{item.title}</h3>
                  <p className="text-brand-text-secondary font-sans text-sm leading-[1.6] group-hover:text-brand-text-secondary transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHAT HAPPENS NEXT SECTION */}
        <section className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-brand-text-heading">What Happens Next</h2>
              <p className="text-brand-text-secondary font-sans max-w-2xl mx-auto text-lg leading-[1.6]">We’ve streamlined our onboarding to get your project moving quickly and clearly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nextSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="glass p-10 rounded-[2.5rem] border-white/5 h-full hover:border-brand-primary/20 transition-all duration-500">
                    <div className="text-6xl font-display font-black text-white/5 mb-6 group-hover:text-brand-primary/10 transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4 text-brand-text-heading">{step.title}</h3>
                    <p className="text-brand-text-secondary font-sans text-sm leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                  {idx < nextSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                      <ChevronRight className="w-8 h-8 text-white/10" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CONTACT DETAILS + BUSINESS INFO SECTION */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <h2 className="text-4xl font-display font-bold tracking-tight text-brand-text-heading">Business Information</h2>
                <p className="text-brand-text-secondary font-sans text-lg leading-[1.6]">
                  We work with businesses looking for focused execution, stronger systems, and measurable digital growth.
                </p>
                <div className="w-20 h-1 bg-brand-primary rounded-full" />
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold text-brand-text-secondary/40 uppercase tracking-[0.2em] mb-1">Email</div>
                    <div className="text-lg font-display font-bold text-brand-text-heading">hello@conversionfoxx.com</div>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold text-brand-text-secondary/40 uppercase tracking-[0.2em] mb-1">Phone</div>
                    <div className="text-lg font-display font-bold text-brand-text-heading">+00 0000 000 000</div>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold text-brand-text-secondary/40 uppercase tracking-[0.2em] mb-1">Business Hours</div>
                    <div className="text-lg font-display font-bold text-brand-text-heading">Mon – Fri, 9 AM – 6 PM</div>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans font-bold text-brand-text-secondary/40 uppercase tracking-[0.2em] mb-1">Location</div>
                    <div className="text-lg font-display font-bold text-brand-text-heading">Remote / Serving Globally</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-brand-text-heading">Frequently Asked Questions</h2>
              <p className="text-brand-text-secondary font-sans text-lg leading-[1.6]">Common questions about starting a project with ConversionFoxx.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass rounded-2xl border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-display font-bold text-lg text-brand-text-heading">{faq.question}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      {activeFaq === idx ? (
                        <Minus className="w-4 h-4 text-brand-primary" />
                      ) : (
                        <Plus className="w-4 h-4 text-brand-primary" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-brand-text-secondary font-sans leading-[1.6] border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA SECTION */}
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-24 rounded-[4rem] text-center border-brand-primary/20 shadow-2xl shadow-brand-primary/5"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8 text-brand-text-heading">
                Have a Project <span className="brand-gradient-text">in Mind?</span>
              </h2>
              <p className="text-brand-text-secondary font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 font-normal leading-[1.6]">
                Let’s turn your ideas, challenges, or growth goals into a clear and practical next step.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  to="#contact-form" 
                  size="xl" 
                  icon={ArrowRight}
                  className="font-sans font-bold"
                  onClick={() => {
                    const el = document.getElementById('contact-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Free Growth Audit
                </Button>
                <Button to="/" variant="secondary" size="xl" className="font-sans font-bold">
                  See How It Works
                </Button>
              </div>
              <div className="mt-10">
                <Link to="/services" className="text-brand-primary hover:text-brand-primary/80 font-sans font-bold flex items-center justify-center gap-2 transition-colors group">
                  Explore Services
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
