import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '../components/Field'
import { Logo } from '../components/Logo'

export function PartnerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [mfa, setMfa] = useState(false)

  return (
    <div className="login-shell">
      <div>
        <div className="login-top">
          <Logo light />
          <Link to="/">Back to main site</Link>
        </div>
        <div className="login-card">
          <p className="eyebrow">Partner Portal</p>
          <h1>Sign in</h1>
          <p className="lede">Access approved program resources, enablement, and tools.</p>

          {mfa ? (
            <form
              className="form"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <p className="note">Verification method is shown here as a front-end preview only.</p>
              <TextField id="otp" label="Verification code" autoComplete="one-time-code" />
              <button className="btn" type="submit">
                Continue
              </button>
            </form>
          ) : (
            <form
              className="form"
              onSubmit={(event) => {
                event.preventDefault()
                if (!email || !password) {
                  setError('We could not sign you in. Check your details or reset your password.')
                  return
                }
                setError('')
                setMfa(true)
              }}
            >
              <p className="note">SSO appears only after an identity provider is confirmed.</p>
              <TextField
                id="email"
                label="Work email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="field">
                <label htmlFor="password">Password</label>
                <div className="password-row">
                  <input
                    id="password"
                    type={show ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setShow((value) => !value)}
                  >
                    {show ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              {error ? (
                <p className="error" role="alert">
                  {error}
                </p>
              ) : null}
              <button className="btn" type="submit">
                Sign In
              </button>
              <button className="btn btn-ghost" type="button">
                Forgot password?
              </button>
            </form>
          )}

          <p>
            New to Tadiran? <Link to="/partners/apply">Become a Partner</Link>
          </p>
          <p>
            Need access help? <Link to="/contact?intent=partnerships">Contact Partner Support</Link>
          </p>
          <p className="note login-legal">
            <Link to="/contact">Privacy</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/contact">Terms</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/contact">Accessibility</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
