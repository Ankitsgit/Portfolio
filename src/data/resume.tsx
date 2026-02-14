import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ankit Shukla",
  initials: "AS",
  url: "https://www.adityajhaa.co/",
  location: "Gwalior, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-stack software engineer building scalable, user-focused web applications.",
  summary:
    "Full-stack software engineer building scalable, user-focused web applications using React, Node.js, Express, and MongoDB. Strong foundation in Data Structures & Algorithms, REST APIs, authentication, and database design. Proven at shipping production-ready systems with performance, security, and clean architecture in mind.",

  avatarUrl: "/pfp.jpeg",

  skills: [
    "JavaScript (ES6+)",
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Git",
    "GitHub",
    "Postman",
    "REST APIs",
    "JWT Auth",
  ],
  services: [
    {
      title: "Web3 Development",
      description: "Smart contracts, DeFi protocols, NFT platforms, and blockchain integrations. Experience with Solidity, Rust, and multiple chains.",
      icon: "🔗",
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks. React, Next.js, TypeScript, Node.js, and cloud deployment.",
      icon: "⚡",
    },
    {
      title: "Smart Contract Auditing",
      description: "Security-focused smart contract reviews and optimizations. Ensuring your contracts are production-ready and secure.",
      icon: "🔒",
    },
    {
      title: "SaaS Development",
      description: "Scalable SaaS applications with modern architecture. From MVP to production with performance optimization.",
      icon: "🚀",
    },
  ],
  availability: {
    status: "Available",
    message: "Open to new freelance projects and collaborations",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Resume", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "ankit77us@gmail.com",
    tel: "+91-9753079128",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ankitsgit",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankit-shuklaa/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ankit77us@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bhardwaj INet",
      href: "https://www.bhardwajnetwork.com",
      badges: ["Internship"],
      location: "Ahmedabad, Gujarat",
      title: "Software Development Intern (MERN Stack)",
      logoUrl: "",
      start: "July 2025",
      end: "December 2025",
      description:
        "Built and deployed client websites using the MERN stack. Converted business requirements into responsive, SEO-friendly UIs, integrated REST APIs, optimized performance and cross-browser compatibility, and handled domain setup, hosting, and production deployment via cPanel on Linux/Windows servers.",
    },
  ],

  education: [
    {
      school: "Samrat Ashok Technological Institute, Vidisha",
      href: "",
      degree: "B.Tech in Information Technology",
      logoUrl: "",
      start: "2022",
      end: "Expected June 2026",
      description:
        "CGPA: 7.92. Relevant coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Software Engineering, Discrete Mathematics.",
    },
    {
      school: "Greenwood Public School, Gwalior (CBSE)",
      href: "",
      degree: "Class XII – Senior Secondary",
      logoUrl: "",
      start: "2021",
      end: "2021",
      description: "Percentage: 86%",
    },
    {
      school: "Greenwood Public School, Gwalior (CBSE)",
      href: "",
      degree: "Class X – Secondary",
      logoUrl: "",
      start: "2019",
      end: "2019",
      description: "Percentage: 90.6%",
    },
  ],

  pprojects: [
    {
      title: "UstaadX – Peer-to-Peer Skill Exchange Platform",
      href: "https://ustaad-x.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Peer-to-peer skill exchange platform where users book and manage learning sessions. Features real-time chat with Socket.IO, JWT authentication, dashboards for profiles and bookings, and a responsive React + Tailwind UI.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Tailwind CSS",
      ],
      links: [
        { type: "Website", href: "https://ustaad-x.vercel.app/" },
        { type: "Source", href: "https://github.com/Ankitsgit/Ustaadx-backend" },
      ],
      image: "/ustaadx.png",
      video: "",
    },

    {
      title: "Tripbozo – Travel Utility SaaS Platform",
      href: "https://tripbozo.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Full-stack travel SaaS delivering country-specific utilities such as apps, eSIMs, and emergency info. Built REST APIs with Django, Redis-backed sessions, Celery background tasks, and an SEO-friendly Next.js frontend.",
      technologies: [
        "Next.js",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Celery",
      ],
      links: [
        { type: "Website", href: "https://tripbozo.vercel.app/" },
        { type: "Source", href: "https://github.com/Ankitsgit/tripbozo" },
      ],
      image: "/tripbozo.png",
      video: "",
    },
  ],

  hackathons: [
    {
      // title: "",
      // dates: "November 23rd - 25th, 2018",
      // location: "",
      // description:
      //   "",
      // image:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      // links: [],
    },
  ],
} as const;
