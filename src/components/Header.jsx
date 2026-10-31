import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Certificates", "#certificates"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="#home" onClick={close} aria-label="Durga Prasad home">
          <span className="brand-mark">D<span>.</span></span>
          <span className="brand-name">DURGA PRASAD<small>DEVELOPER PORTFOLIO</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={close}>Let&apos;s talk <FiArrowUpRight /></a>
        </nav>
      </div>
      <style>{`
        .site-header{position:sticky;top:0;z-index:1000;background:rgba(17,20,15,.86);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
        .nav-wrap{width:min(var(--max),calc(100% - 48px));height:78px;margin:auto;display:flex;align-items:center;justify-content:space-between}
        .brand{display:flex;align-items:center;gap:11px}.brand-mark{width:38px;height:38px;border:1px solid rgba(199,243,107,.55);border-radius:12px;display:grid;place-items:center;font:700 21px 'Space Grotesk';color:var(--accent)}.brand-mark span{color:var(--text)}
        .brand-name{font:700 11px 'DM Mono';letter-spacing:.1em}.brand-name small{display:block;margin-top:4px;color:var(--muted);font-size:8px;letter-spacing:.15em}
        .nav-links{display:flex;align-items:center;gap:28px}.nav-links>a{font-size:12px;color:#bdc5b5;transition:color .2s}.nav-links>a:hover{color:var(--accent)}.nav-links .nav-contact{display:flex;align-items:center;gap:7px;padding:11px 16px;border:1px solid rgba(199,243,107,.38);border-radius:999px;color:var(--accent)}
        .mobile-menu{display:none;background:none;border:0;font-size:24px;color:var(--text)}
        @media(max-width:850px){.nav-wrap{width:calc(100% - 36px)}.mobile-menu{display:block}.nav-links{display:none;position:absolute;top:78px;left:0;right:0;padding:18px 22px 24px;background:#171b14;border-bottom:1px solid var(--line);align-items:stretch;gap:0;flex-direction:column}.nav-links.is-open{display:flex}.nav-links>a{padding:14px 6px;border-bottom:1px solid var(--line)}.nav-links .nav-contact{margin-top:12px;justify-content:center;border:1px solid rgba(199,243,107,.38)}}
      `}</style>
    </header>
  );
}
