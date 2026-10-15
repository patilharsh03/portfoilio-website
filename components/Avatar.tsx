"use client";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"


export default function Avatar({ className = "" }: { className?: string }) {
  // cursor position as -0.5 ... 0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 15,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);


  return (
    <div className={`avatar-float relative ${className}`}>
      {/* glow */}
      <div className="absolute inset-6 animate-pulse rounded-full bg-lime/25 blur-3xl" />

      {/* tilt + hover + tap */}
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 700 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94, rotate: -4 }}
        className="relative"
      >
        <Image
          src="/avatar.png"
          alt="IIustration of Harsh Patil"
          width={600}
          height={700}
          priority
          className="h-auto w-full"
        />
      </motion.div>

      {/* speech bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 16 }}
        className="absolute -left-4 top-0 rounded-2xl rounded-br-sm bg-lime px-3 py-1.5 text-xs font-semibold text-black sm:text-sm"
      >
        Hi, I&apos;m Harsh 👋
      </motion.div>

    </div>
  )
}