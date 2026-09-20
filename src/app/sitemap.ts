import type { MetadataRoute } from 'next'
import { industries, products, solutions } from '@/content/portfolio'
import { isPubliclyIndexable } from '@/lib/publication'

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.LAUNCH_APPROVED !== 'true' || !process.env.SITE_URL) return []

  const base = process.env.SITE_URL.replace(/\/$/, '')
  const entries = [
    ...products.map((item) => ({ href: `/products/${item.slug}`, status: item.status })),
    ...solutions.map((item) => ({ href: `/solutions/${item.slug}`, status: item.status })),
    ...industries.map((item) => ({ href: `/industries/${item.slug}`, status: item.status })),
  ]

  const routes = [
    '',
    '/about',
    '/contact',
    '/partners',
    '/resources',
    '/accessibility',
    '/products',
    '/solutions',
    '/industries',
    ...entries.filter((item) => isPubliclyIndexable(item.status)).map((item) => item.href),
  ]

  return routes.map((route) => ({ url: base + route }))
}
