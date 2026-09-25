"use client";

import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const clamp = (value: number) => Math.min(Math.max(value, 0), 100);
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Varredura de apresentação na primeira vez que o case aparece:
// mostra um pouco do antes, um pouco do depois e volta ao meio.
const INTRO_KEYFRAMES = [50, 78, 24, 50];
const INTRO_DURATION = 2600;
const JUMP_DURATION = 750;

export function CaseCompare() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(50);
  const [touched, setTouched] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const splitRef = useRef(50);
  const dragging = useRef<HTMLElement | null>(null);
  const frame = useRef(0);
  const touchedRef = useRef(false);

  const commit = useCallback((value: number) => {
    splitRef.current = value;
    setSplit(value);
  }, []);

  const cancelAnimation = useCallback(() => {
    if (frame.current) window.cancelAnimationFrame(frame.current);
    frame.current = 0;
  }, []);

  const markTouched = useCallback(() => {
    touchedRef.current = true;
    setTouched(true);
    cancelAnimation();
  }, [cancelAnimation]);

  // Interpola entre keyframes; cada trecho usa o mesmo ease para a
  // divisória desacelerar em cada ponto de parada.
  const animate = useCallback(
    (keyframes: number[], duration: number) => {
      cancelAnimation();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        commit(keyframes[keyframes.length - 1]);
        return;
      }
      const start = performance.now();
      const segments = keyframes.length - 1;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const position = progress * segments;
        const index = Math.min(Math.floor(position), segments - 1);
        const from = keyframes[index];
        const to = keyframes[index + 1];
        commit(from + (to - from) * ease(position - index));
        frame.current = progress < 1 ? window.requestAnimationFrame(tick) : 0;
      };
      frame.current = window.requestAnimationFrame(tick);
    },
    [cancelAnimation, commit],
  );

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (!touchedRef.current) animate(INTRO_KEYFRAMES, INTRO_DURATION);
      },
      { threshold: 0.45 },
    );
    observer.observe(stage);

    return () => {
      observer.disconnect();
      cancelAnimation();
    };
  }, [animate, cancelAnimation]);

  const jumpTo = (target: number) => {
    markTouched();
    animate([splitRef.current, target], JUMP_DURATION);
  };

  const moveTo = (target: HTMLElement, clientX: number) => {
    const rect = target.getBoundingClientRect();
    if (rect.width > 0) commit(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;
    markTouched();
    dragging.current = event.currentTarget;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.currentTarget, event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (dragging.current !== event.currentTarget) return;
    moveTo(event.currentTarget, event.clientX);
  };

  const handlePointerEnd = () => {
    dragging.current = null;
    setIsDragging(false);
  };

  const pointerHandlers = {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerEnd,
    onPointerCancel: handlePointerEnd,
  };

  const rounded = Math.round(split);
  const stageClass = [
    "case-stage compare-stage section",
    touched && "is-touched",
    isDragging && "is-dragging",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={stageClass}
      ref={stageRef}
      style={{ "--split": `${split}%`, "--split-num": split } as CSSProperties}
    >
      <input
        className="compare-range"
        type="range"
        min={0}
        max={100}
        step={1}
        value={rounded}
        onChange={(event) => {
          markTouched();
          commit(Number(event.target.value));
        }}
        aria-label="Comparar o site anterior com o site entregue pela Tekton"
        aria-valuetext={`${rounded}% site anterior, ${100 - rounded}% site novo`}
      />

      <div className="case-desktop">
        <div className="browser-bar dark" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>nauticaengenharia.com</span>
        </div>
        <div className="compare-view" {...pointerHandlers}>
          <Image
            src="/assets/cases/nautica-after-desktop.webp"
            alt="Site novo da Náutica Engenharia em desktop, entregue pela Tekton"
            width={1440}
            height={900}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 72vw"
          />
          <div className="compare-before">
            <Image
              src="/assets/cases/nautica-before-desktop.webp"
              alt="Site anterior da Náutica Engenharia em desktop"
              width={1440}
              height={900}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 72vw"
            />
          </div>
          <span className="compare-tag is-before" aria-hidden="true">
            <i /> Site anterior
          </span>
          <span className="compare-tag is-after" aria-hidden="true">
            <i /> Entrega Tekton
          </span>
          <span className="compare-divider" aria-hidden="true" />
          <span className="compare-handle" aria-hidden="true">
            <ChevronsLeftRight size={18} strokeWidth={2.4} />
          </span>
        </div>
      </div>

      <div className="compare-ruler" aria-hidden="true">
        <span className="compare-ruler-marker" />
      </div>

      <div className="compare-controls">
        <div className="compare-toggle" role="group" aria-label="Alternar comparação">
          <button type="button" aria-pressed={split > 60} onClick={() => jumpTo(100)}>
            Ver antes
          </button>
          <button type="button" aria-pressed={split < 40} onClick={() => jumpTo(0)}>
            Ver depois
          </button>
        </div>
        <p className="compare-hint" aria-hidden="true">
          <ChevronsLeftRight size={14} /> ou arraste a divisória
        </p>
      </div>

      <div className="case-mobile">
        <div className="case-mobile-label">ADAPTAÇÃO MOBILE</div>
        <div className="compare-view" {...pointerHandlers}>
          <Image
            src="/assets/cases/nautica-after-mobile.webp"
            alt="Site novo da Náutica Engenharia em celular"
            width={390}
            height={844}
            loading="lazy"
            sizes="(max-width: 700px) 34vw, 18vw"
          />
          <div className="compare-before">
            <Image
              src="/assets/cases/nautica-before-mobile.webp"
              alt="Site anterior da Náutica Engenharia em celular"
              width={390}
              height={844}
              loading="lazy"
              sizes="(max-width: 700px) 34vw, 18vw"
            />
          </div>
          <span className="compare-divider" aria-hidden="true" />
        </div>
      </div>

      <span className="case-stamp" aria-hidden="true">PROJETO REAL</span>
    </div>
  );
}
