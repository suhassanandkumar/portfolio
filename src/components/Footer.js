import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, socialLinks } from "../data/social";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={socialLinks.email}
            className="text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
