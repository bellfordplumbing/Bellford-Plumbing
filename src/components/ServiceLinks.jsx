import { Link } from 'react-router-dom'
import ServiceIcon from './Icons'
import { iconBySlug } from './ServiceCard'

export default function ServiceLinks({ items }) {
  return (
    <div className="service-links">
      {items.map((s) => (
        <Link className="service-link" key={s.slug} to={`/services/${s.slug}`}>
          <span className="menu-icon">
            <ServiceIcon name={iconBySlug[s.slug] || 'water'} />
          </span>
          <span>{s.title}</span>
        </Link>
      ))}
    </div>
  )
}
