const SIZES = {
  '/images/emergency.webp': [960, 403],
  '/images/under-slab.webp': [960, 384],
  '/images/drain-cleaning.webp': [400, 532],
  '/images/blog-heater.webp': [960, 403],
  '/images/sewer-line.webp': [500, 349],
  '/images/sewer-cleaning.webp': [960, 384],
  '/images/garbage-disposal.webp': [960, 384],
  '/images/gas-line.webp': [960, 384],
  '/images/gas-leak.webp': [960, 384],
  '/images/dishwasher.webp': [960, 384],
  '/images/water-pressure.webp': [960, 403],
  '/images/water-filtration.webp': [960, 403],
  '/images/faucet-sink.webp': [960, 403],
  '/images/backflow.webp': [960, 403],
  '/images/toilet.webp': [502, 472],
  '/images/hydro-jetting.webp': [960, 403],
  '/images/kitchen.webp': [960, 403],
  '/images/bathroom.webp': [960, 403],
  '/images/emergency-crew.webp': [524, 339],
  '/images/blog-tankless.webp': [960, 403],
  '/images/blog-faucet.webp': [960, 403],
  '/images/blog-drains.webp': [960, 403],
  '/images/blog-call.webp': [960, 403],
  '/images/blog-hard-water.webp': [960, 403],
  '/images/crew-on-site.webp': [800, 1200],
  '/images/crew-portrait.webp': [750, 845],
  '/images/cta-vans.webp': [1400, 933],
  '/images/logo-white.png': [180, 158],
}

export default function SiteImg({ src, alt = '', className, eager = false, style }) {
  const [width, height] = SIZES[src] || [960, 403]

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
