"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const stageElements = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    const rulerLabels = Array.from(document.querySelectorAll<HTMLElement>(".method-ruler i"));
    root.style.setProperty("--method-progress", "0.25");

    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeIndex = stageElements.indexOf(entry.target as HTMLElement);
            stageElements.forEach((element) => element.classList.remove("is-active"));
            rulerLabels.forEach((label) => label.classList.remove("is-active"));
            entry.target.classList.add("is-active");
            rulerLabels[activeIndex]?.classList.add("is-active");
            root.style.setProperty(
              "--method-progress",
              ((activeIndex + 1) / stageElements.length).toString(),
            );
          }
        });
      },
      { threshold: 0.6 },
    );
    stageElements.forEach((element) => stageObserver.observe(element));

    const setProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      root.style.setProperty("--page-progress", progress.toString());
    };
    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });

    return () => {
      stageObserver.disconnect();
      window.removeEventListener("scroll", setProgress);
      root.classList.remove("js");
    };
  }, []);

  return null;
}
