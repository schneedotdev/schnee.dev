import { projects } from "@/lib/projects";
import Link from "next/link";

type ProjectProps = {
  link: string;
  title: string;
  tech: string[];
  year: string;
};

const Project = ({ link, title, tech, year }: ProjectProps) => {
  return (
    <a
      className="outside-padding group flex h-full flex-col justify-between gap-3"
      href={`/projects#${link}`}
    >
      <div className="flex items-center gap-2">
        <h3>{title}</h3>
        <div className="mx-1 flex-1 border-t-2 border-dotted border-tertiary group-hover:border-accent"></div>
        <span>{year}</span>
      </div>
      <ul className="flex flex-wrap gap-2 text-xs text-tertiary">
        {tech.map((t, i) => {
          return (
            <li key={i}>
              <span className="group-hover:text-accent">#</span>
              <span className="group-hover:text-secondary">{t}</span>
            </li>
          );
        })}
      </ul>
    </a>
  );
};

const Projects = () => {
  return (
    <div className="mt-20">
      <h2 className="text-primary">
        <Link href="/projects">Projects</Link>
      </h2>

      <section className="mt-10 flex flex-col gap-7">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            link={project.title}
            tech={project.technologies}
            year={project.year || "'23"}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
