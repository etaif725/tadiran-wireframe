import { describe, expect, it } from 'vitest'
import { footerColumns, footerLegal, footerSocials, primaryNav } from '../src/content/navigation'
import { industries, products, solutions } from '../src/content/portfolio'

function hrefsFromNav() {
  return primaryNav.flatMap((item) => [
    item.href,
    item.menu.viewAll.href,
    item.menu.featured.href,
    ...item.menu.columns.flatMap((column) => column.links.map((link) => link.href.split('#')[0])),
    ...(item.menu.industries?.links.map((link) => link.href.split('#')[0]) ?? []),
    ...(item.menu.industries ? [item.menu.industries.viewAll.href] : []),
  ])
}

describe('wireframe navbar destinations', () => {
  it('keeps industries nested under solutions instead of as a root item', () => {
    expect(primaryNav.map((item) => item.label)).toEqual([
      'Products',
      'Solutions',
      'Partners',
      'Resources',
      'Company',
    ])
    const solutions = primaryNav.find((item) => item.id === 'solutions')
    expect(solutions?.menu.industries?.links.map((link) => link.href)).toEqual([
      '/industries/healthcare',
      '/industries/power-utilities',
      '/industries/transportation',
      '/industries/alarm-systems',
      '/industries/hospitality',
      '/industries/education',
      '/industries/assisted-living',
    ])
  })

  it('includes cloud infrastructure, OEM, and MSO', () => {
    const hrefs = hrefsFromNav()
    expect(hrefs).toContain('/solutions/cloud-infrastructure')
    expect(hrefs).toContain('/solutions/oem')
    expect(hrefs).toContain('/solutions/mso')
  })

  it('points product, solution, and industry links at records that exist', () => {
    const missing = hrefsFromNav()
      .filter((href) => /^\/(products|solutions|industries)\//.test(href))
      .filter((href) => {
        const [, area, slug] = href.split('/')
        if (area === 'products') return !products.some((item) => item.slug === slug)
        if (area === 'solutions') return !solutions.some((item) => item.slug === slug)
        return !industries.some((item) => item.slug === slug)
      })
    expect(missing).toEqual([])
  })

  it('keeps the footer directory aligned with the primary information architecture', () => {
    expect(footerColumns.map((group) => group.label)).toEqual([
      'Products',
      'Solutions',
      'Industries',
      'Partners',
      'Resources',
      'Company',
    ])
    expect(footerColumns.every((group) => group.links.length > 0)).toBe(true)
  })

  it('uses verified secure destinations for footer social channels', () => {
    expect(footerSocials.map((social) => social.label)).toEqual(['LinkedIn', 'YouTube', 'Facebook', 'X'])
    expect(footerSocials.every((social) => social.href.startsWith('https://'))).toBe(true)
  })

  it('keeps legal footer destinations on local review-safe routes', () => {
    expect(footerLegal.map((link) => link.href)).toEqual(['/privacy', '/privacy', '/accessibility'])
  })
})
