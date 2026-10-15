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
import ProjectLandingPage, { LANDING_PROJECTS } from './components/ProjectLandingPage';
import BlogsPage from './components/BlogsPage';
import { applyPageSeo, pageFromLocation, pathForPage } from './seo';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [navCount, setNavCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    const page = pageFromLocation();
    return page === 'contact' ? 'home' : page;
  });

  useEffect(() => {
    const page = pageFromLocation();
    if (page === 'contact') {
      window.history.replaceState({ page: 'home' }, '', '/');
      setCurrentPage('home');
      setEnquireOpen(true);
      applyPageSeo('home');
    } else {
      const clean = pathForPage(page);
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      if (path !== clean || window.location.hash) {
        window.history.replaceState({ page }, '', clean);
      }
      applyPageSeo(page);
    }

    const onPop = () => {
      const next = pageFromLocation();
      if (next === 'contact') {
        window.history.replaceState({ page: 'home' }, '', '/');
        setCurrentPage('home');
        setEnquireOpen(true);
        applyPageSeo('home');
        return;
      }
      setCurrentPage(next);
      applyPageSeo(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleNavigate = (page, section) => {
    if (page === 'contact') {
      setEnquireOpen(true);
      return;
    }

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
      {currentPage !== 'skydale' && !LANDING_PROJECTS[currentPage] && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      )}

      {currentPage === 'skydale' ? (
        /* DEDICATED SKYDALE LANDING PAGE */
        <SkydaleLandingPage onNavigateHome={() => handleNavigate('home')} />
      ) : LANDING_PROJECTS[currentPage] ? (
        <ProjectLandingPage
          key={currentPage}
          project={currentPage}
          onNavigateHome={() => handleNavigate('home')}
        />
      ) : currentPage === 'projects' ? (
        /* DEDICATED PROJECTS PAGE */
        <ProjectsPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateLanding={(page) => handleNavigate(page)}
          onNavigateContact={() => setEnquireOpen(true)}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      ) : currentPage === 'blogs' ? (
        <BlogsPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => handleNavigate('projects')}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => setEnquireOpen(true)}
          onNavigateBlogs={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          onNavigateContact={() => setEnquireOpen(true)}
          onNavigateBlogs={() => handleNavigate('blogs')}
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
          onNavigateContact={() => setEnquireOpen(true)}
          onNavigateBlogs={() => handleNavigate('blogs')}
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
          onNavigateContact={() => setEnquireOpen(true)}
          onNavigateBlogs={() => handleNavigate('blogs')}
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

            {/* 4. Interactive Slider */}
            <SliderSection />

            {/* 5. Our Projects */}
            <ProjectsSection
              onViewAll={() => handleNavigate('projects')}
              onOpenProject={(page) => handleNavigate(page)}
            />

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
            onNavigateContact={() => setEnquireOpen(true)}
            onNavigateBlogs={() => handleNavigate('blogs')}
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
