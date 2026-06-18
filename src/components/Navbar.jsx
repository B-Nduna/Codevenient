import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img src="images/logo.png" alt="Codevenient Logo" className="logo" />
        </Link>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/#contact" className="nav-contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}