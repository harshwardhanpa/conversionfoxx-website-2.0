import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-24 rounded-[3rem] text-center space-y-10 relative overflow-hidden border-brand-orange/20"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mx-auto">
              <Sparkles className="w-4 h-4" />
              Ready to Scale Your Business?
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Let’s build something that <br />
              <span className="text-brand-orange">actually drives results.</span>
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Stop guessing and start growing. Our team of experts is ready to help you build a high-performance digital ecosystem that converts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 107, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-brand-orange text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all"
              >
                Let’s Talk
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto glass text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
