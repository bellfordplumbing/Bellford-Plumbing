import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import CtaBanner from '../components/CtaBanner'
import ContactForm from '../components/ContactForm'
import { PhoneIcon } from '../components/Icons'
import { company, faqs } from '../data/site'

export default function Faqs() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow light">Read our FAQs</span>
          <h1>Houston plumber FAQs</h1>
          <p>
            Quick answers about licensing, timing, water heaters, and when to call Bellford Plumbing.
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
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Common questions</span>
              <h2>What Houston homeowners ask</h2>
            </div>
            <FaqList items={faqs} />
          </div>
        </section>
      </div>
      <section className="request-section">
        <div className="wrap request-grid">
          <div className="request-copy">
            <span className="eyebrow">Still have a question?</span>
            <h2>Request service in Houston</h2>
            <p>
              Tell us what’s going on and how to reach you. A Bellford plumber will follow up with
              next steps.
            </p>
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
      <CtaBanner />
    </>
  )
}
