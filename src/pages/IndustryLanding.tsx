import { Link, Navigate, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { MediaVisual } from '../components/MediaVisual'
import { relatedSolutionsByIndustry } from '../content/catalog'
import { getIndustry, solutionFamilies } from '../data/site'

const pressureCopy: Record<string, Array<{ title: string; body: string }>> = {
  transportation: [
    { title: 'Coordinate moving people and assets', body: 'Keep control rooms and field teams aligned when routes, crews, and incidents change.' },
    { title: 'Protect dispatch and emergency paths', body: 'Preserve priority voice and escalation when the network is under stress.' },
    { title: 'Connect field and control-room teams', body: 'One identity and one conversation across desk, radio-adjacent, and mobile work.' },
  ],
  'power-utilities': [
    { title: 'Keep control-room communications available', body: 'Continuity for operators when the estate cannot pause for a cutover.' },
    { title: 'Coordinate field response during disruption', body: 'Reach crews with context, not just a ring tone.' },
    { title: 'Protect access to critical systems', body: 'Deployment and access controls stay visible to IT and security.' },
  ],
  healthcare: [
    { title: 'Reach care teams across sites and devices', body: 'Clinical and administrative staff need one reachable identity.' },
    { title: 'Connect clinical and administrative workflows', body: 'Nurse call, paging, and desk communications should not fragment the response.' },
    { title: 'Support secure, resilient communications', body: 'Recording, access, and continuity requirements stay in the design conversation.' },
  ],
  'assisted-living': [
    { title: 'Route resident alerts to the right staff', body: 'Alerts must land with context and ownership.' },
    { title: 'Coordinate response across the property', body: 'Front desk, caregivers, and facilities share one operating thread.' },
    { title: 'Keep a traceable communications record', body: 'Capture what happened when review and coaching matter.' },
  ],
  hospitality: [
    { title: 'Connect guest service, front desk, and operations', body: 'Service recovery depends on a shared conversation, not siloed phones.' },
    { title: 'Integrate communications with PMS workflows', body: 'Guest context should travel with the interaction.' },
    { title: 'Maintain service across every property', body: 'Multi-site estates need a common model without losing local control.' },
  ],
  education: [
    { title: 'Coordinate campus safety and administration', body: 'Daily ops and emergency paths need the same foundation.' },
    { title: 'Reach staff across rooms and devices', body: 'Classrooms, offices, and security teams stay reachable.' },
    { title: 'Support emergency and daily communications', body: 'One estate for routine work and high-priority events.' },
  ],
  'alarm-systems': [
    { title: 'Receive and route alarms without delay', body: 'Incoming events need immediate, owned handling.' },
    { title: 'Coordinate dispatch and escalation', body: 'Operators move from alert to action with the full path visible.' },
    { title: 'Record the complete response path', body: 'Traceability supports review, training, and compliance conversations.' },
  ],
  'financial-services': [
    { title: 'Protect regulated customer interactions', body: 'Recording, quality, and oversight sit inside the operating design.' },
    { title: 'Connect digital and voice service', body: 'Customers should not restart the story on every channel.' },
    { title: 'Support recording, quality, and oversight', body: 'Supervisors need journey visibility, not sampled fragments.' },
  ],
}

const industryMedia: Record<string, string> = {
  transportation: 'transportation',
  'power-utilities': 'utilities',
  healthcare: 'healthcare',
  'assisted-living': 'healthcare',
  hospitality: 'hospitality',
  education: 'education',
  'alarm-systems': 'utilities',
  'financial-services': 'enterprise-hero',
}

const technicalCopy: Record<string, string> = {
  transportation:
    'Prioritize dispatch continuity, field mobility, recording, and resilient routing across control-room and field operations.',
  'power-utilities':
    'Plan for control-room availability, paging, secure access, and redundancy during disruption.',
  healthcare:
    'Connect clinical coordination, secure recording, campus mobility, and existing care-adjacent systems.',
  'assisted-living':
    'Join resident alerts, staff mobility, response ownership, and recording across the property.',
  hospitality:
    'Connect front desk, guest service, help desk, and PMS workflows without replacing the property estate.',
  education:
    'Support daily campus communications and emergency routing across classrooms, administration, and security.',
  'alarm-systems':
    'Keep alarm receiving, dispatch, recording, and escalation on resilient, traceable communications paths.',
  'financial-services':
    'Hold secure recording, quality, omnichannel service, and deployment controls for sector review.',
}

const heroCopy: Record<string, string> = {
  transportation: 'Keep dispatch and field operations connected.',
  'power-utilities': 'Protect communications across grid and plant operations.',
  healthcare: 'Connect care teams across every site and shift.',
  'assisted-living': 'Route resident needs to the right staff, fast.',
  hospitality: 'Connect every guest request to the right team.',
  education: 'Keep campus communications ready for every incident.',
  'alarm-systems': 'Move from alarm receipt to owned response.',
  'financial-services': 'Keep regulated customer conversations controlled and traceable.',
}

export function IndustryLanding() {
  const { slug } = useParams()
  const item = slug ? getIndustry(slug) : undefined

  if (!item) return <Navigate to="/industries" replace />

  const pressures = pressureCopy[item.slug] ?? pressureCopy.transportation

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Industries', to: '/industries' },
          { label: item.title },
        ]}
      />

      <section className="industry-detail-masthead">
        <MediaVisual
          name={industryMedia[item.slug] ?? 'enterprise-hero'}
          alt={`${item.title} mission-critical communications environment`}
          ratio="hero"
          priority
        />
        <div className="wrap industry-detail-masthead__inner">
          <div className="industry-detail-masthead__copy">
            <p className="eyebrow">
              {item.future ? 'Future industry template' : `${item.title} solutions`}
            </p>
            <h1>{heroCopy[item.slug] ?? `${item.title} communications that fit the operation.`}</h1>
            <p>{item.outcome}</p>
            <div className="btn-row">
              <Link className="btn" to={`/contact?intent=industry&industry=${item.slug}`}>
                Discuss {item.title}
              </Link>
              <Link className="btn btn-secondary" to="/industries">
                View all industries
              </Link>
            </div>
            {item.future ? (
              <p className="industry-detail-hero__future">
                Sector strategy and public deployment proof are pending approval.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section industry-detail-overview">
        <div className="wrap industry-detail-overview__grid">
          <div className="industry-detail-overview__intro">
            <p className="eyebrow">The operating reality</p>
            <h2>{item.problem}</h2>
            <p>{technicalCopy[item.slug] ?? technicalCopy.transportation}</p>
          </div>

          <div className="industry-detail-pressures">
            {pressures.map((pressure, index) => (
              <article key={pressure.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{pressure.title}</h3>
                  <p>{pressure.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section industry-detail-path">
        <div className="wrap industry-detail-path__grid">
          <div className="industry-detail-workflows">
            <p className="eyebrow">Priority workflows</p>
            <h2>What the communications path needs to support.</h2>
            <ol>
              {item.workflows.map((workflow, index) => (
                <li key={workflow}>
                  <span>0{index + 1}</span>
                  <strong>{workflow}</strong>
                </li>
              ))}
            </ol>
            <p>
              Deployment and integration are reviewed against the systems and controls already in
              place.
            </p>
          </div>

          <div className="industry-detail-related">
            <p className="eyebrow">Related solutions</p>
            <h2>Capabilities that fit this environment.</h2>
            <div className="industry-detail-related__list">
              {solutionFamilies
                .filter((solution) =>
                  (relatedSolutionsByIndustry[item.slug] ?? []).includes(solution.slug),
                )
                .map((solution) => (
                  <Link key={solution.slug} to={`/solutions/${solution.slug}`}>
                    <span>
                      <small>{solution.eyebrow}</small>
                      <strong>{solution.title}</strong>
                    </span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="industry-detail-contact">
        <div className="wrap industry-detail-contact__inner">
          <div>
            <p className="eyebrow">Talk to Tadiran</p>
            <h2>Discuss your {item.title.toLowerCase()} environment.</h2>
          </div>
          <div className="btn-row">
            <Link className="btn" to={`/contact?intent=industry&industry=${item.slug}`}>
              Discuss {item.title}
            </Link>
            <Link className="btn btn-secondary" to="/industries">
              View all industries
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
