import React, { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, Send, X, Loader2 } from 'lucide-react';
import { submitLeadToGoogleSheet } from '../services/leadService';

export const DEFAULT_PROJECT_OPTIONS = [
  'Nexus Skydale (Punawale)',
  'Nexus Kinaara (Chikhali)',
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

  // 2. Base project name match (ignoring parentheses e.g. "Nexus Kinaara (Chikhali)" -> "nexus kinaara")
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

export default function EnquiryModal({ isOpen, onClose, initialProject = '', mode = 'sales' }) {
  const isVendor = mode === 'vendor';
  const getEmptyForm = (proj) => ({
    name: '',
    phone: '',
    email: '',
    project: isVendor ? 'Vendor Enquiry' : (proj ? resolveProjectOption(proj) : 'General Enquiry'),
    message: '',
  });

  const [formData, setFormData] = useState(() => getEmptyForm(initialProject));
  const [submittedInfo, setSubmittedInfo] = useState({ name: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
      setSubmittedInfo({ name: '', project: '' });
      setFormData(getEmptyForm(initialProject));
    }
  }, [isOpen, initialProject, mode]);

  const projectOptions = useMemo(() => {
    if (formData.project && !DEFAULT_PROJECT_OPTIONS.includes(formData.project)) {
      return [formData.project, ...DEFAULT_PROJECT_OPTIONS];
    }
    return DEFAULT_PROJECT_OPTIONS;
  }, [formData.project]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '').slice(0, 10);
    if (cleanPhone.length !== 10) return;

    setIsSubmitting(true);
    const currentName = formData.name.trim();
    const currentProject = isVendor ? 'Vendor Enquiry' : (formData.project || 'General Enquiry');
    await submitLeadToGoogleSheet({
      category: 'sales',
      formType: isVendor ? 'Vendor Enquiry' : 'Website Contact / Enquiry Modal',
      cp: 'No',
      isCP: 'No',
      name: currentName,
      phone: cleanPhone,
      email: formData.email.trim(),
      project: currentProject,
      message: formData.message.trim(),
    });
    setSubmittedInfo({ name: currentName, project: currentProject });
    setFormData(getEmptyForm(initialProject));
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
          <h3 className="modal-title">{isVendor ? 'Vendor Enquiry' : 'Contact Us'}</h3>
          <p className="modal-subtitle">
            {isVendor
              ? 'Share your vendor details and our team will get in touch shortly.'
              : 'Fill in your details and our team will get in touch shortly.'}
          </p>
        </div>

        {/* Body */}
        <div className="modal-form">
          {submitted ? (
            <div className="modal-success" role="status" aria-live="polite">
              <div className="modal-success-icon">
                <CheckCircle2 size={32} strokeWidth={2.2} />
              </div>
              <span className="modal-success-badge">Enquiry Confirmed</span>
              <h4 className="modal-success-title">Thank You, {submittedInfo.name || 'There'}!</h4>
              <p className="modal-success-text">
                We have received your enquiry for{' '}
                <strong>{submittedInfo.project || 'Nexus Group'}</strong>. Our team will reach out to you shortly.
              </p>
              <div className="modal-success-actions">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(getEmptyForm(initialProject));
                    onClose();
                  }}
                  className="modal-success-btn"
                >
                  Done
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
                  <label className="form-label">Phone (10 Digits) *</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, '').slice(0, 10),
                      })
                    }
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

              {/* Project Selection — hidden for vendor enquiry */}
              {!isVendor && (
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
              )}

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
