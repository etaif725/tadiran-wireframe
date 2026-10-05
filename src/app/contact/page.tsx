import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {RelationshipMotion} from '@/components/relationship-motion'
import { InquiryForm } from '@/components/inquiry-form'
import { inquiryConfiguration } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Tadiran Telecom for sales, solution guidance, partnership inquiries, customer assistance, or regional office information.',
  alternates: { canonical: '/contact' },
}

function topicFromIntent(intent?: string) {
  if (intent === 'industry') return 'Industry use case'
  if (intent === 'demo') return 'Aeonix demo'
  if (intent === 'technical') return 'Technical discussion'
  if (intent === 'partnerships') return 'Partner program'
  if (intent === 'partner-access') return 'Partner access support'
  return 'Aeonix / OmniCX'
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string; intent?: string }>
}) {
  const { interest, intent } = await searchParams
  const config = inquiryConfiguration()
  const askedAbout = interest?.slice(0, 180).trim()
  const topic = askedAbout || topicFromIntent(intent)

  return (
    <RelationshipMotion className="page contact-page relationship-page">
      <section className="section contact-stage" id="inquiry" aria-labelledby="contact-title">
        <div className="container contact-board">
          <header className="contact-copy" data-arrive>
            <p className="eyebrow">Contact Tadiran Telecom</p>
            <h1 id="contact-title">Good connections<br/><em>start here.</em></h1>
            <p>Tell us what you need. We’ll connect you with the right sales, product, partner, or regional specialist.</p>
            {askedAbout ? <p className="contact-copy__route">We’ll route your request about {askedAbout} to the right team.</p> : null}
            <Link className="cine-button relationship-form-jump" href="#contact-form">Start a conversation ↓</Link>
            <div className="contact-photo" data-photo><Image src="/brand/cinema/sections/omnichannel-cx.png" alt="A personal service conversation" fill sizes="(max-width:760px) 100vw,45vw"/><span>People ready to help you move forward.</span></div>
            <dl className="contact-copy__desks" data-stagger>
              <div>
                <dt>Sales and solutions</dt>
                <dd>Evaluate a solution, request a demonstration, or discuss deployment options.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/partners/apply">Become a partner</Link>
                </dt>
                <dd>Introduce your business and connect with our channel team.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/partners/login">Partner access</Link>
                </dt>
                <dd>Open the approved partner portal or request help with issued access.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/about#footprint">Office locations</Link>
                </dt>
                <dd>Find our teams in Petah Tikva, Atlanta, Beijing, and New Delhi.</dd>
              </div>
            </dl>
          </header>
          <div className="contact-side" id="contact-form" data-arrive>
            <InquiryForm {...config} privacyUrl={config.privacyUrl || ''} interest={topic} />
          </div>
        </div>
      </section>
    </RelationshipMotion>
  )
}
