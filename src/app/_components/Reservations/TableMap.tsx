"use client";

import React from "react";
import { motion } from "motion/react";

export type Table = {
  id: number;
  seats: number;
  type: "window" | "standard" | "sofa" | "bar";
  available: boolean;
  position: string;
};

const tables: Table[] = [
  {
    id: 1,
    seats: 2,
    type: "window",
    available: true,
    position: "left-[10%] top-[18%]",
  },
  {
    id: 2,
    seats: 2,
    type: "window",
    available: true,
    position: "left-[35%] top-[18%]",
  },
  {
    id: 3,
    seats: 4,
    type: "standard",
    available: true,
    position: "left-[63%] top-[18%]",
  },
  {
    id: 4,
    seats: 4,
    type: "standard",
    available: false,
    position: "left-[20%] top-[48%]",
  },
  {
    id: 5,
    seats: 6,
    type: "standard",
    available: true,
    position: "left-[48%] top-[48%]",
  },
  {
    id: 6,
    seats: 2,
    type: "standard",
    available: true,
    position: "left-[78%] top-[48%]",
  },
  {
    id: 7,
    seats: 4,
    type: "sofa",
    available: true,
    position: "left-[12%] top-[76%]",
  },
  {
    id: 8,
    seats: 6,
    type: "sofa",
    available: false,
    position: "left-[45%] top-[76%]",
  },
];

export default function TableMap({
  selectedTable,
  onSelect,
}: {
  selectedTable: number | null;
  onSelect: (table: Table) => void;
}) {
  return (
    <div className="relative aspect-[1.4] min-h-[500px] overflow-hidden border border-white/10 bg-[#0b0a08]">
      {/* WINDOWS */}
      <div className="absolute left-0 right-0 top-0 flex h-10 border-b border-white/10">
        <div className="flex flex-1 items-center justify-center border-r border-white/10 text-[8px] uppercase tracking-[0.25em] text-white/20">
          Window
        </div>
        <div className="flex flex-1 items-center justify-center border-r border-white/10 text-[8px] uppercase tracking-[0.25em] text-white/20">
          Window
        </div>
        <div className="flex flex-1 items-center justify-center text-[8px] uppercase tracking-[0.25em] text-white/20">
          Window
        </div>
      </div>

      {/* BAR */}
      <div className="absolute bottom-5 left-1/2 h-8 w-[70%] -translate-x-1/2 border border-white/10 bg-white/[0.02]">
        <div className="flex h-full items-center justify-center text-[8px] uppercase tracking-[0.3em] text-white/20">
          NOVA BAR
        </div>
      </div>

      {/* TABLES */}
      {tables.map((table) => {
        const selected = selectedTable === table.id;

        return (
          <motion.button
            key={table.id}
            disabled={!table.available}
            onClick={() => onSelect(table)}
            whileHover={table.available ? { scale: 1.06 } : undefined}
            whileTap={table.available ? { scale: 0.96 } : undefined}
            className={`absolute ${table.position} flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all ${
              table.type === "sofa"
                ? "h-16 w-28 rounded-xl"
                : table.seats === 6
                  ? "h-20 w-20 rounded-xl"
                  : "h-16 w-16 rounded-full"
            } ${
              !table.available
                ? "cursor-not-allowed border border-white/5 bg-white/[0.025] text-white/10"
                : selected
                  ? "border border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  : "border border-white/15 bg-white/[0.035] text-white/50 hover:border-white/40 hover:text-white"
            }`}
          >
            <div className="text-center">
              <div className="text-[10px] font-semibold">T{table.id}</div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.15em]">
                {table.available ? `${table.seats} seats` : "Taken"}
              </div>
            </div>
          </motion.button>
        );
      })}

      {/* LEGEND */}
      <div className="absolute bottom-16 left-6 flex gap-5 text-[8px] uppercase tracking-[0.2em] text-white/25">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full border border-white/30" />
          Available
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
          Selected
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          Reserved
        </span>
      </div>
    </div>
  );
}