import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { PhoneIcon } from '../components/Icons'
import { areas, company } from '../data/site'

export default function Areas() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow light">Service areas</span>
          <h1>Plumbing services in Houston & Greater Houston</h1>
          <p>
            Welcome to Bellford Plumbing, your partner for plumbing across Houston, Missouri City,
            Sugar Land, Richmond, Bellaire, Alief, The Woodlands, Humble, and nearby cities.
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
          <div className="wrap spotlight">
            <div className="spotlight-photo">
              <img src="/images/crew-portrait.jpg" alt="Bellford Plumbing crew" />
            </div>
            <div className="spotlight-copy">
              <span className="eyebrow">Communities we cover</span>
              <h2 className="intro-title">Where we roll trucks</h2>
              <p className="pullquote">Licensed service from routine maintenance to emergency repairs.</p>
              <p>
                Our certified plumbers keep systems running across Greater Houston. Pick a city for
                local details, landmarks we serve near, and the full list of trades.
              </p>
              <a className="btn btn-call" href={company.phoneHref}>
                <span className="phone-orb">
                  <PhoneIcon />
                </span>
                Call us {company.phone}
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Greater Houston</span>
            <h2>Explore a city we serve</h2>
          </div>
          <div className="poi-grid">
            {areas.map((a) => (
              <Link
                className="city-card"
                key={a.slug}
                to={`/service-areas/${a.slug}`}
                data-letter={a.title.slice(0, 1)}
              >
                <strong>{a.title}</strong>
                <p>{a.blurb}</p>
                <span className="more">View area</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
