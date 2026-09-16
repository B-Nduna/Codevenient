import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'codevenient-cookie-consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!localStorage.getItem(KEY));
    const reopen = () => setOpen(true);
    window.addEventListener('codevenient-open-cookie-settings', reopen);
    return () => window.removeEventListener('codevenient-open-cookie-settings', reopen);
  }, []);

  const choose = (analytics) => {
    localStorage.setItem(KEY, JSON.stringify({ essential: true, analytics, updatedAt: new Date().toISOString() }));
    setOpen(false);
    window.dispatchEvent(new CustomEvent('codevenient-consent-changed'));
  };

  if (!open) return null;
  return <div className="cookie-banner" role="dialog" aria-modal="true" aria-label="Cookie preferences">
    <div>
      <span className="cookie-ref">SITE PREF / 01</span>
      <h2>Cookies, kept practical.</h2>
      <p>Essential storage keeps the cart and your preferences working. Optional analytics helps us understand which pages are useful. No advertising cookies.</p>
      <Link to="/privacy-policy">Read privacy policy →</Link>
    </div>
    <div className="cookie-actions">
      <button className="btn btn-outline" onClick={() => choose(false)}>Essential only</button>
      <button className="btn btn-primary" onClick={() => choose(true)}>Allow analytics</button>
    </div>
  </div>;
}
