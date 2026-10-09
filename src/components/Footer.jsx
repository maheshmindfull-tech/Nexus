import React from 'react';

export default function Footer({ onNavigateAbout, onNavigateHome, onNavigateProjects, onNavigateCareers, onNavigateCPInquiry, onNavigateSkydale, onNavigateContact, onOpenEnquire }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'about' && onNavigateAbout) {
      onNavigateAbout();
      return;
    }
    if (target === 'careers' && onNavigateCareers) {
      onNavigateCareers();
      return;
    }
    if (target === 'cp-inquiry' && onNavigateCPInquiry) {
      onNavigateCPInquiry();
      return;
    }
    if (target === 'contact' && onNavigateContact) {
      onNavigateContact();
      return;
    }
    if (target === 'skydale' && onNavigateSkydale) {
      onNavigateSkydale();
      return;
    }
    if (target === 'home' && onNavigateHome) {
      onNavigateHome();
      return;
    }
    if (target === 'enquire' && onOpenEnquire) {
      onOpenEnquire();
      return;
    }
    if (target === '#projects' && onNavigateProjects) {
      onNavigateProjects();
      return;
    }
    if (target.startsWith('#')) {
      const el = document.getElementById(target.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (onNavigateHome) {
        onNavigateHome(target.replace('#', ''));
      }
    }
  };

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="top">
          <div className="brand">
            <button
              onClick={(e) => handleLinkClick(e, 'home')}
              className="bg-transparent border-0 p-0 cursor-pointer text-left inline-block"
            >
              <img src="/assets/logo/nexus-logo-white.png" alt="Nexus" />
            </button>
            <p>
              Nexus Real Estate Developers — premium residential and commercial
              spaces in Pune. Communities planned with vision, quality, and trust.
            </p>
          </div>

          <div className="cols">
            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="/about" onClick={(e) => handleLinkClick(e, 'about')}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/careers" onClick={(e) => handleLinkClick(e, 'careers')}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/cp-inquiry" onClick={(e) => handleLinkClick(e, 'cp-inquiry')}>
                    Channel Partner Inquiry
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => handleLinkClick(e, 'enquire')}>
                    Vendor enquiry
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Projects</h2>
              <ul>
                <li>
                  <a href="/skydale" onClick={(e) => handleLinkClick(e, 'skydale')}>
                    Skydale, Punawale
                  </a>
                </li>
                <li>
                  <a href="/projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                    Kinara, Chikhali
                  </a>
                </li>
                <li>
                  <a href="/projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                    Westia, Punawale
                  </a>
                </li>
                <li>
                  <a href="/projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                    Ongoing developments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href="mailto:sales@nexuspune.com">sales@nexuspune.com</a>
                </li>
                <li>
                  <a href="tel:+912067899900">+91 20 6789 9900</a>
                </li>
                <li>
                  Bund Garden Road, Pune,
                  <br />
                  Maharashtra 411001
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bot">
          <span>
            © 2026 Nexus Pune. All rights reserved. Managed by Nexus Real Estate Developers.
          </span>
          <span>Powered By: MINDFULL®</span>
        </div>
      </div>
    </footer>
  );
}
