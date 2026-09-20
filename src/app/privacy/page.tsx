import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { validHttps } from '@/lib/inquiry-schema'
import { Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy information',
  robots: { index: false, follow: false },
}

export default function Privacy() {
  if (validHttps(process.env.PRIVACY_POLICY_URL)) redirect(process.env.PRIVACY_POLICY_URL!)

  return (
    <section className="container text-page">
      <Eyebrow>Privacy and terms</Eyebrow>
      <h1>Legal notices are not published yet.</h1>
      <p>
        This review site has not been connected to approved privacy or terms documents. Online submissions stay unavailable until those notices and the delivery service are configured.
      </p>
      <p>This page is a status notice, not a substitute for counsel-approved legal copy.</p>
    </section>
  )
}
