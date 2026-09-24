import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Codevenient Consulting — Strategy, Design & Build';
const DEFAULT_DESCRIPTION = 'Websites, ecommerce, applications and ready-built digital systems for modern businesses.';
const SITE_ROOT = (import.meta.env.VITE_SITE_URL || 'https://b-nduna.github.io/Codevenient').replace(/\/$/, '');
const DEFAULT_IMAGE = `${SITE_ROOT}/og/codevenient-social-preview.png`;

function upsertMeta(selector, attrs, content) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value));
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function Seo({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, image = DEFAULT_IMAGE, noindex = false, schema = null }) {
  const location = useLocation();
  useEffect(() => {
    const canonical = `${SITE_ROOT}${location.pathname === '/' ? '/' : location.pathname}`;
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description' }, description);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large');
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonical);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, image);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Codevenient Consulting');
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'en_ZA');
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    const schemaId = 'codevenient-structured-data';
    let schemaTag = document.getElementById(schemaId);
    if (schema) {
      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.id = schemaId;
        schemaTag.type = 'application/ld+json';
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(schema);
    } else if (schemaTag) {
      schemaTag.remove();
    }
  }, [title, description, image, noindex, location.pathname, schema]);
  return null;
}
