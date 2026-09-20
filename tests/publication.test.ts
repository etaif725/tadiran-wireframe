import { afterEach, describe, expect, it } from 'vitest'
import { isPubliclyIndexable, isPubliclyVisible } from '../src/lib/publication'

describe('publication policy', () => {
  afterEach(() => {
    delete process.env.LAUNCH_APPROVED
  })

  it('never indexes future or draft records', () => {
    process.env.LAUNCH_APPROVED = 'true'
    expect(isPubliclyIndexable('future')).toBe(false)
    expect(isPubliclyIndexable('draft')).toBe(false)
  })

  it('does not index review content through the launch switch', () => {
    process.env.LAUNCH_APPROVED = 'true'
    expect(isPubliclyIndexable('review')).toBe(false)
    expect(isPubliclyIndexable('published')).toBe(true)
  })

  it('keeps review pages visible while they remain unpublished', () => {
    expect(isPubliclyVisible('review')).toBe(true)
    expect(isPubliclyVisible('draft')).toBe(false)
  })
})
