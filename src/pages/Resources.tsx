import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { FaqAccordion } from '../components/FaqAccordion'
import { Hero } from '../components/Hero'
import { MediaVisual } from '../components/MediaVisual'
import { resources, type ResourceType } from '../content/catalog'

const filters = [
  { id: 'All', label: 'All' },
  { id: 'Report', label: 'Reports' },
  { id: 'Case study', label: 'Case studies' },
  { id: 'Product update', label: 'Product updates' },
  { id: 'FAQ', label: 'FAQ' },
] as const

const coverMedia = ['heritage', 'transportation', 'healthcare', 'partners', 'utilities', 'education']

export function Resources() {
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('All')

  const visible = useMemo(() => {
    if (filter === 'All') return resources
    return resources.filter((item) => item.type === (filter as ResourceType))
  }, [filter])

  return (
    <>
      <div className="resource-hero">
        <div className="wrap">
          <Hero
            compact
            variant="form"
            eyebrow="Resources"
            title="Ideas for communications that must keep moving."
            body="Research, operational guidance, customer evidence, and product thinking for enterprise buyers and partners."
            primary={{ label: 'Explore the latest report', to: '#latest' }}
            secondary={{ label: 'Talk to an Expert', to: '/contact' }}
          />
        </div>
      </div>

      <section className="section resource-feature" id="latest">
        <div className="wrap resource-feature__grid">
          <div className="resource-feature__cover">
            <MediaVisual name="heritage" alt="" ratio="hero" />
            <div className="resource-feature__cover-copy">
              <span>2026 enterprise briefing</span>
              <strong>Hybrid communications and practical AI</strong>
            </div>
          </div>
          <div>
            <p className="eyebrow">Report · Content foundation</p>
            <h2>Modernize the communications estate without losing control.</h2>
            <p className="lede">
              A decision guide for organizations balancing cloud speed, on-premise requirements,
              operational continuity, integration, and governed AI.
            </p>
            <Link className="btn" to="/contact?intent=solution">
              Get the report
            </Link>
          </div>
        </div>
      </section>

      <section className="section resource-library" id="whats-new">
        <div className="wrap">
          <div className="resource-library__heading">
            <div>
              <p className="eyebrow">Browse the library</p>
              <h2>Continue the evaluation.</h2>
            </div>
            <div className="resource-filters" aria-label="Resource filters">
              {filters.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="resource-library__grid">
            {visible.map((resource, index) => (
              <article key={resource.slug} className="resource-card">
                <MediaVisual
                  name={coverMedia[index % coverMedia.length]}
                  alt=""
                  ratio="landscape"
                />
                <div className="resource-card__body">
                  <p className="eyebrow">
                    {resource.type} · {resource.readTime}
                  </p>
                  <h3>{resource.title}</h3>
                  <p className="resource-library__summary">{resource.summary}</p>
                  <Link className="text-link" to="/contact?intent=solution">
                    Request this resource
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section resource-case">
        <div className="wrap resource-case__grid">
          <MediaVisual
            name="transportation"
            alt="Transportation operations team coordinating a critical communications network"
          />
          <div>
            <p className="eyebrow">Customer story framework</p>
            <h2>Show the operation before and after the change.</h2>
            <p className="lede">
              Each story should connect the environment, challenge, selected deployment, solution,
              and operational result. Approved stories will replace these placeholders.
            </p>
            <Link className="btn btn-secondary" to="/contact">
              Discuss this use case
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="faq" tabIndex={-1}>
        <div className="wrap faq-layout">
          <div>
            <p className="eyebrow">Resource program</p>
            <h2>Built for an active content channel.</h2>
          </div>
          <FaqAccordion
            items={[
              {
                q: 'Where do case studies appear?',
                a: 'Customer evidence can be related to the homepage, solution pages, industry pages, and this resource library.',
              },
              {
                q: 'How is AI-generated content handled?',
                a: 'Generated material enters the CMS as a draft and requires editorial and subject-matter review before publication.',
              },
              {
                q: 'Which resources should be gated?',
                a: 'Gating should follow a clear conversion and consent strategy. Product updates and most articles should remain open.',
              },
            ]}
          />
        </div>
      </section>

      <CtaBand
        title="Bring the insight into your operating environment."
        primary={{ label: 'Talk to an Expert', to: '/contact' }}
        secondary={{ label: 'Become a Partner', to: '/partners' }}
        media="heritage"
      />
    </>
  )
}
