import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Facebook, Linkedin, Twitter, Youtube, type LucideIcon } from 'lucide-react'
import { footerColumns, footerLegal, footerSocials } from '@/content/navigation'
import { Brand } from './ui'

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Facebook,
  X: Twitter,
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-atmosphere" aria-hidden="true">
        <span className="footer-atmosphere__bg" />
        <span className="footer-atmosphere__image" />
        <span className="footer-atmosphere__glow footer-atmosphere__glow--a" />
        <span className="footer-atmosphere__glow footer-atmosphere__glow--b" />
        <span className="footer-atmosphere__glass" />
      </div>
      <div className="footer-inner">
        <div className="footer-intro">
          <div>
            <Brand variant="footer" />
            <p className="footer-kicker">Enterprise communications · Since 1963</p>
            <p className="footer-intro__statement">Intelligence in every interaction.</p>
          </div>
          <div className="footer-intro__aside">
            <p>Connect your people and business systems with cloud, hybrid, or on-premise communications.</p>
            <Link className="action footer-cta" href="/contact">
              <span>Start a conversation</span>
              <span className="action__icon" aria-hidden="true">
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </span>
            </Link>
            <div className="footer-socials" aria-label="Tadiran Telecom social channels">
              {footerSocials.map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    href={social.href}
                    key={social.label}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Tadiran Telecom on ${social.label}`}
                  >
                    <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="footer-directory">
          {footerColumns.map((group, index) => (
            <nav key={group.label} aria-label={`${group.label} footer`}>
              <div className="footer-directory__heading">
                <span>0{index + 1}</span>
                <Link href={group.href}>{group.label}</Link>
              </div>
              <div>
                {group.links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tadiran Telecom. All rights reserved.</span>
          <div>
            {footerLegal.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
            <Link href="/partners/login">Partner Login</Link>
          </div>
          <a href="#main" className="footer-back">
            Back to top
            <span aria-hidden="true">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
