import React, { useState } from 'react';
import '../skydale-landing.css';

export default function SkydaleLandingPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="skydale-page-wrap">
      {/* ---------------- Top Sticky Bar ---------------- */}
      <header className="skydale-topbar">
        <div className="skydale-topbar-inner">
          <div className="skydale-topbar-left">
            <button
              type="button"
              className="skydale-back-btn"
              onClick={onNavigateHome || (() => { window.location.hash = '#home'; })}
              aria-label="Back to Main Site"
            >
              ← Back to Main Site
            </button>
            <span className="skydale-badge-tag">NEXUS SKYDALE • PUNAWALE</span>
          </div>

          <div className="skydale-topbar-right">
            <a href="tel:+919960967070" className="skydale-call-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 99609 67070</span>
            </a>

            <a
              href="/pdfs/skydale-brouchure.pdf"
              download="Nexus Skydale Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="skydale-topbar-cta"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- Main Landing Container ---------------- */}
      <main className="skydale-container">
        {/* Section 1: Hero Elevation Building */}
        <section className="skydale-img-block" aria-label="Nexus Skydale Elevation">
          <img
            src="/assets/skydale-landing/01_hero_building.jpg"
            alt="Nexus Skydale Towers Elevation in Punawale"
            loading="eager"
          />
        </section>

        {/* Section 2: Luxury in Every Square Foot */}
        <section className="skydale-img-block" aria-label="Luxury in Every Square Foot">
          <img
            src="/assets/skydale-landing/02_luxury_script.png"
            alt="Luxury in Every Square Foot"
            loading="lazy"
          />
        </section>

        {/* Section 3: Seamless Connections & Modern Living */}
        <section className="skydale-img-block" aria-label="Seamless Connections">
          <img
            src="/assets/skydale-landing/03_connections_banner.jpg"
            alt="Seamless Connections 4, 3 and 2 BHK Modern Living"
            loading="lazy"
          />
        </section>

        {/* Section 4: Skydale Description Box */}
        <section className="skydale-img-block" aria-label="About Nexus Skydale">
          <img
            src="/assets/skydale-landing/04_description_box.jpg"
            alt="Nexus Skydale Punawale Project Overview"
            loading="lazy"
          />
        </section>

        {/* Section 5: Project Highlights */}
        <section className="skydale-img-block" aria-label="Project Highlights">
          <img
            src="/assets/skydale-landing/05_highlights.jpg"
            alt="Project Highlights - Prime Location, Smart Homes, Infinity Pool, 24/7 Security, Premium Fitness"
            loading="lazy"
          />
        </section>

        {/* Section 6: Specifications */}
        <section className="skydale-img-block" aria-label="Specifications">
          <img
            src="/assets/skydale-landing/06_specifications.jpg"
            alt="Nexus Skydale Specifications and Construction Quality"
            loading="lazy"
          />
        </section>

        {/* Section 7: Floor Plans */}
        <section className="skydale-img-block" aria-label="Floor Plans">
          <img
            src="/assets/skydale-landing/07_floor_plans.jpg"
            alt="4 BHK, 3 BHK and 2 BHK Floor Plans"
            loading="lazy"
          />
        </section>

        {/* Section 8: Gallery */}
        <section className="skydale-img-block" aria-label="Gallery">
          <img
            src="/assets/skydale-landing/08_gallery.jpg"
            alt="Nexus Skydale Project Gallery Renders"
            loading="lazy"
          />
        </section>

        {/* Section 9: DOWNLOAD BROCHURE BUTTON */}
        <section className="skydale-download-section" id="download-brochure">
          <a
            href="/pdfs/skydale-brouchure.pdf"
            download="Nexus Skydale Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="skydale-main-download-btn"
            id="skydale-download-brochure-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>DOWNLOAD BROCHURE</span>
          </a>
          <p className="skydale-download-subtext">
            Click here to download the official Nexus Skydale e-brochure (PDF) with full floor plans and specifications.
          </p>
        </section>

        {/* Section 10: Interactive Contact Form */}
        <section className="skydale-form-container" id="contact-form">
          <div className="skydale-form-logo-wrap">
            <div className="skydale-logo-circle">
              <svg className="skydale-logo-icon" viewBox="0 0 40 48" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="6" y="8" width="28" height="36" rx="2" stroke="white" />
                <path d="M12 14h16M12 20h16M12 26h16M12 32h16" stroke="white" strokeWidth="1.6" />
                <path d="M20 2v6" stroke="white" strokeWidth="2" />
              </svg>
              <div className="skydale-logo-text">SKYDALE</div>
              <div className="skydale-logo-sub">PUNAWALE</div>
            </div>
          </div>

          <div className="skydale-form-card">
            {submitted ? (
              <div className="skydale-form-success">
                <strong style={{ display: 'block', marginBottom: '4px', color: '#fff' }}>
                  Inquiry Received!
                </strong>
                Thank you for your interest in Nexus Skydale. Our dedicated sales advisor will contact you shortly with personalized unit details.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="skydale-form-field">
                  <input
                    type="text"
                    required
                    className="skydale-form-input"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="skydale-form-field">
                  <input
                    type="email"
                    required
                    className="skydale-form-input"
                    placeholder="Enter a valid email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="skydale-form-field">
                  <textarea
                    rows={2}
                    className="skydale-form-textarea"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="skydale-form-submit-btn">
                  SUBMIT
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Section 11: Our Team */}
        <section className="skydale-img-block" aria-label="Our Team & Project Partners">
          <img
            src="/assets/skydale-landing/11_our_team.jpg"
            alt="Nexus Skydale Team - Architect Kalparachana, Structural Engineer M/S Sarvasiddhant, CA Vinit D Achha, Legal Advisor Legal Realty LLP, Landscape Manthan Architects"
            loading="lazy"
          />
        </section>

        {/* Section 12: Footer */}
        <section className="skydale-img-block" aria-label="Project Address and RERA Details">
          <img
            src="/assets/skydale-landing/12_footer.jpg"
            alt="Contact +91 99609 67070 | +91 98602 17070, skydale@nexuspune.in, MahaRERA P52100050149"
            loading="lazy"
          />
        </section>

        {/* Interactive Quick Links Footer */}
        <footer className="skydale-interactive-footer">
          <div className="skydale-footer-contact-links">
            <a href="tel:+919960967070" className="skydale-footer-contact-link">
              📞 +91 99609 67070
            </a>
            <a href="tel:+919860217070" className="skydale-footer-contact-link">
              📞 +91 98602 17070
            </a>
            <a href="mailto:skydale@nexuspune.in" className="skydale-footer-contact-link">
              ✉️ skydale@nexuspune.in
            </a>
            <a
              href="/pdfs/skydale-brouchure.pdf"
              download="Nexus Skydale Brochure.pdf"
              className="skydale-footer-contact-link"
              style={{ color: '#d6b36a' }}
            >
              📥 Download Brochure (PDF)
            </a>
          </div>
          <div className="skydale-footer-brand">
            Nexus Skydale • Survey No 14, 10, Pandhare Wasti Road, Kate Wasti, Punawale, Pune 411 033 • MahaRERA Registered
          </div>
        </footer>
      </main>
    </div>
  );
}
