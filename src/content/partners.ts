export const partnerTypes = [
  {
    id: 'carrier-isp',
    name: 'Carrier / ISP',
    navNote: 'FMC and enterprise services',
    body: 'Package Aeonix communications and fixed-mobile convergence inside the network and managed services you already provide.',
    fit: 'For operators that own connectivity, billing, or managed services and want an enterprise communications layer.',
    image: 'partner-carrier',
  },
  {
    id: 'technology-service-distributor',
    name: 'Technology Service Distributor',
    navNote: 'Portfolio and regional enablement',
    body: 'Add a communications portfolio your channel can position across regions, with Tadiran product and enablement support behind it.',
    fit: 'For distributors that enable a reseller network and need portfolio depth, regional reach, and repeatable support.',
    image: 'partner-distributor',
  },
  {
    id: 'system-integrator',
    name: 'System Integrator',
    navNote: 'Technical and vertical delivery',
    body: 'Combine Tadiran platforms with your integration skills, vertical workflows, and responsibility for the customer environment.',
    fit: 'For teams that design, deploy, and support communications inside complex customer infrastructure.',
    image: 'partner-integrator',
  },
  {
    id: 'software-developer-oem',
    name: 'Software Developer / OEM',
    navNote: 'APIs and platform extension',
    body: 'Use APIs, custom branding, and platform extension to add communications to the software or service you already sell.',
    fit: 'For product companies that need embedded voice, integration, custom branding, or a faster route to market.',
    image: 'partner-oem',
  },
] as const

export const partnerSteps = [
  {
    label: 'Your profile',
    body: 'Tell us who will own the relationship and how we should reach them.',
    formBody: 'Add the primary contact and choose the partnership model closest to your business.',
  },
  {
    label: 'Your company',
    body: 'Share your organization, location, and public company presence.',
    formBody: 'Tell us which company you represent and where your team is based.',
  },
  {
    label: 'Your market',
    body: 'Describe the customers, territories, and opportunity you serve.',
    formBody: 'Choose your main solution interest and describe the markets you cover.',
  },
  {
    label: 'Capabilities',
    body: 'Outline your deployment, integration, and support strengths.',
    formBody: 'Select every capability your organization can deliver directly.',
  },
  {
    label: 'Review & submit',
    body: 'A Tadiran channel representative reviews fit and contacts you directly.',
    formBody: 'Add your goal, check the application details, and submit for human review.',
  },
] as const

export const partnerNext = [
  {
    label: 'You apply',
    body: 'Send the five-step form. It takes most teams a few minutes and reaches a channel owner, not a generic inbox.',
  },
  {
    label: 'We review fit',
    body: 'A Tadiran representative checks territory, capabilities, and the partner model you selected.',
  },
  {
    label: 'We talk terms',
    body: 'Commercial terms, discounts, and white-label scope stay off this page until that review.',
  },
  {
    label: 'Enablement starts',
    body: 'Approved teams get onboarding, training material, and a regional product contact.',
  },
] as const

export const partnerTypeNames = partnerTypes.map((type) => type.name)

export const partnerInterests = [
  'Unified communications',
  'Contact center and customer experience',
  'Critical communications',
  'AI voice and automation',
  'OEM and embedded communications',
  'Managed and cloud services',
] as const

export const partnerCapabilities = [
  'Sales and market development',
  'Solution design',
  'Deployment and migration',
  'Systems integration',
  'Managed services',
  'Local support and training',
] as const

export const partnerOffer = {
  name: 'Aeonix4Cloud Partner Program',
  dreamOutcome: 'Grow recurring UCaaS revenue while keeping control of your customer.',
  problem:
    'Partners come to Tadiran when they want a UCaaS offer without giving up the customer, and without funding a platform they do not own.',
  solution:
    'Tadiran supplies Aeonix4Cloud. You supply local support, accountability, and knowledge of the customer’s system design.',
  nextStep: 'Apply in five steps. A channel owner reviews fit before any commercial terms.',
} as const

export const partnerOfferChecks = [
  'Recurring UCaaS revenue with Aeonix4Cloud',
  'You keep control of the customer',
  'No big upfront platform build',
  'Local, accountable support you own',
] as const

export const partnerProof = [
  { value: '1963', label: 'Founded in Israel' },
  { value: '41', label: 'Countries served' },
  { value: '4', label: 'Regional offices' },
  { value: '2', label: 'R&D centers' },
] as const

export const partnerStack = [
  {
    title: 'Recurring UCaaS revenue',
    body: 'Take Aeonix4Cloud to market as a software communications service your customers pay for over time, not a one-off hardware swap.',
  },
  {
    title: 'Control of the customer',
    body: 'You keep the account and the service experience. Tadiran’s white-label partner program is built so the reseller stays in front of the customer.',
  },
  {
    title: 'No big platform build',
    body: 'Aeonix4Cloud is a pure software UC&C platform. It removes most onsite hardware and the capital that usually sits in front of a cloud offer.',
  },
  {
    title: 'High-end features at a mid-market price',
    body: 'Sell unified messaging, desktop and mobile voice, contact center, recording, Zoom collaboration, conferencing, attendant console, and emergency response without asking the customer to buy a giant enterprise stack.',
  },
  {
    title: 'Local support you own',
    body: 'Customers get cutting-edge technology with end-to-end support from a partner who knows their business. That partner is you.',
  },
  {
    title: 'One license, many devices',
    body: 'A single user license covers multiple devices, which makes the sale simpler and adoption easier for the teams you already serve.',
  },
  {
    title: 'Enablement behind your team',
    body: 'Onboarding, training material, and regional Tadiran offices in the USA, China, India, and Israel sit behind the people who sell and support the platform.',
  },
  {
    title: 'A model that matches how you sell',
    body: 'Carrier, distributor, system integrator, or software developer / OEM. The application routes to the owner who can judge territory and fit.',
  },
] as const

export const aeonixCloudFeatures = [
  'Unified messaging',
  'Desktop and mobile voice, video, and messaging',
  'Advanced, flexible call routing',
  'Contact center',
  'Zoom collaboration integration',
  'Emergency response control console',
  'Large multi-party audio conferencing',
  'Call recording',
  'Attendant console',
] as const

export const partnerFaqs = [
  {
    question: 'Is partner access the same as applying?',
    answer:
      'No. Approved partners sign in through Partner Login. Prospective partners apply. The public form qualifies the opportunity. Portal credentials come after approval.',
  },
  {
    question: 'Are commissions or discounts listed here?',
    answer:
      'No. Commercial terms stay off the public site until a channel owner reviews territory, capabilities, and fit.',
  },
  {
    question: 'Can we white-label or embed the platform?',
    answer:
      'White-label and OEM opportunities are part of the program conversation. They are evaluated against product scope, branding, territory, and the support model you can deliver.',
  },
  {
    question: 'What can we take to market besides Aeonix4Cloud?',
    answer:
      'The wider portfolio includes Aeonix unified communications, OmniCX, mobility, recording, analytics, and cloud, hybrid, or on-premise delivery when the customer estate needs it.',
  },
  {
    question: 'What happens after we apply?',
    answer:
      'A Tadiran representative reviews every completed application. If the fit is there, you receive the commercial, enablement, and portal path for your model.',
  },
] as const
