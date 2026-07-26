import ContactSection from '../components/ContactSection';

const values = [
  'Strategic thinking that begins with business outcomes, not just aesthetics.',
  'Design systems that feel premium and guide clients with confidence.',
  'Engineering that is reliable, scalable and built for long-term growth.',
];

export default function About() {
  return (
    <div className="page-shell sub-page">
      <section className="section section-muted">
        <div className="container split-layout">
          <div className="split-copy reveal">
            <p className="eyebrow">About Codevenient</p>
            <h2>We are the kind of consulting team that makes ambitious companies feel instantly more credible.</h2>
            <p>
              Codevenient Consulting combines creative leadership, product thinking and engineering discipline to help modern businesses move with confidence. We do not just design deliverables; we shape the experience that makes clients trust you, remember you and invest in you.
            </p>
          </div>
          <div className="split-panel reveal">
            <div className="panel-card">
              <h3>What we bring to the table</h3>
              <ul className="check-list">
                {values.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-card reveal">
            <img src={`${import.meta.env.BASE_URL}images/about CV.webp`} alt="Codevenient consulting team" />
          </div>
          <div className="about-card reveal">
            <p className="eyebrow">Our philosophy</p>
            <h3>Great consulting is part strategy, part experience and part execution.</h3>
            <p>
              We believe high-performing businesses need more than polished visuals. They need a clear story, a seamless client journey and systems that are ready for scale.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
