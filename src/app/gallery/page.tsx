"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const galleryItems = [
  {
    id: 1,
    size: "large",
    image: "/images/gallery/gallery-01.jpg",
    label: "The ritual",
  },
  {
    id: 2,
    size: "small",
    image: "/images/gallery/gallery-02.jpg",
    label: "Morning light",
  },
  {
    id: 3,
    size: "small",
    image: "/images/gallery/gallery-03.jpg",
    label: "Behind the bar",
  },
  {
    id: 4,
    size: "wide",
    image: "/images/gallery/gallery-04.jpg",
    label: "Slow afternoons",
  },
  {
    id: 5,
    size: "small",
    image: "/images/gallery/gallery-05.jpg",
    label: "Details",
  },
  {
    id: 6,
    size: "small",
    image: "/images/gallery/gallery-06.jpg",
    label: "The space",
  },
  {
    id: 7,
    size: "large",
    image: "/images/gallery/gallery-07.jpg",
    label: "After dark",
  },
  {
    id: 8,
    size: "wide",
    image: "/images/gallery/gallery-08.jpg",
    label: "Together",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#F4F0E7]">
      {/* INTRO */}
      <section className="relative px-6 pb-24 pt-48 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                01 · The Gallery
              </span>
            </div>

            <h1 className="font-display text-[clamp(5rem,13vw,12rem)] leading-[0.78] tracking-[-0.045em]">
              A glimpse
              <br />
              <span className="italic text-white/35">of NOVA.</span>
            </h1>

            <div className="mt-12 flex max-w-2xl justify-between gap-10">
              <p className="text-sm leading-7 text-white/40">
                Coffee, people, light, texture and the small moments between
                them. This is NOVA through a different lens.
              </p>

              <span className="hidden shrink-0 pt-1 text-[9px] uppercase tracking-[0.25em] text-white/25 sm:block">
                Mansoura · Egypt
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 pb-32 lg:px-10 lg:pb-48">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {galleryItems.map((item, index) => {
            const gridClass =
              item.size === "large"
                ? "lg:col-span-7 aspect-[4/5]"
                : item.size === "wide"
                  ? "lg:col-span-12 aspect-[16/7]"
                  : "lg:col-span-5 aspect-[4/5]";

            return (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.04,
                }}
                className={`group relative overflow-hidden bg-[#0b0a08] ${gridClass}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/25" />

                <figcaption className="absolute bottom-5 left-5 translate-y-2 text-[9px] uppercase tracking-[0.3em] text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/70">
                  {item.label}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[1200px] text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
            Come see it yourself
          </span>

          <h2 className="mt-7 font-display text-6xl leading-[0.9] sm:text-7xl lg:text-9xl">
            Pictures are
            <br />
            <span className="italic text-white/35">never enough.</span>
          </h2>

          <Link
            href="/reservations"
            className="mt-12 inline-flex border border-[#D4AF37]/60 px-9 py-5 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Find Your Table
          </Link>
        </div>
      </section>
    </main>
  );
}