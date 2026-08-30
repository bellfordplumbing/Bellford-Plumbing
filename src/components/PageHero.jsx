export default function PageHero({ children, className = '' }) {
  return (
    <section className={className ? `page-hero ${className}` : 'page-hero'}>
      <img
        className="page-hero-media"
        src="/images/cta-vans.webp"
        srcSet="/images/cta-vans-sm.webp 768w, /images/cta-vans.webp 1400w"
        sizes="100vw"
        width={1400}
        height={933}
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <div className="wrap">{children}</div>
    </section>
  )
}
