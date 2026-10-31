import { FiBriefcase, FiCpu, FiGlobe, FiArrowUpRight } from "react-icons/fi";

const journey = [
  { icon: FiGlobe, label: "FULL STACK DEVELOPMENT", title: "Building end-to-end web applications", detail: "Developed hands-on projects including a React and Node.js digital outpass workflow, with a focus on usable interfaces, request handling and application flow.", meta: "PROJECT-BASED EXPERIENCE" },
  { icon: FiCpu, label: "AI & APPLIED TECHNOLOGY", title: "Exploring practical AI and computer vision", detail: "Worked on projects involving multimodal evidence review, image-based parking detection and sensor-assisted obstacle alerts — applying technology to real-world problem statements.", meta: "HANDS-ON PROJECTS" },
  { icon: FiBriefcase, label: "PLATFORM & PROFESSIONAL LEARNING", title: "Developing platform and engineering skills", detail: "Expanded technical knowledge through ServiceNow learning and certification, alongside virtual internship and structured learning programmes.", meta: "CONTINUOUS DEVELOPMENT" }
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-kicker">THE JOURNEY SO FAR</div>
        <div className="experience-heading">
          <div><h2 className="section-heading">Learning through<br /><span className="accent-text">building.</span></h2><p className="section-lead">My experience is shaped by project work, experimentation and steady technical growth.</p></div>
          <span className="mono experience-note">PRACTICE MAKES<br />PROGRESS ↗</span>
        </div>
        <div className="journey-list">
          {journey.map((item,index)=>{const Icon=item.icon;return <article className="journey-item" key={item.title}>
            <div className="journey-rail"><span>{String(index+1).padStart(2,"0")}</span><i /></div>
            <div className="journey-icon"><Icon /></div>
            <div className="journey-content"><span className="mono journey-label">{item.label}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="mono journey-meta">{item.meta}</span></div>
            <FiArrowUpRight className="journey-arrow" />
          </article>})}
        </div>
      </div>
      <style>{`
        .experience-section{background:#11140f}.experience-heading{display:flex;align-items:end;justify-content:space-between;gap:25px}.experience-note{margin-bottom:20px;color:#76836d;font-size:9px;line-height:1.8;letter-spacing:.13em;text-align:right}.journey-list{margin-top:42px;border-top:1px solid var(--line)}.journey-item{display:grid;grid-template-columns:52px 58px 1fr 24px;gap:22px;align-items:start;padding:28px 5px;border-bottom:1px solid var(--line);transition:background .2s}.journey-item:hover{background:rgba(255,255,255,.018)}.journey-rail{display:flex;flex-direction:column;align-items:center;gap:13px;color:#728069;font:10px 'DM Mono'}.journey-rail i{height:55px;width:1px;background:linear-gradient(var(--accent),transparent)}.journey-icon{width:46px;height:46px;border:1px solid rgba(199,243,107,.25);border-radius:14px;display:grid;place-items:center;color:var(--accent);background:rgba(199,243,107,.06);font-size:19px}.journey-label{color:var(--accent);font-size:9px;letter-spacing:.14em}.journey-content h3{margin:9px 0;font:600 20px 'Space Grotesk'}.journey-content p{max-width:730px;margin:0;color:var(--muted);font-size:12px;line-height:1.85}.journey-meta{display:inline-block;margin-top:14px;color:#718067;font-size:8px;letter-spacing:.13em}.journey-arrow{margin-top:8px;color:#7f8c74;transition:.2s}.journey-item:hover .journey-arrow{color:var(--accent);transform:translate(3px,-3px)}
        @media(max-width:650px){.experience-heading{display:block}.experience-note{display:none}.journey-item{grid-template-columns:30px 42px 1fr;gap:12px;padding:23px 0}.journey-icon{width:38px;height:38px;font-size:16px}.journey-content h3{font-size:17px}.journey-arrow{display:none}.journey-content p{font-size:11px}}
      `}</style>
    </section>
  );
}
