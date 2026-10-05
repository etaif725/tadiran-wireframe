"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { storyChapters } from "@/content/brand-story";
import { storyTimeline, STORY_TRAVEL_VH } from "@/lib/story-timeline";
import { SignalArt } from "./signal-art";

export function BrandStory() {
  const root = useRef<HTMLElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [readingMode, setReadingMode] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia(
      "(max-width: 760px), (max-height: 600px)",
    );
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let raf = 0,
      active = false,
      visible = true;
    const draw = () => {
      raf = 0;
      if (!active || !visible) return;
      const state = storyTimeline(
        -element.getBoundingClientRect().top /
          Math.max(1, element.offsetHeight - window.innerHeight),
      );
      setChapter(state.chapter);
      const styles: Record<string, number | string> = {
        "--story-progress": state.progress,
        "--opening": state.opening,
        "--workspace": state.workspace,
        "--choice": state.choice,
        "--path-draw": 1 - state.draw,
        "--core": state.opening,
        "--traveller": state.chapter === -1 ? 1 : 0,
        "--signal-x": `${Math.sin(state.signal * Math.PI * 2) * 130}px`,
        "--signal-y": `${-Math.sin(state.signal * Math.PI) * 140}px`,
      };
      Object.entries(styles).forEach(([key, value]) =>
        element.style.setProperty(key, String(value)),
      );
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const configure = () => {
      active =
        !readingMode &&
        !reduced.matches &&
        !compact.matches &&
        !connection?.saveData;
      setEnhanced(active);
      element.dataset.enhanced = String(active);
      if (!active) setChapter(0);
      schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    });
    observer.observe(element);
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", configure);
    reduced.addEventListener("change", configure);
    compact.addEventListener("change", configure);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", configure);
      reduced.removeEventListener("change", configure);
      compact.removeEventListener("change", configure);
    };
  }, [readingMode]);
  return (
    <section
      className="brand-story"
      ref={root}
      aria-label="Tadiran connected communications story"
      style={{ "--story-travel": `${STORY_TRAVEL_VH}svh` } as CSSProperties}
    >
      <div className="brand-story__stage">
        <div className="brand-story__topline">
          <span>COMMUNICATIONS. CUSTOMER EXPERIENCE. CONNECTION.</span>
          <div className="brand-story__controls">
            {enhanced && (
              <button
                type="button"
                onClick={() => {
                  setReadingMode(true);
                  root.current?.scrollIntoView({
                    behavior: "instant",
                    block: "start",
                  });
                }}
              >
                Read without motion
              </button>
            )}
            <a href="#solutions">
              Skip the story <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="brand-story__composition">
          <div className="brand-story__chapters">
            {storyChapters.map((item, index) => {
              const hidden = enhanced && chapter !== index;
              const Heading = index === 0 ? "h1" : "h2";
              return (
                <article
                  key={item.number}
                  className={`brand-story__chapter${hidden ? "" : " is-current"}`}
                  inert={hidden}
                  aria-hidden={hidden || undefined}
                >
                  <p className="brand-kicker">
                    <span>{item.number} /</span> {item.label}
                  </p>
                  <Heading>
                    {item.title.replace(item.accent, "")}
                    <em>{item.accent}</em>
                  </Heading>
                  <p className="brand-story__body">{item.body}</p>
                  <Link className="brand-button" href={item.href}>
                    {item.action}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              );
            })}
          </div>
          <SignalArt />
        </div>
        <div className="brand-story__bottom">
          <span>Simply done right.</span>
          <div className="brand-story__track" aria-hidden="true">
            <i />
          </div>
          <span>
            {enhanced
              ? chapter < 0
                ? "CONNECTING"
                : `0${chapter + 1} / 03`
              : "SCROLL TO EXPLORE"}{" "}
            <b aria-hidden="true">↓</b>
          </span>
        </div>
      </div>
    </section>
  );
}
