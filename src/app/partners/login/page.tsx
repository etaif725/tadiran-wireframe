import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, HelpCircle, UserPlus } from 'lucide-react'
import { Brand, Eyebrow } from '@/components/ui'
import { validHttps } from '@/lib/inquiry-schema'

export const metadata: Metadata = {
  title: 'Partner Access',
  description: 'Continue to the secure Tadiran Telecom portal for approved partners.',
  robots: { index: false, follow: false },
}

export default function PartnerLogin() {
  const portal = validHttps(process.env.PARTNER_PORTAL_URL)
    ? process.env.PARTNER_PORTAL_URL
    : ''

  return (
    <div className="page partner-login-page">
      <section className="partner-login">
        <div className="container partner-login__panel">
          <div className="partner-login__main">
            <Brand variant="login" />
            <div className="partner-login__copy">
              <Eyebrow>Approved partner access</Eyebrow>
              <h1>Continue to your Tadiran partner workspace.</h1>
              <p>
                The partner portal is a separate secure service. Use the account and access
                details issued by your Tadiran representative.
              </p>
            </div>

            {portal ? (
              <a
                className="action partner-login__portal"
                href={portal}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open partner portal</span>
                <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only">Opens in a new tab</span>
              </a>
            ) : (
              <div className="partner-login__unavailable" role="status">
                <strong>Portal link unavailable</strong>
                <p>
                  Use the portal address supplied by your representative, or contact Tadiran for
                  access help.
                </p>
                <Link href="/contact?intent=partner-access">
                  Request access help
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          <aside className="partner-login__help" aria-label="Partner access options">
            <div>
              <UserPlus size={20} aria-hidden="true" />
              <h2>Applying for the first time?</h2>
              <p>Introduce your company through the five-step partner application.</p>
              <Link href="/partners/apply">
                Become a partner
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <div>
              <HelpCircle size={20} aria-hidden="true" />
              <h2>Need account help?</h2>
              <p>Contact Tadiran if your issued portal link or credentials are not working.</p>
              <Link href="/contact?intent=partner-access">
                Contact partner support
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
