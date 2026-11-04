import { useState } from 'react';
import { 
  Code, Layout, Palette, Smartphone, Grid, Zap, GitBranch, 
  Terminal, Package, Search, Server, Layers, Cpu, CheckCircle2, 
  Activity, Wrench, Network, Monitor, Database 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap = {
  'react': Code,
  'code': Code,
  'layout': Layout,
  'palette': Palette,
  'smartphone': Smartphone,
  'grid': Grid,
  'zap': Zap,
  'git-branch': GitBranch,
  'terminal': Terminal,
  'package': Package,
  'search': Search,
  'server': Server,
  'layers': Layers,
  'cpu': Cpu,
  'check-circle': CheckCircle2,
  'activity': Activity,
  'network': Network,
  'monitor': Monitor,
  'database': Database
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((group) => group.category)];

  const filteredGroups = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((group) => group.category === activeCategory);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} />
            <span>Abilities</span>
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            The core tools, languages, and frameworks I use to build modern digital products.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Groups */}
        <div className="skills-groups-wrapper">
          {filteredGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="skill-category-block">
              <h3 className="category-heading">
                <span className="category-bullet"></span>
                {group.category}
              </h3>

              <div className="skills-grid">
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code;
                  return (
                    <div key={sIdx} className="skill-card glass-card">
                      <div className="skill-card-top">
                        <div className="skill-icon-wrap">
                          <IconComponent size={22} className="skill-icon" />
                        </div>
                        <span className="skill-level-badge">{skill.level}</span>
                      </div>
                      <div className="skill-info">
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
