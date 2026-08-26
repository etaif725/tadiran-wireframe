import { Link } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { CtaBand } from '../components/CtaBand'
import { DeploymentChooser } from '../components/DeploymentChooser'
import { EvidenceNote } from '../components/EvidenceNote'
import { Hero } from '../components/Hero'
import { MediaVisual } from '../components/MediaVisual'
import { ProductInterface } from '../components/ProductInterface'
import { ProofStrip } from '../components/ProofStrip'
import { resources as resourceCatalog } from '../content/catalog'
import { industries } from '../data/site'

const families = [
  {
    lead: true,
    title: 'Critical communications',
    body: 'Protect dispatch, emergency, and continuity work in environments where the call cannot wait.',
    to: '/solutions/critical-communications',
    link: 'Explore critical communications',
    media: 'utilities',
  },
  {
    title: 'Enterprise communications',
    body: 'Keep sites, field teams, and offices on one voice, video, and mobility foundation.',
    to: '/solutions/enterprise-communications',
    link: 'Explore enterprise communications',
  },
  {
    title: 'Omnichannel customer experience',
    body: 'Give agents one conversation across voice and digital, not a stack of tabs.',
    to: '/solutions/omnichannel-cx',
    link: 'Explore OmniCX',
  },
  {
    title: 'AI and analytics',
    body: 'Apply governed assistance, quality, and insight to the work already happening.',
    to: '/solutions/ai-analytics',
    link: 'Explore AI and analytics',
  },
]

const featuredIndustries = industries.filter((item) => !item.future).slice(0, 6)
const industryMedia: Record<string, string> = {
  transportation: 'transportation',
  'power-utilities': 'utilities',
  healthcare: 'healthcare',
  'assisted-living': 'healthcare',
  hospitality: 'hospitality',
  education: 'education',
  'alarm-systems': 'utilities',
}

export function Home() {
  const featuredResource = resourceCatalog[0]
  const moreResources = resourceCatalog.filter((item) => item.slug !== featuredResource.slug).slice(0, 2)
  const leadFamily = families.find((item) => item.lead) ?? families[0]
  const otherFamilies = families.filter((item) => item !== leadFamily)

  return (
    <>
      <div className="announcement">
        <div className="wrap announcement__inner">
          <p>The enterprise guide to hybrid communications is now available.</p>
          <Link to="/resources">Read the report</Link>
        </div>
      </div>

      <section className="home-hero">
        <div className="wrap">
          <Hero
            eyebrow="AI-ready enterprise communications"
            title={
              <>
                Intelligence in every interaction.
                <br />
                Global heritage. Proven success.
              </>
            }
            body="Enterprise technology made simple, and simply done right. Cloud, hybrid, or on-premise, built around the operation you already run."
            primary={{ label: 'Explore Solutions', to: '/solutions' }}
            secondary={{ label: 'Talk to an Expert', to: '/contact' }}
            visual={<ProductInterface title="OmniCX agent workspace" />}
          />
        </div>
      </section>

      <section className="section-tight proof-band">
        <div className="wrap">
          <ProofStrip
            items={[
              { value: '60+', label: 'Years designing communications that stay up.' },
              { value: '41', label: 'Countries where the platform is in service.' },
              { value: '4', label: 'Regional headquarters supporting the estate.' },
              { value: '100%', label: 'Enterprise work. No consumer side project.' },
            ]}
          />
        </div>
      </section>

      <section className="section family-story">
        <div className="wrap">
          <p className="section-index">01 — Families</p>
        </div>
        <div className="wrap family-story__grid">
          <article className="family-story__lead">
            <MediaVisual name={leadFamily.media ?? 'utilities'} alt="" ratio="portrait" />
            <p className="eyebrow">Solution families</p>
            <h2>
              <Link to={leadFamily.to}>{leadFamily.title}</Link>
            </h2>
            <p>{leadFamily.body}</p>
            <Link className="text-link" to={leadFamily.to}>
              {leadFamily.link}
            </Link>
          </article>
          <div className="family-story__list">
            {otherFamilies.map((family) => (
              <article key={family.to}>
                <h3>
                  <Link to={family.to}>{family.title}</Link>
                </h3>
                <p>{family.body}</p>
                <Link className="text-link" to={family.to}>
                  {family.link}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section deploy-story">
        <div className="wrap deploy-story__grid">
          <div>
            <p className="section-index">02 — Deployment</p>
            <p className="eyebrow">Deployment</p>
            <h2>One platform. The architecture follows the environment.</h2>
            <p className="lede">
              State the constraint first. Cloud speed, a hybrid estate, or on-premise control,
              including air-gapped recording when policy requires it.
            </p>
          </div>
          <DeploymentChooser />
        </div>
      </section>

      <section className="section product-story">
        <div className="wrap">
          <div className="product-story__grid">
            <div className="product-story__visual">
              <ProductInterface variant="operations" title="OmniCX supervisor workspace" />
            </div>
            <div className="product-story__copy">
              <p className="section-index">03 — OmniCX</p>
              <p className="eyebrow">OmniCX</p>
              <h2>Stop making your agents switch tabs.</h2>
              <p>
                Voice, messaging, customer context, quality, and guidance in one workspace. The
                conversation keeps its context through every handoff.
              </p>
              <ol className="feature-list feature-list--numbered">
                <li>
                  <strong>Unified interactions</strong>
                  <small>Voice and digital on one customer timeline</small>
                </li>
                <li>
                  <strong>Practical AI</strong>
                  <small>Guidance, summaries, and quality intelligence</small>
                </li>
                <li>
                  <strong>Connected workflows</strong>
                  <small>CRM, PMS, and API paths without a rip-and-replace</small>
                </li>
              </ol>
              <Link className="btn" to="/solutions/omnichannel-cx">
                Explore OmniCX
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section industry-story">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="section-index">04 — Industries</p>
              <p className="eyebrow">Industries</p>
              <h2>Communications shaped around the environment.</h2>
            </div>
            <Link className="text-link" to="/industries">
              View all industries
            </Link>
          </div>
          <div className="home-industry-mosaic">
            {featuredIndustries.map((item, index) => (
              <article key={item.slug} className={index < 2 ? 'is-wide' : undefined}>
                <MediaVisual
                  name={industryMedia[item.slug] ?? 'enterprise-hero'}
                  alt={`${item.title} operations`}
                />
                <h3>
                  <Link to={`/industries/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section technical-proof">
        <div className="wrap technical-proof__grid">
          <div>
            <p className="section-index">05 — Resilience</p>
            <p className="eyebrow">Resilience and integration</p>
            <h2>See the system before an incident tests it.</h2>
            <p className="lede">
              Mesh redundancy, secure access, health reporting, and the CRM, PMS, and dispatch
              connections that sit behind the conversation. PCI and PII handling stay in the
              specialist review, not on a logo row.
            </p>
            <Link className="btn" to="/contact?intent=technical">
              Speak with a solutions expert
            </Link>
          </div>
          <ArchitectureDiagram title="Enterprise communications architecture" />
        </div>
      </section>

      <section className="section resources-story">
        <div className="wrap">
          <p className="section-index">06 — What’s New</p>
          <p className="eyebrow">What’s New</p>
          <h2>Reports, updates, and operating notes.</h2>
          <div className="resource-split">
            <article className="resource-feature">
              <MediaVisual name="heritage" alt="" ratio="hero" />
              <p className="eyebrow">
                {featuredResource.type} · {featuredResource.readTime}
              </p>
              <h3>{featuredResource.title}</h3>
              <p>{featuredResource.summary}</p>
              <Link className="text-link" to="/resources">
                Get the report
              </Link>
            </article>
            <div className="resource-list">
              {moreResources.map((resource) => (
                <article key={resource.slug}>
                  <p className="eyebrow">
                    {resource.type} · {resource.readTime}
                  </p>
                  <h3>{resource.title}</h3>
                  <Link className="text-link" to="/resources">
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-evidence-note">
        <div className="wrap">
          <EvidenceNote />
        </div>
      </section>

      <CtaBand
        title="Solve the communications challenge in front of you."
        body="Bring the operation, the deployment constraint, or the partner question."
        primary={{ label: 'Talk to an Expert', to: '/contact' }}
        secondary={{ label: 'Become a Partner', to: '/partners' }}
      />
    </>
  )
}
