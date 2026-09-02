const SITE = 'https://bellford-plumbing.com'

const configs = {
  'emergency-plumbing-services': {
    url: `${SITE}/services/emergency-plumbing-services`,
    name: 'Emergency Plumbing Services in Houston, TX',
    serviceType: 'Emergency Plumbing',
    description:
      'Emergency plumbing services in Houston, TX for burst pipes, sewage backups, overflowing toilets, no hot water, major leaks, water heater failures and frozen pipe breaks for residential and commercial properties.',
    catalog: 'Emergency Plumbing Services',
    offers: [
      'Burst Pipe Repair',
      'Sewage Backup Cleanup & Line Clearing',
      'Overflowing Toilet Repair',
      'Emergency Leak Repair',
      'Emergency Water Heater Repair',
      'No Hot Water Emergency Service',
      'Main Water Shut-Off Valve Repair',
      ['Frozen & Burst Pipe Emergency Service', `${SITE}/services/plumbing-frozen-pipes/`],
      ['Emergency Gas Leak Response', `${SITE}/services/gas-leak/`],
      ['After-Hours Commercial Plumbing', `${SITE}/services/commercial-plumbers/`],
    ],
  },

  'houston-drain-cleaning-service': {
    url: `${SITE}/services/houston-drain-cleaning-service`,
    name: 'Drain Cleaning Service in Houston, TX',
    serviceType: 'Drain Cleaning',
    description:
      'Professional drain cleaning in Houston, TX. Clogged kitchen, bathroom and floor drains, slow drains, main sewer line clearing, hydro jetting, drain camera inspection, root removal and recurring backup diagnosis for homes and businesses.',
    catalog: 'Drain Cleaning Services',
    offers: [
      'Clogged Drain Cleaning',
      'Kitchen Sink Drain Cleaning',
      'Bathroom & Shower Drain Cleaning',
      'Toilet Clog Removal',
      ['Main Sewer Line Cleaning', `${SITE}/services/sewer-line-cleaning/`],
      'Hydro Jetting',
      'Drain Camera Inspection',
      'Tree Root Removal from Drain Lines',
      'Floor & Outdoor Drain Cleaning',
      ['Commercial Drain Cleaning', `${SITE}/services/commercial-plumbers/`],
    ],
  },

  'water-heater-installation-and-repair': {
    url: `${SITE}/services/water-heater-installation-and-repair`,
    name: 'Water Heater Installation & Repair in Houston, TX',
    serviceType: 'Water Heater Installation and Repair',
    description:
      'Water heater installation, repair and replacement in Houston, TX. Tank and tankless units, no-hot-water diagnostics, thermostat and heating element repair, pilot and gas valve service, leaking tank replacement, anode rod and flush maintenance, plus emergency repair service.',
    catalog: 'Water Heater Services',
    offers: [
      'Water Heater Installation',
      'Water Heater Repair',
      'Water Heater Replacement',
      'Tankless Water Heater Installation',
      'Tankless Water Heater Descaling & Maintenance',
      'Gas Water Heater Repair',
      'Electric Water Heater Repair',
      'Leaking Water Heater Repair',
      'Water Heater Flush & Anode Rod Replacement',
      'Commercial Water Heater Service',
    ],
  },

  'commercial-plumbers': {
    url: `${SITE}/services/commercial-plumbers/`,
    name: 'Commercial Plumbing Services in Houston, TX',
    serviceType: 'Commercial Plumbing',
    description:
      'Commercial plumbers in Houston serving restaurants, offices, retail and multi-unit properties. Drain and grease line cleaning, commercial water heater repair and replacement, leak repair, backflow service and emergency plumbing.',
    catalog: 'Commercial Plumbing Services',
    offers: [
      'Commercial Drain Cleaning',
      'Grease Line Cleaning & Camera Inspection',
      'Commercial Water Heater Repair & Replacement',
      'Commercial Leak Detection & Repair',
      'Backflow Prevention Service & Repair',
      'Commercial Gas Line Service',
      'Emergency Commercial Plumbing',
    ],
    audience: 'Restaurants, offices, retail and multi-unit properties',
    faq: true,
  },

  'plumbing-companies': {
    url: `${SITE}/services/plumbing-companies/`,
    name: 'Plumbing Company Services in Houston, TX',
    serviceType: 'Plumbing Services',
    description:
      'Licensed Houston plumbing company providing drain cleaning, water heater repair and replacement, leak detection, repiping, gas line service, frozen pipe repair, and emergency plumbing for residential and commercial properties.',
    catalog: 'Plumbing Services',
    offers: [
      'Drain Cleaning',
      'Water Heater Repair & Replacement',
      'Emergency Plumbing',
      'Commercial Plumbing',
      'Gas Leak Detection & Repair',
      'Frozen Pipe Repair',
      'Leak Detection & Repair',
    ],
    faq: true,
  },

  'plumbing-services': {
    url: `${SITE}/services/plumbing-services/`,
    name: 'Plumbing Services in Houston, TX',
    serviceType: 'Plumbing Services',
    description:
      'Full-service residential and commercial plumbing in Houston, TX. Drain and sewer cleaning, water heater repair and replacement, leak detection, repiping, fixture installation, gas line service, frozen pipe repair and emergency plumbing.',
    catalog: 'Plumbing Services',
    offers: [
      ['Drain Cleaning', `${SITE}/services/houston-drain-cleaning-service`],
      ['Water Heater Repair & Replacement', `${SITE}/services/water-heater-installation-and-repair`],
      ['Emergency Plumbing', `${SITE}/services/emergency-plumbing-services`],
      ['Gas Leak Detection & Repair', `${SITE}/services/gas-leak/`],
      ['Frozen Pipe Repair', `${SITE}/services/plumbing-frozen-pipes/`],
      ['Commercial Plumbing', `${SITE}/services/commercial-plumbers/`],
      'Leak Detection & Repair',
      'Repiping',
      'Faucet & Fixture Installation',
    ],
    faq: true,
  },

  'plumbing-frozen-pipes': {
    url: `${SITE}/services/plumbing-frozen-pipes/`,
    name: 'Frozen Pipe Repair in Houston, TX',
    serviceType: 'Frozen Pipe Plumbing',
    description:
      'Frozen and burst pipe plumbing in Houston, TX. Emergency pipe thawing, burst line repair, leak testing after a freeze, hose bibb repair and pipe insulation to prevent future freeze damage.',
    catalog: 'Frozen Pipe Services',
    offers: [
      'Emergency Frozen Pipe Thawing',
      'Burst Pipe Repair',
      'Post-Freeze Leak Detection & Pressure Testing',
      'Pipe Insulation & Freeze Protection',
      'Hose Bibb & Outdoor Faucet Repair',
      'Water Main Shut-Off Valve Repair',
    ],
    faq: true,
  },

  'gas-leak': {
    url: `${SITE}/services/gas-leak/`,
    name: 'Gas Leak Detection & Repair in Houston, TX',
    serviceType: 'Gas Leak Detection and Repair',
    description:
      'Licensed gas leak detection and repair in Houston, TX. Electronic leak detection, gas line pressure testing, buried yard line repair, appliance gas line installation and emergency response after the utility has shut off service.',
    catalog: 'Gas Line Services',
    offers: [
      'Gas Leak Detection',
      'Gas Line Pressure Testing',
      'Gas Line Repair & Replacement',
      'Buried Yard Gas Line Repair',
      'Appliance Gas Line Installation',
      'Gas Water Heater Line Service',
    ],
    faq: true,
  },
}

function offerSchema(value) {
  const [name, url] = Array.isArray(value) ? value : [value, null]

  return {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name,
      ...(url ? { url } : {}),
    },
  }
}

export function buildServiceSchema(service) {
  const config = configs[service.slug]
  if (!config) return null

  const serviceNode = {
    '@type': 'Service',
    '@id': `${config.url}#service`,
    name: config.name,
    serviceType: config.serviceType,
    description: config.description,
    url: config.url,
    provider: { '@id': `${SITE}/#business` },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: config.catalog,
      itemListElement: config.offers.map(offerSchema),
    },
  }

  if (config.audience) {
    serviceNode.audience = {
      '@type': 'BusinessAudience',
      name: config.audience,
    }
  }


  const graph = [
    serviceNode,
    {
      '@type': 'BreadcrumbList',
      '@id': `${config.url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${SITE}/services/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.navTitle || service.title,
          item: config.url,
        },
      ],
    },
  ]

  if (config.faq && service.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${config.url}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
