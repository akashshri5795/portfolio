export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-16">
        <div className="font-mono text-[13px] text-muted">ABOUT</div>
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-display font-medium text-paper leading-snug text-balance">
            Five years in, I still think the best interface for a business problem
            is one that updates itself.
          </p>
          <p className="mt-6 text-fog/90 leading-relaxed">
            I'm a Tech Lead who spends most of the day in Laravel and MySQL, building the kind
            of systems businesses actually run on — order tracking, warehouse management,
            CRMs, reporting — and wiring them for real time with WebSockets, Pusher, and Web Push,
            so the people using them aren't refreshing a page to find out what happened.
          </p>
          <p className="mt-4 text-fog/90 leading-relaxed">
            Outside of production work, I'm building fluency in Java and Spring Boot on my own
            time — same instincts for architecture and clean APIs, applied to a second stack.
            I lead a small dev team, own projects end-to-end from schema to deployment, and I'm
            GATE 2025 qualified in Data Science &amp; Artificial Intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
