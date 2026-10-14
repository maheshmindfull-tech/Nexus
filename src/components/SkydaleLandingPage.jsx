import React, { useState } from 'react';
import '../skydale-landing.css';
import { submitLeadToGoogleSheet } from '../services/leadService';
import AmenitySpread from './AmenitySpread';

const SKYDALE_AMENITIES = [
  { src: '/assets/skydale-landing/v2/am-gym.jpg', label: 'Gym' },
  { src: '/assets/skydale-landing/v2/am-clubhouse.jpg', label: 'Clubhouse' },
  { src: '/assets/skydale-landing/v2/am-community-hall.jpg', label: 'Community Hall' },
];

export default function SkydaleLandingPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitting(true);
    await submitLeadToGoogleSheet({
      formType: 'Skydale Landing Page Lead',
      project: 'Nexus Skydale (Punawale)',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
    });
    setIsSubmitting(false);
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
        <h1 className="skydale-page-title">Nexus Skydale, Punawale — 2, 3 and 4 BHK homes and Commercial Space</h1>
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
            src="/assets/skydale-landing/03_connections_banner_234.jpg"
            alt="Seamless Connections 2, 3 and 4 BHK Modern Living"
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

        <AmenitySpread
          theme="light"
          items={SKYDALE_AMENITIES}
          subtitle="A fully equipped gym, a resort-style clubhouse and a spacious community hall for every celebration."
        />

        {/* Section 7: Floor Plans */}
        <section className="skydale-img-block" aria-label="Floor Plans">
          <img
            src="/assets/skydale-landing/07_floor_plans_234.jpg"
            alt="2 BHK, 3 BHK and 4 BHK Floor Plans"
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
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    minLength={10}
                    maxLength={15}
                    className="skydale-form-input"
                    placeholder="Enter your Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="skydale-form-submit-btn"
                  style={isSubmitting ? { opacity: 0.75, cursor: 'not-allowed' } : undefined}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
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
            src="/assets/skydale-landing/12_footer_nophone.jpg"
            alt="Contact skydale@nexuspune.in, MahaRERA P52100050149"
            loading="lazy"
          />
        </section>

        {/* Interactive Quick Links Footer */}
        <footer className="skydale-interactive-footer">
          <div className="skydale-footer-contact-links">
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
