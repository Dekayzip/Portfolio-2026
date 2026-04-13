import { siteConfig, navLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 dark:bg-[#09090b] border-t border-zinc-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Name + tagline */}
          <div>
            <p className="text-sm font-bold text-white tracking-tight">
              {siteConfig.name}
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-zinc-600">
            © {year} {siteConfig.name} · {siteConfig.location}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
