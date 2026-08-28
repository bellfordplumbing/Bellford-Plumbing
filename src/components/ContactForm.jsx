import { useState } from 'react'
import { company } from '../data/site'

const serviceOptions = [
  'Emergency plumbing',
  'Water heater',
  'Drain cleaning',
  'Leak detection',
  'Sewer line',
  'Gas line',
  'Fixture repair',
  'Other',
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setSending(true)
    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      if (!res.ok) throw new Error('Submit failed')
      setSent(true)
    } catch {
      setError('Something went wrong. Call us or try again.')
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="success">
        Thanks — we received your request. A Bellford plumber will follow up soon. You can also call
        us at {company.phone}.
      </div>
    )
  }

  return (
    <form className="form" name="contact" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="form-honeypot" aria-hidden="true">
        <label>
          Don’t fill this out
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-intro">
        <p className="form-kicker">Book a plumber</p>
        <h3>Request a visit</h3>
        <p>Share a few details and we will get back to you as soon as we can.</p>
      </div>
      <div className="form-row">
        <label>
          First name
          <input name="first" required placeholder="Jane" autoComplete="given-name" />
        </label>
        <label>
          Last name
          <input name="last" required placeholder="Doe" autoComplete="family-name" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input name="phone" type="tel" required placeholder="(346) 000-0000" autoComplete="tel" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="you@email.com" autoComplete="email" />
        </label>
      </div>
      <label>
        How can we help?
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          placeholder="Tell us what is going on with your plumbing."
        />
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-primary form-submit" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send request'}
      </button>
      <p className="form-note">
        Prefer to talk? Call{' '}
        <a href={company.phoneHref}>{company.phone}</a>
      </p>
    </form>
  )
}
