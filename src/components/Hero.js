import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, socialLinks } from "../data/social";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-slate [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70 dark:opacity-100" />
      <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-40 -left-16 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl animate-float" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl"
        >
          Building {" "}
          <span className="text-gradient">local-first, cloud-native</span>{" "}
          products end to end.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          I'm {profile.name}, a {profile.title.toLowerCase()} specializing in{" "}
          <span className="text-slate-900 dark:text-white font-medium">Angular, React and serverless AWS
          architecture</span>. I design and ship production apps that put privacy and performance first — from
          in-browser document parsing to secure, CDN-backed cloud pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-accent-400"
          >
            View Featured Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-white transition-colors hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
          >
            Get in Touch
          </a>
          <a
            href={socialLinks.resume}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-white transition-colors hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={socialLinks.email}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            <Mail size={18} /> {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
