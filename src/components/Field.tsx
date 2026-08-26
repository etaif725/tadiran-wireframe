import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

type Base = {
  id: string
  label: string
  required?: boolean
  help?: string
  error?: string
}

export function TextField({
  id,
  label,
  required,
  help,
  error,
  ...props
}: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="field" htmlFor={id}>
      <span>
        {label}
        {required ? <abbr className="req" title="required"> *</abbr> : null}
      </span>
      <input id={id} aria-invalid={Boolean(error)} aria-describedby={help || error ? `${id}-msg` : undefined} required={required} {...props} />
      {error ? <p className="error" id={`${id}-msg`}>{error}</p> : help ? <p className="help" id={`${id}-msg`}>{help}</p> : null}
    </label>
  )
}

export function SelectField({
  id,
  label,
  required,
  help,
  error,
  children,
  ...props
}: Base & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="field" htmlFor={id}>
      <span>
        {label}
        {required ? <abbr className="req" title="required"> *</abbr> : null}
      </span>
      <select id={id} aria-invalid={Boolean(error)} required={required} {...props}>
        {children}
      </select>
      {error ? <p className="error">{error}</p> : help ? <p className="help">{help}</p> : null}
    </label>
  )
}

export function TextAreaField({
  id,
  label,
  required,
  help,
  error,
  ...props
}: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="field" htmlFor={id}>
      <span>
        {label}
        {required ? <abbr className="req" title="required"> *</abbr> : null}
      </span>
      <textarea id={id} aria-invalid={Boolean(error)} required={required} {...props} />
      {error ? <p className="error">{error}</p> : help ? <p className="help">{help}</p> : null}
    </label>
  )
}
