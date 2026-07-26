import Reveal from '../components/Reveal';

function PrivacyTerms() {
  return (
    <div className="container legal" style={{ paddingTop: 140, paddingBottom: 80, maxWidth: 800 }}>
      <Reveal><p className="label">Sheet 04 — Privacy &amp; Terms</p></Reveal>
      <Reveal>
        <h1 style={{ fontSize: 'clamp(1.9rem,3.2vw,2.6rem)', marginTop: 14 }}>
          Privacy Policy &amp; Terms of Service
        </h1>
      </Reveal>
      <Reveal>
        <p style={{ color: 'var(--ink-soft)', marginTop: 10, fontFamily: "'IBM Plex Mono',monospace", fontSize: '.82rem' }}>
          Last updated: January 2026
        </p>
      </Reveal>

      <Reveal>
        <div>
          <h3>Privacy Policy</h3>
          <p>1. Information we collect — name, email and any details you submit through our contact or quote forms.</p>
          <p style={{ marginTop: 10 }}>2. How we use it — to respond to enquiries, scope projects, and, where a client relationship exists, to deliver and support the work.</p>
          <p style={{ marginTop: 10 }}>3. Third parties — we don't sell contact information. Limited data may pass through tools we use to run the business, such as email or scheduling providers.</p>
          <p style={{ marginTop: 10 }}>4. Your rights — you can request a copy of what we hold on you, or ask us to delete it, at any time.</p>

          <h3>Terms of Service</h3>
          <p>1. Engagements — project scope, timelines and fees are agreed in writing before work begins.</p>
          <p style={{ marginTop: 10 }}>2. Intellectual property — ownership of the final delivered site transfers to the client on full payment; Codevenient retains the right to showcase completed work.</p>
          <p style={{ marginTop: 10 }}>3. Liability — Codevenient is not liable for indirect or consequential losses arising from use of a delivered site.</p>
          <p style={{ marginTop: 10 }}>4. Governing law — these terms are governed by the laws of South Africa.</p>

          <p style={{ marginTop: 24 }}>
            Questions about either policy —{' '}
            <a href="mailto:hello@codevenient.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              hello@codevenient.com
            </a>
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export default PrivacyTerms;
