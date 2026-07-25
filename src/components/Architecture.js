import React from "react";
import { motion } from "framer-motion";
import { HardDrive, FileScan, CloudCog, ShieldCheck } from "lucide-react";
import { architectureHighlights } from "../data/skills";
import SectionHeading from "./SectionHeading";

const icons = [HardDrive, FileScan, CloudCog, ShieldCheck];

export default function Architecture() {
  return (
    <section id="architecture" className="section-shell py-24">
      <SectionHeading
        eyebrow="System Design"
        title="Architecture & Engineering Highlights"
        description="Patterns I reach for when privacy, performance and low operational overhead matter."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {architectureHighlights.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-violet-500/15 text-accent-500 dark:text-accent-400">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
