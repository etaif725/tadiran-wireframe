'use client'

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container not-found">
      <p className="eyebrow">System status</p>
      <h1>We could not load this page.</h1>
      <p>Try again. If it continues, return home.</p>
      <button className="action" onClick={reset} type="button">
        <span>Try again</span>
        <span className="action__icon" aria-hidden="true">
          ↗
        </span>
      </button>
    </section>
  )
}
