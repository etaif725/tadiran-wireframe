import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {RelationshipMotion} from '@/components/relationship-motion'
import { ArrowRight, HelpCircle, UserPlus } from 'lucide-react'
import { Brand, Eyebrow } from '@/components/ui'
import { PartnerSignIn } from '@/components/partner-sign-in'

export const metadata: Metadata = {
  title: 'Partner Access',
  description: 'Continue to the secure Tadiran Telecom portal for approved partners.',
  robots: { index: false, follow: false },
}

export default function PartnerLogin() {
  return (
    <RelationshipMotion className="page partner-login-page relationship-page">
      <section className="partner-login">
        <div className="container partner-login__panel">
          <div className="partner-login__main" data-arrive>
            <Brand variant="login" />
            <div className="partner-login__copy">
              <Eyebrow>Approved partner access</Eyebrow>
              <h1>Welcome back.<br/><em>Let’s get to work.</em></h1>
              <p>
                Sign in to your partner account. Your resources, tools and next opportunities are waiting.
              </p>
            </div>

            <PartnerSignIn />
          </div>

          <aside className="partner-login__help" aria-label="Partner access options">
            <div className="portal-photo" data-photo><Image src="/brand/cinema/sections/partners.png" alt="Partners collaborating" fill sizes="(max-width:760px) 100vw,40vw"/></div>
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
    </RelationshipMotion>
  )
}
