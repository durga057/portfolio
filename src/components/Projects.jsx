import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';
import parkingImg from '../assets/projects/parking.jpg';
import rentImg from '../assets/projects/rent2ride.jpg';
import tourismImg from '../assets/projects/tourism.png';
import iotImg from '../assets/projects/iotcap.png';
import outpassImg from '../assets/projects/outpassImg.png';
import damageClaimImg from '../assets/projects/damageClaimImg.png';

function Projects() {
  const projects = [
    {
      title: 'Digital Outpass System',
      description: 'A web-based system that allows students to request outpasses digitally with admin approval and tracking.',
      tech: 'React, Node.js, MongoDB (MERN Stack)',
      image: outpassImg,
      github: 'https://durga057.github.io/outpass/',
    },
    {
      title: 'Damage Claim Verification System',
      description: 'A multimodal AI-based system that verifies insurance damage claims by analyzing both images and textual evidence to detect fraudulent claims and assist in accurate claim processing.',
      tech: 'Python, OpenCV, Pandas, NumPy, Scikit-learn, Deep Learning',
      image: damageClaimImg,
      github: 'https://github.com/durga057/Multi_Modal_Evidence_Review',
    },
    {
      title: 'Smart Car Parking System',
      description: 'Computer vision-based system to detect vehicle occupancy and slot availability using image input.',
      tech: 'Python, OpenCV, Flask, React',
      image: parkingImg,
      github: '#',
    },
    {
      title: 'Rent2Ride – Online Bike Rental',
      description: 'Platform for two-wheeler rental with login, pricing, booking, and vehicle tracking.',
      tech: 'Java, MySQL, HTML/CSS',
      image: rentImg,
      github: 'https://github.com/durga057/Rent2Ride',
    },
    {
      title: 'Travel & Tourism Website',
      description: 'Developed during a diploma hackathon for tourism booking, trip planning, and user reviews.',
      tech: 'HTML, CSS, JavaScript, Firebase',
      image: tourismImg,
      github: 'https://github.com/durga057/tourism-development',
    },
    {
      title: 'Object Detection for the Blind',
      description: 'IoT-based cap that detects obstacles and gives real-time audio alerts using sensors.',
      tech: 'Arduino, Python, IoT Sensors',
      image: iotImg,
      github: 'https://github.com/durga057/Object-Detection-for-the-Blind',
    }

  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-content">
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
              </div>
              <div className="project-footer">
                <a href={proj.github} className="github-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <p className="tech-used"><strong>Tech Used:</strong> {proj.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
