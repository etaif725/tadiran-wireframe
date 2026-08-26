# Tadiran Telecom wireframe notes

Low-fidelity clickable prototype. Structure and vibe only. Copy, photography, product UI, metrics, and legal wording are placeholders.

## Structural direction from the live references

The prototype was rebuilt after reviewing the current public structures of Genesys, RingCentral,
Avaya, Mitel, Voiso, Nextiva, Intermedia, and XCALLY.

| Reference pattern | Tadiran adaptation |
|---|---|
| Genesys: concise outcome hero, AI narrative, early trust proof, product evidence, integrations, resources, closing expert CTA | Homepage opens with one enterprise outcome, an attached proof layer, product storytelling, resources, and a final expert conversation |
| Avaya: distinct enterprise CX and critical-communications narratives with cloud / hybrid / on-premise control | Solutions separate customer experience, enterprise communications, AI, and critical operations while keeping deployment choice visible |
| Mitel: solution families paired with customer evidence, industries, flexibility, and partner route | Homepage and Solutions use large family stories, vertical pathways, deployment choice, and dedicated partner acquisition |
| RingCentral / Nextiva: product interface as a primary storytelling device | Product and OmniCX sections use recognizable low-fidelity interface compositions instead of empty image rectangles |
| Voiso / XCALLY: benefits-to-product progression, integration confidence, security, and industry use cases | Solution detail progresses from outcome to workflow, platform, deployment, integration, evidence, and FAQ |
| Intermedia: industry workflows, platform difference, customer and partner stories, parallel sales / partner conversion | Industry and Partner pages have separate proof structures and separate buyer actions |

The layouts borrow hierarchy and journey patterns only. They do not reproduce competitor copy,
visual identity, proprietary interface designs, or public claims.

## Visual evidence carried from the meeting PDFs

The PDF screenshots were reviewed as page images, not only as extracted meeting text.

- The August 25 homepage board established the compact sequence used here: hero, trust proof,
  solution gateway, unified platform, industry pathways, conversion band, and footer.
- The August 25 About board established the narrative-band sequence: hero, trust, heritage
  timeline, mission / vision, values, global footprint, vertical evolution, and conversion.
- The August 19 presentation screenshot established six recurring capability ideas:
  AI-driven intelligence, hybrid mobility, omnichannel sync, voice-to-data, advanced security,
  and ecosystem integration.
- The August 19 critical-infrastructure screenshot established the relationship among
  high availability, mission-critical resilience, control-room workflows, and vertical proof.
- The August 25 OmniCX campaign established the base proposition used in the detailed CX route:
  “Stop making your agents switch tabs. All channels, one screen.”
- The screenshots favor product UI, gradients, limited logo use, and specific operational
  diagrams. The prototype now uses structured low-fidelity versions of those asset types.

## Motion architecture

- **Motion for React:** route fades, hero choreography, and reduced-motion-aware component entry.
- **GSAP + ScrollTrigger:** scroll reveals and subtle scene parallax across long-form pages.
- **Lottie:** a lightweight connected-communications orbit used in the hero and capability story.
- All motion respects `prefers-reduced-motion`. Page routes are lazy-loaded to keep the motion
  libraries and detailed templates from producing one oversized initial bundle.

## Source map

| Source | What landed in the prototype |
|---|---|
| 18 Aug meeting | Enterprise / CX / hybrid / on-premise stance. Master agents as technology service distributors. FMC and BYOD. Salesforce / CRM as an integration proof, not a live integration. |
| 19 Aug meeting | Omni-stack as contact-center bundle. Cloud vs on-premise distinction. Case study and testimonial placeholders. What's New module. Single-page industry template. Wireframes before sitemap. Nice.com / Genesys-class enterprise feel without copying it. AI-centric, not AI-slop. Mobile CTA placement. SEO / FAQ reserved. |
| 25 Aug meeting | Top nav: **Solutions**, **Products**, **Go-to-Market**. Unified-experience messaging. Gradients / video called out as later design assets, not wireframe decoration. About: heritage, mission, vision, team, verticals, leadership, sustainability, awards, AI-first and human-centered. PCI / PII called out as compliance notes, not logos. Demo video vs screenshots left open. |
| Approval package (22 Aug) | Page inventory, component IDs C-01–C-15, solution families, industry template, contact intent routing, partner program vs login vs five-step onboarding, proof-strip claims held for approval. |

## Navigation decision

The 22 Aug package used Solutions / Industries / Partners / Resources / Company.

The 25 Aug client direction is used instead:

- **Solutions** — outcome families
- **Products** — Aeonix, OmniCX, AVA, recording, analytics, mobile
- **Go-to-Market** — industries and partner journeys
- **Resources** — What's New and library
- **Company** — About, footprint, contact

Partner Login and Contact Sales stay in the utility / persistent actions. Public partner acquisition and authenticated login remain separate routes.

## Routes

| Route | Spec coverage |
|---|---|
| `/` | Homepage sequence: hero, proof, four families, deployment bridge, OmniCX evidence, industries, technical proof, placeholders, What's New, CTA |
| `/about` | Heritage, mission/vision, values, footprint, vertical evolution, leadership placeholders |
| `/solutions` | Outcome selector, six families, consultative deployment chooser |
| `/solutions/:slug` | Reusable solution detail |
| `/products` | Product family index |
| `/products/:slug` | Reusable product detail |
| `/industries` | Go-to-Market industry index |
| `/industries/:slug` | Reusable industry landing, including Financial Services as future |
| `/resources` | What's New, case/report placeholders, FAQ |
| `/contact` | Intent cards + short routed form |
| `/partners` | Partner program |
| `/partners/login` | Quiet auth surface, MFA reserved, non-enumerating error |
| `/partners/apply` | Five-step qualification form |

## Placeholders on purpose

- Proof metrics (60+ years, 41 countries, 4 HQ, 100% enterprise)
- Customer and partner stories, logos, testimonials
- Product screenshots, architecture diagrams, map
- Partner benefits, commissions, packages
- Language, support, callback, SSO, save-and-resume
- Privacy / cookie / legal copy
- Certification and PCI marks

## Open client dependencies

Product taxonomy and public names. Markets, languages, and routing. Public-use proof list. Partner program rules and reviewers. Form privacy, CRM, CAPTCHA, MFA. Whether a public demo or video exists. First approved stories and resource set.
