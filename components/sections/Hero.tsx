"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "@/components/CTAButtons";
import { DistributionAnimation } from "@/components/DistributionAnimation";

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.2, 0.7, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 pb-16 pt-28 text-center"
    >
      {/* ambient orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-burn/15 blur-[140px]"
      />

      <motion.div
        custom={0}
        variants={fade}
        initial="hidden"
        animate="show"
        className="eyebrow mb-6"
      >
        Content Distribution Engine
      </motion.div>

      <motion.h1
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="font-ar text-4xl font-bold leading-tight text-cream text-glow sm:text-5xl md:text-7xl"
      >
        نساعدك على <span className="hi">تهكير الخوارزميات</span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-6 max-w-2xl font-ar text-lg text-olive-pale md:text-xl"
      >
        حوّل فيديو واحد إلى نظام توزيع محتوى كامل.
      </motion.p>

      <motion.div custom={3} variants={fade} initial="hidden" animate="show" className="mt-9">
        <CTAButtons align="center" size="lg" />
      </motion.div>

      {/* signature animation */}
      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-16 w-full"
      >
        <DistributionAnimation />
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-en text-[11px] uppercase tracking-[0.2em] text-olive-mid">
        Scroll ↓
      </div>
    </section>
  );
}
