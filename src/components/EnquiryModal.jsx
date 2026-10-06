import React, { useState } from 'react';
import { CheckCircle2, Send, X } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Nexus Skydale (Punawale)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  className="px-6 py-2 bg-[#0097a7] hover:bg-[#008290] text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer"
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
                  <option value="Nexus Skydale (Punawale)">Nexus Skydale (Punawale)</option>
                  <option value="Nexus Kinara (Chikhali)">Nexus Kinara (Chikhali)</option>
                  <option value="Nexus Westia (Punawale)">Nexus Westia (Punawale)</option>
                  <option value="Nexus Square (Punawale)">Nexus Square (Punawale)</option>
                  <option value="Nexus Genesis (Kiwale)">Nexus Genesis (Kiwale)</option>
                  <option value="General Enquiry">General Enquiry</option>
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
              <button type="submit" className="modal-submit-btn">
                <Send className="w-3.5 h-3.5" />
                <span>Submit Enquiry</span>
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
