import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Drawer.css';

// Sections that live on the Home page. Clicking these scrolls there directly
// if we're already on Home, or navigates Home first and scrolls after render.
const SECTION_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Work', id: 'work' },
];

function Drawer() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
    setOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-row">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Codevenient logo" className="brand-logo" />
            Codevenient
          </Link>

          <ul className="nav-links">
            {SECTION_LINKS.map((s) => (
              <li key={s.id}>
                <a onClick={() => goSection(s.id)}>{s.label}</a>
              </li>
            ))}
            <li>
              <Link
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
          </ul>

          <button className="burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`drawer ${open ? 'open' : ''}`}>
        <button className="drawer-close" onClick={() => setOpen(false)}>&times;</button>
        {SECTION_LINKS.map((s) => (
          <a key={s.id} onClick={() => goSection(s.id)}>{s.label}</a>
        ))}
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
        <a onClick={() => goSection('contact')}>Contact</a>
      </div>
    </>
  );
}

export default Drawer;
