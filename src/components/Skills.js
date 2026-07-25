import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills & Technologies"
        description="A toolkit spanning frontend frameworks, serverless cloud infrastructure, and browser-native data handling."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 shadow-card"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
