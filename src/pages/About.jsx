import { FiArrowUpRight, FiBookOpen, FiCode, FiCompass } from "react-icons/fi";
import "../styles/About.css";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-heading">
            <span className="section-kicker">A LITTLE ABOUT ME</span>
            <h2 className="section-heading">Developer by practice.<br /><span className="accent-text">Learner by nature.</span></h2>
            <p className="section-lead">I enjoy turning ideas into useful, well-crafted digital products.</p>
            <a className="about-link" href="https://github.com/durga057" target="_blank" rel="noreferrer">Explore my GitHub <FiArrowUpRight /></a>
          </div>
          <div className="about-copy surface">
            <p>I&apos;m <strong>S. Durga Prasad</strong>, a Computer Science Engineering student with a strong interest in full-stack development and practical problem-solving. I enjoy designing clean user interfaces and building applications that make everyday workflows simpler.</p>
            <p>My work spans web development, Java programming, backend APIs and applied AI projects. I value understanding the problem first, choosing the right tools, and writing code that is clear and maintainable.</p>
            <p>I&apos;m continuously strengthening my engineering fundamentals through hands-on projects, coding practice and collaborative learning.</p>
          </div>
        </div>
        <div className="about-pillars">
          <div><FiCode /><strong>Build with intent</strong><span>Practical solutions, thoughtful interfaces.</span></div>
          <div><FiBookOpen /><strong>Keep learning</strong><span>Curiosity backed by consistent practice.</span></div>
          <div><FiCompass /><strong>Think end-to-end</strong><span>From user needs to working software.</span></div>
        </div>
      </div>
      <style>{`
        .about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}.about-heading .section-heading{margin-top:20px}.about-link{display:inline-flex;align-items:center;gap:8px;margin-top:25px;color:var(--accent);font-size:13px;font-weight:800}.about-copy{padding:34px 38px;color:#b5c0aa;font-size:14px;line-height:1.95}.about-copy p{margin:0 0 17px}.about-copy p:last-child{margin-bottom:0}.about-copy strong{color:var(--text)}.about-pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:45px}.about-pillars>div{padding:23px 21px;border-top:1px solid var(--line);display:grid;gap:9px}.about-pillars svg{font-size:20px;color:var(--accent);margin-bottom:7px}.about-pillars strong{font:600 15px 'Space Grotesk'}.about-pillars span{font-size:12px;line-height:1.7;color:var(--muted)}
        @media(max-width:760px){.about-grid{grid-template-columns:1fr;gap:28px}.about-copy{padding:25px}.about-pillars{grid-template-columns:1fr;gap:4px;margin-top:30px}.about-pillars>div{padding:18px 5px}}
      `}</style>
    </section>
  );
}
