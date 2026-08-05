import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-signal/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-[120px_1fr] gap-6 md:gap-16">
        <div className="font-mono text-[13px] text-muted">CONTACT</div>
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper text-balance max-w-2xl">
            Have a system that needs to come alive?
          </h2>
          <p className="mt-5 max-w-xl text-fog/90 leading-relaxed">
            Open to freelance builds and full-time roles — Laravel/PHP production work,
            or Java/Spring Boot backend roles. Tell me what you're building.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-signal px-6 py-3 font-mono text-[13px] font-medium text-ink hover:bg-signal/90 transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="rounded-full border border-line px-6 py-3 font-mono text-[13px] text-fog hover:border-signal-dim hover:text-signal transition-colors"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 font-mono text-[13px] text-muted">
            <a href={profile.links.github} className="hover:text-signal transition-colors">GitHub</a>
            <a href={profile.links.linkedin} className="hover:text-signal transition-colors">LinkedIn</a>
            <a href={profile.links.hackerrank} className="hover:text-signal transition-colors">HackerRank</a>
          </div>
        </div>
      </div>
    </section>
  );
}
