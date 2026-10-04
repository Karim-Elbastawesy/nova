import Link from "next/link";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="text-2xl tracking-[0.25em] text-white">NOVA</div>

          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Specialty Café · Mansoura
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="transition-colors hover:text-white">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 text-white/40">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="NOVA on Instagram"
            className="transition-colors hover:text-[#D4AF37]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href="mailto:hello@novacafe.com"
            aria-label="Email NOVA"
            className="transition-colors hover:text-[#D4AF37]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1600px] flex justify-between border-t border-white/5 pt-6">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
          © 2026 NOVA Specialty Café. All rights reserved.
              </p>
              
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
          Made with ❤️ by Karim Elbastawesy
        </p>
              
      </div>
    </footer>
  );
}