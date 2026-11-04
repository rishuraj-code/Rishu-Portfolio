import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Database, Trash2, MessageSquare, Phone, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedMessages, setSavedMessages] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });
  const [showStorage, setShowStorage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newEntry = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      submittedAt: new Date().toLocaleString()
    };

    // Save directly to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      const updated = [newEntry, ...(Array.isArray(existing) ? existing : [])];
      localStorage.setItem('portfolio_messages', JSON.stringify(updated));
      setSavedMessages(updated);
      console.log('✅ Form submission saved in localStorage:', newEntry);
    } catch (err) {
      console.error('Failed to save message to localStorage:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success banner after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 300);
  };

  const handleClearStorage = () => {
    try {
      localStorage.removeItem('portfolio_messages');
      setSavedMessages([]);
      setShowStorage(false);
    } catch (err) {
      console.error('Failed to clear localStorage:', err);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            <span>Connect</span>
          </span>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-panel">
            <div className="contact-card glass-card">
              <h3 className="contact-panel-title">Let's build something remarkable.</h3>
              <p className="contact-panel-desc">
                I'm actively seeking opportunities to collaborate on modern web projects. 
                Whether you have an internship, job opportunity, or freelance project, I'd love to hear from you.
              </p>

              <div className="contact-items-list">
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={20} className="contact-icon" />
                  </div>
                  <div>
                    <div className="contact-item-label">Email Address</div>
                    <a href={`mailto:${personalInfo.email}`} className="contact-item-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Phone size={20} className="contact-icon" />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone / WhatsApp</div>
                    <a href={`tel:${personalInfo.phoneDisplay}`} className="contact-item-value">
                      +91 {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} className="contact-icon" />
                  </div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">{personalInfo.location}</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <FileText size={20} className="contact-icon" />
                  </div>
                  <div>
                    <div className="contact-item-label">Resume Document</div>
                    <a
                      href={personalInfo.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-value"
                      style={{ color: 'var(--blue-cyan)', textDecoration: 'underline' }}
                    >
                      View Rishu's Resume (PDF)
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-block">
                <span className="contact-socials-title">Follow & Network:</span>
                <div className="contact-social-buttons">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-button"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-button"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            <div className="form-card glass-card">
              <h3 className="form-title">Send a Direct Message</h3>

              {submitted && (
                <div className="form-success-banner">
                  <CheckCircle size={20} style={{ flexShrink: 0 }} />
                  <span>Thank you! Your message has been saved in localStorage successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Saving...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* LocalStorage Viewer & Status */}
              {savedMessages.length > 0 && (
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setShowStorage((prev) => !prev)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Database size={14} />
                      <span>{showStorage ? 'Hide Stored Data' : `View Stored Messages in localStorage (${savedMessages.length})`}</span>
                    </button>

                    {showStorage && (
                      <button
                        type="button"
                        onClick={handleClearStorage}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#f87171',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Trash2 size={13} />
                        <span>Clear All</span>
                      </button>
                    )}
                  </div>

                  {showStorage && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', maxHeight: '240px', overflowY: 'auto' }}>
                      {savedMessages.map((msg) => (
                        <div
                          key={msg.id}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '8px',
                            padding: '0.75rem 1rem',
                            fontSize: '0.85rem'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: 'var(--blue-cyan)' }}>
                            <strong>{msg.name} ({msg.email})</strong>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{msg.submittedAt}</span>
                          </div>
                          <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                            {msg.subject}
                          </div>
                          <div style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
                            {msg.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
