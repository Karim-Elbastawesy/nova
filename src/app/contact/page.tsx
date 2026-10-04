import type { Metadata } from "next";
import Link from "next/link";

import ContactHero from "../_components/ContactHero/ContactHero";
import ContactForm from "../_components/ContactForm/ContactForm";
import Map from "../_components/Map/Map";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NOVA Specialty Café in Mansoura — reservations, press, and general inquiries.",
};

const ADDRESS = "14 Corniche El Nil, Mansoura, Dakahlia, Egypt";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      <section className="relative bg-[#050505] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-[#F4F0E7]">Send a message</h2>

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-14">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Visit</p>
                <p className="mt-4 text-sm leading-7 text-white/50">{ADDRESS}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Hours</p>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Sat – Thu · 9:00 AM – 12:00 AM
                  <br />
                  Friday · 2:00 PM – 12:00 AM
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Call</p>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  <a href="tel:+20500000000" className="transition-colors hover:text-white">
                    +20 50 000 0000
                  </a>
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Email</p>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  <a href="mailto:hello@novacafe.com" className="transition-colors hover:text-white">
                    hello@novacafe.com
                  </a>
                </p>
              </div>
            </div>

            <Map address={ADDRESS} className="h-80 w-full border border-white/10" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0a08] px-6 py-20 text-center lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
          Prefer to just show up?
        </p>

        <h2 className="mt-5 font-display text-4xl text-[#F4F0E7] lg:text-5xl">
          Reserve a table instead.
        </h2>

        <Link
          href="/reservations"
          className="mt-8 inline-block bg-[#D4AF37] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#F3E5AB]"
        >
          Reserve a Table
        </Link>
      </section>
    </div>
  );
}