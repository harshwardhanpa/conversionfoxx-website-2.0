import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import { useResponsiveAnimation } from './utils/useResponsiveAnimation';

const DashboardMockup = lazy(() => import('./DashboardMockup'));

const Hero: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-auto min-h-screen flex flex-col justify-center pt-32 pb-32 lg:pb-24 overflow-hidden bg-brand-dark">
      {/* Background Layers & Visual Depth */}
      <div className="absolute inset-0 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/5 via-transparent to-transparent opacity-40 pointer-events-none" />
        
        {/* Animated Lighting Effects */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#FF6A00]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#E63900]/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" 
        />
      </div>
      
      {/* Floating Decorative Elements */}
      <div 
        className="absolute top-[25%] left-[15%] w-24 h-24 glass rounded-full hidden lg:block liquid-glass blur-[0.5px] animate-float" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 w-full mt-10 md:mt-0">
        {/* Left Content */}
        <div
          className="flex flex-col justify-center text-center lg:text-left animate-fade-in-up"
        >
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] w-fit mx-auto lg:mx-0 glass liquid-glass">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise Growth Infrastructure
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tighter leading-[1.05] text-brand-text-heading font-display">
                Engineering Predictable <br />
                <span className="bg-gradient-to-r from-[#FF6A00] via-[#FFA200] to-[#E63900] bg-clip-text text-transparent">Revenue Scale.</span>
              </h1>
              
              <p className="text-base md:text-lg text-brand-text-secondary max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed font-sans opacity-90 tracking-tight">
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
        </div>

        {/* Right Side: Dashboard Visual Layout Boundaries to Crush CLS */}
        <div
          className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[520px] h-auto flex flex-col justify-center animate-fade-in-left-delay"
        >
          <Suspense fallback={
            <div className="w-full h-[420px] lg:h-[500px] rounded-2xl bg-white/[0.02] border border-white/5 animate-pulse flex flex-col justify-between p-6">
              <div className="h-4 bg-white/5 rounded w-1/4" />
              <div className="space-y-4 flex-grow flex flex-col justify-center">
                <div className="h-16 bg-white/5 rounded w-full" />
                <div className="h-40 bg-white/5 rounded w-full" />
              </div>
            </div>
          }>
            <DashboardMockup />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
