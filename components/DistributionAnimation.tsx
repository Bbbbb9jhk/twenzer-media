"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  TikTokIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  PlatformGlyph,
} from "@/components/platformIcons";

const CENTER = { x: 500, y: 280 };

type Node = { name: string; x: number; y: number; Icon: PlatformGlyph };

const NODES: Node[] = [
  { name: "TikTok", x: 150, y: 86, Icon: TikTokIcon },
  { name: "Instagram", x: 850, y: 86, Icon: InstagramIcon },
  { name: "Shorts", x: 916, y: 300, Icon: YouTubeIcon },
  { name: "Facebook", x: 800, y: 500, Icon: FacebookIcon },
  { name: "LinkedIn", x: 200, y: 500, Icon: LinkedInIcon },
  { name: "X", x: 84, y: 300, Icon: XIcon },
];

const FULL_CMD = "viral_now.exe";

export function DistributionAnimation() {
  const root = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"idle" | "processing" | "done">("idle");
  const [distributed, setDistributed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(FULL_CMD);
      setPhase("done");
      setDistributed(true);
      return;
    }

    if (!cursorRef.current || !progressRef.current) return;

    const ctx = gsap.context(() => {
      const proxy = { n: 0 };
      const tl = gsap.timeline({ delay: 0.6 });

      // 1. cursor glides toward the command line
      tl.fromTo(
        cursorRef.current,
        { x: 120, y: -60, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1.1, ease: "power3.inOut" }
      );

      // 2. type the command
      tl.to(
        proxy,
        {
          n: FULL_CMD.length,
          duration: 1.0,
          ease: "none",
          onUpdate: () => setTyped(FULL_CMD.slice(0, Math.round(proxy.n))),
        },
        "+=0.15"
      );

      // 3. press enter -> processing
      tl.call(() => setPhase("processing"), undefined, "+=0.35");
      tl.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.0, ease: "power2.inOut", transformOrigin: "left" }
      );

      // 4. explode / distribute
      tl.call(() => {
        setPhase("done");
        setDistributed(true);
      });
      tl.fromTo(
        ".dist-node",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.09, ease: "back.out(1.7)" },
        "<"
      );
      tl.fromTo(
        ".dist-line",
        { strokeDashoffset: 520, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 0.7, stagger: 0.09, ease: "power2.out" },
        "<"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative mx-auto w-full max-w-4xl"
      aria-label="عرض توضيحي لتوزيع المحتوى عبر المنصات"
    >
      <div className="relative aspect-[1000/560] w-full">
        {/* arrows layer */}
        <svg
          viewBox="0 0 1000 560"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          {NODES.map((n) => (
            <g key={n.name}>
              {/* static base track */}
              <line
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke="#3d4a28"
                strokeWidth={2}
              />
              {/* draw-in beam */}
              <line
                className="dist-line"
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke="#d97035"
                strokeWidth={3}
                strokeLinecap="round"
                strokeDasharray="520"
              />
              {/* perpetual flowing chevrons once distributed */}
              {distributed && (
                <line
                  className="arrow-flow"
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={n.x}
                  y2={n.y}
                  stroke="#e8905c"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              )}
            </g>
          ))}
        </svg>

        {/* platform nodes */}
        {NODES.map((n) => (
          <div
            key={n.name}
            className="dist-node absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 560) * 100}%`, opacity: 0 }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-burn/50 bg-ink shadow-[0_0_24px_-4px_rgba(217,112,53,0.6)] md:h-14 md:w-14">
              <n.Icon />
            </div>
            <span className="font-en text-[9px] uppercase tracking-wider text-olive-pale md:text-[11px]">
              {n.name}
            </span>
          </div>
        ))}

        {/* center video / terminal card */}
        <div className="absolute left-1/2 top-1/2 w-[58%] max-w-[360px] -translate-x-1/2 -translate-y-1/2">
          <div className="overflow-hidden rounded-xl border border-olive-mid/40 bg-[#0d0e07] shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
            {/* fake browser/video chrome */}
            <div className="flex items-center gap-1.5 border-b border-cream/10 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            {/* video frame with play button */}
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-olive-dark to-ink">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff0000] shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="absolute bottom-2 right-3 font-en text-[10px] text-cream/60">
                long_form.mp4
              </span>
            </div>
            {/* terminal command line */}
            <div className="border-t border-cream/10 bg-ink px-3 py-2.5 font-en text-[12px] md:text-sm">
              <div className="flex items-center gap-2" dir="ltr">
                <span className="text-burn">›</span>
                <span className="text-cream">
                  {typed}
                  {phase === "idle" && <span className="ml-0.5 animate-pulse text-burn">▋</span>}
                </span>
              </div>
              {phase !== "idle" && (
                <div className="mt-2" dir="ltr">
                  <div className="flex items-center justify-between text-[10px] text-olive-light">
                    <span>{phase === "processing" ? "Processing…" : "Distributed ✓"}</span>
                    <span>{phase === "done" ? "100%" : ""}</span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-olive-dark">
                    <div
                      ref={progressRef}
                      className="h-full w-full rounded-full bg-burn"
                      style={{ transform: phase === "done" ? "scaleX(1)" : undefined, transformOrigin: "left" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* animated cursor pointer */}
          <div
            ref={cursorRef}
            className="pointer-events-none absolute -bottom-2 left-8 opacity-0"
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#f5f2ea" stroke="#111209" strokeWidth="1">
              <path d="M5 3l14 7-6 2-2 6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
