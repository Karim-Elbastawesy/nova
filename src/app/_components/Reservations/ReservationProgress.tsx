"use client";

import React from "react";
import { motion } from "motion/react";

const steps = [
  "Details",
  "Table",
  "Order",
  "Confirm",
];

export default function ReservationProgress({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const active = index <= currentStep;

          return (
            <React.Fragment key={step}>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: active ? 1 : 0.9,
                  }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-[9px] transition-colors ${
                    active
                      ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                      : "border-white/15 text-white/30"
                  }`}
                >
                  {index + 1}
                </motion.div>

                <span
                  className={`hidden text-[9px] uppercase tracking-[0.2em] sm:block ${
                    active ? "text-white/70" : "text-white/25"
                  }`}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="mx-3 h-px flex-1 bg-white/10 sm:mx-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: index < currentStep ? "100%" : "0%",
                    }}
                    className="h-full bg-[#D4AF37]"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}