import React, { useState } from 'react';
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';
import Footer from './Footer';
import Typewriter from './Typewriter';
import '../careers.css';

const CAREER_HERO_PHRASES = [
  'Build Your Legacy With Pune\'s Finest.',
  'Shape Skylines. Grow With Industry Leaders.',
  'Where Passion Meets Engineering Rigor.',
];

const JOB_OPENINGS = [
  {
    id: 'pm-highrise',
    title: 'Senior Project Manager (High-Rise RCC)',
    department: 'Civil & Engineering',
    location: 'Punawale & Kiwale, Pune',
    experience: '8–12 Years',
    type: 'Full-Time',
    summary:
      'Lead execution of landmark 20+ story residential towers. Oversee RCC contractors, monolithic formwork, safety benchmarks, and ensure timely zero-defect handovers.',
    responsibilities: [
      'Manage on-site structural execution, scheduling, and contractor coordination.',
      'Enforce Nexus zero-compromise quality & safety standards across all tower floors.',
      'Coordinate with MEP, structural consultants, and liaison authorities.',
      'Track procurement schedules, concrete test results, and milestone certifications.',
    ],
    requirements: [
      'B.Tech / B.E. in Civil Engineering with strong high-rise RCC execution track record.',
      'Minimum 8 years experience in reputed real estate development firms.',
      'Proficiency in MS Project, AutoCAD, and modern formwork methodologies (Mivan / Aluminum).',
    ],
  },
  {
    id: 'arch-lead',
    title: 'Architectural Design Lead',
    department: 'Architecture & Planning',
    location: 'Nexus Corporate HQ, Pune',
    experience: '5–8 Years',
    type: 'Full-Time',
    summary:
      'Drive conceptual master planning, residential unit layouts, and statutory drawing approvals for upcoming residential and commercial developments.',
    responsibilities: [
      'Collaborate with principal architects to develop functional, light-filled spatial plans.',
      'Ensure strict compliance with Pune Municipal Corporation (PMC/PCMC) UDCPR bylaws.',
      'Interface with 3D visualization, BIM, and landscape design partners.',
      'Conduct periodic site reviews to verify architectural execution against drawings.',
    ],
    requirements: [
      'B.Arch / M.Arch from an accredited architectural institute.',
      '5+ years with focus on premium residential & commercial mixed-use design.',
      'Strong proficiency in Revit, AutoCAD, SketchUp, and presentation tools.',
    ],
  },
  {
    id: 'sales-manager',
    title: 'Assistant Sales Manager (Luxury Residential)',
    department: 'Sales & Marketing',
    location: 'Chikhali & Moshi, Pune',
    experience: '4–7 Years',
    type: 'Full-Time',
    summary:
      'Drive high-ticket residential unit sales for Nexus Kinara and Nexus Atrium. Guide prospective buyers through property walkthroughs, pricing negotiations, and closure.',
    responsibilities: [
      'Conduct consultative product presentations to high-net-worth homebuyers and investors.',
      'Build and nurture relationships with premier Channel Partners across PCMC & Pune.',
      'Achieve monthly and quarterly site sales targets with high closing ratios.',
      'Ensure seamless post-booking onboarding in coordination with the CRM team.',
    ],
    requirements: [
      'Graduate or MBA in Marketing / Real Estate Management.',
      'Proven track record of primary real estate residential sales in Pune / PCMC.',
      'Exceptional interpersonal, negotiation, and relationship management skills.',
    ],
  },
  {
    id: 'qa-qc-lead',
    title: 'Lead QA / QC & Safety Engineer',
    department: 'Civil & Engineering',
    location: 'Punawale Project Sites',
    experience: '6–9 Years',
    type: 'Full-Time',
    summary:
      'Spearhead quality assurance audits, raw material testing protocols, and on-site occupational safety governance across ongoing sites.',
    responsibilities: [
      'Conduct rigorous batch testing for ready-mix concrete, steel reinforcements, and waterproofing.',
      'Maintain QA/QC registers, non-conformance reports (NCR), and corrective action logs.',
      'Implement daily toolbox talks and zero-incident safety protocols for site workers.',
      'Lead final pre-possession snagging audits prior to unit delivery.',
    ],
    requirements: [
      'Diploma / Degree in Civil Engineering with certified QA/QC & Safety credentials.',
      '6+ years hands-on site quality testing experience with top-tier builders.',
      'Deep knowledge of IS codes, lab testing procedures, and safety standards.',
    ],
  },
  {
    id: 'crm-mgr',
    title: 'Relationship Manager (Customer Experience & Handover)',
    department: 'CRM & Quality',
    location: 'Nexus Corporate HQ, Pune',
    experience: '3–6 Years',
    type: 'Full-Time',
    summary:
      'Serve as the primary trusted advisor for homebuyers from agreement registration through key handover and society formation.',
    responsibilities: [
      'Manage home loan disbursements, demand letters, and payment milestone tracking.',
      'Organize customer possession walkthroughs and coordinate snag resolution with site teams.',
      'Address customer inquiries promptly to maintain highest CSAT ratings.',
      'Coordinate execution of registered agreements and deed handovers.',
    ],
    requirements: [
      'Graduate with 3+ years in Real Estate Customer Relationship Management (CRM).',
      'Familiarity with Real Estate ERP software (Farvision / Salesforce / Highrise).',
      'Warm communication and empathy in handling customer expectations.',
    ],
  },
];

const CATEGORIES = [
  'All Roles',
  'Civil & Engineering',
  'Architecture & Planning',
  'Sales & Marketing',
  'CRM & Quality',
];

export default function CareersPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onOpenEnquire,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Roles');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    currentOrg: '',
    portfolioLink: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = JOB_OPENINGS.filter((job) => {
    if (selectedCategory === 'All Roles') return true;
    return job.department === selectedCategory;
  });

  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, role: jobTitle }));
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="careers-page">
      {/* 1. HERO SECTION */}
      <section className="car-hero">
        <div className="car-hero-backdrop" />
        <div className="car-hero-glow" />

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
              <a href="#open-roles" className="car-btn-primary">
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#apply-form" className="car-btn-secondary">
                <span>Submit Direct CV</span>
              </a>
            </div>
          </div>

          <div className="car-hero-media">
            <img
              src="/assets/careers/team-collaboration.jpg"
              alt="Nexus architectural and engineering leadership team"
            />
            <div className="car-hero-media-badge">
              <span>Engineering & Design Hub • Pune HQ</span>
              <small>Nexus Group</small>
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


      {/* 5. OPEN POSITIONS SECTION */}
      <section className="car-jobs-sec" id="open-roles">
        <div className="wrap">
          <div className="car-sec-header">
            <span className="car-sec-eyebrow">Current Opportunities</span>
            <h2 className="car-sec-title">Explore Open Roles</h2>
            <p className="car-sec-subtitle">
              Find your next career chapter. We are expanding across Pune, Punawale,
              Chikhali, Moshi, and Nashik developments.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="car-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`car-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="car-jobs-list">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No active roles currently in this department. Please submit a direct application below.
              </div>
            ) : (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div className="car-job-card" key={job.id}>
                    <div className="car-job-header">
                      <div className="car-job-title-row">
                        <h3 className="car-job-role">{job.title}</h3>
                        <div className="car-job-meta-row">
                          <span className="car-job-dept-pill">{job.department}</span>
                          <span className="car-job-exp-pill">{job.experience}</span>
                          <span className="car-job-meta-item">
                            <MapPin className="w-3.5 h-3.5 text-gray-400" />
                            {job.location}
                          </span>
                          <span className="car-job-meta-item">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="car-job-actions">
                        <button
                          type="button"
                          className="car-job-details-btn"
                          onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        >
                          {isExpanded ? (
                            <span className="inline-flex items-center gap-1">
                              Hide Details <ChevronUp className="w-4 h-4" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1">
                              View Details <ChevronDown className="w-4 h-4" />
                            </span>
                          )}
                        </button>

                        <button
                          type="button"
                          className="car-job-apply-btn"
                          onClick={() => handleApplyClick(job.title)}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {job.summary}
                    </p>

                    {isExpanded && (
                      <div className="car-job-expandable">
                        <h4>Key Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>

                        <h4>Role Qualifications & Experience</h4>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })
            )}
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

      {/* 7. APPLICATION FORM */}
      <section className="car-apply-sec" id="apply-form">
        <div className="wrap">
          <div className="car-sec-header">
            <span className="car-sec-eyebrow">Get In Touch</span>
            <h2 className="car-sec-title">Submit Your Application</h2>
            <p className="car-sec-subtitle">
              Apply directly for an open role or register your profile in our talent pool for upcoming project expansions.
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
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      role: '',
                      experience: '',
                      currentOrg: '',
                      portfolioLink: '',
                      message: '',
                    });
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
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="car-form-input"
                    />
                  </div>

                  <div className="car-form-group">
                    <label className="car-form-label" htmlFor="role">
                      Position of Interest *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleFormChange}
                      className="car-form-select"
                    >
                      <option value="">-- Select a Position --</option>
                      {JOB_OPENINGS.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title} ({j.department})
                        </option>
                      ))}
                      <option value="General Engineering / Construction">
                        General Engineering / Construction
                      </option>
                      <option value="General Sales & Marketing">
                        General Sales & Marketing
                      </option>
                      <option value="Other / Spontaneous Application">
                        Other / Spontaneous Application
                      </option>
                    </select>
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
                      Resume Link / LinkedIn / Portfolio URL *
                    </label>
                    <input
                      id="portfolioLink"
                      name="portfolioLink"
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/... or Google Drive resume link"
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
                          <span>Submit Application</span>
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
      </section>

      {/* 8. GLOBAL FOOTER */}
      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateHome={onNavigateHome}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onOpenEnquire={onOpenEnquire}
      />
    </div>
  );
}
