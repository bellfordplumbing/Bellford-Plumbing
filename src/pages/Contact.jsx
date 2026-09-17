import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Icons'
import { company } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHero className="contact-hero">
          <span className="eyebrow light">Licensed plumbers in Houston</span>
          <h1>Let’s get your plumbing fixed</h1>
          <p>
            Call, email, or send a request. A Bellford plumber will follow up with next steps —
            same day when the schedule allows.
          </p>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <a className="btn btn-light" href={company.phoneHref}>
              Call {company.phone}
            </a>
            <a className="btn btn-ghost" href={`mailto:${company.email}`}>
              Email us
            </a>
          </div>
      </PageHero>

      <div className="trust-band">
        <section className="section contact-page">
          <div className="wrap">
            <div className="contact-tiles overlap-tiles">
              <a className="contact-tile" href={company.phoneHref}>
                <span className="contact-tile-icon">
                  <PhoneIcon />
                </span>
                <span className="contact-tile-label">Call</span>
                <strong>{company.phone}</strong>
                <span>Mon–Fri 6AM–11PM</span>
              </a>
              <a className="contact-tile" href={`mailto:${company.email}`}>
                <span className="contact-tile-icon">
                  <MailIcon />
                </span>
                <span className="contact-tile-label">Email</span>
                <strong>{company.email}</strong>
                <span>We reply as soon as we can</span>
              </a>
              <div className="contact-tile">
                <span className="contact-tile-icon">
                  <PinIcon />
                </span>
                <span className="contact-tile-label">Shop</span>
                <strong>Houston, TX</strong>
                <span>{company.address}</span>
              </div>
              <div className="contact-tile">
                <span className="contact-tile-icon">
                  <ClockIcon />
                </span>
                <span className="contact-tile-label">Hours</span>
                {company.hours.map((h) => (
                  <span key={h.day}>
                    {h.day}: {h.time}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-spotlight">
              <div className="contact-map">
                <iframe
                  title="Bellford Plumbing location"
                  src="https://maps.google.com/maps?q=5819%20Picasso%20Pl%20Houston%20TX%2077096&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
