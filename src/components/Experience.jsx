import { GraduationCap, Briefcase, Calendar, Award, MapPin } from 'lucide-react';
import { experienceData, certificationsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            <span>Path</span>
          </span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A milestone timeline of my professional internship and academic background.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experienceData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-meta">
                  <span className="timeline-year">
                    <Calendar size={14} />
                    {item.year}
                  </span>
                  <span className="timeline-institution">
                    <Briefcase size={14} />
                    {item.institution}
                  </span>
                  {item.location && (
                    <span className="timeline-location" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  )}
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Block */}
        <div style={{ marginTop: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-tag">
              <Award size={14} />
              <span>Verified</span>
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-white)' }}>
              Professional <span className="gradient-text">Certifications</span>
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
            {certificationsData.map((cert, cIdx) => (
              <div key={cIdx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-cyan)', flexShrink: 0 }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-white)', marginBottom: '0.3rem' }}>{cert.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{cert.subtitle}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--blue-light)', fontFamily: 'var(--font-mono)' }}>{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

