"use client";

import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/content";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-[#111113] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-3">
            Selected Work
          </p>
          <h2 className="reveal text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 max-w-xl leading-tight">
            My
            <br />
            <span className="italic">Projects.</span>
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal group flex flex-col rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-white/[0.1] bg-white/60 dark:bg-white/[0.05] backdrop-blur-md hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 ${
                project.featured ? "ring-1 ring-zinc-900/5 dark:ring-white/[0.08]" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className={`h-44 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    Featured
                  </span>
                )}
                {project.status === "In Progress" && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    In Progress
                  </span>
                )}
                <div className="absolute bottom-4 left-4 text-white/30 font-black text-6xl leading-none select-none">
                  0{i + 1}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-white/[0.08] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.1]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-white/[0.08]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        aria-label={`Live - ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live ↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
