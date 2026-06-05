"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const platforms = ["TikTok", "Reels", "Shorts", "LinkedIn", "X"];

function buildColumn(offset: number): string[] {
  const base = [...platforms, ...platforms];
  return base.map((_, i) => platforms[(i + offset) % platforms.length]);
}

const columns = [
  { labels: buildColumn(0), dir: "up" as const },
  { labels: buildColumn(1), dir: "down" as const },
  { labels: buildColumn(2), dir: "up" as const },
  { labels: buildColumn(3), dir: "down" as const },
  { labels: buildColumn(4), dir: "up" as const },
];

const COMMAND = "viral";
const CODE_LINES = [
  "> scanning  long_form.mp4 …",
  "> extracting viral moments  ▓▓▓▓▓▓▓▓",
  "> rendering 720 vertical clips …",
  "✓ distributed → TikTok · Reels · Shorts · LinkedIn · X",
];

function VideoCard({ platform }: { platform: string }) {
  return (
    <div className="aspect-[9/16] w-full rounded-xl bg-gradient-to-br from-olive-dark to-ink border border-olive-mid/30 relative flex items-center justify-center flex-shrink-0">
      <span className="text-cream/20 text-3xl select-none">▶</span>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-en text-[10px] uppercase tracking-wider bg-burn/90 text-cream rounded-full px-2 py-0.5 whitespace-nowrap">
        {platform}
      </span>
    </div>
  );
}

export function ContentWall() {
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, margin: "-120px" });
  const [typed, setTyped] = useState("");
  const [lines, setLines] = useState(0);
  const [ready, setReady] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = useCallback(() => {
    // clear anything already scheduled and reset to the start
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setTyped("");
    setLines(0);
    setReady(false);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(COMMAND);
      setLines(CODE_LINES.length);
      setReady(true);
      return;
    }

    const timers = timersRef.current;
    // 1. type the command
    COMMAND.split("").forEach((_, i) =>
      timers.push(setTimeout(() => setTyped(COMMAND.slice(0, i + 1)), 400 + i * 130))
    );
    // 2. stream the code lines
    const base = 400 + COMMAND.length * 130 + 450;
    CODE_LINES.forEach((_, i) =>
      timers.push(setTimeout(() => setLines(i + 1), base + i * 520))
    );
    // 3. reveal the content wall
    timers.push(setTimeout(() => setReady(true), base + CODE_LINES.length * 520 + 250));
  }, []);

  useEffect(() => {
    if (inView) run();
    return () => timersRef.current.forEach(clearTimeout);
  }, [inView, run]);

  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <motion.div
          className="relative text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">System Built To Save Your Time</span>
          <h2 className="font-ar font-bold text-cream text-3xl md:text-5xl mt-4">
            نظام مبني عشان يوفّرلك وقتك
          </h2>

          <button
            type="button"
            onClick={run}
            dir="ltr"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-burn/50 px-4 py-2 font-en text-xs uppercase tracking-wider text-burn transition-colors hover:bg-burn hover:text-cream md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
            </svg>
            Restart
          </button>
        </motion.div>

        <div ref={stageRef} className="relative overflow-hidden h-[560px] no-scrollbar rounded-2xl">
          {/* Top / bottom fades */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ink to-transparent z-10 pointer-events-none" />

          {/* The content wall (revealed after the command runs) */}
          <motion.div
            className="flex gap-4 h-full"
            initial={{ opacity: 0, filter: "blur(18px)", scale: 1.04 }}
            animate={
              ready
                ? { opacity: 1, filter: "blur(0px)", scale: 1 }
                : { opacity: 0, filter: "blur(18px)", scale: 1.04 }
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {columns.map((col, ci) => (
              <div
                key={ci}
                className={`flex flex-col gap-4 w-[calc(20%-12px)] flex-shrink-0 ${
                  ready ? (col.dir === "up" ? "animate-floatUp" : "animate-floatDown") : ""
                }`}
              >
                {[...col.labels, ...col.labels].map((platform, i) => (
                  <VideoCard key={i} platform={platform} />
                ))}
              </div>
            ))}
          </motion.div>

          {/* Terminal intro overlay */}
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: ready ? 0 : 1 }}
            transition={{ duration: 0.6 }}
            style={{ pointerEvents: ready ? "none" : "auto" }}
          >
            <div className="w-full max-w-lg overflow-hidden rounded-xl border border-olive-mid/40 bg-[#0d0e07] shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 border-b border-cream/10 px-3 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-en text-[11px] text-olive-light">twenzer — distribution</span>
              </div>
              {/* terminal body */}
              <div className="px-5 py-4 font-en text-[13px] leading-relaxed md:text-sm" dir="ltr">
                <div className="flex items-center gap-2">
                  <span className="text-burn">›</span>
                  <span className="text-cream">
                    {typed}
                    <span className="ml-0.5 inline-block w-2 animate-pulse text-burn">▋</span>
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={i}
                      className={`transition-opacity duration-300 ${
                        i < lines ? "opacity-100" : "opacity-0"
                      } ${line.startsWith("✓") ? "text-olive-light" : "text-olive-pale/80"}`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
