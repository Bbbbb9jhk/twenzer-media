"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "@/components/CTAButtons";

export function FinalCTA() {
  return (
    <section className="bg-ink py-32 md:py-44 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-burn/20 blur-[120px] rounded-full animate-glowpulse" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.h2
          className="font-ar font-bold text-cream text-4xl md:text-7xl text-glow mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          جاهز تخلي الناس تشوفك؟
        </motion.h2>

        <motion.p
          className="font-ar text-olive-pale text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          احجز مكالمة وخلّينا نبدأ نظام التوزيع بتاعك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <CTAButtons align="center" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
