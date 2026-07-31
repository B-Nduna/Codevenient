import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ClientLogos from '../components/ClientLogos';
import Seo from '../components/Seo';
import { sendWhatsApp } from '../utils/whatsapp';

const Crosshairs = () => (
  <>
    <span className="bp-crosshair tl" /><span className="bp-crosshair tr" />
    <span className="bp-crosshair bl" /><span className="bp-crosshair br" />
  </>
);

function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    if (!name || !phone || !email || !message) {
      setStatus('error');
      return;
    }

    try {
      sendWhatsApp(name, phone, email, message);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const label =
    status === 'sent' ? 'WhatsApp opened ✓'
    : status === 'sending' ? 'Opening WhatsApp…'
    : status === 'error' ? 'Something went wrong — try again'
    : 'Send message';

  return (
    <form className="oform" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="phone" placeholder="Phone" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" rows="3" placeholder="What are you looking to build?" required />
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {label}
      </button>
    </form>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const t = setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return () => clearTimeout(t);
    }
  }, [location.state]);

  return (
    <>
      <Seo
        title="Codevenient Consulting — Strategy, Design & Build"
        description="We draft it properly before we build it — digital systems for small businesses that need to look sharp and work smoothly."
      />
      <header className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal><p className="label">Sheet 01 — Overview</p></Reveal>
            <Reveal><h1>We draft it properly<br />before we <span>build</span> it</h1></Reveal>
            <Reveal>
              <p className="lead">
                Codevenient designs and engineers websites, booking systems and online stores
                for small businesses — planned like a real structure, not thrown together
                from a template.
              </p>
            </Reveal>
            <Reveal>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request a quote
                </a>
                <a
                  className="btn btn-outline"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See recent work
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="blueprint">
              <Crosshairs />
              <div className="bp-diagram">
                <svg viewBox="0 0 480 360">
                  <rect className="draw-line" x="20" y="20" width="440" height="300" rx="6" fill="none" stroke="#1F4E79" strokeWidth="1.5" />
                  <line className="draw-line d2" x1="20" y1="54" x2="460" y2="54" stroke="#1F4E79" strokeWidth="1.2" />
                  <circle className="draw-line d2" cx="38" cy="37" r="4" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <circle className="draw-line d2" cx="52" cy="37" r="4" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <circle className="draw-line d2" cx="66" cy="37" r="4" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="draw-line d3" x="44" y="80" width="180" height="90" rx="3" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="draw-line d3" x="240" y="80" width="196" height="42" rx="3" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="draw-line d3" x="240" y="128" width="196" height="42" rx="3" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="draw-line d4" x="44" y="190" width="392" height="1" fill="#1F4E79" />
                  <rect className="draw-line d4" x="44" y="212" width="130" height="34" rx="3" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="draw-line d4" x="184" y="212" width="130" height="34" rx="3" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="draw-line d4" x="324" y="212" width="112" height="34" rx="3" fill="none" stroke="#1F4E79" strokeWidth="1.2" />
                  <rect className="fade-in-el" x="44" y="264" width="120" height="30" rx="4" fill="#D9552E" style={{ animationDelay: '1.4s' }} />
                  <line className="fade-in-el" x1="20" y1="336" x2="460" y2="336" stroke="#1F4E79" strokeWidth="1" style={{ animationDelay: '1.6s' }} />
                  <line className="fade-in-el" x1="20" y1="330" x2="20" y2="342" stroke="#1F4E79" strokeWidth="1" style={{ animationDelay: '1.6s' }} />
                  <line className="fade-in-el" x1="460" y1="330" x2="460" y2="342" stroke="#1F4E79" strokeWidth="1" style={{ animationDelay: '1.6s' }} />
                </svg>
                <span className="bp-callout fade-in-el" style={{ top: '6%', right: '2%', animationDelay: '1.8s' }}><span className="dot" />100% responsive</span>
                <span className="bp-callout fade-in-el" style={{ top: '56%', left: '0%', animationDelay: '2s' }}><span className="dot" />1.2s load</span>
                <span className="bp-callout fade-in-el" style={{ bottom: '26%', right: '4%', animationDelay: '2.2s' }}><span className="dot" />built to convert</span>
              </div>
              <div className="title-block">
                <span>DRAWN FOR: SMALL BUSINESS &nbsp;·&nbsp; SCALE: N.T.S.</span>
                <span><b>CODEVENIENT</b>&nbsp;REV. 01</span>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="spec-strip">
        <div className="container spec-row">
          <span>Built for — <b>wellness</b></span>
          <span><b>retail</b></span>
          <span><b>hospitality</b></span>
          <span><b>trades</b></span>
          <span><b>professional services</b></span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <div className="head-row">
              <h2>Three drawings, one build team</h2>
              <p className="sub">
                No handoffs between "the designer" and "the developer" — every project is
                scoped, designed and shipped by the same small team.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="sheets-grid">
              <div className="sheet">
                <Crosshairs />
                <span className="sheet-tag">Fig. 01 — Brand sites</span>
                <h3>Marketing &amp; brand sites</h3>
                <p>A fast, distinctive site that earns trust before a visitor reads a word — built to rank and convert on mobile.</p>
                <div className="sheet-spec">LOAD &lt; 1.5s &nbsp;·&nbsp; MOBILE-FIRST</div>
              </div>
              <div className="sheet">
                <Crosshairs />
                <span className="sheet-tag">Fig. 02 — Booking systems</span>
                <h3>Booking &amp; scheduling</h3>
                <p>Calendars, deposits and reminders handled automatically, so appointments fill themselves while you run the business.</p>
                <div className="sheet-spec">AUTOMATED &nbsp;·&nbsp; NO DOUBLE-BOOKINGS</div>
              </div>
              <div className="sheet">
                <Crosshairs />
                <span className="sheet-tag">Fig. 03 — Online stores</span>
                <h3>E-commerce builds</h3>
                <p>Catalogue, checkout and stock wired together and tuned to sell wherever your customers already shop.</p>
                <div className="sheet-spec">SECURE CHECKOUT &nbsp;·&nbsp; STOCK-SYNCED</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tight" id="process" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <Reveal>
            <div className="head-row">
              <h2>Four revisions to a finished build</h2>
              <p className="sub">Four stages, four weeks on average — from first call to a site that's live and being measured.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="ruler-wrap">
              <div className="ruler-line" />
              <div className="ruler">
                <div className="rev"><span className="rev-tag">Rev. 01</span><h3>Discover</h3><p>We map your customers and what's actually stopping people from booking or buying today.</p></div>
                <div className="rev"><span className="rev-tag">Rev. 02</span><h3>Design</h3><p>A working prototype, not a mood board — you click through real screens first.</p></div>
                <div className="rev"><span className="rev-tag">Rev. 03</span><h3>Build</h3><p>Development happens in the open, with progress you can see weekly.</p></div>
                <div className="rev"><span className="rev-tag">Rev. 04</span><h3>Grow</h3><p>Launch is day one — we track conversion and keep shipping improvements.</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" id="results">
        <div className="container">
          <Reveal>
            <p className="label" style={{ marginBottom: 20 }}>Spec sheet — measured, not guessed</p>
            <div className="spec-table">
              <div className="spec-table-row">
                <div className="spec-cell"><div className="num">40<span>+</span></div><div className="lbl">SMBs launched</div></div>
                <div className="spec-cell"><div className="num">1.2<span>s</span></div><div className="lbl">Avg. load time</div></div>
                <div className="spec-cell"><div className="num">4<span> wks</span></div><div className="lbl">Avg. time to launch</div></div>
                <div className="spec-cell"><div className="num">R2.4<span>M+</span></div><div className="lbl">Revenue attributed</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <Reveal>
            <div className="head-row">
              <h2>What clients notice first</h2>
              <p className="sub">The number that mattered to them — not just how the site looks.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="notes-grid">
              <div className="note">
                <div className="note-head"><span className="label" style={{ margin: 0 }}>Inspection note</span><span className="approved">Approved</span></div>
                <p className="quote">"Our booking calendar used to be a WhatsApp thread. Now it fills itself while I'm with a client."</p>
                <div className="note-foot"><div><b>Owner, wellness studio</b><span>Booking system build</span></div><div className="note-result">+64% bookings</div></div>
              </div>
              <div className="note">
                <div className="note-head"><span className="label" style={{ margin: 0 }}>Inspection note</span><span className="approved">Approved</span></div>
                <p className="quote">"We finally look like the business we actually are, not the one we could afford three years ago."</p>
                <div className="note-foot"><div><b>Founder, retail brand</b><span>E-commerce rebuild</span></div><div className="note-result">4.8% conversion</div></div>
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
                <p className="label">Request a quote</p>
                <h2>Tell us where the business is stuck. We'll tell you what we'd draft first.</h2>
                <p className="copy">One call, no obligation. If we're not the right fit, we'll say so and point you somewhere better.</p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
