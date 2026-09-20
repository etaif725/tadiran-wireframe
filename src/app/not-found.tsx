import Link from 'next/link'
import { Action, Eyebrow } from '@/components/ui'

export default function NotFound() {
  return (
    <section className="container not-found">
      <Eyebrow>404</Eyebrow>
      <h1>This path is not on the map.</h1>
      <p>The page may have moved, or the address may be wrong.</p>
      <Action href="/">Return home</Action>
      <p>
        Or explore <Link className="inline-link" href="/solutions">solutions ↗</Link>
      </p>
    </section>
  )
}
