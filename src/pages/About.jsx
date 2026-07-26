import Reveal from '../components/Reveal';

const Crosshairs = () => (
  <>
    <span className="bp-crosshair tl" /><span className="bp-crosshair tr" />
    <span className="bp-crosshair bl" /><span className="bp-crosshair br" />
  </>
);

function About() {
  return (
    <div className="container" style={{ paddingTop: 140, paddingBottom: 40 }}>
      <Reveal><p className="label">Sheet 02 — About</p></Reveal>
      <Reveal>
        <h1 style={{ fontSize: 'clamp(2rem,3.6vw,3rem)', maxWidth: 640, marginTop: 14 }}>
          Built by people who've run the WhatsApp-thread version of a business too
        </h1>
      </Reveal>
      <Reveal>
        <p className="lead" style={{ marginTop: 18, maxWidth: 560 }}>
          Codevenient exists because most small businesses aren't short on customers — they're
          short on a system that makes it easy for those customers to book, buy, and come back.
        </p>
      </Reveal>

      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Reveal>
          <div className="sheets-grid">
            <div className="sheet">
              <Crosshairs />
              <span className="sheet-tag">Fig. 01 — How we work</span>
              <h3>Plan properly</h3>
              <p>Every build starts with a real plan, not a template swapped for your logo — so the site fits how your business actually runs.</p>
            </div>
            <div className="sheet">
              <Crosshairs />
              <span className="sheet-tag">Fig. 02 — How we work</span>
              <h3>Build in the open</h3>
              <p>You see progress weekly. No disappearing for six weeks and reappearing with a surprise.</p>
            </div>
            <div className="sheet">
              <Crosshairs />
              <span className="sheet-tag">Fig. 03 — How we work</span>
              <h3>Keep measuring</h3>
              <p>Launch is day one. We track what's converting and keep refining against real numbers.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-tight" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Reveal>
          <div className="blueprint" style={{ padding: '28px 26px 46px' }}>
            <Crosshairs />
            <p className="label">Fig. 04 — The team</p>
            <h2 style={{ marginTop: 12, fontSize: '1.5rem' }}>A small, deliberately small team</h2>
            <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75, marginTop: 12, maxWidth: 560 }}>
              Codevenient is run as a small, focused studio rather than a large agency — the same
              people who scope your project are the ones who design and build it. That's a
              deliberate choice: fewer handoffs, faster decisions, and someone who actually knows
              your business by name.
            </p>
            <div className="title-block" style={{ position: 'static', marginTop: 24, borderTop: '1px solid var(--blue-line)', paddingTop: 12 }}>
              <span>FOUNDED: CODEVENIENT CONSULTING</span>
              <span><b>BASED IN</b>&nbsp;Randburg, South Africa</span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default About;
