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
    return <div className="w-[56px] h-[28px]" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-[56px] h-[28px] rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-1 transition-all duration-300"
      style={{ background: dark ? "#252037" : "linear-gradient(135deg, #87CEEB 0%, #117AF5 100%)" }}
    >
      {/* Light mode: two clouds on right half of track */}
      {!dark && (
        <>
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.85, width: 12, height: 5, top: 8,  right: 6  }} />
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.85, width: 7,  height: 6, top: 4,  right: 11 }} />
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.85, width: 9,  height: 4, top: 17, right: 5  }} />
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.85, width: 5,  height: 5, top: 14, right: 10 }} />
        </>
      )}

      {/* Dark mode: three stars on left half of track */}
      {dark && (
        <>
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.9, width: 1.5, height: 1.5, top: 7,  left: 7  }} />
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.9, width: 1.5, height: 1.5, top: 15, left: 10 }} />
          <span className="absolute rounded-full bg-white" style={{ opacity: 0.9, width: 1.5, height: 1.5, top: 11, left: 5  }} />
        </>
      )}

      {/* Sliding thumb */}
      <span
        className="absolute top-[3px] w-[22px] h-[22px] rounded-full transition-all duration-300 ease-in-out"
        style={{ left: dark ? 31 : 3, background: dark ? "#C9C9C9" : "#ECC02D" }}
      >
        {/* Dark mode: craters */}
        {dark && (
          <>
            <span className="absolute rounded-full" style={{ width: 4, height: 4, background: "#889399", top: 5,  left: 4  }} />
            <span className="absolute rounded-full" style={{ width: 3, height: 3, background: "#889399", top: 12, left: 11 }} />
          </>
        )}
      </span>
    </button>
  );
}
