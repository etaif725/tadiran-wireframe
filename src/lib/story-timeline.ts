export const STORY_TRAVEL_VH = 400;
export const clamp = (value: number) =>
  Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
const segment = (p: number, start: number, end: number) =>
  clamp((p - start) / (end - start));
// Four independent beats: 1vh opening, .75vh travel, 1.25vh workspace, 1vh choice.
// The visible stage is additional to the four viewport heights of active travel.
export function storyTimeline(progress: number) {
  const p = clamp(progress);
  return {
    progress: p,
    chapter: p < 0.25 ? 0 : p < 0.4375 ? -1 : p < 0.75 ? 1 : 2,
    opening: 1 - segment(p, 0.22, 0.25),
    signal: segment(p, 0.25, 0.4375),
    workspace: segment(p, 0.4375, 0.52) * (1 - segment(p, 0.71, 0.75)),
    choice: segment(p, 0.75, 0.84),
    draw: 0.22 + 0.78 * segment(p, 0, 0.21),
  };
}
