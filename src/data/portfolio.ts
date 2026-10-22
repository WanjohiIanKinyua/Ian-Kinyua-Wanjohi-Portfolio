// All portfolio content lives here. Edit this file to update the site.
import type {
  CertificationGroup,
  Education,
  Feature,
  Job,
  Post,
  Profile,
  Project,
  ProjectCategory,
  SkillGroup,
  Stat,
} from "../types";

const email = "ianwanjohi20@gmail.com";

export const profile: Profile = {
  name: "Ian Kinyua Wanjohi",
  shortName: "Ian Kinyua",
  role: "Software Engineer & IT Specialist",
  lead:
    "I build full-stack web platforms, business systems and data-driven tools that solve real problems — from factory queue management and e-commerce to telemedicine and SAP Business One solutions.",
  location: "Based in Kenya",
  email,
  emailHref: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
  phone: "+254 725 751 322",
  phoneHref: "tel:+254725751322",
  github: "https://github.com/WanjohiIanKinyua",
  githubHandle: "WanjohiIanKinyua",
  linkedin: "https://www.linkedin.com/in/ian-kinyua-7b421721b/",
  resume: "./Ian Kinyua Wanjohi Resume.pdf",
  resumeDownloadName: "Ian-Kinyua-Resume.pdf",
  portrait: "./assets/img/wan.png",
  logo: "./assets/img/iankin.png",
};

export const stats: Stat[] = [
  { value: "6", label: "Professional roles" },
  { value: "10+", label: "Projects built" },
  { value: "9", label: "Certifications" },
  { value: "Diploma", label: "Information Technology, JKUAT" },
  { value: "BSc", label: "Information Technology, JKUAT" },
];

export const about: string[] = [
  "I'm an enthusiastic, results-oriented IT professional with a deep interest in emerging technologies and innovation. I hold a Bachelor's degree in Information Technology from Jomo Kenyatta University of Agriculture and Technology, built on an earlier diploma and certifications in areas such as data science, networking and cybersecurity.",
  "My work spans full-stack web development, SAP Business One consulting, UI/UX research, SEO and analytics. I enjoy applying technical and analytical skills to real-world challenges, and I keep learning so I can contribute to impactful, tech-driven work.",
];

export const languages = ["English", "Swahili"];

export const strengths = ["Problem solving", "Leadership", "Works independently", "Communication", "Integrity", "Creativity"];

export const features: Feature[] = [
  { icon: "fa-laptop", title: "Full-stack web", text: "Responsive front ends in React and Vue, backed by Node.js, PHP, Django and Flask APIs." },
  { icon: "fa-cubes", title: "Business systems", text: "SAP Business One implementation, Crystal Reports, SQL and Microsoft Dynamics NAV support." },
  { icon: "fa-line-chart", title: "Data & ML", text: "Analysis, visualisation and prediction with Python, Pandas, PySpark and machine learning." },
  { icon: "fa-bullhorn", title: "Digital growth", text: "SEO, landing pages and analytics tracking with GA4, GTM, Meta Pixel and Google Ads." },
];

export const experience: Job[] = [
  {
    title: "SAP Consultant / Software Developer",
    company: "Gold Vein Solutions",
    period: "Feb 2026 – Present",
    mode: "On-site",
    points: [
      "Implemented, customised and troubleshot SAP Business One for clients.",
      "Wrote SQL queries and built Crystal Reports for business reporting.",
      "Developed and integrated business applications with SAP to automate workflows and improve efficiency.",
      "Handled database management, system integration and technical support.",
    ],
    assignments: [
      {
        title: "Queue Management System",
        client: "Golden Africa Djibouti SARL",
        location: "Djibouti",
        period: "Aug 2026 – Nov 2026",
        points: [
          "Developed and implemented Q-Sync, a queue management system for the factory's truck loading operations.",
          "Digitised the full flow from customer bookings and manager approvals to SAP numbers, QR gate tickets and a live loading queue.",
          "Built role-based consoles for customers, factory managers, gate security, fleet registrars and administrators.",
          "Delivered a REST API and an SAP integration API, and supported the system's rollout on-site.",
        ],
      },
    ],
  },
  {
    title: "SEO & Digital Systems Associate",
    company: "Avané Dermatology Clinic",
    period: "Nov 2025 – Jan 2026",
    mode: "Hybrid",
    points: [
      "Developed, maintained and optimised website pages for performance and speed.",
      "Implemented on-page and off-page SEO, including e-commerce optimisation.",
      "Built high-converting landing pages and managed digital marketing campaigns.",
      "Set up analytics tracking with GA4, Google Tag Manager, Meta Pixel and Google Ads tags.",
    ],
  },
  {
    title: "Research & UI/UX Developer",
    company: "One World Leadership Institute Africa (OWLI Africa)",
    period: "Oct 2025 – Nov 2025",
    points: [
      "Conducted user research and contributed to the UI/UX design and development of a Learning Management System supporting vulnerable families.",
      "Collaborated with students from the University of Maryland.",
      "Focused on accessibility and intuitive learning experiences to improve digital inclusion and engagement.",
    ],
  },
  {
    title: "Web Developer",
    company: "Bright Innovations Limited",
    period: "May 2024 – Aug 2024",
    points: [
      "Gained hands-on experience in system development, user interface design and backend implementation.",
      "Supported clients with system usage, troubleshooting and roll-out of Microsoft Dynamics NAV solutions.",
    ],
  },
  {
    title: "Mobile Developer",
    company: "JKUAT · Internal attachment",
    period: "May 2023 – Aug 2023",
    points: ["Built Android applications and integrated them with backend systems."],
  },
  {
    title: "Assistant IT Consultant",
    company: "Ministry of Petroleum and Mining",
    period: "Sep 2022 – Dec 2022",
    points: ["Supported hardware maintenance, web development and networking."],
  },
];

export const skills: SkillGroup[] = [
  { icon: "fa-paint-brush", title: "Front-end", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { icon: "fa-server", title: "Back-end", items: ["Node.js", "Express", "PHP", "Laravel", "Python", "Django", "Flask", "Java"] },
  { icon: "fa-exchange", title: "APIs & integration", items: ["REST APIs", "FastAPI", "Python requests", "Fetch", "Axios", "JWT auth"] },
  { icon: "fa-database", title: "Databases", items: ["MySQL", "PostgreSQL", "Neon", "SQLite", "SQL", "Drizzle ORM"] },
  { icon: "fa-bar-chart", title: "Data & machine learning", items: ["Pandas", "Matplotlib", "Seaborn", "PySpark", "MLlib", "Random Forest"] },
  { icon: "fa-cubes", title: "Business systems", items: ["SAP Business One", "Crystal Reports", "Microsoft Dynamics NAV"] },
  { icon: "fa-bullhorn", title: "Marketing & analytics", items: ["SEO", "GA4", "Google Tag Manager", "Meta Pixel", "Google Ads", "Brevo", "Klaviyo"] },
  { icon: "fa-sitemap", title: "IT, cloud & hosting", items: ["Troubleshooting", "Software setup", "Network setup", "IT user support", "Linux", "Vercel", "Hostinger"] },
];

export const projectFilters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web platforms" },
  { value: "data", label: "Data & AI" },
  { value: "mobile", label: "Mobile" },
];

export const projects: Project[] = [
  {
    title: "Q-Sync Queue Management System",
    label: "Factory logistics",
    category: "web",
    accent: "indigo",
    featured: true,
    description:
      "Developed and implemented on-site in Djibouti for Golden Africa Djibouti SARL through Gold Vein Solutions. Runs the factory's loading flow end to end: customer bookings, manager approvals, SAP numbers, QR gate tickets and a live loading queue through to delivery. Six role-based consoles share one login, backed by a REST API and an SAP integration API.",
    stack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "PostgreSQL (Neon)", "Drizzle ORM"],
    live: "https://qms-web-app.vercel.app/",
  },
  {
    title: "Elite Online Hospital",
    label: "Telemedicine",
    category: "web",
    accent: "violet",
    description:
      "An online healthcare consultation platform connecting patients with doctors for remote appointments, scheduling, secure messaging and real-time video consultations.",
    stack: ["React", "Node.js", "Express", "PostgreSQL (Neon)", "JWT auth", "WebRTC"],
    live: "https://eliteonlinehospital.com/",
  },
  {
    title: "Kenbel Finds",
    label: "E-commerce",
    category: "web",
    accent: "rose",
    featured: true,
    description:
      "A premium online store for clothing, shoes, perfumes, jewellery and lifestyle goods, priced in Kenyan shillings. Shoppers search and filter by category, keep a wishlist and cart, and create an account to check out, while an admin dashboard manages the catalogue.",
    stack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "PostgreSQL (Neon)"],
    live: "https://kenbel-finds.vercel.app/",
  },
  {
    title: "ShuleTrack",
    label: "Education",
    category: "web",
    accent: "teal",
    description:
      "A classroom management platform for Kenyan high school teachers that brings attendance, marks, timetables and student performance tracking into one simple workflow.",
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Vite"],
    live: "https://shule-track.vercel.app/",
  },
  {
    title: "Bloodbank Management System",
    label: "Healthcare",
    category: "web",
    accent: "orange",
    description:
      "A platform connecting blood donors and recipients with location-based matching, live availability and urgent request notifications, paired with a machine-learning model that guides restocking.",
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    source: "https://github.com/WanjohiIanKinyua/Blood-bank-system",
  },
  {
    title: "Project Management System",
    label: "Productivity",
    category: "web",
    accent: "green",
    description:
      "A central place to plan tasks, track progress and manage delivery deadlines, with collaborative workflows for teams.",
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap"],
  },
  {
    title: "Blood Stock Optimization System",
    label: "Machine learning",
    category: "data",
    accent: "amber",
    description:
      "A machine-learning system that uses the Random Forest algorithm to predict high-demand blood types and optimise blood bank inventory through data-driven insights.",
    stack: ["Python", "Random Forest", "Machine learning", "Data analytics"],
  },
  {
    title: "Green Guard",
    label: "AI · Agriculture",
    category: "data",
    accent: "lime",
    description:
      "An AI-powered web application that detects plant diseases from leaf images and recommends remedies, using deep learning and image processing.",
    stack: ["Next.js", "TypeScript", "Deep learning", "Image processing"],
    source: "https://github.com/WanjohiIanKinyua/green-guard-main",
  },
  {
    title: "COVID-19 Spread & Capacity Prediction",
    label: "Big data",
    category: "data",
    accent: "sky",
    description:
      "A scalable big-data pipeline that ingests COVID-19 hospital data into Hadoop, preprocesses it with PySpark and trains MLlib models to predict spread and hospital capacity needs.",
    stack: ["PySpark", "MLlib", "Hadoop HDFS", "Python"],
    source: "https://github.com/WanjohiIanKinyua/PySpark-COVID-19-Hospital-Capacity-Prediction",
  },
  {
    title: "Expensely",
    label: "Mobile finance",
    category: "mobile",
    accent: "blue",
    description:
      "An Android app that simplifies expense management with receipt scanning, bank sync and clear budgeting tools for smarter financial decisions.",
    stack: ["Java", "XML", "PHP", "Ajax"],
  },
];

export const education: Education[] = [
  { degree: "BSc Information Technology", school: "Jomo Kenyatta University of Agriculture and Technology", period: "Sep 2022 – May 2025" },
  { degree: "Diploma in Information Technology", school: "Jomo Kenyatta University of Agriculture and Technology", period: "Sep 2020 – Apr 2022" },
];

export const certifications: CertificationGroup[] = [
  {
    issuer: "IBM",
    items: [
      "Certificate in Data Science",
      "Improving Healthcare: The Role of Artificial Intelligence",
      "Improving Healthcare: The Role of Cloud Computing",
      "Improving Healthcare: The Role of Data Analytics",
    ],
  },
  {
    issuer: "Cisco",
    items: ["Junior Cybersecurity Analyst", "Computer Security", "Network Defense", "NDG Linux", "Packet Tracer"],
  },
];
export const posts: Post[] = [
  {
    title: "Graphic Design",
    date: "May 8, 2024",
    excerpt: "Graphic design blends creativity and communication to turn ideas into visual impact.",
    image: "./assets/img/kin.png",
    imageAlt: "Graphic design artwork",
  },
  {
    title: "Programming",
    date: "January 22, 2024",
    excerpt: "Coding is where logic meets creativity to solve real problems and build digital products.",
    image: "./assets/img/img_blog_2.png",
    imageAlt: "Code on a screen",
  },
  {
    title: "The Software Engineer's Laptop",
    date: "March 2, 2024",
    excerpt: "A good developer laptop balances speed, battery life and thermals so coding and testing stay smooth all day.",
    image: "./assets/img/img_blog_3.png",
    imageAlt: "A software engineer's laptop",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
