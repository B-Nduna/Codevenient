import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-left-header">
        <Link to="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Codevenient consulting logo" className="logo-small" />
        </Link>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-panel">
          <p className="drawer-kicker">Codevenient Consulting</p>
          <nav>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/privacy-terms" onClick={() => setIsOpen(false)}>Privacy & Terms</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
