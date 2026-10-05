import type { Metadata } from 'next'
import Script from 'next/script'
import '@fontsource/syne/500.css'
import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'
import '@fontsource-variable/source-sans-3/index.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import '@/styles/modern.css'
import '@/styles/brand-2027.css'
import '@/styles/cinema.css'
import '@/styles/cinema-compositions.css'
import '@/styles/motion-system.css'
import '@/styles/relationship-pages.css'
import '@/styles/solutions-experience.css'
import '@/styles/offering-details.css'
import '@/styles/product-compositions.css'

export const metadata: Metadata = {
  title: {
    default: 'Tadiran Telecom — Intelligence in Every Interaction',
    template: '%s | Tadiran Telecom',
  },
  description:
    'Enterprise communications, omnichannel customer experience, and critical operations. Cloud, hybrid, or on-premise.',
  robots: {
    index: process.env.LAUNCH_APPROVED === 'true',
    follow: process.env.LAUNCH_APPROVED === 'true',
  },
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script id="home-enter-pending" src="/enter-pending.js" strategy="beforeInteractive" />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
