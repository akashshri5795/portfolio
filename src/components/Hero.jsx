import { profile, liveSystems } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 px-6">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-signal/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1 font-mono text-[12px] text-muted mb-8">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="animate-pulseDot absolute inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          Available for freelance &amp; full-time — {profile.location}
        </div>

        <h1 className="font-display font-semibold text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl text-paper text-balance max-w-4xl">
          I build web systems
          <br />
          that stay <span className="text-signal">awake.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg text-fog/90 text-balance">
          {profile.tagline} React and Vue up front, Java and Spring Boot by choice on the side.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-signal px-6 py-3 font-mono text-[13px] font-medium text-ink hover:bg-signal/90 transition-colors"
          >
            View live work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 font-mono text-[13px] text-fog hover:border-signal-dim hover:text-signal transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Signature: live systems status panel */}
        <div className="mt-20 rounded-2xl border border-line bg-panel/70 backdrop-blur-sm overflow-hidden max-w-2xl">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="font-mono text-[12px] text-muted tracking-wide">SYSTEMS I OPERATE</span>
            <span className="font-mono text-[12px] text-signal">{liveSystems.length}/{liveSystems.length} online</span>
          </div>
          <ul>
            {liveSystems.map((s, i) => (
              <li
                key={s.name}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  i !== liveSystems.length - 1 ? "border-b border-line/70" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex h-2 w-2 shrink-0">
                    <span className="animate-pulseDot absolute inline-flex h-2 w-2 rounded-full bg-signal" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                  </span>
                  <span className="font-mono text-[13px] text-paper">{s.name}</span>
                </div>
                <span className="font-mono text-[12px] text-muted hidden sm:inline">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
