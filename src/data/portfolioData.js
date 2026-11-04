// Central configuration file for Rishu Raj's portfolio.
// Updated with verified details from Resume & Profile.

export const personalInfo = {
  name: "Rishu Raj",
  title: "Software Engineer Intern",
  tagline: "Software Engineer Intern at The Data Tech Labs (TDTL) & MCA Student at Bharati Vidyapeeth (IMED).",
  bio: "Passionate about building scalable web applications, robust CRM systems, and AI-powered learning platforms to solve real-world challenges.",
  email: "rishuraj9385@gmail.com",
  phone: "+91 7352493672",
  phoneDisplay: "7352493672",
  location: "Pune, India",
  status: "Software Engineer Intern @ TDTL | Open to Opportunities",
  resumeUrl: "/Rishu_Raj_Resume.pdf", // Attached resume PDF in public folder
  socials: {
    github: "https://github.com/rishuraj-code",
    linkedin: "https://www.linkedin.com/in/rishu-raj-53810231a",
    portfolio: "#",
  },
  stats: [
    { label: "Current Role", value: "SDE Intern" },
    { label: "Company", value: "TDTL" },
    { label: "Education", value: "MCA (IMED)" },
    { label: "MCA CGPA", value: "7.79 / 10" }
  ]
};

export const skillsData = [
  {
    category: "Frontend & Web",
    skills: [
      { name: "React.js", level: "Proficient", icon: "react" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "code" },
      { name: "HTML5 & Semantic UI", level: "Expert", icon: "layout" },
      { name: "CSS3 & Modern CSS", level: "Expert", icon: "palette" },
      { name: "Tailwind CSS", level: "Proficient", icon: "palette" },
      { name: "Responsive Design", level: "Expert", icon: "smartphone" },
      { name: "Leaflet.js", level: "Intermediate", icon: "grid" }
    ]
  },
  {
    category: "Languages & Backend",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "server" },
      { name: "Express.js", level: "Proficient", icon: "server" },
      { name: "MongoDB", level: "Proficient", icon: "database" },
      { name: "SQL & MySQL", level: "Proficient", icon: "layers" },
      { name: "Java", level: "Proficient", icon: "code" },
      { name: "Python", level: "Proficient", icon: "terminal" },
      { name: "REST APIs", level: "Proficient", icon: "cpu" }
    ]
  },
  {
    category: "Core CS & Tools",
    skills: [
      { name: "Operating Systems", level: "Proficient", icon: "monitor" },
      { name: "Computer Networking", level: "Proficient", icon: "network" },
      { name: "Git & GitHub", level: "Proficient", icon: "git-branch" },
      { name: "Visual Studio Code", level: "Expert", icon: "terminal" },
      { name: "Problem-Solving", level: "Proficient", icon: "check-circle" },
      { name: "Teamwork & Leadership", level: "Proficient", icon: "activity" },
      { name: "Effective Communication", level: "Proficient", icon: "search" }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AI Students साथी",
    description: "A centralized AI-powered student learning platform designed to help students manage courses, assignments, study activities, and academic progress with AI assistance, interactive dashboards, and personalized learning features.",
    category: "AI & Full Stack",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "SQL/MySQL", "Git & GitHub"],
    timeline: "April 2026 - Present",
    demoUrl: "#",
    githubUrl: "https://github.com/rishuraj-code",
    featured: true
  },
  {
    id: 2,
    title: "Weather App with Map Integration",
    description: "A responsive Weather Application providing real-time weather updates, 5-day and hourly forecasts, GPS-based location weather, temperature unit conversion, favorite and recent cities, and interactive map integration via Leaflet.js.",
    category: "Frontend & API",
    tags: ["HTML5", "CSS3", "JavaScript", "OpenWeather API", "Leaflet.js", "Git & GitHub"],
    timeline: "Nov 2025 - Dec 2025",
    demoUrl: "#",
    githubUrl: "https://github.com/rishuraj-code",
    featured: true
  },
  {
    id: 3,
    title: "Enterprise CRM Application",
    description: "A web-based CRM application built using React.js to manage customer datasets, track sales leads, and streamline business client interactions efficiently.",
    category: "React App",
    tags: ["React.js", "JavaScript", "REST APIs", "Modern CSS", "State Management"],
    timeline: "Sep 2026 - Present",
    demoUrl: "#",
    githubUrl: "https://github.com/rishuraj-code",
    featured: true
  }
];

export const experienceData = [
  {
    year: "Sep 2026 – Present",
    role: "Software Engineer Intern",
    institution: "The Data Tech Labs (TDTL)",
    location: "Pune, India",
    description: "Developing a web-based CRM application using React.js to manage customer data, track leads, and streamline customer interactions."
  },
  {
    year: "Jul 2025 – May 2027",
    role: "Master of Computer Applications (MCA)",
    institution: "Bharati Vidyapeeth (IMED), Pune, Maharashtra",
    location: "Pune, Maharashtra",
    description: "Current CGPA: 7.79 / 10. Focused on advanced software development, distributed systems, full-stack technologies, and database architecture."
  },
  {
    year: "Jun 2022 – Jul 2025",
    role: "Bachelor of Computer Applications (BCA)",
    institution: "Arcade Business College, Patna, Bihar",
    location: "Patna, Bihar",
    description: "Graduated with Honours Percentage of 71.13% (Aggregate: 67.2%). Strong core in Computer Science, Java, Python, and web development fundamentals."
  }
];

export const certificationsData = [
  {
    title: "MagicBus India Foundation",
    subtitle: "Supported by Infosys Foundation",
    date: "Jan 2026 - April 2026"
  },
  {
    title: "Python Fundamentals for Beginners",
    subtitle: "Infosys Springboard / Tech Certification",
    date: "Jan 2026 - Feb 2026"
  },
  {
    title: "AGENTIC AI",
    subtitle: "Advanced AI & Autonomous Agents",
    date: "25 Feb - 28 Feb 2026"
  }
];

export const languagesData = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Proficient" }
];
