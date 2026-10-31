import '../styles/Skills.css';
import { FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiCode, FiDatabase, FiLayers, FiTool, FiArrowUpRight } from 'react-icons/fi';

const categories = [
  { icon: FiCode, title: "Programming", desc: "Languages & fundamentals", skills: ["Java", "Python", "JavaScript", "SQL", "Object-Oriented Programming"] },
  { icon: FiLayers, title: "Frontend", desc: "Interfaces & experience", skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { icon: FiDatabase, title: "Backend & data", desc: "Services & persistence", skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"] },
  { icon: FiTool, title: "Tools & concepts", desc: "Building & collaboration", skills: ["Git", "GitHub", "Data Structures", "Algorithms", "ServiceNow"] }
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-kicker">MY TOOLKIT</div>
        <div className="skills-title-row"><div><h2 className="section-heading">Skills that turn ideas<br /><span className="accent-text">into software.</span></h2><p className="section-lead">A growing toolkit across application development, backend engineering and problem-solving.</p></div><span className="skills-side-note mono">LEARN · BUILD · REFINE</span></div>
        <div className="skills-grid">
          {categories.map(({icon: Icon,title,desc,skills},i) => <article className="skill-card surface" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon /></span><span className="mono skill-count">0{i+1}</span></div><h3>{title}</h3><p>{desc}</p><div className="skill-tags">{skills.map(s=><span key={s}>{s}</span>)}</div></article>)}
        </div>
        <div className="coding-row">
          <div><span className="section-kicker">PROBLEM SOLVING</span><h3>Practising the fundamentals.</h3><p className="section-lead">I use coding platforms to strengthen my data structures, algorithms and programming foundations.</p></div>
          <div className="coding-links">
            <a href="https://leetcode.com/u/XWwLbeACQB/" target="_blank" rel="noreferrer"><SiLeetcode /><span><b>LeetCode</b><small>Data structures & algorithms</small></span><FiArrowUpRight /></a>
            <a href="https://www.hackerrank.com/profile/durgaprasadsura3" target="_blank" rel="noreferrer"><FaHackerrank /><span><b>HackerRank</b><small>Programming & certifications</small></span><FiArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
