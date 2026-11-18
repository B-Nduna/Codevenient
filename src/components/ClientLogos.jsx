import { useEffect, useRef, useState } from 'react';

const BASE = import.meta.env.BASE_URL;
const RAW = 'https://raw.githubusercontent.com/B-Nduna/Codevenient/main/public/images/clients';

const CLIENTS = [
  {
    name: 'Aura Herbal Store',
    file: 'p1.webp',
    url: 'https://b-nduna.github.io/Aura-Herbal-Store/',
    description: 'A storefront for exploring Aura’s herbal products.',
  },
  {
    name: 'Nkgong Design Studio',
    file: 'p2.webp',
    url: 'https://b-nduna.github.io/Nkgong-Design-Studio/',
    description: 'A studio website presenting Nkgong’s design work.',
  },
  {
    name: 'XO Inks',
    file: 'p3.webp',
    url: 'https://codevenientlab.github.io/XO-Inks/',
    description: 'A dedicated website introducing the XO Inks brand.',
  },
  {
    name: 'Occusmart',
    file: 'p7.png',
    url: 'https://occusmart.co.za',
    description: 'A website presenting Occusmart’s occupational health services.',
  },
  {
    name: 'Best Enough Driving School',
    file: 'p8.png',
    url: 'https://bestenoughdriving.co.za',
    description: 'A driving school website for comparing lessons and booking training.',
  },
  {
    name: 'Flawless Motoring',
    file: 'p6.webp',
    url: 'https://codevenientlab.github.io/Flawless-Motoring/',
    description: 'A website introducing the Flawless Motoring automotive business.',
  },
];

function ClientCard({ client }) {
  const [open, setOpen] = useState(false);
  const card = useRef(null);
  const trigger = useRef(null);
  const panelId = `client-preview-${client.file.split('.')[0]}`;

  useEffect(() => {
    if (!open) return;

    function dismiss(event) {
      if (event.key !== 'Escape' || event.defaultPrevented) return;
      if (card.current.contains(document.activeElement)) trigger.current.focus();
      setOpen(false);
    }

    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [open]);

  return (
    <li
      ref={card}
      className="client-card"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse' && !card.current.querySelector(':focus-visible, .client-preview a:focus')) {
          setOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        className="client-logo"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onFocus={(event) => {
          if (event.currentTarget.matches(':focus-visible')) setOpen(true);
        }}
        onClick={() => setOpen((previous) => !previous)}
      >
        <span className="client-indicator" aria-hidden="true">{open ? '−' : '+'}</span>
        <img
          src={`${BASE}images/clients/${client.file}`}
          alt=""
          loading="lazy"
          onError={(event) => {
            const logo = event.currentTarget;
            const fallback = `${RAW}/${client.file}`;
            if (logo.src !== fallback) logo.src = fallback;
          }}
        />
        <span className="client-name">{client.name}</span>
      </button>
      <div className="client-preview" id={panelId} hidden={!open}>
        <p>{client.description}</p>
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${client.name} project (opens in a new tab)`}
        >
          View project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </li>
  );
}

export default function ClientLogos() {
  return (
    <section className="clients-strip" id="clients" aria-labelledby="clients-title">
      <div className="container">
        <div className="clients-head">
          <h2 className="label" id="clients-title">Companies we’ve worked with</h2>
          <p>Selected businesses whose projects helped shape the systems we now build and productise.</p>
        </div>
        <ul className="clients-grid" role="list">
          {CLIENTS.map((client) => <ClientCard key={client.name} client={client} />)}
        </ul>
      </div>
    </section>
  );
}
