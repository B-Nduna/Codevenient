import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>Contact us</h5>
                <div>
                  <div className="img-box"><img src={`${import.meta.env.BASE_URL}images/location-white.png`} width="18px" alt="50223 Dihatshwane, Mahikeng" /></div>
                  <p>Mafikeng, South Africa</p>
                </div>
                <div>
                  <div className="img-box"><img src={`${import.meta.env.BASE_URL}images/telephone-white.png`} width="12px" alt="telephone" /></div>
                  <p>+27 60 316 8301</p>
                </div>
                <div>
                  <div className="img-box"><img src={`${import.meta.env.BASE_URL}images/envelope-white.png`} width="18px" alt="email" /></div>
                  <a href="mailto:codevenientconsulting@gmail.com"><p>Email</p></a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_insta">
                <h5>Quick Links</h5>
                <div className="insta_container">
                  <div><Link to="/">Home</Link></div>
                  <div><Link to="/about">About</Link></div>
                  <div><Link to="/careers">Careers</Link></div>
                  <div><Link to="/privacy-terms">Privacy & Terms</Link></div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Innovation in Action</h5>
                <img src={`${import.meta.env.BASE_URL}images/pc.webp`} width="200px" alt="Codevenient Solutions Mockup" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form">
                <h5>Get in Touch</h5>
                <div className="insta_container">
                  <div><p>Stay updated and join our community!</p></div>
                  <div className="social_box">
                    <a href="https://wa.me/+27603168301" target="_blank" title="WhatsApp" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://instagram.com/codevenientconsulting?igsh=eTE1cXRtenNpdW53" target="_blank" title="Instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com/company/codevenient-consulting/" target="_blank" title="LinkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://youtube.com/@CodevenientConsulting" target="_blank" title="YouTube" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid footer_section">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved By <Link to="/">Codevenient Consulting.</Link></p>
      </section>
    </>
  );
}