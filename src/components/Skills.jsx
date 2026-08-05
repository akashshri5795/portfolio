import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-16">
        <div className="font-mono text-[13px] text-muted">STACK</div>
        <div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-mono text-[12px] tracking-wide text-fog">{g.label.toUpperCase()}</h3>
                  {g.kind === "learning" && (
                    <span className="rounded-full border border-amber-dim/70 px-2 py-0.5 font-mono text-[10px] text-amber">
                      self-directed
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border px-2.5 py-1 font-mono text-[12px] ${
                        g.kind === "learning"
                          ? "border-amber-dim/40 text-amber/90 bg-amber/5"
                          : "border-line text-fog bg-panel/60"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
