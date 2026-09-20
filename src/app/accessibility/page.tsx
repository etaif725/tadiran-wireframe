import type { Metadata } from 'next'
import { Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Keyboard access, focus, forms, and reduced-motion support on the Tadiran Telecom website.',
}

export default function Accessibility() {
  return (
    <section className="container text-page">
      <Eyebrow>Accessibility</Eyebrow>
      <h1>A more usable connection.</h1>
      <p>
        This website includes keyboard-operable navigation, visible focus, labeled fields, reduced-motion support, and layouts that reflow at 200% zoom.
      </p>
      <h2>Using the website</h2>
      <p>
        Use the skip link to move to main content. Menus open with Enter or Space and close with Escape. In the deployment selector, use the arrow keys.
      </p>
      <h2>Need assistance?</h2>
      <p>If a page blocks access, contact your Tadiran representative with the address and a short description of the issue.</p>
    </section>
  )
}
