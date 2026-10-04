"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import ReservationProgress from "../_components/Reservations/ReservationProgress";
import TableMap, {
  Table,
} from "../_components/Reservations/TableMap";
import OrderSummary, {
  OrderItem,
} from "../_components/Reservations/OrderSummary";

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const orderMenu = [
  {
    id: 1,
    name: "NOVA Signature",
    description: "House blend · rich · balanced",
    price: 145,
    image: "/images/menu/nova-signature.jpg",
  },
  {
    id: 2,
    name: "Midnight Mocha",
    description: "Espresso · dark chocolate · milk",
    price: 165,
    image: "/images/menu/midnight-mocha.jpg",
  },
  {
    id: 3,
    name: "Pistachio Cortado",
    description: "Espresso · microfoam · pistachio",
    price: 155,
    image: "/images/menu/pistachio-cortado.jpg",
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "18-hour extraction · smooth finish",
    price: 135,
    image: "/images/menu/cold-brew.jpg",
  },
  {
    id: 5,
    name: "Basque Cheesecake",
    description: "Caramelised top · creamy centre",
    price: 145,
    image: "/images/menu/cheesecake.jpg",
  },
  {
    id: 6,
    name: "NOVA Croissant",
    description: "Buttery · laminated · freshly baked",
    price: 110,
    image: "/images/menu/croissant.jpg",
  },
];

export default function ReservationsPage() {
  const [step, setStep] = useState(0);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);

  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const [order, setOrder] = useState<OrderItem[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [confirmed, setConfirmed] = useState(false);

  const total = useMemo(
    () =>
      order.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    [order],
  );

  function canContinue() {
    if (step === 0) {
      return date && time && guests;
    }

    if (step === 1) {
      return selectedTable;
    }

    if (step === 2) {
      return true;
    }

    if (step === 3) {
      return name && phone;
    }

    return false;
  }

  function addItem(item: (typeof orderMenu)[number]) {
    setOrder((current) => {
      const existing = current.find((entry) => entry.id === item.id);

      if (existing) {
        return current.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        );
      }

      return [
        ...current,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(id: number) {
    setOrder((current) => {
      const existing = current.find((item) => item.id === id);

      if (!existing) return current;

      if (existing.quantity === 1) {
        return current.filter((item) => item.id !== id);
      }

      return current.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  }

  function continueStep() {
    if (!canContinue()) return;

    if (step < 3) {
      setStep((current) => current + 1);
      return;
    }

    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-[#F4F0E7]">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[180px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 w-full max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 150,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37]"
          >
            ✓
          </motion.div>

          <span className="mt-10 block text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
            Reservation confirmed
          </span>

          <h1 className="mt-6 font-display text-7xl leading-[0.85] sm:text-8xl">
            Your table
            <br />
            <span className="italic text-white/40">is waiting.</span>
          </h1>

          <div className="mx-auto mt-12 max-w-md border border-white/10 bg-white/[0.02] p-7 text-left">
            <div className="flex justify-between border-b border-white/10 pb-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                Reservation
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">
                NOVA
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Date
                </span>

                <p className="mt-2 text-sm text-white/75">{date}</p>
              </div>

              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Time
                </span>

                <p className="mt-2 text-sm text-white/75">{time}</p>
              </div>

              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Table
                </span>

                <p className="mt-2 text-sm text-white/75">
                  T{selectedTable?.id}
                </p>
              </div>

              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Guests
                </span>

                <p className="mt-2 text-sm text-white/75">{guests}</p>
              </div>
            </div>

            {order.length > 0 && (
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Pre-order
                </div>

                <div className="mt-3 space-y-2">
                  {order.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-xs text-white/55"
                    >
                      <span>
                        {item.quantity} × {item.name}
                      </span>

                      <span>
                        {item.quantity * item.price} EGP
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-between border-t border-white/10 pt-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Estimated total
                  </span>

                  <span className="text-sm text-[#D4AF37]">
                    {total} EGP
                  </span>
                </div>
              </div>
            )}
          </div>

          <p className="mx-auto mt-8 max-w-sm text-xs leading-6 text-white/30">
            We've saved your table. Your reservation details would be sent to
            your phone or email once connected to the NOVA reservation system.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex border-b border-white/20 pb-2 text-[9px] uppercase tracking-[0.25em] text-white/50 transition hover:border-[#D4AF37] hover:text-white"
          >
            Return to NOVA
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#F4F0E7]">
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 pb-20 pt-44 lg:px-10 lg:pb-28">
        <div className="absolute right-[-15%] top-0 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/5 blur-[180px]" />

        <div className="relative mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Reservations
              </span>
            </div>

            <h1 className="max-w-5xl font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.78] tracking-[-0.04em]">
              Save your
              <br />
              <span className="italic text-white/35">place.</span>
            </h1>

            <p className="mt-10 max-w-md text-sm leading-7 text-white/40">
              Choose your moment, select your table, and — if you wish —
              arrive to something already waiting for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESERVATION APP */}
      <section className="border-t border-white/10 bg-[#0b0a08] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <ReservationProgress currentStep={step} />

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 0 && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Step 01
                  </span>

                  <h2 className="mt-4 font-display text-5xl lg:text-7xl">
                    When should we
                    <br />
                    <span className="italic text-white/35">expect you?</span>
                  </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                      Date
                    </label>

                    <input
                      type="date"
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                      className="w-full border-b border-white/15 bg-transparent px-0 py-5 text-white outline-none transition focus:border-[#D4AF37] [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                      Guests
                    </label>

                    <div className="flex items-center justify-between border-b border-white/15 py-3">
                      <button
                        onClick={() =>
                          setGuests((current) => Math.max(1, current - 1))
                        }
                        className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#D4AF37] hover:text-white"
                      >
                        −
                      </button>

                      <div className="text-center">
                        <div className="font-display text-4xl">
                          {guests}
                        </div>

                        <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                          {guests === 1 ? "Guest" : "Guests"}
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setGuests((current) => Math.min(8, current + 1))
                        }
                        className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#D4AF37] hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-14">
                  <label className="mb-5 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Available times
                  </label>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                    {timeSlots.map((slot, index) => {
                      const unavailable = [2, 8, 15].includes(index);

                      return (
                        <button
                          key={slot}
                          disabled={unavailable}
                          onClick={() => setTime(slot)}
                          className={`border px-3 py-4 text-[9px] transition ${
                            unavailable
                              ? "cursor-not-allowed border-white/5 text-white/10"
                              : time === slot
                                ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                                : "border-white/10 text-white/45 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 1 && (
              <motion.div
                key="table"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Step 02
                  </span>

                  <h2 className="mt-4 font-display text-5xl lg:text-7xl">
                    Choose your
                    <br />
                    <span className="italic text-white/35">
                      corner of NOVA.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg text-xs leading-6 text-white/35">
                    You're reserving for {guests}{" "}
                    {guests === 1 ? "guest" : "guests"} on {date} at {time}.
                    Choose an available table below.
                  </p>
                </div>

                <TableMap
                  selectedTable={selectedTable?.id ?? null}
                  onSelect={setSelectedTable}
                />

                {selectedTable && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6"
                  >
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                          Selected table
                        </span>

                        <h3 className="mt-2 font-display text-3xl">
                          Table {selectedTable.id}
                        </h3>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-white/60">
                          {selectedTable.seats} seats
                        </div>

                        <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25">
                          {selectedTable.type}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <motion.div
                key="order"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Step 03
                  </span>

                  <h2 className="mt-4 font-display text-5xl lg:text-7xl">
                    Make your arrival
                    <br />
                    <span className="italic text-white/35">even better.</span>
                  </h2>

                  <p className="mt-6 max-w-lg text-xs leading-6 text-white/35">
                    Want something ready when you arrive? Add it to your
                    reservation. Nothing is required.
                  </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {orderMenu.map((item) => {
                      const quantity =
                        order.find((entry) => entry.id === item.id)
                          ?.quantity ?? 0;

                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ y: -3 }}
                          className="group overflow-hidden border border-white/10 bg-[#050505]"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <div
                              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                              style={{
                                backgroundImage: `url('${item.image}')`,
                              }}
                            />

                            <div className="absolute inset-0 bg-black/25" />

                            {quantity > 0 && (
                              <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-[9px] font-semibold text-black">
                                {quantity}
                              </div>
                            )}
                          </div>

                          <div className="p-5">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-display text-2xl">
                                  {item.name}
                                </h3>

                                <p className="mt-2 text-[9px] leading-5 text-white/30">
                                  {item.description}
                                </p>
                              </div>

                              <span className="text-xs text-white/55">
                                {item.price}
                              </span>
                            </div>

                            <button
                              onClick={() => addItem(item)}
                              className="mt-5 w-full border border-white/10 py-3 text-[9px] uppercase tracking-[0.2em] text-white/45 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                            >
                              {quantity > 0 ? "Add another" : "Add to table"}
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div>
                    <OrderSummary
                      items={order}
                      onRemove={removeItem}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {step === 3 && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-12">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                    Step 04
                  </span>

                  <h2 className="mt-4 font-display text-5xl lg:text-7xl">
                    One last thing.
                    <br />
                    <span className="italic text-white/35">
                      Then it's yours.
                    </span>
                  </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
                  <div className="space-y-8">
                    <div>
                      <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Your name
                      </label>

                      <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Phone number
                      </label>

                      <input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="+20"
                        className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Email
                      </label>

                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-white/35">
                        Anything we should know?
                      </label>

                      <textarea
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder="Optional note"
                        rows={3}
                        className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="border border-white/10 bg-white/[0.02] p-7">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                        Your evening
                      </span>

                      <div className="mt-7 space-y-5">
                        <div className="flex justify-between gap-5">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Date
                          </span>

                          <span className="text-xs text-white/65">
                            {date}
                          </span>
                        </div>

                        <div className="flex justify-between gap-5">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Time
                          </span>

                          <span className="text-xs text-white/65">
                            {time}
                          </span>
                        </div>

                        <div className="flex justify-between gap-5">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Guests
                          </span>

                          <span className="text-xs text-white/65">
                            {guests}
                          </span>
                        </div>

                        <div className="flex justify-between gap-5">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Table
                          </span>

                          <span className="text-xs text-[#D4AF37]">
                            T{selectedTable?.id}
                          </span>
                        </div>
                      </div>

                      {order.length > 0 && (
                        <div className="mt-7 border-t border-white/10 pt-7">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Pre-order
                          </span>

                          <div className="mt-4 space-y-3">
                            {order.map((item) => (
                              <div
                                key={item.id}
                                className="flex justify-between text-xs text-white/45"
                              >
                                <span>
                                  {item.quantity} × {item.name}
                                </span>

                                <span>
                                  {item.quantity * item.price}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 flex justify-between border-t border-white/10 pt-5">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                              Total
                            </span>

                            <span className="text-sm text-[#D4AF37]">
                              {total} EGP
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
            <button
              disabled={step === 0}
              onClick={() => setStep((current) => current - 1)}
              className={`text-[9px] uppercase tracking-[0.25em] transition ${
                step === 0
                  ? "pointer-events-none text-white/10"
                  : "text-white/35 hover:text-white"
              }`}
            >
              ← Back
            </button>

            <button
              onClick={continueStep}
              disabled={!canContinue()}
              className={`group relative overflow-hidden px-9 py-5 text-[9px] font-semibold uppercase tracking-[0.25em] transition ${
                canContinue()
                  ? "bg-[#D4AF37] text-black hover:bg-[#F3E5AB]"
                  : "cursor-not-allowed bg-white/5 text-white/15"
              }`}
            >
              {step === 3 ? "Confirm Reservation" : "Continue →"}
            </button>
          </div>

          <p className="mt-7 text-center text-[8px] uppercase tracking-[0.2em] text-white/15">
            No payment required · Reservation held subject to NOVA availability
          </p>
        </div>
      </section>
    </main>
  );
}