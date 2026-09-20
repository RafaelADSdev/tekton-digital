"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const setProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      root.style.setProperty("--page-progress", progress.toString());
    };
    setProgress();
    window.addEventListener("scroll", setProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", setProgress);
      root.classList.remove("js");
    };
  }, []);

  return null;
}
