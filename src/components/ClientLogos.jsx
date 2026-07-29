import Reveal from './Reveal';

const BASE = import.meta.env.BASE_URL;

const CLIENTS = [
  { name: 'Aura Herbal Store', logo: `${BASE}images/clients/p1.webp`, url: 'https://b-nduna.github.io/Aura-Herbal-Store/' },
  { name: 'Nkgong Design Studio', logo: `${BASE}images/clients/p2.webp`, url: 'https://b-nduna.github.io/Nkgong-Design-Studio/' },
  { name: 'XO Inks', logo: `${BASE}images/clients/p3.webp`, url: 'https://b-nduna.github.io/XO-Inks/' },
  { name: 'Saprishi', logo: `${BASE}images/clients/p4.webp`, url: 'https://codevenientlab.github.io/saprishi-company-site/' },
  { name: 'Client Five', logo: `${BASE}images/clients/p5.webp`, url: 'https://www.youtube.com/@TorqueNest' },
  { name: 'Client Six', logo: `${BASE}images/clients/p6.webp`, url: 'https://codevenientlab.github.io/Flawless-Motoring/' },
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
