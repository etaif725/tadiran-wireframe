import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { ProductInterface } from '../components/ProductInterface'
import { getProduct, products } from '../data/site'

const aeonixBenefits = [
  ['Voice, video, collaboration', 'One identity across sites, offices, and field teams.'],
  ['Routing and dispatch', 'Hunt groups, overflow, and attendant stay on the same platform.'],
  ['Mobility on the same number', 'Mobile / Touch carries the desk identity into the field.'],
  ['Deployment that fits', 'Cloud, hybrid, or on-premise without a second stack.'],
]

const omnicxPoints = [
  'Voice and digital on one customer timeline',
  'Quality and coaching attached to the conversation',
  'CRM and API paths without a rip-and-replace',
]

const catalog = products.filter((item) => item.slug !== 'aeonix' && item.slug !== 'omnicx')

export function Products() {
  const omnicx = getProduct('omnicx')

  return (
    <>
      <section className="product-hero-editorial" id="aeonix">
        <div className="wrap">
          <div className="product-hero-editorial__heading">
            <div>
              <p className="eyebrow">Products · Aeonix</p>
              <h1>One communications foundation. Multiple ways to use it.</h1>
            </div>
            <div>
              <p>
                Aeonix brings voice, collaboration, routing, mobility, and administration together
                across cloud, hybrid, and on-premise environments.
              </p>
              <div className="btn-row">
                <Link className="btn" to="/products/aeonix">
                  View Aeonix
                </Link>
                <Link className="btn btn-secondary" to="/contact">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
          <div className="product-hero-editorial__stage">
            <div className="product-hero-editorial__label">
              <span>01 · Communications core</span>
              <strong>Aeonix Unified Communications</strong>
            </div>
            <ProductInterface
              variant="uc"
              title="Aeonix site, attendant, and dispatch workspace"
            />
          </div>
        </div>
      </section>

      <section className="section product-capabilities">
        <div className="wrap">
          <p className="eyebrow">What Aeonix holds together</p>
          <div className="product-capabilities__band">
            {aeonixBenefits.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-index">
        <div className="wrap">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">The portfolio</p>
              <h2>Everything else attaches here.</h2>
            </div>
            <p className="lede">
              OmniCX, intelligence, and mobility stay on the Aeonix story. Naming stays provisional
              until the product taxonomy is confirmed.
            </p>
          </div>

          {omnicx ? (
            <article className="product-lead" id="omnicx">
              <div>
                <p className="section-index">02 — OmniCX</p>
                <p className="eyebrow">{omnicx.family}</p>
                <h3>
                  <Link to="/products/omnicx">{omnicx.title}</Link>
                </h3>
                <p>{omnicx.summary}</p>
                <ul>
                  {omnicxPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chips">
                  {omnicx.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <Link className="btn" to="/products/omnicx">
                  View OmniCX
                </Link>
              </div>
            </article>
          ) : null}

          <div className="product-index__grid">
            {catalog.map((item) => (
              <article className="product-card" id={item.slug} key={item.slug}>
                <p className="eyebrow">{item.family}</p>
                <h3>
                  <Link to={`/products/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.summary}</p>
                <div className="chips">
                  {item.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <Link className="text-link" to={`/products/${item.slug}`}>
                  View product
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See how the portfolio fits your environment."
        primary={{ label: 'Request a Tailored Demo', to: '/contact?intent=demo' }}
        secondary={{ label: 'View solutions', to: '/solutions' }}
        media="enterprise-hero"
      />
    </>
  )
}
