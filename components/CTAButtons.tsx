"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/constants";

export function CTAButtons({
  align = "center",
  size = "md",
}: {
  align?: "center" | "start";
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-9 py-4 text-lg" : "px-7 py-3 text-base";
  return (
    <div
      className={`flex flex-wrap gap-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
      dir="rtl"
    >
      <motion.a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`font-ar font-semibold rounded-xl bg-burn text-cream ${pad} glow-burn transition-colors hover:bg-burn-dark`}
      >
        احجز مكالمتك الآن
      </motion.a>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`font-ar font-semibold rounded-xl border border-olive-mid text-cream ${pad} transition-colors hover:border-burn hover:text-burn`}
      >
        واتساب
      </motion.a>
    </div>
  );
}
