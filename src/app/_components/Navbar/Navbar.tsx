"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 lg:px-10">

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-3xl font-medium tracking-[0.25em] text-white"
        >
          NOVA
        </Link>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/reservations"
            className="group relative inline-flex items-center overflow-hidden border border-[#D4AF37]/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors duration-300 hover:text-black"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0" />

            <span className="relative">
              Reserve a Table
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto text-white/70 transition-colors hover:text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-125" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="space-y-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-5">
            <Link
              href="/reservations"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#D4AF37] px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-black"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}