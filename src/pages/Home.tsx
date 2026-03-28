import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Results from '../components/Results';
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
      <Services />
      <WhyChooseUs />
      <Results />
      <Testimonials />
      <Process />
      <TechStack />
      <Blog />
      <FinalCTA />
    </>
  );
};

export default Home;
