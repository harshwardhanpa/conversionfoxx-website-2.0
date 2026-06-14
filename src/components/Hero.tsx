import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import { useResponsiveAnimation } from './utils/useResponsiveAnimation';

const DashboardMockup = lazy(() => import('./DashboardMockup'));

const Hero: React.FC = () => {
  const { getTransition, getViewport, adjustY, adjustX } = useResponsiveAnimation();
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/5 via-transparent to-transparent opacity-40 pointer-events-none" />
      
      {/* Liquid Glass Highlights */}
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-[#FF6A00]/8 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[480px] h-[480px] bg-[#E63900]/4 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[15%] w-24 h-24 glass rounded-full hidden lg:block liquid-glass blur-[0.5px]" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 min-h-[700px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: adjustY(15) }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition({ duration: 0.8, ease: [0.16, 1, 0.3, 1] })}
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
        </motion.div>

        {/* Right Side: Dashboard Visual Layout Boundaries to Crush CLS */}
        <motion.div
          initial={{ opacity: 0, x: adjustX(15) }}
          animate={{ opacity: 1, x: 0 }}
          transition={getTransition({ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] })}
          className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[520px] aspect-[4/5] sm:aspect-[4/5]"
        >
          <Suspense fallback={
            <div className="w-full h-full rounded-2xl bg-white/[0.02] border border-white/10 animate-pulse flex flex-col justify-between p-6">
              <div className="h-6 bg-white/5 rounded w-1/3" />
              <div className="space-y-4 flex-grow justify-center flex flex-col">
                <div className="h-24 bg-white/5 rounded w-full" />
                <div className="h-20 bg-white/5 rounded w-full" />
              </div>
              <div className="h-8 bg-white/5 rounded w-full" />
            </div>
          }>
            <DashboardMockup />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
