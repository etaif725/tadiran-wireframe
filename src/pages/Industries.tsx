import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { MediaVisual } from '../components/MediaVisual'
import { industries } from '../data/site'

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

export function Industries() {
  return (
    <>
      <section className="industry-hero-editorial">
        <div className="wrap industry-hero-editorial__grid">
          <div className="industry-hero-editorial__copy">
            <p className="eyebrow">Industries</p>
            <h1>Built around the work that cannot fail.</h1>
            <p>
              Communications change with the environment. Dispatch, clinical coordination,
              guest service, campus safety, and alarm response each demand a different operating
              picture.
            </p>
            <div className="btn-row">
              <a className="btn" href="#industry-browser">
                Choose your industry
              </a>
              <Link className="btn btn-secondary" to="/contact?intent=industry">
                Discuss your environment
              </Link>
            </div>
            <p className="industry-hero-editorial__note">
              One communications foundation. Vertical workflows, integrations, and deployment
              choices shaped around the operation.
            </p>
          </div>

          <div className="industry-hero-editorial__mosaic" aria-label="Featured industries">
            <Link className="industry-hero-editorial__primary" to="/industries/transportation">
              <MediaVisual
                name="transportation"
                alt="Transportation control room communications"
                ratio="hero"
                priority
              />
              <span>
                <small>Dispatch and continuity</small>
                Transportation
              </span>
            </Link>
            <div className="industry-hero-editorial__secondary">
              <Link to="/industries/healthcare">
                <MediaVisual
                  name="healthcare"
                  alt="Healthcare communications environment"
                  priority
                />
                <span>Healthcare</span>
              </Link>
              <Link to="/industries/hospitality">
                <MediaVisual
                  name="hospitality"
                  alt="Hospitality communications environment"
                  priority
                />
                <span>Hospitality</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section industry-directory" id="industry-browser">
        <div className="wrap">
          <div className="industry-directory__intro">
            <div>
              <p className="eyebrow">Industries</p>
              <h2>Explore communications for your environment.</h2>
            </div>
            <p>
              Each industry page connects the operating challenge to relevant workflows,
              integrations, and deployment choices.
            </p>
          </div>

          <div className="industry-directory__grid">
            {industries.map((item, index) => (
              <article
                className={`industry-directory__card${index < 2 ? ' is-featured' : ''}${
                  item.future ? ' is-future' : ''
                }`}
                key={item.slug}
              >
                <MediaVisual
                  name={industryMedia[item.slug] ?? 'enterprise-hero'}
                  alt={`${item.title} communications operating environment`}
                />
                {item.future ? (
                  <span className="industry-directory__future">Future template</span>
                ) : null}
                <div className="industry-directory__content">
                  <p className="eyebrow">{item.workflows[0]}</p>
                  <h3>
                    <Link to={`/industries/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p>{item.problem}</p>
                  <strong>{item.outcome}</strong>
                  <div className="chips">
                    {item.workflows.slice(0, 3).map((workflow) => (
                      <span className="chip" key={workflow}>
                        {workflow}
                      </span>
                    ))}
                  </div>
                  <Link className="text-link" to={`/industries/${item.slug}`}>
                    Explore {item.title}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss your operating environment"
        primary={{ label: 'Discuss Your Requirements', to: '/contact?intent=industry' }}
        secondary={{ label: 'Partner with Tadiran', to: '/partners' }}
        media="utilities"
      />
    </>
  )
}
