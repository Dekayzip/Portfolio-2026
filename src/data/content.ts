// ============================================================
// CENTRAL CONTENT FILE — edit all personal details here
// ============================================================

export const siteConfig = {
  // --- Personal info ---
  name: "Dharani Kommireddi",
  initials: "DK",
  tagline: "data · dashboards · decisions",
  headline: ["Data, Business &", "Healthcare", "Analyst."],
  subheadline: "MS Data Science @ DePaul University · Chicago, IL",
  bio: "MS Data Science candidate with internship experience building automated reporting workflows, funnel and KPI dashboards, and segmentation analyses for an early-stage startup. Skilled in Python, SQL, and Tableau, with a focus on turning messy data into clear recommendations for founders and cross-functional teams.",
  availability: "Open to Data Analyst, Business Analyst, Healthcare Data Analyst, and Growth Analyst roles. Bringing analytical depth, healthcare domain knowledge, and a track record of turning data into decisions that move the business.",

  // --- Contact ---
  email: "dharanirrnk@gmail.com",
  phone: "+1 773-739-0145",
  location: "Chicago, IL",

  // --- Social links --- TODO: replace # with real URLs
  socials: {
    linkedin: "https://www.linkedin.com/in/k-dharani/",
    github: "https://github.com/dekayzip",
    portfolio: "https://dekayzip.github.io/My-Portfolio/#",
    credly: "https://www.credly.com/users/dharanirrnk",
  },

  resume: "/resume.pdf",
  healthcareResume: "/resume_healthcare.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const education = [
  {
    degree: "MS in Data Science",
    institution: "DePaul University",
    location: "Chicago, IL",
    period: "Nov 2024 – Jun 2026",
    details: "Concentration: Healthcare Analytics · GPA: 3.5",
  },
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Malla Reddy Engineering College",
    location: "India",
    period: "2020 – 2024",
    details: "Major: Computer Science · Minor: Data Science",
  },
];

export const experience = [
  {
    role: "Healthcare Data Analytics Extern",
    company: "TruBridge (via Extern)",
    location: "Remote",
    period: "Apr 2026 – Present",
    highlights: [
      "Selected for TruBridge's 8-week healthcare data analytics externship focused on social determinants of health (SDOH) and their impact on patient outcomes, access to care, and public-health decision-making.",
      "Defining an independent research question on SDOH factors (income, education, housing, care access); collecting and preprocessing public-health datasets in Python (Google Colab) and running statistical and correlational EDA to surface trends in health outcomes.",
      "Building a Power BI dashboard and stakeholder presentation translating findings into clear recommendations for healthcare decision-makers, with weekly review sessions led by TruBridge analytics professionals.",
    ],
  },
  {
    role: "Graduate Student Ambassador",
    company: "DePaul University – CDM",
    location: "Chicago, IL",
    period: "Jan 2026 – Present",
    highlights: [
      "Represent the College of Computing and Digital Media at webinars, info sessions, and admitted-student events, fielding real-time questions from prospective students and families.",
      "Provide 1:1 email and Q&A support to prospective students; coordinate outreach activities with admissions staff and fellow ambassadors.",
    ],
  },
  {
    role: "Marketing & Data Analyst Intern",
    company: "Gabriel AI",
    location: "Chicago, IL / Remote",
    period: "Jun 2025 – Sep 2025",
    highlights: [
      "Automated LinkedIn competitive intelligence reporting in Python (Pandas) and Excel as part of a small cross-functional team, cutting ~8 hours/week of manual work and standardizing how the team tracked competitor activity.",
      "Built Tableau dashboards covering funnel performance, channel attribution, and growth KPIs; presented weekly insights to founders and GTM leads that contributed to a ~20% increase in inbound leads over the quarter.",
      "Ran ICP analysis in SQL and Google Sheets to segment and score prospects, recommending a shift toward the highest-performing segments to improve demo booking efficiency.",
      "Pulled competitive market data via the LinkedIn API and lightweight scraping; built reusable data-collection scripts that shortened turnaround time on new analyses.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Innodatatics",
    location: "Hyderabad, India",
    period: "Jun 2023 – Dec 2023",
    highlights: [
      "Built and refactored Python ETL pipelines on client datasets under NDA, cutting end-to-end preprocessing runtime by ~42% through batched transformations and reusable cleaning functions.",
      "Used SQL for data extraction and cleaning; applied normalization, one-hot encoding, and feature engineering to improve ML model inputs, lifting classification accuracy from baseline by ~34.6% on the client's target task.",
      "Benchmarked Random Forest, XGBoost, AdaBoost, and Gradient Boosting on accuracy, precision, recall, and ROC-AUC; documented tradeoffs and recommended the configuration used for downstream client work.",
    ],
  },
];

export const skills = [
  {
    category: "Programming & Query",
    description: "Writing clean code for data pipelines and analysis",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "SQL", "R"],
  },
  {
    category: "Visualization & BI",
    description: "Turning raw data into actionable dashboards",
    items: ["Tableau", "Power BI", "Excel", "Google Sheets", "Jupyter Notebooks"],
  },
  {
    category: "Analytics & Methods",
    description: "Statistical and ML methods for data-driven decisions",
    items: [
      "EDA",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Regression",
      "Classification",
      "Feature Engineering",
      "ETL Pipelines",
      "Model Evaluation",
    ],
  },
  {
    category: "Business & KPIs",
    description: "Bridging data insights with business strategy",
    items: [
      "KPI Dashboards",
      "Funnel Analysis",
      "Customer Segmentation",
      "ICP Analysis",
      "Growth Analytics",
      "Stakeholder Reporting",
      "Data Storytelling",
    ],
  },
  {
    category: "Tools & Platforms",
    description: "Modern tools for scalable collaborative workflows",
    items: ["Git / GitHub", "REST APIs", "Google Sheets Automation", "LinkedIn API"],
  },
  {
    category: "Certifications",
    description: "Verified expertise across data, cloud, and business domains",
    items: [
      "IBM Data Science Professional",
      "Generative AI for Data Scientists – IBM",
      "Data Science & AI for Healthcare – Birdify",
      "Introduction to Statistics – Stanford",
      "Azure Fundamentals AZ-900 – Microsoft",
      "Google Cloud Big Data & ML Fundamentals – Google",
      "Modernizing Data Lakes & Warehouses – Google",
      "Business Analysis & Process Management – Coursera",
      "AI & Business Strategy – NASBA",
      "Strategic Leadership – Dartmouth College",
      "Business Intelligence for Consultants – LinkedIn",
      "Advanced Business Development – LinkedIn",
      "SAP Technical Consulting – Forage",
      "PCAP: Python Essentials – Cisco",
      "Python for Data Science – Cognitive Class",
      "Data Science Foundations – Great Learning",
      "Python for Data Science – Sololearn",
      "Programming in C# – HackerRank",
    ],
  },
];

// Project card gradient colors (Tailwind from/to classes)
export const projectGradients = [
  "from-indigo-500 to-blue-600",
  "from-teal-500 to-emerald-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
];

// Earlier / supplementary experience — shown under "Earlier Experience +" toggle in About
// Add older internships or part-time roles here; leave empty to hide the toggle
export const earlierExperience: Array<{
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}> = [
  // Example — replace with real entries:
  // {
  //   role: "Data Analytics Intern",
  //   company: "Company Name",
  //   location: "City, Country",
  //   period: "Jan 2022 – May 2022",
  //   highlights: ["One-line description of what you did."],
  // },
];

export const projects = [
  {
    title: "Cardio Cast – Predictive Analytics",
    description:
      "Designed and executed a complete EDA-to-insight pipeline across two datasets (5,400+ combined records); applied correlation matrices, pair plots, class imbalance analysis, and VIF-based multicollinearity checks. Benchmarked 5 algorithms across 5 random states; AdaBoost reached 94.1% stroke accuracy and XGBoost reached 0.89 AUC-ROC, with age, hypertension, and glucose as primary risk drivers.",
    tech: ["Python", "Scikit-learn", "Tableau", "AdaBoost", "XGBoost"],
    github: "#", // TODO: add real GitHub link
    live: "#", // TODO: add live demo / Tableau public link
    featured: true,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Rainfall Prediction – Classification Model",
    description:
      "Machine learning pipeline predicting rainfall occurrence from historical meteorological data. Engineered features across weather variables (temperature, humidity, wind speed, pressure) and benchmarked Logistic Regression, Random Forest, and XGBoost classifiers, evaluating tradeoffs via accuracy, precision-recall curves, and ROC-AUC. Includes full EDA and model performance comparisons.",
    tech: ["Python", "Scikit-learn", "Pandas", "Random Forest", "XGBoost"],
    github: "https://github.com/dekayzip/Rainfall-Prediction",
    live: "#",
    featured: true,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Food Wastage Prediction – WLS Regression",
    description:
      "Built a Weighted Least Squares regression model in R on 228 event records across 11 supply-chain variables (R² = 0.76). Selected WLS over OLS after diagnosing heteroscedasticity via Breusch-Pagan testing; Number of Guests and Quantity of Food emerged as strongest predictors (p<0.001), with meat and baked goods showing highest wastage rates. Findings translated into procurement sizing and portion-control recommendations.",
    tech: ["R", "WLS Regression", "Statistical Modeling", "Supply Chain"],
    github: "#", // TODO
    live: "#", // TODO
    featured: false,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Blockchain-Secured Telemedicine Platform",
    description:
      "Co-designed a HIPAA-aware cloud EMR prototype with role-based authentication (patient/doctor/admin), blockchain-based interaction logging for tamper-resistant audit trails, and a Bag-of-Words ML classifier for automated disease categorization and record anonymization. Published in IRJMETS Vol. 6 (Impact Factor: 7.868).",
    tech: ["Blockchain", "Machine Learning", "Cloud", "Full-Stack", "HIPAA"],
    github: "#",
    live: "https://drive.google.com/drive/folders/17Nvg7zeeF1bUhqZml7rZVanzI3Wd69Eo",
    image: "/blockchain-figure.png",
    featured: false,
    gradient: "from-pink-500 to-rose-600",
  },
];
