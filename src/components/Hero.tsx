import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Growth-First IT Agency
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            We Don’t Just Build Digital Products — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
              We Build Revenue Engines
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed">
            From strategy to execution, ConversionFoxx helps businesses scale faster with powerful tech, data-driven marketing, and conversion-focused solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 107, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Let’s Talk
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Explore Services
            </motion.button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-sm font-bold tracking-tighter uppercase">Trusted by</div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex gap-6">
              <span className="font-bold text-xl">TECHCORP</span>
              <span className="font-bold text-xl">GROWTHLY</span>
              <span className="font-bold text-xl">NEXUS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract Visual Element */}
          <div className="relative z-10 glass rounded-[2.5rem] p-4 shadow-2xl border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="bg-brand-dark/50 rounded-[2rem] p-8 aspect-square flex flex-col gap-6">
              {/* Mock Dashboard UI */}
              <div className="flex justify-between items-center">
                <div className="w-32 h-4 bg-white/10 rounded-full" />
                <div className="w-8 h-8 bg-brand-orange/20 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 glass rounded-2xl p-4 flex flex-col justify-end gap-2">
                  <div className="w-12 h-2 bg-brand-orange/40 rounded-full" />
                  <div className="text-2xl font-bold">+320%</div>
                </div>
                <div className="h-24 glass rounded-2xl p-4 flex flex-col justify-end gap-2">
                  <div className="w-12 h-2 bg-white/20 rounded-full" />
                  <div className="text-2xl font-bold">5.2k</div>
                </div>
              </div>
              <div className="flex-1 glass rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end gap-2 p-4">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-brand-orange to-orange-400/50 rounded-t-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 glass rounded-3xl flex items-center justify-center shadow-2xl z-20"
          >
            <div className="text-brand-orange font-bold text-3xl">🚀</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-40 h-24 glass rounded-3xl p-4 shadow-2xl z-20 flex flex-col justify-center"
          >
            <div className="text-xs text-white/40 font-bold uppercase tracking-widest">Conversion Rate</div>
            <div className="text-2xl font-bold text-emerald-400">+12.5%</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
