import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile, socialLinks } from "../data/social";

const links = [
  { label: "Email", value: profile.email, href: socialLinks.email, icon: Mail },
  { label: "GitHub", value: "View profile", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", value: "View profile", href: socialLinks.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-ink-900/40 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-8 py-14 text-center shadow-card sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 dark:text-accent-400">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let's build something worth shipping.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Open to full-stack, frontend, and cloud architecture roles. Reach out directly or find me on GitHub
              and LinkedIn.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-white transition-colors hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  <link.icon size={16} />
                  {link.value}
                  <ArrowUpRight size={14} className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
