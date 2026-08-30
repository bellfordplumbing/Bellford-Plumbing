export const company = {
  name: 'Bellford Plumbing',
  tagline: 'Texas Professional Plumbers',
  phone: '(346) 451-2076',
  phoneHref: 'tel:3464512076',
  email: 'bellfordplumbing@gmail.com',
  address: '5819 Picasso Pl, Houston, TX 77096',
  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  licensed: 'State Licensed',
}

export const heroServices = [
  { icon: 'emergency', label: 'Emergency Plumber', to: '/services/emergency-plumbing-services' },
  { icon: 'toilet', label: 'Toilet Repair', to: '/services/toilet-repair-and-installation' },
  { icon: 'water', label: 'Water Treatment', to: '/services/water-filtration-and-softening-systems' },
  { icon: 'sewer', label: 'Sewer Lines and Excavation', to: '/services/sewer-line-inspection-and-repair-services' },
  { icon: 'drain', label: 'Drain Cleaning', to: '/services/houston-drain-cleaning-service' },
  { icon: 'leak', label: 'Leak Detection', to: '/services/leak-detection-and-repair-houston' },
  { icon: 'heater', label: 'Water Heater Installation & Repair', to: '/services/water-heater-installation-and-repair' },
  { icon: 'gas', label: 'Gas Line Service', to: '/services/gas-line-installation' },
]

export const services = [
  {
    slug: 'emergency-plumbing-services',
    title: 'Emergency Plumbing Services',
    short: 'Available for all your plumbing emergencies',
    image: '/images/emergency.webp',
    intro:
      'Your plumbing emergencies can strike at any time. Whether it’s a burst pipe, severe leak, or a clogged drain, our team provides prompt and efficient emergency plumbing services for homes and businesses in Houston.',
    body: [
      'At Bellford Plumbing, we are dedicated to delivering prompt and reliable emergency plumbing solutions for both residential and commercial properties in Houston. Our range of services is designed to address urgent plumbing issues swiftly, ensuring minimal disruption and maximum efficiency.',
      'When water is flooding a room, a sewer line is backing up, or you smell gas, you need a licensed plumber on site — not a callback tomorrow. We diagnose the problem, explain the repair, and get your plumbing working again the same day whenever possible.',
    ],
  },
  {
    slug: 'leak-detection-and-repair-houston',
    title: 'Leak Detection & Repair',
    short: 'Accurate leak detection with reliable repairs',
    image: '/images/under-slab.webp',
    intro:
      'Undetected leaks can cause significant damage to your property. Our leak detection technology lets us identify the source of leaks quickly and accurately — including hidden pipe leaks and slab leaks.',
    body: [
      'Undetected leaks can cause structural damage and drive up water bills. We pinpoint the exact location of leaks so repairs stay precise and effective, whether the issue is behind a wall, under a slab, or in a buried line.',
      'After we find the leak, we explain the options, complete the repair, and help you prevent the same problem from coming back.',
    ],
  },
  {
    slug: 'houston-drain-cleaning-service',
    title: 'Drain Cleaning Services',
    short: 'Clear even the toughest blockages',
    image: '/images/drain-cleaning.webp',
    intro:
      'Clogged drains are more than an inconvenience. Our professional drain cleaning services use current equipment and techniques to clear tough blockages and restore flow.',
    body: [
      'Slow sinks, backed-up showers, and blocked toilets are among the most common calls we get in Houston. We clear grease, hair, soap, and debris without guesswork, then inspect the line so you know the clog is actually gone.',
      'For heavy buildup we also offer hydro jetting — a powerful, thorough way to clean pipes from the inside.',
    ],
  },
  {
    slug: 'water-heater-installation-and-repair',
    title: 'Water Heater Installation & Repair',
    short: 'Tank and tankless water heater experts',
    image: '/images/blog-heater.webp',
    intro:
      'Whether you need a new water heater installed or your existing one repaired, our technicians handle tank and tankless units so you have hot water when you need it.',
    body: [
      'A reliable water heater is essential for everyday comfort. We install, repair, and maintain traditional tank heaters and modern tankless systems, with efficient installation and dependable repairs.',
      'If you are choosing between tank and tankless, we walk through household size, energy use, and budget so you pick the right unit for a Houston home.',
    ],
  },
  {
    slug: 'sewer-line-inspection-and-repair-services',
    title: 'Sewer Line Inspection & Repair',
    short: 'Camera inspections and lasting repairs',
    image: '/images/sewer-line.webp',
    intro:
      'Sewer line issues can lead to severe property damage if they are not addressed. We inspect lines thoroughly and repair them so your sewer system operates efficiently.',
    body: [
      'We use camera inspections to see what is happening inside the line before we dig. Repair options include traditional repair and methods that reduce disruption to your yard and driveway.',
      'Tree roots, collapsed pipe, and heavy grease are common in Greater Houston. Catching them early saves floors, foundations, and a much larger bill.',
    ],
  },
  {
    slug: 'sewer-line-cleaning',
    title: 'Sewer Line Cleaning',
    short: 'Keep the main line flowing',
    image: '/images/sewer-cleaning.webp',
    intro:
      'A clogged sewer line can shut down every drain in the house. We clean main lines so wastewater leaves the property the way it should.',
    body: [
      'If multiple fixtures back up at once, the problem is often the main sewer line — not a single drain. We clear the blockage and check for roots, bellies, and debris that could cause another backup.',
    ],
  },
  {
    slug: 'garbage-disposal-repair-replacement',
    title: 'Garbage Disposal Repair & Replacement',
    short: 'Jams, leaks, and full replacements',
    image: '/images/garbage-disposal.webp',
    intro:
      'A jammed, leaking, or silent disposal disrupts the kitchen fast. We diagnose the unit and repair or replace it so you can get back to normal.',
    body: [
      'Common issues include jams, leaks at the sink flange, humming without grinding, and odors. We work on major disposal brands and install a new unit when repair is no longer the better value.',
    ],
  },
  {
    slug: 'gas-line-installation',
    title: 'Gas Line Installation',
    short: 'Licensed gas line work for your home',
    image: '/images/gas-line.webp',
    intro:
      'Need a new gas line for a stove, dryer, water heater, fireplace, or grill? Bellford Plumbing installs gas lines to code for Houston homes and businesses.',
    body: [
      'Gas work is not a DIY project. Improper installation can void warranties and create a serious safety risk. Our licensed plumbers run new lines, tie in appliances, and pressure-test the work before we leave.',
    ],
  },
  {
    slug: 'gas-leak-repair',
    title: 'Gas Leak Repair',
    short: 'Fast response when you smell gas',
    image: '/images/gas-leak.webp',
    intro:
      'If you smell gas, hear hissing near a line, or notice a sulfur odor, leave the area, avoid flames, and call for help. We locate and repair gas leaks for Houston properties.',
    body: [
      'We inspect fittings, appliances, and buried lines, repair the leak, and verify the system holds pressure. Safety comes first — then we restore service so you can cook, heat water, and run appliances again.',
    ],
  },
  {
    slug: 'dishwasher-installation-repair',
    title: 'Dishwasher Installation & Repair',
    short: 'Hookups, leaks, and replacements',
    image: '/images/dishwasher.webp',
    intro:
      'From a new dishwasher hookup to a leak under the sink, we handle the plumbing side of dishwasher installation and repair.',
    body: [
      'We prepare the cabinet, connect supply and drain lines, and check for leaks. If an existing dishwasher is leaking or not draining, we find the plumbing cause and fix it.',
    ],
  },
  {
    slug: 'under-slab-plumbing-service-in-houston',
    title: 'Under Slab Plumbing Service',
    short: 'Slab leak detection and repair',
    image: '/images/under-slab.webp',
    intro:
      'Houston slab foundations hide pipes that can leak for months. We detect under-slab leaks and repair them with a plan that protects your home.',
    body: [
      'Warm spots on the floor, unexplained water bills, and the sound of running water when fixtures are off can all point to a slab leak. We locate the line and discuss repair versus reroute so you are not surprised mid-job.',
    ],
  },
  {
    slug: 'water-pressure-testing-and-adjustment',
    title: 'Water Pressure Testing & Adjustment',
    short: 'Diagnose low or high pressure',
    image: '/images/water-pressure.webp',
    intro:
      'Water pressure that is too low or too high is hard on fixtures and pipes. We test, diagnose, and adjust pressure so the house feels right.',
    body: [
      'Low pressure can come from a failing regulator, mineral buildup, a leak, or a supply issue. High pressure wears out valves and water heaters. We measure PSI, find the cause, and correct it.',
    ],
  },
  {
    slug: 'water-filtration-and-softening-systems',
    title: 'Water Filtration & Softening Systems',
    short: 'Cleaner, softer water for Houston homes',
    image: '/images/water-filtration.webp',
    intro:
      'Houston hard water leaves scale on fixtures and shortens appliance life. We install filtration and softening systems that improve taste, clarity, and plumbing health.',
    body: [
      'From whole-home softeners to filtration that reduces sediment and chlorine taste, we size the system to your household and water conditions, then install and maintain it.',
    ],
  },
  {
    slug: 'faucet-and-sink-repair',
    title: 'Faucet & Sink Repair',
    short: 'Drips, clogs, and fixture upgrades',
    image: '/images/faucet-sink.webp',
    intro:
      'A dripping faucet wastes water and money. We repair and replace faucets and sinks for kitchens, baths, and laundry rooms.',
    body: [
      'We fix leaks, worn cartridges, damaged sinks, and poor drainage. If you are remodeling, we can also install new fixtures with clean shutoffs and no leftover drips.',
    ],
  },
  {
    slug: 'backflow-service-houston',
    title: 'Backflow Prevention Services',
    short: 'Protect your drinking water',
    image: '/images/backflow.webp',
    intro:
      'Backflow can push contaminated water into the potable supply. We install, test, and service backflow prevention devices for Houston properties.',
    body: [
      'Commercial sites and many irrigation systems require tested backflow devices. We keep you in compliance and protect the water you drink.',
    ],
  },
  {
    slug: 'toilet-repair-and-installation',
    title: 'Toilet Repair & Installation',
    short: 'Leaks, clogs, and new toilets',
    image: '/images/toilet.webp',
    intro:
      'Bellford Plumbing handles toilet installation and repair — from new fixtures to leaks, clogs, and flushing problems.',
    body: [
      'Our licensed plumbers install new toilets, replace wax rings and supply lines, and fix running, leaking, or weak-flush units so the bathroom is back in service the same visit whenever we can.',
    ],
  },
  {
    slug: 'hydro-jetting',
    title: 'Hydro Jetting',
    short: 'High-pressure cleaning for stubborn lines',
    image: '/images/hydro-jetting.webp',
    intro:
      'Hydro jetting uses high-pressure water to scour grease, scale, and debris from drain and sewer lines — more thorough than a standard cable in many cases.',
    body: [
      'When snaking is not enough, hydro jetting restores pipe walls and flow. We inspect first so jetting is safe for the line, then clean it and confirm the result.',
    ],
  },
  {
    slug: 'kitchen-plumbing-remodeling',
    title: 'Kitchen Plumbing Remodeling',
    short: 'Rough-in, fixtures, and appliance hookups',
    image: '/images/kitchen.webp',
    intro:
      'A kitchen remodel lives or dies on the plumbing. We handle pipe reroutes, fixture upgrades, and appliance connections so the new kitchen works as good as it looks.',
    body: [
      'From layout changes to filtration, garbage disposals, and dishwasher hookups, we coordinate the plumbing so cabinets, counters, and appliances go in without surprises.',
    ],
  },
  {
    slug: 'bathroom-plumbing-remodeling',
    title: 'Bathroom Plumbing Remodeling',
    short: 'Tubs, showers, toilets, and vanities',
    image: '/images/bathroom.webp',
    intro:
      'Bellford Plumbing supports bathroom remodels with drain upgrades, fixture installs, and pipe reroutes done to code.',
    body: [
      'We plan supply and drain locations, upgrade aging pipe, and install showers, tubs, toilets, and vanities so the finished bath is watertight and comfortable.',
    ],
  },
  {
    slug: 'sump-pump-installation-and-maintenance',
    title: 'Sump Pump Installation & Maintenance',
    short: 'Help keep storm water out of the home',
    image: '/images/emergency-crew.webp',
    intro:
      'A working sump pump is one of the best defenses against basement and low-area flooding. We install, maintain, and repair sump pumps.',
    body: [
      'We size the pump, set the pit and discharge, and check float switches so the system kicks on when it should — before water reaches finished floors.',
    ],
  },
]

export const areas = [
  {
    slug: 'houston',
    title: 'Houston',
    blurb:
      'Bellford Plumbing is based in Houston and serves homes and businesses across the city with licensed repair, installation, and emergency service.',
    pois: [
      { name: 'Texas Medical Center', note: 'Hospitals, clinics, and nearby apartments we serve daily.' },
      { name: 'Museum District', note: 'Homes and galleries around Hermann Park and the museums.' },
      { name: 'The Galleria', note: 'Uptown residences, hotels, and commercial properties.' },
      { name: 'Downtown Houston', note: 'Lofts, offices, and restaurants around the theater district.' },
      { name: 'Buffalo Bayou Park', note: 'Central neighborhoods along the bayou corridor.' },
      { name: 'Minute Maid Park', note: 'EaDo and downtown blocks around the ballpark.' },
    ],
  },
  {
    slug: 'missouri-city',
    title: 'Missouri City',
    blurb:
      'From Fort Bend neighborhoods to everyday leaks, Missouri City homeowners call us for drain cleaning, water heaters, and sewer work they can trust.',
    pois: [
      { name: 'Quail Valley', note: 'Established homes with original plumbing that often needs updates.' },
      { name: 'Sienna', note: 'Master-planned streets we cover for new installs and repairs.' },
      { name: 'Independence Park', note: 'Nearby neighborhoods off Highway 6.' },
      { name: 'Missouri City Civic Center', note: 'Central civic campus and surrounding streets.' },
    ],
  },
  {
    slug: 'sugar-land',
    title: 'Sugar Land',
    blurb:
      'Sugar Land families count on Bellford Plumbing for prompt service, fair pricing, and licensed plumbers who show up ready to finish the job.',
    pois: [
      { name: 'Sugar Land Town Square', note: 'Downtown Sugar Land shops, condos, and restaurants.' },
      { name: 'Smart Financial Centre', note: 'Venues and nearby commercial properties.' },
      { name: 'Constellation Field', note: 'Skeeters stadium area and surrounding homes.' },
      { name: 'Houston Museum of Natural Science at Sugar Land', note: 'University Blvd corridor.' },
    ],
  },
  {
    slug: 'richmond',
    title: 'Richmond',
    blurb:
      'We serve Richmond with residential and commercial plumbing — emergency repairs, leak detection, and new fixture installs included.',
    pois: [
      { name: 'Fort Bend County Courthouse', note: 'Historic downtown Richmond.' },
      { name: 'George Ranch Historical Park', note: 'South Richmond and nearby acreage homes.' },
      { name: 'Brazos Town Center', note: 'Retail and residential streets off US 59.' },
      { name: 'Pecan Grove', note: 'Neighborhoods between Richmond and Sugar Land.' },
    ],
  },
  {
    slug: 'alief',
    title: 'Alief',
    blurb:
      'Alief properties get the same licensed crew and clear communication we bring to the rest of Greater Houston.',
    pois: [
      { name: 'Alief Community Park', note: 'Central park and surrounding residential blocks.' },
      { name: 'Alief ISD campuses', note: 'Schools and nearby family homes we serve often.' },
      { name: 'Westchase District', note: 'Offices and apartments on the east edge of Alief.' },
      { name: 'International District', note: 'Bellaire Blvd shops and mixed-use properties.' },
    ],
  },
  {
    slug: 'bellaire',
    title: 'Bellaire',
    blurb:
      'Bellaire homes and businesses rely on us for water heaters, slab leak help, drain cleaning, and careful indoor repairs.',
    pois: [
      { name: 'Bellaire Town Square', note: 'City hall, pool, and downtown Bellaire.' },
      { name: 'Evelyn’s Park', note: 'South Rice homes around the park.' },
      { name: 'Bellaire High School', note: 'Neighborhoods along Maple and Bissonnet.' },
      { name: 'Loop 610 corridor', note: 'Inside-the-Loop properties we reach quickly.' },
    ],
  },
  {
    slug: 'the-woodlands',
    title: 'The Woodlands',
    blurb:
      'The Woodlands is in our service area for sewer, drains, gas lines, and full plumbing maintenance.',
    pois: [
      { name: 'The Woodlands Waterway', note: 'Town Center hotels, condos, and restaurants.' },
      { name: 'The Woodlands Mall', note: 'Retail and nearby residential villages.' },
      { name: 'Cynthia Woods Mitchell Pavilion', note: 'Event campus and Hughes Landing area.' },
      { name: 'Market Street', note: 'Mixed-use streets in Town Center.' },
    ],
  },
  {
    slug: 'humble',
    title: 'Humble',
    blurb:
      'Humble customers call Bellford Plumbing for fast response, honest quotes, and repairs that hold up.',
    pois: [
      { name: 'Deerbrook Mall', note: 'FM 1960 commercial and nearby neighborhoods.' },
      { name: 'Humble Civic Center', note: 'Downtown Humble and civic campus.' },
      { name: 'Lake Houston', note: 'Lakeside homes and Kingwood-adjacent streets.' },
      { name: 'Bush Intercontinental area', note: 'Properties along the airport corridor.' },
    ],
  },
  {
    slug: 'pearland',
    title: 'Pearland',
    blurb:
      'Pearland residential and commercial customers get licensed plumbing from leak repair to water treatment.',
    pois: [
      { name: 'Pearland Town Center', note: 'Shops, apartments, and Broadway corridor.' },
      { name: 'Independence Park', note: 'South Pearland neighborhoods around the park.' },
      { name: 'Shadow Creek Ranch', note: 'Master-planned homes we service regularly.' },
      { name: 'Pearland Town Hall', note: 'Downtown Pearland civic area.' },
    ],
  },
  {
    slug: 'friendswood',
    title: 'Friendswood',
    blurb:
      'We serve Friendswood with drain, sewer, water heater, and emergency plumbing service.',
    pois: [
      { name: 'Centennial Park', note: 'Central park and surrounding family homes.' },
      { name: 'Stevenson Park', note: 'West Friendswood neighborhoods.' },
      { name: 'Friendswood High School', note: 'Campus area and nearby streets.' },
      { name: 'Downtown Friendswood', note: 'FM 518 shops and older housing stock.' },
    ],
  },
  {
    slug: 'league-city',
    title: 'League City',
    blurb:
      'League City is covered for installations, repairs, and plumbing emergencies.',
    pois: [
      { name: 'League Park', note: 'Historic downtown League City.' },
      { name: 'South Shore Harbour', note: 'Marina, condos, and lakeside homes.' },
      { name: 'Hometown Heroes Park', note: 'Recreation campus and nearby subdivisions.' },
      { name: 'Victory Lakes', note: 'Master-planned streets off I-45.' },
    ],
  },
  {
    slug: 'spring',
    title: 'Spring',
    blurb:
      'Spring homeowners use Bellford Plumbing for clogged drains, sewer lines, and water heater work.',
    pois: [
      { name: 'Old Town Spring', note: 'Historic shops and nearby residential streets.' },
      { name: 'Pundt Park', note: 'Spring Creek Greenway homes.' },
      { name: 'Spring Town Center', note: 'I-45 retail and surrounding neighborhoods.' },
      { name: 'Klein area', note: 'Adjacent communities we cover with Spring calls.' },
    ],
  },
  {
    slug: 'meyerland',
    title: 'Meyerland',
    blurb:
      'Meyerland is close to our Houston base — convenient for same-day help when a pipe or drain fails.',
    pois: [
      { name: 'Meyerland Plaza', note: 'Beechnut retail and surrounding homes.' },
      { name: 'Evelyn Rubenstein JCC', note: 'Community campus and nearby streets.' },
      { name: 'Braeswood Place', note: 'Neighborhoods along Brays Bayou.' },
      { name: 'Loop 610 South', note: 'Inside-Loop properties we reach quickly from our shop.' },
    ],
  },
  {
    slug: 'west-university',
    title: 'West University',
    blurb:
      'West University Place properties get careful, licensed plumbing for repairs and remodels.',
    pois: [
      { name: 'Rice Village', note: 'Shops, restaurants, and adjacent homes.' },
      { name: 'Colonial Park', note: 'West U recreation center and pool area.' },
      { name: 'West University Place City Hall', note: 'University Blvd civic core.' },
      { name: 'Rice University edge', note: 'Streets toward the campus and Medical Center.' },
    ],
  },
]

export const reviews = [
  {
    name: 'Monica Martinez',
    text: 'They were the best in price out of 4 companies I called for a quote, and the job they did on my plumbing was great! I was able to use my plumbing again the same day. I would highly recommend this company.',
  },
  {
    name: 'John G',
    text: 'The Bellford plumber was punctual, very professional, and was great at fixing plumbing issues. Big thumbs up.',
  },
  {
    name: 'Moshe Zanzuri',
    text: 'I had an emergency in my place of business. They came real quick. They explained what needed done and repaired the problem. I will definitely use again, and will recommend to others.',
  },
  {
    name: 'Ido Polak',
    text: 'Best plumber ever, got on time, prices were very fair, job was completed. Very pleased.',
  },
  {
    name: 'Karina Hernandez Mendez',
    text: 'Great service, was very prompt and prices were excellent. Thank you.',
  },
  {
    name: 'Antonio Davis',
    text: 'Fast, reliable service with great quality work. I would definitely recommend.',
  },
  {
    name: 'Nissim Biton',
    text: 'Thank you for coming so fast and doing a good job.',
  },
  {
    name: 'Naiel Qasem',
    text: 'Thanks so much for a quick response and a good job.',
  },
  {
    name: 'Nicole Levy',
    text: 'Very helpful and knowledgeable.',
  },
  {
    name: 'Tae248',
    text: 'Exceptional service.',
  },
]

export const qualities = [
  {
    title: 'Experience',
    text: 'Choose a company with a real track record. Our licensed plumbers handle water heaters, sewers, leaks, gas lines, and everyday fixtures across Houston every week.',
  },
  {
    title: 'Licensing and Insurance',
    text: 'Bellford Plumbing is a state-licensed plumbing service. Hiring licensed, insured plumbers protects your home, your fixtures, and your peace of mind.',
  },
  {
    title: 'Availability',
    text: 'Plumbing problems do not wait for a convenient hour. Call us for prompt emergency response when a pipe bursts, a drain backs up, or a heater fails.',
  },
  {
    title: 'Transparency',
    text: 'We explain the work, the cost, and any extra charges before we start. Clear communication is how we build trust on every job.',
  },
  {
    title: 'Customer Service',
    text: 'Reviews from Houston customers mention speed, fair prices, and plumbers who show up on time. That is the standard we hold.',
  },
]

export const chooseSteps = [
  {
    icon: 'recommend',
    title: 'Get recommendations',
    text: 'Ask neighbors, coworkers, or family who they called last time a pipe failed. Local word of mouth still matters.',
  },
  {
    icon: 'reviews',
    title: 'Read reviews',
    text: 'Our Google reviews highlight punctual crews, honest pricing, and jobs finished the same day. Read them, then call us.',
  },
  {
    icon: 'credentials',
    title: 'Check credentials',
    text: 'Confirm you are hiring a licensed plumber. We are state licensed and insured for residential and commercial work in Greater Houston.',
  },
  {
    icon: 'quotes',
    title: 'Get quotes',
    text: 'Compare scope — not just the lowest number. Customers tell us we were the best price of several quotes without cutting quality.',
  },
]

export const faqs = [
  {
    q: 'What clogged my drain and what can I do about it?',
    a: 'Most drain clogs come from grease, soap, hair, and debris. Rinse with hot water and try a plunger first. Avoid chemical drain cleaners that can damage pipes. If the fixture is still slow or fully blocked, call Bellford Plumbing — we have the tools to clear it without guessing. Prevention helps: do not pour grease down the drain, use a strainer, and skip flushing wipes.',
  },
  {
    q: 'What causes low water pressure?',
    a: 'Low pressure can come from a failing pressure regulator, mineral scale in Houston hard water, a hidden leak, a partially closed valve, or a problem on the city side. We test PSI at the house, inspect fixtures, and fix the actual cause instead of replacing parts at random.',
  },
  {
    q: 'Can you fix work done by another plumber?',
    a: 'Yes. We regularly repair or complete work started by someone else — sewer lines, water heaters, drain issues, and fixture installs. Call us, describe the problem, and we will tell you how we can help.',
  },
  {
    q: 'How much does a plumber charge to replace a toilet?',
    a: 'Toilet replacement often falls in a few hundred dollars, but the exact price depends on the fixture, the flange condition, and whether supply or drain work is needed. Call (346) 451-2076 for a quote on your bathroom.',
  },
  {
    q: 'How often should I replace my water heater?',
    a: 'Tank heaters often last about 8–12 years depending on use and Houston water quality. Signs you may need a replacement include rust, leaking at the tank, rumbling from sediment, less hot water, or a spike in energy use. We can repair when it makes sense, or install tank or tankless when it does not.',
  },
  {
    q: 'What is the difference between tank and tankless water heaters?',
    a: 'A tank stores and reheats a set amount of water. A tankless unit heats water on demand, which can save energy but costs more up front and must be sized correctly. We help Houston homeowners compare both against household size, gas or electric service, and budget.',
  },
  {
    q: 'Do you serve residential and commercial properties?',
    a: 'Yes. Bellford Plumbing works on homes and businesses in Houston and Greater Houston — from a single leaking faucet to an emergency at a place of business.',
  },
  {
    q: 'What are your hours?',
    a: 'Our office hours are Monday through Friday, 7:00 AM – 5:00 PM. Plumbing emergencies do not follow a calendar — call (346) 451-2076 and we will get you on the schedule as quickly as we can.',
  },
]

export const posts = [
  {
    slug: 'tankless-vs-traditional-water-heaters-which-is-right',
    title: 'Tankless vs. Traditional Water Heaters: Which is right for you?',
    date: 'November 7, 2024',
    image: '/images/blog-tankless.webp',
    excerpt:
      'When it comes to choosing the right water heater for your home, there are a lot of factors to consider. The two main options are traditional tank water heaters and modern tankless units.',
    content: [
      'When it comes to choosing the right water heater for your Houston home, two options come up again and again: a traditional tank and a tankless unit. Both heat water. They just do it in different ways, with different costs over the life of the system.',
      'A traditional tank stores 30–80 gallons and keeps that water hot. It is familiar, usually costs less to install, and is simple to service. The tradeoff is standby heat loss and a finite amount of hot water if everyone showers at once.',
      'A tankless heater warms water as it flows. You can get a long stretch of hot water and often lower energy use, but the equipment and install cost more, and the unit has to be sized for your peak demand and your gas or electric service.',
      'Houston hard water matters for both. Scale builds up in tanks and in tankless heat exchangers. Flushing a tank annually and descaling a tankless unit on a schedule will protect your investment.',
      'Bellford Plumbing installs and repairs both types. If you are not sure which fits your household, call (346) 451-2076 and we will walk through usage, venting, and budget before you buy.',
    ],
  },
  {
    slug: 'never-ignore-a-leaky-faucet-and-how-to-fix-it',
    title: 'Why You Should Never Ignore a Leaky Faucet and How to Fix It',
    date: 'November 3, 2024',
    image: '/images/blog-faucet.webp',
    excerpt:
      'A leaky faucet may seem like a minor inconvenience, but a steady drip wastes water, raises bills, and can point to a bigger plumbing problem.',
    content: [
      'A dripping faucet is easy to ignore. It is also one of the fastest ways to waste water and money in a Houston home. Over a month, a “small” drip adds up on the meter and can stain sinks or feed mold around the base of a fixture.',
      'A leak can also be a warning. Worn cartridges, bad seats, and loose supply connections sometimes sit next to bigger issues — high water pressure, failing shutoffs, or a supply line ready to burst.',
      'You can try tightening an aerator or replacing a cheap washer if you are comfortable shutting the water off. If the drip continues, the handle is stiff, or you see water under the sink, call a licensed plumber. We repair or replace faucets cleanly so you are not living with a bucket in the cabinet.',
    ],
  },
  {
    slug: 'how-to-prevent-drain-clogs-tips',
    title: 'How to Prevent Drain Clogs: Tips from Professional Plumbers',
    date: 'October 25, 2024',
    image: '/images/blog-drains.webp',
    excerpt:
      'Clogged drains are one of the most common plumbing problems homeowners face. A few habits will keep sinks, showers, and toilets moving.',
    content: [
      'Slow sinks, backed-up showers, and blocked toilets are everyday Houston plumbing calls. Most of those clogs are preventable.',
      'Do not pour grease or cooking oil down the kitchen sink. Use a strainer to catch food and hair. Never flush wipes, paper towels, or hygiene products — even the ones labeled flushable. Once a month, a kettle of hot water after kitchen use helps move soap film. Skip harsh chemical cleaners that pit pipes and rarely clear a real blockage.',
      'If water is still standing after those steps, the clog is further in the line. Bellford Plumbing will cable or hydro jet as needed and tell you if roots or a broken pipe are the real cause.',
    ],
  },
  {
    slug: 'water-heater-5-common-problems-solutions',
    title: 'Water Heater Not Working? Here Are 5 Common Problems and Solutions',
    date: 'October 20, 2024',
    image: '/images/blog-heater.webp',
    excerpt:
      'Nothing is more frustrating than an ice-cold shower. Here are common water heater problems we see in Houston and what usually fixes them.',
    content: [
      'No hot water: check the breaker or gas supply first. If power and fuel are on, you may have a failed element, thermocouple, or gas control — that is a plumber visit.',
      'Water takes too long to heat: sediment in Houston hard water insulates the tank. Flushing the tank and checking the thermostat often restores performance.',
      'Not enough hot water: a tank that is undersized, a leaking dip tube, or a failing heating element can all cut capacity.',
      'Strange noises: popping and rumbling usually mean sediment on the bottom of the tank. A flush can help; a badly scaled tank may be due for replacement.',
      'Leaks: a drip at a fitting can be a simple repair. Water at the tank itself usually means replacement. Call Bellford Plumbing before a small leak becomes a flooded closet.',
    ],
  },
  {
    slug: 'when-to-call-a-professional-plumber-signs',
    title: 'When to Call a Professional Plumber: Signs Your Houston Home Needs Immediate Attention',
    date: 'August 22, 2024',
    image: '/images/blog-call.webp',
    excerpt:
      'Plumbing problems escalate quickly. Knowing when to call a licensed plumber can save you time, flooring, and a much larger repair.',
    content: [
      'Call right away for burst pipes, sewage backups, the smell of gas, no hot water in winter, or water coming through a ceiling. Those are not wait-and-see problems.',
      'You should also call when a clog returns every week, water bills jump with no change in use, you hear water running when everything is off, or you see warm spots on a slab. Those signs often mean a hidden leak.',
      'DIY is fine for a clogged sink strainer. It is not fine for sewer lines, gas, water heaters, or anything behind a wall. Bellford Plumbing will explain what is going on and repair it so you are not guessing.',
    ],
  },
  {
    slug: 'understanding-houstons-hard-water',
    title: 'Understanding Houston’s Hard Water: How It Affects Your Plumbing',
    date: 'August 21, 2024',
    image: '/images/blog-hard-water.webp',
    excerpt:
      'Houston is known for hard water. It is not a health scare, but it is hard on pipes, heaters, and fixtures. Here is what you can do about it.',
    content: [
      'Houston water is typically high in calcium and magnesium. That mineral load leaves white scale on faucets, spots on glass, and a film on shower walls. Inside the plumbing it shortens water heater life and narrows pipes over time.',
      'You cannot change the city supply, but you can treat water at the house. A properly sized softener reduces scale. Filtration can improve taste and sediment. Pair that with annual heater flushes and you will spend less on emergency replacements.',
      'Bellford Plumbing installs and services water filtration and softening systems sized for Houston homes. Ask us to test hardness and recommend a setup that matches your household.',
    ],
  },
]

export const values = [
  {
    title: 'Quality',
    text: 'From the materials we use to the way we finish a job, quality stays in front of every service call.',
  },
  {
    title: 'Integrity',
    text: 'Honesty and transparency are the foundation. We communicate clearly and price fairly so you can trust us with the house.',
  },
  {
    title: 'Customer focus',
    text: 'We listen, we explain, and we aim to exceed expectations on every visit — residential or commercial.',
  },
  {
    title: 'Innovation',
    text: 'We stay current with leak detection, camera inspections, hydro jetting, and efficient water heaters so repairs last.',
  },
]
