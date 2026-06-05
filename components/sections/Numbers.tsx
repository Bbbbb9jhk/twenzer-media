"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/Counter";

const stats = [
  { to: 360, label: "فيديو شهرياً" },
  { to: 560, label: "فيديو شهرياً" },
  { to: 720, label: "فيديو شهرياً" },
];

export function Numbers() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Scale</span>
        </motion.div>

        <motion.h2
          className="font-display text-cream text-4xl md:text-6xl mt-6 mb-16 tracking-wide"
          dir="ltr"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          BUILT TO SCALE
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="border-t border-olive-mid/30 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <div className="font-display text-burn text-7xl md:text-8xl text-glow" dir="ltr">
                <Counter to={stat.to} />
              </div>
              <p className="font-ar text-olive-light mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
