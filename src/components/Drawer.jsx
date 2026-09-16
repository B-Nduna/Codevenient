import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const BASE = import.meta.env.BASE_URL;
const SECTION_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Work', id: 'work' },
];

export default function Drawer() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, wishlist, setCartOpen, setWishlistOpen } = useStore();

  const commerceNav = location.pathname.startsWith('/store') || location.pathname === '/checkout';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

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
          <Link to="/" className="brand-lockup">
            <img src={`${BASE}images/logo.png`} alt="Codevenient Consulting mark" />
            <span><b>Codevenient</b><small>CONSULTING</small></span>
          </Link>

          <ul className="nav-links">
            {SECTION_LINKS.map((s) => (
              <li key={s.id}><a onClick={() => goSection(s.id)}>{s.label}</a></li>
            ))}
            <li><Link to="/store" className={location.pathname.startsWith('/store') ? 'active' : ''}>Store <em>NEW</em></Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          </ul>

          <div className={`nav-tools ${commerceNav ? 'commerce-active' : ''}`}>
            {commerceNav && (
              <>
                <button className="store-tool saved-tool" onClick={() => setWishlistOpen(true)} aria-label="Saved systems">
                  SAVE {String(wishlist.length).padStart(2, '0')}
                </button>
                <button className="store-tool cart-tool" onClick={() => setCartOpen(true)} aria-label="Cart">
                  CART {String(cartCount).padStart(2, '0')}
                </button>
              </>
            )}
            <button className="burger" onClick={() => setOpen(true)} aria-label="Open menu"><span/><span/><span/></button>
          </div>
        </div>
      </nav>

      <div className={`drawer ${open ? 'open' : ''}`}>
        <button className="drawer-close" onClick={() => setOpen(false)}>×</button>
        <p className="drawer-kicker">INDEX / CODEVENIENT</p>
        {SECTION_LINKS.map((s) => <a key={s.id} onClick={() => goSection(s.id)}>{s.label}</a>)}
        <Link to="/store">Store <small>NEW</small></Link>
        <Link to="/about">About</Link>
        <Link to="/careers">Careers</Link>
        <a onClick={() => goSection('contact')}>Start a project</a>
      </div>
    </>
  );
}
