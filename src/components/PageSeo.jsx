import { useEffect } from 'react'

const SITE_NAME = 'Bellford Plumbing & Drain Cleaning Houston'

function findOrCreateMeta(attribute, value) {
  let el = document.head.querySelector(`meta[${attribute}="${value}"]`)
  let created = false

  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, value)
    el.dataset.bellfordSeo = '1'
    document.head.appendChild(el)
    created = true
  }

  return { el, created }
}

function findOrCreateCanonical() {
  let el = document.head.querySelector('link[rel="canonical"]')
  let created = false

  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    el.dataset.bellfordSeo = '1'
    document.head.appendChild(el)
    created = true
  }

  return { el, created }
}

export default function PageSeo({
  title,
  description,
  canonical,
  schema,
  geo,
}) {
  useEffect(() => {
    const originalTitle = document.title
    const restorers = []

    if (title) {
      document.title = title
    }

    const setMeta = (attribute, value, content) => {
      if (!content) return

      const { el, created } = findOrCreateMeta(attribute, value)
      const previous = el.getAttribute('content')

      el.setAttribute('content', content)

      restorers.push(() => {
        if (created) {
          el.remove()
        } else if (previous === null) {
          el.removeAttribute('content')
        } else {
          el.setAttribute('content', previous)
        }
      })
    }

    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large')

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:site_name', SITE_NAME)

    if (geo) {
      setMeta('name', 'geo.position', geo.position)
      setMeta('name', 'geo.placename', geo.placename)
      setMeta('name', 'geo.region', geo.region)
    }

    let canonicalState = null

    if (canonical) {
      const { el, created } = findOrCreateCanonical()
      const previous = el.getAttribute('href')

      el.href = canonical
      canonicalState = { el, created, previous }
    }

    const schemaNodes = []

    const schemas = Array.isArray(schema)
      ? schema
      : schema
        ? [schema]
        : []

    schemas.forEach((item) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.bellfordSchema = '1'
      script.textContent = JSON.stringify(item)
      document.head.appendChild(script)
      schemaNodes.push(script)
    })

    return () => {
      document.title = originalTitle

      restorers.reverse().forEach((restore) => restore())

      if (canonicalState) {
        const { el, created, previous } = canonicalState

        if (created) {
          el.remove()
        } else if (previous === null) {
          el.removeAttribute('href')
        } else {
          el.setAttribute('href', previous)
        }
      }

      schemaNodes.forEach((node) => node.remove())
    }
  }, [title, description, canonical, schema, geo])

  return null
}
