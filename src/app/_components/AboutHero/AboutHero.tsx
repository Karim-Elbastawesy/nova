"use client";

import { motion } from "motion/react";

import SectionLabel from "../../_components/SectionLabel/SectionLabel";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-125 items-end overflow-hidden bg-[#0b0a08] px-6 pb-16 pt-40 lg:px-10 lg:pb-20">
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/8 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel label="About Us" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.82] tracking-[-0.03em] text-[#F4F0E7]"
          >
            Born on the Nile,
            <br />
            <span className="italic text-white/45">built for stillness.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 max-w-md text-sm leading-7 text-white/45"
        >
          NOVA opened its doors on the Corniche in 2026, built on one
          conviction: a city that moves fast still deserves a place to slow
          down.
        </motion.p>
      </div>
    </section>
  );
}