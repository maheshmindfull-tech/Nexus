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
import ContactPage from './components/ContactPage';
import { applyPageSeo, pageFromLocation, pathForPage } from './seo';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() =>
    typeof window !== 'undefined' ? pageFromLocation() : 'home'
  );

  useEffect(() => {
    const page = pageFromLocation();
    const clean = pathForPage(page);
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    if (path !== clean || window.location.hash) {
      window.history.replaceState({ page }, '', clean);
    }
    applyPageSeo(page);

    const onPop = () => {
      const next = pageFromLocation();
      setCurrentPage(next);
      applyPageSeo(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleNavigate = (page, section) => {
    const next = pathForPage(page) ? page : 'home';
    const clean = pathForPage(next);
    window.history.pushState({ page: next }, '', clean);
    setCurrentPage(next);
    applyPageSeo(next);

    if (next === 'home' && section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleNavigate('contact')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'about' ? (
        /* DEDICATED ABOUT US PAGE */
        <AboutPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleNavigate('contact')}
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
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleNavigate('contact')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'cp-inquiry' ? (
        /* DEDICATED CP INQUIRY PAGE */
        <CPInquiryPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleNavigate('contact')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'contact' ? (
        /* DEDICATED CONTACT PAGE */
        <ContactPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : (
        /* HOME PAGE */
        <>
          <main className="flex-1">
            {/* 1. Hero */}
            <Hero
              onOpenEnquire={() => setEnquireOpen(true)}
              onViewProjects={() => handleNavigate('projects')}
            />

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
            onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleNavigate('contact')}
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
