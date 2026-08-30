import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SiteImg from '../components/SiteImg'
import { company, posts } from '../data/site'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <>
      <PageHero>
          <span className="eyebrow light">Bellford Plumbing’s blog</span>
          <h1>Guides for Houston homeowners</h1>
          <p>
            Practical plumbing tips for Houston homes — water heaters, drains, leaks, and when to
            call a licensed plumber.
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
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Featured</span>
              <h2>Start here</h2>
            </div>
            <Link className="feature-post" to={`/blog/${featured.slug}`}>
              <SiteImg src={featured.image} alt="" />
              <div className="body">
                <span className="eyebrow">{featured.date}</span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <span className="more">Read article</span>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Recent articles</span>
            <h2>More plumbing tips</h2>
          </div>
          <div className="cards">
            {rest.map((p) => (
              <Link className="card" key={p.slug} to={`/blog/${p.slug}`}>
                <SiteImg src={p.image} alt="" />
                <div className="body">
                  <h3>{p.title}</h3>
                  <p>{p.date}</p>
                  <p>{p.excerpt}</p>
                  <span className="more">Read more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
