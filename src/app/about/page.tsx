import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AboutHero from "../_components/AboutHero/AboutHero";
import SectionLabel from "../_components/SectionLabel/SectionLabel";

export const metadata: Metadata = {
    title: "About",
    description:
        "The story, philosophy, and people behind NOVA Specialty Café in Mansoura, Egypt.",
};

const values = [
    {
        number: "01",
        name: "Sourced with Intention",
        description:
            "We work with carefully selected coffee from Ethiopia, Colombia, and Yemen — choosing lots for character, traceability, and the story behind them.",
    },
    {
        number: "02",
        name: "Roasted in Small Batches",
        description:
            "Our coffee is roasted in small batches, allowing us to pay attention to every origin and preserve what makes each one distinct.",
    },
    {
        number: "03",
        name: "Served without Rush",
        description:
            "No call-and-collect counter, no queue to nowhere. Order, sit, and let the cup come to you.",
    },
];

const process = [
    {
        number: "01",
        title: "The Origin",
        description:
            "Every coffee begins somewhere. We look for origins with a clear identity — coffees that carry the character of the place they came from.",
    },
    {
        number: "02",
        title: "The Roast",
        description:
            "Small batches give us control. We roast to reveal the character of each coffee rather than masking it.",
    },
    {
        number: "03",
        title: "The Cup",
        description:
            "Everything comes together here. Temperature, extraction, texture, aroma — every detail has a reason to be there.",
    },
];

const stats = [
    { value: "2026", label: "Founded" },
    { value: "3", label: "Coffee Origins" },
    { value: "48hr", label: "Bean to Cup" },
    { value: "1", label: "Home: Mansoura" },
];

export default function AboutPage() {
    return (
        <div className="bg-[#050505]">
            <AboutHero />

            {/* STORY */}
            <section className="relative bg-[#050505] px-6 py-28 lg:px-10 lg:py-40">
                <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <SectionLabel index="01" label="Our Story" />
                    </div>

                    <div className="max-w-3xl space-y-7 text-base leading-8 text-white/50 lg:text-lg">
                        <p>
                            NOVA started with a walk along the Corniche — the kind you
                            take to think, not to get anywhere. We kept wondering why
                            there wasn't a place on this stretch of the Nile that made
                            you want to stay.
                        </p>

                        <p>
                            Not just somewhere to grab a coffee. Somewhere to slow down.
                            A room with good light, chairs you don't want to leave, music
                            that knows when to be quiet, and coffee worth paying attention
                            to.
                        </p>

                        <p>
                            So we built one.
                        </p>

                        <p>
                            NOVA was born from a simple idea: that an ordinary part of
                            your day can become something worth remembering when enough
                            care goes into it.
                        </p>

                        <p>
                            The menu has grown. The room has evolved. The people around
                            the table have changed. But the conviction hasn't:
                            <span className="text-[#F4F0E7]">
                                {" "}
                                the best part of your day can happen over a cup of coffee,
                                if you let it.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="relative overflow-hidden bg-[#0b0a08] px-6 py-32 lg:px-10 lg:py-52">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[160px]" />

                <div className="relative mx-auto max-w-[1400px]">
                    <SectionLabel index="02" label="Our Philosophy" />

                    <div className="mt-12 max-w-6xl">
                        <h2 className="font-display text-6xl leading-[0.9] text-[#F4F0E7] sm:text-7xl lg:text-[110px]">
                            Coffee should be
                            <br />
                            <span className="italic text-white/35">
                                more than a drink.
                            </span>
                        </h2>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
                        <p className="text-sm leading-7 text-white/45 lg:text-base">
                            We believe coffee has the power to change the pace of a
                            morning, turn a meeting into a conversation, or give you
                            twenty quiet minutes in the middle of a difficult day.
                        </p>

                        <p className="text-sm leading-7 text-white/45 lg:text-base">
                            That's why we care about everything around the cup as much as
                            the cup itself. The origin. The roast. The room. The light.
                            The person sitting across from you. The moment you decide
                            not to rush.
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="relative bg-[#050505] px-6 py-28 lg:px-10 lg:py-40">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-20">
                        <SectionLabel index="03" label="What We Stand For" />

                        <h2 className="mt-6 max-w-5xl font-display text-6xl leading-[0.95] text-[#F4F0E7] lg:text-8xl">
                            Three things
                            <span className="italic text-white/35">
                                {" "}
                                we don't compromise on.
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
                        {values.map((item) => (
                            <div
                                key={item.number}
                                className="group bg-[#050505] p-8 transition-transform duration-500 hover:-translate-y-1 lg:p-10"
                            >
                                <span className="text-[10px] tracking-[0.2em] text-[#D4AF37]">
                                    {item.number}
                                </span>

                                <div className="mt-24">
                                    <h3 className="font-display text-3xl text-[#F4F0E7]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-white/40">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-12 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="relative bg-[#0b0a08] px-6 py-28 lg:px-10 lg:py-40">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <SectionLabel index="04" label="From Origin to Cup" />

                            <h2 className="mt-8 max-w-md font-display text-5xl leading-[0.95] text-[#F4F0E7] lg:text-7xl">
                                Nothing good
                                <br />
                                happens
                                <br />
                                <span className="italic text-white/35">
                                    by accident.
                                </span>
                            </h2>
                        </div>

                        <div className="divide-y divide-white/10">
                            {process.map((item) => (
                                <div
                                    key={item.number}
                                    className="grid grid-cols-[60px_1fr] gap-6 py-10 first:pt-0 lg:grid-cols-[90px_1fr] lg:gap-10"
                                >
                                    <span className="text-[10px] tracking-[0.2em] text-[#D4AF37]">
                                        {item.number}
                                    </span>

                                    <div>
                                        <h3 className="font-display text-3xl text-[#F4F0E7] lg:text-4xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* THE SPACE */}
            <section className="relative bg-[#050505] px-6 py-28 lg:px-10 lg:py-40">
                <div className="mx-auto max-w-350">
                    <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <SectionLabel index="05" label="The Space" />

                            <h2 className="mt-6 max-w-3xl font-display text-6xl leading-[0.9] text-[#F4F0E7] lg:text-8xl">
                                Stay for
                                <br />
                                <span className="italic text-white/35">
                                    a while.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-white/40">
                            NOVA was designed to feel different depending on when you
                            arrive. Bright and quiet in the morning. Warm and social in
                            the afternoon. Dim, slow, and intimate after dark.
                        </p>
                    </div>

                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            src="/images/space2.jpg"
                            alt="The interior of NOVA Specialty Café"
                            fill
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 1400px"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                                Mansoura · Egypt
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCATION / IDENTITY */}
            <section className="border-y border-white/10 bg-[#0b0a08] px-6 py-28 lg:px-10 lg:py-36">
                <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionLabel index="06" label="Our Home" />

                        <h2 className="mt-8 font-display text-6xl leading-[0.9] text-[#F4F0E7] lg:text-8xl">
                            Made in
                            <br />
                            <span className="italic text-white/35">
                                Mansoura.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xl space-y-6 text-sm leading-7 text-white/45 lg:text-base">
                        <p>
                            NOVA belongs to Mansoura. A city with its own rhythm, its own
                            energy, and a relationship with the Nile that changes the
                            feeling of a day.
                        </p>

                        <p>
                            We didn't want to recreate somewhere else. We wanted to make
                            something that felt natural here — a place that could become
                            part of someone's morning routine, afternoon meeting, or
                            late-night conversation.
                        </p>

                        <p className="text-[#F4F0E7]">
                            One home. One room. Countless moments.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="border-b border-white/10 bg-[#050505] px-6 py-20 lg:px-10">
                <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-12 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center md:text-left">
                            <p className="font-display text-5xl text-[#F4F0E7] lg:text-6xl">
                                {stat.value}
                            </p>

                            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CLOSING */}
            <section className="relative overflow-hidden bg-[#0b0a08] px-6 py-32 text-center lg:px-10 lg:py-52">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[150px]" />

                <div className="relative mx-auto max-w-4xl">
                    <SectionLabel index="07" label="Come As You Are" />

                    <h2 className="mt-8 font-display text-6xl leading-[0.9] text-[#F4F0E7] lg:text-8xl">
                        Come for the coffee.
                        <br />
                        <span className="italic text-white/40">
                            Stay for everything else.
                        </span>
                    </h2>

                    <p className="mx-auto mt-10 max-w-lg text-sm leading-7 text-white/40">
                        Whether it's your first visit or your hundredth, there's always
                        another cup waiting.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/menu"
                            className="inline-block bg-[#D4AF37] px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#F3E5AB]"
                        >
                            View the Menu
                        </Link>

                        <Link
                            href="/reservations"
                            className="inline-block border border-white/20 px-10 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                        >
                            Reserve a Table
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
