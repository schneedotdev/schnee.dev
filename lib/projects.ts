export type Technologies =
  | "react"
  | "javascript"
  | "go"
  | "rust"
  | "cli"
  | "clap"
  | "package"
  | "library"
  | "utility"
  | "productivity"
  | "notes"
  | "collections"
  | "language-design"
  | "parsing"
  | "code-gen"
  | "interpreter"
  | "cloudinary"
  | "node"
  | "express"
  | "mongodb"
  | "mongoose"
  | "passport"
  | "vercel"
  | "tailwind"
  | "mdx"
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
    technologies: ["rust", "library", "utility"],
    description:
      "A lightweight Rust library for managing decks of cards. Deal provides reusable primitives for creating, shuffling, and dealing cards in card-based applications and games.",
    createdAt: "2025-02-07T23:11:21Z",
    year: "'25",
  },
  {
    repo: "https://github.com/schneedotdev/til",
    title: "til",
    technologies: ["rust", "cli", "clap", "productivity", "notes"],
    description:
      "A command-line tool for capturing and revisiting short technical notes. TIL keeps useful discoveries organized and accessible directly from the terminal.",
    createdAt: "2024-08-09T23:40:26Z",
    year: "'24",
  },
  {
    repo: "https://github.com/schneedotdev/pizza",
    title: "pizza",
    technologies: ["go", "package", "collections", "utility"],
    description:
      "A Go package that provides chainable helper methods for working with slices. Pizza explores a more composable API for common collection transformations.",
    createdAt: "2024-07-18T00:25:45Z",
    year: "'24",
  },
  {
    repo: "https://github.com/schneedotdev/rust-driven-interpreter",
    title: "rust driven interpreter",
    technologies: ["rust", "interpreter", "language-design", "parsing"],
    description:
      "A programming language interpreter implemented in Rust. The project explores parsing, evaluation, environments, and the core mechanics behind executing source code.",
    createdAt: "2024-03-02T02:32:19Z",
    year: "'24",
  },
  {
    repo: "https://github.com/schneedotdev/compose",
    title: "compose",
    technologies: ["rust", "cli", "clap", "code-gen"],
    description:
      "A Rust command-line tool for generating Rust code from a simpler input format. Compose focuses on reducing repetitive implementation work through code generation.",
    createdAt: "2023-08-30T03:50:29Z",
    year: "'23",
  },
  {
    src: "schneedotdev.jpg",
    title: "schnee.dev",
    repo: "https://github.com/schneedotdev/schnee.dev",
    technologies: ["nextjs", "typescript", "react", "mdx", "tailwind"],
    description:
      "A personal website for showcasing projects, writing, and technical work. Built with the Next.js App Router, React Server Components, Tailwind, and an MDX-powered blog.",
    createdAt: "2023-06-27T23:07:02Z",
    year: "'23",
  },
  {
    repo: "https://github.com/schneedotdev/changelog",
    title: "changelog",
    technologies: [
      "typescript",
      "node",
      "express",
      "postgresql",
      "prisma",
      "jwt",
    ],
    description:
      "A backend API for managing changelog entries and release notes. The project focuses on API design, authentication, relational data modeling, and structured persistence with PostgreSQL and Prisma.",
    createdAt: "2022-12-30T04:14:37Z",
    year: "'22",
  },
  {
    src: "attri.jpg",
    repo: "https://github.com/schneedotdev/attrienterprises-optimized",
    title: "attri enterprises",
    technologies: ["astro", "typescript", "preact", "vercel"],
    description:
      "A performance-focused marketing site for a Brooklyn-based business. Static generation, image optimization, reduced bundle sizes, and lazy hydration improved mobile load times by 60% and desktop load times by 71%.",
    createdAt: "2023-03-10T22:59:15Z",
    year: "'23",
  },
  {
    src: "climbers.jpg",
    repo: "https://github.com/schneedotdev/climbers-connect",
    title: "climbers connect",
    technologies: [
      "typescript",
      "node",
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
    repo: "https://github.com/schneedotdev/portfolio-optimized",
    title: "brianschnee.com",
    technologies: ["astro", "typescript", "preact", "netlify"],
    description:
      "An earlier version of my personal portfolio focused on freelance development work. The site was built as a fast, static experience with an emphasis on presentation and performance.",
    createdAt: "2023-03-31T06:34:30Z",
    year: "'23",
  },
];

export const projects = [...unsortedProjects].sort((a, b) =>
  b.createdAt.localeCompare(a.createdAt),
);
