import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

type Cta = { label: string; to: string }

type HeroProps = {
  eyebrow: string
  title: ReactNode
  body: string
  primary: Cta
  secondary?: Cta
  visual?: ReactNode
  proofChip?: string
  compact?: boolean
  variant?: 'split' | 'bleed' | 'ui' | 'form'
}

export function Hero({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  visual,
  proofChip,
  compact,
  variant = 'split',
}: HeroProps) {
  const reduceMotion = useReducedMotion()
  const classes = [
    'hero',
    compact ? 'hero--compact' : '',
    `hero--${variant}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes}>
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="btn-row hero__actions">
          <Link className="btn" to={primary.to}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="btn btn-secondary" to={secondary.to}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
        {proofChip ? <p className="hero__proof">{proofChip}</p> : null}
      </motion.div>
      {visual ? (
        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {visual}
        </motion.div>
      ) : null}
    </section>
  )
}
