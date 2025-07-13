import '../styles/Certificates.css';

import aiml from '../assets/certificates/ai-ml-internship.jpg';
import aws from '../assets/certificates/aws-data-engineering-virtual.jpg';
import googleAndroid from '../assets/certificates/google-android.jpg';
import python from '../assets/certificates/python.jpg';
import teachnook from '../assets/certificates/teachnook-internship.jpg';

function Certificates() {
  const certificates = [
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
