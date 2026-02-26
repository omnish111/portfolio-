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
    period: "3 months",
    summary: "Worked on a project to build a web application for a client.",
    highlights: [" I am completed my internship in Reactjs."],
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
    description:
      "Developed Money-Health, a responsive web-based EMI Calculator that provides real-time loan calculations including EMI, total interest, and repayment breakdown.Designed a clean user-friendly interface with optimized logic for instant results and deployed the application on Vercel for fast global access.",
    tags: ["React.js", "Vercel", "Github"],
    live: "https://money-health.vercel.app/",
    // repo: "https://github.com/example/lighthouse",
  },
];

export const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"],
  Backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "REST APIs",
    "MongoDB",
    "MySQL",
  ],
  Data: ["MySQL", "MongoDB", "AWS", "Vercel"],
  DevOps: ["Git", "GitHub", "GitLab", "VS Code", "Cursor", "MongoDB Compass"],
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
