"use client";

import { useEffect, useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Contact() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 bg-zinc-950 dark:bg-[#0c0c0e] text-white transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Glass content panel */}
        <div className="bg-white/[0.05] backdrop-blur-md rounded-3xl border border-white/[0.1] p-10 lg:p-16">
          <div className="max-w-2xl">
            <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">
              Let&apos;s Connect
            </p>
            <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white mb-4">
              Got a project
              <br />
              <span className="text-zinc-400">in mind?</span>
            </h2>
            <h3 className="reveal text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] italic text-zinc-300 mb-10">
              Let&apos;s talk.
            </h3>
            <p className="reveal text-sm text-zinc-500 max-w-md leading-relaxed mb-10">
              I&apos;m open to full-time analyst roles, freelance analytics projects, and
              research collaborations. Drop me a line and let&apos;s see what we can build
              together.
            </p>
            <div className="reveal flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-200 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail size={15} />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-700 text-zinc-300 text-sm font-semibold rounded-full hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-700 text-zinc-300 text-sm font-semibold rounded-full hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
