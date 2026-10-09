import React, { useRef, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import Footer from './Footer';
import { submitLeadToGoogleSheet } from '../services/leadService';
import '../contact.css';

const PROJECT_OPTIONS = [
  'General Enquiry',
  'Nexus Skydale (Punawale)',
  'Nexus Kinara (Chikhali)',
  'Nexus Westia (Punawale)',
  'Nexus Square (Punawale)',
  'Nexus Genesis (Kiwale)',
];

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  project: 'General Enquiry',
  message: '',
};

export default function ContactPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onNavigateSkydale,
  onNavigateContact,
  onOpenEnquire,
}) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const cardRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await submitLeadToGoogleSheet({
      formType: 'Website Contact Page',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      project: formData.project,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (!result.success) {
      setError('Something went wrong while sending your message. Please try again or call us.');
      return;
    }
    setIsSubmitted(true);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setIsSubmitted(false);
  };

  return (
    <div className="ct-page">
      <header className="ct-hero">
        <div className="ct-hero-wrap">
          <div className="ct-eyebrow">Contact Us</div>
          <h1 className="ct-title">Talk to the Nexus team</h1>
          <p className="ct-subtitle">
            Questions about a project, a site visit, or availability? Send us a message and
            we will get back to you shortly.
          </p>
        </div>
      </header>

      <section className="ct-section">
        <div className="ct-wrap">
          <div className="ct-card" ref={cardRef}>
            {isSubmitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">
                  <CheckCircle2 style={{ width: 32, height: 32 }} />
                </div>
                <h2>Message sent</h2>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our team will contact you on{' '}
                  <strong>{formData.phone}</strong> shortly.
                </p>
                <button type="button" onClick={handleReset} className="ct-reset-btn">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ct-form-header">
                  <h2>Send us a message</h2>
                  <p>Fields marked with * are required.</p>
                </div>

                <div className="ct-grid">
                  <div className="ct-field ct-field-full">
                    <label className="ct-label" htmlFor="ct-name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="ct-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="ct-input"
                    />
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-phone">
                      Mobile Number <span>*</span>
                    </label>
                    <input
                      id="ct-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+\s\-]{10,15}"
                      title="Enter a valid mobile number"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="ct-input"
                    />
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="ct-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="ct-input"
                    />
                  </div>

                  <div className="ct-field ct-field-full">
                    <label className="ct-label" htmlFor="ct-project">
                      Project of Interest
                    </label>
                    <select
                      id="ct-project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="ct-select"
                    >
                      {PROJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ct-field ct-field-full">
                    <label className="ct-label" htmlFor="ct-message">
                      Message
                    </label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="ct-textarea"
                    />
                  </div>

                  {error && (
                    <p className="ct-error" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="ct-actions">
                    <span className="ct-note">We respect your privacy. No spam.</span>
                    <button type="submit" disabled={isSubmitting} className="ct-submit-btn">
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send style={{ width: 15, height: 15 }} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <aside className="ct-info" aria-label="Nexus contact details">
            <div className="ct-info-box">
              <small>Email</small>
              <a href="mailto:sales@nexuspune.com">sales@nexuspune.com</a>
            </div>
            <div className="ct-info-box">
              <small>Phone</small>
              <a href="tel:+912067899900">+91 20 6789 9900</a>
            </div>
            <div className="ct-info-box">
              <small>Office</small>
              <address>
                Bund Garden Road, Pune,
                <br />
                Maharashtra 411001
              </address>
            </div>
          </aside>
        </div>
      </section>

      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateHome={onNavigateHome}
        onOpenEnquire={onOpenEnquire}
      />
    </div>
  );
}
