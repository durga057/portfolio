import '../styles/Projects.css';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import parkingImg from '../assets/projects/parking.jpg';
import rentImg from '../assets/projects/rent2ride.jpg';
import tourismImg from '../assets/projects/tourism.png';
import iotImg from '../assets/projects/iotcap.png';
import outpassImg from '../assets/projects/outpassImg.png';
import damageClaimImg from '../assets/projects/damageClaimImg.png';

const projects = [
  { title:'Damage Claim Verification System', type:'AI / MULTIMODAL', description:'An evidence review platform that analyses claim images and textual information to support damage verification and identify potentially inconsistent submissions.', tech:['Python','OpenCV','Pandas','Scikit-learn','Deep Learning'], image:damageClaimImg, link:'https://github.com/durga057/Multi_Modal_Evidence_Review', featured:true },
  { title:'Digital Outpass System', type:'FULL STACK WEB APP', description:'A digital workflow for students to submit outpass requests, while administrators review, approve or reject requests with clear status tracking.', tech:['React','Node.js','MongoDB'], image:outpassImg, link:'https://durga057.github.io/outpass/' },
  { title:'Object Detection for the Blind', type:'IOT / ACCESSIBILITY', description:'An assistive prototype that detects nearby obstacles and provides alerts to support safer navigation for visually impaired users.', tech:['Arduino','Python','IoT Sensors'], image:iotImg, link:'https://github.com/durga057/Object-Detection-for-the-Blind' },
  { title:'Smart Car Parking System', type:'COMPUTER VISION', description:'A visual parking-assistance concept that identifies vehicle occupancy and communicates available parking slots.', tech:['Python','OpenCV','Flask','React'], image:parkingImg, link:'' },
  { title:'Rent2Ride', type:'WEB APPLICATION', description:'A two-wheeler rental platform concept covering user access, vehicle discovery, pricing and booking workflows.', tech:['Java','MySQL','HTML','CSS'], image:rentImg, link:'https://github.com/durga057/Rent2Ride' },
  { title:'Travel & Tourism Website', type:'WEB DEVELOPMENT', description:'A tourism experience created for a diploma hackathon, bringing destination discovery, trip planning and visitor reviews together.', tech:['HTML','CSS','JavaScript','Firebase'], image:tourismImg, link:'https://github.com/durga057/tourism-development' }
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-kicker">SELECTED WORK</div>
        <div className="projects-heading"><div><h2 className="section-heading">Projects with a<br /><span className="accent-text">purpose.</span></h2><p className="section-lead">A selection of applications and prototypes built to explore ideas, solve problems and learn by doing.</p></div><span className="project-total mono">06 PROJECTS<br />& COUNTING</span></div>
        <div className="project-grid">
          {projects.map((p,i)=><article className={`project-card surface ${p.featured?'project-featured':''}`} key={p.title}>
            <div className="project-media"><img src={p.image} alt={p.title} loading="lazy" /><span className="project-index mono">0{i+1}</span></div>
            <div className="project-body"><span className="project-type mono">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div><div className="project-action">{p.link?<a href={p.link} target="_blank" rel="noreferrer"><FiGithub /> View project <FiArrowUpRight /></a>:<span className="project-private">Project details available on request</span>}</div></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
