import { useEffect, useRef } from 'react';
import './Home.css';
import profileImage from '/PROFILE.jpg';

function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-section" id="home" ref={sectionRef}>
      <div className="home-bg-grid" aria-hidden="true" />

      <div className="home-container">
        <div className="home-image-wrapper animate-slide-left">
          <div className="home-img-ring" />
          <img src={profileImage} alt="S. Durga Prasad" className="home-img" />
          {/* <div className="home-img-badge">Available for work</div> */}
        </div>

        <div className="home-text">
          <p className="home-greeting animate-fade delay-1">Hello, I'm</p>
          <h1 className="home-name animate-fade delay-2">
            S. Durga <span className="home-name-accent">Prasad</span>
          </h1>

          <div className="home-role animate-fade delay-3">
            <span className="role-tag">Full Stack Developer</span>
            <span className="role-divider" aria-hidden="true" />
            <span className="role-tag">React Enthusiast</span>
          </div>

          <p className="home-email animate-fade delay-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="email-icon" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            durgaprasadsuravarapu42@gmail.com
          </p>

          <div className="home-buttons animate-fade delay-5">
            <a href="#contact" className="btn btn-primary">
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
        </div>
      </div>

      <div className="home-scroll-hint animate-fade delay-5" aria-label="Scroll down">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Home;