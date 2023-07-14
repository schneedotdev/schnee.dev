export type ProjectProps = {
  src: string;
  site: string;
  repo: string;
  title: string;
  description: string;
  technologies: string[];
};

export const projects: ProjectProps[] = [
  {
    src: "schneedotdev.jpg",
    site: "https://schnee.dev/",
    title: "schnee.dev",
    repo: "https://github.com/brianschnee/schnee.dev",
    technologies: [
      "next.js",
      "typescript",
      "react-server-components",
      "mdx",
      "tailwind",
    ],
    description:
      "My personal portfolio site updated with performance and dynamic rendering of components in mind. The app is built with the recent Next.js App Router architecture and React Server Componets.",
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
      "passportjs",
      "railway",
    ],
    description:
      "Interact with other climbers, share the climbs you've completed, rate the climbs and create a better connection to the community we all know and love.",
  },
  {
    src: "_brianschnee.jpg",
    site: "https://brianschnee.com/",
    repo: "https://github.com/brianschnee/portfolio-optimized",
    title: "brianschnee.com",
    technologies: ["astrobuild", "typescript", "preact", "css", "netlify"],
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    src: "attri.jpg",
    site: "https://attrienterprises.vercel.app/",
    repo: "https://github.com/brianschnee/attrienterprises-optimized",
    title: "attri enterprises",
    technologies: ["astrobuild", "typescript", "preact", "css", "vercel"],
    description:
      "Optimized version of Attri Enterprises Website. Decreased page load times by 60% on mobile and 71% on desktops through static-site generation (SSG), image optimization, minimizing the number and size of requests, asset bundling, partial rendering, and lazy hydration.",
  },
  {
    src: "findadev.jpg",
    site: "https://find-a-dev.up.railway.app/",
    repo: "https://github.com/brianschnee/find-a-dev",
    title: "find a dev",
    technologies: ["node", "express", "mongodb", "ejs", "css", "railway"],
    description:
      "Find developers who are willing to offer time to tutor! Filter through a list of devs by technologiesnology.",
  },
  {
    src: "timeato.jpg",
    site: "https://timeato.up.railway.app/",
    repo: "https://github.com/devv-work/timeato",
    title: "timeato",
    technologies: [
      "node",
      "express",
      "mongodb",
      "mongoose",
      "passportjs",
      "ejs",
      "railway",
    ],
    description:
      "Track productivity, allot time for focusing on tasks, and increase your effectiveness during study sessions ",
  },
];
