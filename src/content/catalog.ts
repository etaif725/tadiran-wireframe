export type ResourceType = 'Report' | 'Perspective' | 'Guide' | 'Case study' | 'Product update' | 'FAQ'

export type ResourceItem = {
  slug: string
  type: ResourceType
  title: string
  summary: string
  topic: string
  readTime: string
  featured?: boolean
}

export type PageMetadata = {
  title: string
  description: string
}

export const resources: ResourceItem[] = [
  {
    slug: 'enterprise-guide-hybrid-communications',
    type: 'Report',
    title: 'The enterprise guide to hybrid communications',
    summary: 'A practical framework for balancing cloud speed, on-premise control, continuity, and integration.',
    topic: 'Deployment',
    readTime: '12 min',
    featured: true,
  },
  {
    slug: 'practical-ai-customer-conversation',
    type: 'Perspective',
    title: 'Practical AI inside the customer conversation',
    summary: 'Where assistance, summaries, quality, and routing create value without losing human control.',
    topic: 'AI & Analytics',
    readTime: '7 min',
  },
  {
    slug: 'communications-operational-continuity',
    type: 'Guide',
    title: 'Designing communications for operational continuity',
    summary: 'How architecture, monitoring, workflows, and recovery fit together in demanding environments.',
    topic: 'Resilience',
    readTime: '9 min',
  },
  {
    slug: 'mission-critical-operating-environment',
    type: 'Case study',
    title: 'Connecting a mission-critical operating environment',
    summary: 'A provisional case-study structure connecting pressure, workflow, deployment, and outcome.',
    topic: 'Industries',
    readTime: '6 min',
  },
  {
    slug: 'contact-center-quality-visibility',
    type: 'Product update',
    title: 'A clearer view of contact-center quality',
    summary: 'Bring recording, evaluation, coaching, and journey visibility into one supervisor experience.',
    topic: 'OmniCX',
    readTime: '5 min',
  },
  {
    slug: 'cloud-hybrid-on-premise-start',
    type: 'FAQ',
    title: 'Cloud, hybrid, or on-premise: where should you begin?',
    summary: 'Start with operating constraints, integration dependencies, data posture, and the pace of change.',
    topic: 'Deployment',
    readTime: '4 min',
  },
]

export const relatedProductsBySolution: Record<string, string[]> = {
  'enterprise-communications': ['aeonix', 'mobile-touch', 'recording-quality'],
  'omnichannel-cx': ['omnicx', 'recording-quality', 'analytics'],
  'ai-analytics': ['ava', 'analytics', 'recording-quality'],
  'critical-communications': ['aeonix', 'recording-quality', 'mobile-touch'],
  'security-resilience': ['aeonix', 'recording-quality', 'analytics'],
  'integrations-deployment': ['aeonix', 'omnicx', 'analytics'],
}

export const relatedSolutionsByProduct: Record<string, string[]> = {
  aeonix: ['enterprise-communications', 'critical-communications', 'security-resilience'],
  omnicx: ['omnichannel-cx', 'ai-analytics', 'integrations-deployment'],
  ava: ['ai-analytics', 'omnichannel-cx', 'integrations-deployment'],
  'recording-quality': ['ai-analytics', 'critical-communications', 'security-resilience'],
  analytics: ['ai-analytics', 'omnichannel-cx', 'security-resilience'],
  'mobile-touch': ['enterprise-communications', 'critical-communications', 'integrations-deployment'],
}

export const relatedSolutionsByIndustry: Record<string, string[]> = {
  transportation: ['critical-communications', 'enterprise-communications', 'security-resilience'],
  'power-utilities': ['critical-communications', 'security-resilience', 'integrations-deployment'],
  healthcare: ['critical-communications', 'enterprise-communications', 'omnichannel-cx'],
  'assisted-living': ['critical-communications', 'enterprise-communications', 'integrations-deployment'],
  hospitality: ['enterprise-communications', 'omnichannel-cx', 'integrations-deployment'],
  education: ['critical-communications', 'enterprise-communications', 'security-resilience'],
  'alarm-systems': ['critical-communications', 'security-resilience', 'integrations-deployment'],
  'financial-services': ['omnichannel-cx', 'ai-analytics', 'security-resilience'],
}

export const evidenceSlots = [
  { id: 'healthcare-case', caption: 'Healthcare case study — pending approval' },
  { id: 'operator-note', caption: 'Operator testimony — pending approval' },
  { id: 'partner-story', caption: 'Partner story — pending approval' },
]

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: 'Tadiran Telecom | Intelligence in Every Interaction',
    description: 'Enterprise communications, omnichannel customer experience, practical AI, and critical operations across cloud, hybrid, and on-premise environments.',
  },
  about: {
    title: 'About Tadiran Telecom | Global Heritage, Enterprise Focus',
    description: 'Explore Tadiran Telecom’s communications heritage, mission, global presence, and evolution into AI-ready enterprise solutions.',
  },
  solutions: {
    title: 'Enterprise Communications Solutions | Tadiran Telecom',
    description: 'Explore enterprise communications, OmniCX, AI and analytics, critical communications, security, and integration solutions.',
  },
  products: {
    title: 'Communications Products | Tadiran Telecom',
    description: 'Explore Aeonix, OmniCX, mobility, recording, quality, analytics, and AI-assisted communications products.',
  },
  industries: {
    title: 'Industry Communications Solutions | Tadiran Telecom',
    description: 'Communications designed around transportation, utilities, healthcare, hospitality, education, and other demanding environments.',
  },
  resources: {
    title: 'Enterprise Communications Resources | Tadiran Telecom',
    description: 'Research, operational guidance, product thinking, and customer evidence for enterprise communications buyers and partners.',
  },
  partners: {
    title: 'Partner with Tadiran Telecom',
    description: 'Explore partner pathways for carriers, technology service distributors, system integrators, and software developers.',
  },
  contact: {
    title: 'Contact Tadiran Telecom',
    description: 'Start a conversation about enterprise communications, customer experience, critical operations, or partnership opportunities.',
  },
}
