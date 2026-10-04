"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-[#F4F0E7]">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[170px]" />

        <div className="absolute left-[8%] top-[15%] h-px w-24 bg-white/10" />

        <div className="absolute bottom-[18%] right-[8%] h-px w-32 bg-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37]">
              Wrong turn
            </span>

            <span className="h-px w-8 bg-[#D4AF37]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-[clamp(9rem,25vw,22rem)] leading-[0.65] tracking-[-0.06em] text-white/[0.055]"
          >
            404
          </motion.div>

          <div className="relative -mt-5">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl">
              This table
              <br />
              <span className="italic text-white/35">doesn't exist.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/35">
              Looks like you've wandered somewhere NOVA hasn't opened yet.
              Let's get you back somewhere worth staying.
            </p>

            <Link
              href="/"
              className="mt-10 inline-flex bg-[#D4AF37] px-9 py-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#F3E5AB]"
            >
              Return to NOVA
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="absolute left-1/2 mt-20 -translate-x-1/2 text-[8px] uppercase tracking-[0.3em] text-white/15"
        >
          NOVA · Specialty Café
        </motion.div>
      </div>
    </main>
  );
}