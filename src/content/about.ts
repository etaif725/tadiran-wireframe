export const proofStats = [
  { value: '1963', label: 'Founded in Israel' },
  { value: '41', label: 'Countries served' },
  { value: '4', label: 'Regional offices' },
  { value: '2', label: 'R&D centers' },
]

export const family = [
  {
    slug: 'aeonix',
    title: 'Aeonix',
    note: 'Unified communications',
    body: 'Software UC&C for cloud, hybrid, or on-premise. Voice, video, routing, and dispatch on one platform.',
    image: 'sol-enterprise',
  },
  {
    slug: 'omnicx',
    title: 'OmniCX',
    note: 'Contact center',
    body: 'The Aeonix contact-center and collaboration bundle for one customer conversation.',
    image: 'sol-cx',
  },
  {
    slug: 'ava',
    title: 'AVA',
    note: 'AI voice assistant',
    body: 'Routing, prompts, and agent support on the Tadiran platform.',
    image: 'sol-ai',
  },
  {
    slug: 'mobile-touch',
    title: 'Mobile / Touch',
    note: 'Clients and devices',
    body: 'Fixed-mobile convergence, desktop, and the endpoints that sit on Aeonix.',
    image: 'cap-collab',
  },
]

export const journey = [
  {
    year: '1963',
    title: 'Tadiran Telecom is founded in Israel.',
    body: 'Enterprise telephony from Petah Tikva. The company still designs communications as infrastructure, not as a side application.',
  },
  {
    year: '1994',
    title: 'Beijing office opens. Coral goes into the field.',
    body: 'Coral IPx becomes the installed-base PBX for multi-site networks. China operations grow into government, utilities, subway, and energy dispatch.',
  },
  {
    year: '2001',
    title: 'Tadiran Telecom becomes a private company.',
    body: 'The business leaves ECI Telecom as its own UC company, still building on the Coral estate.',
  },
  {
    year: '2008',
    title: 'Afcon Holdings acquires Tadiran Telecom.',
    body: 'Ownership sits with Afcon, part of the Shlomo Group. The company stays Israeli, privately held, and product-led.',
  },
  {
    year: '2013',
    title: 'Aeonix is generally available.',
    body: 'A software-only UC&C platform: Aeonix, Aeonix Contact Center, and Aeonix Dispatch Console on VMware, Hyper-V, or cloud. SIP, CSTA, and a path from Coral.',
  },
  {
    year: 'Now',
    title: 'The platform keeps moving forward.',
    body: 'Tadiran continues to develop the communications layer around the operational demands its customers face now.',
  },
]

export const offices = [
  { city: 'Petah Tikva', country: 'Israel', role: 'Headquarters and R&D', lat: 32.09, lon: 34.89, hub: true },
  { city: 'Atlanta', country: 'United States', role: 'Americas', lat: 33.75, lon: -84.39 },
  { city: 'Beijing', country: 'China', role: 'Greater China and R&D', lat: 39.9, lon: 116.41 },
  { city: 'New Delhi', country: 'India', role: 'India and Asia-Pacific', lat: 28.61, lon: 77.21 },
]

export const floors = [
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Power & utilities', href: '/industries/power-utilities' },
  { label: 'Transportation', href: '/industries/transportation' },
  { label: 'Hospitality', href: '/industries/hospitality' },
  { label: 'Education', href: '/industries/education' },
]

export type Leader = {
  name: string
  role: string
  image: string
  bio: string
  linkedin: string
  appointed?: string
  place?: string
  crop?: string
}

export const ceo: Leader = {
  name: 'Stephane Cohen',
  role: 'Chief Executive Officer',
  appointed: 'November 2025',
  image: '/media/leadership/stephane-cohen.png',
  bio: 'Appointed after Deputy CEO and VP Operations & IT. Twenty years in telecom operations and the systems that keep the network running.',
  linkedin: 'https://www.linkedin.com/in/stephanecohen',
}

export const companyLeaders: Leader[] = [
  {
    name: 'Sharon Shaked',
    role: 'Chief Customer Officer',
    image: '/media/leadership/sharon-shaked.jpg',
    bio: 'Delivery, support, and customer success. Previously led teams in telecom, healthcare, and AdTech.',
    linkedin: 'https://www.linkedin.com/in/sharonshakedai',
    crop: '50% 14%',
  },
  {
    name: 'Hagai Glazner',
    role: 'VP Research & Development',
    image: '/media/leadership/hagai-glazner.jpg',
    bio: 'Real-time software for enterprise communications and contact centers. Put Aeonix into the field in 2013.',
    linkedin: 'https://www.linkedin.com/in/hagai-glazner-01b98823',
    crop: '50% 10%',
  },
  {
    name: 'Oren Kaplan',
    role: 'Chief Marketing & Growth Officer',
    image: '/media/leadership/oren-kaplan.jpg',
    bio: 'Brand, market expansion, and demand for Aeonix, OmniCX, and the rest of the stack.',
    linkedin: 'https://www.linkedin.com/in/oren-kaplan-68044043',
    crop: '50% 12%',
  },
  {
    name: 'Ziv Morad',
    role: 'Chief Financial Officer',
    image: '/media/leadership/ziv-morad.jpg',
    bio: 'Finance for the operating company. Previously CFO at Afcon Electric Transportation, Driivz, and Orad.',
    linkedin: 'https://www.linkedin.com/in/ziv-morad-57502144',
  },
  {
    name: 'Mudy Azulay',
    role: 'VP Product',
    image: '/media/leadership/mudy-azulay.jpg',
    bio: 'Product line and commercial direction. Came from senior roles at Eurocom Communications.',
    linkedin: 'https://www.linkedin.com/in/mudi-azulay-58a98825',
    crop: '50% 20%',
  },
]

export const regionalLeaders: Leader[] = [
  {
    name: 'Bill Miao',
    role: 'General Manager, China',
    place: 'Beijing',
    image: '/media/leadership/bill-miao.jpg',
    bio: 'Beijing since 1994. Has run China since 1998 for government, utility, subway, and energy customers.',
    linkedin: 'https://www.linkedin.com/in/bill-miao-309b5161',
    crop: '50% 12%',
  },
  {
    name: 'Gaurav Dwivedi',
    role: 'Country Director, India',
    place: 'New Delhi',
    image: '/media/leadership/gaurav-dwivedi.png',
    bio: 'India and Asia-Pacific sales from New Delhi. Twenty-four years in telecom, including a decade at Siemens.',
    linkedin: 'https://www.linkedin.com/in/gaurav-dwivedi-63271a11',
  },
  {
    name: 'Lindsay Kintner',
    role: 'SVP, United States',
    place: 'Atlanta',
    image: '/media/leadership/lindsay-kintner.jpeg',
    bio: 'In telecom since 1981. Joined Tadiran in 1994 across sales, product, engineering, and field support.',
    linkedin: 'https://www.linkedin.com/in/lindsay-kintner-14a5244',
    crop: '50% 22%',
  },
]

export const leaders = [ceo, ...companyLeaders, ...regionalLeaders]
