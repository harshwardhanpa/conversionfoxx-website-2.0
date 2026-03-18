import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Layout as LayoutIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const contactOptions = [
    {
      title: 'Email Us',
      description: 'Send us your requirements, questions, or project goals and we’ll get back to you with clarity.',
      info: 'hello@conversionfoxx.com',
      icon: <Mail className="w-6 h-6 text-brand-orange" />,
      delay: 0.1
    },
    {
      title: 'Book a Consultation',
      description: 'Start with a focused conversation about your business goals, digital gaps, and growth opportunities.',
      info: 'Schedule a Call',
      icon: <Calendar className="w-6 h-6 text-brand-orange" />,
      delay: 0.2
    },
    {
      title: 'Business Inquiries',
      description: 'For partnerships, proposals, and long-term collaboration opportunities.',
      info: 'Partnership Desk',
      icon: <Briefcase className="w-6 h-6 text-brand-orange" />,
      delay: 0.3
    },
    {
      title: 'Quick Response',
      description: 'Share the basics and we’ll guide you to the right service or next action.',
      info: 'Fast-track Inquiry',
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      delay: 0.4
    }
  ];

  const whyContactUs = [
    {
      title: 'Clear Strategic Direction',
      description: 'We don’t just build; we plan. Every project starts with a clear roadmap aligned with your business objectives.',
      icon: <Globe className="w-6 h-6 text-brand-orange" />
    },
    {
      title: 'Connected Tech + Growth Thinking',
      description: 'We bridge the gap between technical execution and marketing growth to ensure your systems actually drive revenue.',
      icon: <TrendingUp className="w-6 h-6 text-brand-orange" />
    },
    {
      title: 'Practical, Business-Focused Execution',
      description: 'No fluff, no over-engineering. We focus on high-impact solutions that solve real business challenges efficiently.',
      icon: <LayoutIcon className="w-6 h-6 text-brand-orange" />
    },
    {
      title: 'Scalable Solutions for Modern Brands',
      description: 'Our systems are built to grow with you. We ensure your digital foundation can handle future expansion.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />
    }
  ];

  const nextSteps = [
    {
      step: '01',
      title: 'We Review Your Inquiry',
      description: 'Our team analyzes your requirements to understand the scope and objectives of your project.'
    },
    {
      step: '02',
      title: 'We Understand Your Needs',
      description: 'We reach out for a brief discovery call to dive deeper into your challenges and goals.'
    },
    {
      step: '03',
      title: 'We Recommend the Right Path',
      description: 'We present a tailored strategy and solution that addresses your specific needs and budget.'
    },
    {
      step: '04',
      title: 'We Plan the Next Step Together',
      description: 'Once aligned, we define the project timeline, milestones, and kick-off the execution phase.'
    }
  ];

  const faqs = [
    {
      question: 'How soon can we get started?',
      answer: 'Typically, we can begin the discovery phase within 3-5 business days of our initial consultation. Project kick-off depends on the current pipeline and the complexity of your requirements.'
    },
    {
      question: 'Do you work with businesses of different sizes?',
      answer: 'Yes, we work with ambitious startups, growing mid-market companies, and established enterprises. Our solutions are tailored to the specific scale and needs of each client.'
    },
    {
      question: 'Can I contact you even if I’m not sure which service I need?',
      answer: 'Absolutely. Many of our clients start with a general growth challenge. We’ll help you diagnose the gaps and recommend the most effective services to achieve your goals.'
    },
    {
      question: 'Do you handle both strategy and execution?',
      answer: 'Yes, we are a full-service partner. We provide the strategic thinking to define the "what" and "why," and the technical expertise to execute the "how."'
    },
    {
      question: 'Can projects include multiple services together?',
      answer: 'Most of our high-impact projects are multi-service. For example, combining Web Development with CRM Solutions and Paid Advertising creates a much stronger growth engine than any single service alone.'
    }
  ];

  return (
    <>
      <div className="relative z-10">
        {/* 1. CONTACT HERO */}
        <section className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                  </span>
                  Let's Connect
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Let’s Build Something That <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                    Moves Your Business
                  </span> Forward
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                  Whether you need better systems, stronger digital presence, or growth-focused execution, ConversionFoxx is ready to help you move with clarity and confidence.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="#contact-form" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 107, 0, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
                    >
                      Start the Conversation
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </a>
                  <Link to="/services" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full glass text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
                    >
                      Explore Services
                    </motion.button>
                  </Link>
                </div>
                <p className="text-white/40 text-sm italic">
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
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">New Message</div>
                        <div className="text-xs text-white/40">From: Potential Client</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 translate-x-8">
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Project Scope</div>
                        <div className="text-xs text-white/40">Status: Analyzing...</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 translate-x-4">
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Meeting Scheduled</div>
                        <div className="text-xs text-white/40">Tomorrow at 10:00 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/10 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. CONTACT OPTIONS SECTION */}
        <section className="py-24 px-4 md:px-8 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How You Can Reach Us</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Multiple ways to connect without friction. Choose the one that fits your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactOptions.map((option, idx) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: option.delay }}
                  className="glass p-8 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <div className="group-hover:text-white transition-colors">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{option.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                    {option.description}
                  </p>
                  <div className="text-brand-orange font-bold text-sm tracking-wide uppercase">
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
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tell Us About Your Project</h2>
                  <p className="text-white/60 max-w-2xl mx-auto">Share a few details and our team will reach out with the most relevant next step.</p>
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
                          <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                            <User className="w-4 h-4 text-brand-orange" />
                            Full Name
                          </label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                            <Building className="w-4 h-4 text-brand-orange" />
                            Company Name
                          </label>
                          <input
                            required
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleInputChange}
                            placeholder="Acme Corp"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-brand-orange" />
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-brand-orange" />
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-brand-orange" />
                            Service Needed
                          </label>
                          <select
                            required
                            name="service"
                            value={formState.service}
                            onChange={handleInputChange}
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-brand-dark">Select a service</option>
                            <option value="social-media" className="bg-brand-dark">Social Media Management</option>
                            <option value="web-dev" className="bg-brand-dark">Web Development</option>
                            <option value="app-dev" className="bg-brand-dark">App Development</option>
                            <option value="paid-ads" className="bg-brand-dark">Paid Advertising</option>
                            <option value="crm" className="bg-brand-dark">CRM Solutions</option>
                            <option value="multiple" className="bg-brand-dark">Multiple Services</option>
                            <option value="not-sure" className="bg-brand-dark">Not Sure Yet</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-brand-orange" />
                            Project Budget
                          </label>
                          <select
                            required
                            name="budget"
                            value={formState.budget}
                            onChange={handleInputChange}
                            className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all appearance-none cursor-pointer"
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
                        <label className="text-sm font-bold text-white/70 ml-1 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-brand-orange" />
                          Project Details / Message
                        </label>
                        <textarea
                          required
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows={5}
                          placeholder="Tell us about your challenges and what you're looking to achieve..."
                          className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all resize-none"
                        ></textarea>
                      </div>
                      <div className="pt-4 text-center">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full md:w-auto bg-brand-orange text-white px-16 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20 transition-all disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Inquiry
                              <ArrowRight className="w-6 h-6" />
                            </>
                          )}
                        </motion.button>
                        <p className="mt-6 text-white/30 text-sm flex items-center justify-center gap-2">
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
                      <div className="w-24 h-24 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-12 h-12 text-brand-orange" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-4xl font-bold">Inquiry Sent Successfully!</h3>
                        <p className="text-white/60 text-lg max-w-md mx-auto">
                          Thank you for reaching out, {formState.name.split(' ')[0]}. Our team has received your details and will get back to you within 24 hours.
                        </p>
                      </div>
                      <div className="pt-4">
                        <Link to="/">
                          <button className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all">
                            Back to Home
                          </button>
                        </Link>
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Businesses Reach Out to ConversionFoxx</h2>
              <p className="text-white/60 max-w-2xl mx-auto">We focus on the intersection of technical excellence and business growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyContactUs.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-500 text-center group"
                >
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-orange transition-all duration-500">
                    <div className="group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What Happens Next</h2>
              <p className="text-white/60 max-w-2xl mx-auto">We’ve streamlined our onboarding to get your project moving quickly and clearly.</p>
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
                  <div className="glass p-10 rounded-[2.5rem] border-white/5 h-full hover:border-brand-orange/20 transition-all duration-500">
                    <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-brand-orange/10 transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">
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
                <h2 className="text-4xl font-bold tracking-tight">Business Information</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  We work with businesses looking for focused execution, stronger systems, and measurable digital growth.
                </p>
                <div className="w-20 h-1 bg-brand-orange rounded-full" />
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-lg font-bold">hello@conversionfoxx.com</div>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-lg font-bold">+00 0000 000 000</div>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Business Hours</div>
                    <div className="text-lg font-bold">Mon – Fri, 9 AM – 6 PM</div>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Location</div>
                    <div className="text-lg font-bold">Remote / Serving Globally</div>
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-white/60">Common questions about starting a project with ConversionFoxx.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass rounded-2xl border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      {activeFaq === idx ? (
                        <Minus className="w-4 h-4 text-brand-orange" />
                      ) : (
                        <Plus className="w-4 h-4 text-brand-orange" />
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
                        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-24 rounded-[4rem] text-center border-brand-orange/20 shadow-2xl shadow-brand-orange/5"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Have a Project <span className="text-brand-orange text-glow">in Mind?</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Let’s turn your ideas, challenges, or growth goals into a clear and practical next step.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#contact-form">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/30 transition-all"
                  >
                    Send Inquiry
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </a>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto glass text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all"
                  >
                    Back to Home
                  </motion.button>
                </Link>
              </div>
              <div className="mt-10">
                <Link to="/services" className="text-brand-orange hover:text-brand-orange/80 font-bold flex items-center justify-center gap-2 transition-colors group">
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
