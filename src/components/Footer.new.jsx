import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Codevenient Consulting</p>
          <h3>Premium consulting for founders who want to lead with confidence.</h3>
          <p className="footer-text">We blend strategic thinking, elegant design and dependable delivery into a single growth partner experience.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/privacy-terms">Privacy & Terms</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:codevenientconsulting@gmail.com">codevenientconsulting@gmail.com</a>
          <a href="https://wa.me/+27603168301" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://www.linkedin.com/company/codevenient-consulting/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Codevenient Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
