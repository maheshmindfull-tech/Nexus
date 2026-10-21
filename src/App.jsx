import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
import KinaraPage from './landings/kinara/page';
import WestiaPage from './landings/westia/page';
import SkydalePage from './landings/skydale/page';
import AtriumPage from './landings/atrium/page';
import GenesisPage from './landings/genesis/page';
import PrimePage from './landings/prime/page';
import ImperiaPage from './landings/imperia/page';
import BlogsPage from './components/BlogsPage';
import { applyPageSeo, pageFromLocation, pathForPage } from './seo';

const LANDING_PAGES = {
  kinara: KinaraPage,
  westia: WestiaPage,
  skydale: SkydalePage,
  atrium: AtriumPage,
  genesis: GenesisPage,
  square: PrimePage,
  imperia: ImperiaPage,
};
import { canGoBack, markRestoring, pushAppState, rememberScroll, stampHistory } from './historyState';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [historyTick, setHistoryTick] = useState(0);
  const restoreY = useRef(null);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    const page = pageFromLocation();
    return page === 'contact' ? 'home' : page;
  });

  useEffect(() => {
    const page = pageFromLocation();
    if (page === 'contact') {
      stampHistory('home', '/');
      setCurrentPage('home');
      setEnquireOpen(true);
      applyPageSeo('home');
    } else {
      stampHistory(page, pathForPage(page));
      applyPageSeo(page);
    }

    const onPop = () => {
      const next = pageFromLocation();
      restoreY.current = window.history.state?.scrollY ?? 0;
      if (next === 'contact') {
        stampHistory('home', '/');
        setCurrentPage('home');
        setEnquireOpen(true);
        applyPageSeo('home');
      } else {
        setCurrentPage(next);
        applyPageSeo(next);
      }
      setHistoryTick((n) => n + 1);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => rememberScroll());
    };

    window.addEventListener('popstate', onPop);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (historyTick === 0) return undefined;
    const y = restoreY.current ?? 0;
    markRestoring(true);
    const apply = () => window.scrollTo(0, y);
    apply();
    const soon = window.setTimeout(apply, 160);
    const later = window.setTimeout(() => {
      apply();
      markRestoring(false);
    }, 480);
    return () => {
      window.clearTimeout(soon);
      window.clearTimeout(later);
      markRestoring(false);
    };
  }, [historyTick]);

  const handleNavigate = (page, section) => {
    if (page === 'contact') {
      setEnquireOpen(true);
      return;
    }

    const next = pathForPage(page) ? page : 'home';
    pushAppState(next, pathForPage(next));
    setCurrentPage(next);
    applyPageSeo(next);
    window.scrollTo(0, 0);

    if (next === 'home' && section) {
      window.setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  const handleBack = () => {
    if (canGoBack()) {
      window.history.back();
      return;
    }
    handleNavigate('home');
  };

  const LandingPage = LANDING_PAGES[currentPage];

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] flex flex-col font-sans selection:bg-[#0097a7] selection:text-white">
      {!LandingPage && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEnquire={() => setEnquireOpen(true)}
        />
      )}

      {LandingPage ? (
        <LandingPage key={currentPage} onNavigateHome={handleBack} />
      ) : currentPage === 'projects' ? (
        /* DEDICATED PROJECTS PAGE */
        <ProjectsPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={() => handleNavigate('projects')}
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
          onNavigateBlogs={() => handleNavigate('blogs')}
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
          onNavigateCareers={() => handleNavigate('careers')}
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
