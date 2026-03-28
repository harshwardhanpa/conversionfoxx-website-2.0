import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const FinalCTA: React.FC = () => {
  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-24 rounded-[3rem] text-center space-y-10 relative overflow-hidden border-brand-primary/20"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mx-auto">
              <Sparkles className="w-4 h-4" />
              Ready to Scale Your Revenue?
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Stop guessing. <br />
              Start growing.
            </h2>
            
            <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Our Growth Architects are ready to audit your system and build a high-performance revenue engine that scales predictably.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button to="/contact" size="xl" icon={ArrowRight}>
                Get Free Growth Audit
              </Button>
              <Button variant="secondary" size="xl" onClick={scrollToProcess}>
                See How It Works
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
