import React from 'react';

export default function Footer({ onNavigateAbout, onNavigateHome, onOpenEnquire }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'about' && onNavigateAbout) {
      onNavigateAbout();
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
              Nexus Real Estate Developers - crafting premium residential and commercial
              spaces in Pune. Building communities with vision, quality, and trust.
            </p>
            <div className="soc">
              <a href="#">f</a>
              <a href="#">ig</a>
              <a href="#">in</a>
              <a href="#">▶</a>
            </div>
          </div>

          <div className="cols">
            <ul>
              <h5>Company</h5>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#enquire" onClick={(e) => handleLinkClick(e, 'enquire')}>
                  Channel Partner
                </a>
              </li>
              <li>
                <a href="#enquire" onClick={(e) => handleLinkClick(e, 'enquire')}>
                  Vendor
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>

            <ul>
              <h5>Resources</h5>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Genesis
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Westia
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Skydale
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Bihan
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Escapade
                </a>
              </li>
            </ul>

            <ul>
              <h5>Projects</h5>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Diamond
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Palazzo
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Prime Square
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Ongoing
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                  Upcoming
                </a>
              </li>
            </ul>

            <ul>
              <h5>Contact</h5>
              <li>sales@nexuspune.com</li>
              <li>+91 20 6789 9900</li>
              <li>
                Bund Garden Road, Pune,
                <br />
                Maharashtra 411001
              </li>
            </ul>
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
