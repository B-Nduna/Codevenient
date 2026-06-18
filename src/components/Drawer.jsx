import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Header Tray Container (Logo + Menu Toggle) */}
      <div className="top-left-header"> {/* Changed class name */}
  <Link to="/" className="nav-brand">
    <img src="images/logo.png" alt="Logo" className="logo-small" />
  </Link>
  <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? '✕' : '☰'}
  </button>
</div>

      {/* The Sliding Tray (Only for menu links) */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/privacy-terms" onClick={() => setIsOpen(false)}>Privacy & Terms</Link>
        </nav>
      </div>
    </>
  );
}