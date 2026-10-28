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
import { applyPageSeo, currentBlogSlug, pageFromLocation, pathForPage } from './seo';

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
  const [enquireProject, setEnquireProject] = useState('');
  const [historyTick, setHistoryTick] = useState(0);
  const restoreY = useRef(null);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    const page = pageFromLocation();
    return page === 'contact' ? 'home' : page;
  });
  const [blogSlug, setBlogSlug] = useState(() => (
    typeof window === 'undefined' ? null : currentBlogSlug()
  ));
  const [projectsStatus, setProjectsStatus] = useState(() => (
    typeof window !== 'undefined'
    && new URLSearchParams(window.location.search).get('status') === 'coming-soon'
      ? 'Coming Soon'
      : 'Ongoing'
  ));

  const handleOpenEnquire = (projectName) => {
    setEnquireProject(typeof projectName === 'string' ? projectName : '');
    setEnquireOpen(true);
  };

  useEffect(() => {
    const page = pageFromLocation();
    if (page === 'contact') {
      stampHistory('home', '/');
      setCurrentPage('home');
      setBlogSlug(null);
      handleOpenEnquire('');
      applyPageSeo('home');
    } else {
      stampHistory(page, pathForPage(page));
      setBlogSlug(page === 'blog' ? currentBlogSlug() : null);
      applyPageSeo(page);
    }

    const onPop = () => {
      const next = pageFromLocation();
      restoreY.current = window.history.state?.scrollY ?? 0;
      if (next === 'contact') {
        stampHistory('home', '/');
        setCurrentPage('home');
        setBlogSlug(null);
        handleOpenEnquire('');
        applyPageSeo('home');
      } else {
        setCurrentPage(next);
        setBlogSlug(next === 'blog' ? currentBlogSlug() : null);
        if (next === 'projects') {
          const comingSoon = new URLSearchParams(window.location.search).get('status') === 'coming-soon';
          setProjectsStatus(comingSoon ? 'Coming Soon' : 'Ongoing');
        }
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
      handleOpenEnquire('');
      return;
    }

    const next = pathForPage(page) ? page : 'home';
    if (next === 'projects') {
      setProjectsStatus(section === 'coming-soon' ? 'Coming Soon' : 'Ongoing');
    }
    const nextPath = pathForPage(next);
    const url = next === 'projects' && section === 'coming-soon'
      ? `${nextPath}?status=coming-soon`
      : nextPath;
    pushAppState(next, url);
    setCurrentPage(next);
    if (next !== 'blog') setBlogSlug(null);
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

  const openBlogPost = (id) => {
    if (!id) {
      handleNavigate('blogs');
      return;
    }
    pushAppState('blog', `/blog/${id}`);
    setBlogSlug(id);
    setCurrentPage('blog');
    applyPageSeo('blog');
    window.scrollTo(0, 0);
  };

  const LandingPage = LANDING_PAGES[currentPage];

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] flex flex-col font-sans selection:bg-[#0097a7] selection:text-white">
      {!LandingPage && (
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEnquire={() => handleOpenEnquire('')}
        />
      )}

      {LandingPage ? (
        <LandingPage key={currentPage} onNavigateHome={handleBack} />
      ) : currentPage === 'projects' ? (
        /* DEDICATED PROJECTS PAGE */
        <ProjectsPage
          initialStatus={projectsStatus}
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={(section) => handleNavigate('projects', section)}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleOpenEnquire('')}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onOpenEnquire={handleOpenEnquire}
          onOpenProject={(page) => handleNavigate(page)}
        />
      ) : currentPage === 'blogs' || currentPage === 'blog' ? (
        <BlogsPage
          postId={currentPage === 'blog' ? blogSlug : null}
          onOpenPost={openBlogPost}
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={(section) => handleNavigate('projects', section)}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleOpenEnquire('')}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onOpenEnquire={handleOpenEnquire}
        />
      ) : currentPage === 'about' ? (
        /* DEDICATED ABOUT US PAGE */
        <AboutPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateProjects={(section) => handleNavigate('projects', section)}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleOpenEnquire('')}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onOpenEnquire={handleOpenEnquire}
        />
      ) : currentPage === 'careers' ? (
        /* DEDICATED CAREERS PAGE */
        <CareersPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={(section) => handleNavigate('projects', section)}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleOpenEnquire('')}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onOpenEnquire={handleOpenEnquire}
        />
      ) : currentPage === 'cp-inquiry' ? (
        /* DEDICATED CP INQUIRY PAGE */
        <CPInquiryPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={(section) => handleNavigate('projects', section)}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleOpenEnquire('')}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onOpenEnquire={handleOpenEnquire}
        />
      ) : (
        /* HOME PAGE */
        <>
          <main className="flex-1">
            {/* 1. Hero */}
            <Hero
              onOpenEnquire={() => handleOpenEnquire('')}
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
            onNavigateProjects={(section) => handleNavigate('projects', section)}
            onNavigateCareers={() => handleNavigate('careers')}
            onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
            onNavigateSkydale={() => handleNavigate('skydale')}
            onNavigateContact={() => handleOpenEnquire('')}
            onNavigateBlogs={() => handleNavigate('blogs')}
            onNavigateHome={(sec) => handleNavigate('home', sec)}
            onOpenEnquire={handleOpenEnquire}
          />
        </>
      )}

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquireOpen}
        initialProject={enquireProject}
        onClose={() => {
          setEnquireOpen(false);
          setEnquireProject('');
        }}
      />
    </div>
  );
}
