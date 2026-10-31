import '../styles/ContactForm.css';
import { FiArrowUpRight, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function ContactForm() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-kicker">HAVE A PROJECT OR OPPORTUNITY?</div>
        <div className="contact-layout">
          <div className="contact-copy"><h2 className="section-heading">Let&apos;s make<br /><span className="accent-text">something matter.</span></h2><p className="section-lead">I&apos;m open to connecting with developers, teams and recruiters. Have an opportunity, idea or just want to say hello? Send me a message.</p>
            <div className="contact-details"><a href="mailto:durgaprasadsuravarapu42@gmail.com"><FiMail /><span><small>EMAIL</small><b>durgaprasadsuravarapu42@gmail.com</b></span><FiArrowUpRight /></a><div><FiMapPin /><span><small>LOCATION</small><b>India</b></span></div></div>
            <div className="contact-social"><a href="https://github.com/durga057" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/durgaprasadsuravarapu/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div>
          </div>
          <form className="contact-form surface" action="https://docs.google.com/forms/d/e/1FAIpQLSfQd09xOjUSKg_cMR7l_-ulrm-BbV86D93LwNdznksPb5og0Q/formResponse" method="POST" target="_blank">
            <div className="form-heading"><span className="mono">DROP A MESSAGE</span><span className="form-spark">✳</span></div>
            <label>Your name<input type="text" name="entry.2005620554" placeholder="How should I call you?" required /></label>
            <label>Email address<input type="email" name="entry.1045781291" placeholder="you@example.com" required /></label>
            <label>Your message<textarea name="entry.839337160" placeholder="Tell me a little about what you have in mind..." rows="5" required /></label>
            <button type="submit" className="btn btn-primary">Send message <FiArrowUpRight /></button>
            <p className="form-note">Your message opens securely through the existing contact form.</p>
          </form>
        </div>
      </div>
      <style>{`
        .contact-section{background:radial-gradient(ellipse at 15% 90%,rgba(119,151,63,.1),transparent 45%),#11140f}.contact-layout{display:grid;grid-template-columns:1fr .9fr;gap:70px;margin-top:25px;align-items:start}.contact-copy .section-heading{font-size:clamp(42px,6vw,67px)}.contact-details{display:grid;gap:8px;margin-top:35px}.contact-details>a,.contact-details>div{display:flex;align-items:center;gap:14px;padding:13px 0;border-bottom:1px solid var(--line);color:#d2d9ca}.contact-details svg{color:var(--accent);font-size:18px}.contact-details span{display:grid;gap:4px}.contact-details small{font:9px 'DM Mono';letter-spacing:.12em;color:#7f8b75}.contact-details b{font-size:12px;font-weight:600}.contact-details>a>svg:last-child{margin-left:auto}.contact-social{display:flex;gap:18px;margin-top:25px}.contact-social a{display:flex;align-items:center;gap:7px;color:#a9b49e;font-size:11px}.contact-social a:hover{color:var(--accent)}
        .contact-form{padding:30px;display:grid;gap:18px}.form-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;color:var(--accent);font:10px 'DM Mono';letter-spacing:.14em}.form-spark{font-size:20px}.contact-form label{display:grid;gap:9px;color:#c9d1c0;font-size:11px;font-weight:700}.contact-form input,.contact-form textarea{width:100%;border:1px solid var(--line);background:#131810;border-radius:10px;padding:13px 14px;color:var(--text);font-size:12px;outline:none;resize:vertical;transition:border-color .2s}.contact-form input:focus,.contact-form textarea:focus{border-color:rgba(199,243,107,.65)}.contact-form input::placeholder,.contact-form textarea::placeholder{color:#6f7b66}.contact-form button{border:0;cursor:pointer;justify-self:start}.form-note{margin:0;color:#77836e;font-size:10px}
        @media(max-width:760px){.contact-layout{grid-template-columns:1fr;gap:35px}.contact-form{padding:22px}.contact-copy .section-heading{font-size:46px}}
      `}</style>
    </section>
  );
}
