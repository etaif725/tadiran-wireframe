import { Link, Navigate, useParams } from 'react-router-dom'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { Breadcrumb } from '../components/Breadcrumb'
import { CtaBand } from '../components/CtaBand'
import { DeploymentChooser } from '../components/DeploymentChooser'
import { EvidenceNote } from '../components/EvidenceNote'
import { FaqAccordion } from '../components/FaqAccordion'
import { MediaVisual } from '../components/MediaVisual'
import { ProductInterface } from '../components/ProductInterface'
import { relatedProductsBySolution } from '../content/catalog'
import { getSolution, products } from '../data/site'

type DetailContent = {
  hero: string
  contextTitle: string
  contextBody: string
  statement: string
  capabilities: Array<{ title: string; body: string }>
  roles: Array<{ title: string; body: string }>
}

const detailContent: Record<string, DetailContent> = {
  'enterprise-communications': {
    hero: 'Keep every team, site, and device connected without forcing the operation into one deployment model.',
    contextTitle: 'The enterprise has changed. The communications estate has not always kept up.',
    contextBody:
      'Distributed teams, mixed infrastructure, and mobile work create friction when voice, messaging, video, and routing live in separate systems. Tadiran brings those interactions onto one resilient foundation.',
    statement: 'One communications core. Every place work happens.',
    capabilities: [
      { title: 'Unified calling and collaboration', body: 'Bring voice, video, messaging, and presence into one operating experience.' },
      { title: 'Hybrid mobility', body: 'Connect desk, mobile, and field users with policy-aware fixed-mobile convergence.' },
      { title: 'Intelligent routing', body: 'Move each interaction to the right person, team, or workflow with less manual handling.' },
      { title: 'Operational continuity', body: 'Design for branch, campus, and critical-site resilience without hiding the technical detail.' },
    ],
    roles: [
      { title: 'For IT leaders', body: 'Simplify administration across a mixed estate.' },
      { title: 'For operations', body: 'Keep teams reachable through change and disruption.' },
      { title: 'For employees', body: 'Use one identity across devices and locations.' },
    ],
  },
  'omnichannel-cx': {
    hero: 'Give agents one place to see, understand, and continue every customer conversation.',
    contextTitle: 'Stop making your agents switch tabs.',
    contextBody:
      'Customers move between voice, chat, messaging, email, and social channels. Agents should not rebuild the context at every handoff. OmniCX brings channels, customer history, guidance, and quality into one screen.',
    statement: 'All channels. One screen. A conversation that keeps its context.',
    capabilities: [
      { title: 'Omnichannel workspace', body: 'Unify voice and digital interactions in a single agent experience.' },
      { title: 'AI-driven assistance', body: 'Surface prompts, summaries, and relevant context while the interaction is happening.' },
      { title: 'Quality intelligence', body: 'Connect recording, evaluation, and coaching to the complete customer journey.' },
      { title: 'Journey visibility', body: 'Give supervisors a shared view of queues, performance, and customer movement.' },
    ],
    roles: [
      { title: 'For CX leaders', body: 'See the experience across channels and teams.' },
      { title: 'For supervisors', body: 'Move from sampled calls to broader quality visibility.' },
      { title: 'For agents', body: 'Work with the customer context in one place.' },
    ],
  },
  'ai-analytics': {
    hero: 'Turn voice and digital interactions into useful guidance, quality insight, and operational action.',
    contextTitle: 'AI creates value when it is connected to the work.',
    contextBody:
      'Practical AI should help route interactions, prepare agents, summarize conversations, evaluate quality, and reveal patterns. Governance and human control remain visible throughout the experience.',
    statement: 'From voice to data. From data to the next best action.',
    capabilities: [
      { title: 'Agent assistance', body: 'Deliver prompts and contextual guidance without adding another workspace.' },
      { title: 'Transcription and summaries', body: 'Create a usable record of the interaction and its next steps.' },
      { title: 'Quality automation', body: 'Expand evaluation coverage while keeping supervisors in control.' },
      { title: 'Natural-language analytics', body: 'Help leaders explore operational questions without building another report.' },
    ],
    roles: [
      { title: 'For executives', body: 'Connect interaction patterns to business priorities.' },
      { title: 'For quality teams', body: 'Focus human review where it matters most.' },
      { title: 'For agents', body: 'Spend less time documenting and searching.' },
    ],
  },
  'critical-communications': {
    hero: 'Protect the voice, dispatch, and emergency workflows that keep high-stakes operations moving.',
    contextTitle: 'Some conversations cannot wait for the network to recover.',
    contextBody:
      'Transport, utilities, healthcare, education, and alarm operations need communications designed for continuity. The solution story combines resilient voice, dispatch, paging, recording, and domain integrations.',
    statement: 'Communications built around the moment failure is not an option.',
    capabilities: [
      { title: 'Dispatch and attendant workflows', body: 'Coordinate people, incidents, and field operations from one operational view.' },
      { title: 'Resilient voice', body: 'Maintain communications paths across sites and infrastructure conditions.' },
      { title: 'Secure recording', body: 'Support traceability and review where the workflow requires it.' },
      { title: 'Vertical integration', body: 'Connect paging, alarms, nurse call, PMS, and other domain systems.' },
    ],
    roles: [
      { title: 'For control rooms', body: 'Coordinate the incident without losing the communications thread.' },
      { title: 'For field teams', body: 'Stay connected across devices and locations.' },
      { title: 'For IT and security', body: 'Preserve control over deployment and access.' },
    ],
  },
  'security-resilience': {
    hero: 'Make communications health, continuity, and control visible before an incident tests them.',
    contextTitle: 'Reliability needs an operating model, not a claim.',
    contextBody:
      'Resilience combines architecture, monitoring, access control, administration, and response. The website should expose enough technical structure for evaluators to start a serious design conversation.',
    statement: 'See the system. Protect the service. Recover with intent.',
    capabilities: [
      { title: 'Resilient architecture', body: 'Plan redundancy around the sites, users, and services that matter.' },
      { title: 'Health visibility', body: 'Bring status, alerts, and reporting into an actionable operations view.' },
      { title: 'Controlled access', body: 'Apply identity and policy across administration and user access.' },
      { title: 'Deployment control', body: 'Choose cloud, hybrid, on-premise, or air-gapped patterns where applicable.' },
    ],
    roles: [
      { title: 'For infrastructure teams', body: 'Understand health and dependencies.' },
      { title: 'For security teams', body: 'Review access, data, and deployment posture.' },
      { title: 'For operations', body: 'Know what happens when a component fails.' },
    ],
  },
  'integrations-deployment': {
    hero: 'Fit communications into the systems, policies, and deployment reality the enterprise already has.',
    contextTitle: 'A unified experience still has to connect to the enterprise.',
    contextBody:
      'CRM, service management, hospitality, dispatch, analytics, identity, and custom workflows all shape the final solution. Deployment choice and integration architecture belong in the same conversation.',
    statement: 'Connect the channels. Connect the data. Keep control of the environment.',
    capabilities: [
      { title: 'CRM and service workflows', body: 'Bring customer context and next actions into the interaction.' },
      { title: 'Vertical systems', body: 'Connect PMS, dispatch, alarms, and other domain platforms.' },
      { title: 'API and OEM pathways', body: 'Support integrators and developers extending the platform.' },
      { title: 'Flexible deployment', body: 'Map cloud, hybrid, and on-premise components to operating constraints.' },
    ],
    roles: [
      { title: 'For architects', body: 'See the platform boundaries and integration points.' },
      { title: 'For developers', body: 'Extend workflows through approved APIs.' },
      { title: 'For partners', body: 'Shape a repeatable package for the customer environment.' },
    ],
  },
}

export function SolutionDetail() {
  const { slug } = useParams()
  const item = slug ? getSolution(slug) : undefined

  if (!item) return <Navigate to="/solutions" replace />

  const content = detailContent[item.slug] ?? detailContent['enterprise-communications']

  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', to: '/solutions' }, { label: item.title }]} />

      <div className="wrap page-hero">
        <section className="hero detail-hero">
          <div className="hero-copy">
            <p className="eyebrow">{item.eyebrow}</p>
            <h1>{item.title}</h1>
            <p>{content.hero}</p>
            <div className="btn-row">
              <Link className="btn" to={`/contact?intent=demo&solution=${item.slug}`}>
                Request a Tailored Demo
              </Link>
              <Link className="btn btn-secondary" to="/contact?intent=technical">
                Talk to a Solutions Expert
              </Link>
            </div>
          </div>
          {item.slug === 'critical-communications' ? (
            <MediaVisual
              name="utilities"
              alt="Critical communications control-room operating environment"
            />
          ) : (
            <ProductInterface
              variant={item.slug === 'ai-analytics' ? 'analytics' : 'cx'}
              title={`${item.title} product workspace`}
            />
          )}
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
          <a href="#context">The challenge</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#architecture">How it works</a>
          <a href="#roles">Who it helps</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>

      <section className="section detail-context" id="context">
        <div className="wrap detail-context__grid">
          <div>
            <p className="eyebrow">Why this matters</p>
            <h2>{content.contextTitle}</h2>
          </div>
          <div className="detail-context__body">
            <p>{content.contextBody}</p>
            <blockquote>{content.statement}</blockquote>
          </div>
        </div>
      </section>

      <section className="section detail-capabilities" id="capabilities">
        <div className="wrap">
          <div className="detail-capabilities__intro">
            <div>
              <p className="eyebrow">Connected capability</p>
              <h2>Designed as one operating experience.</h2>
            </div>
            <p>
              The capability set changes by solution. The structural principle stays consistent:
              explain the outcome, show the interface, then expose technical depth.
            </p>
          </div>
          <div className="detail-capabilities__grid">
            {content.capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span>0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-architecture" id="architecture">
        <div className="wrap detail-architecture__grid">
          <div>
            <p className="eyebrow">One platform story</p>
            <h2>Channels in. Context connected. Action out.</h2>
            <p className="lede">
              A plain-language architecture view links users and channels to the communications
              platform, enterprise systems, quality, and analytics.
            </p>
          </div>
          <ArchitectureDiagram title={`${item.title} architecture flow`} />
        </div>
      </section>

      <section className="section platform-story detail-deployment">
        <div className="wrap">
          <div className="platform-story__intro">
            <div>
              <p className="eyebrow">Your environment sets the model</p>
              <h2>Cloud speed. Hybrid continuity. On-premise control.</h2>
            </div>
            <p>
              Security, resilience, data handling, and deployment details move into a specialist
              conversation. PCI and PII requirements are reviewed with the technical team, not
              shown as uncertified marks.
            </p>
          </div>
          <DeploymentChooser />
        </div>
      </section>

      <section className="section detail-roles" id="roles">
        <div className="wrap">
          <div className="detail-roles__intro">
            <p className="eyebrow">Who evaluates this</p>
            <h2>Different jobs. One solution conversation.</h2>
          </div>
          <div className="detail-roles__grid">
            {content.roles.map((role, index) => (
              <article key={role.title}>
                <span>0{index + 1}</span>
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-buy-path">
        <div className="wrap">
          <div className="detail-buy-path__grid">
            <div>
              <p className="eyebrow">How buyers move next</p>
              <h2>A solution path, not a product dump.</h2>
            </div>
            <ol className="detail-buy-path__steps">
              {[
                ['Map the operating need', 'Outcome first. Technology second.'],
                ['Choose deployment constraints', 'Cloud, hybrid, or on-premise control.'],
                ['Connect systems and roles', 'Integrations, supervisors, and field teams.'],
                ['Request a tailored walkthrough', 'Demo against the estate you already run.'],
              ].map(([title, body], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section detail-integrations">
        <div className="wrap">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">Ecosystem integration</p>
              <h2>Connect the systems behind the conversation.</h2>
            </div>
            <p className="lede">
              CRM, collaboration, PMS, dispatch, analytics, and APIs connect the conversation to
              the systems that drive the next action.
            </p>
          </div>
          <div className="integration-rail">
            {['CRM', 'Collaboration', 'PMS', 'Dispatch', 'Analytics', 'APIs'].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-layout">
          <div>
            <p className="eyebrow">Evaluation questions</p>
            <h2>What buyers ask next.</h2>
          </div>
          <FaqAccordion
            items={[
              {
                q: 'Can this work with our current deployment model?',
                a: 'Yes. The discovery path maps cloud, hybrid, and on-premise constraints before a solution is proposed.',
              },
              {
                q: 'How are AI and data governed?',
                a: 'The final answer depends on the selected capabilities, deployment, data flows, and approved security architecture.',
              },
              {
                q: 'Can Tadiran connect to our existing systems?',
                a: 'Integration requirements are mapped across CRM, collaboration, vertical systems, data, and approved APIs.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section related-strip">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Related products</p>
              <h2>Continue into the platform.</h2>
            </div>
          </div>
          <div className="related-strip__grid">
            {products
              .filter((product) => (relatedProductsBySolution[item.slug] ?? []).includes(product.slug))
              .map((product) => (
              <Link key={product.slug} to={`/products/${product.slug}`}>
                <span>{product.family}</span>
                <strong>{product.title}</strong>
                <b aria-hidden="true">↗</b>
              </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section-evidence-note" id="proof">
        <div className="wrap">
          <EvidenceNote label={`${item.title} case studies and operator proof`} />
        </div>
      </section>

      <CtaBand
        title={`See ${item.title} in your environment.`}
        body="Bring the operating challenge, deployment constraint, or integration question."
        primary={{ label: 'Request a Tailored Demo', to: `/contact?intent=demo&solution=${item.slug}` }}
        secondary={{ label: 'Talk to a Solutions Expert', to: '/contact?intent=technical' }}
      />
    </>
  )
}
