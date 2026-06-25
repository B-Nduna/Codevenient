import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendWhatsApp } from '../utils/whatsapp';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp(formData.name, formData.phone, formData.email, formData.message);
  };

  return (
    <>
      <div className="hero_area" id="home">
        {/* slider section */}
        <section className="slider_section position-relative">
          <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col">
                      <div className="detail-box">
                        <div>
                          <h2>Welcome to</h2>
                          <h1>Codevenient Consulting</h1>
                          <p>Convenient Code. Infinite Potential!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>

      {/* do section */}
      <section className="do_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Expertise</h2>
            <p>At Codevenient Consulting, we deliver innovative software solutions tailored to your needs. Let us simplify technology so you can focus on what matters.</p>
          </div>
          <div className="do_container">
            <div className="box arrow-start arrow_bg">
              <div className="img-box">
                <img src={`${import.meta.env.BASE_URL}images/wedo-img2.png`} alt="UX, UI Agency" />
              </div>
              <div className="detail-box">
                <h6>UI/UX Design</h6>
              </div>
            </div>
            <div className="box arrow-middle arrow_bg">
              <div className="img-box">
                <img src={`${import.meta.env.BASE_URL}images/d-2.png`} alt="Web Development Agency" />
              </div>
              <div className="detail-box">
                <h6>Web Dev</h6>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={`${import.meta.env.BASE_URL}images/d-1.png`} alt="Marketing Agency" />
              </div>
              <div className="detail-box">
                <h6>Marketing</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end do section */}

      {/* who section */}
      <section className="who_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="img-box">
                <img src={`${import.meta.env.BASE_URL}images/about CV.webp`} alt="Consulting Agency Employee" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Who We Are?</h2>
                </div>
                <p>Codevenient Consulting is a forward-thinking software development company committed to building efficient, scalable, and user-friendly solutions. Founded on the principles of innovation and reliability, we aim to empower businesses of all sizes to achieve their goals.</p>
                <div>
                  <Link to="/about">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end who section */}

      {/* partners section */}
      <section className="partners_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Partners</h2>
            <p>We're proud to work with innovative brands and organizations.</p>
          </div>
          <div className="partners-content">
            <div className="partners-grid">
              <div className="partner-item">
                <img src={`${import.meta.env.BASE_URL}images/p1.webp`} alt="Partner Company 1" />
              </div>
              <div className="partner-item">
                <img src={`${import.meta.env.BASE_URL}images/p2.webp`} alt="Partner Company 2" />
              </div>
              <div className="partner-item">
                <img src={`${import.meta.env.BASE_URL}images/p3.webp`} alt="Partner Company 3" />
              </div>
              <div className="partner-item">
                <img src={`${import.meta.env.BASE_URL}images/p4.webp`} alt="Partner Company 4" />
              </div>
              <div className="partner-item">
                <img src={`${import.meta.env.BASE_URL}images/p5.webp`} alt="Partner Company 5" />
              </div>
              <div className="partner-item">
                <img src={`${import.meta.env.BASE_URL}images/p6.webp`} alt="Partner Company 6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end partners section */}

      {/* target section */}
      <section className="target_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>3+</h2>
                <h5>Years of Business</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>50+</h2>
                <h5>Projects Delivered</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>100+</h2>
                <h5>Satisfied Customers</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>2000+</h2>
                <h5>Cups of Coffee</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end target section */}

      {/* contact section */}
      <section className="contact_section layout_padding" id="contact">
        <div className="container">
          <div className="heading_container">
            <h2>Contact us!</h2>
            <p>Let's build something great together!</p>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div className="contact-form">
                  <form id="subscribe-form" onSubmit={handleWhatsAppSubmit}>
                    <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <textarea id="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </>
  );
}