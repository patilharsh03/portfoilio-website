"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { profile } from "@/lib/data";
import Avatar from "./Avatar";

const ease = [0.16, 1, 0.3, 1] as const;

const word: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const letter: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.85, ease } },
};

function BigWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      variants={word}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
      className="flex"
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <span key={i} className="overflow-hidden pb-[0.04em]" aria-hidden>
          <motion.span
            variants={letter}
            className="inline-block cursor-default transition-[color,transform] duration-300 hover:translate-y-[0.06em] hover:text-lime"
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % profile.cycleWords.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-12 pt-28 sm:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mb-4"
        >
          {profile.role}
        </motion.p>

        <h1 className="font-display flex flex-col text-[31vw] leading-[0.86] md:flex-row md:gap-[2.2vw] md:text-[min(16.5vw,13.5rem)]">
          <BigWord text={profile.firstName.toUpperCase()} delay={0.15} />
          <span className="text-lime">
            <BigWord text={profile.lastName.toUpperCase()} delay={0.35} />
          </span>
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="max-w-xl"
          >
            <p className="text-lg text-muted sm:text-xl">
              Building with{" "}
              <span className="relative inline-block h-[1.4em] min-w-[16ch] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={profile.cycleWords[i]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="absolute left-0 top-0 whitespace-nowrap font-semibold text-ink"
                  >
                    {profile.cycleWords[i]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-lime rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                View projects
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold transition-colors hover:border-lime hover:text-lime"
              >
                View CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="w-44 self-end sm:w-56 md:w-64"
          >
            <Avatar className="h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
