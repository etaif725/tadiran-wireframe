# Product and solution detail redesign

Scope: six product pages and nine solution detail pages. Design preview only; no authentication, deployment or inquiry delivery added. Approved homepage and overview components are unchanged.

## Source review

- Company Profile, pages 8–16: portfolio, Aeonix continuity/operational control, OmniCX workspace, critical operations, care, hospitality, deployment choice and AI direction.
- OmniCX BPO brochure, pages 1–4: channel continuity; unified workspace; routing, assistance, supervision, automation and integrations; customer demand → engagement → delivery. Quantified outcome claims were not republished without supporting study context.
- OmniCX Rollup Comparison: “Start anywhere. Continue everywhere.” and conversation continuity inform the CX solution.
- SmartHotel brochure, pages 2–4: hotel systems integration, deployment options, staff mobility, voice/video/chat, guest services and endpoints. OPERA/OPTIMA are described in the hospitality integration example only.
- Brand Guide: all 48 pages reviewed as rendered contact sheets. Navy/cyan identity, authentic logos and restrained product presentation retained. The approved site typography has not been globally replaced.

The supplied material is much more detailed for OmniCX and communications than for AVA, Analytics, Recording, OEM or MSO. Those pages use existing portfolio scope and conceptual workflows, not fabricated product screenshots, API specifications, performance numbers or certifications.

## Distinct page directions

| Page | Composition and signature content |
| --- | --- |
| OmniCX | Wide workspace/photo layers, channel flow, BPO service model |
| Aeonix | Business phone over an architectural workplace, interactive connection model, industry contexts |
| Mobile / Touch | Portrait photo and mobile device, staff mobility story and hospitality context |
| AVA | Photo-left introduction, voice waveform, assistance/handoff controls |
| Recording & Quality | Editorial panorama, recording/review diagram, coaching cycle |
| Analytics | Panorama and reporting concept, operational questions |
| Enterprise Communications | Wide team scene, office/field/control model, Aeonix photo/device feature |
| Omnichannel CX | Customer-led split scene, demand-to-delivery flow, workspace composition |
| AI & Analytics | Editorial introduction, separate assistance/insight paths |
| Critical Communications | Dark control-room scene, response model and three industry routes |
| Security & Resilience | Infrastructure photo, three distinct availability/control/recovery panels |
| Integrations & Deployment | System map, interactive deployment comparison, transition steps, hospitality example |
| Cloud Infrastructure | Panoramic city scene and staggered infrastructure layers |
| OEM | Product engineering introduction and layered product/integration model |
| MSO | Relationship-led introduction, market/technology partnership and delivery sequence |

## Motion and verification

GSAP controls entrances, photography, device parallax and Lottie diagram progress. Diagrams have accessible HTML labels and reduced-motion handling. There is no visible animation-off toggle. Interactive selectors change the accompanying copy.

- Production build: 43 routes generated successfully.
- TypeScript passed; 40 existing tests passed.
- All 15 detail pages checked at 320px for horizontal overflow and text/button bounds; all passed. See mobile-audit.json.
- 390px checks covered all routes except OEM before its redirect repair; OEM subsequently passed 320px and desktop.
- Desktop visual inspection covered OmniCX, Aeonix, Mobile / Touch and Critical Communications. Deployment, AVA, Recording and Analytics interaction controls were checked in the browser.
- Removed existing case-only OEM/MSO redirects that matched their lowercase destinations and looped. Both routes render; the former permanent OEM redirect remained cached in one browser tab, so its repaired page was also verified using a fresh preview query and a direct HTTP 200 response.

Screenshots document composition, not animation timing. Website copy and directions live in src/content/detail-directions.ts; existing portfolio routes and related links are retained.
