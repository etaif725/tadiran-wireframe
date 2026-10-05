# Warm Confidence — implementation notes

Direction A selected by the user. Implemented in the existing Next.js project.

- Homepage: warm ivory, official navy/blue, locally hosted Inter and Roboto, supplied logo PNGs.
- Reused existing project workplace and industry photography; no new generated media or third-party brand artwork.
- Scroll-linked OmniCX/Aeonix product panel, native scroll, static mobile and reduced-motion layouts. No video footage generated; Higgsfield is unavailable.
- Navigation follows later wireframe notes: Solutions, Products, Go-to-Market, Resources, Company. Industries now sit under Go-to-Market. Existing inner-page routes retained.
- Company metrics are attributed to the September 2026 supplied profile. No new performance claims added.
- This is a local preview. Existing forms, portal behavior, legal content and older inner-page claims still require the project's launch review; no live services were configured in this change.

Validation: production build and TypeScript passed; all 34 existing tests passed after updating the navigation assertions to the selected IA. Browser checked desktop hero, scroll product transition, industries, mobile overflow, mobile Go-to-Market links and sales contact navigation. Reduced-motion fallback implemented in CSS, not emulated in browser QA.

Files: src/components/warm-home.tsx (homepage content and scroll behavior), src/styles/warm-confidence.css (visual system), src/styles/warm-fonts.css and public/fonts/warm-*.ttf (local fonts), src/content/navigation.ts (navigation). Original homepage/layout snapshots are in the workspace design-direction/before-warm-confidence folder.
