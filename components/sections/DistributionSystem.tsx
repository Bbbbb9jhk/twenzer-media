"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRANCHES = [
  { ar: "بناء العلامة الشخصية", en: "Personal Branding", angle: -90 },
  { ar: "مونتاج الفيديو", en: "Video Editing", angle: 30 },
  { ar: "تهكير الخوارزميات", en: "Algorithm Hacking", angle: 150 },
];

export function DistributionSystem() {
  const [open, setOpen] = useState(false);
  const R = 210;

  return (
    <section id="system" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <span className="eyebrow justify-center">Distribution System</span>
          <h2 className="mt-5 font-ar text-3xl font-bold text-cream md:text-5xl">
            نظام توزيع المحتوى
          </h2>
          <p className="mt-3 font-ar text-olive-light">مرّر الماوس أو اضغط على المركز</p>
        </div>

        <div
          className="relative mx-auto flex h-[460px] w-full max-w-xl items-center justify-center"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* connecting lines */}
          <svg className="absolute inset-0 h-full w-full" viewBox="-250 -230 500 460" aria-hidden="true">
            <AnimatePresence>
              {open &&
                BRANCHES.map((b) => {
                  const rad = (b.angle * Math.PI) / 180;
                  return (
                    <motion.line
                      key={b.en}
                      x1={0}
                      y1={0}
                      x2={Math.cos(rad) * R}
                      y2={Math.sin(rad) * R}
                      stroke="#d97035"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  );
                })}
            </AnimatePresence>
          </svg>

          {/* branch nodes */}
          <AnimatePresence>
            {open &&
              BRANCHES.map((b, i) => {
                const rad = (b.angle * Math.PI) / 180;
                return (
                  <motion.div
                    key={b.en}
                    className="absolute"
                    style={{ left: "50%", top: "50%" }}
                    initial={{ x: -60, y: -30, scale: 0, opacity: 0 }}
                    animate={{
                      x: Math.cos(rad) * R - 70,
                      y: Math.sin(rad) * R - 30,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{ x: -60, y: -30, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.2, 0.7, 0.3, 1] }}
                  >
                    <div className="w-[140px] rounded-xl border border-burn/40 bg-cream/[0.05] px-4 py-3 text-center backdrop-blur">
                      <div className="font-ar text-sm font-bold text-cream">{b.ar}</div>
                      <div className="mt-1 font-en text-[10px] uppercase tracking-wider text-burn">
                        {b.en}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>

          {/* center node */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: open ? "0 0 70px -8px rgba(217,112,53,0.8)" : "0 0 40px -10px rgba(217,112,53,0.5)" }}
            className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-burn bg-ink text-center"
            aria-expanded={open}
          >
            <span className="font-ar text-sm font-bold leading-tight text-cream">
              نظام توزيع
              <br />
              المحتوى
            </span>
            <span className="mt-1 font-en text-[9px] uppercase tracking-widest text-burn">
              Core
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
