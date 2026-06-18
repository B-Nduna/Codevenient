import React from 'react';
import ContactSection from '../components/ContactSection';

export default function About() {
  return (
    <div className="sub_page">
      <section className="do_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Who We Are?</h2>
            <p>Codevenient Consulting is a forward-thinking software development company committed to building efficient, scalable, and user-friendly solutions. Founded on the principles of innovation and reliability, we aim to empower businesses of all sizes to achieve their goals.</p>
          </div>
        </div>
      </section>

      <section className="who_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="img-box">
                <img src="images/about CV.webp" alt="Consulting Agency Employee" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Our Mission</h2>
                </div>
                <p>Our mission is to empower businesses of all sizes by delivering cutting-edge web development, consulting, and marketing solutions. We strive to simplify technology so you can focus on achieving your goals. We aim to become the go-to digital partner for businesses across South Africa and beyond. By combining creativity, technical expertise, and an understanding of our clients' industries, we deliver solutions that drive results.</p>
              </div>
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Where We Differ</h2>
                </div>
                <ul>
                  <li><b>Customer-Centric Approach:</b><br /> We work closely with you to ensure your needs are met.</li>
                  <li><b>Innovative Solutions:</b><br /> From web development to UI/UX design, we bring your ideas to life with modern tools and techniques.</li>
                  <li><b>Reliability:</b><br /> Our commitment to quality and deadlines sets us apart in the competitive tech landscape.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}