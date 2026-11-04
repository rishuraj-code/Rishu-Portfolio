import { useState, useEffect } from 'react';
import { ExternalLink, FolderGit2, Star, PlayCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import AIStudentSathiDashboard from './AIStudentSathiDashboard';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isSathiModalOpen, setIsSathiModalOpen] = useState(false);

  // Auto-open modal if hash is #ai-student-sathi or #dashboard
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#ai-student-sathi' || window.location.hash === '#dashboard') {
        setIsSathiModalOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const categories = ['All', ...new Set(projectsData.map((item) => item.category))];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((item) => item.category === selectedFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            <span>Showcase</span>
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of web applications and projects built with React, JavaScript, and CSS.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Header Banner */}
              <div className="project-banner">
                <div className="project-banner-overlay"></div>
                <div className="project-banner-decor">
                  <div className="decor-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="decor-title">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                </div>
                
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={12} fill="currentColor" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-category-tag">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>

                {/* Interactive Dashboard Launcher Banner for AI Students साथी */}
                {project.id === 1 && (
                  <div
                    onClick={() => setIsSathiModalOpen(true)}
                    style={{
                      cursor: 'pointer',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '8px',
                      marginBottom: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      color: '#38bdf8',
                      transition: 'var(--transition)'
                    }}
                    title="Click to open the live interactive dashboard"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={14} />
                      <strong>Interactive AI Dashboard Demo</strong>
                    </div>
                    <span style={{ textDecoration: 'underline', fontWeight: 600 }}>Launch &rarr;</span>
                  </div>
                )}

                <p className="project-description">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-links">
                  {project.id === 1 ? (
                    <button
                      type="button"
                      onClick={() => setIsSathiModalOpen(true)}
                      className="btn btn-primary btn-sm project-btn"
                      style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
                        boxShadow: '0 0 16px rgba(56, 189, 248, 0.4)'
                      }}
                    >
                      <PlayCircle size={15} />
                      <span>Launch Dashboard</span>
                    </button>
                  ) : (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm project-btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm project-btn"
                  >
                    <GithubIcon size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive AI Students साथी Dashboard Modal */}
      <AIStudentSathiDashboard
        isOpen={isSathiModalOpen}
        onClose={() => setIsSathiModalOpen(false)}
      />
    </section>
  );
}
