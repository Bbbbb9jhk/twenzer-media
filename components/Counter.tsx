"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({
  to,
  suffix = "+",
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      // reset so it counts up again next time it scrolls into view
      setValue(0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} dir="ltr">
      {value}
      {suffix}
    </span>
  );
}
