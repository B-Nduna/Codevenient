import { useRef, useState } from 'react';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ConsultationCorner() {
  const started = useRef(Date.now());
  const [form, setForm] = useState({ need: 'Help me choose a system', budget: 'R2,500 – R5,000', name: '', contact: '', website: '' });
  const [message, setMessage] = useState('');
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = (event) => {
    event.preventDefault();
    setMessage('');
    if (form.website) return; // honeypot
    if (Date.now() - started.current < 2500) { setMessage('Give the form a moment, then try again.'); return; }
    if (form.name.trim().length < 2) { setMessage('Add your name so we know who we are speaking with.'); return; }
    const contact = form.contact.trim();
    if (contact.length < 7 && !emailPattern.test(contact)) { setMessage('Add a valid phone number or email address.'); return; }
    const text = [
      'CODEVENIENT CONSULTATION CORNER',
      `Name: ${form.name.trim()}`,
      `Contact: ${contact}`,
      `Need: ${form.need}`,
      `Budget: ${form.budget}`,
      'Source: Store consultation corner',
    ].join('\n');
    window.open(`https://wa.me/27603168301?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setMessage('Consultation note ready — WhatsApp opened.');
  };

  return <section className="consultation-corner" id="consultation">
    <div className="container consultation-grid">
      <div className="consultation-copy">
        <p className="label">Consultation corner / 15 min</p>
        <h2>Not sure what to buy? Don't guess.</h2>
        <p>Tell us what the business needs and roughly where the budget sits. We’ll point you toward a ready system, a launch package, or a custom build — whichever actually makes sense.</p>
        <div className="consultation-notes"><span>NO HARD SELL</span><span>ONE PRACTICAL RECOMMENDATION</span><span>WHATSAPP-FIRST</span></div>
      </div>
      <form className="consultation-form" onSubmit={submit} noValidate>
        <label>I NEED HELP WITH<select value={form.need} onChange={(e) => update('need', e.target.value)}><option>Help me choose a system</option><option>Launching a ready system</option><option>Customising a system</option><option>A completely custom build</option></select></label>
        <label>WORKING BUDGET<select value={form.budget} onChange={(e) => update('budget', e.target.value)}><option>Under R2,500</option><option>R2,500 – R5,000</option><option>R5,000 – R10,000</option><option>R10,000+</option><option>Not sure yet</option></select></label>
        <div className="consultation-row"><label>NAME<input value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" placeholder="Your name" /></label><label>PHONE OR EMAIL<input value={form.contact} onChange={(e) => update('contact', e.target.value)} autoComplete="email" placeholder="+27... or you@business.co.za" /></label></div>
        <label className="hp-field" aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} /></label>
        {message && <p className="form-message" role="status">{message}</p>}
        <button className="btn btn-primary" type="submit">Start a consultation →</button>
        <small>By continuing, you agree that we may use these details to respond to this enquiry. See our privacy policy.</small>
      </form>
    </div>
  </section>;
}
