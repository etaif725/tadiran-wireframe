import type { PublicationStatus } from '@/lib/publication'

export type Capability = { title: string; body: string }

export type Product = {
  kind: 'product'
  slug: string
  title: string
  family: string
  eyebrow: string
  headline: string
  summary: string
  audience: string
  image: string
  capabilities: Capability[]
  deployment: string
  related: string[]
  status: PublicationStatus
}

export type Solution = {
  kind: 'solution'
  slug: string
  title: string
  eyebrow: string
  headline: string
  problem: string
  outcome: string
  image: string
  chips: string[]
  workflows: string[]
  products: string[]
  deployment: string
  faq: { q: string; a: string }[]
  related: string[]
  status: PublicationStatus
}

export type Industry = {
  kind: 'industry'
  slug: string
  title: string
  eyebrow: string
  headline: string
  problem: string
  outcome: string
  image: string
  pressures: string[]
  workflows: string[]
  products: string[]
  solutions: string[]
  status: PublicationStatus
}

export const products: Product[] = [
  {
    kind: 'product',
    slug: 'aeonix',
    title: 'Aeonix Unified Communications',
    family: 'Enterprise Communications',
    eyebrow: 'The communications foundation',
    headline: 'Voice, video, routing, and dispatch on one platform.',
    summary: 'Aeonix is the enterprise communications foundation for sites, field teams, and offices that cannot treat voice as an afterthought.',
    audience: 'IT, operations, and facilities teams responsible for how people reach each other across the estate.',
    image: 'heritage',
    capabilities: [
      { title: 'Unified communications', body: 'Voice, video, collaboration, and attendant workflows on a single platform conversation.' },
      { title: 'Routing and dispatch', body: 'Route calls and operational requests to the people who own the next action.' },
      { title: 'Flexible deployment', body: 'Evaluate cloud, hybrid, or on-premise delivery against the estate you already operate.' },
    ],
    deployment: 'Aeonix is discussed as a cloud, hybrid, or on-premise foundation. The right model depends on sites, continuity, and control requirements.',
    related: ['/products/mobile-touch', '/solutions/enterprise-communications', '/solutions/integrations-deployment'],
    status: 'review',
  },
  {
    kind: 'product',
    slug: 'omnicx',
    title: 'OmniCX',
    family: 'Omnichannel CX',
    eyebrow: 'One customer conversation',
    headline: 'Channels stay many. The conversation should be one.',
    summary: 'OmniCX is the contact-center and collaboration bundle for organizations that need channel visibility, quality, and agent context in one workspace.',
    audience: 'CX leaders, contact-center supervisors, and operations teams who own the customer journey.',
    image: 'enterprise-hero',
    capabilities: [
      { title: 'Omnichannel workspace', body: 'Bring voice and digital interactions into one evaluation of the customer conversation.' },
      { title: 'Quality and workforce', body: 'Connect scripts, coaching, and supervisor review to the work agents actually do.' },
      { title: 'CRM-aware handoffs', body: 'Identify the integrations that carry context through each transfer.' },
    ],
    deployment: 'Discuss hosted, hybrid, and locally controlled options against recording, data, and supervisor-access requirements.',
    related: ['/solutions/omnichannel-cx', '/products/recording-quality', '/products/ava'],
    status: 'review',
  },
  {
    kind: 'product',
    slug: 'ava',
    title: 'AVA / AI Voice Assistant',
    family: 'AI & Analytics',
    eyebrow: 'Governed assistance',
    headline: 'Put intelligence where a person still owns the outcome.',
    summary: 'AVA is a governed assistant for routing, prompts, and agent support. Roadmap items stay labeled as such.',
    audience: 'Operations and CX leaders evaluating assistance without giving up control of the conversation.',
    image: 'enterprise-hero',
    capabilities: [
      { title: 'Intent and routing', body: 'Identify where recognition or prompts can shorten a defined workflow.' },
      { title: 'Agent support', body: 'Surface the next useful action while keeping escalation in human hands.' },
      { title: 'Clear scope', body: 'Review available capability, environment fit, and items still on the roadmap.' },
    ],
    deployment: 'Assistance is introduced against a named workflow, access policy, and review cadence. It is not a generic chatbot overlay.',
    related: ['/solutions/ai-analytics', '/products/analytics', '/products/omnicx'],
    status: 'review',
  },
  {
    kind: 'product',
    slug: 'recording-quality',
    title: 'Recording & Quality',
    family: 'AI & Analytics',
    eyebrow: 'Capture with a purpose',
    headline: 'Record what the operation needs. Review what the team can use.',
    summary: 'Recording and quality workflows for environments that need capture, evaluation, and coaching under local policy.',
    audience: 'Compliance, quality, and operations owners responsible for interaction records.',
    image: 'heritage',
    capabilities: [
      { title: 'On-site capture', body: 'Discuss recording where data residency and access policy require local control.' },
      { title: 'Quality evaluation', body: 'Connect recordings to coaching and review, not only to storage.' },
      { title: 'Policy alignment', body: 'Retention, access, and PCI-adjacent questions belong in the specialist conversation.' },
    ],
    deployment: 'Often evaluated with an on-premise or hybrid stance. Confirm retention, encryption, and reviewer access with your policy owners.',
    related: ['/products/omnicx', '/products/analytics', '/solutions/ai-analytics'],
    status: 'review',
  },
  {
    kind: 'product',
    slug: 'analytics',
    title: 'Analytics & Reporting',
    family: 'AI & Analytics',
    eyebrow: 'Operational insight',
    headline: 'See the operation clearly enough to change the next shift.',
    summary: 'Reporting and natural-language insight for supervisors and operations leaders who need more than a raw export.',
    audience: 'Supervisors, workforce planners, and operations leaders.',
    image: 'utilities',
    capabilities: [
      { title: 'Operational reporting', body: 'Define the measures that help teams make a better next decision.' },
      { title: 'Quality insight', body: 'Connect interaction data to coaching and process review.' },
      { title: 'Leader access', body: 'Discuss who sees what, and how often the picture needs to refresh.' },
    ],
    deployment: 'Analytics follows the recording and platform model you choose. Access and retention stay part of the same conversation.',
    related: ['/solutions/ai-analytics', '/products/recording-quality', '/products/ava'],
    status: 'review',
  },
  {
    kind: 'product',
    slug: 'mobile-touch',
    title: 'Mobile / Touch',
    family: 'Enterprise Communications',
    eyebrow: 'Work leaves the desk',
    headline: 'Keep the enterprise reachable when people are already moving.',
    summary: 'Fixed-mobile convergence and BYOD-aware mobility for field, campus, and distributed operations.',
    audience: 'Facilities, field operations, and IT teams supporting people who are not at a desk.',
    image: 'transportation',
    capabilities: [
      { title: 'Fixed-mobile convergence', body: 'Extend the enterprise number and routing model to mobile devices.' },
      { title: 'BYOD-aware access', body: 'Review device policy, identity, and the boundary between personal and operational use.' },
      { title: 'Field coordination', body: 'Connect mobile users to attendant, dispatch, and escalation paths.' },
    ],
    deployment: 'Mobility is planned against device policy, coverage, and the communications foundation already in place.',
    related: ['/products/aeonix', '/solutions/enterprise-communications', '/industries/healthcare'],
    status: 'review',
  },
]

export const solutions: Solution[] = [
  {
    kind: 'solution',
    slug: 'enterprise-communications',
    title: 'Enterprise Communications',
    eyebrow: 'Connect teams',
    headline: 'Keep the enterprise within reach.',
    problem: 'Sites, field teams, and offices often run on separate voice and collaboration stacks.',
    outcome: 'Keep people connected across voice, video, messaging, and mobility without forcing a single deployment model.',
    image: 'heritage',
    chips: ['Voice', 'Video', 'Collaboration', 'Mobile / Touch'],
    workflows: ['Attendant and reception', 'Call routing', 'Dispatch', 'Campus and field mobility'],
    products: ['/products/aeonix', '/products/mobile-touch', '/products/recording-quality'],
    deployment: 'Cloud speed, hybrid transition, or on-premise control. The starting point is the estate you already have.',
    faq: [
      { q: 'Is this a product catalog or an operating plan?', a: 'It is an operating plan. Aeonix, mobility, and recording are named only after the workflow is clear.' },
      { q: 'Can we keep on-premise control?', a: 'Yes. Deployment is consultative. On-premise and air-gapped options are discussed when the environment requires them.' },
    ],
    related: ['/products/aeonix', '/solutions/integrations-deployment'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'omnichannel-cx',
    title: 'Omnichannel Customer Experience',
    eyebrow: 'Serve customers',
    headline: 'Customers already move between channels. Your teams should not start over.',
    problem: 'Voice and digital interactions split across tools, so agents lose context at every handoff.',
    outcome: 'Unify voice and digital so agents, supervisors, and customers share one conversation.',
    image: 'enterprise-hero',
    chips: ['OmniCX', 'Quality', 'WFM', 'Journey visibility'],
    workflows: ['Inbound voice', 'Digital messaging', 'Supervisor review', 'CRM handoff'],
    products: ['/products/omnicx', '/products/recording-quality', '/products/ava'],
    deployment: 'Choose the model that matches recording, data residency, and supervisor-access requirements.',
    faq: [
      { q: 'Do we need every channel on day one?', a: 'No. Start with the handoffs that lose context today. Expand channels as the workspace proves itself.' },
      { q: 'How does AI enter this conversation?', a: 'As governed assistance inside a named workflow, not as an unsupervised overlay.' },
    ],
    related: ['/products/omnicx', '/solutions/ai-analytics'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'ai-analytics',
    title: 'AI & Analytics',
    eyebrow: 'Evolve intelligently',
    headline: 'Intelligence belongs in the interaction, not on a slide.',
    problem: 'Teams collect conversation data they cannot use, or introduce assistance without a review path.',
    outcome: 'Apply governed AI to routing, assistance, summaries, quality, and operational insight.',
    image: 'enterprise-hero',
    chips: ['Voice assistant', 'Transcription', 'Quality analysis', 'Smart routing'],
    workflows: ['Assisted routing', 'After-call review', 'Supervisor insight', 'Coaching loops'],
    products: ['/products/ava', '/products/analytics', '/products/recording-quality'],
    deployment: 'Capability, roadmap, and environment fit are confirmed before anything is described as available.',
    faq: [
      { q: 'What is available versus planned?', a: 'The product conversation labels roadmap items. Public pages do not treat planned capability as shipped.' },
      { q: 'Who owns the review?', a: 'Your operations and policy owners. Assistance without escalation and audit is not the model.' },
    ],
    related: ['/products/ava', '/solutions/omnichannel-cx'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'critical-communications',
    title: 'Critical Communications',
    eyebrow: 'Protect operations',
    headline: 'When the next conversation cannot wait.',
    problem: 'Dispatch, emergency, and control-room workflows fail when communications are treated as office telephony.',
    outcome: 'Support continuity, emergency workflows, and domain integrations in demanding environments.',
    image: 'utilities',
    chips: ['Dispatch', 'Redundancy', 'Vertical workflows', 'Air-gapped option'],
    workflows: ['Emergency routing', 'Control-room coordination', 'Field escalation', 'Recording for review'],
    products: ['/products/aeonix', '/products/mobile-touch', '/products/recording-quality'],
    deployment: 'Redundancy, local control, and domain integrations are first-class requirements, not afterthoughts.',
    faq: [
      { q: 'Which industries use this path?', a: 'Transportation, power and utilities, healthcare, alarm receiving, and other time-critical operations.' },
      { q: 'Can this run isolated from the public cloud?', a: 'On-premise and air-gapped options are part of the specialist conversation when the environment requires them.' },
    ],
    related: ['/industries/transportation', '/solutions/security-resilience'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'security-resilience',
    title: 'Security, Resilience & Operations',
    eyebrow: 'Stay operational',
    headline: 'Continuity is a design choice, not a slogan.',
    problem: 'Access, health, and recovery are scattered across tools the operations team cannot see together.',
    outcome: 'Surface mesh redundancy, secure access, health reporting, and monitoring as one specialist conversation.',
    image: 'utilities',
    chips: ['Full mesh', 'Secure access', 'Health reporting', 'Admin dashboard'],
    workflows: ['Access review', 'Health monitoring', 'Failover planning', 'Operational reporting'],
    products: ['/products/aeonix', '/solutions/integrations-deployment'],
    deployment: 'Architecture, identity, and monitoring are mapped against the continuity you actually need.',
    faq: [
      { q: 'Do you publish certification logos here?', a: 'No. Claims and marks appear only after public-use approval.' },
    ],
    related: ['/solutions/critical-communications', '/solutions/integrations-deployment'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'integrations-deployment',
    title: 'Integrations & Deployment',
    eyebrow: 'Fit the estate',
    headline: 'Your systems stay in the conversation.',
    problem: 'A communications platform that ignores CRM, PMS, dispatch, or local infrastructure becomes another silo.',
    outcome: 'Choose cloud, hybrid, or on-premise delivery and map the integrations the operation already depends on.',
    image: 'heritage',
    chips: ['Cloud', 'Hybrid', 'On-premise', 'API / OEM'],
    workflows: ['CRM handoff', 'Property and vertical systems', 'API and OEM extension', 'Cutover planning'],
    products: ['/products/aeonix', '/products/omnicx'],
    deployment: 'The chooser is consultative. It is not three price cards.',
    faq: [
      { q: 'Which integrations are confirmed?', a: 'Named logos appear only with permission. The conversation starts with the systems you already run.' },
    ],
    related: ['/solutions/cloud-infrastructure', '/partners'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    eyebrow: 'Room to evolve',
    headline: 'A cloud strategy that still respects the operation.',
    problem: 'Cloud communications programs stall when connectivity, operations, and responsibility are left undefined.',
    outcome: 'Evaluate the infrastructure, service boundaries, and transition path behind a hosted or hybrid model.',
    image: 'heritage',
    chips: ['Connectivity', 'Operations', 'Hybrid path', 'Service boundaries'],
    workflows: ['Site and user mapping', 'Network dependencies', 'Support ownership', 'Hybrid transition'],
    products: ['/products/aeonix', '/solutions/integrations-deployment'],
    deployment: 'Cloud is one delivery model, not the only story Tadiran can tell.',
    faq: [
      { q: 'Is everything moving to the cloud?', a: 'No. Cloud, hybrid, and on-premise remain available according to the environment.' },
    ],
    related: ['/solutions/integrations-deployment', '/products/aeonix'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'oem',
    title: 'OEM Solutions',
    eyebrow: 'Build on the foundation',
    headline: 'Your offering. A communications layer that can travel with it.',
    problem: 'Software and equipment makers need communications capability without becoming a telephony vendor.',
    outcome: 'Discuss APIs, branding, and platform extension for a product or service you already take to market.',
    image: 'partners',
    chips: ['API', 'Custom branding', 'Platform extension'],
    workflows: ['Product integration', 'Brand presentation', 'Deployment packaging', 'Partner enablement'],
    products: ['/partners', '/partners/apply'],
    deployment: 'Scope, commercial terms, and engineering responsibility are confirmed through the partner program.',
    faq: [
      { q: 'Is this a public API catalog?', a: 'No public partner API is published on this site. Integration scope is discussed with the partner team.' },
    ],
    related: ['/partners', '/solutions/mso'],
    status: 'review',
  },
  {
    kind: 'solution',
    slug: 'mso',
    title: 'MSO Solutions',
    eyebrow: 'Route to market',
    headline: 'Bring the portfolio to the market you already cover.',
    problem: 'Regional operators need a communications portfolio they can stand behind with their own customers.',
    outcome: 'Explore packaging, coverage, and enablement for a multi-service or master-agent motion.',
    image: 'partners',
    chips: ['Regional coverage', 'Portfolio enablement', 'Coordinator motion'],
    workflows: ['Territory coverage', 'Offer packaging', 'Enablement', 'Customer introduction'],
    products: ['/partners', '/partners/apply'],
    deployment: 'Program eligibility and commercial terms are confirmed with the partner team. They are not listed as public offers.',
    faq: [
      { q: 'How do we start?', a: 'Use Become a Partner and select the motion that matches how you go to market.' },
    ],
    related: ['/partners', '/solutions/oem'],
    status: 'review',
  },
]

export const industries: Industry[] = [
  {
    kind: 'industry',
    slug: 'healthcare',
    title: 'Healthcare',
    eyebrow: 'Clinical coordination',
    headline: 'Keep the people behind care connected.',
    problem: 'Clinical coordination spans sites, devices, and compliance constraints that a generic UC stack ignores.',
    outcome: 'Connect care teams without forcing a single deployment model.',
    image: 'healthcare',
    pressures: ['Staff moving between units and campuses', 'Recording and access policy', 'Nurse-call and mobility adjacency', 'On-premise options for sensitive estates'],
    workflows: ['Secure recording', 'Campus mobility', 'On-premise option', 'Care-team coordination'],
    products: ['/products/aeonix', '/products/mobile-touch', '/products/recording-quality'],
    solutions: ['/solutions/critical-communications', '/solutions/enterprise-communications'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'power-utilities',
    title: 'Power & Utilities',
    eyebrow: 'Essential services',
    headline: 'Communications that stay up when the grid is under pressure.',
    problem: 'Control rooms and field crews cannot lose voice paths during disruption.',
    outcome: 'Protect continuity with redundant, domain-aware communications.',
    image: 'utilities',
    pressures: ['Control-room coordination', 'Field crew mobility', 'Redundancy and recovery', 'Secure access'],
    workflows: ['Control-room comms', 'Paging', 'Redundancy', 'Secure access'],
    products: ['/products/aeonix', '/products/mobile-touch'],
    solutions: ['/solutions/critical-communications', '/solutions/security-resilience'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'transportation',
    title: 'Transportation',
    eyebrow: 'Operations in motion',
    headline: 'Dispatch cannot wait for a better signal.',
    problem: 'Movement and incidents compress the time between the first alert and the next instruction.',
    outcome: 'Keep operations connected when movement and incidents cannot wait.',
    image: 'transportation',
    pressures: ['Time-critical dispatch', 'Field mobility', 'Incident recording', 'Multi-site coordination'],
    workflows: ['Emergency routing', 'Dispatch', 'Field mobility', 'Recording'],
    products: ['/products/aeonix', '/products/mobile-touch', '/products/recording-quality'],
    solutions: ['/solutions/critical-communications'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'hospitality',
    title: 'Hospitality',
    eyebrow: 'Service behind the desk',
    headline: 'Guest service starts in the systems staff already use.',
    problem: 'Front desk, rooms, and service desks split across PMS and voice stacks.',
    outcome: 'Plug communications into property workflows without tab-switching chaos.',
    image: 'hospitality',
    pressures: ['PMS adjacency', 'Front-desk load', 'Housekeeping and help desk', 'Multi-property estates'],
    workflows: ['PMS integration', 'Front desk', 'Help desk', 'Guest services'],
    products: ['/products/aeonix', '/products/omnicx'],
    solutions: ['/solutions/enterprise-communications', '/solutions/integrations-deployment'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'education',
    title: 'Education',
    eyebrow: 'Campus operations',
    headline: 'Connect the campus without treating it like an office park.',
    problem: 'Safety, administration, and student services sit on mixed infrastructure.',
    outcome: 'Unify campus communications with emergency-ready routing.',
    image: 'education',
    pressures: ['Campus paging', 'Emergency routing', 'Admin UC', 'Mixed legacy estates'],
    workflows: ['Campus paging', 'Emergency routing', 'Admin UC', 'Recording'],
    products: ['/products/aeonix', '/products/mobile-touch'],
    solutions: ['/solutions/enterprise-communications', '/solutions/critical-communications'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'assisted-living',
    title: 'Assisted Living',
    eyebrow: 'Resident services',
    headline: 'Keep staff close to the people who need them.',
    problem: 'Resident safety, staff response, and family contact compete across disconnected tools.',
    outcome: 'Tie alerts, staff mobility, and recording into one operating picture.',
    image: 'healthcare',
    pressures: ['Alert routing', 'Staff on the move', 'Family contact', 'Recording for review'],
    workflows: ['Alert routing', 'Staff mobility', 'Recording', 'Family contact'],
    products: ['/products/mobile-touch', '/products/aeonix'],
    solutions: ['/solutions/critical-communications'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'alarm-systems',
    title: 'Alarm Systems',
    eyebrow: 'Always-on receiving',
    headline: 'From the first alert to the next action.',
    problem: 'Alarm receiving requires disciplined, always-on voice paths.',
    outcome: 'Support alarm receiving with resilient routing and recording.',
    image: 'utilities',
    pressures: ['Always-on receiving', 'Operator coordination', 'Dispatch', 'Redundancy'],
    workflows: ['Alarm receiving', 'Dispatch', 'Recording', 'Redundancy'],
    products: ['/products/aeonix', '/products/recording-quality'],
    solutions: ['/solutions/critical-communications'],
    status: 'review',
  },
  {
    kind: 'industry',
    slug: 'financial-services',
    title: 'Financial Services',
    eyebrow: 'Pathway under evaluation',
    headline: 'A conversation about regulated customer contact.',
    problem: 'Regulated customer contact needs recording, quality, and a deployment model the policy owners can defend.',
    outcome: 'A future-focused pathway for regulated interactions, recording, quality, and secure deployment.',
    image: 'heritage',
    pressures: ['Secure recording', 'Quality review', 'Omnichannel contact', 'Deployment policy'],
    workflows: ['Secure recording', 'Quality', 'Omnichannel', 'Compliance review'],
    products: ['/products/omnicx', '/products/recording-quality'],
    solutions: ['/solutions/omnichannel-cx', '/solutions/ai-analytics'],
    status: 'future',
  },
]

export const collections = { products, solutions, industries }

export const collectionIntro = {
  products: {
    label: 'Products',
    headline: 'The technology behind a more connected enterprise.',
    summary: 'Aeonix, OmniCX, mobility, recording, analytics, and governed assistance. Start with the product that matches the work.',
  },
  solutions: {
    label: 'Solutions',
    headline: 'Start with the challenge. Then name the platform.',
    summary: 'Outcome families for teams, customers, intelligence, and critical operations, plus the layers that keep them running.',
  },
  industries: {
    label: 'Industries',
    headline: 'The same platform takes a different form here.',
    summary: 'Hospitals, control rooms, campuses, hotels, and receiving centers. Communications shaped around the environment.',
  },
} as const

export type Collection = keyof typeof collectionIntro

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug)
}

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug)
}

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug)
}

export function findByHref(href: string) {
  const [, area, slug] = href.split('/')
  if (area === 'products') return getProduct(slug)
  if (area === 'solutions') return getSolution(slug)
  if (area === 'industries') return getIndustry(slug)
  return undefined
}
