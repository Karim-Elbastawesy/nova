"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

type Category = "All" | "Coffee" | "Signature" | "Cold" | "Food" | "Dessert";

type MenuItem = {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
};

const categories: Category[] = [
  "All",
  "Coffee",
  "Signature",
  "Cold",
  "Food",
  "Dessert",
];

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "NOVA Signature",
    category: "Signature",
    description:
      "Our house blend, carefully extracted for a deep body and long, elegant finish.",
    price: 145,
    image: "/images/menu/nova-signature.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Midnight Mocha",
    category: "Signature",
    description:
      "Velvety espresso, dark chocolate and silky milk with a subtle sweetness.",
    price: 165,
    image: "/images/menu/midnight-mocha.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Pistachio Cortado",
    category: "Signature",
    description:
      "Double espresso, microfoam and pistachio finished with a delicate nutty aroma.",
    price: 155,
    image: "/images/menu/pistachio-cortado.jpg",
  },
  {
    id: 4,
    name: "Flat White",
    category: "Coffee",
    description:
      "A precise double espresso balanced with silky microfoam.",
    price: 125,
    image: "/images/menu/flat-white.jpg",
  },
  {
    id: 5,
    name: "Cortado",
    category: "Coffee",
    description:
      "Equal parts espresso and warm milk for a short, balanced cup.",
    price: 115,
    image: "/images/menu/cortado.jpg",
  },
  {
    id: 6,
    name: "Espresso",
    category: "Coffee",
    description:
      "A concentrated expression of our seasonal house blend.",
    price: 95,
    image: "/images/menu/espresso.jpg",
  },
  {
    id: 7,
    name: "Cold Brew",
    category: "Cold",
    description:
      "Slow-steeped for eighteen hours for a smooth, naturally sweet finish.",
    price: 135,
    image: "/images/menu/cold-brew.jpg",
  },
  {
    id: 8,
    name: "Iced Pistachio Latte",
    category: "Cold",
    description:
      "Cold espresso, milk and pistachio served over crystal-clear ice.",
    price: 155,
    image: "/images/menu/iced-pistachio.jpg",
  },
  {
    id: 9,
    name: "NOVA Croissant",
    category: "Food",
    description:
      "Buttery, laminated pastry baked fresh throughout the morning.",
    price: 110,
    image: "/images/menu/croissant.jpg",
  },
  {
    id: 10,
    name: "Truffle Toast",
    category: "Food",
    description:
      "Sourdough, soft cheese, herbs and a subtle truffle finish.",
    price: 195,
    image: "/images/menu/truffle-toast.jpg",
  },
  {
    id: 11,
    name: "Basque Cheesecake",
    category: "Dessert",
    description:
      "Burnt cheesecake with a creamy centre and caramelised top.",
    price: 145,
    image: "/images/menu/cheesecake.jpg",
  },
  {
    id: 12,
    name: "Dark Chocolate Tart",
    category: "Dessert",
    description:
      "Rich dark chocolate ganache over a delicate cocoa pastry shell.",
    price: 155,
    image: "/images/menu/chocolate-tart.jpg",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;

    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <main className="overflow-hidden bg-[#050505] text-[#F4F0E7]">
      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/menu/menu-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/25 to-black/35" />

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/menu/menu-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-[1600px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                The NOVA Menu
              </span>
            </div>

            <h1 className="font-display text-[clamp(5rem,13vw,12rem)] leading-[0.78] tracking-[-0.045em]">
              Taste
              <br />
              <span className="italic text-white/45">the moment.</span>
            </h1>

            <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <p className="max-w-md text-sm leading-7 text-white/55 lg:text-base">
                A considered collection of coffee, signatures, small plates
                and desserts — made slowly, served beautifully.
              </p>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Crafted daily · NOVA
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              01 · Our Selection
            </span>
          </div>

          <div>
            <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
              Nothing here is
              <br />
              <span className="italic text-white/35">accidental.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-sm leading-8 text-white/40">
              Every drink has a purpose. Every ingredient has a reason.
              Whether you're here for five quiet minutes or an entire
              afternoon, the menu is designed to make staying feel easy.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-[#0b0a08] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                02 · Signatures
              </span>

              <h2 className="mt-5 font-display text-6xl lg:text-8xl">
                Start here.
              </h2>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/25 md:block">
              NOVA recommendations
            </span>
          </div>

          <div className="grid gap-px bg-white/10 lg:grid-cols-2">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative min-h-[650px] overflow-hidden bg-[#0b0a08]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      Signature
                    </span>

                    <span className="text-sm text-white/70">
                      {item.price} EGP
                    </span>
                  </div>

                  <h3 className="font-display text-5xl lg:text-6xl">
                    {item.name}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL MENU */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              03 · The Collection
            </span>

            <h2 className="mt-5 font-display text-6xl lg:text-8xl">
              Choose your ritual.
            </h2>
          </div>

          {/* CATEGORY NAV */}
          <div className="mb-16 flex gap-3 overflow-x-auto border-b border-white/10 pb-5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors ${
                  activeCategory === category
                    ? "text-[#D4AF37]"
                    : "text-white/35 hover:text-white"
                }`}
              >
                {category}

                {activeCategory === category && (
                  <motion.span
                    layoutId="menu-category"
                    className="absolute bottom-[-21px] left-0 right-0 h-px bg-[#D4AF37]"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35 }}
                  className="group border-b border-white/10 pb-10"
                >
                  <div className="grid grid-cols-[120px_1fr] gap-6 sm:grid-cols-[150px_1fr]">
                    <div className="relative aspect-square overflow-hidden bg-white/5">
                      <div
                        className="absolute inset-0 bg-cover bg-center grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                            {item.category}
                          </span>

                          <h3 className="mt-2 font-display text-3xl text-[#F4F0E7]">
                            {item.name}
                          </h3>
                        </div>

                        <span className="pt-1 text-sm text-white/60">
                          {item.price}
                        </span>
                      </div>

                      <p className="mt-4 max-w-md text-xs leading-6 text-white/35">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative overflow-hidden bg-[#0b0a08] px-6 py-32 lg:px-10 lg:py-48">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
            Make it yours
          </span>

          <h2 className="mt-7 font-display text-7xl leading-[0.85] sm:text-8xl lg:text-[9rem]">
            Your table.
            <br />
            <span className="italic text-white/40">Your ritual.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-md text-sm leading-7 text-white/40">
            Reserve your table and, if you know what you want, have it waiting
            when you arrive.
          </p>

          <Link
            href="/reservations"
            className="mt-10 inline-flex bg-[#D4AF37] px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#F3E5AB]"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>
    </main>
  );
}