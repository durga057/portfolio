import './Home.css';
import profileImage from '/PROFILE.jpg'; 

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <img src={profileImage} alt="Profile" className="home-img" />

        <div className="home-text">
          <h1>Hi, I’m <span>S. Durga Prasad</span></h1>
          <p>Full Stack Developer | React Enthusiast</p>
          <p>Email: durgaprasadsuravarapu42@gmail.com</p>

          <div className="home-buttons">
            <a href="#contact">Contact Me</a>
            <a href="#projects">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
