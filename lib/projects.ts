export type Technologies =
  | "react"
  | "javascript"
  | "go"
  | "rust"
  | "cli"
  | "package"
  | "library"
  | "interpreter"
  | "cloudinary"
  | "css"
  | "node"
  | "express"
  | "mongodb"
  | "mongoose"
  | "passport"
  | "vercel"
  | "tailwind"
  | "mdx"
  | "ejs"
  | "railway"
  | "typescript"
  | "nextjs"
  | "netlify"
  | "astro"
  | "preact"
  | "postgresql"
  | "prisma"
  | "jwt";

export type ProjectProps = {
  src?: `${string}.jpg`;
  site?: string;
  repo: `https://github.com/${string}`;
  title: string;
  description: string;
  technologies: Technologies[];
  createdAt: string;
  year?: `'${number}`;
};

const unsortedProjects: ProjectProps[] = [
  {
    repo: "https://github.com/schneedotdev/deal",
    title: "deal",
    technologies: ["rust", "library"],
    description:
      "A lightweight Rust library for managing decks of cards. Deal provides reusable primitives for creating, shuffling, and dealing cards in card-based applications and games.",
    createdAt: "2025-02-07T23:11:21Z",
    year: "'25",
  },
  {
    repo: "https://github.com/schneedotdev/til",
    title: "til",
    technologies: ["rust", "cli"],
    description:
      "A command-line tool for capturing and revisiting short technical notes. TIL keeps useful discoveries organized and accessible directly from the terminal.",
    createdAt: "2024-08-09T23:40:26Z",
    year: "'24",
  },
  {
    repo: "https://github.com/schneedotdev/pizza",
    title: "pizza",
    technologies: ["go", "package"],
    description:
      "A Go package that provides chainable helper methods for working with slices. Pizza explores a more composable API for common collection transformations.",
    createdAt: "2024-07-18T00:25:45Z",
    year: "'24",
  },
  {
    repo: "https://github.com/schneedotdev/rust-driven-interpreter",
    title: "rust driven interpreter",
    technologies: ["rust", "interpreter"],
    description:
      "A programming language interpreter implemented in Rust. The project explores parsing, evaluation, environments, and the core mechanics behind executing source code.",
    createdAt: "2024-03-02T02:32:19Z",
    year: "'24",
  },
  {
    repo: "https://github.com/schneedotdev/compose",
    title: "compose",
    technologies: ["rust", "cli"],
    description:
      "A Rust command-line tool for generating Rust code from a simpler input format. Compose focuses on reducing repetitive implementation work through code generation.",
    createdAt: "2023-08-30T03:50:29Z",
    year: "'23",
  },
  {
    src: "schneedotdev.jpg",
    site: "https://schnee.dev/",
    title: "schnee.dev",
    repo: "https://github.com/schneedotdev/schnee.dev",
    technologies: ["nextjs", "typescript", "react", "mdx", "tailwind"],
    description:
      "A personal website for showcasing projects, writing, and technical work. Built with the Next.js App Router, React Server Components, Tailwind, and an MDX-powered blog.",
    createdAt: "2023-06-27T23:07:02Z",
    year: "'23",
  },
  {
    src: "attri.jpg",
    site: "https://attrienterprises.vercel.app/",
    repo: "https://github.com/schneedotdev/attrienterprises-optimized",
    title: "attri enterprises",
    technologies: ["astro", "typescript", "preact", "css", "vercel"],
    description:
      "A performance-focused marketing site for a Brooklyn-based business. Static generation, image optimization, reduced bundle sizes, and lazy hydration improved mobile load times by 60% and desktop load times by 71%.",
    createdAt: "2023-03-10T22:59:15Z",
    year: "'23",
  },
  {
    src: "climbers.jpg",
    site: "https://climbersconnect.up.railway.app/",
    repo: "https://github.com/schneedotdev/climbers-connect",
    title: "climbers connect",
    technologies: [
      "typescript",
      "node",
      "ejs",
      "css",
      "mongodb",
      "mongoose",
      "cloudinary",
      "passport",
      "railway",
    ],
    description:
      "A full-stack social platform for rock climbers to share experiences and connect with others in the climbing community. The application includes profiles, authentication, image uploads, and community-oriented features.",
    createdAt: "2022-09-11T21:19:54Z",
    year: "'23",
  },
  {
    src: "brianschnee.jpg",
    site: "https://brianschnee.com/",
    repo: "https://github.com/schneedotdev/portfolio-optimized",
    title: "brianschnee.com",
    technologies: ["astro", "typescript", "preact", "css", "netlify"],
    description:
      "An earlier version of my personal portfolio focused on freelance development work. The site was built as a fast, static experience with an emphasis on presentation and performance.",
    createdAt: "2023-03-31T06:34:30Z",
    year: "'23",
  },
  {
    src: "timeato.jpg",
    site: "https://timeato.up.railway.app/",
    repo: "https://github.com/devv-work/timeato",
    title: "timeato",
    technologies: [
      "javascript",
      "node",
      "express",
      "mongodb",
      "mongoose",
      "passport",
      "ejs",
      "railway",
    ],
    description:
      "A Pomodoro-style productivity application for organizing work into focused sessions and scheduled breaks. Timeato helps users structure study or work sessions around consistent time blocks.",
    createdAt: "2022-08-31T22:31:39Z",
    year: "'22",
  },
  {
    src: "findadev.jpg",
    site: "https://find-a-dev.up.railway.app/",
    repo: "https://github.com/schneedotdev/find-a-dev",
    title: "find a dev",
    technologies: [
      "javascript",
      "node",
      "express",
      "mongodb",
      "ejs",
      "css",
      "railway",
    ],
    description:
      "A mentorship platform for aspiring developers to find tutors by technology and area of expertise. Find a dev focuses on connecting learners with experienced developers who can provide targeted guidance.",
    createdAt: "2022-08-04T01:13:25Z",
    year: "'22",
  },
];

export const projects = [...unsortedProjects].sort((a, b) =>
  b.createdAt.localeCompare(a.createdAt),
);
