import { z } from 'zod'

const text = (min: number, max: number) => z.string().trim().min(min).max(max)

export function validPhone(value: string) {
  if (!/^[+]?[\d\s()./-]+$/.test(value)) return false
  const digits = value.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export const inquirySchema = z
  .object({
    kind: z.enum(['sales', 'partner']),
    name: text(2, 120),
    email: z.email().max(254),
    phone: text(7, 32).refine(validPhone),
    company: text(2, 180),
    country: text(2, 100),
    interest: text(2, 180),
    message: text(10, 4000),
    consent: z.literal(true),
    website: z.string().max(0),
    partnerType: z.string().max(100).optional(),
    companyWebsite: z.union([z.literal(''), z.url().max(300)]).optional(),
    territory: z.string().max(300).optional(),
    capabilities: z.string().max(2000).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.kind !== 'partner') return
    if (!data.partnerType?.trim()) {
      ctx.addIssue({ code: 'custom', path: ['partnerType'], message: 'Required' })
    }
    if (!data.territory?.trim()) {
      ctx.addIssue({ code: 'custom', path: ['territory'], message: 'Required' })
    }
    if (!data.capabilities?.trim()) {
      ctx.addIssue({ code: 'custom', path: ['capabilities'], message: 'Required' })
    }
  })

export type Inquiry = z.infer<typeof inquirySchema>
export const submissionSchema = z.object({
  inquiry: inquirySchema,
  token: text(1, 2048),
  idempotencyKey: z.uuid(),
})

export function isAllowedOrigin(origin: string | null, siteUrl: string | undefined) {
  if (!origin || !siteUrl) return false
  try {
    return new URL(origin).origin === new URL(siteUrl).origin
  } catch {
    return false
  }
}

export function validHttps(value: string | undefined) {
  if (!value) return false
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}
