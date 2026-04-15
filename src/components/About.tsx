"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, GraduationCap, Briefcase, ChevronDown } from "lucide-react";
import { siteConfig, education, experience, earlierExperience } from "@/data/content";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showEarlier, setShowEarlier] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-zinc-50 dark:bg-[#18181b] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Glass content panel */}
        <div className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl border border-white/50 dark:border-white/[0.1] shadow-sm dark:shadow-none p-8 lg:p-12">
          {/* Section header */}
          <div className="mb-16">
            <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-3">
              About Me
            </p>
            <h2 className="reveal text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 max-w-xl leading-tight">
              Welcome to my
              <br />
              <span className="italic">data world.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: bio + education */}
            <div>
              <p className="reveal text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {siteConfig.bio}
              </p>
              <p className="reveal text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed mb-10">
                {siteConfig.availability}
              </p>

              {/* Education */}
              <div className="reveal">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={16} className="text-zinc-400" />
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                    Education
                  </h3>
                </div>
                <ul className="space-y-4">
                  {education.map((edu) => (
                    <li
                      key={edu.degree}
                      className="border-l-2 border-zinc-200 dark:border-zinc-700 pl-4"
                    >
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.institution}</p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{edu.details}</p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">{edu.period}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="reveal flex items-center gap-2 mt-8 text-sm text-zinc-500 dark:text-zinc-400">
                <MapPin size={14} className="text-zinc-400" />
                <span>{siteConfig.location}</span>
              </div>
            </div>

            {/* Right: experience */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-zinc-400" />
                <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                  Experience
                </h3>
              </div>

              {/* Main experience */}
              <ul className="space-y-8">
                {experience.map((exp, i) => (
                  <li key={i} className="reveal">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-zinc-400 shrink-0 self-start mt-0.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-xs text-zinc-500 dark:text-zinc-400 flex gap-2">
                          <span className="text-zinc-300 dark:text-zinc-600 mt-0.5 shrink-0">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              {/* Earlier Experience — expandable, shown only when array has items */}
              {earlierExperience.length > 0 && (
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <button
                    onClick={() => setShowEarlier(!showEarlier)}
                    className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${showEarlier ? "rotate-180" : ""}`}
                    />
                    Earlier Experience
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showEarlier ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-6">
                      {earlierExperience.map((exp, i) => (
                        <li key={i} className="opacity-65">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                            <div>
                              <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">{exp.role}</p>
                              <p className="text-xs text-zinc-500">{exp.company} · {exp.location}</p>
                            </div>
                            <span className="text-[10px] font-medium text-zinc-400 shrink-0">{exp.period}</span>
                          </div>
                          {exp.highlights.length > 0 && (
                            <ul className="space-y-0.5">
                              {exp.highlights.map((h, j) => (
                                <li key={j} className="text-[11px] text-zinc-500 flex gap-2">
                                  <span className="text-zinc-400 mt-0.5 shrink-0">·</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
