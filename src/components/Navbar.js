import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, Github, Linkedin, Download } from "lucide-react";
import { socialLinks } from "../data/social";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-ink-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          Suhas<span className="text-accent-500">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={socialLinks.resume}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <Download size={15} />
            Resume
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-ink-950 border-t border-slate-200 dark:border-white/5"
        >
          <div className="section-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={socialLinks.resume}
              download
              className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              <Download size={15} />
              Resume
            </a>
            <div className="flex items-center gap-4 pt-3">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} className="text-slate-500 dark:text-slate-400" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} className="text-slate-500 dark:text-slate-400" />
              </a>
              <button onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "dark" ? (
                  <Sun size={18} className="text-slate-500 dark:text-slate-400" />
                ) : (
                  <Moon size={18} className="text-slate-500 dark:text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
