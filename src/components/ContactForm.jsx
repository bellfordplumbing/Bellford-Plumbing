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

  function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const first = data.get('first')
    const last = data.get('last')
    const phone = data.get('phone')
    const email = data.get('email')
    const service = data.get('service')
    const message = data.get('message')
    const subject = encodeURIComponent(`Service request from ${first} ${last}`)
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="success">
        Thanks — your email app should open with the request. You can also call us at {company.phone}.
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
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
      <button className="btn btn-primary form-submit" type="submit">
        Send request
      </button>
      <p className="form-note">
        Prefer to talk? Call{' '}
        <a href={company.phoneHref}>{company.phone}</a>
      </p>
    </form>
  )
}
