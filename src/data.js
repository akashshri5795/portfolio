export const profile = {
  name: "Akash Srivastava",
  role: "Full Stack Developer",
  tagline: "Live order tracking, real-time chat, dashboards that update themselves — that's the world I build in, mostly with Laravel, PHP, and MySQL.",
  location: "Ghaziabad, India",
  email: "shrivastava5795@gmail.com",
  phone: "+91-9161492606",
  links: {
    github: "https://github.com/akashshri5795",
    linkedin: "https://www.linkedin.com/in/akash-shrivastava-dev/",
    hackerrank: "https://www.hackerrank.com/profile/shrivastava5795",
    leetcode: "https://leetcode.com/u/ShriAkash/",
    website: "https://oonoo.in/",
  },
};

// The "live systems" hero signature — real, currently-operating things Akash built.
export const liveSystems = [
  { name: "rbcconnect.cloud", note: "real-time collaboration", status: "online" },
  { name: "Sales Order Tracking", note: "WebSockets + Pusher", status: "online" },
  { name: "Warehouse Management", note: "inventory sync", status: "online" },
  { name: "Sales CRM", note: "live notifications", status: "online" },
];

export const stats = [
  { value: "90%", label: "less manual paperwork", note: "via workflow automation" },
  { value: "40%", label: "scalability gain", note: "Docker + Kubernetes on AWS" },
  { value: "30%", label: "faster delivery", note: "leading a dev team" },
  { value: "5+", label: "years shipping production code", note: "Laravel, PHP, MySQL" },
];

export const skillGroups = [
  {
    label: "Backend — Production",
    kind: "primary",
    items: ["Laravel", "PHP", "REST APIs", "WebSockets", "Pusher", "Web Push", "MVC Architecture", "Node.js"],
  },
  {
    label: "Java & Spring Boot",
    kind: "learning",
    items: ["Java 8/11/17", "Spring Boot", "Spring MVC", "Spring Security", "REST APIs"],
  },
  {
    label: "Frontend",
    kind: "primary",
    items: ["React.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Data",
    kind: "primary",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "DevOps & Cloud",
    kind: "primary",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx"],
  },
  {
    label: "Tools",
    kind: "primary",
    items: ["Git", "GitHub", "Postman", "Grafana", "Redis", "Figma", "Electron"],
  },
];

export const experience = [
  {
    role: "Full Stack Laravel Developer — Tech Lead",
    org: "Rohan Book Company Pvt. Ltd.",
    place: "Ghaziabad",
    period: "Jan 2023 — Present",
    points: [
      "Architected Laravel backend services on MySQL for multiple live production systems, following MVC and REST API best practices.",
      "Shipped real-time features with WebSockets and Pusher — live order status, in-app notifications, and Web Push alerts.",
      "Automated manual workflows across order tracking and reporting, cutting paperwork by 90%.",
      "Migrated infrastructure to Docker + Kubernetes on AWS, improving scalability by 40%.",
      "Led a cross-functional dev team, lifting delivery efficiency by 30% through structured reviews.",
    ],
  },
  {
    role: "Web Software Developer — Laravel",
    org: "PM Publishers Pvt. Ltd.",
    place: "Noida",
    period: "Mar 2020 — Nov 2022",
    points: [
      "Built an online teachers' portal on Laravel and PHP with MySQL.",
      "Developed the Quiz Quest platform — Laravel REST APIs, MySQL, React.js frontend.",
      "Optimized MySQL schemas and queries for high-traffic modules.",
      "Managed hosting, cloud deployment, and CI/CD pipelines.",
    ],
  },
  {
    role: "Software Support Executive",
    org: "US Technosoft Pvt. Ltd.",
    place: "Delhi",
    period: "Jun 2019 — Feb 2020",
    points: [
      "Supported Edger1 ERP (Java-based) for enterprise clients, resolving production issues.",
      "Tuned SQL queries and AWS performance for reliability.",
    ],
  },
  {
    role: "Computer Lab Assistant",
    org: "GLBITM",
    place: "Greater Noida",
    period: "Mar 2018 — May 2019",
    points: ["Supported B.Tech students with Java, C/C++, and SQL labs; ran supplementary coding classes."],
  },
  {
    role: "Computer Science Teacher",
    org: "RD Public School",
    place: "Noida",
    period: "Aug 2016 — Mar 2018",
    points: ["Taught Java, SQL, and web design; managed school IT infrastructure."],
  },
];

export const flagshipProject = {
  name: "RBC Connect",
  url: "rbcconnect.cloud",
  tag: "Solo build",
  status: "Live",
  description:
    "A real-time team collaboration platform — Taskana/Asana-style task boards, live chat, notifications, and file sharing. Designed, built, and deployed end to end, alone: architecture, database, backend APIs, and production infra.",
  stack: ["Laravel", "PHP", "MySQL", "WebSockets", "Pusher"],
};

export const projects = [
  {
    name: "Sales Order Tracking System",
    stack: ["Laravel", "PHP", "WebSockets", "Pusher", "Vue.js", "MySQL"],
    description: "Real-time order status tracking end to end — cut manual paperwork by 90%.",
    status: "Live",
  },
  {
    name: "Warehouse Management System",
    stack: ["Laravel", "PHP", "React.js", "MySQL"],
    description: "Inventory APIs and an admin dashboard for stock visibility across locations.",
    status: "Live",
  },
  {
    name: "Sales CRM",
    stack: ["Laravel", "PHP", "React.js", "Pusher"],
    description: "Lead and pipeline tracking with live in-app notifications.",
    status: "Live",
  },
  {
    name: "Quiz Quest",
    stack: ["Laravel", "PHP", "React.js", "MySQL"],
    description: "Interactive quiz platform with a Laravel REST API backend.",
    status: "Live",
  },
  {
    name: "Daily Reporting System",
    stack: ["Laravel", "PHP", "Vue.js", "Web Push"],
    description: "Automated operational reporting with push notifications, replacing manual reports.",
    status: "Live",
  },
  {
    name: "RBC Ledger App",
    stack: ["Laravel", "PHP", "Flutter", "MySQL"],
    description: "Mobile ledger app for financial entry tracking.",
    status: "Live",
  },
  {
    name: "Resource-Sharing Platform",
    stack: ["Laravel", "PHP", "React.js", "MySQL"],
    description: "Internal platform for sharing organizational resources across teams.",
    status: "Live",
  },
  {
    name: "Lung Cancer Prediction",
    stack: ["Python", "CNNs", "Django", "SQLite"],
    description: "CNN-based model assisting prediction from imaging data, served via Django.",
    status: "Research",
  },
  {
    name: "Background Remover",
    stack: ["JavaScript", "Chrome Extensions API"],
    description: "Chrome extension for one-click image background removal.",
    status: "Live",
  },
  {
    name: "Offline Desktop Suite",
    stack: ["Electron", "JavaScript"],
    description: "Multiple offline-first desktop applications built for use without internet access.",
    status: "Shipped",
  },
];

export const javaProjects = {
  heading: "Java & Spring Boot — self-directed",
  note:
    "Built to develop strong, hands-on Java and Spring Boot skills outside of paid work. Hosted on GitHub — not yet in a live role. Happy to walk through the architecture and code in an interview.",
};

export const education = [
  { degree: "MCA — Master of Computer Applications", org: "IGNOU", period: "2022 — 2024", note: "73%" },
  { degree: "BCA — Bachelor of Computer Applications", org: "DRMLAU", period: "2013 — 2016", note: "72%" },
  { degree: "GATE 2025 Qualified", org: "Data Science & Artificial Intelligence", period: "2025", note: null },
];
