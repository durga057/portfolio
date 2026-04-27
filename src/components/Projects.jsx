import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';
import parkingImg from '../assets/projects/parking.jpg';
import rentImg from '../assets/projects/rent2ride.jpg';
import tourismImg from '../assets/projects/tourism.png';
import iotImg from '../assets/projects/iotcap.png';
import outpassImg from '../assets/projects/outpassImg.png';

function Projects() {
  const projects = [
    {
      title: 'Smart Car Parking System',
      description: 'Computer vision-based system to detect vehicle occupancy and slot availability using image input.',
      tech: 'Python, OpenCV, Flask, React',
      image: parkingImg,
      github: 'https://github.com/durgaprasad2595/Smart-Car-Parking-System',
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
    },
    {
      title: 'Digital Outpass System',
      description: 'A web-based system that allows students to request outpasses digitally with admin approval and tracking.',
      tech: 'React, Node.js, MongoDB (MERN Stack)',
      image: outpassImg,
      github: 'https://github.com/durga057/outpass',
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {/* github icon with source code link */}
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <p><strong>Tech Used:</strong> {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
