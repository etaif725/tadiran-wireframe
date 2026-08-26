import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const revealSelector = [
  '.editorial-heading',
  '.section-head',
  '.family-story__lead',
  '.family-story__list article',
  '.solution-showcase__item',
  '.solution-index__row',
  '.product-card',
  '.product-lead',
  '.product-capabilities__band article',
  '.product-showcase__copy',
  '.industry-card',
  '.industry-index-card',
  '.industry-hero-editorial__mosaic',
  '.industry-directory__card',
  '.industry-detail-pressures article',
  '.industry-detail-workflows',
  '.home-industry-mosaic article',
  '.partner-value__grid article',
  '.resource-card',
  '.resource-feature',
  '.card',
  '.faq details',
].join(',')

export function ScrollMotion() {
  const location = useLocation()

  useLayoutEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const context = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(revealSelector)

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 18 },
          {
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('.visual-scene').forEach((element) => {
        const sky = element.querySelector<HTMLElement>('.visual-scene__sky')
        if (!sky) return

        gsap.fromTo(
          sky,
          { yPercent: -4 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )
      })
    })

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.cancelAnimationFrame(refreshFrame)
      context.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [location.pathname])

  return null
}
