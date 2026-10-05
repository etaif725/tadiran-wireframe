# Cinematic redesign — October 2, 2026

The user's cinematic brief and corrections govern the implementation. Old wireframe documents are content references, not the visual specification.

## Contextual image collection
32 new images in public/brand/cinema/sections, each assigned a specific composition. Every product, solution and industry has its own photograph. Company, partners, resources, collection overviews and homepage product features also have dedicated imagery. The three original campaign images are reserved for the opening story.

Left/right photo panels keep copy outside centered human scenes. Panoramas put the heading above the image. Practical equipment details, overhead collaboration, intimate portraits, wide urban environments and an abstract material composition provide varied framing. Real Tadiran screenshots and logos remain supplied originals. Generated photographs illustrate use cases; they are not evidence of named deployments.

See image-composition-plan.md for the composition map and campaign-image-provenance.json for every final prompt and source file. Generation used the built-in image generator, as authorized by the user. The rejected home-uc variant included an invented UI; it was replaced before integration.

## Motion
GSAP 3 and ScrollTrigger now own the hero's pinned timeline, photographic wipes, camera movement, staggered copy, product layers, section reveals, menu entrances and page progress. Lottie Web renders a separate authored signal for each hero photograph; its frames are scrubbed by the same GSAP timeline. Paths follow the visible light segments in the source images, and gaps preserve foreground occlusion. Photography and Lottie use the same coordinate system and crop. The old independent travelling line and custom cinema-timeline calculator have been removed.

Desktop and mobile use the pinned story with breakpoint-specific composition. Screens shorter than 620px use flowing chapters with GSAP movement; OS reduced-motion preference removes motion automatically. No visible motion-free option is provided. Inactive pinned chapters are inert. Homepage interfaces and device cutouts sit over full photographic backgrounds, with separate GSAP depth movement. Menu art uses explicit image sizing and a transparent supplied phone cutout. Motion remains authored vector animation and photographic movement, not generated live-action footage.

## Validation
Production build, TypeScript and 40 tests pass. The current tests include asset existence, unique detail-page imagery and Lottie/source-image coordinate registration. Obsolete tests for the removed timeline are removed. Browser review covers desktop and mobile scene holds, reverse scrolling, real rendered Lottie path changes, menu media and photographic product overlays. Screenshots in motion-review are evidence of composition only; still screenshots cannot establish motion quality.

## Editing
- src/content/campaign-images.ts: image paths, descriptions and layouts
- src/content/cinema.ts: opening story content and context-to-image lookup
- src/components/cinema-interior.tsx: section-specific hero layouts
- src/components/cinema-stage.tsx and src/lib/story-signals.ts: GSAP choreography and Lottie assets
- src/components/feature-motion.tsx: homepage product motion
- src/styles/motion-system.css: current motion, hero and overlay composition styles
- /style-tile: complete visual collection

Forms and portal configuration remain as previously implemented.

## Targeted responsive repairs

Navigation collapses at 1100px. The mobile menu is opaque, viewport-bounded and independently scrollable, with separate 44px-minimum links. Background content is inert while it is open. Desktop feature images no longer overlap menu copy; CTA contrast is restored. Product photographs clip their own transforms, and the legacy mobile UI bottom offset is removed. Reveal observation begins before viewport entry to avoid blank sections when scrolling quickly.

Repair review covered the desktop Products menu and second story chapter at 1440px, the tablet opening at 1024px, the mobile homepage and OmniCX detail at 390px, and hospitality detail and product navigation at 320px. This does not establish full visual acceptance or continuous footage: the hero remains animated still photography.
