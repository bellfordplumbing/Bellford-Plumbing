import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import ContactForm from '../components/ContactForm'
import FaqList from '../components/FaqList'
import Accordion from '../components/Accordion'
import ServiceCard from '../components/ServiceCard'
import ServiceIcon, { PhoneIcon } from '../components/Icons'
import {
  chooseSteps,
  company,
  faqs,
  heroServices,
  posts,
  qualities,
  reviews,
  services,
} from '../data/site'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-copy">
          <p className="hero-kicker">
            Houston plumber: water heater repair, toilet repair, clogged drains, and more
          </p>
          <h1>Houston plumbing services: reliable and affordable solutions</h1>
          <p className="hero-sub">The plumbing company Houston raves about</p>
          <p className="hero-include">Plumbing services we offer include:</p>
          <div className="hero-services">
            {heroServices.map((s) => (
              <Link className="hero-service" key={s.to} to={s.to}>
                <span className="hero-icon">
                  <ServiceIcon name={s.icon} />
                </span>
                <span>{s.label}</span>
              </Link>
            ))}
          </div>
          <a className="btn btn-call" href={company.phoneHref}>
            <span className="phone-orb">
              <PhoneIcon />
            </span>
            Call us {company.phone}
          </a>
        </div>
      </section>

      <div className="trust-band">
        <section className="section intro-section">
          <div className="wrap intro-grid">
            <div>
              <p className="intro-kicker">Houston plumbing services you can count on</p>
              <h2 className="intro-title">Plumbing service in Houston you can count on</h2>
              <p>
                At Bellford Plumbing, we take pride in providing top-notch plumbing solutions for
                residential and commercial properties in Houston. With years of experience and a team
                of highly skilled professionals, we are dedicated to exceptional service and customer
                satisfaction.
              </p>
              <p>
                Our licensed plumbers undergo rigorous training and are equipped to handle emergencies,
                water heaters, sewer lines, drain cleaning, gas work, and everyday fixture repairs.
                We always strive to complete each job with excellence and make sure customers are
                happy with the results.
              </p>
            </div>
            <div>
              <p className="intro-kicker">Qualities to look for in a plumber in Houston:</p>
              <span className="intro-rule" />
              <Accordion items={qualities} />
            </div>
          </div>
        </section>

        <section className="section choose-section">
          <div className="wrap choose-grid">
            <div className="choose-photo-wrap">
              <img
                className="choose-photo"
                src="/images/crew-on-site.jpg"
                alt="Bellford Plumbing crew working on a Houston job site"
              />
            </div>
            <div className="choose-copy">
              <h2 className="intro-title">How to choose the right plumber in Houston?</h2>
              <div className="choose-list">
                {chooseSteps.map((s) => (
                  <article className="choose-item" key={s.title}>
                    <span className="choose-icon">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaBanner />

      <div className="paper-band">
        <section className="section">
          <div className="wrap split">
            <div>
              <span className="eyebrow">Trusted, experienced & licensed</span>
              <h2>We solve plumbing problems</h2>
              <p>
                Bellford Plumbing is a full-service company. You will not need a second trip to the
                hardware store for most jobs — our trucks carry the parts and tools to do the work
                correctly the first time.
              </p>
              <p>
                We tailor the repair to the property: a new water heater, a hidden leak, a sewer
                backup, or a kitchen remodel. Flexible options, clear explanations, and a crew that
                treats your home like it is theirs.
              </p>
              <a className="btn btn-primary" href={company.phoneHref}>
                Call us {company.phone}
              </a>
            </div>
            <img src="/images/cta-vans.jpg" alt="Bellford Plumbing service vans" />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Solid solutions for all plumbing needs</span>
              <h2>Trusted plumbing services in Greater Houston</h2>
              <p>
                Installation, maintenance, and replacement are all part of the work. Here are the
                services Houston customers call us for most.
              </p>
            </div>
            <div className="cards">
              {services.slice(0, 9).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" to="/services">
                See all services
              </Link>
            </p>
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

        <section className="section stories-articles">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow light">Recent articles</span>
              <h2>Plumbing tips for Houston homes</h2>
            </div>
            <div className="cards">
              {posts.slice(0, 3).map((p) => (
                <Link className="card" key={p.slug} to={`/blog/${p.slug}`}>
                <img src={p.image} alt="" />
                  <div className="body">
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="more">Read article</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="request-section">
        <div className="wrap request-grid">
          <div className="request-copy">
            <span className="eyebrow">Get a licensed plumber</span>
            <h2>Request service in Houston</h2>
            <p>
              Tell us what’s going on and how to reach you. A Bellford plumber will follow up with
              next steps — or call now if it can’t wait.
            </p>
            <ul className="request-points">
              <li>Licensed residential and commercial crews</li>
              <li>Clear pricing before the work starts</li>
              <li>Same-day help when the schedule allows</li>
            </ul>
            <a className="btn btn-call" href={company.phoneHref}>
              <span className="phone-orb">
                <PhoneIcon />
              </span>
              Call us {company.phone}
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section paper">
        <div className="wrap faq-home">
          <div className="section-head">
            <span className="eyebrow">Read our FAQs</span>
            <h2>Houston plumber FAQs</h2>
          </div>
          <FaqList items={faqs.slice(0, 4)} />
          <p style={{ marginTop: 20 }}>
            <Link className="btn btn-primary" to="/faqs">
              More FAQs
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
