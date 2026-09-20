import { industries, products, solutions } from './portfolio'

export type SearchHit = {
  type: string
  title: string
  body: string
  href: string
}

export function searchCatalog(query: string): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []

  const hits: SearchHit[] = []

  for (const item of solutions) {
    if (`${item.title} ${item.outcome} ${item.problem}`.toLowerCase().includes(q)) {
      hits.push({ type: 'Solution', title: item.title, body: item.outcome, href: `/solutions/${item.slug}` })
    }
  }

  for (const item of products) {
    if (`${item.title} ${item.summary} ${item.audience}`.toLowerCase().includes(q)) {
      hits.push({ type: 'Product', title: item.title, body: item.summary, href: `/products/${item.slug}` })
    }
  }

  for (const item of industries) {
    if (`${item.title} ${item.problem} ${item.outcome}`.toLowerCase().includes(q)) {
      hits.push({ type: 'Industry', title: item.title, body: item.problem, href: `/industries/${item.slug}` })
    }
  }

  return hits.slice(0, 8)
}
