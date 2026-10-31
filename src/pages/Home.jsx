import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="availability"><span /> OPEN TO INTERNSHIPS & ENTRY-LEVEL OPPORTUNITIES</div>
          <p className="hero-intro">HELLO, I&apos;M</p>
          <h1>S. Durga<br /><span>Prasad.</span></h1>
          <div className="hero-role"><span className="role-line" /> Computer Science Engineering Student <i>·</i> Full Stack Developer</div>
          <p className="hero-summary">I build thoughtful digital experiences and practical software solutions — from responsive web applications to AI-powered systems. Curious by nature, focused on clean code, and always learning.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Explore my work <FiArrowUpRight /></a>
            <a href="#contact" className="btn btn-secondary">Get in touch <FiMail /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/durga057" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/durgaprasadsuravarapu/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:durgaprasadsuravarapu42@gmail.com" aria-label="Email"><FiMail /></a>
            <span className="social-caption">LET&apos;S BUILD SOMETHING USEFUL</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-topline"><span>PORTFOLIO / 2026</span><span>INDIA · IST</span></div>
            <img src="/portfolio/PROFILE.jpg" alt="Portrait of S. Durga Prasad" />
            <div className="portrait-caption"><div><strong>Curiosity → Code → Impact</strong><span>Designing. Developing. Improving.</span></div><span className="caption-dot" /></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon">✳</span><span>BUILDING<br /><b>WITH PURPOSE</b></span></div>
          <div className="floating-note note-bottom"><span className="note-number">01</span><span>CRAFT OVER<br /><b>COMPLEXITY</b></span></div>
          <div className="hero-index mono">01 <FiArrowDownRight /> SCROLL TO EXPLORE</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>BASED IN INDIA</span><span>JAVA · REACT · NODE.JS · AI</span><span>SCROLL TO DISCOVER ↓</span></div>
    </section>
  );
}
