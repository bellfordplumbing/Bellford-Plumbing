import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SiteImg from '../components/SiteImg'
import { PhoneIcon } from '../components/Icons'
import { company, values } from '../data/site'

const reasons = [
  ['Experienced professionals', 'Licensed plumbers committed to high-quality service on every call.'],
  ['Customer satisfaction', 'We prioritize your needs and aim to exceed expectations on the job.'],
  ['Affordable pricing', 'Competitive pricing without cutting corners on materials or workmanship.'],
  ['Advanced technology', 'Leak detection, camera inspections, and hydro jetting when the job needs it.'],
]

export default function About() {
  return (
    <>
      <PageHero className="about-hero">
          <span className="eyebrow light">About Bellford Plumbing</span>
          <h1>Houston plumbers you can count on</h1>
          <p>
            A licensed crew for homes and businesses across Greater Houston — honest pricing, clear
            explanations, and work that holds up.
          </p>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <a className="btn btn-light" href={company.phoneHref}>
              Call {company.phone}
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Request service
            </Link>
          </div>
      </PageHero>

      <div className="trust-band">
        <section className="section about-page">
          <div className="wrap">
            <div className="contact-tiles about-stats overlap-tiles">
              <div className="contact-tile">
                <span className="contact-tile-label">License</span>
                <strong>State licensed</strong>
                <span>Insured crews for residential and commercial work.</span>
              </div>
              <div className="contact-tile">
                <span className="contact-tile-label">Coverage</span>
                <strong>Greater Houston</strong>
                <span>Houston, Fort Bend, and nearby communities.</span>
              </div>
              <div className="contact-tile">
                <span className="contact-tile-label">Reviews</span>
                <strong>Excellent</strong>
                <span>Based on 13 Google reviews from local clients.</span>
              </div>
              <div className="contact-tile">
                <span className="contact-tile-label">Hours</span>
                <strong>Mon–Fri 6–11</strong>
                <span>Call anyway for emergencies — we will get you on the schedule.</span>
              </div>
            </div>

            <div className="spotlight">
              <div className="spotlight-photo">
                <SiteImg src="/images/crew-on-site.webp" alt="Bellford Plumbing technicians on a sewer repair" />
              </div>
              <div className="spotlight-copy">
                <span className="eyebrow">Our story</span>
                <h2 className="intro-title">Top-quality plumbing solutions in Houston</h2>
                <p className="pullquote">We show up on time, explain the job, and leave the plumbing working.</p>
                <p>
                  Based in Houston, Bellford Plumbing has built a reputation for reliability, quality
                  workmanship, and outstanding customer service. We work on residential and commercial
                  properties across Greater Houston.
                </p>
                <p>
                  Each licensed plumber on our team is trained to handle emergencies, water heaters,
                  sewer and drain work, gas lines, and fixture repairs.
                </p>
                <p>
                  <strong>Our mission:</strong> to deliver superior plumbing services with integrity and
                  excellence — and to build lasting relationships by being reliable every visit.
                </p>
                <a className="btn btn-call" href={company.phoneHref}>
                  <span className="phone-orb">
                    <PhoneIcon />
                  </span>
                  Call us {company.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">Our values</span>
            <h2>How we work</h2>
          </div>
          <div className="about-values">
            {values.map((v, i) => (
              <article className="about-value" key={v.title}>
                <span className="about-value-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow">Why choose Bellford Plumbing?</span>
            <h2>Licensed crews. Fair prices. Real reviews.</h2>
          </div>
          <div className="about-reasons">
            {reasons.map(([title, text]) => (
              <article className="reason-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32 }}>
            <Link className="btn btn-primary" to="/contact">
              Talk to us
            </Link>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
