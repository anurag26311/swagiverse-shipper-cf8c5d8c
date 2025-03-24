
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EmployeeSwag from '@/components/EmployeeSwag';
import CallToAction from '@/components/CallToAction';
import GiftingProcess from '@/components/GiftingProcess';
import Kitting from '@/components/Kitting';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Handle lazy loading of images
    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imgObserver.unobserve(img);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach((img) => imgObserver.observe(img));

    return () => {
      observer.disconnect();
      imgObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <EmployeeSwag />
      <CallToAction />
      <GiftingProcess />
      <Kitting />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
