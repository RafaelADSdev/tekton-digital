"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>(".hero");
    const contact = document.querySelector<HTMLElement>(".contact-section");
    const pointer = { x: 0, y: 0, active: false };
    let frame = 0;

    const update = () => {
      frame = 0;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      root.style.setProperty("--page-progress", progress.toString());

      if (reduceMotion.matches) {
        root.style.removeProperty("--hero-parallax");
        pointer.active = false;
        contact?.classList.remove("is-lit");
        return;
      }

      // Parallax do hero: 0 no topo, 1 quando o hero terminou de sair.
      // As molduras usam esse valor com deslocamentos diferentes, então o
      // celular anda mais que o monitor e cria profundidade.
      if (hero) {
        const travel = hero.offsetHeight;
        const heroProgress = travel > 0 ? Math.min(Math.max(window.scrollY / travel, 0), 1) : 0;
        root.style.setProperty("--hero-parallax", heroProgress.toFixed(4));
      }

      // Luz da seção de contato: posição do ponteiro em % da própria seção,
      // recalculada também no scroll para a luz não descolar do cursor.
      if (contact && pointer.active) {
        const rect = contact.getBoundingClientRect();
        const x = ((pointer.x - rect.left) / rect.width) * 100;
        const y = ((pointer.y - rect.top) / rect.height) * 100;
        contact.style.setProperty("--pointer-x", `${x.toFixed(2)}%`);
        contact.style.setProperty("--pointer-y", `${y.toFixed(2)}%`);
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reduceMotion.matches) return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (!pointer.active) {
        pointer.active = true;
        contact?.classList.add("is-lit");
      }
      schedule();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      contact?.classList.remove("is-lit");
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    reduceMotion.addEventListener("change", schedule);
    contact?.addEventListener("pointermove", handlePointerMove, { passive: true });
    contact?.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduceMotion.removeEventListener("change", schedule);
      contact?.removeEventListener("pointermove", handlePointerMove);
      contact?.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("js");
      root.style.removeProperty("--hero-parallax");
      contact?.classList.remove("is-lit");
    };
  }, []);

  return null;
}
