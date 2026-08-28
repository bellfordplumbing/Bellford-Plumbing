import { Link, useParams } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import { posts } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Article not found</h1>
          <Link to="/blog">Back to blog</Link>
        </div>
      </section>
    )
  }

  const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow light">{post.date}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </section>

      <div className="trust-band">
        <section className="section">
          <div className="wrap">
            <div className="spotlight-photo" style={{ minHeight: 380 }}>
              <img src={post.image} alt="" style={{ minHeight: 380 }} />
            </div>
          </div>
        </section>
      </div>

      <section className="section paper">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <article className="article-frame">
            <p className="pullquote">{post.excerpt}</p>
            {post.content.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link className="article-back" to="/blog">
              ← All articles
            </Link>
          </article>
        </div>
      </section>
      {morePosts.length ? (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Keep reading</span>
              <h2>More articles</h2>
            </div>
            <div className="cards">
              {morePosts.map((p) => (
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
      ) : null}
      <CtaBanner />
    </>
  )
}
