"use client";

import { useState } from "react";
import { site } from "../config/site";
import Logo from "./Logo";

const navLinks = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#anasayfa"
          className="flex items-center gap-3"
          aria-label={`Anasayfaya dön - ${site.name}`}
        >
          <Logo size="sm" showText={false} />
          <div className="hidden sm:block">
            <p className="font-body text-sm font-light tracking-[0.2em] text-light">
              {site.logoShort}
            </p>
            <p className="text-[0.6rem] font-medium tracking-[0.15em] text-light/50">
              {site.logoSub}
            </p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Ana navigasyon"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={`${link.label} bölümüne git`}
              className="text-xs font-medium uppercase tracking-wider text-light/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            aria-label="Randevu al - İletişim bölümüne git"
            className="border border-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            Randevu
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-gold/20 bg-navy px-4 py-4 lg:hidden"
          aria-label="Mobil navigasyon"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={`${link.label} bölümüne git`}
                  className="block py-2.5 text-sm font-medium text-light/80 transition-colors hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#iletisim"
                aria-label="Randevu al - İletişim bölümüne git"
                className="block border border-gold py-2.5 text-center text-sm font-semibold text-gold"
                onClick={() => setMenuOpen(false)}
              >
                Randevu Al
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
