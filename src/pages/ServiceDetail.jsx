import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import FaqList from '../components/FaqList'
import PageHero from '../components/PageHero'
import PageSeo from '../components/PageSeo'
import ServiceLinks from '../components/ServiceLinks'
import SiteImg from '../components/SiteImg'
import { PhoneIcon, PinIcon } from '../components/Icons'
import { areas, company, services } from '../data/site'
import { buildServiceSchema } from '../data/serviceSchemas'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const schema = useMemo(
    () => (service ? buildServiceSchema(service) : null),
    [service],
  )

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

  const relatedServices = services.filter((s) => s.slug !== slug)

  const featuredServices = (service.featuredServices || [])
    .map((item) => ({
      ...item,
      service: services.find((s) => s.slug === item.slug),
    }))
    .filter((item) => item.service)

  return (
    <>
      {service.meta || schema ? (
        <PageSeo
          title={service.meta?.title}
          description={service.meta?.description}
          canonical={service.meta?.canonical || schema?.['@graph']?.[0]?.url}
          geo={service.meta?.geo}
          schema={schema}
        />
      ) : null}

      <PageHero>
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
      </PageHero>

      {service.alert ? (
        <section className="service-alert-section" aria-labelledby="gas-safety-title">
          <div className="wrap">
            <div className="service-alert">
              <div>
                <span className="service-alert-kicker">Gas safety</span>
                <h2 id="gas-safety-title">{service.alert.title}</h2>
              </div>
              <ol>
                {service.alert.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="service-alert-note">{service.alert.note}</p>
            </div>
          </div>
        </section>
      ) : null}

      <div className="trust-band">
        <section className="section">
          <div className="wrap spotlight">
            <div className="spotlight-photo">
              <SiteImg
                src={service.image}
                alt={service.imageAlt || service.title}
              />
            </div>

            <div className="spotlight-copy">
              <span className="eyebrow">{service.eyebrow || service.short}</span>
              <h2 className="intro-title">How Bellford Plumbing helps</h2>

              <p className="pullquote">{service.body[0]}</p>

              {service.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ul className="detail-points">
                {(service.bullets || [
                  'Houston, Missouri City, Sugar Land, and nearby',
                  'Licensed crews and clear pricing',
                  'Same-day help when we can get there',
                ]).map((point) => (
                  <li key={point}>{point}</li>
                ))}
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

      {featuredServices.length ? (
        <section className="section paper">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Explore our services</span>
              <h2>Plumbing services for Houston homes and businesses</h2>
              <p>
                Choose the service that matches your plumbing problem, or call us if you are not
                sure where to start.
              </p>
            </div>

            <div className="service-feature-grid">
              {featuredServices.map((item) => (
                <Link
                  className="service-feature-card"
                  key={item.slug}
                  to={`/services/${item.slug}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="more">View service</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Keep exploring</span>
            <h2>More services</h2>
            <p>
              Every trade we handle in Greater Houston — tap one to learn how we can help.{' '}
              <Link to="/services">Browse the services hub</Link>.
            </p>
          </div>

          <ServiceLinks items={relatedServices} />
        </div>
      </section>

      <div className="trust-band">
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow light">Greater Houston</span>
              <h2>Service areas</h2>
              <p>
                Bellford Plumbing serves Houston and surrounding communities. Choose your location
                for local plumbing information.
              </p>
            </div>

            <div className="location-links">
              {areas.map((area) => (
                <Link
                  className="location-link"
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                >
                  <span
                    className="location-link-icon"
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      color: 'var(--gold)',
                    }}
                  >
                    <PinIcon />
                  </span>
                  <span>
                    <strong>{area.title}, TX</strong>
                    <span>View local plumbing service</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {service.faqs?.length ? (
        <section className="section paper">
          <div className="wrap service-faq-wrap">
            <div className="section-head">
              <span className="eyebrow">Common questions</span>
              <h2>{service.navTitle || service.title} FAQs</h2>
            </div>

            <FaqList items={service.faqs} />
          </div>
        </section>
      ) : null}

      <CtaBanner
        title={`Need ${service.navTitle || service.title} in Houston?`}
        text="Call Bellford Plumbing or request service online and tell us what is going on."
      />
    </>
  )
}
