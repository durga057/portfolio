import '../styles/Certificates.css';


import aiml from '../assets/certificates/ai-ml-internship.jpg';
import aws from '../assets/certificates/aws-data-engineering-virtual.jpg';
import googleAndroid from '../assets/certificates/google-android.jpg';
import python from '../assets/certificates/python.jpg';
import teachnook from '../assets/certificates/teachnook-internship.jpg';
import sql from '../assets/certificates/sql.jpg';
import reactCert from '../assets/certificates/react-cert.jpg';
import servicenow from '../assets/certificates/servicenow_certificate.jpg';
import devops_cloud from '../assets/certificates/DevOps_Cloud_Automation_Virtual.jpg';
import orchestrate2026 from '../assets/certificates/Contest_01.png';
import servicenow_csa from '../assets/certificates/csa-global-certification.jpg';

function Certificates() {
  const certificates = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      image: servicenow_csa,
    },
    {
      title: 'SQL (Intermediate) – HackerRank',
      image: sql,
    },
    {
      title: 'Frontend Developer (React) – HackerRank',
      image: reactCert,
    },
    {
      title: 'ServiceNow Fundamentals Micro-credential - ServiceNow',
      image: servicenow,
    },
    {
      title: 'AI-ML Internship – EduSkills & IIT Bombay',
      image: aiml,
    },
    {
      title: 'AWS Data Engineering Virtual Internship – EduSkills',
      image: aws,
    },
    {
      title: 'Android Developer Internship – Google Developers',
      image: googleAndroid,
    },
    {
      title: 'Python Programming – Udemy',
      image: python,
    },
    {
      title: 'Web Development Internship – Teachnook',
      image: teachnook,
    },
    {
      title: 'DevOps & Cloud Automation virtual internship - EduSkills',
      image: devops_cloud,
    },
    {
      title: 'HackerRank Orchestrate 2026',
      image: orchestrate2026,
    }


  ];

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title">My Certifications</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
