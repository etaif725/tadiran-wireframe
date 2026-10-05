# Product image composition correction

The initial implementation used percentage-height foreground boxes, negative bottom offsets, perspective transforms and an unrelated split background. On mobile, the screenshot extended below its scene; scroll movement increased the collision.

Replaced the six inner-page compositions with ProductComposition:

- One full photograph per scene, preserving people and context.
- Native image dimensions and automatic foreground height.
- Specific layouts for workspace, business phone and mobile app.
- Separate mobile crop and foreground placement.
- Contained overlays with 8px scroll travel and reserved vertical inset.
- Removed 38 obsolete selectors rather than adding another set of conflicting overrides.
- Original supplied screenshots and devices are unchanged.

Verified 24 scene/viewport combinations (six compositions at 320, 390, 768 and 1440px). All foregrounds are contained; no horizontal overflow. Results: composition-audit.json. Visually reviewed the full OmniCX desktop/mobile scene and the hospitality mobile scene after scrolling. Production build and TypeScript pass.

Current screenshot evidence: omnicx-corrected-desktop.png and omnicx-corrected-mobile.png. Earlier screenshots predate this correction.
