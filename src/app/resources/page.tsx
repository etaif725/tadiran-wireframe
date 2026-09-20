import type { Metadata } from 'next'
import Link from 'next/link'
import { Action, Eyebrow, PageHero } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Evaluation guidance, deployment questions, and a reserved home for reports and case studies.',
  alternates: { canonical: '/resources' },
}

const articles = [
  {
    title: 'How to compare cloud, hybrid, and on-premise communications',
    label: 'Reports & Guides',
    id: 'reports',
    body: 'A practical framework for IT and infrastructure teams. Start with users, sites, data, support ownership, and continuity requirements.',
    href: '/solutions/integrations-deployment',
  },
  {
    title: 'Where customer handoffs lose context.',
    label: 'Insights',
    id: 'insights',
    body: 'A guide for CX leaders and contact-center supervisors reviewing voice, digital, quality, and CRM handoffs.',
    href: '/solutions/omnichannel-cx',
  },
  {
    title: 'What to bring to a critical communications evaluation.',
    label: 'What’s New',
    id: 'whats-new',
    body: 'A checklist for operations leaders responsible for dispatch, escalation, redundancy, and recovery.',
    href: '/solutions/critical-communications',
  },
]

export default function Resources() {
  return (
    <div className="page">
      <PageHero
        id="whats-new"
        eyebrow="Resources"
        title="A clearer next question."
        body="Practical guidance for IT, CX, operations, and channel teams evaluating enterprise communications."
      />
      <section className="section">
        <div className="container resource-rail">
          {articles.map((article) => (
            <article className="resource-card" id={article.id} key={article.id}>
              <p className="eyebrow">{article.label}</p>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
              <Link className="inline-link" href={article.href}>
                Explore the topic ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="cases">
        <div className="container trust-split">
          <div>
            <Eyebrow>Case studies</Eyebrow>
            <h2>Evidence for your environment.</h2>
          </div>
          <div>
            <p>
              The useful reference matches your industry, deployment, and operating constraint. Ask for available customer references rather than reading invented outcomes on this page.
            </p>
            <Action href="/contact?intent=solution&interest=Customer%20references" secondary>
              Discuss a relevant reference
            </Action>
          </div>
        </div>
      </section>
      <section className="section" id="faq">
        <div className="container">
          <Eyebrow>FAQs</Eyebrow>
          <h2>Common evaluation questions.</h2>
          <div className="faq-list">
            {[
              {
                q: 'What should we prepare for a solutions discussion?',
                a: 'Bring current systems, users, locations, integration needs, and the operational challenge you want to address.',
              },
              {
                q: 'How do we evaluate deployment options?',
                a: 'Start with infrastructure, data requirements, support model, and transition constraints. Compare cloud, hybrid, and on-premise against those requirements.',
              },
              {
                q: 'Where can we find product documentation?',
                a: 'Your Tadiran representative can identify documentation for the proposed product, version, deployment, and region.',
              },
            ].map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
