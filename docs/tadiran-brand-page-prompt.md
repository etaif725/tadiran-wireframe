# Tadiran Telecom page-generation prompt

Use this prompt as the shared brief for every new page, section, or component in this repository. Replace the bracketed page-specific fields before implementation.

## Reusable brand context

Build a production-grade page for Tadiran Telecom, an enterprise communications company with nearly 65 years of operational heritage. Tadiran helps IT, operations, contact-center, and channel leaders modernize unified communications, customer experience, critical communications, and governed AI across cloud, hybrid, and on-premise estates.

The page must help a qualified enterprise buyer understand one operating problem, see how Tadiran addresses it, and take one clear next step. Use accurate content from the repository. Do not invent customer names, adoption numbers, certifications, awards, prices, integrations, or product capabilities.

### Brand voice

- Sound experienced, direct, and useful.
- Lead with the operational outcome. Explain the technology after the problem is clear.
- Prefer short headlines and concrete language.
- Treat deployment as a choice shaped by the customer’s estate.
- Position AI as governed assistance inside a named workflow.
- Avoid hype, vague transformation claims, and generic telecom copy.

### Visual direction

Create a refined industrial-editorial interface inspired by signal routing and control systems.

- Core colors: deep navy `#08175a`, midnight `#050e37`, signal cyan `#0e94d2`, white, cool paper `#f3f3f3`, and slate `#475569`.
- Typography: Syne for display text and Source Sans 3 for body copy.
- Use deep navy as the dominant anchor. Use cyan only for signals, focus, active states, and meaningful emphasis.
- Build depth with layered panels, fine borders, radial light, restrained glass, and large low-contrast typographic forms.
- Keep glass effects legible and localized. Do not place body copy over busy imagery or transparent surfaces.
- Use asymmetric editorial grids, generous spacing, and compact operational labels.
- Avoid stock gradients, excessive pills, decorative dashboards without meaning, and consumer-style neon effects.

### Interaction and accessibility

- Use semantic Next.js and React markup.
- Preserve visible keyboard focus, logical heading order, descriptive link text, and WCAG AA contrast.
- Motion should clarify entry, state, or hierarchy. Keep transitions restrained and support `prefers-reduced-motion`.
- Every interaction must work with keyboard and touch.
- Design mobile-first. Stack complex grids below `760px`, keep tap targets at least 44px, prevent horizontal overflow, and preserve readable line lengths.

## Page-specific brief

Purpose: [lead capture, product evaluation, solution education, partner application, or resource discovery]

Audience: [specific buyer and operating context]

Primary problem: [the pressure the visitor already feels]

Desired outcome: [the practical result Tadiran enables]

Primary CTA: [one action and destination]

Secondary CTA: [optional supporting action]

Required proof: [verified products, workflows, deployment options, case evidence, or resources]

Content to preserve verbatim: [approved copy, if any]

## Standard page architecture

Choose only the sections needed for the page goal. Do not add sections to fill space.

1. Hero: one eyebrow, a short outcome-led headline, a supporting paragraph under 35 words, one primary CTA, and optional secondary action. Pair it with a meaningful product, environment, or signal-system visual.
2. Proof band: two to four verified reasons to continue. Use operational principles or real evidence.
3. Problem and outcome: show the current pressure, then the better operating model. Use a split layout on desktop and a single column on mobile.
4. Capabilities or workflows: use three to six concise entries. Titles should stay under six words. Each entry must connect to a buyer outcome.
5. Deployment: explain cloud, hybrid, and on-premise fit without forcing a false choice.
6. Related paths: link only to relevant products, solutions, industries, or resources.
7. Closing CTA: restate the next useful conversation. Keep one dominant action.

## Component recipes

### Footer

Create a deep-navy layered footer that feels like the final panel of a communications system. Include the Tadiran wordmark, the line “Intelligence in every interaction,” a concise enterprise statement, a “Start a conversation” CTA, data-driven directory columns, verified social destinations, legal links, and a back-to-top control. Add restrained glass highlights and an oversized decorative `TADIRAN` word behind the lower content. Keep the word decorative and hidden from assistive technology.

### Cards

Use a clear information hierarchy: small signal label, short title, one concise explanation, and an optional action. Use borders and tonal surface changes before shadows. Hover states may shift the border, surface, or arrow by a few pixels.

### CTAs

Use rounded rectangular controls with direct labels. Primary controls use cyan or navy based on surrounding contrast. Secondary controls use a light surface with a navy keyline. Include a compact directional icon and an obvious focus state.

### Motion

Use one coordinated reveal per section. Favor opacity with a 12–24px vertical shift over scaling. Durations should stay between 450ms and 800ms. Stagger related items by 50–90ms. Disable transforms and smooth scrolling when reduced motion is requested.

## Acceptance criteria

- The page has one explicit conversion goal and a named audience.
- All claims and links come from approved project content or verified official destinations.
- The design clearly belongs to the same Tadiran system as the header, footer, and shared templates.
- Mobile, keyboard, focus, contrast, reduced motion, metadata, and publication status are handled.
- Typecheck, lint, tests, and production build pass.
