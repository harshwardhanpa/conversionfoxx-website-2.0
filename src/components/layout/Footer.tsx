import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

/**
 * Shared site-wide footer with premium dark glassmorphism style.
 */
const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-brand-dark font-display font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-brand-text-heading group-hover:text-brand-primary transition-colors duration-300">
                Conversion<span className="text-brand-primary">Foxx</span>
              </span>
            </Link>
            <p className="text-brand-text-secondary leading-relaxed text-sm">
              ConversionFoxx is a premium IT and growth agency dedicated to building digital ecosystems that actually drive results. We bridge the gap between technology and business growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#BF4417' }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-text-secondary hover:text-brand-primary transition-colors"
                  aria-label={`Social Media Link ${i + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-display font-bold text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-sans text-white/40 hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-lg font-display font-bold text-white uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Growth Audit', href: '/services/growth-audit' },
                { name: 'Lead Generation', href: '/services/lead-generation' },
                { name: 'Conversion Optimization', href: '/services/conversion-optimization' },
                { name: 'Revenue Operations System', href: '/services/revenue-operations-system' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-sm font-sans text-white/40 hover:text-brand-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-display font-bold text-white uppercase tracking-widest">Contact Info</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/20 font-sans font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <a href="mailto:hello@conversionfoxx.com" className="text-sm font-sans text-white/60 hover:text-brand-primary transition-colors">
                    hello@conversionfoxx.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/20 font-sans font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <a href="tel:+1234567890" className="text-sm font-sans text-white/60 hover:text-brand-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/20 font-sans font-bold uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-sm font-sans text-white/60">
                    123 Digital Avenue, Tech City, TC 12345
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="text-white/20 text-xs font-sans font-bold uppercase tracking-widest">
            &copy; 2026 ConversionFoxx IT Solutions. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link to="/terms" className="text-xs font-sans text-white/20 font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-xs font-sans text-white/20 font-bold uppercase tracking-widest hover:text-brand-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
