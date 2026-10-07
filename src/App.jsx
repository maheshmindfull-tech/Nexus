import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Principles from './components/Principles';
import SliderSection from './components/SliderSection';
import ProjectsSection from './components/ProjectsSection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import CareersPage from './components/CareersPage';
import CPInquiryPage from './components/CPInquiryPage';
import SkydaleLandingPage from './components/SkydaleLandingPage';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#all-projects') return 'projects';
      if (hash === '#careers' || hash === '#career') return 'careers';
      if (hash === '#cp-inquiry' || hash === '#channel-partner') return 'cp-inquiry';
      if (
        hash === '#skydale' ||
        hash === '#skydel' ||
        hash === '#nexus-skydale' ||
        hash === '#skydale-landing'
      ) {
        return 'skydale';
      }
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
      if (hash === '#all-projects') {
        setCurrentPage('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#careers' || hash === '#career') {
        setCurrentPage('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#cp-inquiry' || hash === '#channel-partner') {
        setCurrentPage('cp-inquiry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#skydale' ||
        hash === '#skydel' ||
        hash === '#nexus-skydale' ||
        hash === '#skydale-landing'
      ) {
        setCurrentPage('skydale');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#about-us' || hash === '#about-page') {
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
    if (page === 'projects') {
      setCurrentPage('projects');
      window.location.hash = '#all-projects';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'skydale') {
      setCurrentPage('skydale');
      window.location.hash = '#skydale';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'careers') {
      setCurrentPage('careers');
      window.location.hash = '#careers';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'cp-inquiry') {
      setCurrentPage('cp-inquiry');
      window.location.hash = '#cp-inquiry';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
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
      {/* Universal Fixed Navigation Bar across all pages except custom landing page */}
      {currentPage !== 'skydale' && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      )}

      {currentPage === 'skydale' ? (
        /* DEDICATED SKYDALE LANDING PAGE */
        <SkydaleLandingPage onNavigateHome={() => handleNavigate('home')} />
      ) : currentPage === 'projects' ? (
        /* DEDICATED PROJECTS PAGE */
        <ProjectsPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'about' ? (
        /* DEDICATED ABOUT US PAGE */
        <AboutPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'careers' ? (
        /* DEDICATED CAREERS PAGE */
        <CareersPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'cp-inquiry' ? (
        /* DEDICATED CP INQUIRY PAGE */
        <CPInquiryPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => handleNavigate('careers')}
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
            <ProjectsSection onViewAll={() => handleNavigate('projects')} />

            {/* 6. Testimonials */}
            <Testimonials />

            {/* 7. FAQ */}
            <FaqSection />
          </main>

          {/* 9. Footer */}
          <Footer
            onNavigateAbout={() => handleNavigate('about')}
            onNavigateProjects={() => handleNavigate('projects')}
            onNavigateCareers={() => handleNavigate('careers')}
            onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
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
