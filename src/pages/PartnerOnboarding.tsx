import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SelectField, TextAreaField, TextField } from '../components/Field'
import { partnerTypes } from '../data/site'

const steps = ['Partner Profile', 'Company', 'Market & Model', 'Capabilities', 'Review']

type FormState = {
  type: string
  region: string
  first: string
  last: string
  email: string
  role: string
  phone: string
  legalName: string
  tradingName: string
  website: string
  hq: string
  employees: string
  years: string
  segments: string[]
  industries: string
  territory: string
  portfolio: string
  model: string
  solutions: string
  deployment: string
  integration: string
  support: string
  comments: string
  accuracy: boolean
  privacy: boolean
  authority: boolean
}

const empty: FormState = {
  type: '',
  region: '',
  first: '',
  last: '',
  email: '',
  role: '',
  phone: '',
  legalName: '',
  tradingName: '',
  website: '',
  hq: '',
  employees: '',
  years: '',
  segments: [],
  industries: '',
  territory: '',
  portfolio: '',
  model: '',
  solutions: '',
  deployment: '',
  integration: '',
  support: '',
  comments: '',
  accuracy: false,
  privacy: false,
  authority: false,
}

export function PartnerOnboarding() {
  const [params] = useSearchParams()
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<FormState>({
    ...empty,
    type: params.get('type') ?? '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function validate(index: number) {
    const next: Record<string, string> = {}
    if (index === 0) {
      if (!values.type) next.type = 'Select a partner type.'
      if (!values.region) next.region = 'Select a region.'
      if (!values.first) next.first = 'Enter a first name.'
      if (!values.last) next.last = 'Enter a last name.'
      if (!values.email.includes('@')) next.email = 'Enter a work email.'
    }
    if (index === 1) {
      if (!values.legalName) next.legalName = 'Enter the legal company name.'
      if (!values.website) next.website = 'Enter a company website.'
      if (!values.hq) next.hq = 'Enter headquarters country.'
    }
    if (index === 2) {
      if (values.segments.length === 0) next.segments = 'Select at least one customer segment.'
      if (!values.territory) next.territory = 'Enter a primary territory.'
      if (!values.portfolio) next.portfolio = 'Describe the current portfolio.'
      if (!values.model) next.model = 'Select a business model.'
    }
    if (index === 3) {
      if (!values.solutions) next.solutions = 'Name solutions of interest.'
      if (!values.deployment) next.deployment = 'Select a deployment capability.'
    }
    if (index === 4) {
      if (!values.accuracy) next.accuracy = 'Confirm the summary is accurate.'
      if (!values.privacy) next.privacy = 'Acknowledge privacy before submit.'
      if (!values.authority) next.authority = 'Confirm you can submit for this company.'
    }
    return next
  }

  function nextStep() {
    const next = validate(step)
    setErrors(next)
    if (Object.keys(next).length) return
    if (step === 4) {
      setDone(true)
      return
    }
    setStep((value) => value + 1)
  }

  const typeLabel = useMemo(
    () => partnerTypes.find((item) => item.id === values.type)?.title ?? 'Not selected',
    [values.type],
  )

  return (
    <div className="onboarding-page">
      <div className="wrap onboarding-intro">
      <div className="onboarding-intro__top">
        <p className="eyebrow">Partner onboarding</p>
        <Link to="/partners/login">Already approved? Partner Login</Link>
      </div>
      <h1>Tell us how you bring value to the market.</h1>
      <p>Five clear steps. Questions adapt to the partner model and collect only what the review team can use.</p>

      <ol className="stepper">
        {steps.map((label, index) => (
          <li
            key={label}
            className={`step${index === step ? ' is-current' : ''}${index < step ? ' is-done' : ''}`}
          >
            <b>{index + 1}</b>
            {label}
          </li>
        ))}
      </ol>
      </div>

      <div className="wrap onboarding-body">
      <aside className="onboarding-aside">
        <p className="eyebrow">Application guidance</p>
        <h2>{steps[step]}</h2>
        <p>
          {step === 0 && 'Choose the model and region so the application reaches the right program owner.'}
          {step === 1 && 'Provide the company details needed to understand the organization and operating footprint.'}
          {step === 2 && 'Show where you sell, who you serve, and how communications fit the current portfolio.'}
          {step === 3 && 'Describe the deployment, integration, and service capabilities behind the opportunity.'}
          {step === 4 && 'Review the full application and confirm the required acknowledgements before submission.'}
        </p>
        <span>Secure save and resume appears only after identity and retention rules are approved.</span>
      </aside>
      {done ? (
        <div className="success onboarding-form" role="status">
          <h2>Application structure submitted</h2>
          <p>
            This preview confirms the application structure. A next-step SLA appears after a reviewer
            is named. Existing partners use login, not this form.
          </p>
          <Link className="btn" to="/partners">
            Back to Partner Program
          </Link>
        </div>
      ) : (
        <form
          className="form onboarding-form"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            nextStep()
          }}
        >
          {Object.keys(errors).length > 0 ? (
            <div className="error" role="alert">
              Fix the fields on this step before continuing.
            </div>
          ) : null}

          {step === 0 ? (
            <>
              <SelectField id="type" label="Partner type" required value={values.type} error={errors.type} onChange={(e) => set('type', e.target.value)}>
                <option value="">Select</option>
                {partnerTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </SelectField>
              <SelectField id="region" label="Country / region" required value={values.region} error={errors.region} onChange={(e) => set('region', e.target.value)}>
                <option value="">Select</option>
                <option>North America</option>
                <option>EMEA</option>
                <option>APAC</option>
                <option>LATAM</option>
              </SelectField>
              <div className="grid-2">
                <TextField id="first" label="First name" required value={values.first} error={errors.first} onChange={(e) => set('first', e.target.value)} />
                <TextField id="last" label="Last name" required value={values.last} error={errors.last} onChange={(e) => set('last', e.target.value)} />
              </div>
              <div className="grid-2">
                <TextField id="email" label="Work email" type="email" required value={values.email} error={errors.email} onChange={(e) => set('email', e.target.value)} />
                <TextField id="role" label="Role / title" value={values.role} onChange={(e) => set('role', e.target.value)} />
              </div>
              <TextField id="phone" label="Business phone" value={values.phone} onChange={(e) => set('phone', e.target.value)} />
            </>
          ) : null}

          {step === 1 ? (
            <>
              <TextField id="legal" label="Legal company name" required value={values.legalName} error={errors.legalName} onChange={(e) => set('legalName', e.target.value)} />
              <TextField id="trading" label="Trading name" value={values.tradingName} onChange={(e) => set('tradingName', e.target.value)} />
              <TextField id="website" label="Company website" required value={values.website} error={errors.website} onChange={(e) => set('website', e.target.value)} />
              <div className="grid-2">
                <TextField id="hq" label="Headquarters country" required value={values.hq} error={errors.hq} onChange={(e) => set('hq', e.target.value)} />
                <SelectField id="employees" label="Employee range" value={values.employees} onChange={(e) => set('employees', e.target.value)}>
                  <option value="">Select</option>
                  <option>1–50</option>
                  <option>51–250</option>
                  <option>251–1000</option>
                  <option>1000+</option>
                </SelectField>
              </div>
              <TextField id="years" label="Years in business" value={values.years} onChange={(e) => set('years', e.target.value)} />
            </>
          ) : null}

          {step === 2 ? (
            <>
              <fieldset className="field">
                <legend>
                  Who do you primarily serve? <abbr className="req" title="required">*</abbr>
                </legend>
                {['Enterprise', 'Mid-market', 'Public sector', 'Other'].map((label) => (
                  <label key={label}>
                    <input
                      type="checkbox"
                      checked={values.segments.includes(label)}
                      onChange={(e) => {
                        set(
                          'segments',
                          e.target.checked
                            ? [...values.segments, label]
                            : values.segments.filter((item) => item !== label),
                        )
                      }}
                    />{' '}
                    {label}
                  </label>
                ))}
                {errors.segments ? <p className="error">{errors.segments}</p> : null}
              </fieldset>
              <TextField id="industries" label="Relevant industries" value={values.industries} onChange={(e) => set('industries', e.target.value)} />
              <TextField id="territory" label="Primary territory" required value={values.territory} error={errors.territory} onChange={(e) => set('territory', e.target.value)} />
              <SelectField id="model" label="Business model" required value={values.model} error={errors.model} onChange={(e) => set('model', e.target.value)}>
                <option value="">Select</option>
                {partnerTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </SelectField>
              <TextAreaField
                id="portfolio"
                label="Current communications or CX portfolio"
                required
                value={values.portfolio}
                error={errors.portfolio}
                onChange={(e) => set('portfolio', e.target.value)}
              />
            </>
          ) : null}

          {step === 3 ? (
            <>
              <TextField
                id="solutions"
                label="Solutions of interest"
                required
                value={values.solutions}
                error={errors.solutions}
                onChange={(e) => set('solutions', e.target.value)}
              />
              <SelectField
                id="deployment"
                label="Deployment capabilities"
                required
                value={values.deployment}
                error={errors.deployment}
                onChange={(e) => set('deployment', e.target.value)}
              >
                <option value="">Select</option>
                <option>Cloud</option>
                <option>Hybrid</option>
                <option>On-premise</option>
                <option>All of the above</option>
              </SelectField>
              <TextField
                id="integration"
                label="Integration / API capability"
                value={values.integration}
                help={values.type === 'developer' ? 'Developer / OEM: describe API or branding intent.' : undefined}
                onChange={(e) => set('integration', e.target.value)}
              />
              <TextField id="support" label="Support / service capability" value={values.support} onChange={(e) => set('support', e.target.value)} />
            </>
          ) : null}

          {step === 4 ? (
            <section className="card">
              <h2>Review</h2>
              <p>
                <strong>Type:</strong> {typeLabel}
              </p>
              <p>
                <strong>Contact:</strong> {values.first} {values.last} · {values.email}
              </p>
              <p>
                <strong>Company:</strong> {values.legalName} · {values.website}
              </p>
              <p>
                <strong>Market:</strong> {values.segments.join(', ') || '—'} · {values.territory}
              </p>
              <p>
                <strong>Fit:</strong> {values.solutions} · {values.deployment}
              </p>
              <TextAreaField id="comments" label="Additional comments" value={values.comments} onChange={(e) => set('comments', e.target.value)} />
              <label>
                <input type="checkbox" checked={values.accuracy} onChange={(e) => set('accuracy', e.target.checked)} /> Accuracy attestation
              </label>
              {errors.accuracy ? <p className="error">{errors.accuracy}</p> : null}
              <label>
                <input type="checkbox" checked={values.privacy} onChange={(e) => set('privacy', e.target.checked)} /> Privacy acknowledgement
              </label>
              {errors.privacy ? <p className="error">{errors.privacy}</p> : null}
              <label>
                <input type="checkbox" checked={values.authority} onChange={(e) => set('authority', e.target.checked)} /> I can submit for this organization
              </label>
              {errors.authority ? <p className="error">{errors.authority}</p> : null}
              <p className="note">Save and continue later appears only after secure resume rules are approved.</p>
            </section>
          ) : null}

          <div className="btn-row">
            {step > 0 ? (
              <button className="btn btn-secondary" type="button" onClick={() => setStep((value) => value - 1)}>
                Previous
              </button>
            ) : null}
            <button className="btn" type="submit">
              {step === 4 ? 'Submit Partner Application' : 'Continue'}
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  )
}
