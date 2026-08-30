import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import ServiceLinks from '../components/ServiceLinks'
import SiteImg from '../components/SiteImg'
import { PinIcon, PhoneIcon } from '../components/Icons'
import { areas, company, services } from '../data/site'

export default function AreaDetail() {
  const { slug } = useParams()
  const area = areas.find((a) => a.slug === slug)

  if (!area) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Area not found</h1>
          <Link to="/service-areas">Back to service areas</Link>
        </div>
      </section>
    )
  }

  const otherAreas = areas.filter((a) => a.slug !== slug)

  return (
    <>
      <PageHero>
          <span className="eyebrow light">Bellford Plumbing</span>
          <h1>Plumber in {area.title}, TX</h1>
          <p>{area.blurb}</p>
          <div className="btn-row" style={{ marginTop: 22 }}>
            <a className="btn btn-light" href={company.phoneHref}>
              Call {company.phone}
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Book service
            </Link>
          </div>
      </PageHero>

      <div className="trust-band">
        <section className="section">
          <div className="wrap spotlight">
            <div className="spotlight-photo">
              <SiteImg src="/images/crew-portrait.webp" alt={`Bellford Plumbing serving ${area.title}`} />
            </div>
            <div className="spotlight-copy">
              <span className="eyebrow">Local plumbing</span>
              <h2 className="intro-title">Licensed service in {area.title}</h2>
              <p className="pullquote">
                From a leaking faucet to a sewer backup, we send a plumber who explains the work.
              </p>
              <p>
                Bellford Plumbing provides residential and commercial plumbing in {area.title} and
                the rest of Greater Houston.
              </p>
              <p>
                Based at {company.address}, we are close enough to respond quickly when {area.title}{' '}
                homeowners need help.
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
            <span className="eyebrow">What we do here</span>
            <h2>Services in {area.title}</h2>
            <p>Full-service plumbing for homes and businesses in {area.title}, TX.</p>
          </div>
          <ServiceLinks items={services} />
        </div>
      </section>

      <div className="stories-band">
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow light">Around town</span>
              <h2>Points of interest in {area.title}</h2>
              <p>Neighborhoods and landmarks near where we roll trucks in {area.title}.</p>
            </div>
            <div className="poi-grid">
              {(area.pois || []).map((poi) => (
                <article className="review" key={poi.name}>
                  <span className="poi-icon" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--gold)' }}>
                    <PinIcon />
                  </span>
                  <h3>{poi.name}</h3>
                  <p>{poi.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Greater Houston</span>
            <h2>Other locations we serve</h2>
            <p>Licensed crews across these communities — tap a city for local details.</p>
          </div>
          <div className="poi-grid">
            {otherAreas.map((a) => (
              <Link
                className="city-card"
                key={a.slug}
                to={`/service-areas/${a.slug}`}
                data-letter={a.title.slice(0, 1)}
              >
                <strong>{a.title}</strong>
                <p>Plumber in {a.title}, TX</p>
                <span className="more">View area</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Need a plumber in ${area.title}?`}
        text={`Call Bellford Plumbing for licensed service in ${area.title} and surrounding neighborhoods.`}
      />
    </>
  )
}
