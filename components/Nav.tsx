"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wordmark } from "@/components/marks";
import { CALENDLY_URL } from "@/lib/constants";

const LINKS = [
  { href: "#system", label: "النظام" },
  { href: "#numbers", label: "الأرقام" },
  { href: "#why", label: "ليه إحنا" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur border-b border-cream/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" aria-label="Twenzer Media" className="shrink-0">
          <Wordmark size={26} align="left" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" dir="rtl">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-ar text-sm text-olive-pale transition-colors hover:text-burn"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-burn px-5 py-2 font-ar text-sm font-semibold text-cream transition-colors hover:bg-burn-dark"
        >
          احجز الآن
        </a>
      </div>
    </motion.header>
  );
}
