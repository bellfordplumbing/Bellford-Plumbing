import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import ServiceCard from '../components/ServiceCard'
import { PhoneIcon } from '../components/Icons'
import { company, reviews, services } from '../data/site'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow light">Residential and commercial</span>
          <h1>Bellford Plumbing services</h1>
          <p>
            Comprehensive plumbing solutions for homes and businesses in Houston. Each service is
            built to keep your system running efficiently.
          </p>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <a className="btn btn-light" href={company.phoneHref}>
              Call {company.phone}
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Request service
            </Link>
          </div>
        </div>
      </section>

      <div className="trust-band">
        <section className="section">
          <div className="wrap spotlight reverse">
            <div className="spotlight-copy">
              <span className="eyebrow">Full-service plumbing</span>
              <h2 className="intro-title">One crew for the job, not a second trip to the hardware store</h2>
              <p className="pullquote">Installation, maintenance, and replacement — done the first time.</p>
              <ul className="detail-points">
                <li>Licensed residential and commercial work</li>
                <li>Clear pricing before we start</li>
                <li>Same-day help when the schedule allows</li>
              </ul>
              <a className="btn btn-call" href={company.phoneHref}>
                <span className="phone-orb">
                  <PhoneIcon />
                </span>
                Call us {company.phone}
              </a>
            </div>
            <div className="spotlight-photo">
              <img src="/images/cta-vans.jpg" alt="Bellford Plumbing service vans" />
            </div>
          </div>
        </section>
      </div>

      <div className="paper-band">
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Solid solutions for all plumbing needs</span>
              <h2>Trusted plumbing services in Greater Houston</h2>
              <p>
                Choose a service to see how we handle it — from a backed-up drain to a new water
                heater.
              </p>
            </div>
            <div className="cards">
              {services.map((s) => (
                <ServiceCard key={s.slug} service={s} cta="Learn more" />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="stories-band">
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <span className="eyebrow light">What our clients say</span>
              <h2>Recent reviews from clients in your area</h2>
              <p>Excellent — based on 13 Google reviews.</p>
            </div>
            <div className="reviews">
              {reviews.slice(0, 6).map((r) => (
                <article className="review" key={r.name}>
                  <div className="stars">★★★★★</div>
                  <p>{r.text}</p>
                  <h4>{r.name}</h4>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CtaBanner />
    </>
  )
}
