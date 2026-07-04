"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10 shadow-sm">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Delta Control Projects logo"
            className="h-9 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-black uppercase">
              Delta
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gray-600 uppercase">
              Control Projects
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm uppercase tracking-wide transition-colors ${
                  active
                    ? "text-accent-500"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:+919822190996"
            className="ml-2 rounded-sm bg-accent-500 hover:bg-accent-600 transition-colors text-white text-sm font-semibold px-4 py-2 uppercase tracking-wide"
          >
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden text-black p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-black/10 px-5 pb-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-black/90 text-sm uppercase tracking-wide pt-3"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919822190996"
            className="rounded-sm bg-accent-500 text-white text-sm font-semibold px-4 py-3 uppercase tracking-wide text-center mt-1"
          >
            Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
