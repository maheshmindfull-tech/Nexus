import React, { lazy, Suspense, useState, useEffect, useLayoutEffect, useRef } from 'react';
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
import { applyPageSeo, currentBlogSlug, pageFromLocation, pathForPage } from './seo';
import { canGoBack, markRestoring, pushAppState, rememberScroll, stampHistory } from './historyState';

const AboutPage = lazy(() => import('./components/AboutPage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const CareersPage = lazy(() => import('./components/CareersPage'));
const CPInquiryPage = lazy(() => import('./components/CPInquiryPage'));
const BlogsPage = lazy(() => import('./components/BlogsPage'));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));
const KinaraPage = lazy(() => import('./landings/kinara/page'));
const WestiaPage = lazy(() => import('./landings/westia/page'));
const SkydalePage = lazy(() => import('./landings/skydale/page'));
const AtriumPage = lazy(() => import('./landings/atrium/page'));
const GenesisPage = lazy(() => import('./landings/genesis/page'));
const PrimePage = lazy(() => import('./landings/prime/page'));
const ImperiaPage = lazy(() => import('./landings/imperia/page'));

const LANDING_PAGES = {
  kinara: KinaraPage,
  westia: WestiaPage,
  skydale: SkydalePage,
  atrium: AtriumPage,
  genesis: GenesisPage,
  square: PrimePage,
  imperia: ImperiaPage,
};

function RouteFallback() {
  return (
    <div className="route-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="route-loader-mark">
        <span className="route-loader-ring" aria-hidden="true" />
        <img src="/assets/logo/nexus-icon.png" alt="" />
      </div>
      <p className="route-loader-label">Loading</p>
    </div>
  );
}

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [enquireProject, setEnquireProject] = useState('');
  const [enquireMode, setEnquireMode] = useState('sales');
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

  const handleOpenEnquire = (projectName, options = {}) => {
    setEnquireProject(typeof projectName === 'string' ? projectName : '');
    setEnquireMode(options?.mode === 'vendor' ? 'vendor' : 'sales');
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

      <Suspense fallback={<RouteFallback />}>
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
          onNavigatePage={handleNavigate}
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
          onNavigatePage={handleNavigate}
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
          onNavigatePage={handleNavigate}
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
          onNavigatePage={handleNavigate}
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
          onNavigatePage={handleNavigate}
          onOpenEnquire={handleOpenEnquire}
        />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicyPage
          onNavigateHome={(sec) => handleNavigate('home', sec)}
          onNavigateAbout={() => handleNavigate('about')}
          onNavigateProjects={(section) => handleNavigate('projects', section)}
          onNavigateCareers={() => handleNavigate('careers')}
          onNavigateCPInquiry={() => handleNavigate('cp-inquiry')}
          onNavigateSkydale={() => handleNavigate('skydale')}
          onNavigateContact={() => handleOpenEnquire('')}
          onNavigateBlogs={() => handleNavigate('blogs')}
          onNavigatePage={handleNavigate}
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
            onNavigatePage={handleNavigate}
            onOpenEnquire={handleOpenEnquire}
          />
        </>
      )}
      </Suspense>

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquireOpen}
        mode={enquireMode}
        initialProject={enquireProject}
        onClose={() => {
          setEnquireOpen(false);
          setEnquireProject('');
          setEnquireMode('sales');
        }}
      />
    </div>
  );
}
