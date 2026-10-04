"use client";

import React from "react";
import { motion } from "motion/react";

export type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function OrderSummary({
  items,
  onRemove,
}: {
  items: OrderItem[];
  onRemove: (id: number) => void;
}) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="border border-white/10 bg-white/[0.02] p-8 text-center">
        <div className="font-display text-3xl text-white/70">
          Nothing ordered yet.
        </div>

        <p className="mt-3 text-xs leading-6 text-white/30">
          You can arrive and order normally, or have something waiting for you.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/10 bg-white/[0.02]">
      <div className="border-b border-white/10 px-6 py-5">
        <div className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
          Your order
        </div>
      </div>

      <div className="divide-y divide-white/10">
        {items.map((item) => (
          <motion.div
            layout
            key={item.id}
            className="flex items-center justify-between gap-5 px-6 py-5"
          >
            <div>
              <div className="text-sm text-white/75">{item.name}</div>

              <div className="mt-1 text-[10px] text-white/30">
                {item.quantity} × {item.price} EGP
              </div>
            </div>

            <button
              onClick={() => onRemove(item.id)}
              className="text-[9px] uppercase tracking-[0.15em] text-white/25 transition hover:text-red-300"
            >
              Remove
            </button>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-6">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
          Estimated total
        </span>

        <span className="font-display text-2xl text-[#F4F0E7]">
          {total} EGP
        </span>
      </div>
    </div>
  );
}