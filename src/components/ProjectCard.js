import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-card"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
            <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">{project.tagline}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white px-4 py-2.5 text-sm font-semibold text-white dark:text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            {project.linkLabel}
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/10 pt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 dark:bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
