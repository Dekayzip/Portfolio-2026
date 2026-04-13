"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read from DOM — anti-flash script already set the correct class
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggle = () => {
    // Always read from DOM to avoid React-state sync issues
    const wasDark = document.documentElement.classList.contains("dark");
    const next = !wasDark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="w-[52px] h-[26px]" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center w-[52px] h-[26px] rounded-full border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-1 ${
        dark
          ? "bg-zinc-800 border-zinc-700"
          : "bg-neutral-100 border-neutral-300"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-[7px] text-[10px] transition-opacity duration-300 select-none ${
          dark ? "opacity-25" : "opacity-100"
        }`}
      >
        ☀
      </span>
      <span
        aria-hidden="true"
        className={`absolute right-[7px] text-[9px] transition-opacity duration-300 select-none ${
          dark ? "opacity-100" : "opacity-25"
        }`}
      >
        ☽
      </span>
      <span
        className={`absolute top-[3px] w-[18px] h-[18px] rounded-full shadow-sm transition-all duration-300 ease-out ${
          dark
            ? "left-[calc(100%-21px)] bg-zinc-300"
            : "left-[3px] bg-white border border-white/40"
        }`}
      />
    </button>
  );
}
