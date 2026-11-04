import { ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <div className="logo-icon-box">
                <Terminal size={18} className="logo-icon" />
              </div>
              <span className="logo-text">
                {personalInfo.name}
                <span className="logo-accent">.dev</span>
              </span>
            </a>
            <p className="footer-tagline">
              Engineering scalable web applications, robust software systems, and modern digital experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-group">
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-links">
                <li><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>
                <li><a href={`tel:${personalInfo.phoneDisplay}`}>+91 {personalInfo.phoneDisplay}</a></li>
                <li>
                  <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
                    View Resume (PDF)
                  </a>
                </li>
                <li><a href={personalInfo.socials.github} target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {CURRENT_YEAR} {personalInfo.name}. All rights reserved. Built with React & Vite.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
