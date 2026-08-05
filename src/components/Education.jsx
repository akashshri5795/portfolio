import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-16">
        <div className="font-mono text-[13px] text-muted">EDUCATION</div>
        <div className="max-w-2xl divide-y divide-line border-y border-line">
          {education.map((e) => (
            <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
              <div>
                <div className="text-paper font-medium">{e.degree}</div>
                <div className="font-mono text-[12px] text-muted mt-0.5">{e.org}</div>
              </div>
              <div className="flex items-center gap-3 font-mono text-[12px] text-muted">
                <span>{e.period}</span>
                {e.note && <span className="text-signal">{e.note}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
