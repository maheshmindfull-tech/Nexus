import React, { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, Send, X, Loader2 } from 'lucide-react';
import { submitLeadToGoogleSheet } from '../services/leadService';

export const DEFAULT_PROJECT_OPTIONS = [
  'Nexus Skydale (Punawale)',
  'Nexus Kinara (Chikhali)',
  'Nexus Westia (Punawale)',
  'Nexus Prime Square (Moshi)',
  'Nexus Genesis (Kiwale)',
  'Nexus Atrium (Moshi)',
  'Nexus Imperia (Moshi)',
  'General Enquiry',
];

export function resolveProjectOption(input, options = DEFAULT_PROJECT_OPTIONS) {
  if (!input) return 'General Enquiry';
  const str = String(input).trim();
  if (!str) return 'General Enquiry';

  const lower = str.toLowerCase();

  // 1. Exact match (case-insensitive)
  const exact = options.find((opt) => opt.toLowerCase() === lower);
  if (exact) return exact;

  // 2. Base project name match (ignoring parentheses e.g. "Nexus Kinara (Chikhali)" -> "nexus kinara")
  const inputBase = lower.replace(/\s*\([^)]*\)$/, '').trim();
  const baseMatch = options.find((opt) => {
    const optBase = opt.toLowerCase().replace(/\s*\([^)]*\)$/, '').trim();
    return optBase === inputBase;
  });
  if (baseMatch) return baseMatch;

  // 3. Keyword / partial match (without "nexus " prefix)
  const cleanWord = inputBase.replace(/^nexus\s+/, '').trim();
  if (cleanWord) {
    const keywordMatch = options.find((opt) => opt.toLowerCase().includes(cleanWord));
    if (keywordMatch) return keywordMatch;
  }

  // 4. Return as-is if no preset match (will be added as a custom option in the dropdown)
  return str;
}

export default function EnquiryModal({ isOpen, onClose, initialProject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: resolveProjectOption(initialProject),
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
      const targetProject = initialProject
        ? resolveProjectOption(initialProject)
        : 'General Enquiry';
      setFormData((prev) => ({
        ...prev,
        project: targetProject,
      }));
    }
  }, [isOpen, initialProject]);

  const projectOptions = useMemo(() => {
    if (formData.project && !DEFAULT_PROJECT_OPTIONS.includes(formData.project)) {
      return [formData.project, ...DEFAULT_PROJECT_OPTIONS];
    }
    return DEFAULT_PROJECT_OPTIONS;
  }, [formData.project]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitLeadToGoogleSheet({
      formType: 'Website Contact / Enquiry Modal',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      project: formData.project || 'General Enquiry',
      message: formData.message || '',
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <h3 className="modal-title">Contact Us</h3>
          <p className="modal-subtitle">
            Fill in your details and our team will get in touch shortly.
          </p>
        </div>

        {/* Body */}
        <div className="modal-form">
          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 bg-teal-50 text-[#0097a7] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">
                Message Sent!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team will reach out to you shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-[#009dbd] hover:bg-[#007c93] text-white font-semibold rounded-none text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="form-row">
                <div>
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Project Selection */}
              <div className="form-group">
                <label className="form-label">Select Project</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="form-select"
                >
                  {projectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="modal-submit-btn"
                style={isSubmitting ? { opacity: 0.75, cursor: 'not-allowed' } : undefined}
              >
                {isSubmitting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
              </button>

              <p className="modal-privacy-note">
                🔒 We respect your privacy. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
