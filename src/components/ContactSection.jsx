import React, { useState } from 'react';
import { sendWhatsApp } from '../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp(formData.name, formData.phone, formData.email, formData.message);
  };

  return (
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
  );
}