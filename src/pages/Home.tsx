import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useSEO } from '../components/utils/useSEO';
import Hero from '../components/Hero';
import Logos from '../components/Logos';

// Lazy load below-the-fold components
const Services = lazy(() => import('../components/Services'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Results = lazy(() => import('../components/Results'));
const CaseStudies = lazy(() => import('../components/CaseStudies'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Process = lazy(() => import('../components/Process'));
const TechStack = lazy(() => import('../components/TechStack'));
const Blog = lazy(() => import('../components/Blog'));
const FinalCTA = lazy(() => import('../components/FinalCTA'));

// Intersection Observer wrapper to avoid blocking main thread paint for below-fold modules
const LazySection: React.FC<{ children: React.ReactNode; fallbackMinHeight?: string }> = ({ 
  children, 
  fallbackMinHeight = '200px' 
}) => {
  const [isNear, setIsNear] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '250px 0px', // Pre-load slightly before scrolling into view
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isNear ? 'auto' : fallbackMinHeight }}>
      {isNear ? (
        <Suspense fallback={<div className="h-24 animate-pulse bg-white/5 rounded-2xl" />}>
          {children}
        </Suspense>
      ) : (
        <div className="h-24 animate-pulse bg-white/5 rounded-2xl" />
      )}
    </div>
  );
};

const Home: React.FC = () => {
  useSEO({
    title: 'ConversionFoxx | Predictable Growth Systems',
    description: 'ConversionFoxx helps high-growth businesses scale through systematic optimization, systematic B2B lead generation, and CRM automation system design.',
    canonical: '/'
  });

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
      <LazySection fallbackMinHeight="400px">
        <Services />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="300px">
        <WhyChooseUs />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="300px">
        <Results />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="400px">
        <CaseStudies />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="300px">
        <Testimonials />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="400px">
        <Process />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="250px">
        <TechStack />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="300px">
        <Blog />
      </LazySection>
      
      <div className="section-divider" />
      <LazySection fallbackMinHeight="250px">
        <FinalCTA />
      </LazySection>
    </>
  );
};

export default Home;
