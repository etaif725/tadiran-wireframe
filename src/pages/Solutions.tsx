import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { DeploymentChooser } from '../components/DeploymentChooser'
import { Hero } from '../components/Hero'
import { MediaVisual } from '../components/MediaVisual'
import { ProductInterface } from '../components/ProductInterface'
import { industries, solutionFamilies } from '../data/site'

const audiences = [
  { label: 'Connect teams', to: '/solutions/enterprise-communications' },
  { label: 'Serve customers', to: '/solutions/omnichannel-cx' },
  { label: 'Protect operations', to: '/solutions/critical-communications' },
  { label: 'Evolve intelligently', to: '/solutions/ai-analytics' },
]

const primarySlugs = [
  'enterprise-communications',
  'omnichannel-cx',
  'ai-analytics',
  'critical-communications',
] as const

const supportingSlugs = ['security-resilience', 'integrations-deployment'] as const

const familyMedia: Record<string, { kind: 'photo' | 'ui'; name?: string; variant?: 'cx' | 'analytics' | 'operations' }> =
  {
    'enterprise-communications': { kind: 'photo', name: 'enterprise-hero' },
    'omnichannel-cx': { kind: 'ui', variant: 'cx' },
    'ai-analytics': { kind: 'ui', variant: 'analytics' },
    'critical-communications': { kind: 'photo', name: 'enterprise-hero' },
  }

export function Solutions() {
  const primary = primarySlugs
    .map((slug) => solutionFamilies.find((item) => item.slug === slug))
    .filter(Boolean) as typeof solutionFamilies
  const supporting = supportingSlugs
    .map((slug) => solutionFamilies.find((item) => item.slug === slug))
    .filter(Boolean) as typeof solutionFamilies

  return (
    <>
      <div className="solutions-hero">
        <div className="wrap">
          <Hero
            compact
            variant="split"
            eyebrow="Solutions"
            title="Communications designed around your operation."
            body="Connect the people, customers, data, and critical workflows behind every interaction."
            primary={{ label: 'Discuss Your Requirements', to: '/contact?intent=solution' }}
            secondary={{ label: 'Explore Industries', to: '/industries' }}
            visual={
              <MediaVisual
                name="enterprise-hero"
                alt="Enterprise communications operations environment"
                ratio="hero"
                priority
              />
            }
          />
        </div>
      </div>

      <section className="outcome-rail">
        <div className="wrap outcome-rail__inner">
          <p>What needs to work better?</p>
          <div className="outcome-rail__links">
            {audiences.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {primary.map((item, index) => {
        const media = familyMedia[item.slug]
        const tone =
          item.slug === 'omnichannel-cx' ? 'navy' : index % 2 === 0 ? 'paper' : 'white'
        const flip = item.slug === 'omnichannel-cx' || item.slug === 'critical-communications'

        return (
          <section
            className={`section solution-family solution-family--${tone}${flip ? ' is-flip' : ''}`}
            key={item.slug}
            id={item.slug}
          >
            <div className="wrap solution-family__grid">
              <div className="solution-family__copy">
                <p className="section-index">0{index + 1} — {item.eyebrow}</p>
                <p className="eyebrow">{item.eyebrow}</p>
                <h2>
                  <Link to={`/solutions/${item.slug}`}>{item.title}</Link>
                </h2>
                <p className="lede">{item.outcome}</p>
                <div className="chips">
                  {item.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <Link className="btn" to={`/solutions/${item.slug}`}>
                  Explore solution
                </Link>
              </div>
              <div className="solution-family__media">
                {media?.kind === 'ui' ? (
                  <ProductInterface
                    variant={media.variant}
                    title={`${item.title} workspace`}
                  />
                ) : (
                  <MediaVisual
                    name={media?.name ?? 'enterprise-hero'}
                    alt={`${item.title} operating environment`}
                    ratio="hero"
                  />
                )}
              </div>
            </div>
          </section>
        )
      })}

      <section className="section solution-index-band">
        <div className="wrap">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">Supporting families</p>
              <h2>Resilience and fit for the estate you already run.</h2>
            </div>
            <p className="lede">
              Security, operations, integrations, and deployment sit behind the four buyer paths.
            </p>
          </div>
          <div className="solution-index__list">
            {supporting.map((item) => (
              <Link key={item.slug} className="solution-index__row" to={`/solutions/${item.slug}`}>
                <span className="eyebrow">{item.eyebrow}</span>
                <strong>{item.title}</strong>
                <p>{item.outcome}</p>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-deployment">
        <div className="wrap solution-deployment__grid">
          <div>
            <p className="section-index">05 — Deployment</p>
            <p className="eyebrow">Modernize without starting over</p>
            <h2>Cloud, hybrid, or on-premise.</h2>
            <p className="lede">
              State the constraint first. This is a consultative path for the estate you have, not a
              pricing comparison.
            </p>
          </div>
          <DeploymentChooser />
        </div>
      </section>

      <section className="section capability-band">
        <div className="wrap">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">One platform</p>
              <h2>The layers that make the system useful.</h2>
            </div>
            <p className="lede">A dense map of the operating layers. Not another card gallery.</p>
          </div>
          <div className="capability-index">
            {[
              ['01', 'Channels', 'Voice and digital in one operating model'],
              ['02', 'AI', 'Governed assistance, summaries, and routing'],
              ['03', 'Security', 'Access, continuity, and deployment control'],
              ['04', 'Integrations', 'CRM, PMS, dispatch, and APIs'],
              ['05', 'Reporting', 'Operational visibility for supervisors'],
              ['06', 'Recording', 'Secure capture where policy requires it'],
              ['07', 'Mobility', 'Fixed-mobile convergence and BYOD'],
              ['08', 'Quality', 'Evaluation and coaching across journeys'],
            ].map(([number, label, body]) => (
              <div key={label}>
                <span>{number}</span>
                <strong>{label}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions-industries">
        <div className="wrap solutions-industries__grid">
          <div>
            <p className="eyebrow">Where it comes to life</p>
            <h2>Designed around the environment.</h2>
            <Link className="btn" to="/industries">
              Explore industries
            </Link>
          </div>
          <div className="solutions-industries__links">
            {industries.map((item) => (
              <Link key={item.slug} to={`/industries/${item.slug}`}>
                <span>{item.title}</span>
                <small>{item.future ? 'Future template' : 'Industry pathway'}</small>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss your requirements"
        primary={{ label: 'Discuss Your Requirements', to: '/contact?intent=solution' }}
        secondary={{ label: 'Explore Industries', to: '/industries' }}
        media="enterprise-hero"
      />
    </>
  )
}
