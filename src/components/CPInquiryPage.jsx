import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import Footer from './Footer';
import Typewriter from './Typewriter';
import '../cp-inquiry.css';

const CP_HERO_PHRASES = [
  'Unlock Unlimited Earnings. Scale Your Real Estate Business.',
  'Accelerate High-Ticket Closures Across Pune & PCMC.',
  'Maximize Partner Revenue With Prime Landmark Projects.',
  'Partner With 30 Years of Uncompromised Trust & Delivery.',
];

export default function CPInquiryPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onOpenEnquire,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    email: '',
    reraNumber: '',
    projectInterest: 'All Projects',
    priceCategory: 'All Price Ranges',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate simple network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      mobile: '',
      email: '',
      reraNumber: '',
      projectInterest: 'All Projects',
      priceCategory: 'All Price Ranges',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="cp-page">
      {/* Full-Screen Hero Header with Deal Done Handshake Background */}
      <section className="cp-hero">
        <img
          src="/assets/cp/deal-done.avif"
          alt="Deal Done Handshake - Nexus Channel Partner"
          className="cp-hero-bg"
        />
        <div className="cp-hero-overlay" />

        <div className="cp-hero-wrap">
          <div className="cp-hero-content">
            <div className="cp-eyebrow">
              <span className="cp-eyebrow-dot" />
              Channel Partner Network
            </div>
            <h1 className="cp-title">
              <Typewriter phrases={CP_HERO_PHRASES} />
            </h1>
            <p className="cp-subtitle">
              Partner with Nexus Group to accelerate your deal closures. Access prime
              residential and commercial landmarks across Pune & PCMC (₹70 L to ₹1.5 Cr+),
              enjoy industry-best incentive slabs, transparent payouts, and full CRM support.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="cp-form-section">
        <div className="cp-form-wrap">
          <div className="cp-form-card">
            {isSubmitted ? (
              <div className="cp-success">
                <div className="cp-success-icon">
                  <CheckCircle2 style={{ width: 32, height: 32 }} />
                </div>
                <h3>Inquiry Submitted Successfully</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your Channel Partner
                  inquiry for <strong>{formData.companyName}</strong> has been received. Our
                  partnership manager will contact you at <strong>{formData.mobile}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="cp-reset-btn"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="cp-form-header">
                  <h3>Channel Partner Registration & Inquiry</h3>
                  <p>Please enter your agency and contact information.</p>
                </div>

                <div className="cp-grid">
                  {/* Full Name */}
                  <div className="cp-field">
                    <label className="cp-label">
                      Contact Person Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="cp-input"
                    />
                  </div>

                  {/* Company / Agency Name */}
                  <div className="cp-field">
                    <label className="cp-label">
                      Agency / Firm Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Realty Consultants"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="cp-input"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="cp-field">
                    <label className="cp-label">
                      Mobile Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="cp-input"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="cp-field">
                    <label className="cp-label">
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="contact@agency.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="cp-input"
                    />
                  </div>

                  {/* MahaRERA Number */}
                  <div className="cp-field">
                    <label className="cp-label">
                      MahaRERA Registration No.
                    </label>
                    <input
                      type="text"
                      name="reraNumber"
                      placeholder="A521000..."
                      value={formData.reraNumber}
                      onChange={handleChange}
                      className="cp-input"
                    />
                    <small className="cp-note">Optional if under process</small>
                  </div>

                  {/* Project Interest */}
                  <div className="cp-field">
                    <label className="cp-label">Project of Interest</label>
                    <select
                      name="projectInterest"
                      value={formData.projectInterest}
                      onChange={handleChange}
                      className="cp-select"
                    >
                      <option value="All Projects">All Nexus Projects</option>
                      <option value="Nexus Skydale">Nexus Skydale (Punawale)</option>
                      <option value="Nexus Kinara">Nexus Kinara (Chikhali)</option>
                      <option value="Nexus Westia">Nexus Westia (Punawale)</option>
                      <option value="Nexus Crown">Nexus Crown (Ravet / Kiwale)</option>
                      <option value="Nexus Square">Nexus Square (Commercial)</option>
                      <option value="Nexus Atrium">Nexus Atrium (Commercial)</option>
                      <option value="Nexus Genesis">Nexus Genesis (Kiwale)</option>
                      <option value="Nexus Imperia">Nexus Imperia (Moshi)</option>
                    </select>
                  </div>

                  {/* Price Category */}
                  <div className="cp-field cp-field-full">
                    <label className="cp-label">Price Category</label>
                    <select
                      name="priceCategory"
                      value={formData.priceCategory}
                      onChange={handleChange}
                      className="cp-select"
                    >
                      <option value="All Price Ranges">All Price Ranges (₹70 L – ₹1.5 Cr+)</option>
                      <option value="₹70 Lakh – ₹90 Lakh">₹70 Lakh – ₹90 Lakh</option>
                      <option value="₹90 Lakh – ₹1.20 Crore">₹90 Lakh – ₹1.20 Crore</option>
                      <option value="₹1.20 Crore – ₹1.50 Crore">₹1.20 Crore – ₹1.50 Crore</option>
                      <option value="Above ₹1.50 Crore">Above ₹1.50 Crore</option>
                    </select>
                  </div>

                  {/* Message / Comments */}
                  <div className="cp-field cp-field-full">
                    <label className="cp-label">Additional Message / Requirement</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Share your client base or specific project inquiry details..."
                      value={formData.message}
                      onChange={handleChange}
                      className="cp-textarea"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="cp-actions">
                    <span className="cp-security-note">
                      Your details are kept confidential with Nexus Group.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cp-submit-btn"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <span>Submit CP Inquiry</span>
                          <Send style={{ width: 15, height: 15 }} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Contact Bar */}
          <div className="cp-contact-bar">
            <div className="cp-contact-box">
              <small>CP Helpdesk</small>
              <strong>+91 20 6700 8888</strong>
            </div>
            <div className="cp-contact-box">
              <small>Email</small>
              <strong>channelpartner@nexus.in</strong>
            </div>
            <div className="cp-contact-box">
              <small>Head Office</small>
              <strong>Baner / PCMC, Pune</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateHome={onNavigateHome}
        onOpenEnquire={onOpenEnquire}
      />
    </div>
  );
}
