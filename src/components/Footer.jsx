
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 S. Durga Prasad — All Rights Reserved</p>

      <div className="social-icons">
        <a href="https://github.com/durga057/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/durgaprasadsuravarapu/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
