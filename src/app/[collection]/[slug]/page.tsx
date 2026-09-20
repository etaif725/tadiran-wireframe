import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Action, Eyebrow } from '@/components/ui'
import { MediaFrame } from '@/components/media-frame'
import {
  findByHref,
  getIndustry,
  getProduct,
  getSolution,
  industries,
  products,
  solutions,
} from '@/content/portfolio'

export const dynamicParams = false

const catalogs = { products, solutions, industries }

export function generateStaticParams() {
  return Object.entries(catalogs).flatMap(([collection, items]) =>
    items.map((item) => ({ collection, slug: item.slug })),
  )
}

async function load(params: Promise<{ collection: string; slug: string }>) {
  const { collection, slug } = await params
  if (collection === 'products') {
    const item = getProduct(slug)
    if (!item) notFound()
    return { collection, item }
  }
  if (collection === 'solutions') {
    const item = getSolution(slug)
    if (!item) notFound()
    return { collection, item }
  }
  if (collection === 'industries') {
    const item = getIndustry(slug)
    if (!item) notFound()
    return { collection, item }
  }
  notFound()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ collection: string; slug: string }>
}): Promise<Metadata> {
  const { item, collection } = await load(params)
  const description = 'summary' in item ? item.summary : item.outcome
  return {
    title: item.title,
    description,
    robots: item.status === 'future' || item.status === 'draft' ? { index: false, follow: false } : undefined,
    alternates: { canonical: `/${collection}/${item.slug}` },
  }
}

function Related({ hrefs }: { hrefs: string[] }) {
  return (
    <div className="related-grid">
      {hrefs.map((href) => (
        <Link className="related-link" href={href} key={href}>
          {findByHref(href)?.title ||
            (href.endsWith('apply') ? 'Become a Partner' : href.includes('partners') ? 'Partner Program' : href)}
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
    </div>
  )
}

export default async function DetailPage({ params }: { params: Promise<{ collection: string; slug: string }> }) {
  const { item } = await load(params)
  const interest = encodeURIComponent(item.title)

  if (item.kind === 'product') {
    return (
      <div className="page detail-page detail-page--product">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span aria-current="page">{item.title}</span>
          </nav>
          <section className="split-hero">
            <div>
              <Eyebrow>{item.eyebrow}</Eyebrow>
              <h1>{item.headline}</h1>
              <p>{item.summary}</p>
              <Action href={`/contact?intent=demo&interest=${interest}`}>Request a tailored demo</Action>
            </div>
            <MediaFrame name={item.image} alt={`${item.title} environment`} priority />
          </section>
        </div>
        <section className="section detail-section detail-section--intro">
          <div className="container trust-split">
            <div>
              <Eyebrow>Who it is for</Eyebrow>
              <h2>{item.family}</h2>
            </div>
            <p>{item.audience}</p>
          </div>
        </section>
        <section className="section detail-section">
          <div className="container">
            <Eyebrow>Capabilities</Eyebrow>
            <h2>What the product is asked to do.</h2>
            <div className="stack-list">
              {item.capabilities.map((capability) => (
                <article className="stack-item" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section detail-section detail-section--dark">
          <div className="container trust-split">
            <div>
              <Eyebrow>Deployment</Eyebrow>
              <h2>Fit the estate first.</h2>
            </div>
            <p>{item.deployment}</p>
          </div>
        </section>
        <section className="section detail-section detail-section--related">
          <div className="container">
            <Eyebrow>Continue</Eyebrow>
            <Related hrefs={item.related} />
          </div>
        </section>
      </div>
    )
  }

  if (item.kind === 'solution') {
    return (
      <div className="page detail-page detail-page--solution">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
            <span>/</span>
            <span aria-current="page">{item.title}</span>
          </nav>
          <section className="split-hero">
            <div>
              <Eyebrow>{item.eyebrow}</Eyebrow>
              <h1>{item.headline}</h1>
              <p>{item.outcome}</p>
              <Action href={`/contact?intent=solution&interest=${interest}`}>Discuss your requirements</Action>
            </div>
            <MediaFrame name={item.image} alt="" priority />
          </section>
        </div>
        <section className="section detail-section detail-section--intro">
          <div className="container trust-split">
            <div>
              <Eyebrow>The operating problem</Eyebrow>
              <h2>Why this page exists.</h2>
            </div>
            <p>{item.problem}</p>
          </div>
        </section>
        <section className="section detail-section">
          <div className="container">
            <div className="chip-row">
              {item.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <Eyebrow>Workflows</Eyebrow>
            <div className="stack-list">
              {item.workflows.map((workflow) => (
                <article className="stack-item" key={workflow}>
                  <h3>{workflow}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section detail-section detail-section--dark">
          <div className="container trust-split">
            <div>
              <Eyebrow>Deployment stance</Eyebrow>
              <h2>Choose the constraint, then the model.</h2>
            </div>
            <p>{item.deployment}</p>
          </div>
        </section>
        <section className="section detail-section detail-section--related">
          <div className="container">
            <Eyebrow>Mapped products</Eyebrow>
            <Related hrefs={item.products} />
            {item.faq.length ? (
              <div className="faq-list detail-faq">
                {item.faq.map((itemFaq) => (
                  <details key={itemFaq.q}>
                    <summary>{itemFaq.q}</summary>
                    <p>{itemFaq.a}</p>
                  </details>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page detail-page detail-page--industry">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/industries">Industries</Link>
          <span>/</span>
          <span aria-current="page">{item.title}</span>
        </nav>
        <section className="split-hero">
          <div>
            <Eyebrow>{item.eyebrow}</Eyebrow>
            <h1>{item.headline}</h1>
            <p>{item.outcome}</p>
            {item.status === 'future' ? (
              <p className="notice">This sector pathway is under evaluation. The conversation is still open.</p>
            ) : null}
            <Action href={`/contact?intent=industry&interest=${interest}`}>Discuss this environment</Action>
          </div>
          <MediaFrame name={item.image} alt="" priority />
        </section>
      </div>
      <section className="section detail-section detail-section--intro">
        <div className="container">
          <Eyebrow>Operational pressures</Eyebrow>
          <div className="stack-list">
            {item.pressures.map((pressure) => (
              <article className="stack-item" key={pressure}>
                <h3>{pressure}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section detail-section detail-section--dark">
        <div className="container">
          <Eyebrow>Priority workflows</Eyebrow>
          <div className="chip-row">
            {item.workflows.map((workflow) => (
              <span className="chip" key={workflow}>
                {workflow}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section detail-section detail-section--related">
        <div className="container">
          <Eyebrow>Relevant products and solutions</Eyebrow>
          <Related hrefs={[...item.products, ...item.solutions]} />
        </div>
      </section>
    </div>
  )
}
