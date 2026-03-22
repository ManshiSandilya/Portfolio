import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "certificates", title: "Certificates" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ 
      padding: '1.25rem 2rem', 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: 100, 
      backdropFilter: scrolled ? 'blur(16px)' : 'none', 
      background: scrolled ? 'rgba(10, 10, 11, 0.7)' : 'transparent', 
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      transition: 'all 0.3s ease' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        <Link 
          to="/" 
          onClick={() => { setActive(""); window.scrollTo(0, 0); }} 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          {/* Empty branding block left intentionally void per user request to avoid overlap */}
        </Link>

        {/* Desktop Nav */}
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid var(--border-color)' }} className="desktop-nav">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a 
                href={`#${nav.id}`} 
                onClick={() => setActive(nav.title)} 
                style={{ 
                  color: active === nav.title ? "white" : "var(--secondary)", 
                  textDecoration: 'none', 
                  fontSize: '0.95rem', 
                  fontWeight: 500, 
                  transition: 'color 0.2s',
                  cursor: 'pointer'
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
