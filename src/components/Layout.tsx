import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollMotion } from './ScrollMotion'

export function Layout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const compactFooter = location.pathname.startsWith('/partners/apply')

  useEffect(() => {
    if (location.hash) {
      const node = document.getElementById(location.hash.slice(1))
      node?.focus?.()
      node?.scrollIntoView({ block: 'start' })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main className="site-main" id="main">
        <ScrollMotion />
        <motion.div
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer compact={compactFooter} />
    </div>
  )
}
