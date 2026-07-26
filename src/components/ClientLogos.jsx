import Reveal from './Reveal';

// Vite's base path (e.g. "/Codevenient/") — needed because this site deploys
// to a GitHub Pages *subfolder*, not the domain root. A hardcoded "/images/..."
// path resolves to the domain root and 404s in production, so every public
// asset reference below is built from BASE instead.
const BASE = import.meta.env.BASE_URL;

// TODO: replace with your real clients — swap the logo file, name, and url.
// Drop new logo images into /public/images/clients/ and reference them here
// (e.g. `${BASE}images/clients/acme.png`). Keep them roughly the same size/shape
// for a consistent grid — transparent-background PNG or SVG works best.
const CLIENTS = [
  { name: 'Aura Herbal Store', logo: `${BASE}images/clients/p1.webp`, url: 'https://b-nduna.github.io/Aura-Herbal-Store/' },
  { name: 'Nkgong Design Studio', logo: `${BASE}images/clients/p2.webp`, url: 'https://b-nduna.github.io/Nkgong-Design-Studio/' },
  { name: 'XO Inks', logo: `${BASE}images/clients/p3.webp`, url: 'https://b-nduna.github.io/XO-Inks/' },
  { name: 'Saprishi', logo: `${BASE}images/clients/p4.webp`, url: 'https://codevenientlab.github.io/saprishi-company-site/' },
  { name: 'Client Five', logo: `${BASE}images/clients/p5.webp`, url: 'https://example.com' },
  { name: 'Client Six', logo: `${BASE}images/clients/p6.webp`, url: 'https://example.com' },
];

function ClientLogos() {
  return (
    <section className="clients-strip">
      <div className="container">
        <Reveal>
          <div className="clients-head">
            <p className="label">Companies we've worked with</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="clients-grid">
            {CLIENTS.map((c) => (
              <a
                key={c.name}
                className="client-logo"
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${c.name}'s website`}
              >
                <img src={c.logo} alt={`${c.name} logo`} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ClientLogos;
