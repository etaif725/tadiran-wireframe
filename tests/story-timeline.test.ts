import { describe, expect, it } from "vitest";
import { storyTimeline } from "../src/lib/story-timeline";
describe("scroll story", () => {
  it("isolates the travelling signal before the destination enters", () => {
    for (const progress of [0.25, 0.3, 0.4, 0.4374]) {
      const state = storyTimeline(progress);
      expect(state.chapter).toBe(-1);
      expect(state.opening).toBe(0);
      expect(state.workspace).toBe(0);
      expect(state.choice).toBe(0);
    }
  });
  it("holds each completed diagram for reading and supports reverse traversal", () => {
    expect(storyTimeline(0.2).draw).toBeGreaterThan(0.9);
    expect(storyTimeline(0.6).workspace).toBe(1);
    expect(storyTimeline(0.95).choice).toBe(1);
    const forward = [0.1, 0.3, 0.6, 0.9].map(storyTimeline);
    const reversed = [0.9, 0.6, 0.3, 0.1].map(storyTimeline).reverse();
    expect(reversed).toEqual(forward);
  });
  it("handles overscroll and invalid measurements without invalid state", () => {
    expect(storyTimeline(-2).chapter).toBe(0);
    expect(storyTimeline(2).chapter).toBe(2);
    expect(storyTimeline(NaN).progress).toBe(0);
  });
});
