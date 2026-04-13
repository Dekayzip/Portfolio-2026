"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/content";

const greetings = [
  "Hey! I already ran 3 regressions on your scroll behavior. 📈",
  "Oh hi! I cleaned this dataset just for you. It was... very messy. 😅",
  "Welcome! Confidence interval: 95% you'll want to reach out. 😎",
  "Hello! Fun fact: I found this greeting in O(1) time. 🧠",
  "Hey! My Tableau dashboard loaded before you finished hovering. ⚡",
  "Oh, you're hovering? Bold move. I respect the curiosity. 🤝",
  "Hi! Don't worry, I've already de-identified your data. 🔒",
  "Hey! I put the 'fun' in functional data pipelines. 🚀",
  "Hello! Data doesn't lie. Right now it says... let's connect. 📣",
  "Oh hey! I was just EDA-ing your visit. Interesting patterns. 🔍",
];

export default function Hero() {
  const revealRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll(".hero-reveal");
    els?.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 120);
    });
  }, []);

  const handleMouseEnter = () => {
    setMessage(greetings[Math.floor(Math.random() * greetings.length)]);
    setHovering(true);
  };

  const handleMouseLeave = () => setHovering(false);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 bg-white dark:bg-[#111113] overflow-hidden transition-colors duration-200"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f4f4f508_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f508_1px,transparent_1px)] bg-[size:48px_48px] dark:opacity-40"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div ref={revealRef} className="flex flex-col">
            {/* Caption tag */}
            <div className="hero-reveal reveal mb-6">
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1">
                {siteConfig.tagline}
              </span>
            </div>

            {/* Main headline — 3 lines */}
            <h1 className="hero-reveal reveal mb-6">
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-zinc-100">
                {siteConfig.headline[0]}
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-zinc-100">
                {siteConfig.headline[1]}
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-zinc-100 italic">
                {siteConfig.headline[2]}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-reveal reveal text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-medium mb-4">
              {siteConfig.subheadline}
            </p>

            {/* Bio */}
            <p className="hero-reveal reveal text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed mb-2">
              {siteConfig.bio}
            </p>

            {/* Availability */}
            <p className="hero-reveal reveal text-xs text-zinc-400 dark:text-zinc-500 max-w-lg mb-8">
              {siteConfig.availability}
            </p>

            {/* CTA buttons */}
            <div className="hero-reveal reveal flex flex-wrap gap-3 mb-10">
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects →
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div className="hero-reveal reveal flex items-center gap-4">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-700" />
              <span className="text-xs text-zinc-400 dark:text-zinc-500">{siteConfig.location}</span>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="relative">
              {/* Greeting dialogue bubble — glass panel */}
              <div
                className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 w-56 z-10 pointer-events-none transition-all duration-300 ease-out ${
                  hovering ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                }`}
              >
                <div className="relative bg-white/60 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200/50 dark:border-zinc-700 px-4 py-3">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{message}</p>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[7px] w-3.5 h-3.5 bg-white/60 dark:bg-zinc-800/90 border-r border-t border-zinc-200/50 dark:border-zinc-700 rotate-45" />
                </div>
              </div>

              {/* Photo */}
              <div
                className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl cursor-default"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Dharani Kommireddi"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce group-hover:animate-none" />
      </button>
    </section>
  );
}
