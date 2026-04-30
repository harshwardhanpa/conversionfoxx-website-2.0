import React from 'react';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Results from '../components/Results';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-primary/5 blur-[100px] rounded-full" />
      </div>

      <Hero />
      <Logos />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <Results />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Blog />
      <div className="section-divider" />
      <FinalCTA />
    </>
  );
};

export default Home;
