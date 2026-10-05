import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {RelationshipMotion} from '@/components/relationship-motion'
import { Clock3, ShieldCheck } from 'lucide-react'
import { InquiryForm } from '@/components/inquiry-form'
import { inquiryConfiguration } from '@/lib/config'
import { Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Become a Partner',
  description: 'Apply to join the Tadiran Telecom partner program.',
  robots: { index: false, follow: false },
}

export default async function Apply({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const config = inquiryConfiguration()

  return (
    <RelationshipMotion className="page partner-apply-page relationship-page">
      <section className="partner-application">
        <div className="container partner-application__layout">
          <aside className="partner-application__intro">
            <Eyebrow>Become a partner</Eyebrow>
            <h1>Let’s build<br/><em>your next chapter.</em></h1>
            <p>
              Give our channel team enough context to assess fit. Commercial terms and program
              commitments follow a direct review.
            </p>
            <Link className="cine-button relationship-form-jump" href="#partner-form">Start your application ↓</Link>
            <div className="application-photo" data-photo><Image src="/brand/cinema/sections/integrations-deployment.png" alt="A team planning a technology deployment" fill sizes="(max-width:760px) 100vw,40vw"/></div>
            <dl>
              <div>
                <dt>
                  <Clock3 size={18} aria-hidden="true" />
                  Time required
                </dt>
                <dd>Usually five to ten minutes</dd>
              </div>
              <div>
                <dt>
                  <ShieldCheck size={18} aria-hidden="true" />
                  What happens next
                </dt>
                <dd>A Tadiran representative reviews every completed application</dd>
              </div>
            </dl>
            <Link className="inline-link" href="/partners">
              ← Back to the partner program
            </Link>
          </aside>

          <div className="partner-application__form" id="partner-form"><InquiryForm
            kind="partner"
            {...config}
            privacyUrl={config.privacyUrl || ''}
            partnerType={type?.slice(0, 100) || ''}
          /></div>
        </div>
      </section>
    </RelationshipMotion>
  )
}
