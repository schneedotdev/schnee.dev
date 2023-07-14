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
          <h2 className="text-2xl text-primary">{title}</h2>
          <div className="flex items-center gap-2">
            <a href={repo}>
              <Icon
                stroke={{
                  color: "stroke-primary",
                  hover: "hover:stroke-primary",
                  width: 1.25,
                }}
                content={
                  <>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </>
                }
              />
            </a>
            <a href={site}>
              <Icon
                stroke={{
                  color: "stroke-primary",
                  hover: "hover:stroke-secondary",
                  width: 1.25,
                }}
                content={
                  <>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </>
                }
              />
            </a>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs text-tertiary">
          {technologies.map((tech) => {
            return (
              <li key={tech}>
                <div className="flex gap-1 rounded-md bg-teal-900 bg-opacity-30 px-2 py-1 text-teal-200">
                  <span>{tech}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <hr className="border-tertiary opacity-40" />
        <p className="leading-2text-tertiary">{description}</p>
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
