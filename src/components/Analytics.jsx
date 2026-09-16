import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const CONSENT_KEY = 'codevenient-cookie-consent';

function analyticsAllowed() {
  try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || '{}').analytics === true; }
  catch { return false; }
}

function loadAnalytics() {
  if (!GA_ID || window.__cvGaLoaded) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false });
  window.__cvGaLoaded = true;
}

export default function Analytics() {
  const location = useLocation();
  useEffect(() => {
    const track = () => {
      if (!analyticsAllowed() || !GA_ID) return;
      loadAnalytics();
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `${location.pathname}${location.search}`,
      });
    };
    track();
    window.addEventListener('codevenient-consent-changed', track);
    return () => window.removeEventListener('codevenient-consent-changed', track);
  }, [location.pathname, location.search]);
  return null;
}
