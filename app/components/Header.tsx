"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, waLink } from "@/app/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#beranda" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Otak-Otak Sehati"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-cream">
            Otak-Otak <span className="text-gold-light">Sehati</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-cream/80 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Halo, saya ingin memesan Otak-Otak Sehati.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-gold-light to-gold px-5 py-2 text-sm font-semibold text-forest-dark transition-transform hover:scale-105 lg:inline-block"
        >
          Pesan via WA
        </a>

        <button
          aria-label="Buka menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/40 text-cream lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`overflow-hidden bg-forest/98 transition-[max-height,border-color] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[32rem] border-t border-gold-light/20"
            : "max-h-0 border-t border-transparent"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-cream/85 active:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink("Halo, saya ingin memesan Otak-Otak Sehati.")}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            className="mb-2 mt-2 rounded-full bg-gradient-to-r from-gold-light to-gold py-3 text-center text-sm font-semibold text-forest-dark"
          >
            Pesan via WA
          </a>
        </nav>
      </div>
    </header>
  );
}
