import { OfferingDetail } from '@/components/offering-detail'
import { CinemaInterior } from '@/components/cinema-interior'
import { storyImage } from '@/content/cinema'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Eyebrow } from '@/components/ui'

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
  const { item, collection } = await load(params)
  const interest = encodeURIComponent(item.title)

  if (item.kind === 'product' || item.kind === 'solution') return <OfferingDetail item={item} />

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
        <CinemaInterior eyebrow={item.eyebrow} title={item.headline} body={item.outcome} image={storyImage(item.slug,collection)} href={`/contact?interest=${interest}`} action="Talk to an expert" />
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

