import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="nav-logo">
          <div className="logo-icon-box">
            <Terminal size={18} className="logo-icon" />
          </div>
          <span className="logo-text">
            {personalInfo.name}
            <span className="logo-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="nav-actions">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle nav-social-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle nav-social-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={personalInfo.resumeUrl}
            className="btn btn-secondary btn-sm nav-cv-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <ArrowUpRight size={15} />
          </a>

          <a href="#contact" className="btn btn-primary btn-sm nav-hire-btn">
            Let's Talk
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-menu-actions">
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={handleLinkClick}
            >
              Get In Touch
            </a>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', width: '100%' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                onClick={handleLinkClick}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                onClick={handleLinkClick}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
