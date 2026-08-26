import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { resources } from '../content/catalog'
import { searchCatalog } from '../data/site'

type SearchOverlayProps = {
  open: boolean
  onClose: () => void
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus())
    return () => window.cancelAnimationFrame(frame)
  }, [open])

  const results = useMemo(() => {
    const catalogHits = searchCatalog(query)
    const q = query.trim().toLowerCase()
    if (q.length < 2) return catalogHits

    const resourceHits = resources
      .filter((item) => `${item.title} ${item.summary} ${item.type}`.toLowerCase().includes(q))
      .map((item) => ({
        type: item.type,
        title: item.title,
        body: item.summary,
        to: '/resources',
      }))

    return [...catalogHits, ...resourceHits].slice(0, 8)
  }, [query])

  if (!open) return null

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search Tadiran Telecom">
      <button className="search-overlay__backdrop" type="button" aria-label="Close search" onClick={onClose} />
      <div className="search-overlay__panel">
        <label className="search-overlay__field" htmlFor="site-search">
          <span>Search</span>
          <input
            id="site-search"
            ref={inputRef}
            type="search"
            value={query}
            placeholder="Search solutions, products, industries, resources"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        {query.trim().length < 2 ? (
          <p className="search-overlay__hint">Type at least two characters.</p>
        ) : results.length === 0 ? (
          <p className="search-overlay__hint">No matches. Try OmniCX, healthcare, or hybrid.</p>
        ) : (
          <ul className="search-overlay__list">
            {results.map((item) => (
              <li key={`${item.type}-${item.to}-${item.title}`}>
                <Link to={item.to} onClick={onClose}>
                  <small>{item.type}</small>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
