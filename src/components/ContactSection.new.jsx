import { useState } from 'react';
import { sendWhatsApp } from '../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp(formData.name, formData.phone, formData.email, formData.message);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-shell reveal">
        <div className="contact-copy">
          <p className="eyebrow">Start your next chapter</p>
          <h2>Let’s build a presence that wins trust and grows your business.</h2>
          <p>Whether you need a premium digital experience, sharper positioning or a stronger client journey, we are ready to help you move with clarity.</p>
          <ul className="check-list">
            <li>Fast response and strategic guidance.</li>
            <li>Work that feels polished and premium.</li>
            <li>Execution that supports growth instead of slowing it down.</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
          <input type="text" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          <input type="tel" id="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
          <input type="email" id="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
          <textarea id="message" placeholder="Tell us about your project" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
