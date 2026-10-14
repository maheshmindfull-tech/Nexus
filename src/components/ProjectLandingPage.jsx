import React, { useState } from 'react';
import '../skydale-landing.css';
import { submitLeadToGoogleSheet } from '../services/leadService';

const PHONES = [
  { tel: '+919960967070', label: '+91 99609 67070' },
  { tel: '+919860217070', label: '+91 98602 17070' },
];

const OFFICE_ADDRESS =
  'Plot No. P87, D-Block, MIDC, Pimpri Industrial Area, Near Wonder Cars Showroom, Chinchwad, Pune 411019.';

export const LANDING_PROJECTS = {
  kinara: {
    name: 'Nexus Kinaara',
    shortName: 'KINAARA',
    location: 'Chikhali',
    heading: 'Nexus Kinaara, Chikhali — 2 and 3 BHK riverside homes',
    sections: 4,
    brochure: '/pdfs/nexus-kinara-brochure.pdf',
    brochureName: 'Nexus Kinaara Brochure.pdf',
    email: 'kinaara@nexuspune.in',
    address: 'Gat No. 79, Behind River Residency, Chikhali, Pimpri Chinchwad, Pune, Maharashtra 412 114.',
  },
  westia: {
    name: 'Nexus Westia',
    shortName: 'WESTIA',
    location: 'Punawale',
    heading: 'Nexus Westia, Punawale — 2 and 3 BHK homes',
    sections: 4,
    brochure: '/pdfs/nexus-westia-brochure.pdf',
    brochureName: 'Nexus Westia Brochure.pdf',
    email: 'westia@nexuspune.in',
    address: 'Sr. No. 41/48, Near Savata Mali Mandir, Malwadi, Punawale, Pimpri Chinchwad, Pune, Maharashtra 411 033.',
  },
};

function DownloadIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function ProjectLandingPage({ project, onNavigateHome }) {
  const p = LANDING_PROJECTS[project];
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!p) return null;
  const assetDir = `/assets/${project}-landing`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    await submitLeadToGoogleSheet({
      formType: `${p.name} Landing Page Lead`,
      project: `${p.name} (${p.location})`,
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
      <header className="skydale-topbar">
        <div className="skydale-topbar-inner">
          <div className="skydale-topbar-left">
            <button
              type="button"
              className="skydale-back-btn"
              onClick={onNavigateHome}
              aria-label="Back to Main Site"
            >
              ← Back to Main Site
            </button>
            <span className="skydale-badge-tag">
              NEXUS {p.shortName} • {p.location.toUpperCase()}
            </span>
          </div>

          <div className="skydale-topbar-right">
            <a href={p.brochure} download={p.brochureName} className="skydale-topbar-cta">
              <DownloadIcon />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </header>

      <main className="skydale-container">
        <h1 className="skydale-page-title">{p.heading}</h1>

        {Array.from({ length: p.sections }, (_, i) => {
          const n = String(i + 1).padStart(2, '0');
          return (
            <section key={n} className="skydale-img-block" aria-label={`${p.name} section ${i + 1}`}>
              <img
                src={`${assetDir}/${n}.jpg`}
                alt={`${p.name}, ${p.location} — highlights, floor plans and gallery`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </section>
          );
        })}

        <section className="skydale-download-section" id="download-brochure">
          <a href={p.brochure} download={p.brochureName} className="skydale-main-download-btn">
            <DownloadIcon size={22} />
            <span>DOWNLOAD BROCHURE</span>
          </a>
          <p className="skydale-download-subtext">
            Download the official {p.name} e-brochure (PDF) with floor plans and specifications.
          </p>
        </section>

        <section className="skydale-form-container" id="contact-form">
          <div className="skydale-form-logo-wrap">
            <div className="skydale-logo-circle">
              <div className="skydale-logo-text">{p.shortName}</div>
              <div className="skydale-logo-sub">{p.location.toUpperCase()}</div>
            </div>
          </div>

          <div className="skydale-form-card">
            {submitted ? (
              <div className="skydale-form-success">
                <strong style={{ display: 'block', marginBottom: '4px', color: '#fff' }}>
                  Inquiry Received!
                </strong>
                Thank you for your interest in {p.name}. Our sales advisor will contact you shortly.
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
                    className="skydale-form-input"
                    placeholder="Enter your phone number"
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

        <section className="skydale-img-block" aria-label="Our Team">
          <img
            src="/assets/skydale-landing/11_our_team.jpg"
            alt="Our Team - Architect Kalparachana, Structural Engineer M/S Sarvasiddhant, CA Vinit D Achha and Associates, Legal Advisor Legal Realty LLP, Landscape Architect Manthan Architects"
            loading="lazy"
          />
        </section>

        <section className="landing-contact" aria-label="Project Address and Contact">
          <div className="landing-contact-brand">
            <img src="/assets/landing-common/nexus-mark.jpg" alt="A project by Nexus" loading="lazy" />
          </div>
          <div className="landing-contact-main">
            <a className="landing-contact-email" href={`mailto:${p.email}`}>{p.email}</a>
            <div className="landing-contact-addresses">
              <p><strong>Site Address:</strong> {p.address}</p>
              <p><strong>Office Address:</strong> {OFFICE_ADDRESS}</p>
            </div>
          </div>
          <a className="landing-contact-web" href="https://nexuspune.in" target="_blank" rel="noopener noreferrer">
            www.nexuspune.in
          </a>
        </section>

        <footer className="skydale-interactive-footer">
          <div className="skydale-footer-contact-links">
            <a href={`mailto:${p.email}`} className="skydale-footer-contact-link">
              ✉️ {p.email}
            </a>
            <a
              href={p.brochure}
              download={p.brochureName}
              className="skydale-footer-contact-link"
              style={{ color: '#d6b36a' }}
            >
              📥 Download Brochure (PDF)
            </a>
          </div>
          <div className="skydale-footer-brand">
            {p.name} • {p.location}, Pune
          </div>
        </footer>
      </main>
    </div>
  );
}
