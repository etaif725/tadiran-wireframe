import Link from 'next/link'
import { Action, SectionHeading } from '@/components/ui'
import { Reveal } from '@/components/reveal'
import { HomeEnter } from '@/components/home-enter'
import { HomeHero } from '@/components/home-hero'
import { HomeMedia } from '@/components/media-frame'
import { LogoRail } from '@/components/logo-rail'
import { HomeFaq } from '@/components/home-faq'
import { InquiryForm } from '@/components/inquiry-form'
import { inquiryConfiguration } from '@/lib/config'
import {
  deployments,
  homeCases,
  homeServices,
  homeVoices,
  partnerChecks,
  startNext,
  whyPoints,
  workSteps,
} from '@/content/home'
import { proofStats } from '@/content/about'

export default function Home() {
  const config = inquiryConfiguration()

  return (
    <div className="home">
      <HomeEnter />
      <HomeHero />
      <LogoRail />

      <section className="section" id="company" aria-labelledby="home-company-title">
        <div className="container home-about">
          <Reveal>
            <div className="home-about__media">
              <HomeMedia
                name="heritage"
                alt="Tadiran Telecom operations"
                sizes="(max-width: 939px) 100vw, 48vw"
              />
              <p className="home-about__badge">
                <strong>1963</strong>
                <span>Founded in Israel</span>
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="home-about__copy">
              <p className="eyebrow">The company</p>
              <h2 id="home-company-title">A communications partner for the floor that has to answer.</h2>
              <p>
                Tadiran brings voice, customer experience, and critical operations onto one foundation, then fits cloud, hybrid, or on-premise delivery around the estate already in place.
              </p>
              <ul className="home-check">
                {partnerChecks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="home-about__actions">
                <Action href="/about">Our story</Action>
                <Action href="/contact" secondary>
                  Talk to us
                </Action>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section home-capabilities" id="services">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What we cover"
              title="Four paths into the same communications layer."
              body="Start with the responsibility you own. Each path names a solution family, not a product catalog."
            />
          </Reveal>
          <Reveal>
            <div className="home-services">
              {homeServices.map((item) => (
                <Link className="home-service" href={item.href} key={item.n}>
                  <HomeMedia name={item.media} alt="" cover sizes="(max-width: 939px) 100vw, 50vw" />
                  <span className="home-service__scrim" aria-hidden="true" />
                  <span className="home-service__copy">
                    <small>{item.n}</small>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <em aria-hidden="true">↗</em>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section home-why-section" id="why">
        <div className="container home-why-shell">
          <HomeMedia name="cap-critical" alt="" cover sizes="100vw" />
          <span className="home-why-shell__scrim" aria-hidden="true" />
          <div className="home-why-shell__content">
            <Reveal>
              <header>
                <p className="eyebrow">Why Tadiran</p>
                <h2>Enterprise communications with a deployment model the estate can defend.</h2>
                <p>Aeonix, OmniCX, and AVA. Israeli R&amp;D. Regional offices in Israel, the USA, China, and India.</p>
              </header>
            </Reveal>
            <Reveal>
              <div className="home-why">
                {whyPoints.map((item, index) => (
                  <article key={item.title}>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-stats" aria-label="Company at a glance">
        <div className="container home-stats__grid">
          {proofStats.map((item) => (
            <p key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="section home-deployment" id="deployment">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Deployment that fits"
              title="Three operating models. No public price list."
              body="Choose the constraint that sounds like yours. The next conversation maps it to the estate you already run."
            />
          </Reveal>
          <Reveal>
            <div className="home-plans">
              {deployments.map((item, index) => (
                <article className={`home-plan${item.featured ? ' is-featured' : ''}`} key={item.id}>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <div>
                    <p className="eyebrow">{item.eyebrow}</p>
                    <h3>{item.label}</h3>
                  </div>
                  <p className="home-plan__body">{item.body}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Action href={item.href} secondary={!item.featured}>
                    {item.action}
                  </Action>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section home-process-section" id="how">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A first session that leaves a path the operation can keep."
              body="Four steps from the named floor to the people who will run what comes next."
              light
            />
          </Reveal>
          <Reveal>
            <ol className="home-process">
              {workSteps.map((step) => (
                <li key={step.n}>
                  <small>{step.n}</small>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section home-industries" id="industries">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Floors we already design for"
              title="The brief changes with the operation."
              body="Each floor has a different escalation path and continuity test. Open one context at a time."
            />
          </Reveal>
          <Reveal>
            <div className="home-industry-stage">
              <Link className="home-industry-stage__visual" href={`/industries/${homeCases[0].slug}`}>
                <HomeMedia
                  name={homeCases[0].media}
                  alt=""
                  cover
                  sizes="(max-width: 939px) 100vw, 58vw"
                />
                <span>
                  <small>{homeCases[0].eyebrow}</small>
                  <strong>{homeCases[0].headline}</strong>
                </span>
              </Link>
              <nav className="home-industry-index" aria-label="Industry use cases">
                {homeCases.map((item, index) => (
                  <Link href={`/industries/${item.slug}`} key={item.slug}>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    <span>
                      <strong>{item.title}</strong>
                      <em>{item.headline}</em>
                    </span>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ))}
              </nav>
            </div>
          </Reveal>
          <div className="home-more">
            <Action href="/industries" secondary>
              All industries
            </Action>
          </div>
        </div>
      </section>

      <section className="section home-voices-section" id="voices">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What the first call settles"
              title="Three rooms. Three different next questions."
              body="IT, CX, and operations each arrive with a different constraint. The named floor still decides the rest."
              light
            />
          </Reveal>
          <Reveal>
            <div className="home-voices">
              {homeVoices.map((item) => (
                <blockquote key={item.role}>
                  <p>{item.quote}</p>
                  <footer>
                    <strong>{item.role}</strong>
                    <span>{item.title}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <HomeFaq />

      <section className="section home-start-section" id="start">
        <div className="container contact-split home-start-shell">
          <div className="contact-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us about the estate.</h2>
            <p>Name, work email, phone, company, and the topic. We come back with a path that fits the floor you already run.</p>
            <ol className="start-next">
              {startNext.map((item) => (
                <li key={item.n}>
                  <span>{item.n}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <InquiryForm {...config} privacyUrl={config.privacyUrl || ''} />
        </div>
      </section>
    </div>
  )
}
