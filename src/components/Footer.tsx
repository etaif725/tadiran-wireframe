import { Link } from 'react-router-dom'
import { footerLegal } from '../data/site'
import { Logo } from './Logo'

const columns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Enterprise Communications', to: '/solutions/enterprise-communications' },
      { label: 'Omnichannel CX', to: '/solutions/omnichannel-cx' },
      { label: 'AI & Analytics', to: '/solutions/ai-analytics' },
      { label: 'Critical Communications', to: '/solutions/critical-communications' },
      { label: 'All solutions', to: '/solutions' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Aeonix UC', to: '/products/aeonix' },
      { label: 'OmniCX', to: '/products/omnicx' },
      { label: 'AVA Assistant', to: '/products/ava' },
      { label: 'Recording & Quality', to: '/products/recording-quality' },
      { label: 'All products', to: '/products' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', to: '/industries/healthcare' },
      { label: 'Power & Utilities', to: '/industries/power-utilities' },
      { label: 'Transportation', to: '/industries/transportation' },
      { label: 'Hospitality', to: '/industries/hospitality' },
      { label: 'All industries', to: '/industries' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { label: 'Partner program', to: '/partners' },
      { label: 'Become a Partner', to: '/partners/apply' },
      { label: 'Partner Login', to: '/partners/login' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Tadiran', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Global footprint', to: '/about#footprint' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resource library', to: '/resources' },
      { label: 'What’s New', to: '/resources#whats-new' },
      { label: 'Talk to an Expert', to: '/contact' },
    ],
  },
]

type FooterProps = {
  /** Wizard / form pages: brand + legal only, no mega nav. */
  compact?: boolean
}

export function Footer({ compact = false }: FooterProps) {
  return (
    <footer className={`footer${compact ? ' footer--compact' : ''}`}>
      <div className="wrap footer-main">
        <div className="footer-brand">
          <Logo light />
          <p>
            Enterprise communications for mission-critical, vertical-specific operations. Cloud,
            hybrid, or on-premise.
          </p>
          {compact ? (
            <div className="footer-brand__actions">
              <Link className="footer-brand__link" to="/partners">
                Back to partner program
              </Link>
              <Link className="footer-brand__link" to="/partners/login">
                Partner Login
              </Link>
            </div>
          ) : null}
        </div>

        {compact ? null : (
          <div className="footer-nav">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.to}-${link.label}`}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        )}
      </div>

      <div className="wrap">
        <div className="legal">
          <div className="legal__meta">
            <span>© {new Date().getFullYear()} Tadiran Telecom. All rights reserved.</span>
            <span className="legal__regions">
              Regional contacts appear once market owners confirm public routing.
            </span>
          </div>
          <div className="legal__links">
            {footerLegal.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
