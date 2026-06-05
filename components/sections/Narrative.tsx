"use client";

import { motion } from "framer-motion";

export function Narrative() {
  return (
    <section className="bg-olive-deep py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Why distribution</span>
        </motion.div>

        <motion.h2
          className="font-ar font-bold text-4xl md:text-6xl text-cream mt-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          دورنا نخلي الناس تشوفك
        </motion.h2>

        <motion.p
          className="font-ar text-olive-pale max-w-2xl leading-relaxed text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          فيديوهاتك الحالية فيها قيمة.
          <br />
          لكن القيمة وحدها لا تكفي.
          <br />
          الخوارزميات تحتاج إلى{" "}
          <span className="text-burn">توزيع ذكي</span>.
          <br />
          وهنا يأتي دور{" "}
          <span className="text-burn">Twenzer Media</span>.
        </motion.p>
      </div>
    </section>
  );
}
