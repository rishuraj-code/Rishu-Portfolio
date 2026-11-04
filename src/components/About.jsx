import { CheckCircle2, Code2, Smartphone, Zap, Sparkles, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="pillar-icon" />,
      title: "Clean Software Architecture",
      desc: "Building modular, maintainable applications with clear design patterns and robust engineering standards."
    },
    {
      icon: <Smartphone className="pillar-icon" />,
      title: "Responsive & Modern Design",
      desc: "Crafting layouts with CSS Flexbox & Grid that adapt smoothly across all mobile devices and widescreen displays."
    },
    {
      icon: <Zap className="pillar-icon" />,
      title: "Fast Build & Performance",
      desc: "Leveraging Vite's instant Hot Module Replacement (HMR) and optimized assets for peak rendering speeds."
    },
    {
      icon: <Sparkles className="pillar-icon" />,
      title: "High Attention to Detail",
      desc: "Polishing typography, micro-interactions, dark-mode contrast, and accessibility for an exceptional user experience."
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} />
            <span>Discover</span>
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Myself</span>
          </h2>
          <p className="section-subtitle">
            Passionate about modern web technologies and creating interfaces people love to use.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card glass-card">
            <h3 className="about-heading">
              Dedicated to crafting <span className="gradient-text">seamless digital experiences</span>.
            </h3>
            
            <p className="about-text">
              I am an enthusiastic and dedicated <strong>Master of Computer Applications (MCA)</strong> student at 
              <strong> Bharati Vidyapeeth (IMED), Pune</strong> (CGPA: 7.79 / 10), with a strong Computer Science background 
              and a BCA degree from <strong>Arcade Business College, Patna</strong> (Honours: 71.13%).
            </p>

            <p className="about-text">
              Currently, I am working as a <strong>Software Engineer Intern at The Data Tech Labs (TDTL)</strong>, 
              where I develop scalable web-based CRM solutions and enterprise applications. I am deeply passionate about 
              architecting clean user experiences, integrating robust REST APIs, and solving real-world engineering challenges.
            </p>

            <div className="about-points">
              <div className="point-item">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Interning as Software Engineer at The Data Tech Labs (TDTL)</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Full-stack software development, database design & API integrations</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={18} className="point-icon" />
                <span>Certified in AGENTIC AI & Python Fundamentals (Supported by Infosys Foundation)</span>
              </div>
            </div>

            <div className="about-action" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.resumeUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume (PDF)
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="about-pillars">
            {highlights.map((item, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-icon-box">
                  {item.icon}
                </div>
                <div className="pillar-content">
                  <h4 className="pillar-title">{item.title}</h4>
                  <p className="pillar-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
