import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home">D<span>.</span></a>
        <p>Designed with intent. Built with curiosity.<br /><span>© {new Date().getFullYear()} S. Durga Prasad. All rights reserved.</span></p>
        <div className="footer-links"><a href="https://github.com/durga057" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/durgaprasadsuravarapu/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a><a href="#home" aria-label="Back to top"><FiArrowUp /></a></div>
      </div>
      <style>{`
        .footer{padding:27px 0;background:#0d100c;border-top:1px solid var(--line)}.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:20px}.footer-brand{width:42px;height:42px;display:grid;place-items:center;border:1px solid rgba(199,243,107,.5);border-radius:12px;color:var(--accent);font:700 22px 'Space Grotesk'}.footer-brand span{color:var(--text)}.footer p{margin:0;color:#b8c2ae;font-size:11px;line-height:1.8}.footer p span{color:#718067;font-size:9px}.footer-links{display:flex;gap:9px}.footer-links a{width:36px;height:36px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;color:#aeb9a3;transition:.2s}.footer-links a:hover{color:var(--accent);border-color:var(--accent)}@media(max-width:550px){.footer-inner{flex-wrap:wrap}.footer p{flex:1;min-width:190px}.footer-links{width:100%;padding-left:58px}}
      `}</style>
    </footer>
  );
}
