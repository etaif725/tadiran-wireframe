# Production acceptance audit — 14 September 2026

**Disposition: not production-ready. Visual direction rejected by the user.**

This is a source inspection, not a passing runtime, accessibility, security, or performance certification. The production build was previously declined and has not been retried. No live service credentials were inspected or transmitted. No application code or visual design was changed during this audit.

## Authoritative scope

The original objective remains a complete client-ready website, preserving the actual supplied navbar and sitemap. Neither a framework migration nor a successful development preview fulfills this objective. Reference documents are the discovery requirements, information architecture specification, SITEMAP.txt, and the actual wireframe navigation data. Where older notes differ, preserve the actual navigation requested by the user and record the conflict.

## Evidence inventory

- `src/`: 28 source files at inspection time.
- `tests/`: zero files. A Vitest command in package.json is not test coverage.
- No production README, environment example, CI workflow directory, or deployment guide found at the conventional project paths.
- Product, solution, and industry detail pages all use one detail template and three short generic capability paragraphs per record.
- Local content records carry `review` or `future` status, with no published state or enforced publication workflow.
- No local environment files were found. This does not prove anything about environment values in an existing process or external hosting service.

## Findings and required work

| Priority | Finding and source evidence | Consequence | Required resolution and proof |
|---|---|---|---|
| Blocking | User rejected both visual directions. `src/app/page.tsx` and `globals.css` implement the second rejected design. | Current appearance cannot be presented as an accepted deliverable. | Calibrate against the requested single reference, then validate a complete representative page before extending its visual system. |
| High | `src/app/[collection]/[slug]/page.tsx` repeats the same generic architecture discussion across every detail page. | Route count disguises insufficient product and industry substance. | Build distinct product, solution, and industry content models. Map supplied source facts, actual capabilities, workflows, evidence, and conversion needs per page. |
| High | `src/content/portfolio.ts` declares an entry schema but does not parse its data or enforce approved publication status; sitemap includes all non-future records. | Setting launch approval can index content still marked for review. | Explicit publication policy, content validation, and tests proving draft/future content cannot become indexable through the global launch switch. |
| High | `tests/` is empty; no results prove build, lint, or typecheck gates. | Production quality claims are unsupported. | Meaningful schema, API delivery/failure, route integrity, navigation, and form workflow tests; fresh build/typecheck/lint evidence once execution is authorized. |
| High | `inquiryConfiguration()` depends on a webhook, token, Turnstile keys, site origin, and approved policy. No configured delivery was verified. | Sales and partner conversions are incomplete. | Client-approved receiving service, durable acknowledgement contract, authorized end-to-end delivery verification, and operational ownership. |
| High | `InquiryForm` assigns `requestKey` once and retains it after failure while fields remain editable. | A changed inquiry can reuse a key belonging to a different payload; upstream deduplication may reject it or associate it with the original submission. | Bind a key to an immutable submitted payload, distinguish unchanged retry from new request, and test ambiguous delivery without risking duplicates. |
| High | Partner step validation filters schema errors to selected keys; companyWebsite is excluded from step and final checks. | An invalid website can pass the browser flow and receive only a generic server rejection. | Align field and whole-form validation, return actionable field errors, and test invalid optional fields and back-navigation. |
| High | Partner schema makes type, territory and capabilities optional; the fourth step validates no keys. | Five visible steps do not establish meaningful partner qualification. | Restore requirements from the source onboarding specification, then obtain confirmation only for genuinely unresolved eligibility rules. |
| Medium | `consent:false as unknown as true` uses the accepted request type for unfinished form state. | Type safety is bypassed at a consent boundary. | Separate editable form values from validated submission data and derive the request only after successful validation. |
| Medium | Turnstile is rendered without an effect cleanup calling remove; widget lifecycle on remount is not verified. | Navigating between forms may leave stale verification resources or state. | Lifecycle cleanup, final-step verification behavior, and remount/expiry/error tests. |
| High | API reads a capped request body and times out outbound requests, but has no application rate limiter or verified infrastructure limit. | A bot challenge alone does not prove request-volume protection. | Define the deployment-layer request limit or shared limiter, verify enforcement, and measure retry/failure behavior. |
| High | API forwards an idempotency header but has no verified durable receiver, reconciliation, or delivery telemetry. | A response schema alone cannot establish reliable lead delivery. | Contract tests plus actual receiver evidence; privacy-preserving failure monitoring and recovery ownership. |
| Medium | UI, API, and content are largely compressed into very long source lines. | Review, maintenance, and targeted changes are unnecessarily difficult. | Format and refactor complex form/navigation logic into focused units; confirm behavior with tests. |
| High | Header source includes some keyboard behavior but no completed responsive/keyboard audit exists. | Accessibility and mobile readiness remain unproven. | Check focus order, mobile background interaction, Escape, search focus restoration, touch sizes, zoom, contrast, reduced motion, and screen-reader field errors. |
| High | No performance measurements exist for the new application. | Optimized image components and server rendering do not establish good loading or interaction performance. | Measure representative production pages and correct actual bottlenecks against explicit budgets. |
| Blocking for launch | Approved brand assets, evidence, policy, portal, CMS requirement and deployment destination remain unresolved. | Cannot responsibly represent this as a launchable client site. | Resolve from project/client sources; request only the missing client-owned choices. |

## Requirement status

| Original requirement | Current verdict | Evidence needed to close |
|---|---|---|
| Preserve full sitemap/navbar | Transcription present; complete behavior unverified | Automated destination/anchor checks and browser navigation across desktop/mobile |
| Distinctive client-ready design | Rejected | User-calibrated reference and rendered representative-page review |
| Complete accurate content | Incomplete | Source-to-page matrix, approved assets/claims, substantive individual page content |
| Responsive and accessible | Unverified | Representative and shared-interaction browser checks at narrow/wide widths and keyboard/zoom tests |
| Working inquiry and partner journeys | Incomplete | Validated qualification flow, configured services, confirmed delivery and failure handling |
| SEO and resource experience | Partial | Publication gating, server metadata checks, actual resource content, canonical/sitemap verification |
| Production code quality | Incomplete | Form refactor, formatting, passing meaningful tests/lint/typecheck/build |
| Deployment readiness | Incomplete | Environment contract, deployment procedure, monitoring/rollback, host-specific verification |
| Live publication | Not performed | Concrete reviewed release and user authorization |

## Next work sequence

1. Resolve the pending visual reference calibration; do not produce a third speculative full-site design.
2. Build a source-to-page content matrix and distinguish product, solution, and industry information needs.
3. Fix the independent form/data-contract defects above with focused tests, without treating them as visual progress.
4. Implement the calibrated page and shared interactions, inspect them, then expand to the full site.
5. Complete integration and deployment decisions, execute all quality gates, and audit against this original scope before declaring completion.

The project remains active and incomplete. This audit supersedes earlier optimistic descriptions of production maturity; it does not supersede the user's requested scope.
