import { describe, expect, it } from 'vitest'
import { isAllowedOrigin, validHttps, validPhone } from '../src/lib/inquiry-schema'

describe('inquiry URL policy', () => {
  it('accepts only HTTPS partner portal URLs', () => {
    expect(validHttps('https://partners.example.com/login')).toBe(true)
    expect(validHttps('http://partners.example.com/login')).toBe(false)
    expect(validHttps('javascript:alert(1)')).toBe(false)
    expect(validHttps(undefined)).toBe(false)
  })

  it('accepts international phone numbers and rejects junk', () => {
    expect(validPhone('+1 (404) 555-1212')).toBe(true)
    expect(validPhone('03-5575700')).toBe(true)
    expect(validPhone('not-a-phone')).toBe(false)
    expect(validPhone('123')).toBe(false)
  })

  it('allows submissions only from the configured site origin', () => {
    expect(isAllowedOrigin('https://www.example.com', 'https://www.example.com/contact')).toBe(true)
    expect(isAllowedOrigin('https://example.com', 'https://www.example.com')).toBe(false)
    expect(isAllowedOrigin(null, 'https://www.example.com')).toBe(false)
    expect(isAllowedOrigin('not-a-url', 'https://www.example.com')).toBe(false)
  })
})
