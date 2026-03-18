import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

/**
 * Shared site-wide navigation bar with sticky glassmorphism.
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled ? 'pt-3 pb-3' : 'pt-6 pb-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'glass shadow-2xl shadow-brand-orange/5 py-3 px-6' 
            : 'bg-transparent py-2 px-4'
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors duration-300">
              Conversion<span className="text-brand-orange">Foxx</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => `
                    text-sm font-medium transition-colors duration-300 relative group
                    ${isActive ? 'text-brand-orange' : 'text-white/70 hover:text-brand-orange'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button to="/contact" size="sm" icon={ArrowRight}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 glass rounded-2xl p-6 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => `
                      text-lg font-medium transition-colors block py-2
                      ${isActive ? 'text-brand-orange' : 'text-white/80 hover:text-brand-orange'}
                    `}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t border-white/10"
              >
                <Button to="/contact" className="w-full" size="lg" icon={ArrowRight}>
                  Let's Talk
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
