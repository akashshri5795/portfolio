import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold text-paper">
          <span className="relative inline-flex h-2 w-2">
            <span className="animate-pulseDot absolute inline-flex h-2 w-2 rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          Akash<span className="text-signal">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-[13px] text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-signal transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-signal-dim/60 px-4 py-1.5 font-mono text-[13px] text-signal hover:bg-signal/10 transition-colors"
        >
          Hire me
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-fog p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-line px-6 py-4 flex flex-col gap-4 font-mono text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-fog" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-signal" onClick={() => setOpen(false)}>
            Hire me →
          </a>
        </div>
      )}
    </header>
  );
}
