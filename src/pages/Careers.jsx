import React from 'react';
import ContactSection from '../components/ContactSection';

export default function Careers() {
  return (
    <div className="sub_page">
      <section className="do_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Join Our Team</h2>
          </div>
        </div>
      </section>

      <section className="who_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="img-box">
                <img src="images/pc.webp" alt="Join Codevenient" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <p>We're not hiring right now, but we're always on the lookout for passionate and talented individuals. If you're interested in working with us in the future, feel free to drop your details below.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}