import React, { useEffect, useState } from 'react';
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  Send,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import Footer from './Footer';
import { submitLeadToGoogleSheet } from '../services/leadService';
import Typewriter from './Typewriter';
import '../careers.css';

const CAREER_HERO_PHRASES = [
  'Build Your Legacy With Pune\'s Finest.',
  'Shape Skylines. Grow With Industry Leaders.',
  'Where Passion Meets Engineering Rigor.',
];

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  role: '',
  experience: '',
  currentOrg: '',
  portfolioLink: '',
  message: '',
};

export default function CareersPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onNavigateSkydale,
  onNavigateContact,
  onNavigateBlogs,
  onOpenEnquire,
}) {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!formOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setFormOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [formOpen]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const cleanVal = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [name]: cleanVal }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(0, 10);
    if (cleanPhone.length !== 10) return;
    setSubmitting(true);
    await submitLeadToGoogleSheet({
      formType: 'Careers Resume Submission',
      cp: 'No',
      isCP: 'No',
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: cleanPhone,
      project: formData.role,
      role: formData.role,
      experience: formData.experience.trim(),
      company: formData.currentOrg.trim() || 'N/A',
      portfolioLink: formData.portfolioLink.trim(),
      message: formData.message.trim(),
    });
    setFormData(EMPTY_FORM);
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="careers-page">
      {/* 1. HERO SECTION */}
      <section className="car-hero">
        <img
          src="/assets/careers/team-collaboration.jpg"
          alt="Nexus architectural and engineering leadership team"
          className="car-hero-bg"
        />
        <div className="car-hero-overlay" />

        <div className="wrap car-hero-inner">
          <div className="car-hero-copy">
            <div className="car-hero-pill">
              <span className="car-hero-pill-dot" />
              Careers at Nexus Group
            </div>

            <h1 className="car-hero-title">
              <Typewriter phrases={CAREER_HERO_PHRASES} />
            </h1>

            <p className="car-hero-desc">
              Join 500+ dedicated engineering, architectural, and business professionals.
              At Nexus, we cultivate a culture of uncompromising craftsmanship, direct
              mentorship, and work that transforms skylines and families for generations.
            </p>

            <div className="car-hero-actions">
              <button type="button" className="car-btn-primary" onClick={() => setFormOpen(true)}>
                <span>Submit your resume</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY METRICS STRIP (3-tier vertical hierarchy: number, heading, text) */}
      <section className="car-metrics-bar">
        <div className="wrap car-metrics-grid">
          <div className="car-metrics-col">
            <div className="car-metric-item">
              <div className="car-metric-num">30+</div>
              <div className="car-metric-label">Years of Trust</div>
              <div className="car-metric-sub">Excellence and stability since 1996</div>
            </div>

            <div className="car-metric-item">
              <div className="car-metric-num">500+</div>
              <div className="car-metric-label">Team Members</div>
              <div className="car-metric-sub">Across engineering, design & sales</div>
            </div>
          </div>

          <div className="car-metrics-divider" />

          <div className="car-metrics-col">
            <div className="car-metric-item">
              <div className="car-metric-num">100%</div>
              <div className="car-metric-label">Safety Compliance</div>
              <div className="car-metric-sub">Zero compromise on worker protection</div>
            </div>

            <div className="car-metric-item">
              <div className="car-metric-num">4.8★</div>
              <div className="car-metric-label">Employee Index</div>
              <div className="car-metric-sub">Industry-leading workplace satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURE PILLARS */}
      <section className="car-culture-sec">
        <div className="wrap">
          <div className="car-sec-header">
            <span className="car-sec-eyebrow">Our Workplace Values</span>
            <h2 className="car-sec-title">Why Build Your Career At Nexus?</h2>
            <p className="car-sec-subtitle">
              We empower our people with autonomy, cutting-edge construction methodologies,
              and genuine pride in delivering permanent landmarks.
            </p>
          </div>

          <div className="car-pillars-grid">
            <div className="car-pillar-card">
              <div className="car-pillar-icon-wrap">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="car-pillar-title">Engineering Mastery</h3>
              <p className="car-pillar-desc">
                Work with monolithic aluminum formwork (Mivan), advanced BIM workflows, and
                stringent structural standards that lead Maharashtra&apos;s real estate sector.
              </p>
            </div>

            <div className="car-pillar-card">
              <div className="car-pillar-icon-wrap">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="car-pillar-title">Accelerated Growth</h3>
              <p className="car-pillar-desc">
                Clear merit-based progression paths, annual leadership retreats, and on-site
                training programs that turn high performers into project heads.
              </p>
            </div>

            <div className="car-pillar-card">
              <div className="car-pillar-icon-wrap">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="car-pillar-title">Unwavering Integrity</h3>
              <p className="car-pillar-desc">
                Transparent operations, ethical governance, and respect for every employee,
                consultant, and site artisan across all touchpoints.
              </p>
            </div>

            <div className="car-pillar-card">
              <div className="car-pillar-icon-wrap">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="car-pillar-title">Family & Wellbeing</h3>
              <p className="car-pillar-desc">
                Comprehensive health insurance for your family, annual wellness checkups,
                and a work culture that values sustainable, balanced careers.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="car-jobs-sec" id="open-roles">
        <div className="wrap">
          <div className="car-resume-panel">
            <span className="car-sec-eyebrow">Careers</span>
            <h2 className="car-sec-title">Share your resume</h2>
            <p className="car-sec-subtitle">
              Tell us about your experience and send your resume or CV. Our team will review it and get in touch when there is a suitable opportunity.
            </p>
            <button type="button" className="car-btn-primary" onClick={() => setFormOpen(true)}>
              <span>Submit your resume or CV</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT 4-STEP HIRING PROCESS */}
      <section className="car-process-sec">
        <div className="wrap">
          <div className="car-sec-header">
            <span className="car-sec-eyebrow">Clear & Professional</span>
            <h2 className="car-sec-title">Our Recruitment Process</h2>
            <p className="car-sec-subtitle">
              We respect your time. Our hiring journey is clear, constructive, and focused on mutual fit.
            </p>
          </div>

          <div className="car-steps-grid">
            <div className="car-step-card">
              <div className="car-step-num">01</div>
              <h3 className="car-step-title">Application Review</h3>
              <p className="car-step-desc">
                Our HR and technical panel evaluates your background against project requirements within 48 hours.
              </p>
            </div>

            <div className="car-step-card">
              <div className="car-step-num">02</div>
              <h3 className="car-step-title">Technical Deep-Dive</h3>
              <p className="car-step-desc">
                An in-depth conversation with the department lead discussing your structural or business achievements.
              </p>
            </div>

            <div className="car-step-card">
              <div className="car-step-num">03</div>
              <h3 className="car-step-title">Leadership Interaction</h3>
              <p className="car-step-desc">
                A session with Nexus executive leadership to align on career aspirations, values, and organizational culture.
              </p>
            </div>

            <div className="car-step-card">
              <div className="car-step-num">04</div>
              <h3 className="car-step-title">Welcome to Nexus</h3>
              <p className="car-step-desc">
                Transparent compensation offer, structured onboarding, and induction into your new landmark project team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {formOpen && (
      <div
        className="car-form-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="car-form-title"
        onClick={() => setFormOpen(false)}
      >
        <div className="car-form-modal-panel" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            className="car-form-modal-close"
            onClick={() => setFormOpen(false)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="car-sec-header">
            <span className="car-sec-eyebrow">Resume or CV</span>
            <h2 className="car-sec-title" id="car-form-title">Submit your resume</h2>
            <p className="car-sec-subtitle">
              Share your details and a link to your resume or CV. Our team will review it and contact you.
            </p>
          </div>

          <div className="car-apply-card">
            {submitted ? (
              <div className="car-success-box">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4>Application Submitted Successfully</h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for your interest in Nexus Group. Our talent acquisition team has received
                  your profile and will reach out to you within 48 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(EMPTY_FORM);
                  }}
                  className="mt-5 text-sm font-semibold text-emerald-900 underline cursor-pointer"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="car-form-grid">
                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kulkarni"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="phone">
                      Mobile / WhatsApp Number (10 Digits) *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      required
                      maxLength={10}
                      minLength={10}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="role">
                      Role or area of interest
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="e.g. Civil engineering, Sales, Architecture"
                      value={formData.role}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="experience">
                      Total Experience (Years) *
                    </label>
                    <input
                      id="experience"
                      name="experience"
                      type="text"
                      required
                      placeholder="e.g. 6 Years"
                      value={formData.experience}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="currentOrg">
                      Current / Most Recent Company
                    </label>
                    <input
                      id="currentOrg"
                      name="currentOrg"
                      type="text"
                      placeholder="e.g. Shapoorji / Godrej / Self"
                      value={formData.currentOrg}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group car-form-full">
                    <label className="car-form-label" htmlFor="portfolioLink">
                      Resume or CV link *
                    </label>
                    <input
                      id="portfolioLink"
                      name="portfolioLink"
                      type="url"
                      required
                      placeholder="Google Drive, Dropbox, or LinkedIn link to your resume"
                      value={formData.portfolioLink}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group car-form-full">
                    <label className="car-form-label" htmlFor="message">
                      Cover Note / Why Nexus Group?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Briefly describe your notable project accomplishments and what excites you about joining Nexus..."
                      value={formData.message}
                      onChange={handleFormChange}
                      className="car-form-textarea"
                    />
                  </div>

                  <div className="car-form-submit-row">
                    <span className="car-form-note">
                      🔒 Your information is confidential and used solely for recruitment.
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="car-form-submit-btn"
                    >
                      {submitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <span>Submit resume</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      )}

      {/* 8. GLOBAL FOOTER */}
      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateHome={onNavigateHome}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateBlogs={onNavigateBlogs}
        onOpenEnquire={onOpenEnquire}
      />
    </div>
  );
}
