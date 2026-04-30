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
      
      {/* Liquid Glass Highlights */}
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[20%] w-32 h-32 glass rounded-full hidden lg:block liquid-glass blur-[1px]" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 min-h-[700px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] w-fit mx-auto lg:mx-0 glass liquid-glass">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise Growth Infrastructure
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tighter leading-[1.05] text-brand-text-heading font-display">
                Engineering Predictable <br />
                <span className="text-brand-primary">Revenue Scale.</span>
              </h1>
              
              <p className="text-base md:text-lg text-brand-text-secondary max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed font-sans opacity-90">
                We build the technical and strategic infrastructure needed to transform high-growth companies into predictable revenue engines. Stop guessing—start scaling with mathematical certainty.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 justify-center lg:justify-start">
              <Button to="/contact" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Get Your Growth Audit
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToProcess} className="w-full sm:w-auto">
                The Revenue Framework
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
