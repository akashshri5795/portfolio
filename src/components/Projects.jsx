import { flagshipProject, projects, javaProjects } from "../data";

function StatusPill({ status }) {
  const isLive = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
        isLive ? "border-signal-dim/60 text-signal" : "border-line text-muted"
      }`}
    >
      {isLive && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="animate-pulseDot absolute inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
      )}
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-16">
        <div className="font-mono text-[13px] text-muted">WORK</div>
        <div>
          {/* Flagship */}
          <div className="rounded-2xl border border-signal-dim/50 bg-gradient-to-br from-panel to-panel-2 p-7 md:p-9 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-[90px]" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <StatusPill status={flagshipProject.status} />
                <span className="font-mono text-[11px] text-amber border border-amber-dim/50 rounded-full px-2.5 py-0.5">
                  {flagshipProject.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-paper">
                {flagshipProject.name}
              </h3>
              <div className="font-mono text-[13px] text-signal mt-1">{flagshipProject.url}</div>
              <p className="mt-4 max-w-2xl text-fog/90 leading-relaxed">{flagshipProject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {flagshipProject.stack.map((s) => (
                  <span key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-[12px] text-fog bg-ink/40">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-line bg-panel/50 p-5 hover:border-signal-dim/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-base font-medium text-paper">{p.name}</h4>
                  <StatusPill status={p.status} />
                </div>
                <p className="mt-2 text-sm text-fog/80 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-muted border border-line rounded px-1.5 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Java self-directed callout */}
          <div className="mt-6 rounded-xl border border-dashed border-amber-dim/50 bg-amber/[0.04] p-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-amber-dim/60 px-2.5 py-0.5 font-mono text-[11px] text-amber">
                self-directed
              </span>
              <h4 className="font-display text-base font-medium text-paper">{javaProjects.heading}</h4>
            </div>
            <p className="mt-2 text-sm text-fog/80 leading-relaxed max-w-2xl">{javaProjects.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
