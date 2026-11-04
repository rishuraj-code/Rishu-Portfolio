import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/**
 * Main Application Component
 * Assembles all sections of Rishu's professional portfolio.
 */
function App() {
  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Experience & Education Timeline */}
        <Experience />

        {/* Contact Form & Socials */}
        <Contact />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}

export default App;
