import { Link } from 'react-router-dom'
import ServiceIcon from './Icons'
import SiteImg from './SiteImg'

export const iconBySlug = {
  'emergency-plumbing-services': 'emergency',
  'leak-detection-and-repair-houston': 'leak',
  'houston-drain-cleaning-service': 'drain',
  'water-heater-installation-and-repair': 'heater',
  'sewer-line-inspection-and-repair-services': 'inspect',
  'sewer-line-cleaning': 'sewer',
  'garbage-disposal-repair-replacement': 'garbage',
  'gas-line-installation': 'gas',
  'gas-leak-repair': 'gasleak',
  'dishwasher-installation-repair': 'dishwasher',
  'under-slab-plumbing-service-in-houston': 'slab',
  'water-pressure-testing-and-adjustment': 'pressure',
  'water-filtration-and-softening-systems': 'water',
  'faucet-and-sink-repair': 'faucet',
  'backflow-service-houston': 'backflow',
  'toilet-repair-and-installation': 'toilet',
  'hydro-jetting': 'hydro',
  'kitchen-plumbing-remodeling': 'kitchen',
  'bathroom-plumbing-remodeling': 'bathroom',
  'sump-pump-installation-and-maintenance': 'sump',
}

export default function ServiceCard({ service, cta = 'View service' }) {
  const icon = iconBySlug[service.slug] || 'water'

  return (
    <Link className="card service-card" to={`/services/${service.slug}`}>
      <div className="card-media">
        <SiteImg src={service.image} alt={service.title} />
        <span className="photo-wash" aria-hidden="true" />
        <span className="card-icon">
          <ServiceIcon name={icon} />
        </span>
      </div>
      <div className="body">
        <h3>{service.title}</h3>
        {service.short ? <p>{service.short}</p> : null}
        <span className="more">{cta}</span>
      </div>
    </Link>
  )
}
