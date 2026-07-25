import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-ink-900/40 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Work"
          title="Products I've architected and shipped"
          description="Two full-stack applications built end to end — from system design and cloud infrastructure to the UI."
        />

        <div className="mt-12 grid gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
