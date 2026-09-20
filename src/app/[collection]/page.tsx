import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/ui'
import { MediaFrame } from '@/components/media-frame'
import { collectionIntro, industries, products, solutions, type Collection } from '@/content/portfolio'

export const dynamicParams = false

const catalogs = { products, solutions, industries }

export function generateStaticParams() {
  return Object.keys(catalogs).map((collection) => ({ collection }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ collection: string }>
}): Promise<Metadata> {
  const { collection } = await params
  const intro = collectionIntro[collection as Collection]
  if (!intro) return {}
  return { title: intro.label, description: intro.summary, alternates: { canonical: `/${collection}` } }
}

export default async function CollectionPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params
  if (!Object.hasOwn(catalogs, collection)) notFound()
  const c = collection as Collection
  const intro = collectionIntro[c]
  const items = catalogs[c]

  return (
    <div className={`page collection-page collection-page--${c}`}>
      <PageHero eyebrow={intro.label} title={intro.headline} body={intro.summary} />
      <section className="section">
        <div className="container stack-list">
          {items.map((entry, index) => (
            <Link className="pathway" href={`/${c}/${entry.slug}`} key={entry.slug}>
              <small className="pathway__index">{String(index + 1).padStart(2, '0')}</small>
              <div className="pathway__media">
                <MediaFrame name={entry.image} alt="" />
              </div>
              <span>
                <strong>{entry.title}</strong>
                {'summary' in entry ? entry.summary : 'outcome' in entry ? entry.outcome : ''}
                {entry.status === 'future' ? ' Pathway under evaluation.' : ''}
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
