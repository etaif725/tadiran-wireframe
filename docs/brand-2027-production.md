# Tadiran website — October 2026 design revision

## Direction
Connection, made clear. White-led editorial layouts, deep blue (#081746), Tadiran cyan (#009BD7), pale blue (#CFEAF4), and OmniCX electric blue (#0866FF). Small text uses darker #007CAC for readable contrast on white. Source Sans 3 is locally hosted and uses a clear sans-serif hierarchy consistent with the supplied brochures; it is an implementation choice, not a claim about an official brand font.

The homepage is an authored, scroll-driven SVG composition. This is a working vector animation, not generated video or a Lottie JSON export. Higgsfield image generation, video generation, model-schema and job-retrieval tools were not exposed to this conversation. No alternative generation provider was used. No new image/video jobs were submitted or billed.

## Preview and editing
Run `npm run dev` in this project. Website: http://localhost:3000. Style tile: http://localhost:3000/style-tile. This revision has not been publicly deployed or pushed.

- Homepage copy, product pathways, industries and evidence: `src/content/brand-story.ts`.
- Homepage section structure: `src/app/page.tsx`.
- Shared design tokens and new layouts: `src/styles/brand-2027.css`.
- Style tile: `src/app/style-tile/page.tsx` (uses the live shared styles).
- Story interaction: `src/components/brand-story.tsx`.
- Vector artwork: `src/components/signal-art.tsx`.
- Piecewise timing: `src/lib/story-timeline.ts`.
- Existing product, solution and industry content: `src/content/portfolio.ts`.

Edit these source files and rebuild to publish changes. There is no local-storage editor and no implied shared CMS.

## Logo rule
The shared Brand component always uses the complete Tadiran + “simply done right.” lockup. Existing SVG masters are preserved at `public/brand/tadiran-lockup.svg` and `public/brand/tadiran-lockup-on-dark.svg`. The white header and partner login use the color lockup; the navy footer uses the white lockup. The favicon now also uses the complete lockup. No logo was redrawn. Removed the footer's standalone decorative brand symbol.

## Source material and asset provenance
Reviewed every page of:
- SmartHotel_Modern_Corporate_Brochure_A4.pdf — hospitality language, cyan accents, blue line icons, product imagery.
- Tadiran_Telecom_Company_Profile.pdf — portfolio, deployment language, company statistics, navy/white composition and selected original images.
- OmniCX_BPO_Brochure_100dpi_lossless.pdf — channel convergence, workspace story, light diagrams and electric-blue accents.
- OmniCX_Rollup_Comparison.pdf — short outcome-led headlines, selective human imagery and continuity across channels. Its symbol/wordmark-only logo arrangements were not adopted because the user's complete-lockup requirement takes precedence.

The homepage's 60+ years, 41 countries, 4 regional offices and 2 R&D centers are taken from company-profile page 3, September 2026. No testimonial, performance uplift or new customer claim was invented.

Original extracted raster assets remain in `public/brand/reference-assets/*.png`. WebP versions are encoded without enlargement and referenced by the website. `provenance.json` records source PDF image references, original dimensions, browser filenames and bytes. Eight browser assets together total 555,578 bytes; they are loaded only on pages that use them. The homepage itself requests no photography or video.

Catalog thumbnail grids were removed. Product detail pages use supplied product/device imagery. Relevant industry pages use the company-profile photographs. Other supporting illustration slots use authored line diagrams. Existing legacy media files were preserved.

## Visual Story
| Scene | Visual story | Website copy |
| --- | --- | --- |
| 01 — Opening | Voice, message, email and people surround a shared center; cyan routes draw inward. | Intelligence in every interaction. Explore our solutions. |
| 02 — Handoff | Source nodes disappear. A single signal moves alone; destination remains hidden. | No copy — let the motion lead. |
| 03 — Workspace | A unified workspace appears after the signal arrives. | Every channel. One conversation. Discover OmniCX. |
| 04 — Choice | The workspace leaves; cloud, on-premises and hybrid paths emerge. | Modernization with choice. Talk to Tadiran. |

Active travel is four viewports (400svh), plus one viewport for the visible stage. Opening: 1 viewport; isolated signal: .75; workspace: 1.25; deployment: 1. Drawing is held at the end of the opening; the workspace holds between normalized .52 and .71; deployment holds from .84 to 1. SVG transforms are computed from continuous scroll progress and reverse deterministically. No frame fetches, decoding queue, or video-seek latency are involved.

Small screens (<=760px), short windows (<=600px), reduced-motion preference and data-saving mode use ordinary page flow with every chapter and action. “Read without motion” provides the same content-first mode manually. “Skip the story” jumps to solutions. Hidden chapter links are inert and excluded from accessibility navigation. Scroll events schedule a single animation frame; offscreen rendering is suspended; listeners and observer are removed on teardown.

## Prepared Higgsfield production brief — not submitted
Create one seamless, restrained motion-design sequence inspired by the supplied OmniCX brochure. White field, deep blue #081746 and precise cyan #009BD7 paths; small electric blue #0866FF accents only. Keep the left 45 percent empty for editable website text. Place simple thin-outline voice, message and email icons around a shared signal in the center-right. No logos, text, letters, interface copy, cuts, photorealistic people, purple hues, faceted crystals or black glass.

Beat A: hold clean starting composition, then draw channel routes toward the central signal. Beat B: every source node and route exits; isolate one travelling cyan signal, smoothly moving along a gentle curved path. Destination must remain completely out of frame until the end of this beat. Beat C: signal arrives; a restrained workspace abstraction forms around it with the same lighting, scale and palette. Beat D: workspace resolves into three connection branches; hold the final composition. Center essential action so it survives responsive cropping. Confirm actual model duration/resolution/reference controls before submitting; the intended starting duration is approximately 10–12 seconds only if supported. Do not bake any website text into pixels.

No model was selected because its callable schema is unavailable. If connected clips are needed, generate sequentially using the accepted outgoing raster frame as the next input, inspect seams, and preserve originals. Integrate only after visual review. The pre-existing `tadiran-signal-story*` clips and frame sequence remain untouched and unused: the purple/faceted poster conflicts with this direction and their generation provenance was not established in this session.

## Launch dependencies
The contact form is explicitly labeled as a preview and disabled when its configured inquiry destination, verification and privacy configuration are unavailable. It never reports a successful send in that state. A real submission destination and the project's existing required server configuration must be supplied before launch. Do not put credentials into source or this document.

Higgsfield media production remains pending tool access. The current SVG experience is runnable and reviewable independently. No public launch was performed.

## Verification completed
- Production build: passed; 43 pages generated, with TypeScript validation.
- Tests: 34 passed across 6 files, including isolated transition, reading holds, reverse traversal and progress clamping.
- ESLint: passed with no warnings after removing an existing unused import.
- Asset check: all 8 extracted originals, all 8 WebP variants and both full logo lockups resolve and decode.
- Browser: desktop 1280 x 720, mobile 390 x 844; homepage and OmniCX product page have no horizontal overflow. Logo tagline remains visible.
- Ordinary scrolling checked at opening, isolated handoff, workspace, deployment and reverse traversal. Skip-story action reaches solutions. Hidden chapters are inert. Static reading mode reveals all three chapters and actions.
- Mobile navigation tested through Products → OmniCX. Product image loads. Contact preview notice and disabled submit verified. Style tile logos load correctly. Homepage console has no captured errors.
- The same static branch is used for reduced-motion and data-saving preferences. Manual static mode and mobile fallback were browser-tested; OS-level motion preference and network data-saving emulation were not toggled in the available browser tools.
- Existing non-blocking tooling notices: Next ignores a lockfile outside this repository; Vite warns about a future config-loader default. No dependencies or account settings were changed.

A local preview is delivered; live form delivery, external services and generated video are not claimed as tested or complete.
