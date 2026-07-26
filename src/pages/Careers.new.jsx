import ContactSection from '../components/ContactSection';

export default function Careers() {
  return (
    <div className="page-shell sub-page">
      <section className="section section-muted">
        <div className="container split-layout">
          <div className="split-copy reveal">
            <p className="eyebrow">Join the studio</p>
            <h2>We are building a team that can shape serious growth for serious businesses.</h2>
            <p>
              We are always looking for curious thinkers, polished designers and engineers who care about craft, speed and long-term impact. If that sounds like you, we would love to hear from you.
            </p>
          </div>
          <div className="split-panel reveal">
            <div className="panel-card">
              <h3>What we value</h3>
              <ul className="check-list">
                <li>Precision and calm under pressure.</li>
                <li>Deep curiosity and strong communication.</li>
                <li>A commitment to building work that lasts.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
