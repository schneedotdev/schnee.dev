export type Technologies =
  | "react"
  | "javascript"
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
  | "contentlayer"
  | "postgresql"
  | "prisma"
  | "jwt";

export type ProjectProps = {
  src: `${string}.jpg` | "backend only";
  site: string;
  repo: `https://github.com/${string}`;
  title: string;
  description: string;
  technologies: Technologies[];
  year?: `'${number}`;
};

export const projects: ProjectProps[] = [
  {
    src: "schneedotdev.jpg",
    site: "https://schnee.dev/",
    title: "schnee.dev",
    repo: "https://github.com/brianschnee/schnee.dev",
    technologies: [
      "nextjs",
      "typescript",
      "react",
      "contentlayer",
      "mdx",
      "tailwind",
    ],
    description:
      "Schnee.dev is my meticulously crafted personal portfolio website, where performance and dynamic rendering of components take center stage. Developed using the state-of-the-art Next.js 13 App Router architecture, it harnesses the capabilities of React Server Components, file-based routing, and more, to elevate functionality, speed, and scalability. Leveraging contentlayer and MDX, the blog pages are dynamically generated from markdown and are provided their own dedicated routes, adding flexibility and seamless content management.",
    year: "'23",
  },
  {
    src: "climbers.jpg",
    site: "https://climbersconnect.up.railway.app/",
    repo: "https://github.com/brianschnee/climbers-connect",
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
      "Climbers Connect is a social media platform connecting rock climbers from around the world. With its main emphasis on sharing climbing experiences and adventures, this application aims to help you build meaningful connections within the thriving climbing community.",
    year: "'23",
  },
  {
    src: "attri.jpg",
    site: "https://attrienterprises.vercel.app/",
    repo: "https://github.com/brianschnee/attrienterprises-optimized",
    title: "attri enterprises",
    technologies: ["astro", "typescript", "preact", "css", "vercel"],
    description:
      "Attrienterprises.com was a website I developed for a prominent company based in Brooklyn, New York. Taking charge of the entire design and development process, I later focused on improving web performance within the company. Through various code optimizations, including static-site generation (SSG), image optimization, reduction of requests and file sizes, asset bundling, partial rendering, and lazy hydration, I successfully achieved a 60% decrease in mobile page load times and a 71% decrease in desktop page load times.",
    year: "'23",
  },
  {
    src: "brianschnee.jpg",
    site: "https://brianschnee.com/",
    repo: "https://github.com/brianschnee/portfolio-optimized",
    title: "brianschnee.com",
    technologies: ["astro", "typescript", "preact", "css", "netlify"],
    description:
      "Brianschnee.com served as the initial version of my personal portfolio, intended to attract an audience for freelance development. The application was crafted with a focus on optimal performance and captivating user interface. The website utilizes Static Generation, enabling instantaneous delivery of assets and interactivity for end users.",
    year: "'23",
  },
  {
    src: "backend only",
    site: "backend only",
    repo: "https://github.com/brianschnee/changelog",
    title: "changelog",
    technologies: [
      "typescript",
      "node",
      "express",
      "postgresql",
      "prisma",
      "jwt",
    ],
    description: "",
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
      "Timeato is a productivity-centered application that harnesses the benefits of pomodoro study sessions. By organizing your study time into focused work intervals combined with regular breaks, Timeato has been proven to enhance work endurance and performance. The application empowers you to allocate dedicated time for focused tasks, enabling you to maximize your productivity during study sessions.",
    year: "'22",
  },
  {
    src: "findadev.jpg",
    site: "https://find-a-dev.up.railway.app/",
    repo: "https://github.com/brianschnee/find-a-dev",
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
      "Find a dev is an application with a strong community focus, dedicated to facilitating tutoring opportunities for aspiring developers in their journey of growth. Discover experienced developers who are eager to share their knowledge and offer tutoring sessions. Utilize powerful filtering options to find developers based on specific technologies and areas of expertise. Connect with new developers, forge friendships, and make a meaningful impact in the community through mentorship and collaboration.",
    year: "'22",
  },
];
