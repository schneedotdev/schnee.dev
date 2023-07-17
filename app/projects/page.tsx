import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";
import { type ProjectProps, projects } from "@/lib/projects";
import Icon from "@/components/ui/Icon";

const Project = ({
  src,
  site,
  repo,
  title,
  description,
  technologies,
}: ProjectProps) => {
  return (
    <li className="flex flex-col rounded-md">
      <Image
        className="w-full rounded-t-md"
        src={`/assets/${src}`}
        width={610}
        height={610}
        alt={`preview of pages from ${site} website`}
      />
      <section className="flex flex-col gap-3 rounded-b-md bg-[#f2f2f308] p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-primary">{title}</h2>
          <div className="flex items-center gap-2">
            <a href={repo}>
              <Icon
                name="github"
                width="18"
                height="18"
                stroke="stroke-primary"
                strokeWidth={1.25}
                hover="hover:stroke-secondary"
              />
            </a>
            <a href={site}>
              <Icon
                name="external-link"
                width="18"
                height="18"
                stroke="stroke-primary"
                strokeWidth={1.25}
                hover="hover:stroke-secondary"
              />
            </a>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs text-tertiary">
          {technologies.map((tech, i) => {
            return (
              <li key={i}>
                <div
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-secondary"
                  style={{ background: `var(--bg-${tech})` }}
                >
                  <Icon name={tech} width={15} height={15} />
                  <span style={{ color: `var(--${tech})` }}>{tech}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <hr className="border-tertiary opacity-40" />
        <p className="leading-2 text-secondary">{description}</p>
      </section>
    </li>
  );
};

export default function ProjectPage() {
  return (
    <>
      <Heading content="Projects" emoji="🔨" />
      <Summary content="As a Full Stack Software Engineer, I'm confident with an array of tools and technologies. I get a kick out of transforming ideas into code. Check out my work and play around with the projects!" />
      <hr className="mt-10 border-tertiary" />
      <ul className="mt-10 flex flex-col gap-12">
        {projects.map((props: ProjectProps) => {
          return (
            <Project
              key={props.title}
              src={props.src}
              site={props.site}
              repo={props.repo}
              title={props.title}
              technologies={props.technologies}
              description={props.description}
            />
          );
        })}
      </ul>
    </>
  );
}
