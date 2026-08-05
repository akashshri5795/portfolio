import { stats } from "../data";

export default function Stats() {
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl font-semibold text-paper">{s.value}</div>
            <div className="mt-1 text-sm text-fog">{s.label}</div>
            <div className="font-mono text-[11px] text-muted mt-0.5">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
