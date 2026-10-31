/**
 * discover-sources.ts
 * Central registry of ALL opportunity sources for the Discover hub.
 * Covers: job portals, LinkedIn HRs, professors/research, forums, firms,
 * internship aggregators, content creators, and more — worldwide + India-focused.
 */

export type SourceCategory =
  | "job-portals"
  | "internship-aggregators"
  | "quant-finance"
  | "research-labs"
  | "professors"
  | "indian-firms"
  | "global-firms"
  | "linkedin-outreach"
  | "forums-communities"
  | "startup-ecosystems"
  | "content-creators"
  | "university-programs";

export type SourceRegion = "india" | "global" | "us" | "europe" | "asia";

export type OpportunitySource = {
  id: string;
  name: string;
  url: string;
  description: string;
  category: SourceCategory;
  regions: SourceRegion[];
  tags: string[];
  /** Direct search/filter URL for Aman's profile — quant/ML/SWE intern */
  searchUrl?: string;
  /** Is this a cold-outreach target (HR, professor, firm contact) */
  isOutreach?: boolean;
  /** Estimated quality score 1-5 */
  quality: 1 | 2 | 3 | 4 | 5;
  /** Whether to show a "Try Now" button */
  actionable: boolean;
  badge?: string;
};

export const DISCOVER_SOURCES: OpportunitySource[] = [
  // ── JOB PORTALS ──────────────────────────────────────────────────────────
  {
    id: "linkedin",
    name: "LinkedIn Jobs",
    url: "https://www.linkedin.com/jobs",
    searchUrl:
      "https://www.linkedin.com/jobs/search/?keywords=quant+intern+OR+data+science+intern+OR+ML+intern&location=India&f_E=1",
    description:
      "The world's largest professional network. Best for quant, ML, and SWE internships at startups and MNCs alike.",
    category: "job-portals",
    regions: ["global", "india"],
    tags: ["quant", "ML", "SWE", "finance", "data science"],
    quality: 5,
    actionable: true,
    badge: "Top Pick",
  },
  {
    id: "internshala",
    name: "Internshala",
    url: "https://internshala.com",
    searchUrl:
      "https://internshala.com/internships/data-science-machine-learning-internship",
    description:
      "India's #1 internship platform. Thousands of listings from Indian startups, research labs, and firms.",
    category: "internship-aggregators",
    regions: ["india"],
    tags: ["data science", "ML", "python", "research", "fintech"],
    quality: 5,
    actionable: true,
    badge: "India #1",
  },
  {
    id: "wellfound",
    name: "Wellfound (AngelList)",
    url: "https://wellfound.com",
    searchUrl:
      "https://wellfound.com/role/r/data-scientist?location=Remote&remote=true",
    description:
      "Best startup job board globally. Strong for fintech, AI/ML, and quant startups that post internships.",
    category: "startup-ecosystems",
    regions: ["global", "us"],
    tags: ["startup", "fintech", "AI", "quant", "remote"],
    quality: 4,
    actionable: true,
  },
  {
    id: "unstop",
    name: "Unstop (D2C)",
    url: "https://unstop.com",
    searchUrl:
      "https://unstop.com/internships?oppType=internship&domain=data-science",
    description:
      "India's platform for competitions, hackathons, and internships. Great for student researchers.",
    category: "internship-aggregators",
    regions: ["india"],
    tags: ["competitions", "research", "data science", "hackathon"],
    quality: 4,
    actionable: true,
  },
  {
    id: "naukri",
    name: "Naukri.com",
    url: "https://www.naukri.com",
    searchUrl:
      "https://www.naukri.com/internship-jobs-in-india?k=data+science+intern&l=india",
    description:
      "India's largest job portal. Good for finding MNC and mid-size firm internships.",
    category: "job-portals",
    regions: ["india"],
    tags: ["india", "MNC", "IT", "finance", "analytics"],
    quality: 3,
    actionable: true,
  },
  {
    id: "indeed",
    name: "Indeed",
    url: "https://in.indeed.com",
    searchUrl:
      "https://in.indeed.com/jobs?q=quantitative+research+intern&l=India",
    description:
      "Global job aggregator with strong India presence. Good breadth across all industries.",
    category: "job-portals",
    regions: ["global", "india"],
    tags: ["aggregator", "broad", "global"],
    quality: 3,
    actionable: true,
  },
  {
    id: "glassdoor",
    name: "Glassdoor",
    url: "https://www.glassdoor.co.in",
    searchUrl:
      "https://www.glassdoor.co.in/Job/india-data-science-intern-jobs-SRCH_IL.0,5_IN115_KO6,25.htm",
    description:
      "Job listings + salary intelligence. Use it to research compensation alongside applications.",
    category: "job-portals",
    regions: ["global", "india"],
    tags: ["salary", "reviews", "data science", "quant"],
    quality: 3,
    actionable: true,
  },

  // ── QUANT / FINANCE FIRMS ─────────────────────────────────────────────────
  {
    id: "jane-street",
    name: "Jane Street",
    url: "https://www.janestreet.com/join-jane-street/internships",
    searchUrl: "https://www.janestreet.com/join-jane-street/internships",
    description:
      "Top-tier quant trading firm. Offers summer internships in quant research, SWE, and trading.",
    category: "quant-finance",
    regions: ["us", "global"],
    tags: ["quant", "trading", "research", "elite", "OCaml", "math"],
    quality: 5,
    actionable: true,
    badge: "Elite Quant",
  },
  {
    id: "citadel",
    name: "Citadel & Citadel Securities",
    url: "https://www.citadel.com/careers/open-opportunities",
    searchUrl:
      "https://www.citadel.com/careers/open-opportunities/?teams%5B%5D=Quantitative+Research",
    description:
      "Leading global hedge fund and market maker. Highly competitive quant research and SWE internships.",
    category: "quant-finance",
    regions: ["us", "global"],
    tags: ["quant", "hedge fund", "HFT", "research", "internship"],
    quality: 5,
    actionable: true,
    badge: "Elite Quant",
  },
  {
    id: "de-shaw",
    name: "D.E. Shaw",
    url: "https://www.deshaw.com/careers/internships",
    searchUrl: "https://www.deshaw.com/careers/internships",
    description:
      "Top quant hedge fund with strong internship programs in quant research and systems.",
    category: "quant-finance",
    regions: ["us"],
    tags: ["quant", "hedge fund", "research", "systems", "elite"],
    quality: 5,
    actionable: true,
    badge: "Elite Quant",
  },
  {
    id: "two-sigma",
    name: "Two Sigma",
    url: "https://careers.twosigma.com",
    searchUrl:
      "https://careers.twosigma.com/careers/SearchJobs/?4159_4196_4200=35835",
    description:
      "Data-driven hedge fund with rich internship programs in quant research, ML, and engineering.",
    category: "quant-finance",
    regions: ["us"],
    tags: ["quant", "ML", "data science", "HFT", "research"],
    quality: 5,
    actionable: true,
  },
  {
    id: "worldquant",
    name: "WorldQuant",
    url: "https://www.worldquant.com/career-listing",
    searchUrl: "https://www.worldquant.com/career-listing",
    description:
      "Already a WorldQuant Research Consultant (Gold). Apply to full internship / research roles directly.",
    category: "quant-finance",
    regions: ["global"],
    tags: ["quant", "alpha", "research", "remote"],
    quality: 5,
    actionable: true,
    badge: "You're Verified",
  },
  {
    id: "imc-trading",
    name: "IMC Trading",
    url: "https://www.imc.com/eu/careers",
    searchUrl: "https://www.imc.com/eu/careers#internship",
    description:
      "Global market maker. IMC Prosperity alumnus — direct connection. Strong quant internships.",
    category: "quant-finance",
    regions: ["global"],
    tags: ["market making", "quant", "HFT", "trading", "intern"],
    quality: 5,
    actionable: true,
    badge: "IMC Alumnus",
  },
  {
    id: "optiver",
    name: "Optiver",
    url: "https://optiver.com/working-at-optiver/career-opportunities",
    searchUrl:
      "https://optiver.com/working-at-optiver/career-opportunities/?search=intern",
    description:
      "Leading HFT market maker. Internships in quant research, trading, and SWE. Strong India hiring.",
    category: "quant-finance",
    regions: ["global"],
    tags: ["HFT", "quant", "market making", "trading"],
    quality: 5,
    actionable: true,
  },
  {
    id: "tower-research",
    name: "Tower Research Capital",
    url: "https://www.tower-research.com/open-positions",
    searchUrl: "https://www.tower-research.com/open-positions",
    description:
      "HFT firm with Gurgaon India office. Known for hiring from ISI/IIT. Strong quant research culture.",
    category: "quant-finance",
    regions: ["india", "global"],
    tags: ["HFT", "quant", "ISI", "IIT", "Gurgaon"],
    quality: 5,
    actionable: true,
    badge: "India Office",
  },
  {
    id: "alphagrep",
    name: "AlphaGrep / AlphaGrep Securities",
    url: "https://www.alphagrep.com/careers",
    searchUrl: "https://www.alphagrep.com/careers",
    description:
      "Indian HFT firm. Actively hires from ISI/IIT for quant research. Strong India-first shop.",
    category: "quant-finance",
    regions: ["india"],
    tags: ["HFT", "quant", "ISI", "India", "research"],
    quality: 5,
    actionable: true,
    badge: "India HFT",
  },
  {
    id: "iitb-quant",
    name: "IIT Bombay Quantitative Finance Lab",
    url: "https://www.iitb.ac.in",
    description:
      "Research group at IIT Bombay. Professors actively mentor B.Stat/B.Math students in quant finance.",
    category: "research-labs",
    regions: ["india"],
    tags: ["IIT", "quant finance", "research", "professor"],
    quality: 4,
    actionable: false,
    isOutreach: true,
  },

  // ── RESEARCH LABS & UNIVERSITY PROGRAMS ───────────────────────────────────
  {
    id: "isi-research",
    name: "ISI Kolkata — Research Programs",
    url: "https://www.isical.ac.in",
    searchUrl: "https://www.isical.ac.in/node/1058",
    description:
      "Your home institution. Research assistantships with faculty in statistics, CS, and ML. Natural fit.",
    category: "university-programs",
    regions: ["india"],
    tags: ["ISI", "statistics", "ML", "research", "RA"],
    quality: 5,
    actionable: true,
    badge: "Your Institute",
  },
  {
    id: "iit-research",
    name: "IIT Research Internships (SURGE, SURA, SPARK)",
    url: "https://www.surge.iitk.ac.in",
    searchUrl: "https://www.surge.iitk.ac.in",
    description:
      "Formal summer research programs at IIT Kanpur (SURGE), IIT Delhi (SURA), IIT Bombay (SPARK). Highly competitive.",
    category: "university-programs",
    regions: ["india"],
    tags: ["IIT", "research", "summer", "ML", "statistics"],
    quality: 5,
    actionable: true,
    badge: "Competitive",
  },
  {
    id: "iisc-research",
    name: "IISc Bangalore — Summer Research",
    url: "https://www.iisc.ac.in",
    searchUrl: "https://eecs.iisc.ac.in",
    description:
      "India's top research institution. Professors in ML, statistics, and theoretical CS regularly take interns.",
    category: "research-labs",
    regions: ["india"],
    tags: ["IISc", "ML", "statistics", "research", "deep learning"],
    quality: 5,
    actionable: true,
  },
  {
    id: "google-summer-code",
    name: "Google Summer of Code (GSoC)",
    url: "https://summerofcode.withgoogle.com",
    searchUrl:
      "https://summerofcode.withgoogle.com/organizations?q=machine+learning",
    description:
      "Global open-source internship program. $1,500–$6,600 stipend. You've written about GSoC preparation on your blog.",
    category: "university-programs",
    regions: ["global"],
    tags: ["open-source", "python", "ML", "GSoC", "stipend"],
    quality: 4,
    actionable: true,
    badge: "Blog Author",
  },
  {
    id: "mitacs",
    name: "Mitacs Globalink (Canada)",
    url: "https://www.mitacs.ca/globalink",
    searchUrl: "https://www.mitacs.ca/our-programs/globalink-research-internship",
    description:
      "Fully-funded 12-week research internship at Canadian universities. Open to Indian undergrads. Statistics/CS strong.",
    category: "university-programs",
    regions: ["global"],
    tags: ["Canada", "research", "funded", "statistics", "ML"],
    quality: 5,
    actionable: true,
    badge: "Funded",
  },
  {
    id: "daad-rise",
    name: "DAAD RISE Germany",
    url: "https://www.daad.de/rise/en",
    searchUrl: "https://www.daad.de/rise/en",
    description:
      "Research internships at German universities and research labs. Funded. Strong AI/ML labs in Germany.",
    category: "university-programs",
    regions: ["europe"],
    tags: ["Germany", "research", "funded", "ML", "AI"],
    quality: 4,
    actionable: true,
    badge: "Funded",
  },
  {
    id: "cern-openlab",
    name: "CERN Openlab Summer Student",
    url: "https://openlab.cern/education/cern-openlab-summer-student-programme",
    searchUrl:
      "https://openlab.cern/education/cern-openlab-summer-student-programme",
    description:
      "Prestigious CERN tech internship. Python, ML, and data science projects. Competitive but impactful.",
    category: "research-labs",
    regions: ["europe"],
    tags: ["CERN", "ML", "Python", "physics", "data science"],
    quality: 4,
    actionable: true,
  },
  {
    id: "microsoft-research",
    name: "Microsoft Research India",
    url: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india",
    searchUrl:
      "https://careers.microsoft.com/global/en/search-results?keywords=research+intern&lc=India",
    description:
      "MSR Bangalore hires research interns in ML, AI, statistics, and systems from top Indian institutes.",
    category: "research-labs",
    regions: ["india"],
    tags: ["ML", "AI", "research", "Microsoft", "Bangalore"],
    quality: 5,
    actionable: true,
  },
  {
    id: "google-research-india",
    name: "Google Research India",
    url: "https://research.google/locations/india",
    searchUrl:
      "https://careers.google.com/jobs/results/?degree=BACHELORS&employment_type=INTERN&location=India",
    description:
      "Google's Bangalore research lab. STEP intern and Research intern roles. Strong ML/AI focus.",
    category: "research-labs",
    regions: ["india"],
    tags: ["Google", "ML", "AI", "research", "Bangalore"],
    quality: 5,
    actionable: true,
  },
  {
    id: "nvidia-research",
    name: "NVIDIA Research Internships",
    url: "https://www.nvidia.com/en-us/research",
    searchUrl:
      "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite?q=research+intern",
    description:
      "NVIDIA research interns in deep learning, computer vision, and GPU computing.",
    category: "research-labs",
    regions: ["global"],
    tags: ["deep learning", "GPU", "CV", "ML", "NVIDIA"],
    quality: 4,
    actionable: true,
  },

  // ── PROFESSORS / OUTREACH ─────────────────────────────────────────────────
  {
    id: "isi-professors",
    name: "ISI Kolkata — Faculty Outreach",
    url: "https://www.isical.ac.in/node/66",
    description:
      "Your own faculty. Email professors in Applied Statistics, ML, and Quantitative Finance units. Insider advantage.",
    category: "professors",
    regions: ["india"],
    tags: ["ISI", "statistics", "ML", "outreach", "RA"],
    quality: 5,
    actionable: true,
    isOutreach: true,
    badge: "Your Faculty",
  },
  {
    id: "iit-professors",
    name: "IIT Professors — Cold Email",
    url: "https://www.csail.mit.edu/research",
    description:
      "Target IIT Delhi/Bombay/Madras/Kharagpur professors in ML, quant finance, and statistics. Cold email is effective for summer RAs.",
    category: "professors",
    regions: ["india"],
    tags: ["IIT", "professor", "research", "cold email", "RA"],
    quality: 4,
    actionable: true,
    isOutreach: true,
  },
  {
    id: "global-professors",
    name: "Global Research Professors — Cold Email",
    url: "https://ml-map.github.io",
    description:
      "Email ML/statistics professors at top global institutions (MIT, CMU, Stanford, Oxford). Show your ISI pedigree + projects.",
    category: "professors",
    regions: ["global"],
    tags: ["professor", "cold email", "ML", "statistics", "research"],
    quality: 4,
    actionable: true,
    isOutreach: true,
  },

  // ── LINKEDIN HR OUTREACH ──────────────────────────────────────────────────
  {
    id: "linkedin-hr-quant",
    name: "LinkedIn — Quant HR Outreach",
    url: "https://www.linkedin.com/search/results/people/?keywords=quant+recruiter+OR+quant+HR&geoUrn=102713980",
    description:
      "Search LinkedIn for quant firm recruiters in India. Direct InMail to HR managers at Tower, AlphaGrep, WorldQuant.",
    category: "linkedin-outreach",
    regions: ["india", "global"],
    tags: ["LinkedIn", "HR", "quant", "recruiter", "cold outreach"],
    quality: 4,
    actionable: true,
    isOutreach: true,
    badge: "Cold Outreach",
  },
  {
    id: "linkedin-hr-fintech",
    name: "LinkedIn — Fintech Startup HR",
    url: "https://www.linkedin.com/search/results/people/?keywords=fintech+recruiter+intern+india",
    description:
      "Find HR managers and talent leads at Indian fintech startups (Zerodha, Groww, INDmoney, Smallcase, etc.).",
    category: "linkedin-outreach",
    regions: ["india"],
    tags: ["LinkedIn", "HR", "fintech", "startup", "India"],
    quality: 4,
    actionable: true,
    isOutreach: true,
  },
  {
    id: "linkedin-alumni",
    name: "LinkedIn — ISI Alumni Network",
    url: "https://www.linkedin.com/school/indian-statistical-institute/people",
    description:
      "ISI alumni in quant, ML, and finance globally. Warm outreach — same alma mater is a strong opener.",
    category: "linkedin-outreach",
    regions: ["global", "india"],
    tags: ["LinkedIn", "alumni", "ISI", "warm outreach", "network"],
    quality: 5,
    actionable: true,
    isOutreach: true,
    badge: "Warm Network",
  },

  // ── INDIAN FIRMS / STARTUPS ────────────────────────────────────────────────
  {
    id: "zerodha-tech",
    name: "Zerodha / Rainmatter",
    url: "https://zerodha.com/careers",
    searchUrl: "https://zerodha.com/careers",
    description:
      "India's largest retail broker. Tech-first culture. Strong for fintech engineering and data internships.",
    category: "indian-firms",
    regions: ["india"],
    tags: ["fintech", "broker", "Python", "trading", "data"],
    quality: 4,
    actionable: true,
    badge: "India Fintech",
  },
  {
    id: "groww",
    name: "Groww",
    url: "https://groww.in/company/careers",
    searchUrl: "https://groww.in/company/careers",
    description:
      "India's fastest-growing investment platform. SWE and data science internships. Backed by Sequoia.",
    category: "indian-firms",
    regions: ["india"],
    tags: ["fintech", "investment", "data science", "SWE"],
    quality: 4,
    actionable: true,
  },
  {
    id: "smallcase",
    name: "Smallcase Technologies",
    url: "https://smallcase.com/careers",
    searchUrl: "https://smallcase.com/careers",
    description:
      "Portfolio management fintech. Strong quant and data roles. ISI/IIT pedigree valued.",
    category: "indian-firms",
    regions: ["india"],
    tags: ["fintech", "quant", "portfolio", "data science"],
    quality: 4,
    actionable: true,
  },
  {
    id: "kuvera",
    name: "Kuvera / 63 Moons",
    url: "https://kuvera.in",
    description:
      "Wealth management fintech. Data and quant research opportunities.",
    category: "indian-firms",
    regions: ["india"],
    tags: ["fintech", "wealth management", "quant", "data"],
    quality: 3,
    actionable: true,
  },
  {
    id: "quadeye",
    name: "Quadeye Securities",
    url: "https://www.quadeye.com/careers",
    searchUrl: "https://www.quadeye.com/careers",
    description:
      "Indian HFT / quant trading firm. Actively recruits from ISI and IIT campuses.",
    category: "quant-finance",
    regions: ["india"],
    tags: ["HFT", "quant", "trading", "ISI", "India"],
    quality: 5,
    actionable: true,
    badge: "India HFT",
  },
  {
    id: "graviton",
    name: "Graviton Research Capital",
    url: "https://gravitonrc.com/careers",
    searchUrl: "https://gravitonrc.com/careers",
    description:
      "HFT firm based in India. Top quant research culture. Hires from ISI/IIT.",
    category: "quant-finance",
    regions: ["india"],
    tags: ["HFT", "quant", "research", "ISI", "India"],
    quality: 5,
    actionable: true,
    badge: "India HFT",
  },
  {
    id: "india-ai",
    name: "IndiaAI Mission",
    url: "https://indiaai.gov.in",
    description:
      "Government-backed AI initiative. Research fellowships and internship programs in AI/ML.",
    category: "indian-firms",
    regions: ["india"],
    tags: ["AI", "government", "research", "fellowship"],
    quality: 3,
    actionable: true,
  },

  // ── GLOBAL FIRMS ───────────────────────────────────────────────────────────
  {
    id: "bloomberg",
    name: "Bloomberg LP",
    url: "https://careers.bloomberg.com",
    searchUrl:
      "https://careers.bloomberg.com/job/search?el=Internship&q=data+OR+quant",
    description:
      "Financial data giant. SWE, quant, and data science internships globally. Strong brand.",
    category: "global-firms",
    regions: ["global"],
    tags: ["fintech", "data", "SWE", "quant", "Bloomberg"],
    quality: 4,
    actionable: true,
  },
  {
    id: "stripe",
    name: "Stripe",
    url: "https://stripe.com/jobs",
    searchUrl: "https://stripe.com/jobs/search?q=intern",
    description:
      "Global payments infrastructure. Strong SWE internships. Python-heavy backend work.",
    category: "global-firms",
    regions: ["global"],
    tags: ["payments", "fintech", "Python", "SWE", "backend"],
    quality: 4,
    actionable: true,
  },
  {
    id: "jpmorgan",
    name: "J.P. Morgan Internships",
    url: "https://careers.jpmorgan.com/global/en/students",
    searchUrl:
      "https://careers.jpmorgan.com/global/en/students/programs?search=Quantitative",
    description:
      "Investment bank with large quant and data science internship tracks (Quantitative Analytics).",
    category: "global-firms",
    regions: ["global"],
    tags: ["quant", "finance", "bank", "investment", "data science"],
    quality: 4,
    actionable: true,
  },
  {
    id: "goldman",
    name: "Goldman Sachs",
    url: "https://goldmansachs.com/careers/students",
    searchUrl:
      "https://goldmansachs.com/careers/students/programs/americas/summer-analyst.html",
    description:
      "Prestigious investment bank. Quantitative Research and Engineering summer analyst programs.",
    category: "global-firms",
    regions: ["global"],
    tags: ["quant", "finance", "bank", "trading", "research"],
    quality: 4,
    actionable: true,
  },
  {
    id: "morgan-stanley",
    name: "Morgan Stanley Tech",
    url: "https://morganstanley.com/people-opportunities/students-graduates",
    searchUrl:
      "https://morganstanley.com/people-opportunities/students-graduates/programs",
    description:
      "Strong technology and quant internship programs. Actively recruits from Indian institutes.",
    category: "global-firms",
    regions: ["global", "india"],
    tags: ["quant", "finance", "SWE", "tech", "bank"],
    quality: 4,
    actionable: true,
  },

  // ── FORUMS & COMMUNITIES ──────────────────────────────────────────────────
  {
    id: "quant-stackexchange",
    name: "Quant.StackExchange — Hiring Board",
    url: "https://quant.stackexchange.com/jobs",
    description:
      "Community for quantitative finance. Job board skews toward quant research and derivatives roles.",
    category: "forums-communities",
    regions: ["global"],
    tags: ["quant", "derivatives", "research", "community"],
    quality: 3,
    actionable: true,
  },
  {
    id: "hn-who-is-hiring",
    name: "Hacker News — Who is Hiring?",
    url: "https://news.ycombinator.com/ask",
    searchUrl: "https://hn.algolia.com/?q=who+is+hiring+intern&type=story",
    description:
      "Monthly thread on HN with 500+ remote-friendly roles from startups and tech companies.",
    category: "forums-communities",
    regions: ["global"],
    tags: ["remote", "startup", "ML", "Python", "intern"],
    quality: 4,
    actionable: true,
  },
  {
    id: "reddit-cscareer",
    name: "r/cscareerquestions & r/quant",
    url: "https://reddit.com/r/quant",
    description:
      "Reddit communities for quant and CS internship leads, referrals, and application tips.",
    category: "forums-communities",
    regions: ["global"],
    tags: ["quant", "CS", "internship", "referrals", "community"],
    quality: 3,
    actionable: true,
  },
  {
    id: "discord-quant",
    name: "Quantitative Finance Discord",
    url: "https://discord.gg/quantfinance",
    description:
      "Active Discord server with job postings, alpha research discussions, and networking.",
    category: "forums-communities",
    regions: ["global"],
    tags: ["quant", "discord", "networking", "trading", "research"],
    quality: 3,
    actionable: true,
  },
  {
    id: "kaggle-jobs",
    name: "Kaggle — Data Science Jobs",
    url: "https://www.kaggle.com/jobs",
    description:
      "Kaggle's job board. Strong signal for data science and ML roles at companies that value competition performance.",
    category: "forums-communities",
    regions: ["global"],
    tags: ["data science", "ML", "Kaggle", "competition"],
    quality: 3,
    actionable: true,
  },
  {
    id: "elsevierconnect",
    name: "ResearchGate Jobs",
    url: "https://www.researchgate.net/jobs",
    description:
      "Academic and research position board. Good for research internship postings from labs.",
    category: "forums-communities",
    regions: ["global"],
    tags: ["research", "academic", "lab", "internship"],
    quality: 3,
    actionable: true,
  },

  // ── STARTUP ECOSYSTEMS ────────────────────────────────────────────────────
  {
    id: "ycombinator",
    name: "Y Combinator Jobs",
    url: "https://www.ycombinator.com/jobs",
    searchUrl:
      "https://www.ycombinator.com/jobs?q=intern+data+science+OR+ML+OR+quant",
    description:
      "Jobs at YC-backed startups worldwide. Many hire remote interns for ML and data science.",
    category: "startup-ecosystems",
    regions: ["global"],
    tags: ["startup", "YC", "remote", "ML", "data science"],
    quality: 4,
    actionable: true,
  },
  {
    id: "istart-rajasthan",
    name: "iStart Rajasthan & Startup India",
    url: "https://startupindia.gov.in",
    searchUrl: "https://startupindia.gov.in/content/sih/en/internship.html",
    description:
      "Government startup portals with internship programs. Also try NASSCOM's Futureskills.",
    category: "startup-ecosystems",
    regions: ["india"],
    tags: ["startup", "government", "India", "internship"],
    quality: 2,
    actionable: true,
  },
  {
    id: "nasscom",
    name: "NASSCOM FutureSkills Prime",
    url: "https://futureskillsprime.in",
    description:
      "India's IT industry body. Internship and mentorship programs in AI/ML through member companies.",
    category: "startup-ecosystems",
    regions: ["india"],
    tags: ["AI", "ML", "India", "IT industry", "mentorship"],
    quality: 2,
    actionable: true,
  },

  // ── CONTENT CREATORS / NON-TRADITIONAL ────────────────────────────────────
  {
    id: "substack-quant",
    name: "Substack — Quant Finance Writers",
    url: "https://substack.com/browse/finance",
    description:
      "Many quant practitioners publish newsletters and run research businesses. Some hire research assistants.",
    category: "content-creators",
    regions: ["global"],
    tags: ["quant", "newsletter", "research", "RA", "writing"],
    quality: 2,
    actionable: true,
    isOutreach: true,
  },
  {
    id: "youtube-quant",
    name: "Quant Finance YouTube Channels",
    url: "https://youtube.com",
    description:
      "Channels like QuantPy, Coding Jesus, Algorithmic Trading often collaborate with data scientists and researchers.",
    category: "content-creators",
    regions: ["global"],
    tags: ["quant", "YouTube", "algorithmic trading", "collaboration"],
    quality: 2,
    actionable: false,
    isOutreach: true,
  },

  // ── ADDITIONAL SPECIALIZED ────────────────────────────────────────────────
  {
    id: "cfainstitute",
    name: "CFA Institute Career Center",
    url: "https://jobs.cfainstitute.org",
    description:
      "Investment management jobs and internships. Skews toward buy-side research and portfolio analytics.",
    category: "quant-finance",
    regions: ["global"],
    tags: ["CFA", "finance", "investment", "research", "portfolio"],
    quality: 3,
    actionable: true,
  },
  {
    id: "aiml-collective",
    name: "ML Collective & EleutherAI",
    url: "https://mlcollective.org",
    description:
      "Open ML research collectives. Research credit, mentorship, and sometimes paid internships.",
    category: "research-labs",
    regions: ["global"],
    tags: ["ML", "open source", "research", "AI", "mentorship"],
    quality: 3,
    actionable: true,
  },
  {
    id: "huggingface-jobs",
    name: "Hugging Face Jobs",
    url: "https://apply.workable.com/huggingface",
    searchUrl: "https://apply.workable.com/huggingface/?lng=en#jobs",
    description:
      "Open-source AI company. Research and engineering internships. Strong open-source alignment.",
    category: "research-labs",
    regions: ["global"],
    tags: ["AI", "ML", "open source", "NLP", "research"],
    quality: 4,
    actionable: true,
  },
];

/** All unique categories present in sources */
export const ALL_CATEGORIES: { id: SourceCategory; label: string; emoji: string }[] = [
  { id: "quant-finance", label: "Quant & Finance", emoji: "📈" },
  { id: "internship-aggregators", label: "Internship Portals", emoji: "🎯" },
  { id: "research-labs", label: "Research Labs", emoji: "🔬" },
  { id: "university-programs", label: "University Programs", emoji: "🎓" },
  { id: "professors", label: "Professor Outreach", emoji: "👨‍🏫" },
  { id: "indian-firms", label: "Indian Firms", emoji: "🇮🇳" },
  { id: "global-firms", label: "Global Firms", emoji: "🌐" },
  { id: "linkedin-outreach", label: "LinkedIn Outreach", emoji: "🤝" },
  { id: "forums-communities", label: "Forums & Communities", emoji: "💬" },
  { id: "startup-ecosystems", label: "Startup Ecosystems", emoji: "🚀" },
  { id: "content-creators", label: "Content Creators", emoji: "🎥" },
  { id: "job-portals", label: "General Job Portals", emoji: "🗂️" },
];

export const ALL_REGIONS: { id: SourceRegion; label: string }[] = [
  { id: "india", label: "India" },
  { id: "global", label: "Global / Remote" },
  { id: "us", label: "United States" },
  { id: "europe", label: "Europe" },
  { id: "asia", label: "Asia" },
];
