import Link from "next/link";

import Hero from "./_components/Hero/Hero";
import Map from "./_components/Map/Map";
import SectionLabel from "./_components/SectionLabel/SectionLabel";

const signatures = [
  {
    number: "01",
    name: "NOVA Signature",
    description:
      "Our signature blend, carefully extracted for a rich and balanced finish.",
  },
  {
    number: "02",
    name: "Midnight Mocha",
    description:
      "Deep chocolate, espresso and velvet texture with a subtle sweetness.",
  },
  {
    number: "03",
    name: "Pistachio Cortado",
    description:
      "A refined combination of espresso, silky milk and pistachio.",
  },
];

const ADDRESS = "14 Corniche El Nil, Mansoura, Dakahlia, Egypt";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <section className="relative bg-[#050505] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel index="01" label="Philosophy" />
          </div>

          <div>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-[#F4F0E7] sm:text-6xl lg:text-8xl">
              We believe the best
              <br />
              <span className="italic text-white/45">moments aren't rushed.</span>
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/45">
              NOVA was created around a simple idea: coffee should be more
              than something you drink. It should be an experience — from
              the first aroma to the last sip.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0b0a08] px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-350">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel index="02" label="Signatures" />

              <h2 className="mt-5 font-display text-6xl text-[#F4F0E7] lg:text-8xl">
                Made to be
                <span className="italic text-white/45"> remembered.</span>
              </h2>
            </div>

            <Link
              href="/menu"
              className="text-[10px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white"
            >
              View Full Menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {signatures.map((item) => (
              <div
                key={item.number}
                className="group bg-[#0b0a08] p-8 transition-transform duration-300 hover:-translate-y-1 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-[#D4AF37]">
                    {item.number}
                  </span>

                  <span className="text-white/20 transition-colors group-hover:text-[#D4AF37]">
                    ↗
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="font-display text-4xl text-[#F4F0E7]">{item.name}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/40">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505]">
        <div className="grid min-h-175 grid-cols-1 lg:grid-cols-2">
          <div
            className="min-h-125 bg-cover bg-center lg:min-h-full"
            style={{ backgroundImage: "url('/images/space.jpg')" }}
          />

          <div className="flex items-center px-6 py-24 lg:px-20">
            <div className="max-w-xl">
              <SectionLabel index="03" label="The Space" />

              <h2 className="mt-6 font-display text-6xl leading-[0.9] text-[#F4F0E7] lg:text-8xl">
                Stay
                <br />
                <span className="italic text-white/40">awhile.</span>
              </h2>

              <p className="mt-10 text-sm leading-8 text-white/45">
                Warm light. Rich textures. Slow conversations. NOVA was
                designed to feel just as good as the coffee tastes.
              </p>

              <Link
                href="/gallery"
                className="mt-10 inline-flex border-b border-white/20 pb-2 text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors hover:border-[#D4AF37] hover:text-white"
              >
                Explore the Space
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0a08]">
        <div className="grid min-h-175 grid-cols-1 lg:grid-cols-2">
          <Map address={ADDRESS} className="min-h-125 lg:order-2 lg:min-h-full" />

          <div className="flex items-center px-6 py-24 lg:px-20">
            <div className="max-w-xl">
              <SectionLabel index="04" label="Find Us" />

              <h2 className="mt-6 font-display text-6xl leading-[0.9] text-[#F4F0E7] lg:text-8xl">
                Come
                <br />
                <span className="italic text-white/40">say hello.</span>
              </h2>

              <div className="mt-10 grid grid-cols-2 gap-8 text-sm leading-7 text-white/45">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Address</p>
                  <p className="mt-2">{ADDRESS}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Hours</p>
                  <p className="mt-2">Sat – Thu · 9AM – 12AM</p>
                  <p>Friday · 2PM – 12AM</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex border-b border-white/20 pb-2 text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors hover:border-[#D4AF37] hover:text-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0a08] px-6 py-32 lg:px-10 lg:py-48">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-7 flex justify-center">
            <SectionLabel index="05" label="Your Table Awaits" />
          </div>

          <h2 className="font-display text-7xl leading-[0.85] text-[#F4F0E7] sm:text-8xl lg:text-[10rem]">
            Come
            <br />
            <span className="italic text-white/45">experience NOVA.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-md text-sm leading-7 text-white/40">
            Good coffee deserves good company. Find your table and stay awhile.
          </p>

          <Link
            href="/reservations"
            className="mt-10 inline-block bg-[#D4AF37] px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#F3E5AB]"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
}