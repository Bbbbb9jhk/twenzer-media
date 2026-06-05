"use client";

import { motion } from "framer-motion";
import { MarkForward } from "@/components/marks";

const cards = [
  {
    title: "فريق مخصص",
    desc: "كل عميل يحصل على فريق منفصل بالكامل.",
  },
  {
    title: "إنتاج داخلي 100%",
    desc: "لا outsourcing. كل شيء يُنتَج داخلياً.",
  },
  {
    title: "تسليم سريع",
    desc: "سرعة في الإنجاز ودعم فوري.",
  },
  {
    title: "محرك توزيع",
    desc: "نظام محتوى مبني ليتوسّع معك.",
  },
];

export function WhyTwenzer() {
  return (
    <section className="bg-olive-deep py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Why Twenzer</span>
        </motion.div>

        <motion.h2
          className="font-ar font-bold text-cream text-4xl md:text-6xl mt-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          ليه Twenzer؟
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-cream/[0.04] backdrop-blur border border-cream/10 rounded-2xl p-7 hover:border-burn/50 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="mb-4">
                <MarkForward size={32} base="#d97035" />
              </div>
              <h3 className="font-ar font-bold text-cream text-xl mb-2">{card.title}</h3>
              <p className="font-ar text-olive-pale text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
