import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const services = [
  {
    title: 'Strategy & Growth Systems',
    body: 'We shape the commercial story, positioning and growth engine behind your next big move.',
  },
  {
    title: 'Digital Products & UX',
    body: 'From premium web experiences to interactive product journeys, we build with clarity and conviction.',
  },
  {
    title: 'Engineering & Automation',
    body: 'We turn operational complexity into clean systems, automation and faster execution.',
  },
];

const metrics = [
  { value: '50+', label: 'launches delivered' },
  { value: '3x', label: 'faster delivery cycles' },
  { value: '100%', label: 'client-first collaboration' },
];

const process = [
  'Diagnose the opportunity and the pressure points.',
  'Design a premium experience and a scalable blueprint.',
  'Build, launch and refine with momentum.',
];

const testimonials = [
  {
    quote: 'They approached our transformation like a serious growth partner, not a vendor.',
    name: 'Founder, Scale-Up Brand',
  },
  {
    quote: 'Every detail felt intentional, from the first pitch to the final launch.',
    name: 'Operations Lead, Financial Services',
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Strategy • Design • Engineering</p>
            <h1>We build consulting experiences that make ambitious brands feel unmissable.</h1>
            <p className="lead">
              Codevenient Consulting helps founders and leadership teams turn complex ideas into premium digital systems, sharper positioning and client-ready growth momentum.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Book a strategy call</a>
              <Link to="/about" className="btn btn-secondary">Discover our approach</Link>
            </div>
            <div className="stat-grid">
              {metrics.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel reveal">
            <div className="hero-card">
              <div className="hero-card-badge">Built for high-stakes growth</div>
              <img src={`${import.meta.env.BASE_URL}images/about CV.webp`} alt="Premium consulting team" />
              <div className="hero-card-footer">
                <p>From boardroom strategy to digital execution, every engagement is built to elevate perception and accelerate revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading reveal">
          <p className="eyebrow">Why clients choose us</p>
          <h2>We make your business look like the future, not just another option.</h2>
          <p>
            We blend strategic thinking, refined design and dependable engineering into a single experience that helps premium clients feel immediate confidence.
          </p>
        </div>
        <div className="container grid-3 reveal">
          {services.map((service) => (
            <article className="feature-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="split-copy reveal">
            <p className="eyebrow">A sharper path to momentum</p>
            <h2>We turn strategy into something visible, credible and commercially powerful.</h2>
            <p>
              Whether you are positioning a new service, launching a digital product or refreshing your client experience, we create structure that feels elevated and performs at the highest level.
            </p>
            <ul className="check-list">
              {process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="split-panel reveal">
            <div className="panel-card">
              <h3>Built for ambitious leadership teams</h3>
              <p>We bring the calm, clarity and execution discipline expected from a multi-million-rand growth partner.</p>
              <Link to="/about" className="text-link">Explore our story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading reveal">
          <p className="eyebrow">Client response</p>
          <h2>Brands trust us when they want clarity, polish and measurable momentum.</h2>
        </div>
        <div className="container testimonial-grid reveal">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
