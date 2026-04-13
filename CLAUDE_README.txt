================================================================================
  CLAUDE_README — Portfolio Project Context for Claude
  Dharani Kommireddi Portfolio | Next.js 14 + TypeScript + Tailwind
  Last updated: 2026-04-13
================================================================================

STACK
-----
  Next.js 14.2.5 · TypeScript · Tailwind CSS 3 · lucide-react
  No UI libraries. Everything is custom.

LOCATION
--------
  C:\Users\dhara\OneDrive\Desktop\Portfolio
  Dev: npm run dev  → ports 3000-3002 often taken; check output (was :3003 last session)
  Build: npm run build

KEY FILES
---------
  src/data/content.ts         ← ALL editable content (bio, projects, skills, links, resumes)
  src/app/globals.css         ← Theme tokens (:root + .dark), body bg, reveal animation
  src/app/layout.tsx          ← Anti-flash dark mode script in <head>. NO fixed bg layer.
  tailwind.config.ts          ← darkMode: "class" enabled
  public/profile.jpeg         ← Profile photo ✅
  public/resume.pdf           ← Analytics resume ✅
  public/resume_healthcare.pdf← Healthcare resume ✅ (underscore, not hyphen)
  public/max-bender-8FdEwlxP3oU-unsplash.jpg ← Chicago skyline photo (placed by user,
                                 NOT used as site bg — kept in /public but not referenced
                                 in code after background revert)

COMPONENTS (src/components/)
-----------------------------
  Navbar.tsx      Fixed nav · glass scrolled state · Resume dropdown (2 options) ·
                  ThemeToggle · mobile menu
  Hero.tsx        Hero · profile photo · hover greeting bubble (glass) · 3-line headline
  Stats.tsx       KPI strip (dark band) — 6 metrics in glass grid cells
  About.tsx       Bio · Education · Experience · "Earlier Experience +" expandable ·
                  wrapped in a glass panel
  Skills.tsx      Skills grid (glass cards) · Certifications full-width 3-col card
  Projects.tsx    2-col project cards (glass) with gradient headers
  Contact.tsx     Dark CTA section wrapped in glass panel
  Footer.tsx      Dark footer
  ThemeToggle.tsx Sun/moon pill · reads DOM classList (not React state) · localStorage

================================================================================
CURRENT DESIGN STATE (as of 2026-04-13)
================================================================================

BACKGROUNDS (solid — no photo background)
  Hero:    bg-white dark:bg-[#111113]
  Stats:   bg-zinc-950 dark:bg-[#0c0c0e]   (always dark)
  About:   bg-zinc-50 dark:bg-[#18181b]
  Skills:  bg-zinc-950 dark:bg-[#0c0c0e]   (always dark)
  Projects:bg-white dark:bg-[#111113]
  Contact: bg-zinc-950 dark:bg-[#0c0c0e]   (always dark)
  Footer:  bg-zinc-950 dark:bg-[#09090b]   (always dark)

GLASSMORPHISM (on cards/panels ONLY — not on section backgrounds)
  Light mode: bg-white/60  backdrop-blur-md  border border-white/50
  Dark mode:  bg-white/[0.05]  backdrop-blur-md  border border-white/[0.1]
  Tailwind shorthand: bg-white/60 dark:bg-white/[0.05] backdrop-blur-md
                      border border-white/50 dark:border-white/[0.1]
  Applied to: About panel wrapper, Project cards, Skills cards, Stats cells,
              Contact panel, Navbar dropdown, Hero greeting bubble

DARK MODE
  darkMode: "class" in Tailwind config
  Anti-flash inline <script> in layout.tsx (reads localStorage + system preference)
  ThemeToggle reads from document.documentElement.classList.contains("dark")
    on both mount AND click (prevents React state sync issues)
  localStorage key: "theme"

HEADLINE (3 lines)
  content.ts: headline: ["Data, Business &", "Healthcare", "Analyst."]
  Hero.tsx renders 3 spans: first two normal weight, third italic

KPI STATS (6 metrics — dark band between Hero and About)
  1Y 4M+  · Industry Experience
  3+      · Internships Held
  3.5     · GPA (MS Data Science · DePaul)
  18      · Certifications
  ~42%    · ETL Runtime Reduced
  ~20%    · Inbound Lead Growth
  NOTE: Removed "100K+ Records Analyzed" and "94.1% Peak Model Accuracy"
        (too beginner-level to feature). GPA/Internships moved here from Hero photo stats row.

RESUME DROPDOWN (Navbar)
  Analytics Resume  → /resume.pdf
  Healthcare Resume → /resume_healthcare.pdf   ← underscore not hyphen!
  Desktop: ChevronDown dropdown · Mobile: two separate pill buttons

HERO HOVER GREETING
  10 random data-themed messages
  Speech bubble: glass panel (bg-white/60 dark:bg-zinc-800/90 backdrop-blur-md)
  Arrow tail pointing right toward photo
  Photo: scale-105 zoom on hover

CERTIFICATIONS (Skills section)
  18 certs · card spans col-span-3 · 3-col grid inside
  Ordered most → least relevant

EXPERIENCE (About section)
  3 main roles: Graduate Student Ambassador, Gabriel AI, Innodatatics
  "Earlier Experience +" toggle: hidden by default, shows when earlierExperience
    array in content.ts has items. Currently EMPTY — user needs to add older roles.
    Structure in content.ts is ready (typed array, commented example).

================================================================================
CONTENT DECISIONS
================================================================================
  Tagline:    "data · dashboards · decisions"
  Headline:   ["Data, Business &", "Healthcare", "Analyst."]
  Subheadline:"MS Data Science @ DePaul University · Chicago, IL"
  Education:  No city shown — just institution name (location field exists but unused in UI)
  Bullets:    · middot separator (NOT em dash)
  Em dashes:  Removed from all project descriptions
  Resumes:    Two — analytics + healthcare (both in public/)

PROJECTS (all GitHub/live links still # — not pushed yet)
  1. Cardio Cast – Predictive Analytics
     Dual-dataset ML · AdaBoost 94.1% stroke · XGBoost 0.89 AUC-ROC
  2. Readmission Risk Modeling & Dashboard
     100K+ records · AUC 0.681 · CDC HI-5 Tableau dashboard
  3. Food Wastage Prediction – WLS Regression
     R · 228 records · R²=0.76 · WLS over OLS (Breusch-Pagan)
  4. Blockchain-Secured Telemedicine Platform
     HIPAA · published IRJMETS Vol. 6 (IF: 7.868)
  GitHub: github.com/dekayzip — none of the 4 projects pushed yet.

================================================================================
PENDING / TO DO
================================================================================
  ⚠️  Add real GitHub links to 4 project cards (content.ts, once repos pushed)
  ⚠️  Add live/demo links (Tableau Public, IRJMETS paper link)
  ⚠️  Confirm LinkedIn URL — content.ts has "dharani-kommireddi", may be "k-dharani"
  ⚠️  Confirm Credly URL
  ⚠️  Add earlier/older experience entries to earlierExperience[] in content.ts
      (expandable "Earlier Experience +" section is wired up, array is empty)
  ⚠️  Consider adding other GitHub repos as projects (Rainfall-Prediction,
      Walmart-Dashboard, Artists-Dashboard — not yet in portfolio)

================================================================================
DESIGN / STYLE RULES
================================================================================
  · Editorial, minimal, recruiter-safe. No bright colors.
  · Font: Inter — black weight headlines, medium body
  · Palette: zinc-based throughout
  · Dark mode: charcoal/graphite NOT pure black · soft-white NOT pure white
  · Glass panels: backdrop-blur-md, white/5% on dark bg, white/60 on light bg
  · Hover: subtle scale / translate — no flashy animations
  · Section rhythm (light → dark alternating):
      Hero (white) → Stats (dark) → About (zinc-50) → Skills (zinc-950)
      → Projects (white) → Contact (zinc-950) → Footer (zinc-950)

  DO NOT CHANGE:
  · Navigation structure, font choices, overall layout, button styles
  · The zinc color palette
  · Section order or spacing rhythm

================================================================================
DEV NOTES
================================================================================
  · Node.js available via RStudio bundled runtime (v22), npm bootstrapped to Temp
  · Port conflicts common — check terminal output for actual port after npm run dev
  · globals.css has .reveal / .visible animation classes used by IntersectionObserver
    in every component — do not remove these
  · The Chicago skyline photo (max-bender-8FdEwlxP3oU-unsplash.jpg) is in /public
    but NOT wired into the site. It was tried as a full-page background and reverted.
    User kept the file — may revisit later.
  · ThemeToggle must read from DOM (classList.contains), NOT from localStorage,
    to avoid hydration sync bugs. See ThemeToggle.tsx.
  · earlierExperience in content.ts is typed + commented. Add real entries there.
    The About.tsx toggle is already built and only renders when array.length > 0.

================================================================================
