import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

// ✨ REFERENCES:
// - Motion/React (motion.dev) - Core animation library
// - Apple Liquid Glass (2025) - Fluid, organic animations
// - A.E.Studio (Framer) - Letter floating/rearranging on hover
// - Dribbble glassmorphism widgets - Card styling
// - Motion Primitives by shadcn - Text reveal patterns

const GradualText = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        damping: 12,
        stiffness: 100,
      }}
    >
      {children}
    </motion.span>
  );
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += (Math.random() - 0.5) * 0.02;
        p.opacity = Math.max(0.05, Math.min(0.5, p.opacity));

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(242, 125, 38, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  );
};

const Hero: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-brand-dark via-brand-dark to-brand-dark">
      {/* ✨ PARTICLE BACKGROUND - Unique animated particles */}
      <ParticleBackground />

      {/* GLASSMORPHISM GLOWS - Inspired by Apple Liquid Glass */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[10%] w-96 h-96 bg-brand-primary/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-brand-primary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"
      />

      {/* FLOATING GLASS SHAPES - Liquid glass aesthetic */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[20%] left-[15%] w-40 h-40 border border-brand-primary/10 rounded-full backdrop-blur-md mix-blend-screen pointer-events-none hidden lg:block"
      />

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* BADGE WITH PULSE EFFECT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/8 backdrop-blur-xl text-brand-primary text-xs font-bold uppercase tracking-widest mb-8 glass"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-brand-primary rounded-full"
          />
          Enterprise Growth Infrastructure
        </motion.div>

        {/* HERO HEADLINE - Staggered word reveal */}
        <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-brand-text-heading font-display mb-6 max-w-4xl">
          <GradualText delay={0.1}>Engineering</GradualText>{' '}
          <GradualText delay={0.2}>Predictable</GradualText>{' '}
          <motion.span
            className="text-brand-primary inline-block"
            animate={{ textShadow: ['0 0 20px rgba(242, 125, 38, 0)', '0 0 30px rgba(242, 125, 38, 0.6)', '0 0 20px rgba(242, 125, 38, 0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <GradualText delay={0.3}>Revenue</GradualText>
          </motion.span>{' '}
          <GradualText delay={0.4}>Scale.</GradualText>
        </motion.h1>

        {/* SUBTITLE - Fade in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-brand-text-secondary max-w-2xl mx-auto font-medium leading-relaxed mb-12 opacity-90"
        >
          We build the technical and strategic infrastructure needed to transform high-growth companies into predictable revenue engines. Stop guessing—start scaling with mathematical certainty.
        </motion.p>

        {/* CTA BUTTONS - Staggered with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', damping: 12 }}
          >
            <Button
              to="/contact"
              size="lg"
              icon={ArrowRight}
              className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20 group"
            >
              <span>Get Your Growth Audit</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="group-hover:translate-x-1"
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, borderColor: 'rgba(242, 125, 38, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', damping: 12 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToProcess}
              className="border border-brand-primary/20 hover:border-brand-primary/50 hover:bg-brand-primary/5"
            >
              The Revenue Framework
            </Button>
          </motion.div>
        </motion.div>

        {/* STATS - Animated counters with glassmorphism cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {[
            { number: '150+', label: 'Projects', icon: '🚀' },
            { number: '80+', label: 'Clients', icon: '⭐' },
            { number: '$12M+', label: 'Generated', icon: '💰' },
            { number: '99%', label: 'Uptime', icon: '✅' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + idx * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(242, 125, 38, 0.4)' }}
              className="p-4 rounded-2xl border border-brand-primary/15 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl glass group cursor-pointer transition-all duration-300"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-xl font-bold text-brand-primary font-display">{stat.number}</div>
              <div className="text-xs text-brand-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SCROLL INDICATOR - Animated arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-primary/50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
