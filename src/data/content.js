export const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  greeting: "Hi, I'm",
  name: "Omnish Kasundra",
  title: "Full Stack Developer",
  description:
    "I'm a full stack developer with a passion for building web applications that are both functional and aesthetically pleasing.",
  // the uploaded resume is stored in `public/resume.pdf/omnish_resume (1).pdf`
  // use the URL-encoded filename so the browser requests the correct file
  ctaPrimary: {
    label: "Download Resume",
    href: "/resume.pdf/omnish_resume.pdf",
  },
  ctaSecondary: { label: "Get in Touch", href: "/contact" },
  socials: [],
};

// Professional summary for the home page.
// Note: user is a fresher / beginner, so the tone highlights eagerness to learn and foundational skills.
export const professionalSummary =
  "I am a fresher and beginner in web development, eager to learn and grow. I have foundational knowledge of JavaScript, React, HTML, and CSS, and I'm building small projects to improve my skills. I am enthusiastic, quick to pick up new tools, and excited to contribute to real-world projects while learning from experienced developers.";

export const experience = [
  {
    company: "Elsner Technology Pvt. Ltd.",
    role: "Intern",
    period: "May 2025 - June 2025",
    summary: "Worked on a project to build a web application for a client.",
    highlights: [" I am completed my internship as Frontend Developer."],
  },
  {
    company: "ApTech Enterprise Pvt. Ltd.",
    role: "Intern",
    period: "Jan 2026 - Present",
    summary: "Working on a project to build a web applications for a client.",
    highlights: [" I am currently prsuing my internship as Full Stack Developer."],
  },
  // {
  //   company: "Freelance",
  //   role: "Freelance Developer",
  //   period: "2020 — 2022",
  //   summary:
  //     "Bootstrapped a creator analytics platform powering 8-figure revenue streams, scaling infra from MVP to enterprise.",
  //   highlights: [
  //     "Multi-tenant RBAC",
  //     "Streaming dashboards",
  //     "Design system v2",
  //   ],
  // },
  // {
  //   company: "Freelance",
  //   role: "Product Engineer",
  //   period: "2017 — 2020",
  //   summary:
  //     "Partnered with agencies and startups to prototype marketing sites, AR experiences, and immersive commerce launches.",
  //   highlights: [
  //     "WebGL experiences",
  //     "Headless commerce",
  //     "Jamstack workflows",
  //   ],
  // },
];

export const projects = [
  {
    title: "Money Health(EMI Calculator)",
    description: [
      "Developed Money-Health, a responsive web-based EMI Calculator that computes monthly EMI, total interest, and total repayment based on loan amount, interest rate, and tenure.",
      "Implemented real-time loan calculation logic using JavaScript, enabling instant result updates as users modify loan parameters.",
      "Designed a clean, intuitive, and mobile-responsive UI to provide a smooth user experience across devices.",
      "Deployed the application on Vercel, enabling fast global delivery with automatic builds and continuous deployment.",
    ],
    tags: ["React.js", "Vercel", "Github"],
    live: "https://money-health.vercel.app/",
    // repo: "https://github.com/example/lighthouse",
  },
  {
    title: "Private Knowledge Q&A",
    description: [
      "Built a full-stack AI document Q&A platform using React (Vite), Node.js, Express, and OpenAI API to generate context-aware answers from uploaded documents.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline to process uploaded files, extract relevant context, and produce citation-based AI responses.",
      "Developed secure document upload and backend APIs for document processing, query handling, and reliable response generation with fallback logic.",
      "Designed a responsive chat-style UI and deployed the platform on Vercel for scalable performance and fast global access.",
    ],
    tags: ["React.js", "Node.js", "Integrated AI", "Vercel", " Github"],
    live: "https://private-knowledge-q-a-client-k4vj.vercel.app/",
    // repo: "https://github.com/example/lighthouse",
  },
  {
    title: "EliteCard – Digital Profile & Vehicle Safety SaaS",
    description: [
      "Architected dual-tier SaaS (Free vs. Pro) with microservices backend, RBAC, MVC & RESTful APIs — live with 99.9%+ uptime.",
      "Built 20+ FastAPI + MongoDB APIs; zero unauthorized access incidents in production.",
      "Redis session caching + pub/sub; RabbitMQ event-driven queues between microservices; Razorpay, webhook.",
      "Integrated OpenAI & Claude APIs with LangChain for automated profile onboarding — reduced manual setup by 60%.",
      "Full DevOps: Nginx, PM2, SSL/TLS, Docker containerization, GitHub Actions CI/CD; Socket.IO real-time vehicle safety alerts.",
    ],
    tags: ["Python", "FastAPI", "React.js", "Next.js", "MongoDB", "Socket.IO", "RazorPay", "JWT", "DigitalOcean VPS", "GitHub Actions", "CI/CD"],
    live: "https://elitecard.live/",
    // repo: "https://github.com/example/lighthouse",
  },
];

export const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "Python"],
  Frontend: ["React.js", "Next.js", "Context API", "React Hooks", "Tailwind CSS", "Responsive Design", "Code Splitting", "Lazy Loading"],
  Backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "RESTful APIs",
    "Microservices",
    "MVC",
    "JWT Auth",
    "Socket.IO",
    "LangChain",
    "LangGraph",
    "Prompt Engineering",
    "Rate Limiting",
  ],
  "Msg & Cache": [
    "Redis (caching, pub/sub)",
    "RabbitMQ (message queuing, event-driven architecture)"
  ],
  "AI & LLM": [
    "OpenAI API",
    "Claude API",
    "LangChain",
    "RAG pipelines",
    "Vector DB (basics)",
    "ChatGPT, Gemini, Cursor, Google Antigravity — daily production usage"
  ],
  "Databases": [
    "MongoDB (Self-hosted & Atlas)",
    "MySQL",
    "Query Optimization",
    "Indexing"
  ],
  "Cloud/DevOps": [
    "DigitalOcean VPS",
    "Linux",
    "Nginx",
    "PM2",
    "SSL/TLS",
    "Vercel",
    "GitHub Actions CI/CD",
    "AWS (basics)",
    "JWT",
    "RBAC"
  ],
  "Tools": [
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Cursor IDE",
    "Google Antigravity"
  ],
};

export const contact = {
  email: "omnishkasundra@gmail.com",
  phone: "+91 7862846567",
  location: "Ahmedabad, Gujarat, India",
  availableFor:
    "Product engineering roles, creative dev partnerships, rapid prototyping sprints.",
  socials: [
    {
      label: "LinkedIn : linkedin.com/in/omnish-kasundra/",
      href: "https://www.linkedin.com/in/omnish-kasundra/",
    },
    {
      label: "GitHub : github.com/omnish111",
      href: "https://github.com/omnish111",
    },
    {
      label: "GitLab : gitlab.com/omnishkasundra/portfolio",
      href: "https://gitlab.com/omnishkasundra/portfolio",
    },
  ],
};
