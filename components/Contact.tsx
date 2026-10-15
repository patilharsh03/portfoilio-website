import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-32 sm:px-10">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[17vw] leading-[0.9] sm:text-[12vw]">
            Let&apos;s work
            <br />
            <span className="text-lime">together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block break-all font-mono text-lg underline decoration-line underline-offset-8 transition-colors hover:text-lime hover:decoration-lime sm:text-3xl"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-lime hover:text-lime"
            >
              {l.label} ↗
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            View CV
          </a>
        </Reveal>
      </div>

      <div className="border-t border-line px-5 py-8 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted sm:px-10">
        © {profile.firstName} {profile.lastName} — Built with Next.js &amp; Tailwind
      </div>
    </section>
  );
}
