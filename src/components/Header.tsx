"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

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
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contato">
        Falar com a equipe <ArrowUpRight size={16} aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
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
