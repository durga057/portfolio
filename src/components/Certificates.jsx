import '../styles/Certificates.css';
import aiml from '../assets/certificates/ai-ml-internship.jpg';
import aws from '../assets/certificates/aws-data-engineering-virtual.jpg';
import googleAndroid from '../assets/certificates/google-android.jpg';
import python from '../assets/certificates/python.jpg';
import teachnook from '../assets/certificates/teachnook-internship.jpg';
import sql from '../assets/certificates/sql.jpg';
import reactCert from '../assets/certificates/react-cert.jpg';
import servicenow from '../assets/certificates/servicenow_certificate.jpg';
import devopsCloud from '../assets/certificates/DevOps_Cloud_Automation_Virtual.jpg';
import orchestrate2026 from '../assets/certificates/Contest_01.png';
import servicenowCsa from '../assets/certificates/csa-global-certification.jpg';

const certificates = [
  {title:'ServiceNow Certified System Administrator (CSA)',image:servicenowCsa,group:'SERVICENOW'},
  {title:'SQL (Intermediate) – HackerRank',image:sql,group:'PROGRAMMING'},
  {title:'Frontend Developer (React) – HackerRank',image:reactCert,group:'DEVELOPMENT'},
  {title:'ServiceNow Fundamentals Micro-credential',image:servicenow,group:'SERVICENOW'},
  {title:'AI-ML Internship – EduSkills & IIT Bombay',image:aiml,group:'INTERNSHIP'},
  {title:'AWS Data Engineering Virtual Internship – EduSkills',image:aws,group:'CLOUD'},
  {title:'Android Developer Internship – Google Developers',image:googleAndroid,group:'INTERNSHIP'},
  {title:'Python Programming – Udemy',image:python,group:'PROGRAMMING'},
  {title:'Web Development Internship – Teachnook',image:teachnook,group:'INTERNSHIP'},
  {title:'DevOps & Cloud Automation Virtual Internship',image:devopsCloud,group:'CLOUD'},
  {title:'HackerRank Orchestrate 2026',image:orchestrate2026,group:'ACHIEVEMENT'}
];

export default function Certificates() {
  return (
    <section className="section certificates-section" id="certificates">
      <div className="container">
        <div className="section-kicker">LEARNING IN PUBLIC</div>
        <h2 className="section-heading">Credentials & <span className="accent-text">milestones.</span></h2>
        <p className="section-lead">A record of certifications, learning experiences and activities that have helped shape my development journey.</p>
        <div className="certificate-grid">{certificates.map((c,i)=><article className="certificate-card surface" key={c.title}><div className="certificate-preview"><img src={c.image} alt={c.title} loading="lazy" /><span className="certificate-num mono">0{i+1}</span></div><div className="certificate-info"><span className="mono">{c.group}</span><h3>{c.title}</h3></div></article>)}</div>
      </div>
    </section>
  );
}
