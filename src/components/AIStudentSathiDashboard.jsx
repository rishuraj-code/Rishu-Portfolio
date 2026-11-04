import { useState, useEffect } from 'react';
import { 
  GraduationCap, Bot, BookOpen, CheckCircle2, BarChart3, 
  Send, X, Flame, Clock, Award, Sparkles, ChevronRight, 
  Layers, Network, Monitor, Database 
} from 'lucide-react';

export default function AIStudentSathiDashboard({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Sample Chat Messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Namaste Rishu! 🌟 I'm your AI Students साथी. I'm connected to your MCA syllabus (Computer Networking, Operating Systems, MongoDB, and React.js). How can I help you study today?",
      time: '10:00 AM'
    }
  ]);

  // Sample Interactive Assignments
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Operating Systems: CPU Scheduling Algorithms Lab', course: 'Operating Systems', dueDate: 'Tomorrow, 11:59 PM', completed: false, priority: 'High' },
    { id: 2, title: 'MongoDB: E-Commerce Aggregation Pipeline Schema', course: 'Database Systems', dueDate: 'In 3 Days', completed: false, priority: 'Medium' },
    { id: 3, title: 'Computer Networks: TCP vs UDP Packet Analysis', course: 'Computer Networking', dueDate: 'Yesterday', completed: true, priority: 'Completed' },
    { id: 4, title: 'React.js: Interactive State Management with Hooks', course: 'Frontend Engineering', dueDate: '3 days ago', completed: true, priority: 'Completed' }
  ]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard shortcut (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Toggle assignment completion
  const toggleAssignment = (id) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Pre-programmed AI knowledge answers
  const getAIAnswer = (query) => {
    const q = query.toLowerCase();
    if (q.includes('tcp') || q.includes('handshake') || q.includes('network')) {
      return `### 🌐 Computer Networking: TCP 3-Way Handshake\n\nTo establish a reliable connection, TCP uses a **3-step handshake**:\n1. **SYN (Synchronize):** Client sends a SYN segment to the server with an initial sequence number (e.g., \`Seq = X\`).\n2. **SYN-ACK:** Server acknowledges with \`ACK = X + 1\` and sends its own SYN with sequence number \`Seq = Y\`.\n3. **ACK (Acknowledge):** Client responds with \`ACK = Y + 1\`. Connection is now **ESTABLISHED** and reliable data transfer begins!\n\n💡 *Pro-Tip:* This ensures both client and server can transmit and receive data reliably.`;
    }
    if (q.includes('deadlock') || q.includes('operating system') || q.includes('os')) {
      return `### 💻 Operating Systems: Deadlock & Coffman Conditions\n\nA **Deadlock** is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by another process.\n\n**The 4 Necessary Coffman Conditions:**\n1. **Mutual Exclusion:** Resources cannot be shared simultaneously.\n2. **Hold and Wait:** A process holds at least one resource and is waiting for more.\n3. **No Preemption:** Resources cannot be forcibly taken away.\n4. **Circular Wait:** Process $P_1$ waits for $P_2$, which waits for $P_3$, which waits for $P_1$.\n\n🛡️ *Prevention Strategy:* Break any one of these 4 conditions (e.g., total resource ordering or timeouts)!`;
    }
    if (q.includes('mongo') || q.includes('sql') || q.includes('database')) {
      return `### 🍃 MongoDB Aggregation Pipeline vs SQL GROUP BY\n\nIn MongoDB, the **Aggregation Pipeline** processes documents in stages (similar to an assembly line):\n\n\`\`\`javascript\ndb.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },\n  { $sort: { totalSpent: -1 } }\n])\n\`\`\`\n\n**Equivalent in SQL:**\n\`\`\`sql\nSELECT customerId, SUM(amount) AS totalSpent\nFROM orders\nWHERE status = 'completed'\nGROUP BY customerId\nORDER BY totalSpent DESC;\n\`\`\`\n\n⚡ *MongoDB Advantage:* Flexible BSON documents, horizontal sharding, and embedded nested documents!`;
    }
    if (q.includes('react') || q.includes('hook') || q.includes('state')) {
      return `### ⚛️ React.js Core Concepts\n\n1. **Component Driven Architecture:** Build modular, reusable UI units.\n2. **Hooks (\`useState\`, \`useEffect\`, \`useMemo\`):** Manage component state and side effects without class components.\n3. **Unidirectional Data Flow:** Data flows down via props; changes flow up via callbacks.\n4. **Virtual DOM:** Efficient diffing algorithms ensure only modified nodes re-render in the browser!`;
    }
    return `### 🤖 AI साथी Answer\n\nGreat question! For "${query}", here is your concise study summary:\n\n- **Core Definition:** Break down the concept into fundamental components first.\n- **Application:** Try writing a small code snippet or draw an architectural diagram to solidify the concept.\n- **Next Steps:** Review chapter notes and practice 3 sample problems in your student portal!\n\nKeep up the great study momentum! 🔥`;
  };

  const handleSendMessage = (textToSend) => {
    const message = textToSend || chatInput;
    if (!message.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        sender: 'ai',
        text: getAIAnswer(message),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="sathi-modal-overlay" onClick={onClose}>
      <div 
        className="sathi-modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <header className="sathi-header">
          <div className="sathi-header-left">
            <div className="sathi-logo-box">
              <GraduationCap size={22} className="sathi-logo-icon" />
            </div>
            <div>
              <div className="sathi-title-row">
                <h2 className="sathi-title">AI Students साथी</h2>
                <span className="sathi-badge-version">v2.4 Live Demo</span>
                <span className="sathi-ai-status">
                  <span className="sathi-pulse-dot"></span>
                  AI Online
                </span>
              </div>
              <p className="sathi-subtitle">
                Centralized AI-Powered Learning Platform &bull; Student: <strong>Rishu Raj (MCA, Bharati Vidyapeeth)</strong>
              </p>
            </div>
          </div>

          <div className="sathi-header-right">
            <button 
              onClick={onClose} 
              className="sathi-close-btn"
              aria-label="Close Dashboard"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="sathi-nav-tabs">
          <button
            className={`sathi-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart3 size={16} />
            <span>Overview</span>
          </button>
          <button
            className={`sathi-tab-btn ${activeTab === 'ai-tutor' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai-tutor')}
          >
            <Bot size={16} />
            <span>AI साथी Tutor</span>
          </button>
          <button
            className={`sathi-tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <BookOpen size={16} />
            <span>My Courses</span>
          </button>
          <button
            className={`sathi-tab-btn ${activeTab === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <CheckCircle2 size={16} />
            <span>Assignments & Labs</span>
          </button>
        </nav>

        {/* Tab Content Body */}
        <div className="sathi-content-body">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="sathi-overview-view">
              {/* Welcome Hero Banner */}
              <div className="sathi-hero-banner">
                <div className="sathi-banner-info">
                  <span className="sathi-tag-pill">
                    <Sparkles size={13} />
                    <span>Personalized AI Study Engine</span>
                  </span>
                  <h3 className="sathi-greeting">Welcome back, Rishu Raj! 🚀</h3>
                  <p className="sathi-greeting-desc">
                    You've studied <strong>38.5 hours</strong> this month with an active <strong>7-Day AI Streak</strong>. 
                    Your next assignment <em>"OS CPU Scheduling Algorithms"</em> is due tomorrow!
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('ai-tutor')}
                  className="btn btn-primary btn-sm sathi-launch-ai-btn"
                >
                  <Bot size={16} />
                  <span>Ask AI साथी Now</span>
                </button>
              </div>

              {/* 4 KPI Metric Cards */}
              <div className="sathi-kpi-grid">
                <div className="sathi-kpi-card glass-card">
                  <div className="sathi-kpi-icon-box" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                    <Flame size={20} />
                  </div>
                  <div>
                    <div className="sathi-kpi-value">7 Days 🔥</div>
                    <div className="sathi-kpi-label">Active Study Streak</div>
                  </div>
                </div>

                <div className="sathi-kpi-card glass-card">
                  <div className="sathi-kpi-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <div className="sathi-kpi-value">4 Active</div>
                    <div className="sathi-kpi-label">Courses (88% avg)</div>
                  </div>
                </div>

                <div className="sathi-kpi-card glass-card">
                  <div className="sathi-kpi-icon-box" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="sathi-kpi-value">38.5 hrs</div>
                    <div className="sathi-kpi-label">Monthly Study Time</div>
                  </div>
                </div>

                <div className="sathi-kpi-card glass-card">
                  <div className="sathi-kpi-icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="sathi-kpi-value">7.79 / 10</div>
                    <div className="sathi-kpi-label">MCA Cumulative CGPA</div>
                  </div>
                </div>
              </div>

              {/* Two Column Grid: Today's Schedule & Quick AI Topics */}
              <div className="sathi-columns-grid">
                {/* Column 1: Learning Pathway */}
                <div className="sathi-panel-card glass-card">
                  <h4 className="sathi-panel-title">
                    <BookOpen size={16} />
                    <span>Today's Learning Roadmap</span>
                  </h4>
                  <div className="sathi-schedule-list">
                    <div className="sathi-schedule-item">
                      <div className="sathi-item-time">10:00 AM</div>
                      <div className="sathi-item-details">
                        <strong>Computer Networking</strong>
                        <span>OSI Model, IP Addressing & Subnetting Basics</span>
                      </div>
                      <span className="sathi-badge-done">Completed</span>
                    </div>

                    <div className="sathi-schedule-item">
                      <div className="sathi-item-time">02:30 PM</div>
                      <div className="sathi-item-details">
                        <strong>Operating Systems</strong>
                        <span>Process Synchronization & Dining Philosophers</span>
                      </div>
                      <span className="sathi-badge-live">In Progress</span>
                    </div>

                    <div className="sathi-schedule-item">
                      <div className="sathi-item-time">05:00 PM</div>
                      <div className="sathi-item-details">
                        <strong>MongoDB & Node.js</strong>
                        <span>Mongoose Schema, Aggregations & Indexes</span>
                      </div>
                      <span className="sathi-badge-pending">Upcoming</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Quick AI Prompts */}
                <div className="sathi-panel-card glass-card">
                  <h4 className="sathi-panel-title">
                    <Sparkles size={16} />
                    <span>Instant AI Study Questions</span>
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                    Click any topic to test AI साथी's instant syllabus explanations:
                  </p>
                  <div className="sathi-quick-prompts">
                    <button
                      onClick={() => {
                        setActiveTab('ai-tutor');
                        handleSendMessage('Explain TCP 3-Way Handshake in Computer Networks');
                      }}
                      className="sathi-prompt-pill"
                    >
                      <Network size={14} />
                      <span>Explain TCP 3-Way Handshake</span>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab('ai-tutor');
                        handleSendMessage('What is Deadlock and how to prevent it in OS?');
                      }}
                      className="sathi-prompt-pill"
                    >
                      <Monitor size={14} />
                      <span>Deadlock in Operating Systems</span>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab('ai-tutor');
                        handleSendMessage('Explain MongoDB Aggregation Pipeline vs SQL');
                      }}
                      className="sathi-prompt-pill"
                    >
                      <Database size={14} />
                      <span>MongoDB Aggregation vs SQL</span>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      onClick={() => {
                        setActiveTab('ai-tutor');
                        handleSendMessage('Give me 3 React best practices for state management');
                      }}
                      className="sathi-prompt-pill"
                    >
                      <Layers size={14} />
                      <span>React State Management Best Practices</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AI साथी TUTOR CHAT */}
          {activeTab === 'ai-tutor' && (
            <div className="sathi-chat-view">
              <div className="sathi-chat-messages">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`sathi-chat-bubble ${msg.sender === 'user' ? 'sathi-bubble-user' : 'sathi-bubble-ai'}`}
                  >
                    <div className="sathi-bubble-header">
                      {msg.sender === 'ai' ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--blue-cyan)' }}>
                          <Bot size={16} />
                          <strong>AI साथी Assistant</strong>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8' }}>
                          <strong>Rishu Raj</strong>
                        </div>
                      )}
                      <span className="sathi-bubble-time">{msg.time}</span>
                    </div>
                    <div className="sathi-bubble-text" style={{ whiteSpace: 'pre-line' }}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="sathi-chat-bubble sathi-bubble-ai sathi-typing-indicator">
                    <Bot size={16} className="spin-icon" style={{ color: 'var(--blue-cyan)' }} />
                    <span>AI साथी is drafting explanation...</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="sathi-chat-input-bar"
              >
                <input
                  type="text"
                  placeholder="Ask AI साथी anything (e.g. Computer Networks, OS Deadlock, MongoDB, React)..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="sathi-input-field"
                />
                <button 
                  type="submit" 
                  disabled={!chatInput.trim()} 
                  className="btn btn-primary sathi-send-btn"
                >
                  <span>Ask साथी</span>
                  <Send size={15} />
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: MY COURSES */}
          {activeTab === 'courses' && (
            <div className="sathi-courses-grid">
              <div className="sathi-course-card glass-card">
                <div className="sathi-course-header">
                  <div className="sathi-course-icon-wrap" style={{ color: '#38bdf8' }}>
                    <Network size={22} />
                  </div>
                  <span className="sathi-badge-tag">Core CS</span>
                </div>
                <h4 className="sathi-course-title">Computer Networking & Protocols</h4>
                <p className="sathi-course-desc">
                  OSI 7 Layers, TCP/IP Suite, Routing Algorithms, DNS, HTTP/HTTPS, and Wireshark Packet Inspection.
                </p>
                <div className="sathi-progress-row">
                  <span>Course Progress</span>
                  <strong>88%</strong>
                </div>
                <div className="sathi-progress-bar">
                  <div className="sathi-progress-fill" style={{ width: '88%' }}></div>
                </div>
                <div className="sathi-course-footer">
                  <span>14 / 16 Modules Completed</span>
                  <button className="sathi-link-btn" onClick={() => setActiveTab('ai-tutor')}>
                    Review with AI &rarr;
                  </button>
                </div>
              </div>

              <div className="sathi-course-card glass-card">
                <div className="sathi-course-header">
                  <div className="sathi-course-icon-wrap" style={{ color: '#60a5fa' }}>
                    <Monitor size={22} />
                  </div>
                  <span className="sathi-badge-tag">Systems</span>
                </div>
                <h4 className="sathi-course-title">Operating Systems & Architecture</h4>
                <p className="sathi-course-desc">
                  Process scheduling, Semaphores, Deadlocks, Paging, Virtual Memory, and File System architecture.
                </p>
                <div className="sathi-progress-row">
                  <span>Course Progress</span>
                  <strong>76%</strong>
                </div>
                <div className="sathi-progress-bar">
                  <div className="sathi-progress-fill" style={{ width: '76%' }}></div>
                </div>
                <div className="sathi-course-footer">
                  <span>10 / 13 Modules Completed</span>
                  <button className="sathi-link-btn" onClick={() => setActiveTab('ai-tutor')}>
                    Review with AI &rarr;
                  </button>
                </div>
              </div>

              <div className="sathi-course-card glass-card">
                <div className="sathi-course-header">
                  <div className="sathi-course-icon-wrap" style={{ color: '#34d399' }}>
                    <Database size={22} />
                  </div>
                  <span className="sathi-badge-tag">Databases</span>
                </div>
                <h4 className="sathi-course-title">Database Systems: MongoDB & SQL</h4>
                <p className="sathi-course-desc">
                  NoSQL document design, Mongoose pipelines, BSON indexing, ACID transactions, and MySQL normalization.
                </p>
                <div className="sathi-progress-row">
                  <span>Course Progress</span>
                  <strong>92%</strong>
                </div>
                <div className="sathi-progress-bar">
                  <div className="sathi-progress-fill" style={{ width: '92%' }}></div>
                </div>
                <div className="sathi-course-footer">
                  <span>12 / 13 Modules Completed</span>
                  <button className="sathi-link-btn" onClick={() => setActiveTab('ai-tutor')}>
                    Review with AI &rarr;
                  </button>
                </div>
              </div>

              <div className="sathi-course-card glass-card">
                <div className="sathi-course-header">
                  <div className="sathi-course-icon-wrap" style={{ color: '#a78bfa' }}>
                    <Layers size={22} />
                  </div>
                  <span className="sathi-badge-tag">Engineering</span>
                </div>
                <h4 className="sathi-course-title">Modern React & Frontend Engineering</h4>
                <p className="sathi-course-desc">
                  Component lifecycle, React 19 hooks, State management, Vite bundler optimization, and REST API consumption.
                </p>
                <div className="sathi-progress-row">
                  <span>Course Progress</span>
                  <strong>96%</strong>
                </div>
                <div className="sathi-progress-bar">
                  <div className="sathi-progress-fill" style={{ width: '96%' }}></div>
                </div>
                <div className="sathi-course-footer">
                  <span>18 / 19 Modules Completed</span>
                  <button className="sathi-link-btn" onClick={() => setActiveTab('ai-tutor')}>
                    Review with AI &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ASSIGNMENTS & LABS */}
          {activeTab === 'assignments' && (
            <div className="sathi-assignments-view">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Active Tasks & Academic Deadlines</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Click any assignment to mark completed or active:</p>
                </div>
                <span className="sathi-tag-pill">
                  {assignments.filter(a => a.completed).length} / {assignments.length} Completed
                </span>
              </div>

              <div className="sathi-task-list">
                {assignments.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleAssignment(item.id)}
                    className={`sathi-task-card glass-card ${item.completed ? 'sathi-task-done' : ''}`}
                  >
                    <div className="sathi-task-checkbox">
                      <CheckCircle2
                        size={20}
                        style={{
                          color: item.completed ? '#10b981' : 'var(--text-muted)',
                          transition: 'color 0.2s ease'
                        }}
                      />
                    </div>
                    <div className="sathi-task-info">
                      <div className="sathi-task-title">{item.title}</div>
                      <div className="sathi-task-meta">
                        <span className="sathi-task-course">{item.course}</span>
                        <span>&bull;</span>
                        <span className="sathi-task-due">Due: {item.dueDate}</span>
                      </div>
                    </div>
                    <span className={`sathi-priority-badge sathi-priority-${item.priority.toLowerCase()}`}>
                      {item.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
