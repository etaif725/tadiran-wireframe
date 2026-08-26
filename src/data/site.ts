export type LinkItem = {
  label: string
  to: string
  note?: string
}

export type MegaColumn = {
  title: string
  links: LinkItem[]
}

export type MegaMenu = {
  columns: MegaColumn[]
  featured: {
    label: string
    title: string
    body: string
    to: string
    cta: string
    media?: string
  }
  viewAll: LinkItem
}

export type NavItem = {
  id: string
  label: string
  to: string
  menu?: MegaMenu
}

export type SearchHit = {
  type: string
  title: string
  body: string
  to: string
}

export type SolutionFamily = {
  slug: string
  eyebrow: string
  title: string
  outcome: string
  chips: string[]
  links: LinkItem[]
}

export type ProductItem = {
  slug: string
  title: string
  family: string
  summary: string
  chips: string[]
}

export type IndustryItem = {
  slug: string
  title: string
  problem: string
  outcome: string
  workflows: string[]
  future?: boolean
}

export const utilityLinks: LinkItem[] = [{ label: 'Partner Login', to: '/partners/login' }]

export const primaryNav: NavItem[] = [
  {
    id: 'products',
    label: 'Products',
    to: '/products',
    menu: {
      columns: [
        {
          title: 'Platform',
          links: [
            { label: 'Aeonix Unified Communications', to: '/products/aeonix', note: 'Voice, video, routing, and dispatch' },
            { label: 'OmniCX', to: '/products/omnicx', note: 'Contact-center and collaboration bundle' },
            { label: 'Mobile / Touch', to: '/products/mobile-touch', note: 'Fixed-mobile convergence and BYOD' },
          ],
        },
        {
          title: 'Intelligence',
          links: [
            { label: 'AVA / AI Voice Assistant', to: '/products/ava', note: 'Routing, prompts, and agent support' },
            { label: 'Recording & Quality', to: '/products/recording-quality', note: 'Capture, evaluation, and coaching' },
            { label: 'Analytics & Reporting', to: '/products/analytics', note: 'Operational insight for supervisors' },
          ],
        },
      ],
      featured: {
        label: 'Product family',
        title: 'Aeonix + OmniCX',
        body: 'Communications foundation and contact-center bundle on one platform story.',
        to: '/products',
        cta: 'View products',
        media: 'heritage',
      },
      viewAll: { label: 'View all products', to: '/products' },
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    to: '/solutions',
    menu: {
      columns: [
        {
          title: 'Outcome families',
          links: [
            { label: 'Enterprise Communications', to: '/solutions/enterprise-communications', note: 'Voice, video, collaboration, and mobility' },
            { label: 'Omnichannel Customer Experience', to: '/solutions/omnichannel-cx', note: 'One conversation across every channel' },
            { label: 'AI & Analytics', to: '/solutions/ai-analytics', note: 'Governed assistance, quality, and insight' },
            { label: 'Critical Communications', to: '/solutions/critical-communications', note: 'Continuity for demanding environments' },
          ],
        },
        {
          title: 'Supporting layers',
          links: [
            { label: 'Security, Resilience & Operations', to: '/solutions/security-resilience', note: 'Mesh, access, health, and monitoring' },
            { label: 'Integrations & Deployment', to: '/solutions/integrations-deployment', note: 'Cloud, hybrid, or on-premise' },
            { label: 'Cloud Infrastracture', to: '/solutions/cloud-infrastructure', note: 'Cloud, hybrid, or on-premise' },
            { label: 'OEM Solutions', to: '/solutions/OEM', note: 'API, custom branding, and platform extension' },
            { label: 'MSO Solutions', to: '/solutions/MSO', note: 'Coordinator Agent motion, regional coverage, and portfolio enablement' },          
          ],
        },
      ],
      featured: {
        label: 'Featured',
        title: 'Unify every customer conversation',
        body: 'OmniCX brings channel visibility, quality, and governed AI into one workspace.',
        to: '/solutions/omnichannel-cx',
        cta: 'Explore OmniCX',
        media: 'enterprise-hero',
      },
      viewAll: { label: 'View all solutions', to: '/solutions' },
    },
  },
  {
    id: 'industries',
    label: 'Industries',
    to: '/industries',
    menu: {
      columns: [
        {
          title: 'Operations',
          links: [
            { label: 'Healthcare', to: '/industries/healthcare', note: 'Clinical coordination across sites' },
            { label: 'Power & Utilities', to: '/industries/power-utilities', note: 'Grid and plant continuity' },
            { label: 'Transportation', to: '/industries/transportation', note: 'Dispatch under time pressure' },
            { label: 'Alarm Systems', to: '/industries/alarm-systems', note: 'Always-on receiving and response' },
          ],
        },
        {
          title: 'Service environments',
          links: [
            { label: 'Hospitality', to: '/industries/hospitality', note: 'Front desk, rooms, and service desks' },
            { label: 'Education', to: '/industries/education', note: 'Campus safety and administration' },
            { label: 'Assisted Living', to: '/industries/assisted-living', note: 'Resident safety and staff response' },
            { label: 'Financial Services', to: '/industries/financial-services', note: 'Future pathway for regulated contact' },
          ],
        },
      ],
      featured: {
        label: 'Industry focus',
        title: 'Communications shaped around the environment',
        body: 'The same platform takes a different form in a hospital, control room, or hotel.',
        to: '/industries',
        cta: 'Explore industries',
        media: 'transportation',
      },
      viewAll: { label: 'View all industries', to: '/industries' },
    },
  },
  {
    id: 'partners',
    label: 'Partners',
    to: '/partners',
    menu: {
      columns: [
        {
          title: 'Partner types',
          links: [
            { label: 'Carrier / ISP', to: '/partners#types', note: 'FMC, OEM, and enterprise packaging' },
            { label: 'Technology Service Distributor', to: '/partners#types', note: 'Coordinator Agent and regional coverage' },
            { label: 'System Integrator', to: '/partners#types', note: 'Vertical workflows and technical fit' },
            { label: 'Software Developer / OEM', to: '/partners#types', note: 'API, branding, and extension' },
          ],
        },
        {
          title: 'Program',
          links: [
            { label: 'Partner Program', to: '/partners', note: 'How the channel works' },
            { label: 'Become a Partner', to: '/partners/apply', note: 'Five-step qualification' },
            { label: 'Partner Login', to: '/partners/login', note: 'Approved partner access' },
          ],
        },
      ],
      featured: {
        label: 'Channel path',
        title: 'Become a partner',
        body: 'Carrier, distributor, integrator, and developer intake in five steps.',
        to: '/partners/apply',
        cta: 'Start application',
        media: 'partners',
      },
      viewAll: { label: 'Explore the program', to: '/partners' },
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    to: '/resources',
    menu: {
      columns: [
        {
          title: 'Browse',
          links: [
            { label: "What's New", to: '/resources', note: 'Latest reports and updates' },
            { label: 'FAQs', to: '/resources#faq', note: 'Common evaluation questions' },
          ],
        },
        {
          title: 'Articles & cases',
          links: [
            { label: 'Insights', to: '/resources#insights', note: 'Perspectives for operators' },
            { label: 'Case Studies', to: '/resources#cases', note: 'Environment, change, and result' },
            { label: 'Reports & Guides', to: '/resources#reports', note: 'Hybrid communications briefing' },
          ],
        },
      ],
      featured: {
        label: 'Lead report',
        title: 'The enterprise guide to hybrid communications',
        body: 'A practical framework for cloud speed, on-premise control, and continuity.',
        to: '/resources',
        cta: 'Get the report',
        media: 'heritage',
      },
      viewAll: { label: 'Browse resources', to: '/resources' },
    },
  },
  {
    id: 'company',
    label: 'Company',
    to: '/about',
    menu: {
      columns: [
        {
          title: 'Company',
          links: [
            { label: 'About Tadiran', to: '/about', note: 'Heritage, mission, and focus' },
            { label: 'Global Presence', to: '/about#footprint', note: 'Regional teams, shared platform' },
            { label: 'Contact Us', to: '/contact', note: 'Start with the challenge' },
          ],
        },
      ],
      featured: {
        label: 'Company',
        title: 'Global heritage. Proven operations.',
        body: 'AI-ready technology grounded in human communication and operational experience.',
        to: '/about',
        cta: 'About Tadiran',
        media: 'heritage',
      },
      viewAll: { label: 'About Tadiran', to: '/about' },
    },
  },
]

export const footerLegal: LinkItem[] = [
  { label: 'Privacy', to: '/contact' },
  { label: 'Terms', to: '/contact' },
  { label: 'Cookie settings', to: '/contact' },
  { label: 'Accessibility', to: '/contact' },
]

export const solutionFamilies: SolutionFamily[] = [
  {
    slug: 'enterprise-communications',
    eyebrow: 'Connect teams',
    title: 'Enterprise Communications',
    outcome: 'Keep sites, field teams, and offices connected across voice, video, messaging, and mobility.',
    chips: ['Voice', 'Video', 'Collaboration', 'Mobile / Touch'],
    links: [
      { label: 'Aeonix UC', to: '/products/aeonix' },
      { label: 'Routing & attendant', to: '/products/aeonix' },
      { label: 'Recording', to: '/products/recording-quality' },
    ],
  },
  {
    slug: 'omnichannel-cx',
    eyebrow: 'Serve customers',
    title: 'Omnichannel Customer Experience',
    outcome: 'Unify voice and digital so agents, supervisors, and customers share one conversation.',
    chips: ['OmniCX', 'Quality', 'WFM', 'Journey visibility'],
    links: [
      { label: 'OmniCX product', to: '/products/omnicx' },
      { label: 'Channels', to: '/products/omnicx' },
      { label: 'CRM integrations', to: '/solutions/integrations-deployment' },
    ],
  },
  {
    slug: 'ai-analytics',
    eyebrow: 'Evolve intelligently',
    title: 'AI & Analytics',
    outcome: 'Apply governed AI to routing, assistance, summaries, quality, and operational insight.',
    chips: ['Voice assistant', 'Transcription', 'Quality analysis', 'Smart routing'],
    links: [
      { label: 'AVA assistant', to: '/products/ava' },
      { label: 'Analytics', to: '/products/analytics' },
      { label: 'Quality', to: '/products/recording-quality' },
    ],
  },
  {
    slug: 'critical-communications',
    eyebrow: 'Protect operations',
    title: 'Critical Communications',
    outcome: 'Support continuity, emergency workflows, and domain integrations in demanding environments.',
    chips: ['Dispatch', 'Redundancy', 'Vertical workflows', 'Air-gapped option'],
    links: [
      { label: 'Healthcare', to: '/industries/healthcare' },
      { label: 'Utilities', to: '/industries/power-utilities' },
      { label: 'Transportation', to: '/industries/transportation' },
    ],
  },
  {
    slug: 'security-resilience',
    eyebrow: 'Stay operational',
    title: 'Security, Resilience & Operations',
    outcome: 'Surface mesh redundancy, secure access, health reporting, and monitoring as a specialist conversation.',
    chips: ['Full mesh', 'Secure access', 'Health reporting', 'Admin dashboard'],
    links: [
      { label: 'Deployment models', to: '/solutions/integrations-deployment' },
      { label: 'Speak with a specialist', to: '/contact?intent=technical' },
    ],
  },
  {
    slug: 'integrations-deployment',
    eyebrow: 'Fit the estate',
    title: 'Integrations & Deployment',
    outcome: 'Choose cloud, hybrid, or on-premise / air-gapped delivery and map CRM, PMS, and dispatch integrations.',
    chips: ['Cloud', 'Hybrid', 'On-premise', 'API / OEM'],
    links: [
      { label: 'Partner OEM path', to: '/partners' },
      { label: 'Discuss requirements', to: '/contact?intent=solution' },
    ],
  },
]

export const products: ProductItem[] = [
  {
    slug: 'aeonix',
    title: 'Aeonix Unified Communications',
    family: 'Enterprise Communications',
    summary: 'Voice, video, collaboration, routing, and attendant/dispatch on a flexible deployment model.',
    chips: ['UC', 'Routing', 'Dispatch', 'Hybrid ready'],
  },
  {
    slug: 'omnicx',
    title: 'OmniCX',
    family: 'Omnichannel CX',
    summary: 'Contact-center and collaboration bundle. Channels, scripts, quality, and journey visibility.',
    chips: ['Omnichannel', 'WFM', 'Quality', 'CRM'],
  },
  {
    slug: 'ava',
    title: 'AVA / AI Voice Assistant',
    family: 'AI & Analytics',
    summary: 'Governed assistant for routing, prompts, and agent support. Roadmap items stay labeled.',
    chips: ['Assistant', 'Prompts', 'Routing', 'Roadmap'],
  },
  {
    slug: 'recording-quality',
    title: 'Recording & Quality',
    family: 'AI & Analytics',
    summary: 'On-premise recording, quality automation, and compression modes for regulated environments.',
    chips: ['Recording', 'QA', 'On-premise', 'PCI note'],
  },
  {
    slug: 'analytics',
    title: 'Analytics & Reporting',
    family: 'AI & Analytics',
    summary: 'Enterprise communication analytics and natural-language insight for operations leaders.',
    chips: ['Reporting', 'NL analytics', 'Supervisors'],
  },
  {
    slug: 'mobile-touch',
    title: 'Mobile / Touch',
    family: 'Enterprise Communications',
    summary: 'Fixed-mobile convergence and BYOD-aware mobility for field and campus operations.',
    chips: ['FMC', 'BYOD', 'Mobility'],
  },
]

export const industries: IndustryItem[] = [
  {
    slug: 'transportation',
    title: 'Transportation',
    problem: 'Dispatch, continuity, and field coordination under time pressure.',
    outcome: 'Keep operations connected when movement and incidents cannot wait.',
    workflows: ['Emergency routing', 'Dispatch', 'Field mobility', 'Recording'],
  },
  {
    slug: 'power-utilities',
    title: 'Power & Utilities',
    problem: 'Grid and plant communications that must stay up during disruption.',
    outcome: 'Protect continuity with redundant, domain-aware communications.',
    workflows: ['Control-room comms', 'Paging', 'Redundancy', 'Secure access'],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    problem: 'Clinical coordination across sites, devices, and compliance constraints.',
    outcome: 'Connect care teams without forcing a single deployment model.',
    workflows: ['Nurse call adjacency', 'Secure recording', 'Campus mobility', 'On-premise option'],
  },
  {
    slug: 'assisted-living',
    title: 'Assisted Living',
    problem: 'Resident safety, staff response, and family communication in one estate.',
    outcome: 'Tie alerts, staff mobility, and recording into one operating picture.',
    workflows: ['Alert routing', 'Staff mobility', 'Recording', 'Family contact'],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    problem: 'Front desk, rooms, and service desks split across PMS and voice stacks.',
    outcome: 'Plug communications into property workflows without tab-switching chaos.',
    workflows: ['PMS integration', 'Front desk', 'Help desk', 'Guest services'],
  },
  {
    slug: 'education',
    title: 'Education',
    problem: 'Campus safety, admin, and student services on mixed infrastructure.',
    outcome: 'Unify campus communications with emergency-ready routing.',
    workflows: ['Campus paging', 'Emergency routing', 'Admin UC', 'Recording'],
  },
  {
    slug: 'alarm-systems',
    title: 'Alarm Systems',
    problem: 'Alarm receiving and response require disciplined, always-on voice paths.',
    outcome: 'Support alarm receiving with resilient routing and recording.',
    workflows: ['Alarm receiving', 'Dispatch', 'Recording', 'Redundancy'],
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    problem: 'Regulated customer contact with recording and quality requirements.',
    outcome: 'A future-focused pathway for regulated customer interactions, recording, quality, and secure deployment.',
    workflows: ['Secure recording', 'Quality', 'Omnichannel', 'Compliance note'],
    future: true,
  },
]

export const partnerTypes = [
  {
    id: 'carrier',
    title: 'Carrier / ISP',
    summary: 'Fixed-mobile convergence, white-label / OEM potential, enterprise package positioning.',
  },
  {
    id: 'distributor',
    title: 'Technology Service Distributor',
    summary: 'Coordinator Agent motion, regional coverage, and portfolio enablement.',
  },
  {
    id: 'integrator',
    title: 'System Integrator',
    summary: 'Vertical workflows, technical collaboration, and customer-environment fit.',
  },
  {
    id: 'developer',
    title: 'Software Developer / OEM',
    summary: 'API, custom branding, and platform extension.',
  },
]

export function getSolution(slug: string) {
  return solutionFamilies.find((item) => item.slug === slug)
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug)
}

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug)
}

export function searchCatalog(query: string): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []

  const hits: SearchHit[] = []

  for (const item of solutionFamilies) {
    if (`${item.title} ${item.outcome} ${item.chips.join(' ')}`.toLowerCase().includes(q)) {
      hits.push({ type: 'Solution', title: item.title, body: item.outcome, to: `/solutions/${item.slug}` })
    }
  }

  for (const item of products) {
    if (`${item.title} ${item.summary} ${item.family}`.toLowerCase().includes(q)) {
      hits.push({ type: 'Product', title: item.title, body: item.summary, to: `/products/${item.slug}` })
    }
  }

  for (const item of industries) {
    if (`${item.title} ${item.problem} ${item.outcome}`.toLowerCase().includes(q)) {
      hits.push({ type: 'Industry', title: item.title, body: item.problem, to: `/industries/${item.slug}` })
    }
  }

  return hits.slice(0, 8)
}
