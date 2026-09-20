import type { Metadata } from 'next'
import Link from 'next/link'
import { HomeMedia } from '@/components/media-frame'
import { Action, PageHero } from '@/components/ui'
import {
  aeonixCloudFeatures,
  partnerFaqs,
  partnerOffer,
  partnerOfferChecks,
  partnerProof,
  partnerStack,
  partnerNext,
  partnerTypes,
} from '@/content/partners'

export const metadata: Metadata = {
  title: 'Become a Partner',
  description: partnerOffer.dreamOutcome,
  alternates: { canonical: '/partners' },
}

export default function Partners() {
  return (
    <div className="page partner-page">
      <PageHero
        eyebrow="Aeonix4Cloud partner program"
        title="Become a Partner"
        body={`${partnerOffer.dreamOutcome} ${partnerOffer.nextStep}`}
        actions={
          <>
            <Action href="/partners/apply">Start application</Action>
            <Action href="#offer" secondary>
              See the offer
            </Action>
          </>
        }
      />

      <section className="partner-split partner-stage">
        <div className="partner-split__media">
          <HomeMedia
            name="partner-stage"
            alt="Coastal communications facility at blue hour"
            cover
            sizes="(max-width: 940px) 100vw, 58vw"
            priority
          />
        </div>
        <div className="partner-split__copy">
          <p className="eyebrow">Cloud technology. Local support.</p>
          <h2>Own the customer.</h2>
          <p>{partnerOffer.problem}</p>
          <p>{partnerOffer.solution}</p>
          <ul>
            {partnerOfferChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="partner-actions">
            <Action href="/partners/apply">Become a partner</Action>
            <Action href="/products/aeonix" secondary>
              Explore Aeonix
            </Action>
          </div>
        </div>
      </section>

      <section className="partner-offer" id="offer">
        <div className="container partner-offer__layout">
          <figure className="partner-offer__media">
            <HomeMedia
              name="partner-cloud"
              alt="Finished datacenter aisle running Aeonix-class infrastructure"
              ratio="portrait"
              sizes="(max-width: 940px) 100vw, 40vw"
            />
            <figcaption>
              <small>The platform</small>
              <strong>Aeonix4Cloud</strong>
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">{partnerOffer.name}</p>
            <h2>What you get.</h2>
            <p className="partner-offer__lead">
              Eight parts of one offer. Recurring revenue, customer control, and a platform you do
              not have to build.
            </p>
            <ol>
              {partnerStack.map((item, index) => (
                <li key={item.title}>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="partner-mosaic" id="types">
        <div className="container">
          <div className="partner-mosaic__head">
            <p className="eyebrow">Who can apply</p>
            <h2>Four models. One program.</h2>
          </div>
          <div className="partner-mosaic__grid">
            {partnerTypes.map((type, index) => (
              <Link
                className="partner-tile"
                href={`/partners/apply?type=${encodeURIComponent(type.name)}`}
                id={type.id}
                key={type.id}
              >
                <HomeMedia name={type.image} alt="" cover sizes="(max-width: 940px) 100vw, 50vw" />
                <span className="partner-tile__scrim" aria-hidden="true" />
                <span className="partner-tile__copy">
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <h3>{type.name}</h3>
                  <p>{type.fit}</p>
                  <em>Apply as {type.name}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-split partner-sell">
        <div className="partner-split__media">
          <HomeMedia
            name="partner-integrator"
            alt="Operations command center for partner-delivered communications"
            cover
            sizes="(max-width: 940px) 100vw, 58vw"
          />
        </div>
        <div className="partner-split__copy">
          <p className="eyebrow">What you sell</p>
          <h2>High-end. Low price.</h2>
          <p>
            Aeonix4Cloud gives customers enterprise communications features at a price mid-market
            teams can buy.
          </p>
          <ul>
            {aeonixCloudFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Action href="/products/aeonix">Explore Aeonix</Action>
        </div>
      </section>

      <section className="partner-proof-band">
        <div className="container">
          <div className="partner-proof-band__head">
            <p className="eyebrow">Proof</p>
            <h2>Already in market.</h2>
            <p>
              Aeonix4Cloud is an award-winning platform used by millions of business users. Partners
              such as Grennan Communications and Grayson Collin sell it to customers they already
              own.
            </p>
          </div>
          <div className="partner-proof">
            {partnerProof.map((item) => (
              <p key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </p>
            ))}
          </div>
          <p className="partner-proof__note">
            Ron Grennan selected Aeonix4Cloud to keep control of customer satisfaction.{' '}
            <Link
              className="inline-link"
              href="https://www.tadirantele.com/post/partner-perspective-ron-grennan-founder-of-grennan-communications"
              target="_blank"
              rel="noreferrer"
            >
              Read the partner perspective ↗
            </Link>
          </p>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="partner-mosaic__head">
            <p className="eyebrow">FAQs</p>
            <h2>Before you apply.</h2>
          </div>
          <div className="faq-list">
            {partnerFaqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="next">
        <div className="container">
          <div className="partner-mosaic__head">
            <p className="eyebrow">After you apply</p>
            <h2>What happens next?</h2>
          </div>
          <ol className="partner-steps">
            {partnerNext.map((step, index) => (
              <li key={step.label}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{step.label}</strong>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="partner-actions">
            <Action href="/partners/apply">Start the application</Action>
          </div>
        </div>
      </section>
    </div>
  )
}
