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

export function DistributionAnimation() {
  const root = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [distributed, setDistributed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDistributed(true);
      return;
    }

    if (!coreRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // 1. the YouTube source pops in
      tl.fromTo(
        coreRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
      );

      // 2. a quick pulse before it distributes
      tl.to(coreRef.current, { scale: 1.06, duration: 0.18, yoyo: true, repeat: 1, ease: "power1.inOut" });

      // 3. lines draw outward + platform nodes appear
      tl.add(() => setDistributed(true));
      tl.fromTo(
        ".dist-line",
        { strokeDashoffset: 520, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 0.7, stagger: 0.09, ease: "power2.out" },
        "<"
      );
      tl.fromTo(
        ".dist-node",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.09, ease: "back.out(1.7)" },
        "<+0.1"
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
              <line x1={CENTER.x} y1={CENTER.y} x2={n.x} y2={n.y} stroke="#3d4a28" strokeWidth={2} />
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

        {/* center: YouTube source inside a glowing circle */}
        <div
          ref={coreRef}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
          style={{ opacity: 0 }}
        >
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-burn bg-ink shadow-[0_0_50px_-6px_rgba(217,112,53,0.8)] md:h-36 md:w-36">
            {/* soft glow ring */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-burn/15 blur-md"
            />
            {/* rotating dashed frame */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-[-10px] rounded-full border-2 border-dashed border-burn/60 animate-[spin_16s_linear_infinite]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-[-20px] rounded-full border border-burn/20 animate-[spin_28s_linear_infinite_reverse]"
            />
            {/* YouTube logo */}
            <svg
              viewBox="0 0 90 64"
              className="relative h-12 w-auto md:h-16"
              aria-label="YouTube"
            >
              <rect x="2" y="2" width="86" height="60" rx="18" fill="#FF0000" />
              <path d="M37 20 L62 32 L37 44 Z" fill="#ffffff" />
            </svg>
          </div>
          <span className="font-en text-xs uppercase tracking-[0.25em] text-olive-pale md:text-sm" dir="ltr">
            Long Video
          </span>
        </div>
      </div>
    </div>
  );
}
