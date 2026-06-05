"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">System Built To Save Your Time</span>
          <h2 className="font-ar font-bold text-cream text-3xl md:text-5xl mt-4">
            نظام مبني عشان يوفّرلك وقتك
          </h2>
        </motion.div>

        <div className="relative overflow-hidden h-[560px] no-scrollbar">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ink to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 h-full">
            {columns.map((col, ci) => (
              <div
                key={ci}
                className={`flex flex-col gap-4 w-[calc(20%-12px)] flex-shrink-0 ${
                  col.dir === "up" ? "animate-floatUp" : "animate-floatDown"
                }`}
              >
                {[...col.labels, ...col.labels].map((platform, i) => (
                  <VideoCard key={i} platform={platform} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
