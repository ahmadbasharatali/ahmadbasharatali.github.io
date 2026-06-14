export const siteConfig = {
  name: "Ahmad Basharat Ali",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences that merge elegant design with powerful engineering.",
  description:
    "Full Stack Developer specializing in React.js, Node.js, Golang, PostgreSQL, Docker, Linux Administration, API Development, and AI-powered applications.",
  url: "https://ahmadbasharatali.github.io",
  email: "ahmadbasharatali786@gmail.com",
  location: "Pakistan",
  social: {
    github: "https://github.com/ahmadbasharatali",
    linkedin: "https://www.linkedin.com/in/ahmadbasharatali/",
    upwork: "https://www.upwork.com/freelancers/~011afa7c2958eeb30d?mp_source=share",
  },
};

export const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutStats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "20+" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Golang", level: 85 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Linux Admin", level: 85 },
      { name: "AWS / GCP", level: 80 },
    ],
  },
  {
    category: "AI & Tools",
    items: [
      { name: "OpenAI API", level: 82 },
      { name: "LangChain", level: 75 },
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "YTGPT",
    description:
      "An intelligent YouTube AI assistant that helps users explore videos, analyze channels, discover trending topics, and download video/audio content instantly. Led full-stack development with a modern React.js + Tailwind CSS frontend and scalable Golang backend. Integrated Model Context Protocol (MCP) for secure, efficient, context-aware analysis of YouTube content.",
    tech: ["React.js", "Golang", "Tailwind CSS", "MCP", "AI", "JavaScript"],
    liveUrl: "",
    githubUrl: "#",
    featured: true,
    hasVideo: true,
    hasVideo2: true,
  },
  {
    title: "Think N Buy",
    description:
      "A comprehensive product search engine and comparison shopping platform that aggregates offerings from diverse online retailers onto a single, user-friendly interface. Built with Node.js, PostgreSQL, Express.js, React, and Axios. Features responsive design, product categorization, and price comparison to empower informed purchasing decisions.",
    tech: ["Node.js", "PostgreSQL", "Express.js", "React", "Axios", "Bootstrap"],
    liveUrl: "https://thinknbuy.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
];

export const experiences = [
  {
    title: "Senior Full Stack Developer",
    period: "2023 — Present",
    description:
      "Leading development of AI-powered SaaS products. Architected microservices infrastructure handling 100K+ daily active users. Mentoring junior developers and driving technical decisions.",
    tech: ["React.js", "Node.js", "Golang", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "Full Stack Developer",
    period: "2021 — 2023",
    description:
      "Built and maintained multiple client-facing applications. Implemented CI/CD pipelines reducing deployment time by 70%. Developed RESTful APIs and real-time features.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Docker"],
  },
  {
    title: "Backend Developer",
    period: "2020 — 2021",
    description:
      "Developed scalable backend services and APIs. Optimized database queries resulting in 40% performance improvement. Implemented authentication and authorization systems.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker", "Linux"],
  },
  {
    title: "Junior Web Developer",
    period: "2019 — 2020",
    description:
      "Created responsive websites and web applications for diverse clients. Collaborated with designers to implement pixel-perfect UIs. Gained expertise in modern frontend frameworks.",
    tech: ["React.js", "JavaScript", "CSS3", "Node.js", "MongoDB"],
  },
];

export const contactInfo = {
  email: "ahmadbasharatali786@gmail.com",
  location: "Pakistan",
  availability: "Open to freelance and full-time opportunities",
};
