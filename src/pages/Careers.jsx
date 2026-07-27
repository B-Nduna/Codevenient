import Reveal from '../components/Reveal';
import Seo from '../components/Seo';

const Crosshairs = () => (
  <>
    <span className="bp-crosshair tl" /><span className="bp-crosshair tr" />
    <span className="bp-crosshair bl" /><span className="bp-crosshair br" />
  </>
);

const ROLES = [
  { tag: 'Rev. 01', title: 'Frontend Developer', type: 'Contract / Part-time' },
  { tag: 'Rev. 02', title: 'Product Designer', type: 'Contract / Part-time' },
  { tag: 'Rev. 03', title: 'Client Success Lead', type: 'Part-time' },
];

function Careers() {
  return (
    <div className="container" style={{ paddingTop: 140, paddingBottom: 40 }}>
      <Seo
        title="Careers — Codevenient Consulting"
        description="Open roles at Codevenient — join a small, deliberately small studio building sites for SMBs."
      />
      <Reveal><p className="label">Sheet 03 — Careers</p></Reveal>
      <Reveal>
        <h1 style={{ fontSize: 'clamp(2rem,3.6vw,3rem)', maxWidth: 620, marginTop: 14 }}>
          Join the drafting table
        </h1>
      </Reveal>
      <Reveal>
        <p className="lead" style={{ marginTop: 18, maxWidth: 540 }}>
          We're a small team by design. If you'd rather own a project end to end than be one
          link in a long chain, this is that kind of place.
        </p>
      </Reveal>

      <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Reveal>
          <div className="sheets-grid">
            <div className="sheet">
              <Crosshairs />
              <span className="sheet-tag">Fig. 01 — Culture</span>
              <h3>Ownership</h3>
              <p>You scope it, you build it, you see the client's numbers move because of it.</p>
            </div>
            <div className="sheet">
              <Crosshairs />
              <span className="sheet-tag">Fig. 02 — Culture</span>
              <h3>Craft</h3>
              <p>We'd rather ship four sites a year we're proud of than twelve we're not.</p>
            </div>
            <div className="sheet">
              <Crosshairs />
              <span className="sheet-tag">Fig. 03 — Culture</span>
              <h3>Small team, real impact</h3>
              <p>Your work is visible — to clients, and to the rest of the team.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-tight" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Reveal><p className="label" style={{ marginBottom: 18 }}>Open roles</p></Reveal>
        <Reveal>
          <div className="ruler-wrap">
            <div className="ruler-line" />
            <div className="ruler" style={{ gridTemplateColumns: '1fr' }}>
              {ROLES.map((r) => (
                <div
                  className="rev"
                  key={r.title}
                  style={{
                    paddingRight: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <span className="rev-tag">{r.tag}</span>
                    <h3 style={{ marginBottom: 4 }}>{r.title}</h3>
                    <p style={{ color: 'var(--ink-soft)', fontSize: '.86rem' }}>{r.type}</p>
                  </div>
                  <a className="btn btn-outline" href="mailto:codevenientconsulting@gmail.com?subject=Application">
                    Apply
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Careers;
