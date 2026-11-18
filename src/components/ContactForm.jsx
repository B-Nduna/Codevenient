import { useState } from 'react';
import './ContactForm.css';

const projectTypes = [
  'Business website',
  'Online store',
  'Booking system',
  'Web app or automation',
  'Not sure yet',
];

const approaches = [
  'A new project',
  'Redesign or improve an existing site',
  'Ongoing support',
  'Not sure yet',
];

const steps = ['Project', 'Help'];

function ChoiceGroup({ label, name, options, value, onChange }) {
  return (
    <fieldset className="contact-choice-group">
      <legend>{label}</legend>
      <div className="contact-choice-grid">
        {options.map((option) => (
          <label className={`contact-choice ${value === option ? 'selected' : ''}`} key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ContactForm() {
  const [projectType, setProjectType] = useState('');
  const [approach, setApproach] = useState('');
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!approach) {
      setError('Choose the kind of help you need.');
      return;
    }

    const message = [
      'Hi Codevenient, I’m looking for help with a project.',
      `What I want to build: ${projectType}`,
      `The help I need: ${approach}`,
      'I’d like to share more about my business and project here.',
    ].join('\n');

    window.open(`https://wa.me/27603168301?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-wizard contact-wizard-success" role="status">
        <p className="contact-wizard-kicker">WHATSAPP / READY</p>
        <h3>Let’s talk about your project.</h3>
        <p>Your choices are ready in WhatsApp. Send the message, then tell us your name and anything else we should know.</p>
      </div>
    );
  }

  return (
    <form className="contact-wizard" onSubmit={submit} noValidate>
      <div className="contact-wizard-heading">
        <span className="contact-wizard-kicker">PROJECT ENQUIRY</span>
        <span>{String(step + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')} — {steps[step]}</span>
      </div>
      <div className="contact-wizard-progress" role="progressbar" aria-valuemin="1" aria-valuemax={steps.length} aria-valuenow={step + 1}>
        <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>

      {step === 0 ? (
        <ChoiceGroup
          label="What are you looking to build?"
          name="projectType"
          options={projectTypes}
          value={projectType}
          onChange={(value) => { setProjectType(value); setError(''); }}
        />
      ) : (
        <ChoiceGroup
          label="What kind of help do you need?"
          name="approach"
          options={approaches}
          value={approach}
          onChange={(value) => { setApproach(value); setError(''); }}
        />
      )}

      {error && <p className="form-message error" role="alert">{error}</p>}
      <div className="contact-wizard-actions">
        {step > 0 && (
          <button className="btn btn-outline" type="button" onClick={() => { setError(''); setStep(0); }}>
            ← Back
          </button>
        )}
        {step === 0 ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              if (!projectType) {
                setError('Choose what you are looking to build.');
                return;
              }
              setError('');
              setStep(1);
            }}
          >
            Next →
          </button>
        ) : (
          <button className="btn btn-primary" type="submit">Continue in WhatsApp →</button>
        )}
      </div>
      <small className="contact-wizard-privacy">Just two quick choices. Share your name and project details with us in WhatsApp.</small>
    </form>
  );
}
