"use client";

import Link from "next/link";
import { motion } from "motion/react";

import SectionLabel from "../SectionLabel/SectionLabel";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/heroo.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-black/30" />

      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 lg:px-10 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-7"
            >
              <SectionLabel label="Specialty Café · Since 2026" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(4.5rem,12vw,11rem)] leading-[0.78] tracking-[-0.04em] text-[#F4F0E7]"
              >
                The Art
                <br />
                <span className="italic text-white/90">of Coffee.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-9 max-w-md text-sm leading-7 text-white/65 lg:text-base"
            >
              Carefully crafted coffee, thoughtful dining, and an atmosphere
              designed for moments worth slowing down for.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/menu"
                className="group relative overflow-hidden bg-[#D4AF37] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-black"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#F3E5AB] transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative">Explore the Menu</span>
              </Link>

              <Link
                href="/about"
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
              >
                Discover NOVA
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden pb-2 lg:block"
          >
            <div className="flex flex-col items-end gap-3 text-right">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Mansoura · Egypt
              </span>

              <span className="h-px w-12 bg-white/20" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Scroll to explore
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-7 right-6 hidden items-center gap-3 lg:flex lg:right-10"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">Scroll</span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>
  );
}