'use client'

import Script from 'next/script'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import {
  inquiryFieldLabels,
  partnerStepFields,
  salesRoutingNote,
  stepForErrors,
  submissionIdentity,
  validateInquiry,
  type InquiryDraft,
  type InquiryField,
} from '@/lib/inquiry-form-state'
import {
  partnerCapabilities,
  partnerInterests,
  partnerSteps,
  partnerTypeNames,
} from '@/content/partners'

type Turnstile = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string
  remove: (id: string) => void
  reset: (id: string) => void
}

declare global {
  interface Window {
    turnstile?: Turnstile
  }
}

const salesTopics = [
  'Aeonix / OmniCX',
  'Aeonix demo',
  'Technical discussion',
  'Industry use case',
  'Partner program',
  'Partner access support',
  'Customer references',
]

const reviewFields = [
  'name',
  'email',
  'phone',
  'partnerType',
  'company',
  'country',
  'companyWebsite',
  'interest',
  'territory',
  'capabilities',
] as const

export function InquiryForm({
  kind = 'sales',
  available,
  privacyUrl,
  siteKey,
  interest = '',
  partnerType = '',
}: {
  kind?: 'sales' | 'partner'
  available: boolean
  privacyUrl: string
  siteKey: string
  interest?: string
  partnerType?: string
}) {
  const knownPartnerType = partnerTypeNames.includes(partnerType as (typeof partnerTypeNames)[number])
    ? partnerType
    : ''
  const topicOptions =
    interest && !salesTopics.includes(interest) ? [interest, ...salesTopics] : salesTopics
  const [values, setValues] = useState<InquiryDraft>({
    kind,
    name: '',
    email: '',
    phone: '',
    company: '',
    country: kind === 'sales' ? 'Not specified' : '',
    interest: interest || (kind === 'partner' ? '' : 'Aeonix / OmniCX'),
    message: '',
    consent: false,
    website: '',
    partnerType: knownPartnerType,
    companyWebsite: '',
    territory: '',
    capabilities: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(0)
  const [token, setToken] = useState('')
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)
  const [reference, setReference] = useState('')
  const container = useRef<HTMLDivElement>(null)
  const widget = useRef<string | null>(null)
  const attempts = useRef(new Map<string, string>())
  const formRef = useRef<HTMLFormElement>(null)
  const stepHeadingRef = useRef<HTMLHeadingElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const previousStep = useRef(step)
  const isReview = kind === 'sales' || step === partnerSteps.length - 1
  const selectedCapabilities = new Set(
    values.capabilities
      ?.split(' | ')
      .map((value) => value.trim())
      .filter(Boolean),
  )

  const set = (key: keyof InquiryDraft, value: string | boolean) =>
    setValues((current) => ({ ...current, [key]: value }))

  useEffect(() => {
    return () => {
      if (widget.current) {
        window.turnstile?.remove(widget.current)
        widget.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (kind === 'partner' && previousStep.current !== step) {
      previousStep.current = step
      requestAnimationFrame(() => stepHeadingRef.current?.focus())
    }
  }, [kind, step])

  useEffect(() => {
    if (reference) requestAnimationFrame(() => successRef.current?.focus())
  }, [reference])

  function renderChallenge() {
    if (window.turnstile && container.current && widget.current === null) {
      widget.current = window.turnstile.render(container.current, {
        sitekey: siteKey,
        action: 'inquiry',
        callback: (nextToken: string) => setToken(nextToken),
        'expired-callback': () => setToken(''),
        'error-callback': () => {
          setToken('')
          setStatus('Verification is unavailable. Please try again later.')
        },
      })
    }
  }

  function draftForValidation() {
    return kind === 'sales' ? { ...values, message: salesRoutingNote(values) } : values
  }

  function validateKeys(keys?: readonly InquiryField[]) {
    const result = validateInquiry(draftForValidation(), keys)
    setErrors(result.errors)
    if (Object.keys(result.errors).length) {
      if (kind === 'partner' && !keys) setStep(stepForErrors(result.errors))
      requestAnimationFrame(() =>
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      )
      return false
    }
    return true
  }

  function toggleCapability(capability: string, checked: boolean) {
    const next = new Set(selectedCapabilities)
    if (checked) next.add(capability)
    else next.delete(capability)
    set('capabilities', Array.from(next).join(' | '))
    setErrors((current) => ({ ...current, capabilities: '' }))
  }

  const field = (
    key: keyof InquiryDraft,
    label: string,
    type = 'text',
    required = true,
    wide = false,
  ) => (
    <div className={`field${wide ? ' field-wide' : ''}`} key={key}>
      <label htmlFor={`inquiry-${key}`}>
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={`inquiry-${key}`}
        name={key}
        type={type}
        value={String(values[key] || '')}
        onChange={(event) => set(key, event.target.value)}
        required={required}
        inputMode={key === 'phone' ? 'tel' : undefined}
        maxLength={key === 'email' ? 254 : key === 'phone' ? 32 : 300}
        autoComplete={
          key === 'name'
            ? 'name'
            : key === 'email'
              ? 'email'
              : key === 'phone'
                ? 'tel'
                : key === 'company'
                  ? 'organization'
                  : key === 'country'
                    ? 'country-name'
                    : key === 'companyWebsite'
                      ? 'url'
                      : 'off'
        }
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `error-${key}` : undefined}
      />
      {errors[key] && (
        <span className="field-error" id={`error-${key}`}>
          {errors[key]}
        </span>
      )}
    </div>
  )

  const selectField = (
    key: 'partnerType' | 'interest',
    label: string,
    options: readonly string[],
    placeholder: string,
    wide = false,
  ) => (
    <div className={`field${wide ? ' field-wide' : ''}`} key={key}>
      <label htmlFor={`inquiry-${key}`}>{label} *</label>
      <select
        id={`inquiry-${key}`}
        name={key}
        value={values[key] || ''}
        onChange={(event) => set(key, event.target.value)}
        required
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `error-${key}` : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[key] && (
        <span className="field-error" id={`error-${key}`}>
          {errors[key]}
        </span>
      )}
    </div>
  )

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (busy) return
    setStatus('')

    if (kind === 'partner' && step < partnerSteps.length - 1) {
      if (validateKeys(partnerStepFields[step])) setStep(step + 1)
      return
    }
    if (!validateKeys()) return

    const { inquiry } = validateInquiry(draftForValidation())
    if (!inquiry) return
    if (!available) {
      setStatus('')
      return
    }
    if (!token) {
      setStatus('Please complete the verification.')
      return
    }

    setBusy(true)
    const idempotencyKey = submissionIdentity(attempts.current, inquiry, () =>
      crypto.randomUUID(),
    )
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inquiry, token, idempotencyKey }),
        signal: AbortSignal.timeout(30000),
      })
      const contentType = response.headers.get('content-type') || ''
      const body = contentType.includes('application/json') ? await response.json() : null
      if (
        !response.ok ||
        body?.accepted !== true ||
        typeof body.reference !== 'string' ||
        !body.reference.trim()
      ) {
        throw new Error(
          typeof body?.error === 'string' ? body.error : 'Delivery could not be confirmed.',
        )
      }
      setReference(body.reference)
    } catch (error) {
      setStatus(
        error instanceof Error && error.name !== 'TimeoutError'
          ? error.message
          : 'Delivery could not be confirmed. Please check with your Tadiran representative before sending another request.',
      )
      setToken('')
      if (widget.current) window.turnstile?.reset(widget.current)
    } finally {
      setBusy(false)
    }
  }

  if (reference) {
    return (
      <div
        className="contact-form contact-form--done"
        role="status"
        tabIndex={-1}
        ref={successRef}
      >
        <CheckCircle2 size={28} aria-hidden="true" />
        <h2>Application received.</h2>
        <p>
          Your reference is <strong>{reference}</strong>. Keep it for your follow-up with the
          Tadiran channel team.
        </p>
        <Link className="inline-link" href="/partners">
          Return to the partner program
        </Link>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      className={`contact-form${kind === 'sales' ? ' contact-form--sales' : ' partner-form'}`}
      onSubmit={submit}
      noValidate
    >
      <header className="form-heading">
        <p className="form-kicker">
          {kind === 'partner' ? `Step ${step + 1} of ${partnerSteps.length}` : 'Contact Tadiran'}
        </p>
        <h2 ref={stepHeadingRef} tabIndex={kind === 'partner' ? -1 : undefined}>
          {kind === 'partner' ? partnerSteps[step].label : 'Start with the essentials.'}
        </h2>
        <p className="form-intro">
          {kind === 'partner'
            ? partnerSteps[step].formBody
            : 'Name, work email, phone, company, and the topic. The right Tadiran team will take it from there.'}
        </p>
      </header>

      {kind === 'partner' && (
        <>
          <ol className="step-navigation" aria-label="Application progress">
            {partnerSteps.map((currentStep, index) => (
              <li
                key={currentStep.label}
                aria-current={index === step ? 'step' : undefined}
                data-complete={index < step ? 'true' : undefined}
              >
                <span>{index + 1}</span>
                <small>{currentStep.label}</small>
              </li>
            ))}
          </ol>
          <p className="sr-only" aria-live="polite">
            Step {step + 1} of {partnerSteps.length}: {partnerSteps[step].label}
          </p>
        </>
      )}

      <div className="form-grid">
        {kind === 'sales' && (
          <>
            {field('name', 'Full name')}
            {field('email', 'Work email', 'email')}
            {field('phone', 'Phone', 'tel')}
            {field('company', 'Company')}
            <div className="field field-wide">
              <label htmlFor="inquiry-interest">Topic *</label>
              <select
                id="inquiry-interest"
                name="interest"
                value={values.interest}
                onChange={(event) => set('interest', event.target.value)}
                aria-invalid={Boolean(errors.interest)}
                aria-describedby={errors.interest ? 'error-interest' : undefined}
              >
                {topicOptions.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              {errors.interest && (
                <span className="field-error" id="error-interest">
                  {errors.interest}
                </span>
              )}
            </div>
          </>
        )}

        {kind === 'partner' && step === 0 && (
          <>
            {field('name', 'Full name')}
            {field('email', 'Work email', 'email')}
            {field('phone', 'Phone', 'tel')}
            {selectField(
              'partnerType',
              'Partnership model',
              partnerTypeNames,
              'Select a partnership model',
            )}
          </>
        )}

        {kind === 'partner' && step === 1 && (
          <>
            {field('company', 'Legal company name')}
            {field('country', 'Headquarters country / region')}
            {field('companyWebsite', 'Company website', 'url', false, true)}
          </>
        )}

        {kind === 'partner' && step === 2 && (
          <>
            {selectField(
              'interest',
              'Primary solution interest',
              partnerInterests,
              'Select a solution area',
            )}
            {field('territory', 'Markets and territories served')}
          </>
        )}

        {kind === 'partner' && step === 3 && (
          <fieldset
            className="field field-wide option-group"
            aria-invalid={Boolean(errors.capabilities)}
            aria-describedby={errors.capabilities ? 'error-capabilities' : undefined}
          >
            <legend>Capabilities delivered directly *</legend>
            <div className="option-group__grid">
              {partnerCapabilities.map((capability) => (
                <label key={capability}>
                  <input
                    type="checkbox"
                    checked={selectedCapabilities.has(capability)}
                    onChange={(event) => toggleCapability(capability, event.target.checked)}
                  />
                  <span>{capability}</span>
                </label>
              ))}
            </div>
            {errors.capabilities && (
              <span className="field-error" id="error-capabilities">
                {errors.capabilities}
              </span>
            )}
          </fieldset>
        )}

        {kind === 'partner' && isReview && (
          <div className="field field-wide">
            <label htmlFor="inquiry-message">Partnership goal *</label>
            <textarea
              id="inquiry-message"
              name="message"
              minLength={10}
              maxLength={4000}
              required
              value={values.message}
              onChange={(event) => set('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'error-message' : 'hint-message'}
            />
            <small className="field-hint" id="hint-message">
              Describe the opportunity, customer need, or outcome you want to pursue.
            </small>
            {errors.message && (
              <span id="error-message" className="field-error">
                {errors.message}
              </span>
            )}
          </div>
        )}
      </div>

      {kind === 'partner' && isReview && (
        <section className="form-review-section" aria-labelledby="review-heading">
          <h3 id="review-heading">Application summary</h3>
          <dl className="form-review">
            {reviewFields.map((key) => (
              <div key={key}>
                <dt>{inquiryFieldLabels[key]}</dt>
                <dd>{values[key] || 'Not provided'}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="inquiry-website">Leave empty</label>
        <input
          id="inquiry-website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => set('website', event.target.value)}
        />
      </div>

      <div className="form-footer">
        {isReview && (
          <>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={values.consent}
                onChange={(event) => set('consent', event.target.checked)}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? 'error-consent' : undefined}
              />
              <span>
                I have read the{' '}
                {privacyUrl ? (
                  <a href={privacyUrl} target="_blank" rel="noopener noreferrer">
                    privacy notice
                  </a>
                ) : (
                  'privacy notice'
                )}{' '}
                and agree to the processing of this inquiry. *
              </span>
            </label>
            {errors.consent && (
              <p className="field-error" id="error-consent">
                {errors.consent}
              </p>
            )}
          </>
        )}

        {available && isReview && (
          <>
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              onReady={renderChallenge}
            />
            <div ref={container} className="verification" />
          </>
        )}

        {status && (
          <p className="form-status form-status--error" role="alert">
            {status}
          </p>
        )}

        <div className="form-actions">
          {kind === 'partner' && step > 0 && (
            <button
              type="button"
              className="action action--secondary"
              onClick={() => {
                setStep((current) => current - 1)
                setErrors({})
                setStatus('')
              }}
              disabled={busy}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back
            </button>
          )}
          <button
            className="action"
            type="submit"
            disabled={busy || (kind === 'partner' && isReview && !available)}
          >
            {busy
              ? 'Sending…'
              : kind === 'partner' && !isReview
                ? 'Continue'
                : kind === 'partner'
                  ? 'Submit application'
                  : 'Request a conversation'}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <p className="form-footnote">* Required fields</p>
      </div>
    </form>
  )
}
