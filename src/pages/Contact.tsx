import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SelectField, TextAreaField, TextField } from '../components/Field'

const intents = [
  { id: 'solution', label: 'Explore a solution', help: 'We will route this to solution / sales discovery.' },
  { id: 'industry', label: 'Discuss an industry use case', help: 'Industry is preselected when you arrive from a vertical page.' },
  { id: 'demo', label: 'Request a tailored demo', help: 'High-intent path. Keep the message short.' },
  { id: 'partnerships', label: 'Talk partnerships', help: 'Partner applications can also start on Become a Partner.' },
  { id: 'technical', label: 'Solutions / technical discussion', help: 'Architecture, deployment, and security conversation.' },
  { id: 'support', label: 'Existing customer support', help: 'Should later route to an approved support destination, not sales.' },
]

const countries = [
  'United States',
  'Israel',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Canada',
  'Brazil',
  'Mexico',
  'India',
  'Singapore',
  'Australia',
  'United Arab Emirates',
  'South Africa',
  'Other',
]

const initial = {
  first: '',
  last: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  role: '',
  interest: '',
  message: '',
  privacy: false,
  marketing: false,
}

export function Contact() {
  const [params] = useSearchParams()
  const preset = params.get('intent') ?? 'solution'
  const [intent, setIntent] = useState(intents.some((item) => item.id === preset) ? preset : 'solution')
  const [values, setValues] = useState({
    ...initial,
    interest: params.get('solution') ?? params.get('industry') ?? params.get('product') ?? '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const current = useMemo(() => intents.find((item) => item.id === intent) ?? intents[0], [intent])

  function set<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!values.first.trim()) next.first = 'Enter a first name.'
    if (!values.last.trim()) next.last = 'Enter a last name.'
    if (!values.email.includes('@')) next.email = 'Enter a work email.'
    if (!values.company.trim()) next.company = 'Enter a company name.'
    if (!values.country.trim()) next.country = 'Select a country or region.'
    if (!values.privacy) next.privacy = 'Acknowledge the privacy notice to send this inquiry.'
    return next
  }

  return (
    <div className="contact-page">
      <div className="contact-page__intro">
        <div className="wrap contact-page__copy">
          <p className="eyebrow">Talk to Tadiran</p>
          <h1>Start with the challenge in front of you.</h1>
          <p>
            Choose the conversation. The form adapts to the context and routes the inquiry to the
            right team.
          </p>
        </div>
      </div>

      <div className="wrap contact-workspace">
        <section className="contact-routing">
          <h2>What would you like to discuss?</h2>
          <div className="intent-grid" role="group" aria-label="Inquiry type">
            {intents.map((item) => (
              <button
                key={item.id}
                type="button"
                className="intent"
                aria-pressed={intent === item.id}
                onClick={() => setIntent(item.id)}
              >
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>
          <p className="help contact-routing__help">
            {current.help}
            {intent === 'partnerships' ? (
              <>
                {' '}
                Prefer the full qualification path? <Link to="/partners/apply">Become a Partner</Link>.
              </>
            ) : null}
          </p>
        </section>

        {submitted ? (
          <div className="success contact-form-panel contact-success" role="status">
            <p className="eyebrow">Preview confirmation</p>
            <h2>Inquiry structure received</h2>
            <p>
              This preview confirms the inquiry structure for <strong>{current.label}</strong>.
              Nothing is stored or transmitted yet. A response-time commitment appears once operations
              can honor it.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/solutions">
                Explore solutions
              </Link>
              <button className="btn btn-secondary" type="button" onClick={() => setSubmitted(false)}>
                Send another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            className="form contact-form-panel"
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              const next = validate()
              setErrors(next)
              if (Object.keys(next).length === 0) setSubmitted(true)
            }}
          >
            {Object.keys(errors).length > 0 ? (
              <div className="error" role="alert">
                Review the highlighted fields before sending.
              </div>
            ) : null}
            <div className="grid-2">
              <TextField
                id="first"
                label="First name"
                required
                value={values.first}
                error={errors.first}
                onChange={(e) => set('first', e.target.value)}
              />
              <TextField
                id="last"
                label="Last name"
                required
                value={values.last}
                error={errors.last}
                onChange={(e) => set('last', e.target.value)}
              />
            </div>
            <div className="grid-2">
              <TextField
                id="email"
                label="Work email"
                type="email"
                required
                value={values.email}
                error={errors.email}
                onChange={(e) => set('email', e.target.value)}
              />
              <TextField
                id="phone"
                label="Phone"
                help="Optional or locale-aware later."
                value={values.phone}
                onChange={(e) => set('phone', e.target.value)}
              />
            </div>
            <div className="grid-2">
              <TextField
                id="company"
                label="Company"
                required
                value={values.company}
                error={errors.company}
                onChange={(e) => set('company', e.target.value)}
              />
              <SelectField
                id="country"
                label="Country / region"
                required
                value={values.country}
                error={errors.country}
                onChange={(e) => set('country', e.target.value)}
              >
                <option value="">Select</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </SelectField>
            </div>
            <div className="grid-2">
              <TextField id="role" label="Role" value={values.role} onChange={(e) => set('role', e.target.value)} />
              <TextField
                id="interest"
                label="Interest area"
                value={values.interest}
                help="Prefilled from the referring page when present."
                onChange={(e) => set('interest', e.target.value)}
              />
            </div>
            <TextAreaField
              id="message"
              label="Message"
              value={values.message}
              onChange={(e) => set('message', e.target.value)}
            />
            <label className="field field--check">
              <span>
                <input
                  type="checkbox"
                  checked={values.privacy}
                  onChange={(e) => set('privacy', e.target.checked)}
                />{' '}
                Privacy acknowledgement
                <abbr className="req" title="required">
                  {' '}
                  *
                </abbr>
              </span>
              {errors.privacy ? (
                <p className="error">{errors.privacy}</p>
              ) : (
                <p className="help">Privacy wording will match the published policy.</p>
              )}
            </label>
            <label className="field field--check">
              <span>
                <input
                  type="checkbox"
                  checked={values.marketing}
                  onChange={(e) => set('marketing', e.target.checked)}
                />{' '}
                Optional marketing opt-in
              </span>
            </label>
            <div className="btn-row">
              <button className="btn" type="submit">
                Send Inquiry
              </button>
              <span className="note">A callback option appears once staffing is confirmed.</span>
            </div>
          </form>
        )}
      </div>

      <section className="wrap contact-next">
        <div className="contact-next__grid">
          <div>
            <p className="eyebrow">What happens next</p>
            <h2>A clear handoff, once routing is confirmed.</h2>
          </div>
          <ol className="contact-next__steps">
            <li>
              <strong>Context captured</strong>
              <span>Intent, company, and interest area travel with the inquiry.</span>
            </li>
            <li>
              <strong>Routed to the right team</strong>
              <span>Sales, solutions, partnerships, or support once destinations are live.</span>
            </li>
            <li>
              <strong>Follow-up owned</strong>
              <span>Response expectations appear only when an owner can honor them.</span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
