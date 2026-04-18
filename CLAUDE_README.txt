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
  Live URL: https://dharanik.vercel.app/ (Vercel — auto-deploys on git push)
  Dev: npm run dev  -- ports 3000-3002 often taken; check output (was :3003 last session)
  Build: npm run build

KEY FILES
---------
  src/data/content.ts         <- ALL editable content (bio, projects, skills, links, resumes)
  src/app/globals.css         <- Theme tokens (:root + .dark), body bg, reveal animation
  src/app/layout.tsx          <- Anti-flash dark mode script in <head>. NO fixed bg layer.
  tailwind.config.ts          <- darkMode: "class" enabled
  public/profile.jpeg         <- Profile photo
  public/resume.pdf           <- Analytics resume
  public/resume_healthcare.pdf<- Healthcare resume (underscore, not hyphen)
  public/max-bender-8FdEwlxP3oU-unsplash.jpg <- Chicago skyline photo (placed by user,
                                 NOT used as site bg -- kept in /public but not referenced
                                 in code after background revert)

COMPONENTS (src/components/)
-----------------------------
  Navbar.tsx      Fixed nav · glass scrolled state · Resume dropdown (2 options) ·
                  ThemeToggle · mobile menu
  Hero.tsx        Hero · profile photo (visible on mobile + desktop) · hover greeting
                  bubble (desktop only) · 3-line headline
  Stats.tsx       KPI strip (dark band) -- 6 metrics in glass grid cells
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

BACKGROUNDS (solid -- no photo background)
  Hero:    bg-white dark:bg-[#111113]
  Stats:   bg-zinc-950 dark:bg-[#0c0c0e]   (always dark)
  About:   bg-zinc-50 dark:bg-[#18181b]
  Skills:  bg-zinc-950 dark:bg-[#0c0c0e]   (always dark)
  Projects:bg-white dark:bg-[#111113]
  Contact: bg-zinc-950 dark:bg-[#0c0c0e]   (always dark)
  Footer:  bg-zinc-950 dark:bg-[#09090b]   (always dark)

GLASSMORPHISM (on cards/panels ONLY -- not on section backgrounds)
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
  Light mode toggle: bg-neutral-100 border-neutral-300 (solid, visible on white)
  Dark mode toggle:  bg-zinc-800 border-zinc-700 (unchanged)

HEADLINE (3 lines)
  content.ts: headline: ["Data, Business &", "Healthcare", "Analyst."]
  Hero.tsx renders 3 spans: first two normal weight, third italic

KPI STATS (6 metrics -- dark band between Hero and About)
  1Y 4M+  · Industry Experience   · sub text: "across 3 internships & roles"
  3+      · Internships Held       · sub text: "data, marketing & business"
  3.5     · GPA                   · sub text: "MS Data Science · DePaul"
  18      · Certifications         · sub text: "IBM · Stanford · Google · more"
  ~42%    · ETL Runtime Reduced    · sub text: "Python pipeline optimization"
  ~20%    · Inbound Lead Growth    · sub text: "Tableau dashboards · Gabriel AI"
  Sub text color: text-[#9ca3af] (light grey, readable on dark bg)
  NOTE: Removed "100K+ Records Analyzed" and "94.1% Peak Model Accuracy"
        (too beginner-level to feature). GPA/Internships moved here from Hero photo stats row.

RESUME DROPDOWN (Navbar)
  Analytics Resume  -> /resume.pdf
  Healthcare Resume -> /resume_healthcare.pdf   <- underscore not hyphen!
  Desktop: ChevronDown dropdown · Mobile: two separate pill buttons

HERO PROFILE IMAGE (mobile fix applied)
  Desktop: side-by-side grid (text left, photo right), w-72 h-80
  Mobile:  stacked below text, w-[65vw] h-[72vw], centered
  Greeting bubble: desktop only (hidden lg:block), glass panel
  No em-dashes in greeting strings -- use commas

CERTIFICATIONS (Skills section)
  18 certs · card spans col-span-3 · 3-col grid inside
  Ordered most -> least relevant

EXPERIENCE (About section)
  4 main roles in this order:
    1. Healthcare Data Analytics Extern | TruBridge (via Extern) | Remote | Apr 2026 - Present
    2. Graduate Student Ambassador | DePaul University - CDM | Chicago, IL | Jan 2026 - Present
    3. Marketing & Data Analyst Intern | Gabriel AI | Chicago, IL / Remote | Jun 2025 - Sep 2025
    4. Data Science Intern | Innodatatics | Hyderabad, India | Jun 2023 - Dec 2023
  "Earlier Experience +" toggle: hidden by default, shows when earlierExperience
    array in content.ts has items. Currently EMPTY -- user needs to add older roles.
    Structure in content.ts is ready (typed array, commented example).

================================================================================
CONTENT DECISIONS
================================================================================
  Tagline:    "data · dashboards · decisions"
  Headline:   ["Data, Business &", "Healthcare", "Analyst."]
  Subheadline:"MS Data Science @ DePaul University · Chicago, IL"
  Availability (2 sentences):
    "Open to Data Analyst, Business Analyst, Healthcare Data Analyst, and Growth
     Analyst roles. Bringing analytical depth, healthcare domain knowledge, and a
     track record of turning data into decisions that move the business."
  Education:  No city shown -- just institution name (location field exists but unused in UI)
  Bullets:    · middot separator (NOT em dash)
  Em dashes:  BANNED everywhere -- use commas or periods instead
  Resumes:    Two -- analytics + healthcare (both in public/)

PROJECTS
  1. Cardio Cast -- Predictive Analytics
     Dual-dataset ML · AdaBoost 94.1% stroke · XGBoost 0.89 AUC-ROC
     github: # (TODO -- repo not pushed yet) · live: #
  2. Rainfall Prediction -- Classification Model  [REPLACED Readmission Risk Modeling]
     Python · Random Forest / XGBoost · precision-recall / ROC-AUC evaluation
     github: https://github.com/dekayzip/Rainfall-Prediction · live: #
  3. Food Wastage Prediction -- WLS Regression
     R · 228 records · R2=0.76 · WLS over OLS (Breusch-Pagan)
     github: # (TODO -- repo not pushed yet) · live: #
  4. Blockchain-Secured Telemedicine Platform
     HIPAA · published IRJMETS Vol. 6 (IF: 7.868)
     github: # (TODO) · live: Google Drive folder (paper PDFs)
     live link: https://drive.google.com/drive/folders/17Nvg7zeeF1bUhqZml7rZVanzI3Wd69Eo

SOCIAL LINKS (confirmed -- do not revert)
  LinkedIn: https://www.linkedin.com/in/k-dharani/
  GitHub:   https://github.com/dekayzip
  Credly:   https://www.credly.com/users/dharanirrnk

================================================================================
PENDING / TO DO
================================================================================
  Add real GitHub links to Cardio Cast, Food Wastage, Blockchain cards (content.ts)
  Add live/demo links for Cardio Cast and Food Wastage (Tableau Public URLs)
  Add earlier/older experience entries to earlierExperience[] in content.ts
      (expandable "Earlier Experience +" section is wired up, array is empty)
  Consider adding Walmart-Dashboard, Artists-Dashboard as project cards
  Update siteConfig.socials.portfolio (still points to old GitHub Pages URL)

================================================================================
DESIGN / STYLE RULES
================================================================================
  · Editorial, minimal, recruiter-safe. No bright colors.
  · Font: Inter -- black weight headlines, medium body
  · Palette: zinc-based throughout
  · Dark mode: charcoal/graphite NOT pure black · soft-white NOT pure white
  · Glass panels: backdrop-blur-md, white/5% on dark bg, white/60 on light bg
  · Hover: subtle scale / translate -- no flashy animations
  · Section rhythm (light -> dark alternating):
      Hero (white) -> Stats (dark) -> About (zinc-50) -> Skills (zinc-950)
      -> Projects (white) -> Contact (zinc-950) -> Footer (zinc-950)

  DO NOT CHANGE:
  · Navigation structure, font choices, overall layout, button styles
  · The zinc color palette
  · Section order or spacing rhythm
  · Desktop hero layout (side-by-side grid)

================================================================================
DEV NOTES
================================================================================
  · Node.js available via RStudio bundled runtime (v22), npm bootstrapped to Temp
  · Port conflicts common -- check terminal output for actual port after npm run dev
  · globals.css has .reveal / .visible animation classes used by IntersectionObserver
    in every component -- do not remove these
  · The Chicago skyline photo (max-bender-8FdEwlxP3oU-unsplash.jpg) is in /public
    but NOT wired into the site. It was tried as a full-page background and reverted.
    User kept the file -- may revisit later.
  · ThemeToggle must read from DOM (classList.contains), NOT from localStorage,
    to avoid hydration sync bugs. See ThemeToggle.tsx.
  · earlierExperience in content.ts is typed + commented. Add real entries there.
    The About.tsx toggle is already built and only renders when array.length > 0.
  · Hero image: uses Next.js Image with fill prop. Parent must have position:relative
    and defined height. Mobile: w-[65vw] h-[72vw]. Desktop: w-72 h-80.
  · No em-dashes (--) anywhere in rendered text. Comments in code may use them
    but rendered strings (greetings, bullets, descriptions) must not.

================================================================================
CHANGELOG (session-by-session)
================================================================================
  2026-04-13 (session 1):
    - Built full site from scratch: Navbar, Hero, Stats, About, Skills, Projects,
      Contact, Footer, ThemeToggle
    - 3-line headline, KPI strip, glass cards, dark mode, resume dropdown
    - Chicago photo bg tried + reverted; solid section bgs kept
    - ThemeToggle fixed to read DOM classList (not React state)

  2026-04-13 (session 2):
    - Site deployed to Vercel: https://dharanik.vercel.app/
    - Stats subtitle text: text-zinc-600 -> text-[#9ca3af] (better contrast)
    - Availability text updated to 2-sentence version including healthcare domain
    - TruBridge externship added as first experience entry in content.ts
    - Em-dash in Hero greeting "Hi! Don't worry --" fixed to comma
    - Hero profile image: now visible on mobile (was hidden lg:flex, now flex)
      Photo sizing: w-[65vw] h-[72vw] on mobile, w-72 h-80 on desktop
      Greeting bubble: hidden on mobile (hidden lg:block), desktop only
    - ThemeToggle light mode: bg-white/20 border-white/30 -> bg-neutral-100
      border-neutral-300 (visible on white backgrounds)

  2026-04-15 (session 3):
    - LinkedIn URL corrected: dharani-kommireddi -> k-dharani
      (content.ts siteConfig.socials.linkedin)
    - Credly URL corrected: dharani-kommireddi -> dharanirrnk
      (content.ts siteConfig.socials.credly)
    - Project #2 replaced: Readmission Risk Modeling removed, Rainfall Prediction
      added in its place (github.com/dekayzip/Rainfall-Prediction)
    - Blockchain project live link: # -> Google Drive folder with paper PDFs
    - About.tsx date badge CSS fix: added self-start to experience period span
      so badge shrinks to text width on mobile instead of stretching full-width
    - GitHub CLI (gh) installed and authenticated as Dekayzip
    - Blockchain project card: image preview added (public/blockchain-figure.png)
      Projects.tsx updated to support optional image field on any project card;
      falls back to gradient if no image set

================================================================================

---

SESSION UPDATE: GPT AND COUSIN PORTFOLIO REVIEW CHANGES

BATCH 1 COMPLETED (GPT mechanical fixes):
- Fixed hero headline spacing: now reads "Data, Business & Healthcare Analyst"
- Fixed merged CTA buttons spacing in hero
- Fixed merged footer nav links gap
- Fixed skills section numbering from "0 1" to "01"
- Renamed all project "Live" buttons to "Report"
- Removed Code button from Cardio Cast and COPD cards (repos have no source code)
- Renamed skills heading to "What I bring to the table"

BATCH 2 COMPLETED (cousin and GPT combined):
- Added green pulsing "Open to Work, Chicago IL" badge in hero
- Renamed hero CTAs to "Hire Me" (scrolls to contact) and "See My Work" (scrolls to projects)
- Replaced metrics strip content with 6 proof-based stats: 3 internships, 1.4 years experience, 100K+ records, 3 dashboards, 42% ETL reduction, 20% lead growth
- Replaced About heading with "I turn messy data into decisions."
- Added Resume dropdown in navbar with Analytics Resume and Healthcare Resume options
- Collapsed certifications behind a Show All toggle, 5 visible by default

PENDING PROMPT (generated, not yet run):
- Tighten hero vertical spacing so CTAs visible without scrolling
- Replace metrics grid with single dark horizontal proof strip to preserve alternating light/dark section pattern
- Adaptive project card numbers: white with shadow on images, white/30 on dark gradients, zinc on fallback
- Rewrite About left paragraph with experience proof prose, remove hero repetition
- Second About paragraph updated to focus on August 2026 availability

CURRENT PROJECT CARD ORDER:
1. MIMIC-IV Hospital Readmission (Featured, In Progress, no links, dark teal gradient)
2. Cardio Cast Stroke Risk Prediction (Featured, Report link to PDF, correlation matrix image)
3. COPD Readmission Prediction (Report link to PDF, dark rose gradient)
4. Food Wastage Prediction WLS (Code and Report links, violin plot image)
5. Marketing Campaign Optimization Case Study (Code and Report links, dark violet gradient)

DESIGN DECISIONS MADE:
- Alternating section colors must be preserved: Hero light, proof strip dark, About light, Skills dark, Projects light, Contact dark
- Metrics strip kept as dark separator, content replaced not removed
- No em-dashes anywhere in content or code
- Gradient placeholders use inline style not Tailwind dynamic classes

---

================================================================================
