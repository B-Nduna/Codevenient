import Reveal from './Reveal';

const BASE = import.meta.env.BASE_URL;

const AREAS = [
  ['Dihatshwane', 'web-design-dihatshwane'],
  ['Majemantsho', 'web-design-majemantsho'],
  ['Mahikeng', 'web-design-mahikeng'],
  ['Mmabatho', 'web-design-mmabatho'],
];

const NEARBY = ['Lomanyaneng', 'Setlopo', 'Lerwaneng', 'Danville', 'Magogoe', 'Lonely Park', 'Lokaleng', 'Mafikeng'];

export default function LocalSeoSection() {
  return (
    <section className="section local-seo" id="areas-we-serve" aria-labelledby="local-seo-title">
      <div className="container">
        <Reveal>
          <div className="local-seo-head">
            <div>
              <p className="label">Local sheet / North West</p>
              <h2 id="local-seo-title">A web developer close to the businesses we build for.</h2>
            </div>
            <p className="sub">
              Looking for a web developer or website builder near you? Codevenient works with businesses across
              Dihatshwane, Majemantsho, Mahikeng, Mmabatho and nearby communities — from first website to booking,
              ecommerce and custom web systems.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="local-area-grid">
            {AREAS.map(([name, slug], index) => (
              <a className="local-area-card" href={`${BASE}${slug}/`} key={name}>
                <span className="local-area-index">0{index + 1}</span>
                <div>
                  <strong>Web design in {name}</strong>
                  <small>Websites · ecommerce · booking · custom builds</small>
                </div>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="local-nearby-row">
            <span>Also serving</span>
            <p>{NEARBY.join(' · ')}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="local-search-intent">
            <div>
              <span className="sheet-tag">Common local searches</span>
              <p>
                “web developer near me” · “website builder near me” · “small business website near me” ·
                “web designer Mahikeng” · “ecommerce developer near me”
              </p>
            </div>
            <a className="btn btn-primary" href="#contact">Start a local project →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
