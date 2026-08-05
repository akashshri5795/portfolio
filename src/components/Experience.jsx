import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-16">
        <div className="font-mono text-[13px] text-muted">EXPERIENCE</div>
        <div className="max-w-3xl">
          <ol className="relative border-l border-line pl-8">
            {experience.map((job, i) => (
              <li key={job.role + job.org} className={`relative ${i !== experience.length - 1 ? "pb-12" : ""}`}>
                <span className="absolute -left-[38px] top-1 h-2.5 w-2.5 rounded-full bg-panel border-2 border-signal-dim" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-medium text-paper">{job.role}</h3>
                  <span className="font-mono text-[12px] text-muted">{job.period}</span>
                </div>
                <div className="font-mono text-[13px] text-signal mt-0.5">
                  {job.org} <span className="text-muted">— {job.place}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-fog/90 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
