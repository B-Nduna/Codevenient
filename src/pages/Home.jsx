import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Crosshairs from '../components/Crosshairs';
import ClientLogos from '../components/ClientLogos';
import ContactForm from '../components/ContactForm';

const services = [
  ['Fig. 01 — Brand sites', 'Marketing & brand sites', 'A fast, distinctive site that earns trust before a visitor reads a word — built to rank and convert on mobile.', 'LOAD < 1.5s · MOBILE-FIRST'],
  ['Fig. 02 — Booking systems', 'Booking & scheduling', 'Calendars, deposits and reminders handled automatically, so appointments fill themselves while you run the business.', 'AUTOMATED · NO DOUBLE-BOOKINGS'],
  ['Fig. 03 — Online stores', 'E-commerce builds', 'Catalogue, checkout and stock wired together and tuned to sell wherever your customers already shop.', 'SECURE CHECKOUT · STOCK-READY'],
];

const revisions = [
  ['01', 'Discover', 'We map the customer and the friction stopping people from booking or buying.'],
  ['02', 'Design', 'A working prototype — not a mood board — so real decisions happen early.'],
  ['03', 'Build', 'Development stays visible, tested and responsive across the devices that matter.'],
  ['04', 'Grow', 'Launch is day one. We measure, learn and keep improving.'],
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <>
      <Seo
        title="Web Developer in Mahikeng | Websites & Apps | Codevenient"
        description="Looking for a web developer near Mahikeng? Codevenient builds fast websites, ecommerce solutions, booking systems and web apps for businesses in Dihatshwane, Majemantsho, Mmabatho and nearby communities."
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Codevenient Consulting',
            url: 'https://codevenient.co.za/',
            image: 'https://codevenient.co.za/og/codevenient-social-preview.png',
            telephone: '+27603168301',
            email: 'info@codevenient.co.za',
            description: 'Web design, web development, ecommerce, booking systems and custom web applications for businesses in Mahikeng and surrounding communities.',
            address: { '@type': 'PostalAddress', addressLocality: 'Mahikeng', addressRegion: 'North West', addressCountry: 'ZA' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Digital services',
              itemListElement: [
                { '@type': 'OfferCatalog', name: 'Web design and development' },
                { '@type': 'OfferCatalog', name: 'Ecommerce development' },
                { '@type': 'OfferCatalog', name: 'Booking systems' },
                { '@type': 'OfferCatalog', name: 'Custom web applications' },
              ],
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is there a web developer near Dihatshwane?',
                acceptedAnswer: { '@type': 'Answer', text: 'Codevenient Consulting serves Dihatshwane and the wider Mahikeng area with web design, ecommerce, booking systems and custom web development.' },
              },
              {
                '@type': 'Question',
                name: 'Do you build websites for businesses in Majemantsho and Mmabatho?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. Codevenient works with businesses in Majemantsho, Mmabatho, Mahikeng and surrounding communities, with projects handled online or through direct consultation.' },
              },
              {
                '@type': 'Question',
                name: 'Can you redesign an existing business website?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. Existing sites can be redesigned for clearer messaging, better mobile usability, stronger calls to action, speed and search visibility.' },
              },
            ],
          },
        ]}
      />

      <header className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal><p className="label">Sheet 01 — Overview</p></Reveal>
            <Reveal><h1>We draft it properly<br />before we <span>build</span> it</h1></Reveal>
            <Reveal><p className="lead">Codevenient designs and engineers websites, online stores, booking systems and web apps for small businesses — shaped around the way you work.</p></Reveal>
            <Reveal>
              <div className="hero-actions">
                <a className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Start a project</a>
                <a className="technical-link hero-secondary-link" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>See our approach →</a>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="blueprint">
              <Crosshairs />
              <div className="bp-diagram">
                <svg viewBox="0 0 480 360">
                  <rect className="draw-line" x="20" y="20" width="440" height="300" rx="6" fill="none" stroke="#1F4E79" strokeWidth="1.5" />
                  <line className="draw-line d2" x1="20" y1="54" x2="460" y2="54" stroke="#1F4E79" />
                  <rect className="draw-line d3" x="44" y="80" width="180" height="90" rx="3" fill="none" stroke="#1F4E79" />
                  <rect className="draw-line d3" x="240" y="80" width="196" height="42" rx="3" fill="none" stroke="#1F4E79" />
                  <rect className="draw-line d3" x="240" y="128" width="196" height="42" rx="3" fill="none" stroke="#1F4E79" />
                  <rect className="draw-line d4" x="44" y="212" width="130" height="34" rx="3" fill="none" stroke="#1F4E79" />
                  <rect className="draw-line d4" x="184" y="212" width="130" height="34" rx="3" fill="none" stroke="#1F4E79" />
                  <rect className="draw-line d4" x="324" y="212" width="112" height="34" rx="3" fill="none" stroke="#1F4E79" />
                  <rect className="fade-in-el" x="44" y="264" width="120" height="30" rx="4" fill="#D9552E" />
                </svg>
                <span className="bp-callout c1"><span className="dot" />100% responsive</span>
                <span className="bp-callout c2"><span className="dot" />made for your business</span>
                <span className="bp-callout c3"><span className="dot" />built to convert</span>
              </div>
              <div className="title-block"><span>DRAWN FOR: SMALL BUSINESS · SCALE: N.T.S.</span><span><b>CODEVENIENT</b> REV. 05.1</span></div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="spec-strip">
        <div className="container spec-row">
          <span>Built for — <b>wellness</b></span><span><b>retail</b></span><span><b>hospitality</b></span><span><b>trades</b></span><span><b>professional services</b></span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal><div className="head-row"><h2>Three drawings, one build team</h2><p className="sub">No handoffs between “the designer” and “the developer” — every project is scoped, designed and shipped by the same small team.</p></div></Reveal>
          <Reveal>
            <div className="sheets-grid">
              {services.map((service) => (
                <div className="sheet" key={service[0]}>
                  <Crosshairs /><span className="sheet-tag">{service[0]}</span><h3>{service[1]}</h3><p>{service[2]}</p><div className="sheet-spec">{service[3]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tight" id="process">
        <div className="container">
          <Reveal><div className="head-row"><h2>Four revisions to a finished build</h2><p className="sub">Four deliberate stages — from first call to something live, measurable and ready to improve.</p></div></Reveal>
          <Reveal>
            <div className="ruler-wrap"><div className="ruler-line" /><div className="ruler">
              {revisions.map(([number, title, description]) => (
                <div className="rev" key={number}><span className="rev-tag">Rev. {number}</span><h3>{title}</h3><p>{description}</p></div>
              ))}
            </div></div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" id="results">
        <div className="container">
          <Reveal>
            <p className="label result-label">Spec sheet — what we optimise for</p>
            <div className="spec-table"><div className="spec-table-row">
              <div className="spec-cell"><div className="num">100<span>%</span></div><div className="lbl">Responsive systems</div></div>
              <div className="spec-cell"><div className="num">3<span> disciplines</span></div><div className="lbl">Websites, commerce, applications</div></div>
              <div className="spec-cell"><div className="num">1<span> team</span></div><div className="lbl">Strategy through deployment</div></div>
            </div></div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <Reveal><div className="head-row"><h2>Built around real business needs</h2><p className="sub">Every project starts with the people using it and the work it needs to make easier.</p></div></Reveal>
          <Reveal>
            <div className="notes-grid">
              <div className="note">
                <div className="note-head"><span className="label">Field note</span><span className="approved">CLEAR</span></div>
                <p className="quote">Legal, security, retail and creative businesses each have different customers, workflows and reasons to earn trust.</p>
                <div className="note-foot"><div><b>Start with the problem</b><span>Research before recommendations</span></div><div className="note-result">LESS GUESSWORK</div></div>
              </div>
              <div className="note">
                <div className="note-head"><span className="label">Field note</span><span className="approved">TAILORED</span></div>
                <p className="quote">A useful website or system should fit the way your business works — and make the next step obvious for your customers.</p>
                <div className="note-foot"><div><b>Make it work for you</b><span>Purposeful design and development</span></div><div className="note-result">MORE CLARITY</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClientLogos />

      <section className="section" id="contact">
        <div className="container">
          <Reveal>
            <div className="order-band">
              <div>
                <p className="label">Start a project</p>
                <h2>Tell us where the business is stuck. We'll tell you what we'd draft first.</h2>
                <p className="copy">A few quick choices help us understand what you need before we get in touch.</p>
                <Link to="/custom-build" className="technical-link light-link">NEED A FULLER PROJECT BRIEF? →</Link>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
