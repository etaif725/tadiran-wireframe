import { Link } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { CtaBand } from '../components/CtaBand'
import { Hero } from '../components/Hero'
import { MediaVisual } from '../components/MediaVisual'
import { ProofStrip } from '../components/ProofStrip'

const values = [
  { title: 'Reliability', body: 'Communications that stay up when the operation cannot pause.' },
  { title: 'Innovation', body: 'Practical, governed AI rather than decorative automation.' },
  { title: 'Partnership', body: 'Enterprise buyers and channel partners with distinct journeys.' },
]

const focusAreas = [
  {
    title: 'Leadership',
    body: 'Executive and operating leadership will appear here once biographies and photos are approved for public use.',
    media: 'enterprise-hero',
  },
  {
    title: 'Vertical market focus',
    body: 'Healthcare, utilities, transportation, hospitality, education, and other environments where continuity matters.',
    media: 'transportation',
  },
  {
    title: 'Recognition & responsibility',
    body: 'Awards, sustainability, and corporate commitments stay reserved until Tadiran clears them for the website.',
    media: 'partners',
  },
]

export function About() {
  return (
    <>
      <div className="wrap page-hero">
        <Hero
          compact
          variant="split"
          eyebrow="Company"
          title="Built for communications that cannot fail."
          body="Six decades of communications experience, carried forward through flexible platforms, practical AI, and a human-centered way of working."
          primary={{ label: 'Talk to an Expert', to: '/contact' }}
          secondary={{ label: 'Explore Solutions', to: '/solutions' }}
          proofChip="Global Heritage. Proven Success."
          visual={
            <MediaVisual
              name="heritage"
              alt="Telecommunications engineers connecting legacy systems with modern global networks"
              ratio="hero"
              priority
            />
          }
        />

        <section className="section-tight about-proof">
          <ProofStrip
            items={[
              { value: '60+', label: 'Years of communications expertise' },
              { value: '41', label: 'Countries served' },
              { value: '4', label: 'Regional headquarters' },
              { value: '100%', label: 'Enterprise focus' },
            ]}
          />
        </section>
      </div>

      <section className="section about-heritage">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Global heritage. Proven success.</p>
            <h2>From telephony roots to connected enterprise intelligence.</h2>
            <p className="lede">
              Each generation of the platform has carried the same principle forward: protect the
              communication that keeps the organization moving.
            </p>
            <ol className="timeline">
              <li>Early exchange and telephony heritage</li>
              <li>Enterprise voice and on-premise estates</li>
              <li>Unified communications and hybrid delivery</li>
              <li>OmniCX, recording, and governed AI readiness</li>
            </ol>
          </div>
          <MediaVisual
            name="utilities"
            alt="Mission-critical communications operations environment"
            ratio="hero"
          />
        </div>
      </section>

      <section className="section about-purpose">
        <div className="wrap">
          <div className="about-purpose__grid">
            <article>
              <p className="eyebrow">Mission</p>
              <h2>Enterprise technology made simple.</h2>
              <p className="lede">Make advanced communications easier to adopt, operate, and evolve.</p>
            </article>
            <article>
              <p className="eyebrow">Vision</p>
              <h2>Intelligence in every interaction.</h2>
              <p className="lede">
                Visibility whenever the customer chooses. Unified experience across channels.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Values in practice</p>
              <h2>What the brand needs to prove.</h2>
            </div>
          </div>
          <div className="about-values__grid">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p className="lede">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-footprint" id="footprint" tabIndex={-1}>
        <div className="wrap">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">Global presence</p>
              <h2>Close to the environment. Connected to the whole.</h2>
            </div>
            <p className="lede">
              Regional teams connect local market knowledge with a shared global communications
              platform and support model.
            </p>
          </div>
          <div className="about-footprint__map">
            <ArchitectureDiagram title="Tadiran global communications footprint" />
          </div>
        </div>
      </section>

      <section className="section about-leadership">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Company depth</p>
              <h2>Leadership, focus, and recognition.</h2>
            </div>
            <Link className="text-link" to="/contact">
              Speak with Tadiran
            </Link>
          </div>
          <div className="about-leadership__grid">
            {focusAreas.map((item) => (
              <article key={item.title}>
                <MediaVisual name={item.media} alt="" />
                <h3>{item.title}</h3>
                <p className="lede">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Speak with Tadiran"
        body="Bring the operating challenge, the deployment constraint, or the partner question."
        primary={{ label: 'Talk to an Expert', to: '/contact' }}
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
        media="heritage"
      />
    </>
  )
}
