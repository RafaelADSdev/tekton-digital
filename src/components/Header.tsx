"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [...siteConfig.nav.map((item) => item.href), "#contato"]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const updateSection = () => {
      const readingLine = Math.max(100, window.innerHeight * 0.35);
      const current = sections.filter((section) => section.getBoundingClientRect().top <= readingLine).at(-1);
      setActiveSection(current ? `#${current.id}` : "");
    };
    const scheduleSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateSection();
      });
    };
    updateSection();
    window.addEventListener("scroll", scheduleSection, { passive: true });
    window.addEventListener("resize", scheduleSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleSection);
      window.removeEventListener("resize", scheduleSection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 1101px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    const closeOutsideMenu = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!menuPanel.current?.contains(target) && !menuButton.current?.contains(target)) {
        setOpen(false);
      }
    };
    closeOnDesktop();
    document.addEventListener("pointerdown", closeOutsideMenu);
    document.addEventListener("focusin", closeOutsideMenu);
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutsideMenu);
      document.removeEventListener("focusin", closeOutsideMenu);
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Tekton Labs, ir para o topo">
        <Image
          src="/assets/brand/tekton-logo.png"
          alt="Tekton Labs"
          width={720}
          height={194}
          priority
        />
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {siteConfig.nav.map((item) => (
          <a key={item.href} href={item.href} aria-current={activeSection === item.href ? "location" : undefined}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contato" aria-current={activeSection === "#contato" ? "location" : undefined}>
        Falar com a equipe <ArrowUpRight size={16} aria-hidden="true" />
      </a>

      <button
        ref={menuButton}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div
        ref={menuPanel}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Navegação móvel">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "location" : undefined}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-contact" href="#contato" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Falar com a equipe <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
