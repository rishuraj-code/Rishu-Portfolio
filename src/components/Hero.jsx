import { ArrowRight, Mail, Code2, Zap, Layout, FileText, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="pulse-indicator">
              <span className="pulse-dot"></span>
              <span className="pulse-ring"></span>
            </span>
            <span className="badge-text">{personalInfo.status}</span>
          </div>

          {/* Main Headings */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="hero-role-prefix">&gt; </span>
            <span className="hero-role">{personalInfo.title}</span>
          </div>

          <p className="hero-description">
            {personalInfo.tagline} {personalInfo.bio}
          </p>

          {/* Call to Actions */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="socials-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-circle"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personalInfo.phoneDisplay}`}
                className="social-circle"
                aria-label="Call Rishu"
                title={`Call: ${personalInfo.phoneDisplay}`}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Visual with Glowing Avatar & Badges */}
        <div className="hero-visual">
          <div className="avatar-frame-glow"></div>
          
          <div className="avatar-card glass-card">
          
            <img
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt="Rishu Developer Portrait"
              className="avatar-image"
            />
            
            <div className="avatar-info-bar">
              <div className="avatar-info-code">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
                <span className="code-filename">portfolio.jsx</span>
              </div>
              <span className="code-status">✓ Ready to ship</span>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="floating-badge badge-react animate-float">
            <div className="badge-icon-box react-blue">
              <Code2 size={18} />
            </div>
            <div>
              <div className="floating-badge-title">Software Engineering</div>
              <div className="floating-badge-sub">Scalable Architecture</div>
            </div>
          </div>

          <div className="floating-badge badge-speed animate-float-delayed">
            <div className="badge-icon-box vite-blue">
              <Zap size={18} />
            </div>
            <div>
              <div className="floating-badge-title">Vite Powered</div>
              <div className="floating-badge-sub">Lightning Fast</div>
            </div>
          </div>

          <div className="floating-badge badge-ui animate-float">
            <div className="badge-icon-box ui-blue">
              <Layout size={18} />
            </div>
            <div>
              <div className="floating-badge-title">Modern CSS</div>
              <div className="floating-badge-sub">Responsive & Clean</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Strip */}
      <div className="container">
        <div className="stats-strip glass-card">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
