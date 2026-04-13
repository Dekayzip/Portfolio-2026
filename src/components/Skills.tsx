"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 60);
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
      id="skills"
      ref={sectionRef}
      className="py-24 bg-zinc-950 dark:bg-[#0c0c0e] text-white transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-3">
            What I bring
          </p>
          <h2 className="reveal text-4xl sm:text-5xl font-black tracking-tighter text-white max-w-lg leading-tight">
            Skills that fuel
            <br />
            <span className="italic text-zinc-400">my passion.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.category}
              className={`reveal group relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.09] hover:border-white/[0.15] hover:shadow-xl hover:shadow-black/30 transition-all duration-300${skill.category === "Certifications" ? " sm:col-span-2 lg:col-span-3" : ""}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Card number */}
              <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-white/40 transition-colors">
                0{i + 1}
              </span>

              {/* Category title */}
              <h3 className="text-sm font-bold text-white mb-1.5 pr-8">
                {skill.category}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Tech tags */}
              {skill.category === "Certifications" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-zinc-400 border border-white/[0.1] group-hover:border-white/[0.2] group-hover:text-zinc-300 transition-colors truncate"
                      title={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-zinc-400 border border-white/[0.1] group-hover:border-white/[0.2] group-hover:text-zinc-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
