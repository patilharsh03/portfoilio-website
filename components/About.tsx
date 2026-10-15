"use client";

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { aboutHighlights, aboutStatement, aboutText } from "@/lib/data";
import Reveal from "./Reveal";

function Word({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block ${highlight ? "text-lime" : ""}`}
    >
      {children}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = aboutStatement.split(" ");

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-32 sm:px-10">
      <Reveal>
        <p className="eyebrow mb-8">About</p>
      </Reveal>

      <h2
        ref={ref}
        className="font-display max-w-6xl text-[9.5vw] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {words.map((w, idx) => {
          const clean = w.toLowerCase().replace(/[^a-z]/g, "");
          const start = idx / words.length;
          const end = Math.min(start + 1.5 / words.length, 1);
          return (
            <Word
              key={idx}
              progress={scrollYProgress}
              range={[start, end]}
              highlight={aboutHighlights.includes(clean)}
            >
              {w}
            </Word>
          );
        })}
      </h2>

      <Reveal delay={0.1} className="mt-14 max-w-xl">
        <p className="text-lg leading-relaxed text-muted">{aboutText}</p>
      </Reveal>
    </section>
  );
}
