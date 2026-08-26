import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { CtaBand } from '../components/CtaBand'
import { EvidenceNote } from '../components/EvidenceNote'
import { FaqAccordion } from '../components/FaqAccordion'
import { Hero } from '../components/Hero'
import { MediaVisual } from '../components/MediaVisual'
import { partnerTypes } from '../data/site'

const steps = [
  {
    title: 'Choose a partner type',
    body: 'Carrier, distributor, integrator, or developer. Pick the model closest to how you sell.',
  },
  {
    title: 'Submit a five-step application',
    body: 'Profile, company, market, capabilities, and review. No mystery form.',
  },
  {
    title: 'Review by regional / channel owner',
    body: 'Applications route to the team that can evaluate territory and fit.',
  },
  {
    title: 'Enablement after approval',
    body: 'Approved partners continue into portal access and enablement.',
  },
]

const valueCards = [
  {
    title: 'Platform breadth',
    body: 'Unified communications, OmniCX, recording, mobility, and governed AI in one portfolio story.',
  },
  {
    title: 'Vertical expertise',
    body: 'Healthcare, utilities, transportation, hospitality, and other environments where continuity matters.',
  },
  {
    title: 'Deployment choice',
    body: 'Cloud, hybrid, or on-premise packages that match the customer estate you already sell into.',
  },
]

export function PartnerProgram() {
  const [activeType, setActiveType] = useState(partnerTypes[0])

  return (
    <>
      <div className="wrap page-hero">
        <Hero
          compact
          variant="split"
          eyebrow="Partners"
          title="Grow with a communications partner built for complexity."
          body="Bring the right platform, deployment model, and vertical expertise to every enterprise opportunity."
          primary={{ label: 'Become a Partner', to: '/partners/apply' }}
          secondary={{ label: 'Partner Login', to: '/partners/login' }}
          visual={
            <MediaVisual
              name="partners"
              alt="Global telecommunications partners collaborating on an enterprise solution"
              ratio="hero"
              priority
            />
          }
        />
      </div>

      <section className="section partner-types" id="types" tabIndex={-1}>
        <div className="wrap">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">One program, distinct business models</p>
              <h2>Built around how you go to market.</h2>
            </div>
            <p className="lede">
              Carriers, distributors, integrators, and developers need different packages,
              enablement, and technical conversations.
            </p>
          </div>
          <div className="partner-browser">
            <div className="partner-browser__tabs" role="tablist" aria-label="Partner types">
              {partnerTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  role="tab"
                  aria-selected={activeType.id === type.id}
                  onClick={() => setActiveType(type)}
                >
                  <span>0{partnerTypes.indexOf(type) + 1}</span>
                  {type.title}
                </button>
              ))}
            </div>
            <div className="partner-browser__feature" role="tabpanel">
              <div>
                <p className="eyebrow">Selected partner model</p>
                <h3>{activeType.title}</h3>
                <p>{activeType.summary}</p>
                <div className="partner-browser__points">
                  <span>Portfolio fit</span>
                  <span>Technical enablement</span>
                  <span>Route-to-market alignment</span>
                </div>
                <Link className="btn" to={`/partners/apply?type=${activeType.id}`}>
                  Start this application
                </Link>
              </div>
              <ArchitectureDiagram title={`${activeType.title} partner ecosystem`} />
            </div>
          </div>
        </div>
      </section>

      <section className="section partner-value">
        <div className="wrap">
          <div className="partner-value__grid">
            <div className="partner-value__lead">
              <p className="eyebrow">Why Tadiran</p>
              <h2>A broader way to solve the enterprise need.</h2>
              <p>
                Pair a flexible communications platform with vertical workflows and a deployment
                story that works across cloud, hybrid, and on-premise estates.
              </p>
            </div>
            {valueCards.map((card, index) => (
              <article key={card.title}>
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section partner-process">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">A serious qualification journey</p>
              <h2>Clear steps. No mystery form.</h2>
            </div>
          </div>
          <ol className="partner-process__steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section partner-proof">
        <div className="wrap partner-proof__simple">
          <div>
            <p className="eyebrow">Built for shared opportunity</p>
            <h2>Local market knowledge. Enterprise-grade platform.</h2>
            <p className="lede">
              Carriers, distributors, integrators, and developers bring territory expertise. Tadiran
              brings the communications portfolio and deployment choice.
            </p>
            <div className="partner-proof__tags">
              <span>Carrier</span>
              <span>Distributor</span>
              <span>Integrator</span>
              <span>Developer</span>
            </div>
          </div>
          <EvidenceNote label="Partner stories and shared-win proof" />
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-layout">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2>FAQ</h2>
          </div>
          <FaqAccordion
            items={[
              {
                q: 'Is login the same as applying?',
                a: 'No. Approved partners sign in. Prospective partners apply.',
              },
              {
                q: 'Are commissions listed here?',
                a: 'No. Commission structures stay off the public site until legal and commercial approval.',
              },
              {
                q: 'Which partner type should I choose?',
                a: 'Select the model closest to how your company sells, integrates, or extends communications platforms.',
              },
            ]}
          />
        </div>
      </section>

      <CtaBand
        title="Let’s build the right route to market."
        primary={{ label: 'Become a Partner', to: '/partners/apply' }}
        secondary={{ label: 'Partner Login', to: '/partners/login' }}
        media="partners"
      />
    </>
  )
}
