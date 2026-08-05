import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
