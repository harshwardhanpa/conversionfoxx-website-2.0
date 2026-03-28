import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* ... existing layers ... */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Layer 2: Core Horizon Light (Controlled) */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[80%] h-[250px] bg-[radial-gradient(ellipse_at_center,_rgba(242,110,34,0.15)_0%,_transparent_70%)] blur-[60px] pointer-events-none" />

      {/* Layer 3: Inner Light Band (Subtle) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-[radial-gradient(ellipse_at_center,_rgba(242,110,34,0.25)_0%,_transparent_80%)] blur-[10px] opacity-20 pointer-events-none" />

      {/* Layer 4: Fade Control (Dark Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark/60 pointer-events-none" />

      {/* Contrast Control: Lighten Left, Darken Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.005] via-transparent to-black/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Growth System Architects
          </div>
          
          <div className="space-y-10">
            <h1 className="font-bold tracking-tight leading-[0.9] text-brand-text-heading">
              <span className="text-5xl md:text-6xl lg:text-7xl block mb-3 opacity-80">Architecting</span>
              <span className="text-6xl md:text-7xl lg:text-8xl brand-gradient-text block">
                Digital Revenue.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-text-secondary max-w-xl font-light leading-relaxed">
              We build high-performance growth systems that transform traffic into predictable, scalable revenue engines.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
            <Button to="/contact" size="xl" icon={ArrowRight}>
              Get Free Growth Audit
            </Button>
            <Button variant="secondary" size="xl" onClick={scrollToProcess}>
              See How It Works
            </Button>
          </div>
        </motion.div>

        {/* Right side remains empty for cinematic balance */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
