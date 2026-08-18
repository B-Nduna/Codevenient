import { useEffect, useState } from 'react';
import './Loader.css';

const BASE = import.meta.env.BASE_URL;

const IMAGES = [
  `${BASE}images/logo.png`,
  `${BASE}images/preview.png`,
  `${BASE}images/clients/p1.webp`,
  `${BASE}images/clients/p2.webp`,
  `${BASE}images/clients/p3.webp`,
  `${BASE}images/clients/p4.webp`,
  `${BASE}images/clients/p5.webp`,
  `${BASE}images/clients/p6.webp`,
];

function preloadImages() {
  return Promise.all(
    IMAGES.map((src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = src;
      })
    )
  );
}

function waitForWindowLoad(timeout = 7000) {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve();
    if (document.readyState === 'complete') return resolve();
    let t;
    const onLoad = () => {
      clearTimeout(t);
      window.removeEventListener('load', onLoad);
      resolve();
    };
    window.addEventListener('load', onLoad);
    t = setTimeout(() => {
      window.removeEventListener('load', onLoad);
      resolve();
    }, timeout);
  });
}

export default function Loader({ onDone }) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const minTime = new Promise((r) => setTimeout(r, 600));
    Promise.all([preloadImages(), minTime, waitForWindowLoad()]).then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setLeaving(true), 300);
    return () => clearTimeout(t);
  }, [ready]);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => onDone && onDone(), 550);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  return (
    <div className={`cv-loader ${ready ? 'is-ready' : ''} ${leaving ? 'is-leaving' : ''}`}>
      <div className="cv-loader__inner">
        <img src={`${BASE}images/logo.png`} alt="Codevenient" className="cv-loader__logo" />
        <div className="cv-loader__spinner" aria-hidden="true" />
      </div>
    </div>
  );
}
