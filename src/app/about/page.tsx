import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Action, SectionHeading } from '@/components/ui'
import { Reveal } from '@/components/reveal'
import { CompanyJourney } from '@/components/company-journey'
import { WorldMap } from '@/components/world-map'
import {RelationshipHero} from '@/components/relationship-hero'
import {RelationshipMotion} from '@/components/relationship-motion'
import {proofStats} from '@/content/about'
import { ceo, companyLeaders, family, floors, regionalLeaders, type Leader } from '@/content/about'

export const metadata: Metadata = {
  title: 'About Tadiran',
  description:
    'Tadiran Telecom is an Israeli UC&C company founded in 1963. Aeonix, OmniCX, and AVA. Cloud, hybrid, or on-premise. Offices in Israel, the USA, China, and India.',
  alternates: { canonical: '/about' },
}

function LeadershipRow({
  person,
  featured = false,
}: {
  person: Leader
  featured?: boolean
}) {
  return (
    <li className={featured ? 'is-ceo' : undefined}>
      <div className="about-people__photo">
        <Image
          src={person.image}
          alt=""
          fill
          sizes={featured ? '(max-width: 640px) 7.5rem, 10.5rem' : '72px'}
          style={person.crop ? { objectPosition: person.crop } : undefined}
        />
      </div>
      <div className="about-people__id">
        <strong>{person.name}</strong>
        <span>{person.role}</span>
        {person.appointed ? <em>Appointed {person.appointed}</em> : null}
        {person.place ? <em>{person.place}</em> : null}
      </div>
      <p>{person.bio}</p>
      <a
        href={person.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`${person.name} on LinkedIn`}
      >
        LinkedIn
        <span aria-hidden="true">↗</span>
      </a>
    </li>
  )
}

export default function About() {
  return (
    <RelationshipMotion className="page about relationship-page">
      <RelationshipHero kind="about"/>
      <div className="relationship-facts" data-stagger>{proofStats.map(f=><div key={f.label}><strong>{f.value}</strong><span>{f.label}</span></div>)}</div>

      <section className="about-chapter" id="story">
        <div className="about-shell">
          <Reveal>
            <div className="about-story__intro">
              <p className="about-story__year">1963</p>
              <div>
                <p className="eyebrow">The company</p>
                <h2>Built on experience.<br/>Always looking forward.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-story__copy">
              <p>
                Tadiran Telecom (TTL) L.P. supplies unified communications, contact centers, IP PBXs, dispatch, and business phones. Hosted or on-premise. The work includes integration with third-party systems, endpoints, and the Coral IPx estates already in service.
              </p>
              <p>
                The engineering model has stayed consistent through every platform generation. Flexibility, reliability, and security are product requirements, not campaign language.
              </p>
            </div>
          </Reveal>
        </div>
        <section className="about-footprint" id="footprint">
          <div className="about-footprint__inner">
            <Reveal className="about-footprint__copy">
              <p className="eyebrow">Global presence</p>
              <h2>Four offices. One operating network.</h2>
              <p>Petah Tikva is home to our headquarters and R&amp;D. Teams in Atlanta, Beijing, and New Delhi support partners and critical operations across every region.</p>
            </Reveal>
            <Reveal className="about-footprint__visual">
              <WorldMap />
            </Reveal>
          </div>
        </section>
      </section>

      <section className="about-history" id="history">
        <div className="about-history__panel">
          <div className="about-shell">
            <Reveal>
              <SectionHeading
                eyebrow="History"
                title="From Coral to Aeonix."
                body="Six moments across more than sixty years of enterprise communications."
                light
              />
            </Reveal>
            <Reveal>
              <CompanyJourney />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-chapter" id="family">
        <div className="about-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Technology that brings people together."
              body="One communications foundation. Contact center, assistance, and the clients that sit on it. Cloud, hybrid, or on-premise."
              aside={
                <Action href="/products" secondary>
                  All products
                </Action>
              }
            />
          </Reveal>
          <Reveal>
            <ol className="about-ledger">
              {family.map((item, index) => (
                <li key={item.slug}>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <h3>{item.title}</h3>
                  <span className="about-ledger__note">{item.note}</span>
                  <p>{item.body}</p>
                  <Link href={`/products/${item.slug}`}>
                    Explore {item.title}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="about-chapter about-chapter--tight" id="industries">
        <Image
          className="about-floors__backdrop"
          src="/media/industries-network.webp"
          alt=""
          fill
          sizes="100vw"
          quality={78}
        />
        <div className="about-shell">
          <Reveal>
            <div className="about-floors">
              <div>
                <p className="eyebrow">Industries</p>
                <h2>The same platform takes a different form on every floor.</h2>
                <p>Each environment changes the workflow, escalation path, and continuity requirement.</p>
              </div>
              <nav aria-label="Industries">
                {floors.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <Action href="/industries">Explore industries</Action>
              </nav>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-people" id="people">
        <div className="about-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Meet the people behind the connection."
              body="Stephane Cohen has led Tadiran since November 2025. Product, customers, and finance sit in Petah Tikva. Atlanta, Beijing, and New Delhi run the regions."
            />
          </Reveal>
          <Reveal>
            <section className="about-people__group" aria-labelledby="people-company">
              <header>
                <h3 id="people-company">Company</h3>
              </header>
              <ol className="about-people__roster">
                <LeadershipRow person={ceo} featured />
                {companyLeaders.map((person) => (
                  <LeadershipRow key={person.name} person={person} />
                ))}
              </ol>
            </section>
            <section className="about-people__group" aria-labelledby="people-regions">
              <header>
                <h3 id="people-regions">Regions</h3>
                <p>Atlanta, Beijing, and New Delhi.</p>
              </header>
              <ol className="about-people__roster">
                {regionalLeaders.map((person) => (
                  <LeadershipRow key={person.name} person={person} />
                ))}
              </ol>
            </section>
          </Reveal>
        </div>
      </section>
      <section className="relationship-closing"><p className="cine-eyebrow">Let’s build what’s next</p><h2>It starts with a conversation.</h2><Link className="cine-button" href="/contact">Talk to our team ↗</Link></section>
    </RelationshipMotion>
  )
}
