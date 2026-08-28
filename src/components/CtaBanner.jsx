import { Link } from 'react-router-dom'
import { company } from '../data/site'

export default function CtaBanner({
  kicker = 'Busted pipes? Clogged drain? Backed up sewer line?',
  title = 'Do you need plumbing professionals in Houston, TX?',
  text = 'Bellford Plumbing is Houston’s dependable residential and commercial plumbing company. Call now and we will get a licensed plumber on the way.',
}) {
  return (
    <section className="cta-banner">
      <div className="wrap">
        <span className="eyebrow light">{kicker}</span>
        <h2>{title}</h2>
        <p style={{ maxWidth: '58ch', marginBottom: 22 }}>{text}</p>
        <div className="btn-row">
          <a className="btn btn-light" href={company.phoneHref}>
            Call us {company.phone}
          </a>
          <Link className="btn btn-ghost" to="/contact">
            Book service online
          </Link>
        </div>
      </div>
    </section>
  )
}
