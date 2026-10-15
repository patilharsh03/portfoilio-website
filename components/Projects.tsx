import { projects } from "@/lib/data";
import Reveal from "./Reveal";

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-32 sm:px-10">
      <Reveal>
        <p className="eyebrow mb-4">Selected work</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mb-16 text-6xl sm:text-8xl">
          Projects<span className="text-lime">.</span>
        </h2>
      </Reveal>

      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i * 0.04, 0.2)}>
            <li className="group border-b border-line py-7 sm:py-9">
              <div className="flex items-baseline gap-5 sm:gap-10">
                <span className="font-mono text-xs text-muted sm:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-5xl transition-all duration-500 group-focus-within:translate-x-3 group-focus-within:text-lime group-hover:translate-x-3 group-hover:text-lime sm:text-7xl md:text-8xl">
                  {p.title}
                </h3>
              </div>

              {/* Reveals on hover/focus (desktop), always visible on touch */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-focus-within:grid-rows-[1fr] group-hover:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-6 pt-6 sm:ml-[4.5rem] md:flex-row md:items-end md:justify-between">
                    <div className="max-w-xl">
                      <p className="text-muted">{p.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex shrink-0 gap-3">
                      <a
                        href={p.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-lime inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                      >
                        Live Demo <ArrowIcon />
                      </a>
                      <a
                        href={p.repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-lime hover:text-lime"
                      >
                        <GithubIcon /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
