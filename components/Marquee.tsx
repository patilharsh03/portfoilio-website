import { skills } from "@/lib/data";

export default function Marquee() {
  const loop = [...skills, ...skills];
  return (
    <section
      aria-label="Skills"
      className="overflow-hidden border-y border-line py-8"
    >
      <div className="animate-marquee flex w-max items-center gap-10">
        {loop.map((skill, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 text-6xl sm:text-8xl"
          >
            <span className={i % 2 === 0 ? "outline-text" : "text-ink"}>
              {skill}
            </span>
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
