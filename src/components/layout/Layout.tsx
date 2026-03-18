import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Shared structural wrapper used by every page.
 * Handles global background styling, Header, Footer, and ScrollToTop.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-orange selection:text-white overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
