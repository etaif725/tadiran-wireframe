import { describe, expect, it } from 'vitest'
import {
  partnerCapabilities,
  partnerFaqs,
  partnerInterests,
  partnerOffer,
  partnerStack,
  partnerSteps,
  partnerTypeNames,
  partnerTypes,
} from '../src/content/partners'
import { primaryNav } from '../src/content/navigation'

describe('partner journey content', () => {
  it('keeps the five-step application model complete', () => {
    expect(partnerSteps).toHaveLength(5)
    expect(partnerSteps.every((step) => step.label && step.body && step.formBody)).toBe(true)
  })

  it('keeps curated form options unique and usable', () => {
    expect(new Set(partnerTypeNames).size).toBe(partnerTypes.length)
    expect(new Set(partnerInterests).size).toBe(partnerInterests.length)
    expect(new Set(partnerCapabilities).size).toBe(partnerCapabilities.length)
    expect(partnerCapabilities.length).toBeGreaterThanOrEqual(4)
  })

  it('uses the shared partner types in navigation', () => {
    const partnerNav = primaryNav.find((item) => item.id === 'partners')
    expect(partnerNav?.menu.columns[0].links.map((link) => link.label)).toEqual(partnerTypeNames)
  })

  it('keeps the public partner offer stacked and complete', () => {
    expect(partnerOffer.dreamOutcome.length).toBeGreaterThan(20)
    expect(partnerStack.length).toBeGreaterThanOrEqual(6)
    expect(partnerStack.length).toBeLessThanOrEqual(10)
    expect(partnerStack.every((item) => item.title && item.body)).toBe(true)
    expect(partnerFaqs.length).toBeGreaterThanOrEqual(4)
  })
})
