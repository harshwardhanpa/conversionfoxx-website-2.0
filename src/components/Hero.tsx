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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Subtle Glow behind dashboard - Removed blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 py-12 md:py-20 lg:py-0">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] w-fit mx-auto lg:mx-0">
              <Sparkles className="w-3 h-3" />
              Growth System Architects
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-brand-text-heading font-display">
                Architecting <br />
                <span className="text-brand-primary">Digital Revenue.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-text-secondary max-w-xl mx-auto lg:mx-0 font-normal leading-[1.6] font-sans">
                We build high-performance growth systems that transform traffic into predictable, scalable revenue engines.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button to="/contact" size="lg" icon={ArrowRight} fullWidth className="sm:w-auto">
                Get Free Growth Audit
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToProcess} fullWidth className="sm:w-auto">
                See How It Works
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
