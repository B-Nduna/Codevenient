import Reveal from './Reveal';

const BASE = import.meta.env.BASE_URL;
const RAW = 'https://raw.githubusercontent.com/B-Nduna/Codevenient/main/public/images/clients';

const CLIENTS = [
  { name: 'Aura Herbal Store', file: 'p1.webp', url: 'https://b-nduna.github.io/Aura-Herbal-Store/' },
  { name: 'Nkgong Design Studio', file: 'p2.webp', url: 'https://b-nduna.github.io/Nkgong-Design-Studio/' },
  { name: 'XO Inks', file: 'p3.webp', url: 'https://codevenientlab.github.io/XO-Inks/' },
  { name: 'Saprishi', file: 'p4.webp', url: 'https://codevenientlab.github.io/saprishi-company-site/' },
  { name: "Xoli's Bakery", file: 'p5.webp', url: 'https://codevenientlab.github.io/Xoli-s-Bakery/' },
  { name: 'Flawless Motoring', file: 'p6.webp', url: 'https://codevenientlab.github.io/Flawless-Motoring/' },
];

export default function ClientLogos() {
  return (
    <section className="clients-strip" id="clients">
      <div className="container">
        <Reveal>
          <div className="clients-head">
            <p className="label">Companies we've worked with</p>
            <p>Selected businesses whose projects helped shape the systems we now build and productise.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="clients-grid">
            {CLIENTS.map((client) => (
              <a
                key={client.name}
                className="client-logo"
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${client.name}'s website`}
              >
                <img
                  src={`${BASE}images/clients/${client.file}`}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = `${RAW}/${client.file}`;
                  }}
                />
                <span>{client.name}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
