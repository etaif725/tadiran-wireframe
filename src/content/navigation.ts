import { partnerTypes } from './partners'

export type NavLink = {
  label: string
  href: string
  note?: string
}

export type MegaColumn = {
  title: string
  links: NavLink[]
}

export type MegaMenu = {
  columns: MegaColumn[]
  industries?: {
    title: string
    links: NavLink[]
    viewAll: NavLink
  }
  featured: {
    label: string
    title: string
    body: string
    href: string
    cta: string
    media: string
  }
  viewAll: NavLink
}

export const industryNavLinks: NavLink[] = [
  { label: 'Healthcare', href: '/industries/healthcare', note: 'Clinical coordination across sites' },
  { label: 'Power & Utilities', href: '/industries/power-utilities', note: 'Grid and plant continuity' },
  { label: 'Transportation', href: '/industries/transportation', note: 'Dispatch under time pressure' },
  { label: 'Alarm Systems', href: '/industries/alarm-systems', note: 'Always-on receiving and response' },
  { label: 'Hospitality', href: '/industries/hospitality', note: 'Front desk, rooms, and service desks' },
  { label: 'Education', href: '/industries/education', note: 'Campus safety and administration' },
  { label: 'Assisted Living', href: '/industries/assisted-living', note: 'Resident safety and staff response' },
]

export type NavItem = {
  id: string
  label: string
  href: string
  menu: MegaMenu
}

export const utilityLinks: NavLink[] = [{ label: 'Partner Access', href: '/partners/login' }]

export const primaryNav: NavItem[] = [
  {
    id: 'products',
    label: 'Products',
    href: '/products',
    menu: {
      columns: [
        {
          title: 'Platform',
          links: [
            { label: 'Aeonix Unified Communications', href: '/products/aeonix', note: 'Voice, video, routing, and dispatch' },
            { label: 'OmniCX', href: '/products/omnicx', note: 'Contact-center and collaboration bundle' },
            { label: 'Mobile / Touch', href: '/products/mobile-touch', note: 'Fixed-mobile convergence and BYOD' },
          ],
        },
        {
          title: 'Intelligence',
          links: [
            { label: 'AVA / AI Voice Assistant', href: '/products/ava', note: 'Routing, prompts, and agent support' },
            { label: 'Recording & Quality', href: '/products/recording-quality', note: 'Capture, evaluation, and coaching' },
            { label: 'Analytics & Reporting', href: '/products/analytics', note: 'Operational insight for supervisors' },
          ],
        },
      ],
      featured: {
        label: 'Product family',
        title: 'Aeonix + OmniCX',
        body: 'Communications foundation and contact-center bundle on one platform story.',
        href: '/products',
        cta: 'View products',
        media: 'heritage',
      },
      viewAll: { label: 'View all products', href: '/products' },
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    menu: {
      columns: [
        {
          title: 'Outcome families',
          links: [
            { label: 'Enterprise Communications', href: '/solutions/enterprise-communications', note: 'Voice, video, collaboration, and mobility' },
            { label: 'Omnichannel Customer Experience', href: '/solutions/omnichannel-cx', note: 'One conversation across every channel' },
            { label: 'AI & Analytics', href: '/solutions/ai-analytics', note: 'Governed assistance, quality, and insight' },
            { label: 'Critical Communications', href: '/solutions/critical-communications', note: 'Continuity for demanding environments' },
          ],
        },
        {
          title: 'Supporting layers',
          links: [
            { label: 'Security, Resilience & Operations', href: '/solutions/security-resilience', note: 'Mesh, access, health, and monitoring' },
            { label: 'Integrations & Deployment', href: '/solutions/integrations-deployment', note: 'Cloud, hybrid, or on-premise' },
            { label: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', note: 'Cloud, hybrid, or on-premise' },
            { label: 'OEM Solutions', href: '/solutions/oem', note: 'API, custom branding, and platform extension' },
            { label: 'MSO Solutions', href: '/solutions/mso', note: 'Coordinator Agent motion, regional coverage, and portfolio enablement' },
          ],
        },
      ],
      industries: {
        title: 'Industries',
        links: industryNavLinks,
        viewAll: { label: 'All industries', href: '/industries' },
      },
      featured: {
        label: 'Featured',
        title: 'Unify every customer conversation',
        body: 'OmniCX brings channel visibility, quality, and governed AI into one workspace.',
        href: '/solutions/omnichannel-cx',
        cta: 'Explore OmniCX',
        media: 'enterprise-hero',
      },
      viewAll: { label: 'View all solutions', href: '/solutions' },
    },
  },
  {
    id: 'partners',
    label: 'Partners',
    href: '/partners',
    menu: {
      columns: [
        {
          title: 'Partner types',
          links: partnerTypes.map((type) => ({
            label: type.name,
            href: `/partners#${type.id}`,
            note: type.navNote,
          })),
        },
        {
          title: 'Program',
          links: [
            { label: 'Partner Program', href: '/partners', note: 'How the channel works' },
            { label: 'Become a Partner', href: '/partners/apply', note: 'Five-step qualification' },
            { label: 'Partner Access', href: '/partners/login', note: 'Approved partner portal' },
          ],
        },
      ],
      featured: {
        label: 'Aeonix4Cloud partner program',
        title: 'Increase revenue. Control your customer.',
        body: 'Take a winning UCaaS product to market and keep the customer relationship.',
        href: '/partners/apply',
        cta: 'Start application',
        media: 'partner-stage',
      },
      viewAll: { label: 'Explore the program', href: '/partners' },
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources',
    menu: {
      columns: [
        {
          title: 'Browse',
          links: [
            { label: "What's New", href: '/resources', note: 'Latest reports and updates' },
            { label: 'FAQs', href: '/resources#faq', note: 'Common evaluation questions' },
          ],
        },
        {
          title: 'Articles & cases',
          links: [
            { label: 'Insights', href: '/resources#insights', note: 'Perspectives for operators' },
            { label: 'Case Studies', href: '/resources#cases', note: 'Environment, change, and result' },
            { label: 'Reports & Guides', href: '/resources#reports', note: 'Hybrid communications briefing' },
          ],
        },
      ],
      featured: {
        label: 'Lead report',
        title: 'The enterprise guide to hybrid communications',
        body: 'A practical framework for cloud speed, on-premise control, and continuity.',
        href: '/resources',
        cta: 'Get the report',
        media: 'heritage',
      },
      viewAll: { label: 'Browse resources', href: '/resources' },
    },
  },
  {
    id: 'company',
    label: 'Company',
    href: '/about',
    menu: {
      columns: [
        {
          title: 'Company',
          links: [
            { label: 'About Tadiran', href: '/about', note: 'Heritage, mission, and focus' },
            { label: 'Global Presence', href: '/about#footprint', note: 'Regional teams, shared platform' },
            { label: 'Contact Us', href: '/contact', note: 'Start with the challenge' },
          ],
        },
      ],
      featured: {
        label: 'Company',
        title: 'Global heritage. Proven operations.',
        body: 'AI-ready technology grounded in human communication and operational experience.',
        href: '/about',
        cta: 'About Tadiran',
        media: 'heritage',
      },
      viewAll: { label: 'About Tadiran', href: '/about' },
    },
  },
]

export const footerLegal: NavLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/privacy' },
  { label: 'Accessibility', href: '/accessibility' },
]

export const footerSocials: NavLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tadiran-telecom' },
  { label: 'YouTube', href: 'https://www.youtube.com/@tadirantelecom7868' },
  { label: 'Facebook', href: 'https://www.facebook.com/tadiranteleco' },
  { label: 'X', href: 'https://twitter.com/tadirantelecom' },
]

export const footerColumns = primaryNav.flatMap((item) => {
  const column = {
    label: item.label,
    href: item.href,
    links: item.menu.columns.flatMap((group) => group.links).slice(0, 6),
  }
  if (item.id !== 'solutions') return [column]
  return [
    column,
    {
      label: 'Industries',
      href: '/industries',
      links: industryNavLinks,
    },
  ]
})
