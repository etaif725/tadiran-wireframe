import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { Breadcrumb } from '../components/Breadcrumb'
import { CtaBand } from '../components/CtaBand'
import { EvidenceNote } from '../components/EvidenceNote'
import { FaqAccordion } from '../components/FaqAccordion'
import { ProductInterface } from '../components/ProductInterface'
import { relatedSolutionsByProduct } from '../content/catalog'
import { getProduct, solutionFamilies } from '../data/site'

const productPromise: Record<string, { headline: string; body: string; moments: string[] }> = {
  aeonix: {
    headline: 'The communications core for the enterprise you have now.',
    body: 'Aeonix brings voice, collaboration, routing, mobility, and administration together across cloud, hybrid, and on-premise environments.',
    moments: ['Connect sites and teams', 'Unify identities and devices', 'Design for continuity'],
  },
  omnicx: {
    headline: 'Stop making your agents switch tabs.',
    body: 'OmniCX gives agents and supervisors one view of voice, digital channels, customer context, quality, and AI-assisted action.',
    moments: ['All channels, one screen', 'Context through every handoff', 'Quality across the journey'],
  },
  ava: {
    headline: 'Useful AI inside the conversation.',
    body: 'AVA supports routing, prompts, summaries, and agent workflows while keeping governance and human control visible.',
    moments: ['Understand intent', 'Guide the interaction', 'Capture the next action'],
  },
  'recording-quality': {
    headline: 'Turn every interaction into a quality opportunity.',
    body: 'Connect secure recording, evaluation, analytics, and coaching across the environments where customer and operational conversations happen.',
    moments: ['Capture securely', 'Evaluate consistently', 'Coach with context'],
  },
  analytics: {
    headline: 'See what the communications estate is telling you.',
    body: 'Transform interaction and operational data into dashboards, reporting, and natural-language questions leaders can use.',
    moments: ['Monitor the operation', 'Find patterns faster', 'Move from insight to action'],
  },
  'mobile-touch': {
    headline: 'One enterprise identity across desk, mobile, and field.',
    body: 'Extend communications beyond the desk with fixed-mobile convergence and policy-aware access for distributed teams.',
    moments: ['Move between devices', 'Keep one business identity', 'Support field operations'],
  },
}

export function ProductDetail() {
  const { slug } = useParams()
  const item = slug ? getProduct(slug) : undefined
  const [activeChapter, setActiveChapter] = useState(0)

  if (!item) return <Navigate to="/products" replace />

  const promise = productPromise[item.slug] ?? productPromise.aeonix
  const chapterBodies = [
    `Start with ${item.chips[0]?.toLowerCase() ?? 'the first capability'} as the entry point into the workflow.`,
    `Move into ${item.chips[1]?.toLowerCase() ?? 'context'} so the next action stays attached to the conversation.`,
    `Use ${item.chips[2]?.toLowerCase() ?? 'quality'} to keep supervisors and operators aligned.`,
    `Close with ${item.chips[3]?.toLowerCase() ?? 'reporting'} so the estate stays measurable.`,
  ]

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: item.title }]} />

      <div className="wrap page-hero">
        <section className="hero detail-hero">
          <div className="hero-copy">
            <p className="eyebrow">{item.family}</p>
            <h1>{item.title}</h1>
            <p>{promise.body}</p>
            <div className="btn-row">
              <Link className="btn" to={`/contact?intent=demo&product=${item.slug}`}>
                Request a Tailored Demo
              </Link>
              <Link className="btn btn-secondary" to="/solutions">
                See related solutions
              </Link>
            </div>
          </div>
          <ProductInterface
            variant={item.slug === 'analytics' || item.slug === 'recording-quality' ? 'analytics' : 'cx'}
            title={`${item.title} product interface`}
          />
        </section>
      </div>

      <section className="section-tight glance-index">
        <div className="wrap glance-index__row">
          {item.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </section>

      <nav className="detail-anchor" aria-label="On this page">
        <div className="wrap">
          <span>On this page</span>
          <a href="#promise">Product promise</a>
          <a href="#experience">Experience</a>
          <a href="#platform">Platform fit</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="section product-promise" id="promise">
        <div className="wrap product-promise__grid">
          <div>
            <p className="eyebrow">What changes for the user</p>
            <h2>{promise.headline}</h2>
          </div>
          <div className="product-promise__moments">
            {promise.moments.map((moment, index) => (
              <div key={moment}>
                <span>0{index + 1}</span>
                <strong>{moment}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-experience" id="experience">
        <div className="wrap">
          <div className="product-experience__intro">
            <div>
              <p className="eyebrow">See the workflow</p>
              <h2>Show the product doing the work.</h2>
            </div>
            <p>
              Follow the workflow from the first interaction through context, action, quality, and
              the next operational step.
            </p>
          </div>
          <div className="product-experience__stage">
            <div>
              <ProductInterface
                variant={
                  item.slug === 'analytics' || item.slug === 'recording-quality'
                    ? 'analytics'
                    : item.slug === 'mobile-touch'
                      ? 'operations'
                      : 'cx'
                }
                title={`${item.title} guided product walkthrough`}
              />
              <p className="product-experience__caption">{chapterBodies[activeChapter]}</p>
            </div>
            <div className="product-experience__chapters">
              {item.chips.map((chip, index) => (
                <button
                  type="button"
                  key={chip}
                  aria-pressed={activeChapter === index}
                  onClick={() => setActiveChapter(index)}
                >
                  <span>0{index + 1}</span>
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section product-platform-fit" id="platform">
        <div className="wrap product-platform-fit__grid">
          <div>
            <p className="eyebrow">Part of a connected portfolio</p>
            <h2>One product. A broader operating system.</h2>
            <p className="lede">
              Show how this product connects to communications, customer experience, AI, quality,
              integrations, and deployment choices.
            </p>
          </div>
          <ArchitectureDiagram title={`${item.title} platform relationship`} />
        </div>
      </section>

      <section className="section product-tech">
        <div className="wrap product-tech__grid">
          {[
            ['Deployment', 'Cloud, hybrid, and on-premise options where applicable'],
            ['Security', 'Access, data handling, and compliance details after technical review'],
            ['Integration', 'CRM, vertical systems, collaboration, analytics, and APIs'],
          ].map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-layout">
          <div>
            <p className="eyebrow">Product evaluation</p>
            <h2>Questions before the demo.</h2>
          </div>
          <FaqAccordion
            items={[
              {
                q: 'How does this product fit the wider Tadiran portfolio?',
                a: 'The final taxonomy will show the relationship among Tadiran, Aeonix, OmniCX, recording, assistance, and analytics.',
              },
              {
                q: 'Can we see this in our deployment model?',
                a: 'The tailored demo should reflect the customer’s cloud, hybrid, or on-premise constraints.',
              },
              {
                q: 'Is a public product tour available?',
                a: 'Video and interactive-demo availability remain subject to client confirmation.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section related-strip">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Related solutions</p>
              <h2>Start from the business outcome.</h2>
            </div>
          </div>
          <div className="related-strip__grid">
            {solutionFamilies
              .filter((solution) => (relatedSolutionsByProduct[item.slug] ?? []).includes(solution.slug))
              .map((solution) => (
              <Link key={solution.slug} to={`/solutions/${solution.slug}`}>
                <span>{solution.eyebrow}</span>
                <strong>{solution.title}</strong>
                <b aria-hidden="true">↗</b>
              </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section-evidence-note" id="proof">
        <div className="wrap">
          <EvidenceNote label={`${item.title} deployment proof and product stories`} />
        </div>
      </section>

      <CtaBand
        title={`See ${item.title} in your operating environment.`}
        primary={{ label: 'Request a Tailored Demo', to: `/contact?intent=demo&product=${item.slug}` }}
        secondary={{ label: 'Talk to an Expert', to: '/contact' }}
      />
    </>
  )
}
