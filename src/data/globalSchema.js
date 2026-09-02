const SITE = 'https://bellford-plumbing.com'

const MAP_URL = 'https://maps.app.goo.gl/W1JLYEpeRJkuyMMn6'

const serviceOffers = [
  ['Plumbing Services', '/services/plumbing-services/'],
  ['Drain Cleaning', '/services/houston-drain-cleaning-service'],
  ['Sewer Line Cleaning', '/services/sewer-line-cleaning/'],
  ['Water Heater Installation & Repair', '/services/water-heater-installation-and-repair'],
  ['Emergency Plumbing', '/services/emergency-plumbing-services'],
  ['Commercial Plumbing', '/services/commercial-plumbers/'],
  ['Gas Leak Detection & Repair', '/services/gas-leak/'],
  ['Frozen Pipe Repair', '/services/plumbing-frozen-pipes/'],
]

const serviceAreas = [
  'Houston',
  'Missouri City',
  'Sugar Land',
  'Richmond',
  'Alief',
  'Bellaire',
  'The Woodlands',
  'Humble',
  'Pearland',
  'Friendswood',
  'League City',
  'Spring',
  'Meyerland',
  'West University',
]

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'Bellford Plumbing & Drain Cleaning Houston',
      alternateName: 'Bellford Plumbing',
      url: `${SITE}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE}/#logo`,
        url: `${SITE}/images/logo.png`,
        contentUrl: `${SITE}/images/logo.png`,
        caption: 'Bellford Plumbing & Drain Cleaning Houston',
      },
      image: {
        '@id': `${SITE}/#logo`,
      },
      telephone: '+1-346-451-2076',
      email: 'bellfordplumbing@gmail.com',
      sameAs: [MAP_URL],
    },

    {
      '@type': ['Plumber', 'LocalBusiness'],
      '@id': `${SITE}/#business`,
      name: 'Bellford Plumbing & Drain Cleaning Houston',
      alternateName: 'Bellford Plumbing',
      description:
        'Licensed plumbers in Houston, TX providing drain cleaning, water heater installation and repair, leak detection, gas line service, frozen pipe repair, and residential and commercial plumbing services.',
      url: `${SITE}/`,
      telephone: '+1-346-451-2076',
      email: 'bellfordplumbing@gmail.com',
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Check, Credit Card, Debit Card',

      parentOrganization: {
        '@id': `${SITE}/#organization`,
      },

      logo: {
        '@id': `${SITE}/#logo`,
      },

      image: {
        '@id': `${SITE}/#logo`,
      },

      address: {
        '@type': 'PostalAddress',
        streetAddress: '5819 Picasso Pl',
        addressLocality: 'Houston',
        addressRegion: 'TX',
        postalCode: '77096',
        addressCountry: 'US',
      },

      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.6749305,
        longitude: -95.4923355,
      },

      hasMap: MAP_URL,

      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '07:00',
          closes: '17:00',
        },
      ],

      areaServed: serviceAreas.map((name) => ({
        '@type': 'City',
        name,
      })),

      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 29.6749305,
          longitude: -95.4923355,
        },
        geoRadius: '40000',
      },

      knowsLanguage: ['en'],

      sameAs: [MAP_URL],

      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Plumbing Services in Houston, TX',
        itemListElement: serviceOffers.map(([name, path]) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name,
            url: `${SITE}${path}`,
          },
        })),
      },
    },

    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'Bellford Plumbing & Drain Cleaning Houston',
      publisher: {
        '@id': `${SITE}/#organization`,
      },
      inLanguage: 'en-US',
    },
  ],
}
