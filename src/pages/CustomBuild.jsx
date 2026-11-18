import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const steps = ['Business', 'Project', 'Requirements', 'Delivery', 'Review'];
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const projectTypes = ['Business website', 'Online store', 'Booking system', 'Web app or automation', 'Other'];

export default function CustomBuild() {
  const started = useRef(Date.now());
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    business: '',
    name: '',
    email: '',
    phone: '',
    projectType: projectTypes[0],
    features: '',
    budget: 'Not sure yet',
    timeline: 'Flexible',
    notes: '',
    website: '',
  });
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const update = (key, value) => {
    setError('');
    setForm((current) => ({ ...current, [key]: value }));
  };

  const validateStep = () => {
    if (step === 0) {
      if (form.business.trim().length < 2 || form.name.trim().length < 2) return 'Add the business and contact name.';
      if (!emailRx.test(form.email.trim())) return 'Add a valid email address.';
      if (form.phone.trim().length < 7) return 'Add a valid phone number.';
    }
    if (step === 2 && form.features.trim().length < 20) return 'Give us a little more detail about what the project needs to do.';
    return '';
  };

  const next = () => {
    const issue = validateStep();
    if (issue) {
      setError(issue);
      return;
    }
    setStep((current) => current + 1);
  };

  const submit = () => {
    if (form.website) return;
    if (Date.now() - started.current < 4000) {
      setError('Give the brief a moment, then try again.');
      return;
    }
    const message = [
      'CODEVENIENT PROJECT BRIEF',
      `Business: ${form.business}`,
      `Contact: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Project: ${form.projectType}`,
      `Requirements: ${form.features}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `Notes: ${form.notes}`,
    ].join('\n');
    window.open(`https://wa.me/27603168301?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="brief-page">
        <Seo title="Project brief ready — Codevenient" noindex />
        <div className="container brief-success">
          <span className="brief-stamp">BRIEF ISSUED</span>
          <p className="label">Project brief / complete</p>
          <h1>Your project brief is ready.</h1>
          <p>WhatsApp has been opened with the complete specification. Send that message and Codevenient has everything needed for the first conversation.</p>
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="brief-page">
      <Seo title="Project brief — Codevenient" description="Share a detailed brief for a website, online store, booking system or custom web application." />
      <div className="container">
        <div className="brief-head">
          <div>
            <p className="label">Project brief — PB-01</p>
            <h1>Make it yours.</h1>
            <p>Five short sections turn your idea into something we can actually scope.</p>
          </div>
          <div className="brief-progress">
            <span>{String(step + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
            <b>{steps[step]}</b>
            <i><em style={{ width: `${progress}%` }} /></i>
          </div>
        </div>
        <div className="brief-sheet">
          <div className="brief-tabs">
            {steps.map((title, index) => (
              <button className={index === step ? 'active' : index < step ? 'done' : ''} onClick={() => index <= step && setStep(index)} key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>{title}
              </button>
            ))}
          </div>
          <div className="brief-form">
            {step === 0 && (
              <>
                <label>BUSINESS / ORGANISATION<input value={form.business} onChange={(event) => update('business', event.target.value)} autoComplete="organization" placeholder="Business name" /></label>
                <div className="field-row">
                  <label>YOUR NAME<input value={form.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" placeholder="Name" /></label>
                  <label>EMAIL<input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" placeholder="you@business.co.za" /></label>
                </div>
                <label>PHONE<input value={form.phone} onChange={(event) => update('phone', event.target.value)} autoComplete="tel" placeholder="+27..." /></label>
                <label className="hp-field" aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" value={form.website} onChange={(event) => update('website', event.target.value)} /></label>
              </>
            )}
            {step === 1 && (
              <label>PROJECT TYPE
                <select value={form.projectType} onChange={(event) => update('projectType', event.target.value)}>
                  {projectTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
            )}
            {step === 2 && (
              <>
                <label>WHAT SHOULD THE PROJECT DO?<textarea rows="8" value={form.features} onChange={(event) => update('features', event.target.value)} placeholder="Bookings, online sales, client accounts, payments, dashboards, uploads, specific workflows..." /></label>
                <label>OTHER NOTES<textarea rows="4" value={form.notes} onChange={(event) => update('notes', event.target.value)} placeholder="Existing website, references, integrations or constraints..." /></label>
              </>
            )}
            {step === 3 && (
              <div className="field-row">
                <label>BUDGET RANGE
                  <select value={form.budget} onChange={(event) => update('budget', event.target.value)}>
                    <option>Under R5,000</option><option>R5,000 – R15,000</option><option>R15,000 – R30,000</option><option>R30,000+</option><option>Not sure yet</option>
                  </select>
                </label>
                <label>TIMELINE
                  <select value={form.timeline} onChange={(event) => update('timeline', event.target.value)}>
                    <option>As soon as possible</option><option>Within 2 weeks</option><option>Within 4 weeks</option><option>1–2 months</option><option>Flexible</option>
                  </select>
                </label>
              </div>
            )}
            {step === 4 && (
              <div className="brief-review">
                {Object.entries(form).filter(([key]) => key !== 'website').map(([key, value]) => (
                  <div key={key}><span>{key.toUpperCase()}</span><b>{value || '—'}</b></div>
                ))}
              </div>
            )}
            {error && <p className="form-message error" role="alert">{error}</p>}
          </div>
          <div className="brief-actions">
            <button className="btn btn-outline" disabled={step === 0} onClick={() => { setError(''); setStep((current) => current - 1); }}>← Previous</button>
            {step < steps.length - 1
              ? <button className="btn btn-primary" onClick={next}>Next drawing →</button>
              : <button className="btn btn-primary" onClick={submit}>Issue brief via WhatsApp →</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
