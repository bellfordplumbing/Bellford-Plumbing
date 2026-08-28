import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import ServiceLinks from '../components/ServiceLinks'
import { PhoneIcon } from '../components/Icons'
import { company, services } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Service not found</h1>
          <Link to="/services">Back to services</Link>
        </div>
      </section>
    )
  }

  const moreServices = services.filter((s) => s.slug !== slug)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow light">Houston plumbing</span>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
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
              <img src={service.image} alt={service.title} />
            </div>
            <div className="spotlight-copy">
              <span className="eyebrow">{service.short}</span>
              <h2 className="intro-title">How Bellford Plumbing helps</h2>
              <p className="pullquote">{service.body[0]}</p>
              {service.body.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="detail-points">
                <li>Houston, Missouri City, Sugar Land, and nearby</li>
                <li>Licensed crews and clear pricing</li>
                <li>Same-day help when we can get there</li>
              </ul>
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
            <span className="eyebrow">Keep exploring</span>
            <h2>More services</h2>
            <p>Every trade we handle in Greater Houston — tap one to learn how we can help.</p>
          </div>
          <ServiceLinks items={moreServices} />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
