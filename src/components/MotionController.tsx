"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const hero = document.querySelector<HTMLElement>(".hero");
    const contact = document.querySelector<HTMLElement>(".contact-section");
    const glow = contact?.querySelector<HTMLElement>(".contact-glow");
    const pointer = { x: 0, y: 0, active: false };
    const entrances = new Set<Animation>();
    let frame = 0;

    // Avoid restarting the hero when hydrating an anchor or a restored scroll position.
    if (window.scrollY < 24 && !window.location.hash && !reduceMotion.matches) {
      root.classList.add("js");
    }

    const finishEntrances = () => {
      entrances.forEach((animation) => animation.cancel());
      entrances.clear();
    };

    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      root.style.setProperty("--page-progress", progress.toString());

      if (reduceMotion.matches || !finePointer.matches || root.dataset.motionInput === "keyboard") {
        hero?.style.removeProperty("--hero-parallax");
        pointer.active = false;
        contact?.classList.remove("is-lit");
        return;
      }

      if (hero && window.innerWidth > 820 && window.scrollY <= hero.offsetHeight) {
        const travel = hero.offsetHeight;
        const progress = travel > 0 ? Math.min(Math.max(window.scrollY / travel, 0), 1) : 0;
        hero.style.setProperty("--hero-parallax", progress.toFixed(4));
      }

      if (contact && glow && pointer.active) {
        const rect = contact.getBoundingClientRect();
        const x = ((pointer.x - rect.left) / rect.width) * 100;
        const y = ((pointer.y - rect.top) / rect.height) * 100;
        contact.style.setProperty("--pointer-x", `${x.toFixed(2)}%`);
        contact.style.setProperty("--pointer-y", `${y.toFixed(2)}%`);
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const onKeyboard = () => {
      root.dataset.motionInput = "keyboard";
      root.classList.remove("js");
      hero?.style.removeProperty("--hero-parallax");
      finishEntrances();
      schedule();
    };
    const onPointer = () => {
      root.dataset.motionInput = "pointer";
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reduceMotion.matches || !finePointer.matches) return;
      onPointer();
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      contact?.classList.add("is-lit");
      schedule();
    };
    const handlePointerLeave = () => {
      pointer.active = false;
      contact?.classList.remove("is-lit");
    };
    const onPreferenceChange = () => {
      if (reduceMotion.matches) {
        root.classList.remove("js");
        finishEntrances();
      }
      hero?.style.removeProperty("--hero-parallax");
      schedule();
    };

    // Content stays visible in CSS. Only elements initially below the fold are observed.
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      ".section-intro > *, .service-row, .case-header > *, .case-details > *, .capabilities-inner > div:first-child, .audit-board, .evidence-heading, .evidence-grid > li, .team-heading > *, .team-grid article, .contact-copy > *",
    )).filter((element) => element.getBoundingClientRect().top >= window.innerHeight);

    const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer?.unobserve(entry.target);
        if (reduceMotion.matches || root.dataset.motionInput === "keyboard") continue;
        const element = entry.target as HTMLElement;
        if (typeof element.animate !== "function") continue;
        const animation = element.animate(
          [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 420, delay: Math.min(order++ * 40, 120), easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
        );
        entrances.add(animation);
        animation.onfinish = () => entrances.delete(animation);
        animation.oncancel = () => entrances.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px 8px 0px" }) : null;
    targets.forEach((element) => observer?.observe(element));

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("keydown", onKeyboard, true);
    window.addEventListener("pointerdown", onPointer, true);
    reduceMotion.addEventListener("change", onPreferenceChange);
    finePointer.addEventListener("change", onPreferenceChange);
    contact?.addEventListener("pointermove", handlePointerMove, { passive: true });
    contact?.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      observer?.disconnect();
      finishEntrances();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("keydown", onKeyboard, true);
      window.removeEventListener("pointerdown", onPointer, true);
      reduceMotion.removeEventListener("change", onPreferenceChange);
      finePointer.removeEventListener("change", onPreferenceChange);
      contact?.removeEventListener("pointermove", handlePointerMove);
      contact?.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("js");
      delete root.dataset.motionInput;
      root.style.removeProperty("--page-progress");
      root.style.removeProperty("--hero-parallax");
      hero?.style.removeProperty("--hero-parallax");
      contact?.classList.remove("is-lit");
      contact?.style.removeProperty("--pointer-x");
      contact?.style.removeProperty("--pointer-y");
    };
  }, []);

  return null;
}
