"use client";

import { useEffect, useRef } from "react";

const kpis = [
  { value: "3",        label: "Internships",            sub: "data, marketing and healthcare" },
  { value: "1.4 Years", label: "Industry Experience",   sub: "across analytics and data roles" },
  { value: "100K+",   label: "Records Analyzed",        sub: "clinical and business datasets" },
  { value: "3",        label: "Dashboards Shipped",     sub: "Tableau and Power BI" },
  { value: "~42%",    label: "ETL Runtime Reduced",     sub: "Python pipeline optimization" },
  { value: "~20%",    label: "Inbound Lead Growth",     sub: "Tableau dashboards, Gabriel AI" },
];

export default function Stats() {
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
      ref={sectionRef}
      className="bg-zinc-950 dark:bg-[#0c0c0e] border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        {/* gap-px on the wrapper creates hairline dividers between glass cells */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="reveal bg-white/[0.05] dark:bg-white/[0.04] backdrop-blur-sm px-6 py-7 flex flex-col gap-1 hover:bg-white/[0.09] transition-colors duration-300"
            >
              <p className="text-2xl sm:text-3xl font-black tracking-tighter text-white leading-none">
                {kpi.value}
              </p>
              <p className="text-xs font-semibold text-zinc-300 mt-1 leading-tight">
                {kpi.label}
              </p>
              <p className="text-[10px] text-[#9ca3af] leading-tight">{kpi.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
