import '../styles/Skills.css';
import { FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "Java", "Python", "MySQL", "MongoDB"]
    },
    {
      title: "Tools & Core Skills",
      skills: ["Git", "GitHub", "Data Structures", "Algorithms", "Object-Oriented Programming", "REST APIs"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Problem Solving</h2>

      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skills-category" key={idx}>
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span className="skill-tag" key={index}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="coding-profiles-wrapper">
          <h3>Coding Profiles</h3>
          <div className="profiles-flex">
            <a
              href="https://leetcode.com/u/XWwLbeACQB/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
            >
              <SiLeetcode className="profile-icon" style={{ color: '#FFA116' }} />
              <div className="profile-card-title">LeetCode</div>
              <div className="profile-card-desc">
                Consistent practice in Data Structures, Algorithms, and logic building.
              </div>
              <div className="profile-stats">Problem Solving</div>
            </a>

            <a
              href="https://www.hackerrank.com/profile/durgaprasadsura3"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
            >
              <FaHackerrank className="profile-icon" style={{ color: '#00EA64' }} />
              <div className="profile-card-title">HackerRank</div>
              <div className="profile-card-desc">
                Verified Skills and Certifications in React, SQL, and other core concepts.
              </div>
              <div className="profile-stats">Certified Skills</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
