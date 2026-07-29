import { Link, useNavigate, useLocation } from 'react-router-dom';

const BASE = import.meta.env.BASE_URL;

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ marginBottom: 14 }}>
              <img src={`${BASE}images/logo.png`} alt="Codevenient logo" className="brand-logo" />
              Codevenience
            </div>
            <p style={{ color: 'var(--ink-soft)', fontSize: '.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              Digital solutions consultancy for SMBs ready to scale their reach.
            </p>
          </div>

          <div className="footer-col">
            <h4>Site</h4>
            <a onClick={() => goSection('services')}>Services</a>
            <a onClick={() => goSection('process')}>Process</a>
            <a onClick={() => goSection('work')}>Work</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/privacy-terms">Privacy &amp; Terms</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a onClick={() => goSection('contact')}>Request a quote</a>
            <a href="mailto:codevenientconsulting@gmail.com">codevenientconsulting@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 CODEVENIENT CONSULTING</span>
          <span>MAHIKENG, SOUTH AFRICA</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
