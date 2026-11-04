# Rishu's Personal Portfolio Website

A professional, modern portfolio website built with **React.js**, **Vite**, and **Vanilla CSS**.

Designed with a sleek **Black, White, and Blue** color palette, glassmorphism cards, responsive layouts, and interactive components.

---

## 🎨 Color Palette & Design
- **Black / Dark Backgrounds**: `#07090e`, `#0d121d`
- **White / Primary Text**: `#ffffff`, `#f8fafc`
- **Electric Blue Accents**: `#2563eb`, `#3b82f6`, `#38bdf8` (with glowing neon highlights)

---

## 🚀 Quick Start Guide

### 1. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the URL shown in the terminal (e.g. `http://localhost:5174`).

### 2. Build for Production
```bash
npm run build
```
This bundles the optimized production files into the `dist/` folder.

---

## 📁 Beginner Guide: How to Customize Your Portfolio

All your personal details, project descriptions, skills, and links are kept in one single, easy-to-edit file:

👉 `src/data/portfolioData.js`

### What You Can Easily Edit:
1. **Bio & Social Links**: Update your name, job title, email address, LinkedIn, and GitHub links in `personalInfo`.
2. **Projects**: Add, remove, or modify project titles, descriptions, live demo links, and GitHub links in `projectsData`.
3. **Skills**: Add new technologies you learn to `skillsData`.
4. **Experience**: Add internships, courses, or achievements in `experienceData`.
5. **Profile Image**: Replace `/public/avatar.jpg` with your own photo or portrait anytime!

---

## 📂 Project Structure
```text
Rishu-Portfolio/
├── public/                 # Static assets (avatar, favicon)
├── src/
│   ├── assets/             # Images and logos
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Navigation bar & mobile menu
│   │   ├── Hero.jsx        # Introduction, badges & avatar showcase
│   │   ├── About.jsx       # Bio & core engineering pillars
│   │   ├── Skills.jsx      # Interactive categorized skills
│   │   ├── Projects.jsx    # Projects gallery with filters
│   │   ├── Experience.jsx  # Career & education timeline
│   │   ├── Contact.jsx     # Interactive contact form & details
│   │   ├── Footer.jsx      # Footer with back-to-top button
│   │   └── Icons.jsx       # Custom brand SVG icons
│   ├── data/
│   │   └── portfolioData.js # Easy-to-edit portfolio details
│   ├── App.jsx             # Main application layout
│   ├── App.css             # Section styles & responsive design
│   ├── index.css           # Global theme tokens (Black, White & Blue)
│   └── main.jsx            # React root mount
├── index.html              # HTML shell & Google Fonts
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite configuration
```

