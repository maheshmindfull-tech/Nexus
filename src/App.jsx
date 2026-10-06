import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Principles from './components/Principles';
import SliderSection from './components/SliderSection';
import ProjectsSection from './components/ProjectsSection';
import Testimonials from './components/Testimonials';
import LifestyleBanner from './components/LifestyleBanner';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import AboutPage from './components/AboutPage';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (
        hash === '#about' ||
        hash === '#about-us' ||
        hash === '#about-page' ||
        window.location.pathname.endsWith('about.html')
      ) {
        return 'about';
      }
    }
    return 'home';
  });

  // Sync hash changes with page view
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash === '#about-us' || hash === '#about-page') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, section) => {
    if (page === 'about') {
      setCurrentPage('about');
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (section) {
        window.location.hash = `#${section}`;
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] flex flex-col font-sans selection:bg-[#0097a7] selection:text-white">
      {/* Universal Fixed Navigation Bar across all pages */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquire={() => setEnquireOpen(true)}
      />

      {currentPage === 'about' ? (
        /* DEDICATED ABOUT US PAGE */
        <AboutPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : (
        /* HOME PAGE */
        <>
          <main className="flex-1">
            {/* 1. Hero */}
            <Hero onOpenEnquire={() => setEnquireOpen(true)} />

            {/* 2. About us & 30 Years Stats with link to full About Us page */}
            <AboutStats onNavigateAbout={() => handleNavigate('about')} />

            {/* 3. Nexus Principles */}
            <Principles />

            {/* 4. Interactive Slider: Skydale, Kinara, Prime Square, Westia, Genesis */}
            <SliderSection />

            {/* 5. Our Projects */}
            <ProjectsSection />

            {/* 6. Testimonials */}
            <Testimonials />

            {/* 7. CTA Image */}
            <LifestyleBanner />

            {/* 8. FAQ */}
            <FaqSection />
          </main>

          {/* 9. Footer */}
          <Footer
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateHome={(sec) => handleNavigate('home', sec)}
            onOpenEnquire={() => setEnquireOpen(true)}
          />
        </>
      )}

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
      />
    </div>
  );
}
