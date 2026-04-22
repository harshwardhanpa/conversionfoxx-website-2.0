import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const DashboardMockup = lazy(() => import('./DashboardMockup'));

const Hero: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Background Layers & Visual Depth */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/10 via-transparent to-transparent opacity-30 pointer-events-none" />
      
      {/* Subtle Glow behind dashboard */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] w-fit mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              SaaS Growth Infrastructure
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-[56px] font-black tracking-tighter leading-[1.1] text-brand-text-heading font-display">
                Scalable <br />
                <span className="text-brand-primary">Revenue Systems.</span>
              </h1>
              
              <p className="text-base md:text-lg text-brand-text-secondary max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed font-sans">
                We engineer high-performance systems that transform raw traffic into predictable, automated revenue engines for modern SaaS enterprises.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 justify-center lg:justify-start">
              <Button to="/contact" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Get Growth Audit
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToProcess} className="w-full sm:w-auto">
                How It Works
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Suspense fallback={<div className="w-full aspect-video bg-white/5 rounded-2xl animate-pulse" />}>
            <DashboardMockup />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
